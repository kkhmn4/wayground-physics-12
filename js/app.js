/**
 * Wayground Physics 12 - Core Game Engine V2.0
 * Features:
 * - Student Profile Tracking (Name, Class)
 * - 4-Statement True/False Evaluation with Scenario Lead-in
 * - Adaptive Round 2 Remediation (Clone Bank matching missed concepts)
 * - Teacher Analytics Dashboard & CSV Export
 */

class WaygroundGame {
    constructor() {
        // Configuration
        this.config = {
            unit: 'all',
            questionType: 'all',
            mode: 'all', // 'all', 'basic', 'challenging', 'advanced'
            count: 6,
            questionTime: 25 // 25 seconds per question
        };

        // Student Profile
        this.student = {
            name: 'Học sinh lớp 12',
            className: '12.1'
        };

        // Game State
        this.state = {
            round: 1, // 1 = Normal, 2 = Remediation
            activeQuestions: [],
            currentIndex: 0,
            score: 0,
            streak: 0,
            maxStreak: 0,
            correctCount: 0,
            wrongCount: 0,
            missedConcepts: new Set(),
            sessionHistory: [], // Full history for teacher report
            timeLeft: 25,
            timerInterval: null,
            timerFrozen: false,
            powerups: {
                fiftyFifty: 1,
                freeze: 1,
                doubleDown: 1,
                shield: 1
            },
            activePowerupEffects: {
                doubleDown: false,
                shield: false
            }
        };

        this.memeReactions = {
            correct: [
                { emoji: "🔥", title: "Quá Đỉnh!", text: "Bộ não lượng tử kích hoạt!" },
                { emoji: "⚡", title: "Tuyệt Vời!", text: "Chuỗi combo đang bùng cháy!" },
                { emoji: "🎯", title: "Chính Xác 100%!", text: "Bậc thầy vật lí nhiệt đây rồi!" },
                { emoji: "🚀", title: "Siêu Tốc!", text: "Bắn phá bảng xếp hạng!" },
                { emoji: "💎", title: "Hoàn Hảo!", text: "Thừa thắng xông lên nào!" }
            ],
            wrong: [
                { emoji: "😅", title: "Hơi Tiếc Chút!", text: "Đừng nản, vòng 2 sẽ có câu bản sao để gỡ lại!" },
                { emoji: "🧐", title: "Xem Lại Nhé!", text: "Đọc kĩ giải thích để hiểu sâu bản chất nha!" },
                { emoji: "🛡️", title: "Cố Lên Nào!", text: "Học từ sai lầm là chìa khóa của điểm 10!" },
                { emoji: "💡", title: "Nắm Vững Lại!", text: "Ghi nhớ công thức để vòng 2 chiến thắng nhé!" }
            ]
        };

        this.initDOMReferences();
        this.bindEvents();
    }

    initDOMReferences() {
        // Screens
        this.screens = {
            lobby: document.getElementById('screen-lobby'),
            arena: document.getElementById('screen-arena'),
            summary: document.getElementById('screen-summary')
        };

        // Student Profile Inputs
        this.inputStudentName = document.getElementById('input-student-name');
        this.inputStudentClass = document.getElementById('input-student-class');

        // Lobby selections
        this.unitCards = document.querySelectorAll('.unit-card');
        this.typeCards = document.querySelectorAll('.type-card');
        this.modeCards = document.querySelectorAll('.mode-card');
        this.countChips = document.querySelectorAll('.count-chip');
        this.btnStart = document.getElementById('btn-start-game');

        // Arena HUD
        this.remediationBanner = document.getElementById('remediation-banner');
        this.hudScore = document.getElementById('hud-score');
        this.hudStreak = document.getElementById('hud-streak-val');
        this.hudProgress = document.getElementById('hud-progress-val');
        this.timerBar = document.getElementById('timer-bar');

        // Powerups
        this.btnFiftyFifty = document.getElementById('pw-fifty-fifty');
        this.btnFreeze = document.getElementById('pw-freeze');
        this.btnDoubleDown = document.getElementById('pw-doubledown');
        this.btnShield = document.getElementById('pw-shield');

        // Question Arena
        this.questionTag = document.getElementById('question-tag');
        this.questionLevel = document.getElementById('question-level');
        this.questionVisualBox = document.getElementById('question-visual-box');
        this.questionScenarioLead = document.getElementById('question-scenario-lead');
        this.questionText = document.getElementById('question-text');
        this.mcGrid = document.getElementById('mc-grid');
        this.multiTfContainer = document.getElementById('multi-tf-container');

        // Feedback Popup
        this.feedbackOverlay = document.getElementById('feedback-overlay');
        this.feedbackMeme = document.getElementById('feedback-meme');
        this.feedbackTitle = document.getElementById('feedback-title');
        this.feedbackPts = document.getElementById('feedback-pts');
        this.feedbackExplainList = document.getElementById('feedback-explain-list');
        this.btnNext = document.getElementById('btn-next-question');

        // Summary Screen
        this.summaryStudentName = document.getElementById('summary-student-name');
        this.summaryScore = document.getElementById('summary-score');
        this.summaryAccuracy = document.getElementById('summary-accuracy');
        this.summaryStreak = document.getElementById('summary-streak');
        this.summaryBadge = document.getElementById('summary-badge-title');
        this.remediationPromptBox = document.getElementById('remediation-prompt-box');
        this.remediationPromptTitle = document.getElementById('remediation-prompt-title');
        this.remediationPromptDesc = document.getElementById('remediation-prompt-desc');
        this.btnStartRemediation = document.getElementById('btn-start-remediation');
        this.btnOpenTeacherReport = document.getElementById('btn-open-teacher-report');
        this.btnPlayAgain = document.getElementById('btn-play-again');

        // Teacher Report Modal
        this.modalTeacherReport = document.getElementById('modal-teacher-report');
        this.btnCloseReport = document.getElementById('btn-close-report');
        this.repStudentName = document.getElementById('rep-student-name');
        this.repStudentClass = document.getElementById('rep-student-class');
        this.repTotalScore = document.getElementById('rep-total-score');
        this.repAccuracy = document.getElementById('rep-accuracy');
        this.reportTableBody = document.getElementById('report-table-body');
        this.btnExportCsv = document.getElementById('btn-export-csv');
        this.btnPrintReport = document.getElementById('btn-print-report');

        // Sound Toggle
        this.btnToggleSound = document.getElementById('btn-toggle-sound');

        // Image Zoom Modal
        this.imageZoomModal = document.getElementById('image-zoom-modal');
        this.imageZoomImg = document.getElementById('image-zoom-img');
        this.imageZoomCaption = document.getElementById('image-zoom-caption');
        this.btnCloseZoomModal = document.getElementById('btn-close-zoom-modal');
    }

