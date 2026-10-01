/**
 * Mini-Game 3: ⚖️ Phân Loại Hiện Tượng Siêu Tốc (Rapid Physics Sorter)
 * Fast-paced reflex categorization for signs of A & Q, states of matter, and thermometer types.
 */

class RapidPhysicsSorterGame {
    constructor(manager) {
        this.manager = manager;
        this.currentRound = null;
        this.items = [];
        this.currentItemIdx = 0;
        this.score = 0;
        this.combo = 0;
        this.maxCombo = 0;
        this.correctCount = 0;
        this.startTime = null;
        this.isProcessing = false;
    }

    start(unitKey = 'all') {
        const container = document.getElementById('active-game-container');
        if (!container) return;

        let availableRounds = [...MINIGAMES_DATA.sorterRounds];
        if (unitKey !== 'all') {
            availableRounds = availableRounds.filter(r => r.unit === unitKey);
        }
        if (availableRounds.length === 0) {
            availableRounds = [...MINIGAMES_DATA.sorterRounds];
        }

        // Pick one round to play
        this.currentRound = availableRounds[Math.floor(Math.random() * availableRounds.length)];
        this.items = [...this.currentRound.items].sort(() => Math.random() - 0.5);
        this.currentItemIdx = 0;
        this.score = 0;
        this.combo = 0;
        this.maxCombo = 0;
        this.correctCount = 0;
        this.isProcessing = false;
        this.startTime = Date.now();

        this.renderStage();
    }

    renderStage() {
        const container = document.getElementById('active-game-container');
        if (!container || !this.currentRound) return;

        const currentItem = this.items[this.currentItemIdx];
        if (!currentItem) {
            this.finishGame();
            return;
        }

        container.innerHTML = `
            <div class="minigame-hud">
                <div class="hud-stat-badge">
                    <span>Tiến độ:</span>
                    <strong>${this.currentItemIdx + 1} / ${this.items.length}</strong>
                </div>
                <div class="hud-stat-badge">
                    <span>Điểm:</span>
                    <strong id="sort-score-val">${this.score}</strong>
                </div>
                <div class="hud-combo-badge" id="sort-combo-badge" style="${this.combo > 1 ? '' : 'display: none;'}">
                    🔥 Combo x<span id="sort-combo-val">${this.combo}</span>
                </div>
            </div>

            <div class="sorter-stage">
                <div style="text-align: center; margin-bottom: 4px;">
                    <h3 style="font-family: var(--font-heading); color: #FFFFFF; font-size: 17px; margin-bottom: 4px;">⚖️ ${this.currentRound.title}</h3>
                    <p style="font-size: 13px; color: #94A3B8;">${this.currentRound.sub}</p>
                </div>

                <!-- Current item card -->
                <div class="sorter-current-card" id="sorter-card">
                    <img src="${currentItem.image}?v=6.0" alt="" class="sorter-card-img">
                    <div class="sorter-card-text">${currentItem.text}</div>
                </div>

                <div style="font-size: 13px; color: #38BDF8; font-weight: 700;">
                    👇 Nhấp vào đúng thùng phân loại bên dưới:
                </div>

                <!-- Buckets row -->
                <div class="sorter-buckets-row" id="sorter-buckets-grid"></div>
            </div>
        `;

        const bucketsGrid = document.getElementById('sorter-buckets-grid');
        this.currentRound.buckets.forEach(bucket => {
            const bucketEl = document.createElement('div');
            bucketEl.className = 'sorter-bucket-target';
            bucketEl.dataset.bucketId = bucket.id;
            bucketEl.style.borderColor = bucket.color;

            bucketEl.innerHTML = `
                <span class="bucket-icon">${bucket.icon}</span>
                <span class="bucket-title" style="color: ${bucket.color}">${bucket.title}</span>
                <span class="bucket-count-badge">Nhấp để thả thẻ vào đây</span>
            `;

            bucketEl.addEventListener('click', () => this.handleBucketSelect(bucket.id));
            bucketsGrid.appendChild(bucketEl);
        });
    }

    handleBucketSelect(chosenBucketId) {
        if (this.isProcessing) return;
        this.isProcessing = true;

        const currentItem = this.items[this.currentItemIdx];
        const cardEl = document.getElementById('sorter-card');
        const isCorrect = chosenBucketId === currentItem.target;

        if (isCorrect) {
            this.correctCount++;
            this.combo++;
            if (this.combo > this.maxCombo) this.maxCombo = this.combo;
            this.score += 100 + (this.combo * 25);

            if (cardEl) {
                cardEl.style.borderColor = '#10B981';
                cardEl.style.background = 'rgba(16, 185, 129, 0.2)';
                cardEl.style.transform = 'translateY(15px) scale(0.95)';
            }
            if (window.soundEngine) soundEngine.playCorrect();
        } else {
            this.combo = 0;
            if (cardEl) {
                cardEl.style.borderColor = '#EF4444';
                cardEl.style.background = 'rgba(239, 68, 68, 0.2)';
                cardEl.style.transform = 'translateX(-10px)';
                setTimeout(() => { if (cardEl) cardEl.style.transform = 'translateX(10px)'; }, 100);
                setTimeout(() => { if (cardEl) cardEl.style.transform = ''; }, 200);
            }
            if (window.soundEngine) soundEngine.playWrong();
        }

        setTimeout(() => {
            this.currentItemIdx++;
            this.isProcessing = false;
            this.renderStage();
        }, 550);
    }

    finishGame() {
        const elapsedSec = Math.floor((Date.now() - this.startTime) / 1000);
        const mm = String(Math.floor(elapsedSec / 60)).padStart(2, '0');
        const ss = String(elapsedSec % 60).padStart(2, '0');

        const total = this.items.length;
        const accuracy = Math.round((this.correctCount / total) * 100);

        let stars = "⭐⭐⭐";
        if (accuracy < 60) stars = "⭐";
        else if (accuracy < 85) stars = "⭐⭐";

        this.manager.showVictoryModal({
            title: "Tuyệt Vời! Phản Xạ Phân Loại Thần Tốc!",
            stars: stars,
            desc: `Bạn đã hoàn thành thử thách phân loại với độ chính xác ${accuracy}%!`,
            stats: [
                { label: "Chính Xác", val: `${this.correctCount} / ${total}` },
                { label: "Chuỗi Combo Cao Nhất", val: `🔥 x${this.maxCombo}` },
                { label: "Thời Gian", val: `${mm}:${ss}` }
            ],
            onReplay: () => this.start(this.manager.currentLesson)
        });
    }
}

window.RapidPhysicsSorterGame = RapidPhysicsSorterGame;
