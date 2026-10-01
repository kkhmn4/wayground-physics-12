/**
 * Mini-Game 1: 🎴 Lật Thẻ Trí Nhớ Trực Quan (Visual Memory Card Match)
 * Pair matching between real scientific photo and corresponding physical law/concept.
 */

class MemoryMatchGame {
    constructor(manager) {
        this.manager = manager;
        this.cards = [];
        this.flippedCards = [];
        this.matchedPairs = 0;
        this.totalPairs = 0;
        this.turns = 0;
        this.score = 0;
        this.combo = 0;
        this.startTime = null;
        this.timerInterval = null;
        this.isLocked = false;
    }

    start(unitKey = 'all') {
        const container = document.getElementById('active-game-container');
        if (!container) return;

        // Filter pairs by lesson
        let availablePairs = [...MINIGAMES_DATA.memoryPairs];
        if (unitKey !== 'all') {
            availablePairs = availablePairs.filter(p => p.unit === unitKey);
        }

        // Shuffle pairs and pick 6 pairs (12 cards) or 8 pairs (16 cards)
        availablePairs.sort(() => Math.random() - 0.5);
        const pairsToPlay = availablePairs.slice(0, 6);
        this.totalPairs = pairsToPlay.length;
        this.matchedPairs = 0;
        this.turns = 0;
        this.score = 0;
        this.combo = 0;
        this.flippedCards = [];
        this.isLocked = false;
        this.startTime = Date.now();

        // Build 12 cards (each pair produces 1 photo card + 1 concept card)
        this.cards = [];
        pairsToPlay.forEach(pair => {
            // Card A: Photo Card
            this.cards.push({
                pairId: pair.id,
                type: 'photo',
                photo: pair.photo,
                title: pair.title,
                desc: pair.desc
            });
            // Card B: Concept Card
            this.cards.push({
                pairId: pair.id,
                type: 'concept',
                title: pair.title,
                desc: pair.desc
            });
        });

        // Shuffle cards
        this.cards.sort(() => Math.random() - 0.5);

        // Render UI
        container.innerHTML = `
            <div class="minigame-hud">
                <div class="hud-stat-badge">
                    <span>Cặp tìm được:</span>
                    <strong id="mem-matched-count">0 / ${this.totalPairs}</strong>
                </div>
                <div class="hud-stat-badge">
                    <span>Lượt lật:</span>
                    <strong id="mem-turns-count">0</strong>
                </div>
                <div class="hud-stat-badge">
                    <span>Thời gian:</span>
                    <strong id="mem-timer-val">00:00</strong>
                </div>
                <div class="hud-combo-badge" id="mem-combo-badge" style="display: none;">
                    🔥 Combo x<span id="mem-combo-val">1</span>
                </div>
            </div>

            <div class="memory-board" id="memory-board-grid"></div>
        `;

        const boardEl = document.getElementById('memory-board-grid');

        this.cards.forEach((card, idx) => {
            const cardEl = document.createElement('div');
            cardEl.className = 'memory-card';
            cardEl.dataset.idx = idx;

            let frontHTML = '';
            if (card.type === 'photo') {
                frontHTML = `
                    <div class="memory-card-face memory-card-front is-photo">
                        <img src="${card.photo}?v=6.0" alt="${card.title}" loading="lazy">
                        <div class="memory-card-photo-tag">${card.title}</div>
                    </div>
                `;
            } else {
                frontHTML = `
                    <div class="memory-card-face memory-card-front is-concept">
                        <div class="memory-concept-title">💡 ${card.title}</div>
                        <div class="memory-concept-desc">${card.desc}</div>
                    </div>
                `;
            }

            cardEl.innerHTML = `
                <div class="memory-card-face memory-card-back">
                    <div class="memory-card-back-pattern">
                        ⚛️
                        <span>VẬT LÍ 12</span>
                    </div>
                </div>
                ${frontHTML}
            `;

            cardEl.addEventListener('click', () => this.handleCardClick(cardEl, idx));
            boardEl.appendChild(cardEl);
        });

        // Start Timer
        if (this.timerInterval) clearInterval(this.timerInterval);
        this.timerInterval = setInterval(() => {
            const elapsedSec = Math.floor((Date.now() - this.startTime) / 1000);
            const mm = String(Math.floor(elapsedSec / 60)).padStart(2, '0');
            const ss = String(elapsedSec % 60).padStart(2, '0');
            const timerEl = document.getElementById('mem-timer-val');
            if (timerEl) timerEl.textContent = `${mm}:${ss}`;
        }, 1000);

        if (window.soundEngine) soundEngine.playClick();
    }