    bindEvents() {
        // Sound toggle
        this.btnToggleSound.addEventListener('click', () => {
            const isEnabled = soundEngine.toggleSound();
            this.btnToggleSound.textContent = isEnabled ? '🔊' : '🔇';
            soundEngine.playClick();
        });

        // Close image zoom modal
        if (this.btnCloseZoomModal) {
            this.btnCloseZoomModal.addEventListener('click', () => this.closeImageZoomModal());
        }
        if (this.imageZoomModal) {
            this.imageZoomModal.addEventListener('click', (e) => {
                if (e.target === this.imageZoomModal) {
                    this.closeImageZoomModal();
                }
            });
        }

        // Lobby selections
        this.unitCards.forEach(card => {
            card.addEventListener('click', () => {
                this.unitCards.forEach(c => c.classList.remove('active'));
                card.classList.add('active');
                this.config.unit = card.dataset.unit;
                soundEngine.playClick();
            });
        });

        this.typeCards.forEach(card => {
            card.addEventListener('click', () => {
                this.typeCards.forEach(c => c.classList.remove('active'));
                card.classList.add('active');
                this.config.questionType = card.dataset.type;
                soundEngine.playClick();
            });
        });

        this.modeCards.forEach(card => {
            card.addEventListener('click', () => {
                this.modeCards.forEach(c => c.classList.remove('active'));
                card.classList.add('active');
                this.config.mode = card.dataset.mode;
                soundEngine.playClick();
            });
        });

        this.countChips.forEach(chip => {
            chip.addEventListener('click', () => {
                this.countChips.forEach(c => c.classList.remove('active'));
                chip.classList.add('active');
                const rawCount = chip.dataset.count;
                this.config.count = rawCount === 'all' ? 'all' : parseInt(rawCount, 10);
                soundEngine.playClick();
            });
        });

        // Start Game
        this.btnStart.addEventListener('click', () => {
            this.syncStudentProfile();
            soundEngine.playClick();
            this.startRound(1);
        });

        // Powerups (if present in DOM)
        if (this.btnFiftyFifty) this.btnFiftyFifty.addEventListener('click', () => this.useFiftyFifty());
        if (this.btnFreeze) this.btnFreeze.addEventListener('click', () => this.useFreeze());
        if (this.btnDoubleDown) this.btnDoubleDown.addEventListener('click', () => this.useDoubleDown());
        if (this.btnShield) this.btnShield.addEventListener('click', () => this.useShield());

        // Next Question
        this.btnNext.addEventListener('click', () => {
            soundEngine.playClick();
            this.hideFeedback();
            this.nextQuestion();
        });

        // Start Round 2 Remediation
        this.btnStartRemediation.addEventListener('click', () => {
            soundEngine.playClick();
            this.startRound(2);
        });

        // Open/Close Teacher Report
        this.btnOpenTeacherReport.addEventListener('click', () => {
            soundEngine.playClick();
            this.openTeacherReport();
        });

        this.btnCloseReport.addEventListener('click', () => {
            soundEngine.playClick();
            this.modalTeacherReport.classList.remove('active');
        });

        // Export CSV & Print
        this.btnExportCsv.addEventListener('click', () => this.exportReportToCSV());
        this.btnPrintReport.addEventListener('click', () => window.print());

        // Play Again
        this.btnPlayAgain.addEventListener('click', () => {
            soundEngine.playClick();
            this.switchScreen('lobby');
        });

        // Global Keyboard Shortcuts (Grade 12 Speedrun / iPad Magic Keyboard)
        window.addEventListener('keydown', (e) => {
            if (e.target && (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA')) return;

            // When feedback modal is open: Space or Enter proceeds to next question
            if (this.feedbackOverlay.classList.contains('active')) {
                if (e.key === ' ' || e.key === 'Enter') {
                    e.preventDefault();
                    this.btnNext.click();
                }
                return;
            }

            // When teacher report modal is open: Escape closes it
            if (e.key === 'Escape') {
                if (this.imageZoomModal && this.imageZoomModal.classList.contains('active')) {
                    this.closeImageZoomModal();
                    return;
                }
                if (this.modalTeacherReport && this.modalTeacherReport.classList.contains('active')) {
                    this.btnCloseReport.click();
                }
                return;
            }

            // When in arena screen:
            if (this.screens.arena && this.screens.arena.classList.contains('active')) {
                const key = e.key.toLowerCase();
                const optionBtns = this.mcGrid.querySelectorAll('.option-btn:not(:disabled)');
                
                if (key === '1' || key === 'a') {
                    if (optionBtns[0]) { e.preventDefault(); optionBtns[0].click(); }
                } else if (key === '2' || key === 'b') {
                    if (optionBtns[1]) { e.preventDefault(); optionBtns[1].click(); }
                } else if (key === '3' || key === 'c') {
                    if (optionBtns[2]) { e.preventDefault(); optionBtns[2].click(); }
                } else if (key === '4' || key === 'd') {
                    if (optionBtns[3]) { e.preventDefault(); optionBtns[3].click(); }
                }

                // Powerups shortcuts
                if (key === 'f') this.btnFiftyFifty.click();
                if (key === 'z') this.btnFreeze.click();
                if (key === 'x') this.btnDoubleDown.click();
                if (key === 's') this.btnShield.click();
            }

            // When in lobby: Enter starts game
            if (this.screens.lobby && this.screens.lobby.classList.contains('active')) {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    this.btnStart.click();
                }
            }
        });
    }

    syncStudentProfile() {
        this.student.name = this.inputStudentName.value.trim() || 'Học sinh';
        this.student.className = this.inputStudentClass.value.trim() || '12';
    }

    openImageZoomModal(imgSrc, captionText) {
        if (!this.imageZoomModal || !this.imageZoomImg) return;
        this.imageZoomImg.src = imgSrc;
        if (this.imageZoomCaption) {
            this.imageZoomCaption.textContent = captionText ? `🔬 ${captionText}` : '🔬 Hình minh họa khoa học chuẩn SGK Vật Lí 12';
        }
        this.imageZoomModal.classList.add('active');
        if (window.soundEngine) soundEngine.playClick();
    }

    closeImageZoomModal() {
        if (!this.imageZoomModal) return;
        this.imageZoomModal.classList.remove('active');
        if (window.soundEngine) soundEngine.playClick();
    }

    switchScreen(screenName) {
        if (screenName !== 'arena' && window.physicsSimulationEngine) {
            window.physicsSimulationEngine.cleanup();
        }
        Object.keys(this.screens).forEach(key => {
            this.screens[key].classList.toggle('active', key === screenName);
        });
    }

    // =========================================================================
    // =========================================================================
    // UTILITY: FISHER-YATES SHUFFLE ALGORITHM
    // =========================================================================
    shuffleArray(array) {
        const arr = [...array];
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    }

    // =========================================================================
    // ROUND INITIALIZATION & QUESTION POOLING
    // =========================================================================
    startRound(roundNumber) {
        this.state.round = roundNumber;
        this.remediationBanner.classList.toggle('active', roundNumber === 2);

        let pool = [];

        if (roundNumber === 1) {
            // ROUND 1: Standard Questions from QUESTION_BANK
            if (this.config.unit === 'all') {
                pool = [
                    ...QUESTION_BANK.unit1.questions,
                    ...QUESTION_BANK.unit2.questions,
                    ...QUESTION_BANK.unit3.questions
                ];
            } else if (QUESTION_BANK[this.config.unit]) {
                pool = [...QUESTION_BANK[this.config.unit].questions];
            }

            // Filter by learning mode / difficulty tier
            if (this.config.mode === 'basic') {
                pool = pool.filter(q => q.level === 'Nhận biết');
            } else if (this.config.mode === 'challenging') {
                pool = pool.filter(q => q.level === 'Thông hiểu');
            } else if (this.config.mode === 'advanced') {
                pool = pool.filter(q => q.level === 'Vận dụng cao');
            }

            // Filter by question type
            if (this.config.questionType === 'multiple_choice') {
                pool = pool.filter(q => q.type === 'multiple_choice');
            } else if (this.config.questionType === 'multi_tf') {
                pool = pool.filter(q => q.type === 'multi_tf');
            }

            if (pool.length === 0) {
                alert("Không tìm thấy câu hỏi nào phù hợp với bộ lọc hiện tại. Hệ thống sẽ hiển thị toàn bộ câu hỏi.");
                this.config.mode = 'all';
                return this.startRound(1);
            }

            // Deep clone to ensure shuffling does NOT mutate master QUESTION_BANK
            pool = pool.map(q => JSON.parse(JSON.stringify(q)));

            // 1. Shuffle question order (Fisher-Yates)
            pool = this.shuffleArray(pool);

            // 2. Shuffle answer choices A, B, C, D for every multiple-choice question
            // and accurately synchronize the new correct index!
            pool.forEach(q => {
                if (q.type === 'multiple_choice' && Array.isArray(q.options) && q.options.length > 1) {
                    const originalCorrectText = q.options[q.correct];
                    q.options = this.shuffleArray(q.options);
                    q.correct = q.options.indexOf(originalCorrectText);
                }
            });

            // Slice by desired question count
            if (this.config.count !== 'all') {
                const countNum = parseInt(this.config.count, 10) || pool.length;
                pool = pool.slice(0, Math.min(countNum, pool.length));
            }

            // Reset scores for new game
            this.state.score = 0;
            this.state.streak = 0;
            this.state.maxStreak = 0;
            this.state.correctCount = 0;
            this.state.wrongCount = 0;
            this.state.missedConcepts.clear();
            this.state.sessionHistory = [];

        } else if (roundNumber === 2) {
            // ROUND 2: Adaptive Remediation from CLONE_BANK
            const missedArray = Array.from(this.state.missedConcepts);
            missedArray.forEach(conceptId => {
                if (CLONE_BANK[conceptId] && CLONE_BANK[conceptId].length > 0) {
                    // Pick a random clone variant and deep clone
                    const clones = CLONE_BANK[conceptId];
                    const rawClone = clones[Math.floor(Math.random() * clones.length)];
                    const pickedClone = JSON.parse(JSON.stringify(rawClone));

                    // Shuffle options for multiple choice clone questions as well
                    if (pickedClone.type === 'multiple_choice' && Array.isArray(pickedClone.options) && pickedClone.options.length > 1) {
                        const originalCorrectText = pickedClone.options[pickedClone.correct];
                        pickedClone.options = this.shuffleArray(pickedClone.options);
                        pickedClone.correct = pickedClone.options.indexOf(originalCorrectText);
                    }
                    pool.push(pickedClone);
                }
            });

            if (pool.length === 0) {
                alert("Bạn không có câu hỏi nào bị sai hoặc đã hoàn thành xuất sắc toàn bộ!");
                return;
            }

            // Shuffle adaptive pool
            pool = this.shuffleArray(pool);
            // In Round 2, keep previous streak & powerups refreshed!
            this.state.powerups = { fiftyFifty: 1, freeze: 1, doubleDown: 1, shield: 1 };
        }

        this.state.activeQuestions = pool;
        this.state.currentIndex = 0;
        this.state.activePowerupEffects = { doubleDown: false, shield: false };

        this.updateHUD();
        this.updatePowerupButtons();
        this.switchScreen('arena');
        this.loadCurrentQuestion();
    }

    updateHUD() {
        this.hudScore.textContent = this.state.score.toLocaleString();
        this.hudStreak.textContent = this.state.streak;
        this.hudProgress.textContent = `${this.state.currentIndex + 1}/${this.state.activeQuestions.length}`;
    }

    updatePowerupButtons() {
        if (!this.btnFiftyFifty) return;
        this.btnFiftyFifty.disabled = this.state.powerups.fiftyFifty <= 0;
        this.btnFreeze.disabled = this.state.powerups.freeze <= 0;
        this.btnDoubleDown.disabled = this.state.powerups.doubleDown <= 0;
        this.btnShield.disabled = this.state.powerups.shield <= 0;

        this.btnDoubleDown.classList.toggle('active-powerup', this.state.activePowerupEffects.doubleDown);
        this.btnShield.classList.toggle('active-powerup', this.state.activePowerupEffects.shield);
    }

    // =========================================================================
    // TIMER ENGINE
    // =========================================================================
    startTimer() {
        this.stopTimer();
        this.state.timeLeft = this.config.questionTime;
        this.state.timerFrozen = false;
        this.updateTimerDisplay();

        this.state.timerInterval = setInterval(() => {
            if (!this.state.timerFrozen) {
                this.state.timeLeft -= 0.1;
                this.updateTimerDisplay();

                if (this.state.timeLeft <= 4 && Math.floor(this.state.timeLeft * 10) % 10 === 0) {
                    soundEngine.playTick();
                }

                if (this.state.timeLeft <= 0) {
                    this.stopTimer();
                    this.handleTimeout();
                }
            }
        }, 100);
    }

    stopTimer() {
        if (this.state.timerInterval) {
            clearInterval(this.state.timerInterval);
            this.state.timerInterval = null;
        }
    }

    updateTimerDisplay() {
        const ratio = Math.max(0, this.state.timeLeft / this.config.questionTime);
        this.timerBar.style.transform = `scaleX(${ratio})`;
        this.timerBar.classList.toggle('warning', this.state.timeLeft <= 5);
    }

    handleTimeout() {
        soundEngine.playWrong();
        const currentQ = this.state.activeQuestions[this.state.currentIndex];
        this.state.missedConcepts.add(currentQ.conceptId);

        this.state.sessionHistory.push({
            round: this.state.round,
            type: currentQ.type,
            title: currentQ.question || currentQ.context,
            detail: "Hết thời gian suy nghĩ",
            status: "Chưa đạt",
            score: 0
        });

        this.showFeedback(false, 0, "Hết Giờ Rồi!", [
            { text: "Bạn chưa kịp đưa ra câu trả lời.", isCorrect: false, explanation: currentQ.explanation || "Hãy chú ý đồng hồ đếm ngược và tận dụng Power-up Đóng Băng khi cần thêm thời gian nhé!" }
        ]);
    }

    // =========================================================================
    // POWER-UPS
    // =========================================================================
    useFiftyFifty() {
        const currentQ = this.state.activeQuestions[this.state.currentIndex];
        if (this.state.powerups.fiftyFifty <= 0 || currentQ.type !== 'multiple_choice') return;

        this.state.powerups.fiftyFifty--;
        soundEngine.playPowerup();
        this.updatePowerupButtons();

        const optionButtons = Array.from(this.mcGrid.querySelectorAll('.option-btn'));
        const wrongBtns = optionButtons.filter((btn, idx) => idx !== currentQ.correct);
        wrongBtns.sort(() => Math.random() - 0.5);

        if (wrongBtns.length >= 2) {
            wrongBtns[0].classList.add('eliminated');
            wrongBtns[1].classList.add('eliminated');
        }
    }

    useFreeze() {
        if (this.state.powerups.freeze <= 0) return;
        this.state.powerups.freeze--;
        this.state.timerFrozen = true;
        soundEngine.playPowerup();
        this.updatePowerupButtons();

        setTimeout(() => {
            this.state.timerFrozen = false;
        }, 12000);
    }

    useDoubleDown() {
        if (this.state.powerups.doubleDown <= 0) return;
        this.state.powerups.doubleDown--;
        this.state.activePowerupEffects.doubleDown = true;
        soundEngine.playPowerup();
        this.updatePowerupButtons();
    }

    useShield() {
        if (this.state.powerups.shield <= 0) return;
        this.state.powerups.shield--;
        this.state.activePowerupEffects.shield = true;
        soundEngine.playPowerup();
        this.updatePowerupButtons();
    }

    // =========================================================================
    // MATHEMATICAL & PHYSICS FORMULA RENDERING (KATEX & HIGH QUALITY FALLBACK)
    // =========================================================================
    renderMath(container = document.body) {
        if (!container) return;
        this.preprocessMathText(container);
        if (typeof window.renderMathInElement === 'function') {
            try {
                window.renderMathInElement(container, {
                    delimiters: [
                        { left: '$$', right: '$$', display: true },
                        { left: '$', right: '$', display: false },
                        { left: '\\(', right: '\\)', display: false },
                        { left: '\\[', right: '\\]', display: true }
                    ],
                    macros: {
                        "\\degC": "^{\\circ}\\text{C}",
                        "\\degF": "^{\\circ}\\text{F}",
                        "\\dfrac": "\\frac"
                    },
                    throwOnError: false,
                    errorColor: '#ef4444',
                    strict: false
                });
                return;
            } catch (err) {
                console.warn("KaTeX rendering warning:", err);
            }
        }
        // Fallback: format standard physics formulas if KaTeX is not loaded yet
        this.applyMathFallback(container);
    }

    preprocessMathText(container) {
        try {
            const walker = document.createTreeWalker(container, NodeFilter.SHOW_TEXT, null, false);
            let node;
            while ((node = walker.nextNode())) {
                const val = node.nodeValue;
                if (!val || !val.includes('$')) continue;
                // Fix potential JS control escapes and format decimal commas in math
                const fixed = val.replace(/\$([^\$]+)\$/g, (match, formula) => {
                    let f = formula
                        .replace(/\t(?=ext\{)/g, '\\')      // \t + ext -> \text
                        .replace(/\x0c(?=rac\{)/g, '\\')    // \f + rac -> \frac
                        .replace(/\^circ\b/g, '^\\circ')    // ^circ -> ^\circ
                        .replace(/(?<=\d),(?=\d)/g, '{,}'); // 273,15 -> 273{,}15
                    return `$${f}$`;
                });
                if (fixed !== val) {
                    node.nodeValue = fixed;
                }
            }
        } catch (e) {
            console.warn("Preprocess math warning:", e);
        }
    }

    applyMathFallback(container) {
        try {
            const walker = document.createTreeWalker(container, NodeFilter.SHOW_TEXT, null, false);
            const textNodes = [];
            let node;
            while ((node = walker.nextNode())) {
                if (node.nodeValue && node.nodeValue.includes('$')) {
                    textNodes.push(node);
                }
            }

            textNodes.forEach(textNode => {
                const val = textNode.nodeValue;
                if (!val || !val.includes('$')) return;
                const parent = textNode.parentNode;
                if (parent && (parent.classList?.contains('katex') || parent.closest?.('.katex'))) return;

                const span = document.createElement('span');
                span.className = 'phys-math-rendered';
                span.innerHTML = val.replace(/\$([^\$]+)\$/g, (match, formula) => {
                    let formatted = formula
                        .replace(/\\cdot/g, ' &bull; ')
                        .replace(/\\times/g, ' &times; ')
                        .replace(/\\Delta/g, '&Delta;')
                        .replace(/\\lambda/g, '&lambda;')
                        .replace(/\\mu/g, '&mu;')
                        .replace(/\\circ/g, '&deg;')
                        .replace(/\\frac\{([^\}]+)\}\{([^\}]+)\}/g, '($1 / $2)')
                        .replace(/\\dfrac\{([^\}]+)\}\{([^\}]+)\}/g, '($1 / $2)')
                        .replace(/\\text\{([^\}]+)\}/g, '<span style="font-style:normal;font-family:inherit;">$1</span>')
                        .replace(/\{,\}/g, ',')
                        .replace(/\^\{([^\}]+)\}/g, '<sup>$1</sup>')
                        .replace(/\^([0-9\+\-]+)/g, '<sup>$1</sup>')
                        .replace(/_\{([^\}]+)\}/g, '<sub>$1</sub>')
                        .replace(/_([0-9a-zA-Z]+)/g, '<sub>$1</sub>');
                    return `<span class="phys-math" style="font-family:'Cambria Math','Mulish',serif;font-style:italic;">${formatted}</span>`;
                });
                parent.replaceChild(span, textNode);
            });
        } catch (e) {
            console.warn("Math fallback warning:", e);
        }
    }

    // =========================================================================
    // QUESTION RENDERING
    // =========================================================================
    loadCurrentQuestion() {
        const q = this.state.activeQuestions[this.state.currentIndex];
        this.updateHUD();

        // Meta tags
        this.questionTag.textContent = q.type === 'multiple_choice' ? 'Trắc nghiệm 4 lựa chọn' : 'Đúng / Sai 4 Lệnh (Bộ GD&ĐT)';
        this.questionLevel.textContent = q.level || 'Thông hiểu';
        this.questionLevel.className = 'tag-badge';
        if (q.level === 'Nhận biết') {
            this.questionLevel.classList.add('level-basic');
        } else if (q.level === 'Vận dụng cao') {
            this.questionLevel.classList.add('level-advanced');
        } else {
            this.questionLevel.classList.add('level-challenging');
        }

        // Layout reset
        this.mcGrid.style.display = 'none';
        this.multiTfContainer.style.display = 'none';

        if (q.type === 'multiple_choice') {
            this.questionScenarioLead.style.display = 'none';
            this.questionText.textContent = q.question;
            this.renderMultipleChoice(q);
        } else if (q.type === 'multi_tf') {
            this.questionScenarioLead.style.display = 'block';
            this.questionScenarioLead.textContent = q.context;
            this.questionText.textContent = "Hãy xác định tính ĐÚNG hoặc SAI của từng mệnh đề dưới đây:";
            this.renderMultiTF(q);
        }

        // Render dedicated scientific textbook image in Vietnamese
        if (this.questionVisualBox) {
            if (q.image) {
                const questionTitle = q.question || q.context || 'Kiến thức cốt lõi SGK';
                this.questionVisualBox.innerHTML = `
                    <div class="question-image-card">
                        <div class="image-card-header">
                            <span class="image-card-badge">🔬 HÌNH MINH HỌA KHOA HỌC CHUẨN SGK</span>
                            <span class="image-card-hint">🔍 Nhấp vào ảnh để phóng to chi tiết</span>
                        </div>
                        <div class="image-wrapper" title="Nhấp vào để xem ảnh phóng to chi tiết">
                            <img src="${q.image}?v=5.0.0" alt="Hình minh họa chuẩn khoa học" class="question-scientific-img" />
                        </div>
                    </div>
                `;
                const imgWrap = this.questionVisualBox.querySelector('.image-wrapper');
                if (imgWrap) {
                    imgWrap.addEventListener('click', () => {
                        this.openImageZoomModal(q.image, questionTitle);
                    });
                }
            } else if (window.physicsSimulationEngine) {
                window.physicsSimulationEngine.render(this.questionVisualBox, q.conceptId);
            }
        }

        // Render standard physics/math formulas
        this.renderMath(this.screens.arena);

        this.startTimer();
    }

    renderMultipleChoice(q) {
        this.mcGrid.innerHTML = '';
        this.mcGrid.style.display = 'grid';

        const choiceLetters = ['A', 'B', 'C', 'D'];
        const choiceClasses = ['btn-choice-a', 'btn-choice-b', 'btn-choice-c', 'btn-choice-d'];

        q.options.forEach((optText, idx) => {
            const btn = document.createElement('button');
            btn.className = `option-btn ${choiceClasses[idx % 4]}`;
            btn.innerHTML = `
                <span class="option-badge">${choiceLetters[idx]}</span>
                <span class="option-text option-label-text">${optText}</span>
                <span class="kbd-hint" title="Phím tắt">${idx + 1}</span>
            `;

            btn.addEventListener('click', () => {
                this.handleMultipleChoiceSelect(idx, btn, q);
            });

            this.mcGrid.appendChild(btn);
        });
    }

    renderMultiTF(q) {
        this.multiTfContainer.innerHTML = '';
        this.multiTfContainer.style.display = 'flex';

        const studentAnswers = new Array(q.statements.length).fill(null);

        q.statements.forEach((stmt, idx) => {
            const card = document.createElement('div');
            card.className = 'multi-tf-card';
            card.innerHTML = `
                <div class="multi-tf-statement-box">
                    <div class="stmt-label-badge">${stmt.label}</div>
                    <div class="stmt-content">
                        <span class="stmt-lead-text">${stmt.lead}</span>
                        <span>${stmt.text}</span>
                    </div>
                </div>
                <div class="multi-tf-toggle-group">
                    <button type="button" class="btn-tf-toggle btn-toggle-true">ĐÚNG</button>
                    <button type="button" class="btn-tf-toggle btn-toggle-false">SAI</button>
                </div>
            `;

            const btnTrue = card.querySelector('.btn-toggle-true');
            const btnFalse = card.querySelector('.btn-toggle-false');

            btnTrue.addEventListener('click', () => {
                soundEngine.playClick();
                studentAnswers[idx] = true;
                btnTrue.classList.add('selected-true');
                btnFalse.classList.remove('selected-false');
            });

            btnFalse.addEventListener('click', () => {
                soundEngine.playClick();
                studentAnswers[idx] = false;
                btnFalse.classList.add('selected-false');
                btnTrue.classList.remove('selected-true');
            });

            this.multiTfContainer.appendChild(card);
        });

        // Submit Button
        const submitBtn = document.createElement('button');
        submitBtn.className = 'cta-button btn-primary btn-submit-multitf';
        submitBtn.innerHTML = '<span>Xác Nhận 4 Đáp Án</span> <span>🎯</span>';
        submitBtn.addEventListener('click', () => {
            if (studentAnswers.includes(null)) {
                alert("Vui lòng chọn Đúng hoặc Sai cho đủ cả 4 ý a, b, c, d!");
                return;
            }
            this.handleMultiTFSubmit(studentAnswers, q);
        });

        this.multiTfContainer.appendChild(submitBtn);
    }

    // =========================================================================
    // ANSWER EVALUATION
    // =========================================================================
    handleMultipleChoiceSelect(selectedIndex, selectedBtn, q) {
        this.stopTimer();
        const allBtns = this.mcGrid.querySelectorAll('.option-btn');
        allBtns.forEach(b => b.disabled = true);

        const isCorrect = selectedIndex === q.correct;
        if (isCorrect) {
            selectedBtn.classList.add('correct-highlight');
        } else {
            selectedBtn.classList.add('wrong-highlight');
            if (allBtns[q.correct]) {
                allBtns[q.correct].classList.add('correct-highlight');
            }
            this.state.missedConcepts.add(q.conceptId);
        }

        // Record history
        this.state.sessionHistory.push({
            round: this.state.round,
            type: "Trắc nghiệm ABCD",
            title: q.question,
            detail: `Chọn: [${['A','B','C','D'][selectedIndex]}] | Đáp án: [${['A','B','C','D'][q.correct]}]`,
            status: isCorrect ? "Đạt" : "Chưa đạt",
            score: isCorrect ? 1000 : 0
        });

        setTimeout(() => {
            this.evaluateScore(isCorrect, isCorrect ? "Chính Xác Tuyệt Đối!" : "Chưa Chính Xác!", [
                { text: q.options[q.correct], isCorrect: isCorrect, explanation: q.explanation }
            ]);
        }, 500);
    }

    handleMultiTFSubmit(studentAnswers, q) {
        this.stopTimer();
        let correctCount = 0;
        const statementResults = [];

        q.statements.forEach((stmt, idx) => {
            const isMatch = studentAnswers[idx] === stmt.isTrue;
            if (isMatch) correctCount++;

            statementResults.push({
                label: stmt.label,
                text: `${stmt.lead} ${stmt.text}`,
                userChoice: studentAnswers[idx] ? "Đúng" : "Sai",
                correctChoice: stmt.isTrue ? "Đúng" : "Sai",
                isCorrect: isMatch,
                explanation: stmt.explanation
            });

            // Record to teacher history
            this.state.sessionHistory.push({
                round: this.state.round,
                type: `Đúng/Sai Ý (${stmt.label})`,
                title: `${stmt.lead} ${stmt.text}`,
                detail: `Chọn: ${studentAnswers[idx] ? "Đúng" : "Sai"} | Chuẩn: ${stmt.isTrue ? "Đúng" : "Sai"}`,
                status: isMatch ? "Đạt" : "Chưa đạt",
                score: isMatch ? 250 : 0
            });
        });

        const isFullCorrect = correctCount === 4;
        if (!isFullCorrect) {
            this.state.missedConcepts.add(q.conceptId);
        }

        const msg = isFullCorrect ? "Xuất sắc! Đúng trọn vẹn 4/4 ý!" : `Đúng ${correctCount}/4 ý. Hãy đọc kĩ giải thích từng ý nhé!`;
        this.evaluateScore(isFullCorrect, msg, statementResults, correctCount * 250);
    }

    evaluateScore(isFullyCorrect, title, statementResults, customBasePoints = null) {
        let earnedPoints = 0;

        if (isFullyCorrect) {
            const speedRatio = Math.max(0, this.state.timeLeft / this.config.questionTime);
            const speedBonus = Math.round(speedRatio * 500);
            const basePoints = customBasePoints !== null ? customBasePoints : 1000;
            const streakBonus = this.state.streak * 100;

            earnedPoints = basePoints + speedBonus + streakBonus;

            if (this.state.activePowerupEffects.doubleDown) {
                earnedPoints *= 2;
                this.state.activePowerupEffects.doubleDown = false;
            }

            this.state.score += earnedPoints;
            this.state.streak++;
            if (this.state.streak > this.state.maxStreak) {
                this.state.maxStreak = this.state.streak;
            }
            this.state.correctCount++;

            soundEngine.playCorrect();
            if ('vibrate' in navigator) {
                try { navigator.vibrate([25, 35, 25]); } catch (e) {}
            }
            if (this.state.streak >= 3) {
                soundEngine.playStreak();
                if (confettiEngine && this.state.streak % 3 === 0) {
                    confettiEngine.fire({ count: 80 });
                }
            }
        } else {
            if (this.state.activePowerupEffects.shield) {
                this.state.activePowerupEffects.shield = false;
            } else {
                this.state.streak = 0;
            }
            this.state.wrongCount++;
            soundEngine.playWrong();
            if ('vibrate' in navigator) {
                try { navigator.vibrate([50, 40, 50]); } catch (e) {}
            }
        }

        this.updateHUD();
        this.updatePowerupButtons();
        this.showFeedback(isFullyCorrect, earnedPoints, title, statementResults);
    }

    // =========================================================================
    // FEEDBACK POPUP
    // =========================================================================
    showFeedback(isCorrect, pts, title, resultsList) {
        const reactions = isCorrect ? this.memeReactions.correct : this.memeReactions.wrong;
        const reaction = reactions[Math.floor(Math.random() * reactions.length)];

        this.feedbackMeme.textContent = reaction.emoji;
        this.feedbackTitle.textContent = title || reaction.title;
        this.feedbackTitle.className = `feedback-title ${isCorrect ? 'correct-text' : 'wrong-text'}`;

        if (isCorrect) {
            this.feedbackPts.textContent = `+${pts.toLocaleString()} Điểm! (${reaction.text})`;
        } else {
            this.feedbackPts.textContent = reaction.text;
        }

        // Render explanation list
        this.feedbackExplainList.innerHTML = '';
        resultsList.forEach(item => {
            const card = document.createElement('div');
            card.className = `feedback-explain-item ${item.isCorrect ? 'item-correct' : 'item-wrong'}`;
            card.innerHTML = `
                <div>${item.isCorrect ? '✅' : '❌'} <strong>${item.label ? `Ý (${item.label}): ` : ''}</strong>${item.explanation}</div>
            `;
            this.feedbackExplainList.appendChild(card);
        });

        this.renderMath(this.feedbackOverlay);
        this.feedbackOverlay.classList.add('active');
    }

    hideFeedback() {
        this.feedbackOverlay.classList.remove('active');
    }

    nextQuestion() {
        this.state.currentIndex++;
        if (this.state.currentIndex < this.state.activeQuestions.length) {
            this.loadCurrentQuestion();
        } else {
            this.endRound();
        }
    }

    // =========================================================================
    // END ROUND & SUMMARY
    // =========================================================================
    endRound() {
        this.stopTimer();
        soundEngine.playVictory();
        if (confettiEngine) {
            confettiEngine.fire({ count: 180 });
        }

        const total = this.state.activeQuestions.length;
        const accuracy = Math.round((this.state.correctCount / total) * 100);

        this.summaryStudentName.textContent = `Học sinh: ${this.student.name} • Lớp ${this.student.className}`;
        this.summaryScore.textContent = this.state.score.toLocaleString();
        this.summaryAccuracy.textContent = `${accuracy}% (${this.state.correctCount}/${total})`;
        this.summaryStreak.textContent = this.state.maxStreak;

        // Rank Badge
        let badge = "Tập Sự Vật Lí";
        if (accuracy === 100) badge = "🏆 Thần Đồng Vật Lí Nhiệt (S+)";
        else if (accuracy >= 85) badge = "⚡ Bậc Thầy Động Học Phân Tử (Rank S)";
        else if (accuracy >= 70) badge = "🔥 Chiến Binh Nhiệt Động Lực (Rank A)";
        else if (accuracy >= 50) badge = "⭐ Đạt Chuẩn Kiến Thức (Rank B)";
        else badge = "🌱 Cần Ôn Tập Thêm (Rank C)";

        this.summaryBadge.textContent = badge;

        // Remediation Button Logic (Only if there are missed concepts and we're in Round 1)
        if (this.state.round === 1 && this.state.missedConcepts.size > 0) {
            this.remediationPromptBox.style.display = 'flex';
            this.remediationPromptTitle.textContent = `Phát hiện ${this.state.missedConcepts.size} lỗ hổng kiến thức cần củng cố!`;
            this.btnStartRemediation.style.display = 'flex';
        } else {
            this.remediationPromptBox.style.display = 'none';
            this.btnStartRemediation.style.display = 'none';
        }

        this.switchScreen('summary');
    }

    // =========================================================================
    // TEACHER REPORT & CSV EXPORT
    // =========================================================================
    openTeacherReport() {
        this.repStudentName.textContent = this.student.name;
        this.repStudentClass.textContent = this.student.className;
        this.repTotalScore.textContent = this.state.score.toLocaleString();
        const total = this.state.sessionHistory.length;
        const passed = this.state.sessionHistory.filter(h => h.status === "Đạt").length;
        this.repAccuracy.textContent = `${Math.round((passed / Math.max(1, total)) * 100)}% (${passed}/${total})`;

        // Populate Table
        this.reportTableBody.innerHTML = '';
        this.state.sessionHistory.forEach((row, idx) => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td><strong>${idx + 1}</strong> (${row.type})</td>
                <td>${row.title}</td>
                <td>${row.detail}</td>
                <td><span class="${row.status === 'Đạt' ? 'badge-tag-pass' : 'badge-tag-fail'}">${row.status}</span></td>
                <td>+${row.score}</td>
            `;
            this.reportTableBody.appendChild(tr);
        });

        this.renderMath(this.modalTeacherReport);
        this.modalTeacherReport.classList.add('active');
    }

    exportReportToCSV() {
        const rows = [
            ["BAO CAO KET QUA HOC TAP MON VAT LI 12 - WAYGROUND"],
            ["Hoc Sinh:", this.student.name, "Lop:", this.student.className, "Thoi Gian:", new Date().toLocaleString('vi-VN')],
            ["Tong Diem:", this.state.score, "Chuoi Max:", this.state.maxStreak],
            [],
            ["STT", "Dang Cau", "Noi Dung Cau Hoi", "Chi Tiet Tra Loi", "Trang Thai", "Diem"]
        ];

        this.state.sessionHistory.forEach((h, idx) => {
            rows.push([
                idx + 1,
                h.type,
                `"${h.title.replace(/"/g, '""')}"`,
                `"${h.detail.replace(/"/g, '""')}"`,
                h.status,
                h.score
            ]);
        });

        const csvContent = "\uFEFF" + rows.map(e => e.join(",")).join("\n");
        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.setAttribute("href", url);
        link.setAttribute("download", `Bao_Cao_Vat_Li_12_${this.student.name.replace(/\s+/g, '_')}_${this.student.className}.csv`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
}

// Instantiate game on page ready
document.addEventListener('DOMContentLoaded', () => {
    window.game = new WaygroundGame();
});
