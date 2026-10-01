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
            activeTab: 'presets', // 'presets', 'by-unit', or 'custom'
            preset: 'test15p',
            unit: 'all',
            selectedUnits: ['all'],
            questionType: 'all',
            mode: 'all', // 'all', 'basic', 'challenging', 'advanced'
            count: 10,
            questionTime: 25, // 25 seconds per question
            timerMode: 'unlimited' // 'unlimited' (Study Mode) or 'timed' (Arena)
        };

        // Per-unit breakdown configuration
        this.byUnitConfig = {
            unit1: { count: 3, selectedQids: new Set() },
            unit2: { count: 3, selectedQids: new Set() },
            unit3: { count: 3, selectedQids: new Set() },
            unit4: { count: 3, selectedQids: new Set() },
            unit5: { count: 3, selectedQids: new Set() },
            unit6: { count: 3, selectedQids: new Set() },
            unit7: { count: 3, selectedQids: new Set() },
            unit8: { count: 3, selectedQids: new Set() }
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
            questionStatus: {}, // { [index]: { answered: boolean, isCorrect: boolean } }
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
        this.initThemeToggle();
        this.bindJourneyHubEvents();
        this.initByUnitDrawers();
        this.bindEvents();
        this.updateLobbyPreview();
    }

    initDOMReferences() {
        // Screens
        this.screens = {
            lobby: document.getElementById('screen-lobby'),
            arena: document.getElementById('screen-arena'),
            summary: document.getElementById('screen-summary'),
            minigames: document.getElementById('screen-minigames')
        };

        // Mini-Games Arcade Navigation Buttons
        this.btnOpenMiniGames = document.getElementById('btn-open-minigames');
        this.bannerOpenMiniGames = document.getElementById('banner-open-minigames');
        this.btnArcadeBackLobby = document.getElementById('btn-arcade-back-lobby');

        // Student Profile Inputs
        this.inputStudentName = document.getElementById('input-student-name');
        this.inputStudentClass = document.getElementById('input-student-class');

        // Lobby Mode Tabs & Panels
        this.tabBtnPresets = document.getElementById('tab-btn-presets');
        this.tabBtnByUnit = document.getElementById('tab-btn-by-unit');
        this.tabBtnCustom = document.getElementById('tab-btn-custom');
        this.panelPresets = document.getElementById('panel-presets');
        this.panelByUnit = document.getElementById('panel-by-unit');
        this.panelCustom = document.getElementById('panel-custom');
        this.presetCards = document.querySelectorAll('.preset-card');

        // Tab 2: By-Unit DOM references
        this.matrixTotalCount = document.getElementById('matrix-total-count');
        this.matrixTotalBreakdown = document.getElementById('matrix-total-breakdown');

        // Lobby selections (Custom Tab)
        this.unitCards = document.querySelectorAll('.unit-card');
        this.typeCards = document.querySelectorAll('.type-card');
        this.modeCards = document.querySelectorAll('.mode-card');
        this.countChips = document.querySelectorAll('.count-chip');
        this.customCountSlider = document.getElementById('custom-count-slider');
        this.customCountInput = document.getElementById('custom-count-input');
        this.sliderMaxLabel = document.getElementById('slider-max-label');
        this.verdictCountHighlight = document.getElementById('verdict-count-highlight');
        this.verdictPoolSub = document.getElementById('verdict-pool-sub');

        this.btnStart = document.getElementById('btn-start-game');
        this.btnQuickStart = document.getElementById('btn-quick-start');

        // Lobby Ticket Summary references
        this.lobbySummaryCard = document.getElementById('lobby-summary-card');
        this.summaryQuestionsToPlay = document.getElementById('summary-questions-to-play');
        this.summaryPoolTotal = document.getElementById('summary-pool-total');
        this.summaryHeadline = document.getElementById('summary-headline');
        this.summarySubtext = document.getElementById('summary-subtext');
        this.summaryCoverageText = document.getElementById('summary-coverage-text');
        this.summaryCoverageFill = document.getElementById('summary-coverage-fill');
        this.summaryTagUnit = document.getElementById('summary-tag-unit');
        this.summaryTagType = document.getElementById('summary-tag-type');
        this.summaryTagMode = document.getElementById('summary-tag-mode');
        this.summaryTagTimer = document.getElementById('summary-tag-timer');
        this.summaryNoticeBox = document.getElementById('summary-notice-box');
        this.countAllBadge = document.getElementById('count-all-badge');
        this.btnStartText = document.getElementById('btn-start-text');

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
        this.shortAnswerContainer = document.getElementById('short-answer-container');

        // Feedback Popup
        this.feedbackOverlay = document.getElementById('feedback-overlay');
        this.feedbackMeme = document.getElementById('feedback-meme');
        this.feedbackTitle = document.getElementById('feedback-title');
        this.feedbackPts = document.getElementById('feedback-pts');
        this.feedbackExplainList = document.getElementById('feedback-explain-list');
        this.btnNext = document.getElementById('btn-next-question');

        // Scientific Visual Box in Feedback Overlay (Học từ hình ảnh & giải thích)
        this.feedbackVisualBox = document.getElementById('feedback-visual-box');
        this.feedbackImg = document.getElementById('feedback-img');
        this.feedbackImgCaption = document.getElementById('feedback-img-caption');
        this.btnZoomFeedbackImg = document.getElementById('btn-zoom-feedback-img');

        // Study Mode Arena Navigation & Banner
        this.globalTimerChips = document.querySelectorAll('.global-timer-chip');
        this.timerChips = document.querySelectorAll('.timer-chip');
        this.hudTimerBadge = document.getElementById('hud-timer-badge');
        this.hudTimerIcon = document.getElementById('hud-timer-icon');
        this.hudTimerText = document.getElementById('hud-timer-text');
        this.btnArenaToggleTimer = document.getElementById('btn-arena-toggle-timer');
        this.arenaTimerToggleLabel = document.getElementById('arena-timer-toggle-label');
        this.studyModeBanner = document.getElementById('study-mode-banner');
        this.studyInlineExplanation = document.getElementById('study-inline-explanation');
        this.studyExplainContent = document.getElementById('study-explain-content');
        this.arenaStudyNav = document.getElementById('arena-study-nav');
        this.btnStudyPrev = document.getElementById('btn-study-prev');
        this.btnStudyNext = document.getElementById('btn-study-next');
        this.arenaQuestionDots = document.getElementById('arena-question-dots');
        this.btnStudyShowExplain = document.getElementById('btn-study-show-explain');
        this.btnStudyRetry = document.getElementById('btn-study-retry');
        this.btnStudyFinish = document.getElementById('btn-study-finish');

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
        this.summaryMistakesSection = document.getElementById('summary-mistakes-section');
        this.mistakesCountBadge = document.getElementById('mistakes-count-badge');
        this.summaryMistakesList = document.getElementById('summary-mistakes-list');

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

        // Theme Toggle & Modern Bento Controls
        this.btnToggleTheme = document.getElementById('btn-toggle-theme');
        this.btnHeroQuickStart = document.getElementById('btn-hero-quick-start');
        this.btnHeroScrollJourney = document.getElementById('btn-hero-scroll-journey');
        this.headerStudentName = document.getElementById('header-student-name');

        // Image Zoom Modal
        this.imageZoomModal = document.getElementById('image-zoom-modal');
        this.imageZoomImg = document.getElementById('image-zoom-img');
        this.imageZoomCaption = document.getElementById('image-zoom-caption');
        this.btnCloseZoomModal = document.getElementById('btn-close-zoom-modal');

        // Teacher Password Authentication Prompt Modal
        this.modalTeacherPasswordPrompt = document.getElementById('modal-teacher-password-prompt');
        this.inputPromptPwd = document.getElementById('input-prompt-pwd');
        this.btnPromptToggleEye = document.getElementById('btn-prompt-toggle-eye');
        this.promptPwdError = document.getElementById('prompt-pwd-error');
        this.btnSubmitPromptPwd = document.getElementById('btn-submit-prompt-pwd');
        this.btnClosePwdPrompt = document.getElementById('btn-close-pwd-prompt');
        this.formPwdPrompt = document.getElementById('form-pwd-prompt');
        this.btnOpenTeacherDashNav = document.getElementById('btn-open-teacher-dash');

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

        // Auto-restore student profile from localStorage for instant friendly UX
        try {
            const savedName = localStorage.getItem('wayground_student_name');
            const savedClass = localStorage.getItem('wayground_student_class');
            if (savedName && this.inputStudentName) this.inputStudentName.value = savedName;
            if (savedClass && this.inputStudentClass) this.inputStudentClass.value = savedClass;
            if (savedName && this.headerStudentName) this.headerStudentName.textContent = savedName;
        } catch (e) {}
    }

    initThemeToggle() {
        const savedTheme = localStorage.getItem('wayground_theme') || 'light';
        const applyTheme = (theme) => {
            if (theme === 'dark') {
                document.body.classList.add('dark-theme');
                if (this.btnToggleTheme) this.btnToggleTheme.textContent = '🌙';
            } else {
                document.body.classList.remove('dark-theme');
                if (this.btnToggleTheme) this.btnToggleTheme.textContent = '☀️';
            }
        };

        applyTheme(savedTheme);

        if (this.btnToggleTheme) {
            this.btnToggleTheme.addEventListener('click', () => {
                const isDark = document.body.classList.contains('dark-theme');
                const newTheme = isDark ? 'light' : 'dark';
                localStorage.setItem('wayground_theme', newTheme);
                applyTheme(newTheme);
                if (window.soundEngine) soundEngine.playClick();
            });
        }
    }

    bindEvents() {
        // Bento Hero CTAs
        if (this.btnHeroQuickStart) {
            this.btnHeroQuickStart.addEventListener('click', () => {
                if (this.btnQuickStart) this.btnQuickStart.click();
            });
        }
        if (this.btnHeroScrollJourney) {
            this.btnHeroScrollJourney.addEventListener('click', () => {
                const hub = document.querySelector('.learning-journey-hub');
                if (hub) hub.scrollIntoView({ behavior: 'smooth' });
                if (window.soundEngine) soundEngine.playClick();
            });
        }

        // Keep header profile chip in sync with student name input
        if (this.inputStudentName) {
            this.inputStudentName.addEventListener('input', (e) => {
                const name = e.target.value.trim();
                if (this.headerStudentName) {
                    this.headerStudentName.textContent = name || 'Thí sinh 2025';
                }
            });
        }

        // Sound toggle
        this.btnToggleSound.addEventListener('click', () => {
            const isEnabled = soundEngine.toggleSound();
            this.btnToggleSound.textContent = isEnabled ? '🔊' : '🔇';
            soundEngine.playClick();
        });

        // Mini-Games Arcade Navigation
        const openMiniGames = () => {
            this.switchScreen('minigames');
            if (window.soundEngine) soundEngine.playPowerup();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        };

        if (this.btnOpenMiniGames) {
            this.btnOpenMiniGames.addEventListener('click', openMiniGames);
        }
        if (this.bannerOpenMiniGames) {
            this.bannerOpenMiniGames.addEventListener('click', openMiniGames);
        }
        if (this.btnArcadeBackLobby) {
            this.btnArcadeBackLobby.addEventListener('click', () => {
                this.switchScreen('lobby');
                if (window.miniGamesManager) window.miniGamesManager.returnToHub();
                if (window.soundEngine) soundEngine.playClick();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        }

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

        // Lobby Mode Tabs Switcher (3 Tabs: Presets vs By-Unit vs Custom)
        const switchTab = (tabName) => {
            this.config.activeTab = tabName;
            if (this.tabBtnPresets) this.tabBtnPresets.classList.toggle('active', tabName === 'presets');
            if (this.tabBtnByUnit) this.tabBtnByUnit.classList.toggle('active', tabName === 'by-unit');
            if (this.tabBtnCustom) this.tabBtnCustom.classList.toggle('active', tabName === 'custom');

            if (this.panelPresets) this.panelPresets.classList.toggle('active', tabName === 'presets');
            if (this.panelByUnit) this.panelByUnit.classList.toggle('active', tabName === 'by-unit');
            if (this.panelCustom) this.panelCustom.classList.toggle('active', tabName === 'custom');

            this.updateLobbyPreview();
            if (window.soundEngine) soundEngine.playClick();
        };

        if (this.tabBtnPresets) this.tabBtnPresets.addEventListener('click', () => switchTab('presets'));
        if (this.tabBtnByUnit) this.tabBtnByUnit.addEventListener('click', () => switchTab('by-unit'));
        if (this.tabBtnCustom) this.tabBtnCustom.addEventListener('click', () => switchTab('custom'));

        // By-Unit Steppers & Pills & Drawers Event Bindings
        ['unit1', 'unit2', 'unit3', 'unit4', 'unit5', 'unit6', 'unit7', 'unit8'].forEach(unitKey => {
            const stepperSub = document.querySelector(`.btn-stepper-sub[data-unit="${unitKey}"]`);
            const stepperAdd = document.querySelector(`.btn-stepper-add[data-unit="${unitKey}"]`);
            const stepperInput = document.getElementById(`count-input-${unitKey}`);
            const pills = document.querySelectorAll(`.matrix-pill[data-unit="${unitKey}"]`);
            const toggleDrawerBtn = document.querySelector(`.btn-toggle-drawer[data-unit="${unitKey}"]`);
            const drawer = document.getElementById(`drawer-${unitKey}`);
            const selectAllBtn = document.querySelector(`.btn-select-all[data-unit="${unitKey}"]`);
            const clearAllBtn = document.querySelector(`.btn-clear-all[data-unit="${unitKey}"]`);

            const setUnitCount = (newCount, syncCheckboxes = true) => {
                const maxVal = QUESTION_BANK[unitKey]?.questions?.length || 22;
                newCount = Math.max(0, Math.min(newCount, maxVal));
                this.byUnitConfig[unitKey].count = newCount;
                if (stepperInput) stepperInput.value = newCount;

                // Sync pills
                pills.forEach(p => {
                    const v = parseInt(p.dataset.val, 10);
                    p.classList.toggle('active', v === newCount);
                });

                // Sync checkboxes in drawer if requested
                if (syncCheckboxes) {
                    const questions = QUESTION_BANK[unitKey]?.questions || [];
                    this.byUnitConfig[unitKey].selectedQids.clear();
                    questions.forEach((q, idx) => {
                        const cb = document.querySelector(`.question-checkbox[data-qid="${q.id}"]`);
                        const isSelected = idx < newCount;
                        if (isSelected) {
                            this.byUnitConfig[unitKey].selectedQids.add(q.id);
                        }
                        if (cb) {
                            cb.checked = isSelected;
                            const item = cb.closest('.drawer-question-item');
                            if (item) item.classList.toggle('selected', isSelected);
                        }
                    });
                }

                const detailCountEl = document.getElementById(`selected-detail-count-${unitKey}`);
                if (detailCountEl) detailCountEl.textContent = this.byUnitConfig[unitKey].selectedQids.size;

                this.updateLobbyPreview();
            };

            if (stepperSub) {
                stepperSub.addEventListener('click', () => {
                    setUnitCount((this.byUnitConfig[unitKey].count || 0) - 1, true);
                    if (window.soundEngine) soundEngine.playClick();
                });
            }
            if (stepperAdd) {
                stepperAdd.addEventListener('click', () => {
                    setUnitCount((this.byUnitConfig[unitKey].count || 0) + 1, true);
                    if (window.soundEngine) soundEngine.playClick();
                });
            }
            if (stepperInput) {
                stepperInput.addEventListener('input', () => {
                    let val = parseInt(stepperInput.value, 10);
                    if (isNaN(val)) return;
                    setUnitCount(val, true);
                });
            }

            pills.forEach(pill => {
                pill.addEventListener('click', () => {
                    const val = parseInt(pill.dataset.val, 10);
                    setUnitCount(val, true);
                    if (window.soundEngine) soundEngine.playClick();
                });
            });

            if (toggleDrawerBtn && drawer) {
                toggleDrawerBtn.addEventListener('click', () => {
                    const isHidden = drawer.style.display === 'none';
                    drawer.style.display = isHidden ? 'block' : 'none';
                    const arrow = toggleDrawerBtn.querySelector('.drawer-arrow');
                    if (arrow) arrow.textContent = isHidden ? '▲' : '▼';
                    if (window.soundEngine) soundEngine.playClick();
                });
            }

            if (selectAllBtn) {
                selectAllBtn.addEventListener('click', () => {
                    const maxVal = QUESTION_BANK[unitKey]?.questions?.length || 22;
                    setUnitCount(maxVal, true);
                    if (window.soundEngine) soundEngine.playClick();
                });
            }
            if (clearAllBtn) {
                clearAllBtn.addEventListener('click', () => {
                    setUnitCount(0, true);
                    if (window.soundEngine) soundEngine.playClick();
                });
            }
        });

        // Preset Cards (1-Click Exam Packs)
        const PRESETS_MAP = {
            quick5: { unit: 'all', questionType: 'all', mode: 'basic', timerMode: 'unlimited', count: 5 },
            test15p: { unit: 'all', questionType: 'all', mode: 'all', timerMode: 'unlimited', count: 10 },
            test45p: { unit: 'all', questionType: 'all', mode: 'all', timerMode: 'timed', count: 20 },
            grad28: { unit: 'all', questionType: 'all', mode: 'all', timerMode: 'timed', count: 28 },
            hard15: { unit: 'all', questionType: 'all', mode: 'advanced', timerMode: 'timed', count: 15 },
            all66: { unit: 'all', questionType: 'all', mode: 'all', timerMode: 'unlimited', count: 'all' }
        };

        if (this.presetCards) {
            this.presetCards.forEach(card => {
                card.addEventListener('click', () => {
                    this.presetCards.forEach(c => c.classList.remove('active'));
                    card.classList.add('active');
                    const presetKey = card.dataset.preset;
                    const p = PRESETS_MAP[presetKey];
                    if (p) {
                        this.config.preset = presetKey;
                        this.config.unit = p.unit;
                        this.config.selectedUnits = [p.unit];
                        this.config.questionType = p.questionType;
                        this.config.mode = p.mode;
                        this.config.timerMode = p.timerMode;
                        this.config.count = p.count;

                        this.syncCustomTabUI();
                        this.updateLobbyPreview();
                        if (window.soundEngine) soundEngine.playClick();
                    }
                });
            });
        }

        // Multi-Select Unit Cards
        this.unitCards.forEach(card => {
            card.addEventListener('click', () => {
                const u = card.dataset.unit;
                this.config.preset = 'custom';
                if (this.presetCards) this.presetCards.forEach(c => c.classList.remove('active'));

                if (u === 'all') {
                    this.config.selectedUnits = ['all'];
                    this.config.unit = 'all';
                    this.unitCards.forEach(c => c.classList.toggle('active', c.dataset.unit === 'all'));
                } else {
                    this.config.selectedUnits = this.config.selectedUnits.filter(x => x !== 'all');
                    const allCard = Array.from(this.unitCards).find(c => c.dataset.unit === 'all');
                    if (allCard) allCard.classList.remove('active');

                    if (this.config.selectedUnits.includes(u)) {
                        this.config.selectedUnits = this.config.selectedUnits.filter(x => x !== u);
                    } else {
                        this.config.selectedUnits.push(u);
                    }

                    if (this.config.selectedUnits.length === 0 || this.config.selectedUnits.length === 3) {
                        this.config.selectedUnits = ['all'];
                        this.config.unit = 'all';
                        this.unitCards.forEach(c => c.classList.toggle('active', c.dataset.unit === 'all'));
                    } else {
                        this.config.unit = this.config.selectedUnits.join(',');
                        this.unitCards.forEach(c => {
                            c.classList.toggle('active', this.config.selectedUnits.includes(c.dataset.unit));
                        });
                    }
                }
                this.updateLobbyPreview();
                if (window.soundEngine) soundEngine.playClick();
            });
        });

        // Question Type Cards
        this.typeCards.forEach(card => {
            card.addEventListener('click', () => {
                this.typeCards.forEach(c => c.classList.remove('active'));
                card.classList.add('active');
                this.config.questionType = card.dataset.type;
                this.config.preset = 'custom';
                if (this.presetCards) this.presetCards.forEach(c => c.classList.remove('active'));
                this.updateLobbyPreview();
                if (window.soundEngine) soundEngine.playClick();
            });
        });

        // Mode Cards
        this.modeCards.forEach(card => {
            card.addEventListener('click', () => {
                this.modeCards.forEach(c => c.classList.remove('active'));
                card.classList.add('active');
                this.config.mode = card.dataset.mode;
                this.config.preset = 'custom';
                if (this.presetCards) this.presetCards.forEach(c => c.classList.remove('active'));
                this.updateLobbyPreview();
                if (window.soundEngine) soundEngine.playClick();
            });
        });

        // Slider & Direct Number Input Controls
        if (this.customCountSlider && this.customCountInput) {
            this.customCountSlider.addEventListener('input', () => {
                const val = parseInt(this.customCountSlider.value, 10);
                this.customCountInput.value = val;
                this.config.count = val;
                this.config.preset = 'custom';
                if (this.presetCards) this.presetCards.forEach(c => c.classList.remove('active'));
                this.highlightMatchingCountChip(val);
                this.updateLobbyPreview();
            });

            this.customCountInput.addEventListener('input', () => {
                let val = parseInt(this.customCountInput.value, 10);
                if (isNaN(val)) return;
                const maxVal = parseInt(this.customCountSlider.max, 10) || 66;
                if (val < 1) val = 1;
                if (val > maxVal) val = maxVal;
                this.customCountSlider.value = val;
                this.config.count = val;
                this.config.preset = 'custom';
                if (this.presetCards) this.presetCards.forEach(c => c.classList.remove('active'));
                this.highlightMatchingCountChip(val);
                this.updateLobbyPreview();
            });
        }

        // Quick Count Chips
        this.countChips.forEach(chip => {
            chip.addEventListener('click', () => {
                this.countChips.forEach(c => c.classList.remove('active'));
                chip.classList.add('active');
                this.config.preset = 'custom';
                if (this.presetCards) this.presetCards.forEach(c => c.classList.remove('active'));

                const rawCount = chip.dataset.count;
                if (rawCount === 'all') {
                    this.config.count = 'all';
                    const maxVal = parseInt(this.customCountSlider?.max || '66', 10);
                    if (this.customCountSlider) this.customCountSlider.value = maxVal;
                    if (this.customCountInput) this.customCountInput.value = maxVal;
                } else {
                    const num = parseInt(rawCount, 10);
                    this.config.count = num;
                    if (this.customCountSlider) this.customCountSlider.value = num;
                    if (this.customCountInput) this.customCountInput.value = num;
                }
                this.updateLobbyPreview();
                if (window.soundEngine) soundEngine.playClick();
            });
        });

        // Timer Mode Selection Chips (Global & Tab 3)
        if (this.globalTimerChips) {
            this.globalTimerChips.forEach(chip => {
                chip.addEventListener('click', () => {
                    const tMode = chip.dataset.timer || 'unlimited';
                    this.setTimerMode(tMode);
                    if (window.soundEngine) soundEngine.playClick();
                });
            });
        }
        if (this.timerChips) {
            this.timerChips.forEach(chip => {
                chip.addEventListener('click', () => {
                    const tMode = chip.dataset.timer || 'unlimited';
                    this.setTimerMode(tMode);
                    if (window.soundEngine) soundEngine.playClick();
                });
            });
        }

        // Arena Live Timer Mode Toggle (Chuyển đổi trực tiếp trong khi làm bài)
        if (this.btnArenaToggleTimer) {
            this.btnArenaToggleTimer.addEventListener('click', () => {
                this.toggleTimerModeLive();
            });
        }

        // Start Game (Configured)
        this.btnStart.addEventListener('click', () => {
            this.syncStudentProfile();
            soundEngine.playClick();
            this.startRound(1);
        });

        // Quick-Start 1-Click Action (Fast Entry for Students)
        if (this.btnQuickStart) {
            this.btnQuickStart.addEventListener('click', () => {
                this.startQuickMatch();
            });
        }

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

        // Study Mode Arena Navigation Actions
        if (this.btnStudyPrev) {
            this.btnStudyPrev.addEventListener('click', () => this.studyPrevQuestion());
        }
        if (this.btnStudyNext) {
            this.btnStudyNext.addEventListener('click', () => this.studyNextQuestion());
        }
        if (this.btnStudyShowExplain) {
            this.btnStudyShowExplain.addEventListener('click', () => this.toggleInlineExplanation());
        }
        if (this.btnStudyRetry) {
            this.btnStudyRetry.addEventListener('click', () => this.retryCurrentQuestion());
        }
        if (this.btnStudyFinish) {
            this.btnStudyFinish.addEventListener('click', () => {
                if (confirm("Bạn có chắc chắn muốn nộp bài và xem bảng điểm tổng kết buổi học không?")) {
                    this.endRound();
                }
            });
        }

        // Feedback Image Lightbox Zoom Trigger
        if (this.btnZoomFeedbackImg) {
            this.btnZoomFeedbackImg.addEventListener('click', () => {
                const currentQ = this.state.activeQuestions[this.state.currentIndex];
                const imgSrc = this.feedbackImg?.src || currentQ?.image || '';
                if (imgSrc) {
                    this.openImageZoomModal(imgSrc, "🔬 Sơ đồ minh họa kiến thức khoa học SGK");
                }
            });
        }
        if (this.feedbackImg) {
            this.feedbackImg.addEventListener('click', () => {
                const currentQ = this.state.activeQuestions[this.state.currentIndex];
                const imgSrc = this.feedbackImg?.src || currentQ?.image || '';
                if (imgSrc) {
                    this.openImageZoomModal(imgSrc, "🔬 Sơ đồ minh họa kiến thức khoa học SGK");
                }
            });
        }

        // Start Round 2 Remediation
        this.btnStartRemediation.addEventListener('click', () => {
            soundEngine.playClick();
            this.startRound(2);
        });

        // Open/Close Teacher Report (Protected by Password Prompt)
        this.btnOpenTeacherReport.addEventListener('click', () => {
            soundEngine.playClick();
            this.openTeacherSecurityPrompt(() => {
                this.openTeacherReport();
            });
        });

        this.btnCloseReport.addEventListener('click', () => {
            soundEngine.playClick();
            this.modalTeacherReport.classList.remove('active');
        });

        // Teacher Password Prompt Modal Events
        if (this.btnOpenTeacherDashNav) {
            this.btnOpenTeacherDashNav.addEventListener('click', () => {
                if (window.soundEngine) soundEngine.playClick();
                this.openTeacherDashboard();
            });
        }
        if (this.formPwdPrompt) {
            this.formPwdPrompt.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleTeacherPasswordSubmit();
            });
        }
        if (this.btnSubmitPromptPwd) {
            this.btnSubmitPromptPwd.addEventListener('click', (e) => {
                e.preventDefault();
                this.handleTeacherPasswordSubmit();
            });
        }
        if (this.btnClosePwdPrompt) {
            this.btnClosePwdPrompt.addEventListener('click', () => {
                if (this.modalTeacherPasswordPrompt) {
                    this.modalTeacherPasswordPrompt.classList.remove('active');
                }
            });
        }
        if (this.btnPromptToggleEye && this.inputPromptPwd) {
            this.btnPromptToggleEye.addEventListener('click', () => {
                const isPassword = this.inputPromptPwd.type === 'password';
                this.inputPromptPwd.type = isPassword ? 'text' : 'password';
                this.btnPromptToggleEye.textContent = isPassword ? '🙈' : '👁️';
            });
        }

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
            this.updateLobbyPreview();
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

                // Powerups shortcuts (Null-safe)
                if (key === 'f') this.btnFiftyFifty?.click();
                if (key === 'z') this.btnFreeze?.click();
                if (key === 'x') this.btnDoubleDown?.click();
                if (key === 's') this.btnShield?.click();
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
        try {
            localStorage.setItem('wayground_student_name', this.student.name);
            localStorage.setItem('wayground_student_class', this.student.className);
        } catch (e) {}
    }

    startQuickMatch() {
        this.syncStudentProfile();
        this.config.unit = 'all';
        this.config.questionType = 'all';
        this.config.mode = 'all';
        this.config.count = 10;
        this.updateLobbyPreview();
        if (window.soundEngine) soundEngine.playPowerup();
        this.startRound(1);
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
            const el = this.screens[key];
            if (el) {
                const isActive = (key === screenName);
                el.classList.toggle('active', isActive);
                el.style.display = isActive ? 'block' : 'none';
            }
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

    
    startDrillForUnit(unitKey) {
        if (typeof QUESTION_BANK === 'undefined' || !QUESTION_BANK[unitKey]) return;
        
        const unitQuestions = QUESTION_BANK[unitKey]?.questions || [];
        if (unitQuestions.length === 0) return;

        // Cấu hình làm bài trực tiếp theo bài học đã chọn
        this.config.activeTab = 'preset';
        this.config.selectedUnits = [unitKey];
        this.config.unit = unitKey;
        this.config.questionType = 'all';
        this.config.mode = 'all';
        this.config.count = Math.min(10, unitQuestions.length);

        if (this.tabBtnPresets) {
            document.querySelectorAll('.lobby-tab-btn').forEach(btn => btn.classList.remove('active'));
            this.tabBtnPresets.classList.add('active');
        }
        if (this.panelPresets) this.panelPresets.classList.add('active');
        if (this.panelCustom) this.panelCustom.classList.remove('active');
        if (this.panelByUnit) this.panelByUnit.classList.remove('active');

        this.updateLobbyPreview();

        // Bắt đầu làm bài ngay lập tức!
        this.syncStudentProfile();
        if (window.soundEngine) soundEngine.playClick();
        this.startRound(1);
    }

    bindJourneyHubEvents() {
        document.querySelectorAll('.btn-j-learn').forEach(btn => {
            btn.onclick = (e) => {
                e.stopPropagation();
                const lessonId = btn.dataset.lessonId;
                if (window.microEngine) {
                    window.microEngine.openLesson(lessonId);
                }
            };
        });

        document.querySelectorAll('.btn-j-drill').forEach(btn => {
            btn.onclick = (e) => {
                e.stopPropagation();
                const unitKey = btn.dataset.unitKey;
                this.startDrillForUnit(unitKey);
            };
        });

        const btnJourneyAll = document.getElementById('btn-journey-open-all-micro');
        if (btnJourneyAll) {
            btnJourneyAll.onclick = () => {
                if (window.microEngine) {
                    window.microEngine.show();
                    const lobby = document.getElementById('screen-lobby');
                    if (lobby) {
                        lobby.style.display = 'none';
                        lobby.classList.remove('active');
                    }
                }
            };
        }
    }

    initByUnitDrawers() {
        if (typeof QUESTION_BANK === 'undefined') return;

        ['unit1', 'unit2', 'unit3', 'unit4', 'unit5', 'unit6', 'unit7', 'unit8'].forEach(unitKey => {
            const listEl = document.getElementById(`questions-list-${unitKey}`);
            if (!listEl) return;

            const questions = QUESTION_BANK[unitKey]?.questions || [];
            listEl.innerHTML = '';

            const initialCount = this.byUnitConfig[unitKey]?.count || 5;
            this.byUnitConfig[unitKey].selectedQids.clear();

            questions.forEach((q, idx) => {
                const isSelected = idx < initialCount;
                if (isSelected) {
                    this.byUnitConfig[unitKey].selectedQids.add(q.id);
                }

                const itemDiv = document.createElement('div');
                itemDiv.className = `drawer-question-item ${isSelected ? 'selected' : ''}`;
                itemDiv.dataset.qid = q.id;
                itemDiv.dataset.unit = unitKey;

                const isMc = q.type === 'multiple_choice';
                const typeLabel = isMc ? 'Trắc nghiệm ABCD' : 'Đúng/Sai 4 Lệnh';
                const typeClass = isMc ? 'q-type-mc' : 'q-type-tf';

                let levelClass = 'q-level-nb';
                if (q.level === 'Thông hiểu') levelClass = 'q-level-th';
                else if (q.level === 'Vận dụng cao' || q.level === 'Vận dụng') levelClass = 'q-level-vd';

                const promptText = q.question || q.scenario || (q.context ? q.context : `Câu hỏi ${idx + 1}`);

                const qImg = q.image || this.getConceptFallbackImage(q.conceptId);
                const imgThumbHtml = qImg ? `
                    <div class="drawer-q-img-wrap" title="Hình ảnh minh họa khoa học">
                        <img src="${qImg}" alt="Minh họa" class="drawer-q-img" loading="lazy">
                        <span class="img-zoom-badge">🔬</span>
                    </div>
                ` : '';

                itemDiv.innerHTML = `
                    <input type="checkbox" class="question-checkbox" data-qid="${q.id}" data-unit="${unitKey}" ${isSelected ? 'checked' : ''}>
                    ${imgThumbHtml}
                    <div class="drawer-q-content">
                        <div class="drawer-q-meta">
                            <span class="q-badge ${typeClass}">${typeLabel}</span>
                            <span class="q-badge ${levelClass}">${q.level || 'Nhận biết'}</span>
                            <span class="drawer-qid-label" style="font-size: 11px; color: var(--text-muted); font-family: var(--font-mono);">#${idx + 1} (${q.id})</span>
                        </div>
                        <div class="drawer-q-text">${promptText}</div>
                    </div>
                `;

                // Handle checkbox or item row click
                const cb = itemDiv.querySelector('.question-checkbox');
                
                const handleToggle = (e) => {
                    if (e.target !== cb) {
                        cb.checked = !cb.checked;
                    }
                    const isChecked = cb.checked;
                    if (isChecked) {
                        this.byUnitConfig[unitKey].selectedQids.add(q.id);
                    } else {
                        this.byUnitConfig[unitKey].selectedQids.delete(q.id);
                    }
                    itemDiv.classList.toggle('selected', isChecked);

                    const newCount = this.byUnitConfig[unitKey].selectedQids.size;
                    this.byUnitConfig[unitKey].count = newCount;

                    const stepperInput = document.getElementById(`count-input-${unitKey}`);
                    if (stepperInput) stepperInput.value = newCount;

                    const pills = document.querySelectorAll(`.matrix-pill[data-unit="${unitKey}"]`);
                    pills.forEach(p => {
                        const v = parseInt(p.dataset.val, 10);
                        p.classList.toggle('active', v === newCount);
                    });

                    const detailCountEl = document.getElementById(`selected-detail-count-${unitKey}`);
                    if (detailCountEl) detailCountEl.textContent = newCount;

                    this.updateLobbyPreview();
                    if (window.soundEngine) soundEngine.playClick();
                };

                itemDiv.addEventListener('click', handleToggle);
                listEl.appendChild(itemDiv);
            });

            // Update initial detail badge
            const detailCountEl = document.getElementById(`selected-detail-count-${unitKey}`);
            if (detailCountEl) detailCountEl.textContent = this.byUnitConfig[unitKey].selectedQids.size;

            // Render math formulas in drawer
            this.renderMath(listEl);
        });
    }

    // =========================================================================
    // LOBBY QUESTION COUNT & REAL-TIME PREVIEW ENGINE
    // =========================================================================
    highlightMatchingCountChip(val) {
        if (!this.countChips) return;
        this.countChips.forEach(chip => {
            const raw = chip.dataset.count;
            if (raw !== 'all' && parseInt(raw, 10) === val) {
                chip.classList.add('active');
            } else {
                chip.classList.remove('active');
            }
        });
    }

    syncCustomTabUI() {
        // Sync Unit Cards
        if (this.unitCards) {
            const selected = this.config.selectedUnits || ['all'];
            this.unitCards.forEach(card => {
                const u = card.dataset.unit;
                card.classList.toggle('active', selected.includes(u));
            });
        }
        // Sync Type Cards
        if (this.typeCards) {
            this.typeCards.forEach(card => {
                card.classList.toggle('active', card.dataset.type === this.config.questionType);
            });
        }
        // Sync Mode Cards
        if (this.modeCards) {
            this.modeCards.forEach(card => {
                card.classList.toggle('active', card.dataset.mode === this.config.mode);
            });
        }
        // Sync Timer Chips (Global & Custom Tab)
        if (this.globalTimerChips) {
            this.globalTimerChips.forEach(chip => {
                chip.classList.toggle('active', chip.dataset.timer === this.config.timerMode);
            });
        }
        if (this.timerChips) {
            this.timerChips.forEach(chip => {
                chip.classList.toggle('active', chip.dataset.timer === this.config.timerMode);
            });
        }
        // Sync Count Chips & Slider & Input
        if (this.config.count === 'all') {
            const maxVal = parseInt(this.customCountSlider?.max || '66', 10);
            if (this.customCountSlider) this.customCountSlider.value = maxVal;
            if (this.customCountInput) this.customCountInput.value = maxVal;
            if (this.countChips) {
                this.countChips.forEach(chip => chip.classList.toggle('active', chip.dataset.count === 'all'));
            }
        } else {
            const num = parseInt(this.config.count, 10) || 10;
            if (this.customCountSlider) this.customCountSlider.value = num;
            if (this.customCountInput) this.customCountInput.value = num;
            this.highlightMatchingCountChip(num);
        }
    }

    getFilteredQuestionPool() {
        if (typeof QUESTION_BANK === 'undefined') return [];

        let pool = [];
        const units = this.config.selectedUnits || [this.config.unit || 'all'];

        if (units.includes('all')) {
            pool = Object.values(QUESTION_BANK).flatMap(u => u.questions || []);
        } else {
            units.forEach(u => {
                if (QUESTION_BANK[u]?.questions) {
                    pool.push(...QUESTION_BANK[u].questions);
                }
            });
        }

        // Filter by question type
        if (this.config.questionType === 'multiple_choice') {
            pool = pool.filter(q => q.type === 'multiple_choice');
        } else if (this.config.questionType === 'multi_tf') {
            pool = pool.filter(q => q.type === 'multi_tf');
        } else if (this.config.questionType === 'short_answer') {
            pool = pool.filter(q => q.type === 'short_answer');
        }

        // Filter by learning mode / difficulty tier
        if (this.config.mode === 'basic') {
            const basicPool = pool.filter(q => q.level === 'Nhận biết');
            pool = basicPool.length > 0 ? basicPool : pool.filter(q => q.level === 'Thông hiểu');
        } else if (this.config.mode === 'challenging') {
            pool = pool.filter(q => q.level === 'Thông hiểu');
        } else if (this.config.mode === 'advanced') {
            pool = pool.filter(q => q.level === 'Vận dụng cao');
        }

        return pool;
    }

    updateLobbyPreview() {
        // =====================================================================
        // MODE TAB 2: BY-UNIT PER-LESSON CONFIGURATION
        // =====================================================================
        if (this.config.activeTab === 'by-unit') {
            const allUnits = ['unit1', 'unit2', 'unit3', 'unit4', 'unit5', 'unit6', 'unit7', 'unit8'];
            let totalQuestions = 0;
            const breakdowns = [];
            const activeUnitTags = [];

            allUnits.forEach(uKey => {
                const uCount = this.byUnitConfig[uKey]?.count || 0;
                totalQuestions += uCount;
                const uNum = uKey.replace('unit', '');
                if (uCount > 0) {
                    breakdowns.push(`Bài ${uNum}: ${uCount}c`);
                    activeUnitTags.push(`Bài ${uNum} (${uCount}c)`);
                }
            });

            const breakdownText = breakdowns.length > 0 ? `(${breakdowns.join(' • ')})` : '(Chưa chọn câu nào)';

            // 1. Update live matrix total bar in Tab 2
            if (this.matrixTotalCount) {
                this.matrixTotalCount.textContent = `${totalQuestions} câu`;
            }
            if (this.matrixTotalBreakdown) {
                this.matrixTotalBreakdown.textContent = breakdownText;
            }

            // 2. Update summary ticket big badge counter
            if (this.summaryQuestionsToPlay) {
                this.summaryQuestionsToPlay.textContent = totalQuestions;
            }
            let totalBankQuestions = 0;
            if (typeof QUESTION_BANK !== 'undefined') {
                Object.values(QUESTION_BANK).forEach(u => { totalBankQuestions += (u.questions?.length || 0); });
            }
            if (this.summaryPoolTotal) {
                this.summaryPoolTotal.textContent = (totalBankQuestions || 120).toString();
            }

            // 3. Update verdict indicator box
            if (this.verdictCountHighlight) {
                this.verdictCountHighlight.textContent = `${totalQuestions} câu hỏi`;
            }
            if (this.verdictPoolSub) {
                this.verdictPoolSub.textContent = `(Phân bổ theo bài: ${breakdownText})`;
            }

            // 4. Update summary ticket metadata tags

            if (this.summaryTagUnit) {
                this.summaryTagUnit.textContent = activeUnitTags.length > 0 ? activeUnitTags.join(' + ') : 'Chưa chọn câu nào (0)';
            }
            if (this.summaryTagType) {
                this.summaryTagType.textContent = 'Theo từng bài đã chọn';
            }
            if (this.summaryTagMode) {
                this.summaryTagMode.textContent = 'Ma trận tự chọn theo bài';
            }
            if (this.summaryTagTimer) {
                const timerLabels = {
                    unlimited: 'Không tính giờ (Học tập)',
                    timed: 'Đếm ngược phù hợp từng câu (30s-120s)'
                };
                this.summaryTagTimer.textContent = timerLabels[this.config.timerMode] || 'Tự do';
            }

            // 5. Contextual Notice
            if (this.summaryNoticeBox) {
                if (totalQuestions === 0) {
                    this.summaryNoticeBox.style.display = 'flex';
                    this.summaryNoticeBox.innerHTML = `
                        <span class="notice-icon">⚠️</span>
                        <span>Bạn đang chọn 0 câu hỏi. Hãy tăng số câu ở ít nhất một bài học hoặc bấm chọn câu để bắt đầu làm bài nhé!</span>
                    `;
                } else {
                    this.summaryNoticeBox.style.display = 'flex';
                    this.summaryNoticeBox.innerHTML = `
                        <span class="notice-icon">🎯</span>
                        <span>Đã kích hoạt chế độ chọn câu theo từng bài: Tổng <strong>${totalQuestions} câu</strong>. Hệ thống sẽ bám sát chính xác từng câu hỏi bạn đã chỉ định.</span>
                    `;
                }
            }

            // 6. Update Start Button Label
            if (this.btnStartText) {
                if (totalQuestions === 0) {
                    this.btnStartText.textContent = `⚠️ VUI LÒNG CHỌN SỐ CÂU > 0 ĐỂ BẮT ĐẦU`;
                } else {
                    this.btnStartText.textContent = `🚀 BẮT ĐẦU LÀM ${totalQuestions} CÂU THEO BÀI NGAY`;
                }
            }
            return;
        }

        // =====================================================================
        // MODE TABS 1 & 3: PRESETS & CUSTOM SLIDER
        // =====================================================================
        const pool = this.getFilteredQuestionPool();
        const availableCount = pool.length;

        // 1. Update slider and number input boundaries
        if (this.customCountSlider) {
            this.customCountSlider.max = availableCount || 1;
        }
        if (this.customCountInput) {
            this.customCountInput.max = availableCount || 1;
        }
        if (this.sliderMaxLabel) {
            this.sliderMaxLabel.textContent = `${availableCount} câu (Tất cả)`;
        }
        if (this.countAllBadge) {
            this.countAllBadge.textContent = `${availableCount} câu`;
        }

        // 2. Determine actual questions to play
        let questionsToPlay = availableCount;
        let isAllSelected = this.config.count === 'all';
        if (!isAllSelected) {
            const requested = parseInt(this.config.count, 10) || 10;
            questionsToPlay = Math.min(requested, availableCount);
        }

        // 3. Update verdict indicator box
        if (this.verdictCountHighlight) {
            this.verdictCountHighlight.textContent = `${questionsToPlay} câu hỏi`;
        }
        if (this.verdictPoolSub) {
            this.verdictPoolSub.textContent = `(Rút ngẫu nhiên từ kho ${availableCount} câu phù hợp đã chọn)`;
        }

        // 4. Update ticket big badge counter
        if (this.summaryQuestionsToPlay) {
            this.summaryQuestionsToPlay.textContent = questionsToPlay;
        }

        // 5. Update summary ticket metadata tags
        const unitNameMap = {
            unit1: 'Bài 1: Cấu Trúc Chất',
            unit2: 'Bài 2: Nội Năng & ĐL I',
            unit3: 'Bài 3: Thang Nhiệt Độ',
            unit4: 'Bài 4: Nhiệt Dung Riêng',
            unit5: 'Bài 5: Nhiệt Nóng Chảy & Hóa Hơi',
            unit6: 'Bài 6: Động Học Chất Khí',
            unit7: 'Bài 7: Định Luật Boyle',
            unit8: 'Bài 8: Định Luật Charles'
        };

        let unitText = 'Tổng Hợp Cả 3 Bài';
        const units = this.config.selectedUnits || [this.config.unit || 'all'];
        if (!units.includes('all') && units.length > 0) {
            unitText = units.map(u => unitNameMap[u] || u).join(' + ');
        }

        const typeLabels = {
            all: 'Hỗn Hợp (ABCD & Đúng/Sai)',
            multiple_choice: 'Trắc Nghiệm ABCD (1 đáp án)',
            multi_tf: 'Đúng / Sai 4 Lệnh Chuẩn Bộ'
        };
        const modeLabels = {
            all: 'Tất Cả Mức Độ',
            basic: 'Cơ Bản (Nhận Biết)',
            challenging: 'Thử Thách (Thông Hiểu)',
            advanced: 'Nâng Cao (Vận Dụng)'
        };
        const timerLabels = {
            unlimited: 'Không tính giờ (Học tập)',
            timed: 'Đếm ngược phù hợp từng câu (30s-120s)'
        };

        if (this.summaryTagUnit) this.summaryTagUnit.textContent = unitText;
        if (this.summaryTagType) this.summaryTagType.textContent = typeLabels[this.config.questionType] || this.config.questionType;
        if (this.summaryTagMode) this.summaryTagMode.textContent = modeLabels[this.config.mode] || this.config.mode;
        if (this.summaryTagTimer) this.summaryTagTimer.textContent = timerLabels[this.config.timerMode] || this.config.timerMode;

        // 6. Contextual Notice / Help Alert
        if (this.summaryNoticeBox) {
            if (!isAllSelected && parseInt(this.config.count, 10) > availableCount) {
                this.summaryNoticeBox.style.display = 'flex';
                this.summaryNoticeBox.innerHTML = `
                    <span class="notice-icon">ℹ️</span>
                    <span>Bạn đã chọn <strong>${this.config.count} câu</strong>, nhưng bộ lọc hiện tại có <strong>${availableCount} câu khả dụng</strong>. Hệ thống sẽ cho bạn làm trọn vẹn toàn bộ <strong>${availableCount} câu</strong>.</span>
                `;
            } else if (this.config.questionType === 'multi_tf' && this.config.mode === 'basic') {
                this.summaryNoticeBox.style.display = 'flex';
                this.summaryNoticeBox.innerHTML = `
                    <span class="notice-icon">💡</span>
                    <span>Dạng câu Đúng/Sai 4 lệnh thường tập trung ở mức Thông hiểu & Vận dụng. Hệ thống tự động ghép các ý nền tảng để bạn rèn luyện hiệu quả.</span>
                `;
            } else {
                this.summaryNoticeBox.style.display = 'none';
                this.summaryNoticeBox.innerHTML = '';
            }
        }

        // 7. Update Start Button Label
        if (this.btnStartText) {
            if (isAllSelected || questionsToPlay === availableCount) {
                this.btnStartText.textContent = `🚀 BẮT ĐẦU LÀM TOÀN BỘ ${questionsToPlay} CÂU NGAY`;
            } else {
                this.btnStartText.textContent = `🚀 BẮT ĐẦU LÀM ${questionsToPlay} CÂU HỎI NGAY`;
            }
        }
    }

    // =========================================================================
    // ROUND INITIALIZATION & QUESTION POOLING
    // =========================================================================
    startRound(roundNumber) {
        this.state.round = roundNumber;
        this.remediationBanner.classList.toggle('active', roundNumber === 2);

        let pool = [];

        if (roundNumber === 1) {
            // Check if playing via By-Unit detailed configuration
            if (this.config.activeTab === 'by-unit') {
                pool = [];
                ['unit1', 'unit2', 'unit3', 'unit4', 'unit5', 'unit6', 'unit7', 'unit8'].forEach(unitKey => {
                    const unitQuestions = QUESTION_BANK[unitKey]?.questions || [];
                    const cfg = this.byUnitConfig[unitKey];
                    const selectedSet = cfg?.selectedQids || new Set();
                    const targetCount = cfg?.count || 0;

                    if (targetCount > 0) {
                        let unitPicks = [];
                        // 1. Pick explicitly selected questions first
                        if (selectedSet.size > 0) {
                            unitQuestions.forEach(q => {
                                if (selectedSet.has(q.id)) {
                                    unitPicks.push(q);
                                }
                            });
                        }
                        // 2. If targetCount is more than selectedSet, supplement from remaining questions
                        if (unitPicks.length < targetCount) {
                            const remaining = unitQuestions.filter(q => !selectedSet.has(q.id));
                            unitPicks.push(...remaining.slice(0, targetCount - unitPicks.length));
                        } else if (unitPicks.length > targetCount) {
                            unitPicks = unitPicks.slice(0, targetCount);
                        }
                        pool.push(...unitPicks);
                    }
                });

                if (pool.length === 0) {
                    alert("Bạn chưa chọn câu hỏi nào ở các bài học. Vui lòng tăng số lượng câu hỏi ở ít nhất một bài!");
                    return;
                }
            } else {
                // ROUND 1: Standard Questions from QUESTION_BANK using consistent filter
                pool = this.getFilteredQuestionPool();

                if (pool.length === 0) {
                    alert("Không tìm thấy câu hỏi nào phù hợp với bộ lọc hiện tại. Hệ thống sẽ hiển thị toàn bộ câu hỏi.");
                    this.config.mode = 'all';
                    this.config.selectedUnits = ['all'];
                    this.config.unit = 'all';
                    this.updateLobbyPreview();
                    return this.startRound(1);
                }
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

            // Preset / custom slice (only if not by-unit, since by-unit already has exact counts)
            if (this.config.activeTab !== 'by-unit') {
                if (this.config.preset === 'grad28') {
                    const mcPool = pool.filter(q => q.type === 'multiple_choice');
                    const tfPool = pool.filter(q => q.type === 'multi_tf');
                    const selectedMc = mcPool.slice(0, 18);
                    const selectedTf = tfPool.slice(0, 4);
                    pool = this.shuffleArray([...selectedMc, ...selectedTf]);
                } else if (this.config.count !== 'all') {
                    const countNum = parseInt(this.config.count, 10) || pool.length;
                    pool = pool.slice(0, Math.min(countNum, pool.length));
                }
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
    // TIMER & STUDY MODE ENGINE (TỐI ƯU HÓA THỜI GIAN ĐỘNG THEO TỪNG CÂU)
    // =========================================================================
    setTimerMode(mode) {
        this.config.timerMode = mode;
        if (this.globalTimerChips) {
            this.globalTimerChips.forEach(c => c.classList.toggle('active', c.dataset.timer === mode));
        }
        if (this.timerChips) {
            this.timerChips.forEach(c => c.classList.toggle('active', c.dataset.timer === mode));
        }
        this.updateLobbyPreview();
    }

    getQuestionTimeLimit(q) {
        if (!q) return 45;
        if (q.type === 'multi_tf') {
            // Đúng/Sai 4 ý: Đoạn dẫn thực tế + 4 nhận định độc lập
            if (q.level === 'Nhận biết') return 90;   // 1.5 phút
            if (q.level === 'Thông hiểu') return 105; // 1.75 phút
            return 120; // Vận dụng / Vận dụng cao: 120s (2 phút đủ tính toán)
        }
        if (q.type === 'short_answer') {
            // Trả lời ngắn / Điền số thực nghiệm: Tính toán ra con số cụ thể
            if (q.level === 'Nhận biết') return 45;
            if (q.level === 'Thông hiểu') return 60;
            return 90; // Vận dụng / Vận dụng cao: 90s
        }
        // Trắc nghiệm 4 lựa chọn ABCD (multiple_choice):
        if (q.level === 'Nhận biết') return 30; // 30s
        if (q.level === 'Thông hiểu') return 45; // 45s
        return 75; // Vận dụng / Vận dụng cao (tính toán delta U = A + Q, đổi thang nhiệt độ): 75s
    }

    toggleTimerModeLive() {
        if (this.config.timerMode === 'unlimited') {
            this.config.timerMode = 'timed';
            const q = this.state.activeQuestions[this.state.currentIndex];
            this.state.maxQuestionTime = this.getQuestionTimeLimit(q);
            this.state.timeLeft = this.state.maxQuestionTime;
            this.startTimer();
        } else {
            this.config.timerMode = 'unlimited';
            this.stopTimer();
            this.startTimer();
        }
        if (window.soundEngine) soundEngine.playClick();
        this.updateStudyModeUI();
    }

    isStudyMode() {
        return this.config.timerMode === 'unlimited';
    }

    startTimer() {
        this.stopTimer();
        const currentQ = this.state.activeQuestions[this.state.currentIndex];

        // In Study Mode (Không tính thời gian): hoàn toàn không đếm ngược, không timeout!
        if (this.isStudyMode()) {
            if (this.timerBar) {
                this.timerBar.style.transform = 'scaleX(1)';
                this.timerBar.classList.remove('warning');
                this.timerBar.classList.add('study-timer-calm');
            }
            if (this.hudTimerBadge) {
                this.hudTimerBadge.classList.remove('warning');
                this.hudTimerBadge.classList.add('study-timer-calm');
            }
            if (this.hudTimerIcon) this.hudTimerIcon.textContent = '📖';
            if (this.hudTimerText) this.hudTimerText.textContent = 'Không giới hạn';
            if (this.arenaTimerToggleLabel) this.arenaTimerToggleLabel.textContent = '⚡ Bật Đếm Giờ';
            return;
        }

        // Timed Arena Mode: Thời gian động phù hợp cho từng loại câu hỏi & mức độ
        if (this.timerBar) {
            this.timerBar.classList.remove('study-timer-calm');
        }
        if (this.hudTimerBadge) {
            this.hudTimerBadge.classList.remove('study-timer-calm');
        }
        if (this.hudTimerIcon) this.hudTimerIcon.textContent = '⏱️';
        if (this.arenaTimerToggleLabel) this.arenaTimerToggleLabel.textContent = '📖 Tắt Đếm Giờ';

        this.state.maxQuestionTime = this.getQuestionTimeLimit(currentQ);
        this.state.timeLeft = this.state.maxQuestionTime;
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
        const maxTime = this.state.maxQuestionTime || this.config.questionTime || 45;
        const ratio = Math.max(0, this.state.timeLeft / maxTime);
        const isUrgent = this.state.timeLeft <= 10;

        if (this.timerBar) {
            this.timerBar.style.transform = `scaleX(${ratio})`;
            this.timerBar.classList.toggle('warning', isUrgent);
        }
        if (this.hudTimerBadge) {
            this.hudTimerBadge.classList.toggle('warning', isUrgent);
        }
        if (this.hudTimerText) {
            this.hudTimerText.textContent = `${Math.ceil(this.state.timeLeft)}s`;
        }
    }

    handleTimeout() {
        soundEngine.playWrong();
        const currentQ = this.state.activeQuestions[this.state.currentIndex];
        this.state.missedConcepts.add(currentQ.conceptId);

        // Record status for question dots
        this.state.questionStatus[this.state.currentIndex] = { answered: true, isCorrect: false };
        if (this.isStudyMode()) {
            this.updateStudyDotsStatus();
        }

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
        if (q.type === 'multiple_choice') {
            this.questionTag.textContent = 'Phần I: Trắc Nghiệm ABCD';
        } else if (q.type === 'multi_tf') {
            this.questionTag.textContent = 'Phần II: Đúng / Sai 4 Ý (Chuẩn 2025)';
        } else if (q.type === 'short_answer') {
            this.questionTag.textContent = 'Phần III: Trả Lời Ngắn / Điền Số (Mới 2025)';
        } else {
            this.questionTag.textContent = 'Câu hỏi thực hành';
        }
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
        if (this.shortAnswerContainer) this.shortAnswerContainer.style.display = 'none';

        if (q.type === 'multiple_choice') {
            this.questionScenarioLead.style.display = 'none';
            this.questionText.textContent = q.question;
            this.renderMultipleChoice(q);
        } else if (q.type === 'multi_tf') {
            this.questionScenarioLead.style.display = 'block';
            this.questionScenarioLead.textContent = q.context;
            this.questionText.textContent = "Hãy xác định tính ĐÚNG hoặc SAI của từng mệnh đề dưới đây:";
            this.renderMultiTF(q);
        } else if (q.type === 'short_answer') {
            this.questionScenarioLead.style.display = 'none';
            this.questionText.textContent = q.question;
            this.renderShortAnswer(q);
        }

        // Render dedicated scientific textbook image in Vietnamese
        if (this.questionVisualBox) {
            const imgSrc = q.image || this.getConceptFallbackImage(q.conceptId);
            if (imgSrc) {
                const questionTitle = q.question || q.context || 'Kiến thức cốt lõi SGK';
                this.questionVisualBox.innerHTML = `
                    <div class="question-image-card">
                        <div class="image-card-header">
                            <span class="image-card-badge">🔬 HÌNH MINH HỌA KHOA HỌC CHUẨN SGK</span>
                            <span class="image-card-hint">🔍 Nhấp vào ảnh để phóng to chi tiết</span>
                        </div>
                        <div class="image-wrapper" title="Nhấp vào để xem ảnh phóng to chi tiết">
                            <img src="${imgSrc}?v=6.0.0" alt="Hình minh họa chuẩn khoa học" class="question-scientific-img" />
                        </div>
                    </div>
                `;
                const imgWrap = this.questionVisualBox.querySelector('.image-wrapper');
                if (imgWrap) {
                    imgWrap.addEventListener('click', () => {
                        this.openImageZoomModal(imgSrc, questionTitle);
                    });
                }
            } else if (window.physicsSimulationEngine) {
                window.physicsSimulationEngine.render(this.questionVisualBox, q.conceptId);
            }
        }

        // Render Study Mode Navigation & Controls
        this.updateStudyModeUI();

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

        const labels = ['a', 'b', 'c', 'd'];
        q.statements.forEach((stmt, idx) => {
            const card = document.createElement('div');
            card.className = 'multi-tf-card';
            const labelText = stmt.label || `${labels[idx]})`;
            const leadHtml = stmt.lead ? `<span class="stmt-lead-text">${stmt.lead}</span>` : '';
            card.innerHTML = `
                <div class="multi-tf-statement-box">
                    <div class="stmt-label-badge">${labelText}</div>
                    <div class="stmt-content">
                        ${leadHtml}
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
                updateSubmitBtnState();
            });

            btnFalse.addEventListener('click', () => {
                soundEngine.playClick();
                studentAnswers[idx] = false;
                btnFalse.classList.add('selected-false');
                btnTrue.classList.remove('selected-true');
                updateSubmitBtnState();
            });

            this.multiTfContainer.appendChild(card);
        });

        // Submit Button with live state counter
        const submitBtn = document.createElement('button');
        submitBtn.className = 'cta-button btn-primary btn-submit-multitf';

        const updateSubmitBtnState = () => {
            const answeredCount = studentAnswers.filter(a => a !== null).length;
            if (answeredCount === 4) {
                submitBtn.classList.add('ready-to-submit');
                submitBtn.innerHTML = '<span>Xác Nhận 4 Đáp Án (Đủ 4/4 ý)</span> <span>🚀</span>';
            } else {
                submitBtn.classList.remove('ready-to-submit');
                submitBtn.innerHTML = `<span>Xác Nhận 4 Đáp Án (Đã chọn: ${answeredCount}/4 ý)</span> <span>🎯</span>`;
            }
        };

        updateSubmitBtnState();

        submitBtn.addEventListener('click', () => {
            if (studentAnswers.includes(null)) {
                submitBtn.classList.add('input-shake');
                setTimeout(() => submitBtn.classList.remove('input-shake'), 500);
                if (window.soundEngine) soundEngine.playWrong();
                // Highlight missing cards
                const allCards = this.multiTfContainer.querySelectorAll('.multi-tf-card');
                studentAnswers.forEach((ans, i) => {
                    if (ans === null && allCards[i]) {
                        allCards[i].classList.add('input-shake');
                        setTimeout(() => allCards[i].classList.remove('input-shake'), 600);
                    }
                });
                return;
            }
            this.handleMultiTFSubmit(studentAnswers, q);
        });

        this.multiTfContainer.appendChild(submitBtn);
    }

    renderShortAnswer(q) {
        if (!this.shortAnswerContainer) return;
        this.shortAnswerContainer.innerHTML = '';
        this.shortAnswerContainer.style.display = 'flex';

        const card = document.createElement('div');
        card.className = 'short-answer-card';

        card.innerHTML = `
            <div class="short-answer-prompt-row">
                <span class="short-answer-badge">🔢 PHẦN III: TRẢ LỜI NGẮN / ĐIỀN SỐ</span>
                <span class="short-answer-hint">💡 Nhập kết quả số học vào ô bên dưới</span>
            </div>
            <div class="short-answer-input-wrap">
                <input type="text" id="short-answer-input" class="short-answer-input" placeholder="Nhập kết quả số học..." autocomplete="off" />
                ${q.unit ? `<span class="short-answer-unit">${q.unit}</span>` : ''}
            </div>
            <div class="short-answer-actions">
                <button id="btn-submit-short" class="btn-submit-short">
                    <span>Xác Nhận Đáp Án</span>
                    <span>↵</span>
                </button>
            </div>
            <div class="short-answer-rules">
                ℹ️ <strong>Quy chuẩn nhập số:</strong> Chấp nhận cả dấu phẩy (<code>,</code>) hoặc dấu chấm (<code>.</code>) cho số thập phân (Ví dụ: <code>12.5</code> hoặc <code>12,5</code>). Có thể nhấn phím <strong>Enter</strong> để nộp nhanh!
            </div>
        `;

        this.shortAnswerContainer.appendChild(card);

        const inputEl = card.querySelector('#short-answer-input');
        const submitBtn = card.querySelector('#btn-submit-short');

        // Focus on input
        setTimeout(() => {
            if (inputEl) inputEl.focus();
        }, 100);

        // Submit on button click
        submitBtn.addEventListener('click', () => {
            this.handleShortAnswerSubmit(inputEl.value, inputEl, submitBtn, q);
        });

        // Submit on Enter key
        inputEl.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                this.handleShortAnswerSubmit(inputEl.value, inputEl, submitBtn, q);
            }
        });
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

        // Record status for question dots
        this.state.questionStatus[this.state.currentIndex] = { answered: true, isCorrect: isCorrect };
        if (this.isStudyMode()) {
            this.updateStudyDotsStatus();
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
        const labels = ['a', 'b', 'c', 'd'];

        q.statements.forEach((stmt, idx) => {
            const trueVal = stmt.isCorrect !== undefined ? stmt.isCorrect : !!stmt.isTrue;
            const isMatch = studentAnswers[idx] === trueVal;
            if (isMatch) correctCount++;

            const stmtLabel = stmt.label || `${labels[idx]})`;
            statementResults.push({
                label: stmtLabel,
                text: stmt.text,
                userChoice: studentAnswers[idx] ? "Đúng" : "Sai",
                correctChoice: trueVal ? "Đúng" : "Sai",
                isCorrect: isMatch,
                explanation: stmt.explanation || q.explanation || "Nắm vững lý thuyết SGK để phân tích chính xác."
            });

            // Record to teacher history
            this.state.sessionHistory.push({
                round: this.state.round,
                type: `Đúng/Sai Ý (${stmtLabel})`,
                title: `${q.question || q.context || 'Câu hỏi Đúng/Sai'}: Ý (${stmtLabel}) ${stmt.text.substring(0, 60)}...`,
                detail: `Chọn: ${studentAnswers[idx] ? "Đúng" : "Sai"} | Chuẩn: ${trueVal ? "Đúng" : "Sai"}`,
                status: isMatch ? "Đạt" : "Chưa đạt",
                score: isMatch ? 250 : 0
            });
        });

        const isFullCorrect = correctCount === 4;
        if (!isFullCorrect) {
            this.state.missedConcepts.add(q.conceptId);
        }

        // Record status for question dots
        this.state.questionStatus[this.state.currentIndex] = { answered: true, isCorrect: isFullCorrect };
        if (this.isStudyMode()) {
            this.updateStudyDotsStatus();
        }

        const msg = isFullCorrect ? "Xuất sắc! Đúng trọn vẹn 4/4 ý!" : `Đúng ${correctCount}/4 ý. Hãy đọc kĩ giải thích từng ý nhé!`;
        this.evaluateScore(isFullCorrect, msg, statementResults, correctCount * 250);
    }

    handleShortAnswerSubmit(rawVal, inputField, submitBtn, q) {
        if (!rawVal || rawVal.trim() === '') {
            inputField.classList.add('input-shake');
            setTimeout(() => inputField.classList.remove('input-shake'), 500);
            if (window.soundEngine) soundEngine.playWrong();
            inputField.focus();
            return;
        }

        this.stopTimer();
        inputField.disabled = true;
        submitBtn.disabled = true;

        const cleanVal = rawVal.trim().replace(',', '.');
        const userNum = parseFloat(cleanVal);
        const targetNum = parseFloat(q.answer);

        let isCorrect = false;
        if (!isNaN(userNum) && !isNaN(targetNum)) {
            const tolerance = q.tolerance !== undefined ? q.tolerance : 0.02;
            const diff = Math.abs(userNum - targetNum);
            const relDiff = targetNum !== 0 ? diff / Math.abs(targetNum) : diff;
            // Cho phép sai số tương đối <= tolerance HOẶC sai số tuyệt đối <= 0.05
            isCorrect = (relDiff <= tolerance) || (diff <= 0.05);
        } else {
            // So khớp chuỗi nếu không phải số thuần túy
            isCorrect = cleanVal.toLowerCase() === String(q.answer).trim().toLowerCase();
        }

        if (!isCorrect) {
            this.state.missedConcepts.add(q.conceptId);
        }

        // Record status for question dots
        this.state.questionStatus[this.state.currentIndex] = { answered: true, isCorrect: isCorrect };
        if (this.isStudyMode()) {
            this.updateStudyDotsStatus();
        }

        const unitStr = q.unit ? ` ${q.unit}` : '';
        const userDisplay = `${rawVal.trim()}${unitStr}`;
        const targetDisplay = `${q.answer}${unitStr}`;

        // Record to teacher session history
        this.state.sessionHistory.push({
            round: this.state.round,
            type: "Trả lời ngắn (Điền số)",
            title: q.question,
            detail: `Nhập: [${userDisplay}] | Chuẩn: [${targetDisplay}]`,
            status: isCorrect ? "Đạt" : "Chưa đạt",
            score: isCorrect ? 1000 : 0
        });

        const feedbackTitle = isCorrect ? "Chính Xác Tuyệt Đối!" : "Chưa Chính Xác!";
        const statementResults = [
            {
                text: `Đáp án của bạn: <strong>${userDisplay}</strong> | Đáp án chuẩn xác: <strong>${targetDisplay}</strong>`,
                isCorrect: isCorrect,
                explanation: q.explanation || "Nắm vững công thức và phép tính thực nghiệm để giải quyết bài toán."
            }
        ];

        setTimeout(() => {
            this.evaluateScore(isCorrect, feedbackTitle, statementResults, isCorrect ? 1000 : 0);
        }, 400);
    }

    evaluateScore(isFullyCorrect, title, statementResults, customBasePoints = null) {
        let earnedPoints = 0;

        if (isFullyCorrect) {
            const maxTime = this.state.maxQuestionTime || this.config.questionTime || 45;
            const speedRatio = this.isStudyMode() ? 0.5 : Math.max(0, this.state.timeLeft / maxTime);
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
    // FEEDBACK POPUP (WITH SCIENTIFIC VISUAL & EXPLANATION)
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

        // Render Dedicated Scientific Visual Box (Học sinh học từ hình ảnh trực quan)
        const currentQ = this.state.activeQuestions[this.state.currentIndex];
        if (this.feedbackVisualBox && this.feedbackImg && currentQ) {
            const imgSrc = currentQ.image || this.getConceptFallbackImage(currentQ.conceptId);
            if (imgSrc) {
                this.feedbackImg.src = `${imgSrc}?v=6.0.0`;
                this.feedbackVisualBox.style.display = 'flex';

                const captionText = currentQ.scenarioLead 
                    || (currentQ.context ? currentQ.context.substring(0, 110) + '...' : '') 
                    || currentQ.question 
                    || "Sơ đồ và đồ thị nhiệt học chuẩn SGK Vật Lí 12";

                if (this.feedbackImgCaption) {
                    this.feedbackImgCaption.innerHTML = `<strong>🔬 Minh họa khoa học trực quan:</strong> ${captionText}`;
                }

                // Wire zoom button and direct image click to light-box
                const openZoom = () => {
                    this.openImageZoomModal(imgSrc, `🔬 Sơ đồ minh họa: ${captionText}`);
                };
                if (this.btnZoomFeedbackImg) {
                    this.btnZoomFeedbackImg.onclick = openZoom;
                }
                this.feedbackImg.onclick = openZoom;
            } else {
                this.feedbackVisualBox.style.display = 'none';
            }
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
        if (this.isStudyMode()) {
            this.updateStudyModeUI();
        }
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

        const total = Math.max(1, this.state.activeQuestions.length);
        const accuracy = Math.min(100, Math.round((this.state.correctCount / total) * 100));

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

        // In-Place Mistakes Review for Students
        const failedItems = (this.state.sessionHistory || []).filter(h => h.status !== 'Đạt');
        if (this.summaryMistakesSection && this.summaryMistakesList) {
            if (failedItems.length > 0) {
                this.summaryMistakesSection.style.display = 'block';
                if (this.mistakesCountBadge) {
                    this.mistakesCountBadge.textContent = `${failedItems.length} câu chưa đạt`;
                }
                this.summaryMistakesList.innerHTML = '';
                failedItems.forEach((item, idx) => {
                    const card = document.createElement('div');
                    card.className = 'mistake-item-card';
                    card.innerHTML = `
                        <div class="mistake-card-title"><strong>#${idx + 1} (${item.type}):</strong> ${item.title}</div>
                        <div class="mistake-card-detail">${item.detail}</div>
                    `;
                    this.summaryMistakesList.appendChild(card);
                });
                this.renderMath(this.summaryMistakesList);
            } else {
                this.summaryMistakesSection.style.display = 'none';
                this.summaryMistakesList.innerHTML = '';
            }
        }

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

    // =========================================================================
    // STUDY MODE NAVIGATION & INTERACTION ENGINE
    // =========================================================================
    getConceptFallbackImage(conceptId) {
        if (!conceptId) return 'images/temp_molecular_speed.jpg';
        const cid = conceptId.toLowerCase();

        // Unit 1: Kinetic Molecular Theory & States of Matter
        if (cid.includes('mo_hinh') || cid.includes('khoang_cach')) return 'images/gas_molecular_distance.jpg';
        if (cid.includes('brown')) return 'images/brownian_motion.jpg';
        if (cid.includes('luc_tuong_tac')) return 'images/intermolecular_forces_r0.jpg';
        if (cid.includes('dac_diem') || cid.includes('the_chat')) return 'images/three_states_matter.jpg';
        if (cid.includes('tinh_the') || cid.includes('huong')) return 'images/crystal_vs_amorphous.jpg';
        if (cid.includes('tuyet_tan')) return 'images/snow_melting_cold.jpg';
        if (cid.includes('bay_hoi')) return 'images/evaporation_factors.jpg';
        if (cid.includes('ngung_tu')) return 'images/dew_condensation.jpg';
        if (cid.includes('chuyen_the') || cid.includes('soi')) return 'images/phase_transition_diagram.jpg';
        if (cid.includes('ap_suat')) return 'images/pressure_cooker_boiling.jpg';

        // Unit 2: Internal Energy & First Law of Thermodynamics
        if (cid.includes('dinh_nghia_noi_nang') || cid.includes('phu_thuoc_noi_nang') || cid.includes('khi_ly_tuong')) return 'images/internal_energy_real_ideal.jpg';
        if (cid.includes('cac_cach_doi') || cid.includes('ban_chat_nhiet')) return 'images/change_internal_energy.jpg';
        if (cid.includes('dl1') || cid.includes('quy_uoc') || cid.includes('delta_u')) return 'images/dl1_thermodynamics_piston.jpg';
        if (cid.includes('dang_ap') || cid.includes('cong_dan')) return 'images/isobaric_work_pv.jpg';
        if (cid.includes('dang_tich')) return 'images/isochoric_process.jpg';
        if (cid.includes('doan_nhiet')) return 'images/adiabatic_spray.jpg';
        if (cid.includes('bom_xe')) return 'images/bicycle_pump_heating.jpg';
        if (cid.includes('dong_co')) return 'images/heat_engine_principle.jpg';

        // Unit 3: Temperature Scales & Measurement
        if (cid.includes('can_bang_nhiet') || cid.includes('chieu_truyen')) return 'images/thermal_equilibrium.jpg';
        if (cid.includes('kelvin') || cid.includes('fahrenheit') || cid.includes('celsius')) return 'images/kelvin_celsius_scale.jpg';
        if (cid.includes('tuyet_doi')) return 'images/absolute_zero_kelvin.jpg';
        if (cid.includes('sat_go') || cid.includes('dan_nhiet')) return 'images/iron_wood_conduction.jpg';
        if (cid.includes('y_te')) return 'images/clinical_thermometer.jpg';
        if (cid.includes('cac_loai_nhiet_ke') || cid.includes('nguyen_ly')) return 'images/thermometer_types.jpg';
        if (cid.includes('thang_nhiet')) return 'images/three_temperature_scales.jpg';
        if (cid.includes('diem_ba')) return 'images/triple_point_water.jpg';
        if (cid.includes('thuy_ngan')) return 'images/mercury_spill_safety.jpg';

        if (cid.startsWith('c_u1')) return 'images/three_states_matter.jpg';
        if (cid.startsWith('c_u2')) return 'images/dl1_thermodynamics_piston.jpg';
        if (cid.startsWith('c_u3')) return 'images/kelvin_celsius_scale.jpg';
        if (cid.startsWith('c_u4')) return 'images/calorimeter_specific_heat.jpg';
        if (cid.startsWith('c_u5')) return 'images/phase_transition_diagram.jpg';
        if (cid.startsWith('c_u6')) return 'images/brownian_motion.jpg';
        if (cid.startsWith('c_u7')) return 'images/boyle_law_isotherm.jpg';
        if (cid.startsWith('c_u8')) return 'images/isobaric_work_pv.jpg';
        return 'images/internal_energy_real_ideal.jpg';
    }

    updateStudyModeUI() {
        const isStudy = this.isStudyMode();
        if (this.studyModeBanner) {
            this.studyModeBanner.style.display = isStudy ? 'block' : 'none';
        }
        if (this.arenaStudyNav) {
            this.arenaStudyNav.style.display = isStudy ? 'flex' : 'none';
        }
        if (this.studyInlineExplanation) {
            this.studyInlineExplanation.style.display = 'none';
        }

        if (!isStudy) return;

        // Update Prev / Next buttons state
        if (this.btnStudyPrev) {
            this.btnStudyPrev.disabled = this.state.currentIndex <= 0;
        }
        if (this.btnStudyNext) {
            const isLast = this.state.currentIndex >= this.state.activeQuestions.length - 1;
            this.btnStudyNext.innerHTML = isLast ? '<span>Hoàn Thành 🏁</span>' : '<span>Câu Tiếp ➡️</span>';
        }

        // Render Question Dots matrix
        if (this.arenaQuestionDots) {
            this.arenaQuestionDots.innerHTML = '';
            this.state.activeQuestions.forEach((_, idx) => {
                const dot = document.createElement('button');
                dot.type = 'button';
                dot.className = 'dot-btn';
                dot.textContent = idx + 1;
                dot.title = `Chuyển tới câu ${idx + 1}`;

                if (idx === this.state.currentIndex) {
                    dot.classList.add('current');
                }
                const st = this.state.questionStatus && this.state.questionStatus[idx];
                if (st && st.answered) {
                    if (st.isCorrect) {
                        dot.classList.add('answered-correct');
                    } else {
                        dot.classList.add('answered-wrong');
                    }
                }

                dot.addEventListener('click', () => {
                    soundEngine.playClick();
                    this.jumpToQuestion(idx);
                });

                this.arenaQuestionDots.appendChild(dot);
            });
        }
    }

    updateStudyDotsStatus() {
        if (!this.arenaQuestionDots) return;
        const dots = this.arenaQuestionDots.querySelectorAll('.dot-btn');
        dots.forEach((dot, idx) => {
            dot.classList.toggle('current', idx === this.state.currentIndex);
            const st = this.state.questionStatus && this.state.questionStatus[idx];
            if (st && st.answered) {
                dot.classList.toggle('answered-correct', !!st.isCorrect);
                dot.classList.toggle('answered-wrong', !st.isCorrect);
            }
        });
    }

    jumpToQuestion(targetIndex) {
        if (targetIndex < 0 || targetIndex >= this.state.activeQuestions.length) return;
        this.stopTimer();
        this.state.currentIndex = targetIndex;
        this.loadCurrentQuestion();
    }

    studyPrevQuestion() {
        if (this.state.currentIndex > 0) {
            soundEngine.playClick();
            this.jumpToQuestion(this.state.currentIndex - 1);
        }
    }

    studyNextQuestion() {
        if (this.state.currentIndex < this.state.activeQuestions.length - 1) {
            soundEngine.playClick();
            this.jumpToQuestion(this.state.currentIndex + 1);
        } else {
            if (confirm("Bạn đã xem hết các câu hỏi! Bạn có muốn nộp bài và xem bảng điểm tổng kết không?")) {
                this.endRound();
            }
        }
    }

    toggleInlineExplanation() {
        if (!this.studyInlineExplanation) return;
        soundEngine.playClick();
        const isHidden = this.studyInlineExplanation.style.display === 'none' || !this.studyInlineExplanation.style.display;
        if (isHidden) {
            const q = this.state.activeQuestions[this.state.currentIndex];
            let expHtml = '';
            if (q.type === 'multiple_choice') {
                expHtml = `
                    <div style="margin-bottom:8px;"><strong>Đáp án đúng:</strong> <span class="badge-tag-pass">${['A','B','C','D'][q.correct]}. ${q.options[q.correct]}</span></div>
                    <div><strong>Giải thích chi tiết:</strong> ${q.explanation || 'Đọc kĩ các định luật và công thức liên quan trong SGK.'}</div>
                `;
            } else if (q.type === 'multi_tf') {
                const labels = ['a', 'b', 'c', 'd'];
                const stmtsHtml = q.statements.map((s, idx) => {
                    const stmtLabel = s.label || `${labels[idx]})`;
                    const trueVal = s.isCorrect !== undefined ? s.isCorrect : !!s.isTrue;
                    return `
                    <div style="margin-bottom:8px; padding:8px 12px; background:rgba(255,255,255,0.04); border-radius:8px;">
                        <div style="font-weight:700; margin-bottom:4px; display:flex; align-items:center; gap:8px;">
                            <span>Ý (${stmtLabel}):</span>
                            <span class="${trueVal ? 'badge-tag-pass' : 'badge-tag-fail'}">${trueVal ? 'ĐÚNG' : 'SAI'}</span>
                        </div>
                        <div style="color:var(--text-secondary); font-size:13.5px; line-height:1.5;">${s.text}</div>
                    </div>
                    `;
                }).join('');
                expHtml = `
                    <div style="margin-bottom:10px;"><strong>Đáp án & Bản chất từng phát biểu:</strong></div>
                    ${stmtsHtml}
                    <div style="margin-top:10px; padding:10px 12px; background:rgba(56,189,248,0.06); border-radius:8px; border-left:3px solid #38BDF8;">
                        <strong>Phân tích khoa học chi tiết:</strong> ${q.explanation || 'Đọc kĩ các định luật và công thức liên quan trong SGK.'}
                    </div>
                `;
            }
            if (this.studyExplainContent) {
                this.studyExplainContent.innerHTML = expHtml;
            }
            this.studyInlineExplanation.style.display = 'block';
            this.renderMath(this.studyInlineExplanation);
        } else {
            this.studyInlineExplanation.style.display = 'none';
        }
    }

    retryCurrentQuestion() {
        soundEngine.playClick();
        if (this.studyInlineExplanation) {
            this.studyInlineExplanation.style.display = 'none';
        }
        if (this.state.questionStatus) {
            delete this.state.questionStatus[this.state.currentIndex];
        }
        this.loadCurrentQuestion();
    }

    // =========================================================================
    // TEACHER SECURITY & PASSWORD AUTHENTICATION ENGINE
    // =========================================================================
    isTeacherAuthenticated() {
        return sessionStorage.getItem('wayground_teacher_auth') === 'true';
    }

    openTeacherSecurityPrompt(onSuccess) {
        if (this.isTeacherAuthenticated()) {
            if (onSuccess) onSuccess();
            return;
        }

        this.teacherAuthCallback = onSuccess;
        if (this.modalTeacherPasswordPrompt) {
            if (this.inputPromptPwd) this.inputPromptPwd.value = '';
            if (this.promptPwdError) this.promptPwdError.style.display = 'none';
            this.modalTeacherPasswordPrompt.classList.add('active');
            setTimeout(() => this.inputPromptPwd?.focus(), 150);
        } else {
            const pwd = prompt("Nhập mật khẩu giáo viên để truy cập (mặc định: giaovien12):");
            const realPwd = localStorage.getItem('wayground_teacher_pwd') || 'giaovien12';
            if (pwd === realPwd) {
                sessionStorage.setItem('wayground_teacher_auth', 'true');
                if (onSuccess) onSuccess();
            } else if (pwd !== null) {
                alert("Mật khẩu không chính xác!");
            }
        }
    }

    verifyTeacherPassword(enteredPassword) {
        const correctPassword = localStorage.getItem('wayground_teacher_pwd') || 'giaovien12';
        return (enteredPassword || '').trim() === correctPassword.trim();
    }

    handleTeacherPasswordSubmit() {
        const entered = this.inputPromptPwd ? this.inputPromptPwd.value : '';
        if (this.verifyTeacherPassword(entered)) {
            sessionStorage.setItem('wayground_teacher_auth', 'true');
            if (this.modalTeacherPasswordPrompt) {
                this.modalTeacherPasswordPrompt.classList.remove('active');
            }
            if (window.soundEngine) soundEngine.playCorrect();
            if (this.teacherAuthCallback) {
                const cb = this.teacherAuthCallback;
                this.teacherAuthCallback = null;
                cb();
            } else {
                this.openTeacherDashboardDirect();
            }
        } else {
            if (window.soundEngine) soundEngine.playWrong();
            if (this.promptPwdError) {
                this.promptPwdError.style.display = 'block';
            }
            const card = this.modalTeacherPasswordPrompt?.querySelector('.teacher-pwd-prompt-card');
            if (card) {
                card.classList.add('shake-anim');
                setTimeout(() => card.classList.remove('shake-anim'), 600);
            }
            this.inputPromptPwd?.focus();
        }
    }

    openTeacherDashboard() {
        this.openTeacherSecurityPrompt(() => {
            this.openTeacherDashboardDirect();
        });
    }

    openTeacherDashboardDirect() {
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
    window.gameInstance = window.game;
});