    handleCardClick(cardEl, idx) {
        if (this.isLocked) return;
        if (cardEl.classList.contains('flipped') || cardEl.classList.contains('matched')) return;

        // Flip card
        cardEl.classList.add('flipped');
        if (window.soundEngine) soundEngine.playClick();
        this.flippedCards.push({ el: cardEl, data: this.cards[idx] });

        if (this.flippedCards.length === 2) {
            this.turns++;
            const turnsEl = document.getElementById('mem-turns-count');
            if (turnsEl) turnsEl.textContent = this.turns;
            this.checkMatch();
        }
    }

    checkMatch() {
        const [c1, c2] = this.flippedCards;
        this.isLocked = true;

        if (c1.data.pairId === c2.data.pairId && c1.data.type !== c2.data.type) {
            // MATCH!
            setTimeout(() => {
                c1.el.classList.add('matched');
                c2.el.classList.add('matched');
                this.matchedPairs++;
                this.combo++;
                this.score += 100 + (this.combo * 20);

                const matchedEl = document.getElementById('mem-matched-count');
                if (matchedEl) matchedEl.textContent = `${this.matchedPairs} / ${this.totalPairs}`;

                // Update combo badge
                const comboBadge = document.getElementById('mem-combo-badge');
                const comboVal = document.getElementById('mem-combo-val');
                if (this.combo > 1 && comboBadge && comboVal) {
                    comboBadge.style.display = 'flex';
                    comboVal.textContent = this.combo;
                }

                if (window.soundEngine) soundEngine.playCorrect();

                this.flippedCards = [];
                this.isLocked = false;

                // Check Victory
                if (this.matchedPairs === this.totalPairs) {
                    this.finishGame();
                }
            }, 400);
        } else {
            // MISMATCH!
            this.combo = 0;
            const comboBadge = document.getElementById('mem-combo-badge');
            if (comboBadge) comboBadge.style.display = 'none';

            setTimeout(() => {
                c1.el.classList.remove('flipped');
                c2.el.classList.remove('flipped');
                this.flippedCards = [];
                this.isLocked = false;
            }, 900);
        }
    }

    finishGame() {
        clearInterval(this.timerInterval);
        const elapsedSec = Math.floor((Date.now() - this.startTime) / 1000);
        const mm = String(Math.floor(elapsedSec / 60)).padStart(2, '0');
        const ss = String(elapsedSec % 60).padStart(2, '0');

        // Calculate stars
        let stars = "⭐⭐⭐";
        if (this.turns > this.totalPairs * 2.2) stars = "⭐";
        else if (this.turns > this.totalPairs * 1.5) stars = "⭐⭐";

        setTimeout(() => {
            this.manager.showVictoryModal({
                title: "Xuất Sắc! Bộ Não Trí Nhớ Lượng Tử!",
                stars: stars,
                desc: `Bạn đã ghép chuẩn xác toàn bộ ${this.totalPairs} cặp hình ảnh và khái niệm vật lí!`,
                stats: [
                    { label: "Tổng Lượt Lật", val: `${this.turns} lượt` },
                    { label: "Thời Gian", val: `${mm}:${ss}` },
                    { label: "Điểm Thưởng", val: `${this.score} pts` }
                ],
                onReplay: () => this.start(this.manager.currentLesson)
            });
        }, 600);
    }
}

window.MemoryMatchGame = MemoryMatchGame;
