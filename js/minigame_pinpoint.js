/**
 * Mini-Game 2: 🎯 Đố Sơ Đồ & Gắn Nhãn Khoa Học (Diagram Pinpoint & Label Dropper)
 * Interactive scientific diagram labeling with instant visual feedback.
 */

class DiagramPinpointGame {
    constructor(manager) {
        this.manager = manager;
        this.puzzles = [];
        this.currentPuzzleIdx = 0;
        this.placedCount = 0;
        this.selectedChip = null;
        this.score = 0;
        this.mistakes = 0;
        this.startTime = null;
    }

    start(unitKey = 'all') {
        const container = document.getElementById('active-game-container');
        if (!container) return;

        let availablePuzzles = [...MINIGAMES_DATA.diagramPuzzles];
        if (unitKey !== 'all') {
            availablePuzzles = availablePuzzles.filter(p => p.unit === unitKey);
        }
        if (availablePuzzles.length === 0) {
            availablePuzzles = [...MINIGAMES_DATA.diagramPuzzles];
        }

        this.puzzles = availablePuzzles;
        this.currentPuzzleIdx = 0;
        this.score = 0;
        this.mistakes = 0;
        this.startTime = Date.now();

        this.loadCurrentPuzzle();
    }

    loadCurrentPuzzle() {
        const container = document.getElementById('active-game-container');
        const puzzle = this.puzzles[this.currentPuzzleIdx];
        if (!puzzle || !container) return;

        this.placedCount = 0;
        this.selectedChip = null;

        // Shuffle labels for the tray
        const shuffledSpots = [...puzzle.spots].sort(() => Math.random() - 0.5);

        container.innerHTML = `
            <div class="minigame-hud">
                <div class="hud-stat-badge">
                    <span>Sơ đồ:</span>
                    <strong>${this.currentPuzzleIdx + 1} / ${this.puzzles.length}</strong>
                </div>
                <div class="hud-stat-badge">
                    <span>Nhãn hoàn thành:</span>
                    <strong id="pin-progress-val">0 / ${puzzle.spots.length}</strong>
                </div>
                <div class="hud-stat-badge">
                    <span>Độ chính xác:</span>
                    <strong id="pin-accuracy-val">100%</strong>
                </div>
            </div>

            <div class="pinpoint-wrapper">
                <div style="text-align: center; margin-bottom: 4px;">
                    <h3 style="font-family: var(--font-heading); color: #FFFFFF; font-size: 17px; margin-bottom: 4px;">🎯 ${puzzle.title}</h3>
                    <p style="font-size: 13px; color: #94A3B8;">${puzzle.sub}</p>
                </div>

                <div class="pinpoint-stage" id="pinpoint-stage-box">
                    <img src="${puzzle.image}?v=6.0" alt="${puzzle.title}" class="pinpoint-image" id="pinpoint-img">
                </div>

                <div class="pinpoint-bank-tray" id="pinpoint-tray">
                    <div class="pinpoint-bank-title">👇 Nhấp chọn nhãn bên dưới, sau đó nhấp vào vị trí số tròn tương ứng trên sơ đồ:</div>
                </div>
            </div>
        `;

        const stageBox = document.getElementById('pinpoint-stage-box');
        const trayBox = document.getElementById('pinpoint-tray');

        // Render target spots on stage
        puzzle.spots.forEach((spot, idx) => {
            const spotEl = document.createElement('div');
            spotEl.className = 'pinpoint-target-spot';
            spotEl.dataset.spotId = spot.id;
            spotEl.style.left = `${spot.x}%`;
            spotEl.style.top = `${spot.y}%`;
            spotEl.textContent = idx + 1;
            spotEl.title = `Vị trí (${idx + 1}): ${spot.hint}`;

            spotEl.addEventListener('click', () => this.handleSpotClick(spotEl, spot));
            stageBox.appendChild(spotEl);
        });

        // Render chips in tray
        shuffledSpots.forEach(spot => {
            const chipEl = document.createElement('div');
            chipEl.className = 'pinpoint-chip-item';
            chipEl.dataset.spotId = spot.id;
            chipEl.textContent = spot.label;

            chipEl.addEventListener('click', () => this.handleChipClick(chipEl, spot));
            trayBox.appendChild(chipEl);
        });

        if (window.soundEngine) soundEngine.playClick();
    }

