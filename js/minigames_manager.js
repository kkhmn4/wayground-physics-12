/**
 * Mini-Games Arcade Coordinator & State Manager
 * Coordinates navigation, lesson filtering, game instantiation, and victory celebrations.
 */

class MiniGamesManager {
    constructor() {
        this.currentLesson = 'all';
        this.activeGameType = null;
        this.currentGameInstance = null;

        // Sub-games instances
        this.games = {
            memory: new MemoryMatchGame(this),
            pinpoint: new DiagramPinpointGame(this),
            sorter: new RapidPhysicsSorterGame(this),
            piston: new PhetPistonGame(this),
            cosmic: new CosmicScaleGame(this)
        };

        this.initDOM();
        this.bindEvents();
    }

    initDOM() {
        this.hubView = document.getElementById('arcade-hub-view');
        this.activeView = document.getElementById('arcade-active-view');
        this.btnBackToHub = document.getElementById('btn-arcade-back-hub');
        this.lessonTabs = document.querySelectorAll('.arcade-lesson-btn');
        this.gameCards = document.querySelectorAll('.arcade-game-card');

        // Victory Modal elements
        this.victoryModal = document.getElementById('minigame-victory-modal');
        this.victoryStars = document.getElementById('mv-stars');
        this.victoryTitle = document.getElementById('mv-title');
        this.victoryDesc = document.getElementById('mv-desc');
        this.victoryStatsBox = document.getElementById('mv-stats-box');
        this.btnVictoryReplay = document.getElementById('btn-mv-replay');
        this.btnVictoryHub = document.getElementById('btn-mv-hub');
    }

    bindEvents() {
        // Lesson filter tabs
        if (this.lessonTabs) {
            this.lessonTabs.forEach(tab => {
                tab.addEventListener('click', () => {
                    this.lessonTabs.forEach(t => t.classList.remove('active'));
                    tab.classList.add('active');
                    this.currentLesson = tab.dataset.lesson || 'all';
                    if (window.soundEngine) soundEngine.playClick();
                });
            });
        }

        // Game select cards
        if (this.gameCards) {
            this.gameCards.forEach(card => {
                card.addEventListener('click', () => {
                    const gameType = card.dataset.game;
                    this.launchGame(gameType);
                });
            });
        }

        // Back to Hub button
        if (this.btnBackToHub) {
            this.btnBackToHub.addEventListener('click', () => {
                this.returnToHub();
                if (window.soundEngine) soundEngine.playClick();
            });
        }

        // Victory modal buttons
        if (this.btnVictoryHub) {
            this.btnVictoryHub.addEventListener('click', () => {
                this.closeVictoryModal();
                this.returnToHub();
                if (window.soundEngine) soundEngine.playClick();
            });
        }
    }

    launchGame(gameType) {
        if (!this.games[gameType]) return;

        this.activeGameType = gameType;
        this.currentGameInstance = this.games[gameType];

        // Switch view
        if (this.hubView) this.hubView.style.display = 'none';
        if (this.activeView) this.activeView.classList.add('active');

        // Launch game instance with current lesson filter
        this.currentGameInstance.start(this.currentLesson);
    }

    returnToHub() {
        this.closeVictoryModal();
        if (this.currentGameInstance && typeof this.currentGameInstance.cleanup === 'function') {
            this.currentGameInstance.cleanup();
        }
        if (this.activeView) this.activeView.classList.remove('active');
        if (this.hubView) this.hubView.style.display = 'flex';
        this.activeGameType = null;
        this.currentGameInstance = null;
    }

    showVictoryModal({ title, stars, desc, stats, onReplay }) {
        if (!this.victoryModal) return;

        if (this.victoryStars) this.victoryStars.textContent = stars || "⭐⭐⭐";
        if (this.victoryTitle) this.victoryTitle.textContent = title;
        if (this.victoryDesc) this.victoryDesc.textContent = desc;

        if (this.victoryStatsBox && Array.isArray(stats)) {
            this.victoryStatsBox.innerHTML = '';
            stats.forEach(st => {
                const item = document.createElement('div');
                item.className = 'v-stat-item';
                item.innerHTML = `
                    <span class="v-stat-label">${st.label}</span>
                    <span class="v-stat-val">${st.val}</span>
                `;
                this.victoryStatsBox.appendChild(item);
            });
        }

        if (this.btnVictoryReplay) {
            this.btnVictoryReplay.onclick = () => {
                this.closeVictoryModal();
                if (typeof onReplay === 'function') onReplay();
                if (window.soundEngine) soundEngine.playClick();
            };
        }

        this.victoryModal.classList.add('active');

        if (window.soundEngine) soundEngine.playVictory();
        if (window.confettiEngine) {
            confettiEngine.fire({ count: 150 });
        }
    }

    closeVictoryModal() {
        if (this.victoryModal) {
            this.victoryModal.classList.remove('active');
        }
    }
}

// Global initialization
window.addEventListener('DOMContentLoaded', () => {
    window.miniGamesManager = new MiniGamesManager();
});
