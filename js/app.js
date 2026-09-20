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

        // Teacher Management Dashboard (Student Roster & Class Analytics)
        this.modalTeacherDashboard = document.getElementById('modal-teacher-dashboard');
        this.btnOpenTeacherDashboard = document.getElementById('btn-open-teacher-dashboard');
        this.bannerTeacherPortal = document.getElementById('banner-teacher-portal');
        this.btnCloseTeacherDashboard = document.getElementById('btn-close-teacher-dashboard');

        this.tdTotalSubmissions = document.getElementById('td-total-submissions');
        this.tdAvgScore = document.getElementById('td-avg-score');
        this.tdAvgAccuracy = document.getElementById('td-avg-accuracy');
        this.tdRemediationCount = document.getElementById('td-remediation-count');

        this.tdFilterClass = document.getElementById('td-filter-class');
        this.tdFilterMode = document.getElementById('td-filter-mode');
        this.tdSearchStudent = document.getElementById('td-search-student');
        this.btnTdExportCsv = document.getElementById('btn-td-export-csv');
        this.btnTdSeedDemo = document.getElementById('btn-td-seed-demo');
        this.btnTdClearData = document.getElementById('btn-td-clear-data');

        this.tdTableCount = document.getElementById('td-table-count');
        this.tdStudentsTableBody = document.getElementById('td-students-table-body');
        this.tdInsightsList = document.getElementById('td-insights-list');
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

        // Teacher Management Dashboard Events
        if (this.btnOpenTeacherDashboard) {
            this.btnOpenTeacherDashboard.addEventListener('click', () => {
                if (window.soundEngine) soundEngine.playClick();
                this.openTeacherDashboard();
            });
        }
        if (this.bannerTeacherPortal) {
            this.bannerTeacherPortal.addEventListener('click', () => {
                if (window.soundEngine) soundEngine.playClick();
                this.openTeacherDashboard();
            });
        }
        if (this.btnCloseTeacherDashboard) {
            this.btnCloseTeacherDashboard.addEventListener('click', () => {
                if (window.soundEngine) soundEngine.playClick();
                this.closeTeacherDashboard();
            });
        }
        if (this.modalTeacherDashboard) {
            this.modalTeacherDashboard.addEventListener('click', (e) => {
                if (e.target === this.modalTeacherDashboard) {
                    this.closeTeacherDashboard();
                }
            });
        }
        if (this.tdFilterClass) {
            this.tdFilterClass.addEventListener('change', () => this.renderTeacherDashboard());
        }
        if (this.tdFilterMode) {
            this.tdFilterMode.addEventListener('change', () => this.renderTeacherDashboard());
        }
        if (this.tdSearchStudent) {
            this.tdSearchStudent.addEventListener('input', () => this.renderTeacherDashboard());
        }
        if (this.btnTdExportCsv) {
            this.btnTdExportCsv.addEventListener('click', () => this.exportTeacherDashboardCSV());
        }
        if (this.btnTdSeedDemo) {
            this.btnTdSeedDemo.addEventListener('click', () => {
                this.seedDemoData(true);
                this.renderTeacherDashboard();
                if (window.soundEngine) soundEngine.playCorrect();
            });
        }
        if (this.btnTdClearData) {
            this.btnTdClearData.addEventListener('click', () => {
                if (confirm("Thầy/Cô có chắc chắn muốn xóa toàn bộ lịch sử nộp bài của học sinh không?")) {
                    localStorage.removeItem('wayground_physics_records');
                    this.renderTeacherDashboard();
                    if (window.soundEngine) soundEngine.playClick();
                }
            });
        }

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

            // When modals are open: Escape closes them
            if (e.key === 'Escape') {
                if (this.imageZoomModal && this.imageZoomModal.classList.contains('active')) {
                    this.closeImageZoomModal();
                    return;
                }
                if (this.modalTeacherDashboard && this.modalTeacherDashboard.classList.contains('active')) {
                    this.closeTeacherDashboard();
                    return;
                }
                if (this.modalTeacherReport && this.modalTeacherReport.classList.contains('active')) {
                    this.btnCloseReport.click();
                    return;
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

        // Auto-save submission for Teacher Dashboard Roster
        this.saveCurrentSubmissionToStorage();

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
    // TEACHER REPORT (INDIVIDUAL STUDENT) & CSV EXPORT
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

    // =========================================================================
    // TEACHER MANAGEMENT DASHBOARD (ROSTER & CLASS ANALYTICS)
    // =========================================================================
    getStoredRecords() {
        try {
            const raw = localStorage.getItem('wayground_physics_records');
            if (raw) {
                const parsed = JSON.parse(raw);
                if (Array.isArray(parsed) && parsed.length > 0) {
                    return parsed;
                }
            }
        } catch (e) {
            console.warn("Could not read student records from localStorage:", e);
        }
        return this.seedDemoData(false);
    }

    saveStudentRecord(rec) {
        try {
            const records = this.getStoredRecords();
            records.unshift(rec); // newest first
            localStorage.setItem('wayground_physics_records', JSON.stringify(records));
        } catch (e) {
            console.warn("Could not save student record to localStorage:", e);
        }
    }

    saveCurrentSubmissionToStorage() {
        const total = this.state.activeQuestions.length;
        const accuracy = total > 0 ? Math.round((this.state.correctCount / total) * 100) : 0;
        
        let rank = "Rank C";
        if (accuracy === 100) rank = "Rank S+";
        else if (accuracy >= 85) rank = "Rank S";
        else if (accuracy >= 70) rank = "Rank A";
        else if (accuracy >= 50) rank = "Rank B";

        const modeMap = {
            'all': 'Hỗn hợp',
            'basic': 'Cơ bản',
            'challenging': 'Thử thách',
            'advanced': 'Nâng cao'
        };

        const now = new Date();
        const timeStr = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')} - ${now.getDate().toString().padStart(2, '0')}/${(now.getMonth() + 1).toString().padStart(2, '0')}`;

        const rec = {
            id: 'rec_' + Date.now(),
            name: this.student.name || 'Học sinh',
            className: this.student.className || '12',
            timestamp: timeStr,
            fullDate: now.toLocaleString('vi-VN'),
            mode: this.config.mode || 'all',
            modeLabel: modeMap[this.config.mode] || 'Hỗn hợp',
            score: this.state.score,
            correctCount: this.state.correctCount,
            totalQuestions: total,
            accuracy: accuracy,
            maxStreak: this.state.maxStreak,
            round: this.state.round,
            rank: rank,
            missedConcepts: Array.from(this.state.missedConcepts || []),
            history: JSON.parse(JSON.stringify(this.state.sessionHistory || []))
        };

        this.saveStudentRecord(rec);
    }

    seedDemoData(force = false) {
        const demoRecords = [
            {
                id: 'demo_1',
                name: 'Nguyễn Văn An',
                className: '12.1',
                timestamp: '15:30 - 20/09',
                fullDate: '20/09/2026, 15:30:12',
                mode: 'challenging',
                modeLabel: 'Thử thách',
                score: 8250,
                correctCount: 6,
                totalQuestions: 6,
                accuracy: 100,
                maxStreak: 6,
                round: 1,
                rank: 'Rank S+',
                missedConcepts: [],
                history: [
                    { round: 1, type: "Trắc nghiệm ABCD", title: "Mô hình động học phân tử chất", detail: "Chọn: [B] | Đáp án: [B]", status: "Đạt", score: 1000 },
                    { round: 1, type: "Trắc nghiệm ABCD", title: "Chuyển động Brown của hạt phấn hoa", detail: "Chọn: [B] | Đáp án: [B]", status: "Đạt", score: 1000 },
                    { round: 1, type: "Đúng/Sai Ý (a)", title: "Sự chuyển thể của nước", detail: "Chọn: Đúng | Chuẩn: Đúng", status: "Đạt", score: 250 },
                    { round: 1, type: "Đúng/Sai Ý (b)", title: "Sự chuyển thể của nước", detail: "Chọn: Đúng | Chuẩn: Đúng", status: "Đạt", score: 250 },
                    { round: 1, type: "Đúng/Sai Ý (c)", title: "Sự chuyển thể của nước", detail: "Chọn: Sai | Chuẩn: Sai", status: "Đạt", score: 250 },
                    { round: 1, type: "Đúng/Sai Ý (d)", title: "Sự chuyển thể của nước", detail: "Chọn: Sai | Chuẩn: Sai", status: "Đạt", score: 250 }
                ]
            },
            {
                id: 'demo_2',
                name: 'Trần Thị Mai',
                className: '12.1',
                timestamp: '15:42 - 20/09',
                fullDate: '20/09/2026, 15:42:05',
                mode: 'all',
                modeLabel: 'Hỗn hợp',
                score: 6900,
                correctCount: 5,
                totalQuestions: 6,
                accuracy: 83,
                maxStreak: 4,
                round: 1,
                rank: 'Rank S',
                missedConcepts: ['c_u2_quy_uoc_dau_a_q'],
                history: [
                    { round: 1, type: "Trắc nghiệm ABCD", title: "Đặc điểm các thể rắn, lỏng, khí", detail: "Chọn: [A] | Đáp án: [A]", status: "Đạt", score: 1000 },
                    { round: 1, type: "Trắc nghiệm ABCD", title: "Khái niệm nội năng U = Et + Ed", detail: "Chọn: [C] | Đáp án: [C]", status: "Đạt", score: 1000 },
                    { round: 1, type: "Trắc nghiệm ABCD", title: "Quy ước dấu của Công A và Nhiệt lượng Q", detail: "Chọn: [A] | Đáp án: [B]", status: "Chưa đạt", score: 0 }
                ]
            },
            {
                id: 'demo_3',
                name: 'Lê Quốc Bảo',
                className: '12.2',
                timestamp: '16:05 - 20/09',
                fullDate: '20/09/2026, 16:05:40',
                mode: 'basic',
                modeLabel: 'Cơ bản',
                score: 5400,
                correctCount: 4,
                totalQuestions: 6,
                accuracy: 67,
                maxStreak: 3,
                round: 1,
                rank: 'Rank A',
                missedConcepts: ['c_u2_piston_khi_nen', 'c_u3_thang_celsius_kelvin'],
                history: [
                    { round: 1, type: "Trắc nghiệm ABCD", title: "Định luật I Nhiệt động lực học", detail: "Chọn: [B] | Đáp án: [B]", status: "Đạt", score: 1000 }
                ]
            },
            {
                id: 'demo_4',
                name: 'Phạm Minh Khôi',
                className: '12.2',
                timestamp: '16:18 - 20/09',
                fullDate: '20/09/2026, 16:18:22',
                mode: 'advanced',
                modeLabel: 'Nâng cao',
                score: 7100,
                correctCount: 5,
                totalQuestions: 6,
                accuracy: 83,
                maxStreak: 5,
                round: 1,
                rank: 'Rank S',
                missedConcepts: ['c_u2_piston_khi_nen'],
                history: [
                    { round: 1, type: "Trắc nghiệm ABCD", title: "Xilanh dãn nở sinh công và nhận nhiệt", detail: "Chọn: [C] | Đáp án: [D]", status: "Chưa đạt", score: 0 }
                ]
            },
            {
                id: 'demo_5',
                name: 'Hoàng Thảo Vy',
                className: '12.1',
                timestamp: '16:35 - 20/09',
                fullDate: '20/09/2026, 16:35:10',
                mode: 'challenging',
                modeLabel: 'Thử thách',
                score: 3800,
                correctCount: 3,
                totalQuestions: 6,
                accuracy: 50,
                maxStreak: 2,
                round: 1,
                rank: 'Rank B',
                missedConcepts: ['c_u2_quy_uoc_dau_a_q', 'c_u3_thang_celsius_kelvin'],
                history: [
                    { round: 1, type: "Trắc nghiệm ABCD", title: "Nhiệt độ không tuyệt đối 0 Kelvin", detail: "Chọn: [B] | Đáp án: [B]", status: "Đạt", score: 1000 }
                ]
            },
            {
                id: 'demo_6',
                name: 'Vũ Đình Dũng',
                className: '12.2',
                timestamp: '16:50 - 20/09',
                fullDate: '20/09/2026, 16:50:45',
                mode: 'advanced',
                modeLabel: 'Nâng cao',
                score: 8500,
                correctCount: 6,
                totalQuestions: 6,
                accuracy: 100,
                maxStreak: 6,
                round: 2,
                rank: 'Rank S+',
                missedConcepts: [],
                history: [
                    { round: 2, type: "Củng cố Lượt 2", title: "Bản sao củng cố: Xilanh nén khí sinh công", detail: "Chọn: [A] | Đáp án: [A]", status: "Đạt", score: 1000 }
                ]
            }
        ];

        if (force || !localStorage.getItem('wayground_physics_records')) {
            try {
                localStorage.setItem('wayground_physics_records', JSON.stringify(demoRecords));
            } catch (e) {
                console.warn("Could not seed demo records to localStorage:", e);
            }
        }
        return demoRecords;
    }

    openTeacherDashboard() {
        if (!this.modalTeacherDashboard) return;
        this.renderTeacherDashboard();
        this.modalTeacherDashboard.classList.add('active');
    }

    closeTeacherDashboard() {
        if (!this.modalTeacherDashboard) return;
        this.modalTeacherDashboard.classList.remove('active');
    }

    renderTeacherDashboard() {
        const records = this.getStoredRecords();

        // 1. Populate Class Filter dynamically
        if (this.tdFilterClass) {
            const currentSelectedClass = this.tdFilterClass.value;
            const uniqueClasses = Array.from(new Set(records.map(r => r.className).filter(Boolean))).sort();
            
            this.tdFilterClass.innerHTML = '<option value="all">Tất Cả Các Lớp</option>';
            uniqueClasses.forEach(cls => {
                const opt = document.createElement('option');
                opt.value = cls;
                opt.textContent = `Lớp ${cls}`;
                if (cls === currentSelectedClass) opt.selected = true;
                this.tdFilterClass.appendChild(opt);
            });
        }

        // 2. Filter records
        const classFilter = this.tdFilterClass ? this.tdFilterClass.value : 'all';
        const modeFilter = this.tdFilterMode ? this.tdFilterMode.value : 'all';
        const searchQuery = this.tdSearchStudent ? this.tdSearchStudent.value.trim().toLowerCase() : '';

        const filtered = records.filter(r => {
            if (classFilter !== 'all' && r.className !== classFilter) return false;
            if (modeFilter !== 'all' && r.mode !== modeFilter) return false;
            if (searchQuery && !r.name.toLowerCase().includes(searchQuery)) return false;
            return true;
        });

        // 3. Compute and render KPIs
        const totalSubs = filtered.length;
        const totalScore = filtered.reduce((acc, cur) => acc + (cur.score || 0), 0);
        const avgScore = totalSubs > 0 ? Math.round(totalScore / totalSubs) : 0;
        const totalAcc = filtered.reduce((acc, cur) => acc + (cur.accuracy || 0), 0);
        const avgAcc = totalSubs > 0 ? Math.round(totalAcc / totalSubs) : 0;
        const remediationSubs = filtered.filter(r => r.round === 2).length;

        if (this.tdTotalSubmissions) this.tdTotalSubmissions.textContent = totalSubs;
        if (this.tdAvgScore) this.tdAvgScore.textContent = avgScore.toLocaleString();
        if (this.tdAvgAccuracy) this.tdAvgAccuracy.textContent = `${avgAcc}%`;
        if (this.tdRemediationCount) this.tdRemediationCount.textContent = remediationSubs;
        if (this.tdTableCount) this.tdTableCount.textContent = `${totalSubs} học sinh`;

        // 4. Render Table Rows
        if (this.tdStudentsTableBody) {
            this.tdStudentsTableBody.innerHTML = '';
            if (filtered.length === 0) {
                const emptyTr = document.createElement('tr');
                emptyTr.innerHTML = `<td colspan="11" style="text-align: center; padding: 32px; color: var(--text-muted);">
                    Chưa có bài làm nào phù hợp với bộ lọc. Hãy đổi bộ lọc hoặc bấm "Nạp Demo Lớp 12"!
                </td>`;
                this.tdStudentsTableBody.appendChild(emptyTr);
            } else {
                filtered.forEach((r, idx) => {
                    const tr = document.createElement('tr');
                    
                    // Rank class
                    let rankClass = 'rank-c';
                    if (r.rank.includes('S+')) rankClass = 'rank-s-plus';
                    else if (r.rank.includes('S')) rankClass = 'rank-s';
                    else if (r.rank.includes('A')) rankClass = 'rank-a';
                    else if (r.rank.includes('B')) rankClass = 'rank-b';

                    const roundBadge = r.round === 2 
                        ? `<span class="badge-round round-2">Vòng 2 Củng Cố</span>`
                        : `<span class="badge-round round-1">Vòng 1</span>`;

                    tr.innerHTML = `
                        <td><strong>${idx + 1}</strong></td>
                        <td class="td-student-name"><strong>${r.name}</strong></td>
                        <td><span class="badge-class">${r.className}</span></td>
                        <td><span class="time-sub">${r.timestamp || r.fullDate || '-'}</span></td>
                        <td><span class="badge-mode mode-${r.mode || 'all'}">${r.modeLabel || 'Hỗn hợp'}</span></td>
                        <td class="td-score"><strong>${(r.score || 0).toLocaleString()}</strong></td>
                        <td>${r.correctCount || 0}/${r.totalQuestions || 0}</td>
                        <td><span class="badge-acc acc-${r.accuracy >= 80 ? 'high' : (r.accuracy >= 50 ? 'med' : 'low')}">${r.accuracy}%</span></td>
                        <td><span class="badge-rank ${rankClass}">${r.rank}</span></td>
                        <td>${roundBadge}</td>
                        <td>
                            <button class="btn-td-view" data-record-id="${r.id}" title="Xem chi tiết từng câu làm của học sinh">
                                👁️ Chi Tiết
                            </button>
                        </td>
                    `;

                    const viewBtn = tr.querySelector('.btn-td-view');
                    if (viewBtn) {
                        viewBtn.addEventListener('click', () => {
                            this.openStudentSubmissionDetail(r.id);
                        });
                    }

                    this.tdStudentsTableBody.appendChild(tr);
                });
            }
        }

        // 5. Render Diagnostic Error Insights
        this.renderDiagnosticInsights(filtered);
    }

    renderDiagnosticInsights(filteredRecords) {
        if (!this.tdInsightsList) return;
        this.tdInsightsList.innerHTML = '';

        const conceptCounts = {};
        filteredRecords.forEach(r => {
            if (Array.isArray(r.missedConcepts)) {
                r.missedConcepts.forEach(c => {
                    conceptCounts[c] = (conceptCounts[c] || 0) + 1;
                });
            }
        });

        const sortedConcepts = Object.keys(conceptCounts).sort((a, b) => conceptCounts[b] - conceptCounts[a]);

        const conceptDictionary = {
            'c_u1_mo_hinh_phan_tu': { name: 'Mô hình động học phân tử chất', note: 'Học sinh hay nhầm lẫn các phân tử ngừng chuyển động ở 0 độ C.' },
            'c_u1_nhiet_do_chuyen_dong': { name: 'Nhiệt độ và tốc độ phân tử', note: 'Cần nhấn mạnh nhiệt độ đo động năng chuyển động nhiệt hỗn loạn.' },
            'c_u1_chuyen_dong_brown': { name: 'Chuyển động Brown', note: 'Học sinh dễ chọn nhầm phấn hoa tự sinh lực chuyển động.' },
            'c_u1_the_chat_dac_diem': { name: 'Đặc điểm thể rắn, lỏng, khí', note: 'Cần củng cố về khoảng cách phân tử và lực tương tác ở các thể.' },
            'c_u1_chuyen_the_nhiet': { name: 'Sự chuyển thể & Điểm chuyển pha', note: 'Lưu ý trong suốt quá trình chuyển thể thì nhiệt độ không đổi.' },
            'c_u2_khai_niem_noi_nang': { name: 'Khái niệm nội năng (U = Et + Ed)', note: 'Học sinh hay quên nội năng phụ thuộc cả nhiệt độ và thể tích.' },
            'c_u2_bien_doi_noi_nang': { name: 'Hai cách biến đổi nội năng', note: 'Phân biệt rõ ràng thực hiện công (có chuyển dời vĩ mô) và truyền nhiệt.' },
            'c_u2_dinh_luat_1_nhiet': { name: 'Định luật I Nhiệt động lực học', note: 'Hệ thức cốt lõi: ΔU = A + Q.' },
            'c_u2_quy_uoc_dau_a_q': { name: 'Quy ước dấu Công A và Nhiệt lượng Q', note: 'Nhận nhiệt Q > 0, tỏa nhiệt Q < 0; nhận công A > 0, sinh công A < 0.' },
            'c_u2_piston_khi_nen': { name: 'Xilanh nén khí / dãn nở sinh công', note: 'Dãn nở sinh công ra môi trường nên A < 0, nén khí nhận công nên A > 0.' },
            'c_u3_khai_niem_nhiet_do': { name: 'Khái niệm nhiệt độ & Cân bằng nhiệt', note: 'Hai vật cân bằng nhiệt có cùng nhiệt độ, không còn truyền nhiệt lượng.' },
            'c_u3_thang_celsius_kelvin': { name: 'Chuyển đổi thang Celsius và Kelvin', note: 'Công thức T(K) = t(°C) + 273,15; độ biến thiên nhiệt độ: ΔT(K) = Δt(°C).' },
            'c_u3_thang_fahrenheit': { name: 'Thang nhiệt độ Fahrenheit', note: 'Công thức t(°F) = 1,8 * t(°C) + 32.' }
        };

        if (sortedConcepts.length === 0) {
            this.tdInsightsList.innerHTML = `
                <div class="insight-item insight-success">
                    <span class="insight-icon">🎉</span>
                    <div class="insight-text">
                        <strong>Lớp nắm rất vững kiến thức!</strong>
                        <p>Không phát hiện lỗ hổng kiến thức nghiêm trọng nào trong nhóm bài nộp này.</p>
                    </div>
                </div>
            `;
            return;
        }

        sortedConcepts.slice(0, 4).forEach(cid => {
            const info = conceptDictionary[cid] || { 
                name: cid.replace(/^c_u\d+_/, '').replace(/_/g, ' '),
                note: 'Cần cho học sinh làm thêm các câu củng cố vòng 2 thuộc chủ đề này.'
            };
            const count = conceptCounts[cid];
            const item = document.createElement('div');
            item.className = 'insight-item';
            item.innerHTML = `
                <span class="insight-icon">⚠️</span>
                <div class="insight-text">
                    <div class="insight-name">
                        <strong>${info.name}</strong> 
                        <span class="insight-count-badge">${count} học sinh làm sai</span>
                    </div>
                    <p class="insight-note">💡 <em>Lưu ý sư phạm:</em> ${info.note}</p>
                </div>
            `;
            this.tdInsightsList.appendChild(item);
        });
    }

    openStudentSubmissionDetail(recordId) {
        const records = this.getStoredRecords();
        const record = records.find(r => r.id === recordId);
        if (!record) return;

        if (this.repStudentName) this.repStudentName.textContent = record.name;
        if (this.repStudentClass) this.repStudentClass.textContent = record.className;
        if (this.repTotalScore) this.repTotalScore.textContent = (record.score || 0).toLocaleString();
        
        const total = record.history ? record.history.length : (record.totalQuestions || 0);
        const passed = record.history ? record.history.filter(h => h.status === "Đạt").length : (record.correctCount || 0);
        if (this.repAccuracy) this.repAccuracy.textContent = `${record.accuracy}% (${passed}/${total})`;

        if (this.reportTableBody) {
            this.reportTableBody.innerHTML = '';
            if (record.history && record.history.length > 0) {
                record.history.forEach((row, idx) => {
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
            } else {
                const tr = document.createElement('tr');
                tr.innerHTML = `<td colspan="5" style="text-align: center; padding: 20px;">Không có chi tiết bài làm từng câu của lượt này.</td>`;
                this.reportTableBody.appendChild(tr);
            }
        }

        this.renderMath(this.modalTeacherReport);
        this.modalTeacherReport.classList.add('active');
        if (window.soundEngine) soundEngine.playClick();
    }

    exportTeacherDashboardCSV() {
        const records = this.getStoredRecords();
        const classFilter = this.tdFilterClass ? this.tdFilterClass.value : 'all';
        const modeFilter = this.tdFilterMode ? this.tdFilterMode.value : 'all';
        const searchQuery = this.tdSearchStudent ? this.tdSearchStudent.value.trim().toLowerCase() : '';

        const filtered = records.filter(r => {
            if (classFilter !== 'all' && r.className !== classFilter) return false;
            if (modeFilter !== 'all' && r.mode !== modeFilter) return false;
            if (searchQuery && !r.name.toLowerCase().includes(searchQuery)) return false;
            return true;
        });

        const rows = [
            ["BANG DIEM QUAN LY HOC SINH MON VAT LI 12 - WAYGROUND PHYSICS"],
            ["Ngay Xuat:", new Date().toLocaleString('vi-VN'), "Bo Loc Lop:", classFilter, "Bo Loc Muc Do:", modeFilter],
            ["Tong So Hoc Sinh:", filtered.length],
            [],
            ["STT", "Ho va Ten", "Lop", "Thoi Gian Nop", "Muc Do", "Diem So", "So Cau Dung", "Tong So Cau", "Ti Le Dung (%)", "Chuoi Max", "Xep Loai", "Luot Choi"]
        ];

        filtered.forEach((r, idx) => {
            rows.push([
                idx + 1,
                `"${(r.name || '').replace(/"/g, '""')}"`,
                `"${(r.className || '').replace(/"/g, '""')}"`,
                `"${(r.timestamp || r.fullDate || '').replace(/"/g, '""')}"`,
                r.modeLabel || r.mode || 'Hỗn hợp',
                r.score || 0,
                r.correctCount || 0,
                r.totalQuestions || 0,
                `${r.accuracy || 0}%`,
                r.maxStreak || 0,
                r.rank || 'Rank C',
                r.round === 2 ? 'Vòng 2 Củng Cố' : 'Vòng 1'
            ]);
        });

        const csvContent = "\uFEFF" + rows.map(e => e.join(",")).join("\n");
        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.setAttribute("href", url);
        link.setAttribute("download", `Bang_Diem_Vat_Li_12_Lop_${classFilter}_${new Date().toISOString().slice(0,10)}.csv`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
}

// Instantiate game on page ready
document.addEventListener('DOMContentLoaded', () => {
    window.game = new WaygroundGame();
});