    handleChipClick(chipEl, spotData) {
        if (chipEl.classList.contains('used')) return;

        // Deselect previous chip
        const prevSelected = document.querySelector('.pinpoint-chip-item.selected');
        if (prevSelected) prevSelected.classList.remove('selected');

        if (this.selectedChip && this.selectedChip.el === chipEl) {
            this.selectedChip = null;
        } else {
            chipEl.classList.add('selected');
            this.selectedChip = { el: chipEl, data: spotData };
            if (window.soundEngine) soundEngine.playClick();
        }
    }

    handleSpotClick(spotEl, spotData) {
        if (spotEl.classList.contains('placed')) return;

        if (!this.selectedChip) {
            // Flash notice to select a chip first
            spotEl.classList.add('hovered');
            setTimeout(() => spotEl.classList.remove('hovered'), 400);
            return;
        }

        const isCorrect = this.selectedChip.data.id === spotData.id;

        if (isCorrect) {
            // Correct Placement!
            spotEl.classList.add('placed');
            spotEl.innerHTML = `✓ <span class="pinpoint-placed-label">${spotData.label}</span>`;
            this.selectedChip.el.classList.remove('selected');
            this.selectedChip.el.classList.add('used');
            this.selectedChip = null;

            this.placedCount++;
            this.score += 150;

            const puzzle = this.puzzles[this.currentPuzzleIdx];
            const progressEl = document.getElementById('pin-progress-val');
            if (progressEl) progressEl.textContent = `${this.placedCount} / ${puzzle.spots.length}`;

            if (window.soundEngine) soundEngine.playCorrect();

            // Check if current puzzle is completed
            if (this.placedCount === puzzle.spots.length) {
                setTimeout(() => {
                    if (this.currentPuzzleIdx + 1 < this.puzzles.length) {
                        this.currentPuzzleIdx++;
                        this.loadCurrentPuzzle();
                    } else {
                        this.finishGame();
                    }
                }, 800);
            }
        } else {
            // Wrong Placement
            this.mistakes++;
            spotEl.style.transform = 'translate(-50%, -50%) scale(1.3)';
            spotEl.style.borderColor = '#EF4444';
            spotEl.style.background = 'rgba(239, 68, 68, 0.7)';

            const totalTries = this.placedCount + this.mistakes;
            const accuracy = Math.max(0, Math.round((this.placedCount / totalTries) * 100));
            const accEl = document.getElementById('pin-accuracy-val');
            if (accEl) accEl.textContent = `${accuracy}%`;

            if (window.soundEngine) soundEngine.playWrong();

            setTimeout(() => {
                spotEl.style.transform = '';
                spotEl.style.borderColor = '';
                spotEl.style.background = '';
            }, 500);
        }
    }

    finishGame() {
        const elapsedSec = Math.floor((Date.now() - this.startTime) / 1000);
        const mm = String(Math.floor(elapsedSec / 60)).padStart(2, '0');
        const ss = String(elapsedSec % 60).padStart(2, '0');

        let stars = "⭐⭐⭐";
        if (this.mistakes >= 4) stars = "⭐";
        else if (this.mistakes >= 2) stars = "⭐⭐";

        this.manager.showVictoryModal({
            title: "Tuyệt Đỉnh! Nắm Trọn Sơ Đồ Vật Lí!",
            stars: stars,
            desc: `Bạn đã gắn nhãn chính xác toàn bộ các sơ đồ và đồ thị khoa học của bài học!`,
            stats: [
                { label: "Sơ Đồ Đã Giải", val: `${this.puzzles.length} sơ đồ` },
                { label: "Lỗi Nhầm", val: `${this.mistakes} lần` },
                { label: "Thời Gian", val: `${mm}:${ss}` }
            ],
            onReplay: () => this.start(this.manager.currentLesson)
        });
    }
}

window.DiagramPinpointGame = DiagramPinpointGame;
