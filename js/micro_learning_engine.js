/**
 * Wayground Physics 9 - Advanced Micro-learning Engine (v2.0.0)
 * Faithfully implementing the 3 approved Visual UI Mockups:
 * - Mockup 1: Cosmic Celestial Journey Map with Checkpoints
 * - Mockup 2: PhET + Brilliant Interactive Simulation Sandbox (Battery, Ammeter, Bulb, Live I-V Canvas)
 * - Mockup 3: Lord Ohm Boss Fight & 3-Column Summary Hub (Mindmap + Boss Arena + Cheat Sheet)
 */

class MicroLearningEngine {
    constructor() {
        this.currentGrade = parseInt(localStorage.getItem('wayground_micro_grade') || '9');
        this.currentLesson = null;
        this.currentUnit = null;
        this.currentPhase = 1; // 1: Hook, 2: Challenge, 3: Memory, 4: Drill, 5: Branching
        this.drillIndex = 0;
        this.drillScore = 0;
        
        // Lab simulation state
        this.simU = 6;
        this.simR = 10;
        this.poePredicted = false;
        this.poeSwitchClosed = false;
        this.assembledTiles = [];

        // 4-Task Type Interactive States (GDPT 2018 Standard)
        this.multiTfAnswers = {};
        this.shortAnswerVal = '';
        this.circuitPlaced = {};

        // Boss fight state
        this.bossHp = 100;
        this.bossMaxHp = 100;
        this.bossQuestionIndex = 0;

        this.loadGradeData(this.currentGrade);
        this.initDOM();
    }

    loadGradeData(grade) {
        this.currentGrade = grade;
        try {
            localStorage.setItem('wayground_micro_grade', grade.toString());
        } catch (e) {}

        if (grade === 10 && typeof MICRO_LEARNING_BANK_10 !== 'undefined') {
            this.data = MICRO_LEARNING_BANK_10;
        } else if (grade === 11 && typeof MICRO_LEARNING_BANK_11 !== 'undefined') {
            this.data = MICRO_LEARNING_BANK_11;
        } else if (grade === 12 && typeof MICRO_LEARNING_BANK_12 !== 'undefined') {
            this.data = MICRO_LEARNING_BANK_12;
        } else if (typeof MICRO_LEARNING_BANK_9 !== 'undefined') {
            this.data = MICRO_LEARNING_BANK_9;
            this.currentGrade = 9;
        } else {
            this.data = { lessons: [] };
        }

        this.storageKey = `wayground_micro_progress_grade_${this.currentGrade}`;
        this.progress = this.loadProgress();
    }

    switchGrade(grade) {
        this.loadGradeData(grade);
        this.render();
    }

    loadProgress() {
        try {
            const raw = localStorage.getItem(this.storageKey);
            if (raw) return JSON.parse(raw);
        } catch (e) {
            console.warn('Lỗi đọc progress micro-learning:', e);
        }
        return {
            total_xp: 1250,
            streak: 7,
            rank: 'Tập Sự',
            completed_units: {},
            completed_lessons: {}
        };
    }

    saveProgress() {
        try {
            localStorage.setItem(this.storageKey, JSON.stringify(this.progress));
        } catch (e) {
            console.warn('Lỗi lưu progress micro-learning:', e);
        }
    }

    addXP(amount) {
        this.progress.total_xp += amount;
        if (this.progress.total_xp >= 2000) this.progress.rank = 'Kiến Trúc Sư Vật Lí';
        else if (this.progress.total_xp >= 1500) this.progress.rank = 'Nhà Thực Nghiệm';
        this.saveProgress();
        this.updateHeaderStats();
    }

    initDOM() {
        let container = document.getElementById('micro-learning-view');
        if (!container) {
            container = document.createElement('div');
            container.id = 'micro-learning-view';
            container.className = 'micro-container';
            container.style.display = 'none';
            const main = document.querySelector('.main-wrapper') || document.body;
            main.appendChild(container);
        }
        this.container = container;
    }

    render() {
        const gradeBadge = this.currentGrade === 9 ? '⚡ LỚP 9 (ĐIỆN HỌC)' :
                           this.currentGrade === 10 ? '🚗 LỚP 10 (CƠ HỌC & NEWTON)' :
                           this.currentGrade === 11 ? '🌊 LỚP 11 (DAO ĐỘNG & SÓNG)' : '⚛️ LỚP 12 (VẬT LÍ NHIỆT & KHÍ)';
        this.container.innerHTML = `
            <!-- Top Navigation & Stats Bar (Mockup 1) -->
            <div class="micro-header-nav">
                <div style="display: flex; align-items: center; gap: 14px; flex-wrap: wrap;">
                    <button id="btn-back-lobby-from-micro" class="micro-stat-badge" style="cursor: pointer; background: rgba(255,255,255,0.08); border-color: rgba(255,255,255,0.18);">
                        ⬅ Đấu Trường
                    </button>
                    <div>
                        <span style="font-weight: 800; font-size: 1.15rem; color: #fff; letter-spacing: 0.02em;">🚀 WAYGROUND PHYSICS ${this.currentGrade}</span>
                        <div style="font-size: 0.78rem; color: var(--micro-cyan); font-weight: 600;">${gradeBadge} • GDPT 2018</div>
                    </div>
                </div>

                <!-- Grade Switcher Tabs Bar (Lớp 9, 10, 11, 12) -->
                <div class="micro-grade-tabs-bar" style="display: flex; gap: 6px; background: rgba(0,0,0,0.4); padding: 4px; border-radius: 20px; border: 1px solid rgba(255,255,255,0.12);">
                    <button class="micro-grade-tab ${this.currentGrade === 9 ? 'active' : ''}" data-grade="9">⚡ Lớp 9</button>
                    <button class="micro-grade-tab ${this.currentGrade === 10 ? 'active' : ''}" data-grade="10">🚗 Lớp 10</button>
                    <button class="micro-grade-tab ${this.currentGrade === 11 ? 'active' : ''}" data-grade="11">🌊 Lớp 11</button>
                    <button class="micro-grade-tab ${this.currentGrade === 12 ? 'active' : ''}" data-grade="12">⚛️ Lớp 12</button>
                </div>

                <div class="micro-nav-stats">
                    <div class="micro-stat-badge xp" title="Tổng điểm kinh nghiệm">⚡ <span id="micro-xp-val">${this.progress.total_xp}</span> XP</div>
                    <div class="micro-stat-badge streak" title="Chuỗi ngày học liên tục">🔥 <span id="micro-streak-val">${this.progress.streak}</span> Ngày</div>
                    <div class="micro-stat-badge rank" title="Cấp bậc hiện tại">🎖️ <span>${this.progress.rank}</span></div>
                </div>
            </div>

            <!-- Celestial Islands / Lessons List (Mockup 1) -->
            <div id="micro-lessons-list">
                ${this.data.lessons.map((lesson, idx) => this.renderLessonCard(lesson, idx)).join('')}
            </div>
        `;

        this.bindEvents();
        this.renderKaTeX();
    }

    renderLessonCard(lesson, index) {
        const isLessonUnlocked = index === 0 || this.isLessonCompleted(this.data.lessons[index - 1].lesson_id);
        
        // Thumbnail ánh xạ hình ảnh khoa học thực tế cho bài học
        const coverMap = {
            p12_l01_cau_truc_chat_chuyen_the: 'images/three_states_matter.jpg',
            p12_l02_noi_nang_dinh_luat_1: 'images/dl1_thermodynamics_piston.jpg',
            p12_l03_nhiet_do_thang_nhiet_ke: 'images/three_temperature_scales.jpg',
            p12_l04_nhiet_dung_rieng_thi_nghiem: 'images/calorimeter_specific_heat.jpg',
            p12_l05_nhiet_nong_chay_hoa_hoi: 'images/phase_transition_diagram.jpg',
            p12_l06_mo_hinh_chat_khi: 'images/brownian_motion.jpg',
            p12_l07_dinh_luat_boyle: 'images/boyle_law_isotherm.jpg',
            p12_l08_dinh_luat_charles_pttt: 'images/isobaric_work_pv.jpg'
        };
        const coverImg = coverMap[lesson.lesson_id] || (lesson.micro_units?.[0]?.hook?.image) || '';
        const coverHtml = coverImg ? `
            <div class="micro-lesson-cover-wrap">
                <img src="${coverImg}" alt="${lesson.title}" class="micro-lesson-cover-img" loading="lazy">
                <div class="micro-lesson-cover-overlay"></div>
            </div>
        ` : '';

        return `
            <div class="micro-lesson-card ${isLessonUnlocked ? '' : 'locked'}">
                ${coverHtml}
                <div class="micro-lesson-header">
                    <div>
                        <span class="micro-lesson-badge">${lesson.chapter}</span>
                        <h2 class="micro-lesson-title">${lesson.icon} ${lesson.title}</h2>
                        <p class="micro-lesson-desc">${lesson.description}</p>
                    </div>
                    <div class="micro-stat-badge" style="border-color: rgba(139, 92, 246, 0.5); color: #DDD6FE; background: rgba(139, 92, 246, 0.15);">
                        🏆 ${lesson.badge}
                    </div>
                </div>

                <!-- Pathway Checkpoints (Mockup 1) -->
                <div class="micro-pathway">
                    ${lesson.micro_units.map((unit, uIdx) => {
                        const isCompleted = !!this.progress.completed_units[unit.unit_id];
                        const isPrevCompleted = uIdx === 0 || !!this.progress.completed_units[lesson.micro_units[uIdx - 1].unit_id];
                        const isActive = !isCompleted && isPrevCompleted;
                        
                        let statusClass = 'locked';
                        let actionLabel = '🔒 Khóa';
                        let starsHtml = '';

                        if (isCompleted) {
                            statusClass = 'completed';
                            actionLabel = '⭐ Học Lại';
                            starsHtml = '<span style="color: #F59E0B; font-size: 0.85rem; margin-left: 6px;">⭐⭐⭐</span>';
                        } else if (isActive) {
                            statusClass = 'active';
                            actionLabel = '▶ Bắt Đầu (5p)';
                        }

                        return `
                            <div class="micro-station ${statusClass}" data-lesson-id="${lesson.lesson_id}" data-unit-id="${unit.unit_id}">
                                <div class="micro-station-node">${isCompleted ? '✓' : (uIdx + 1)}</div>
                                ${unit.hook?.image ? `<div class="micro-station-thumb-mini"><img src="${unit.hook.image}" alt="Thí nghiệm"></div>` : ''}
                                <div class="micro-station-info">
                                    <div class="micro-station-title">${unit.title} ${starsHtml}</div>
                                    <div class="micro-station-meta">
                                        <span>⏱ ${unit.duration}</span>
                                        <span>⚡ +${unit.xp_reward} XP</span>
                                        <span style="color: #67E8F9;">${unit.short_desc}</span>
                                    </div>
                                </div>
                                <button class="micro-station-action">${actionLabel}</button>
                            </div>
                        `;
                    }).join('')}

                    <!-- Final Station: Boss Battle & Summary Hub -->
                    ${(() => {
                        const allUnitsCompleted = lesson.micro_units.every(u => !!this.progress.completed_units[u.unit_id]);
                        const isBossCompleted = !!this.progress.completed_lessons[lesson.lesson_id];
                        let bClass = 'locked';
                        let bLabel = '🔒 Khóa';
                        if (isBossCompleted) {
                            bClass = 'completed boss';
                            bLabel = '👑 Đã Chinh Phục';
                        } else if (allUnitsCompleted) {
                            bClass = 'active boss';
                            bLabel = '⚔️ Đấu Trùm Boss';
                        }

                        return `
                            <div class="micro-station ${bClass}" data-lesson-id="${lesson.lesson_id}" data-action="summary">
                                <div class="micro-station-node">👑</div>
                                <div class="micro-station-info">
                                    <div class="micro-station-title">Trạm Tổng Kết: Sơ Đồ Tư Duy & Đấu Boss</div>
                                    <div class="micro-station-meta">
                                        <span>🧠 Concept Mindmap</span>
                                        <span>📋 Formula Cheat Sheet</span>
                                        <span>⚔️ Lord Ohm Fight</span>
                                    </div>
                                </div>
                                <button class="micro-station-action">${bLabel}</button>
                            </div>
                        `;
                    })()}
                </div>
            </div>
        `;
    }

    isLessonCompleted(lessonId) {
        return !!this.progress.completed_lessons[lessonId];
    }

    updateHeaderStats() {
        const xpEl = document.getElementById('micro-xp-val');
        const streakEl = document.getElementById('micro-streak-val');
        if (xpEl) xpEl.textContent = this.progress.total_xp;
        if (streakEl) streakEl.textContent = this.progress.streak;
    }

    bindEvents() {
        const backBtn = document.getElementById('btn-back-lobby-from-micro');
        if (backBtn) {
            backBtn.addEventListener('click', () => {
                this.hide();
                const lobby = document.getElementById('screen-lobby');
                if (lobby) {
                    lobby.style.display = 'block';
                    lobby.classList.add('active');
                }
                if (window.gameInstance && typeof window.gameInstance.switchScreen === 'function') {
                    window.gameInstance.switchScreen('screen-lobby');
                }
            });
        }

        this.container.querySelectorAll('.micro-station').forEach(el => {
            el.addEventListener('click', () => {
                if (el.classList.contains('locked')) return;
                const lessonId = el.getAttribute('data-lesson-id');
                const unitId = el.getAttribute('data-unit-id');
                const action = el.getAttribute('data-action');

                const lesson = this.data.lessons.find(l => 
            l.lesson_id === lessonId || 
            (lessonId.includes('1') && l.lesson_id.includes('01')) ||
            (lessonId.includes('2') && l.lesson_id.includes('02')) ||
            (lessonId.includes('3') && l.lesson_id.includes('03')) ||
            (lessonId.includes('4') && l.lesson_id.includes('04')) ||
            (lessonId.includes('5') && l.lesson_id.includes('05')) ||
            (lessonId.includes('6') && l.lesson_id.includes('06')) ||
            (lessonId.includes('7') && l.lesson_id.includes('07')) ||
            (lessonId.includes('8') && l.lesson_id.includes('08'))
        );
                if (!lesson) return;

                if (action === 'summary') {
                    this.openSummaryHub(lesson);
                } else if (unitId) {
                    const unit = lesson.micro_units.find(u => u.unit_id === unitId);
                    if (unit) this.openMicroUnit(lesson, unit);
                }
            });
        });

        // Grade Switcher Tabs
        this.container.querySelectorAll('.micro-grade-tab').forEach(tab => {
            tab.addEventListener('click', () => {
                const grade = parseInt(tab.getAttribute('data-grade'));
                this.switchGrade(grade);
            });
        });
    }

    // =========================================================================
    // VIEWPORT: 4E MICRO-UNIT FLOW (HOOK -> CHALLENGE -> MEMORY -> DRILL -> BRANCH)
    // =========================================================================
    openMicroUnit(lesson, unit) {
        this.currentLesson = lesson;
        this.currentUnit = unit;
        this.currentPhase = 1;
        this.drillIndex = 0;
        this.drillScore = 0;
        this.simU = 6;
        this.simR = 10;
        this.assembledTiles = [];
        this.resetQuestionState();

        let modal = document.getElementById('micro-viewport-modal');
        if (!modal) {
            modal = document.createElement('div');
            modal.id = 'micro-viewport-modal';
            modal.className = 'micro-viewport-overlay';
            document.body.appendChild(modal);
        }

        this.renderViewport(modal);
        modal.style.display = 'flex';
        this.renderKaTeX();
    }

    renderViewport(modal) {
        modal.innerHTML = `
            <div class="micro-viewport-box">
                <!-- Top Nav & Progress Bar -->
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 18px;">
                    <div>
                        <span style="font-size: 0.8rem; text-transform: uppercase; color: var(--micro-cyan); font-weight: 800;">${this.currentLesson.title}</span>
                        <h3 style="font-size: 1.25rem; color: #fff; margin: 2px 0 0 0;">${this.currentUnit.title}</h3>
                    </div>
                    <button id="btn-close-viewport" style="background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.12); width: 36px; height: 36px; border-radius: 50%; font-size: 1.2rem; color: #94A3B8; cursor: pointer;">✕</button>
                </div>

                <div class="micro-step-progress">
                    <div class="micro-step-pill ${this.currentPhase === 1 ? 'active' : (this.currentPhase > 1 ? 'completed' : '')}">1. Khởi Động</div>
                    <div class="micro-step-pill ${this.currentPhase === 2 ? 'active' : (this.currentPhase > 2 ? 'completed' : '')}">2. Thử Thách</div>
                    <div class="micro-step-pill ${this.currentPhase === 3 ? 'active' : (this.currentPhase > 3 ? 'completed' : '')}">3. Ghi Nhớ</div>
                    <div class="micro-step-pill ${this.currentPhase === 4 ? 'active' : (this.currentPhase > 4 ? 'completed' : '')}">4. Luyện Tập</div>
                    <div class="micro-step-pill ${this.currentPhase === 5 ? 'active' : ''}">5. Nâng Cao</div>
                </div>

                <!-- Phase Views Container -->
                <div id="micro-phase-content">
                    ${this.renderCurrentPhaseHTML()}
                </div>
            </div>
        `;

        document.getElementById('btn-close-viewport').addEventListener('click', () => {
            modal.style.display = 'none';
        });

        this.bindPhaseEvents();
        this.renderKaTeX();
    }

    renderCurrentPhaseHTML() {
        const u = this.currentUnit;

        // Phase 1: Hook
        if (this.currentPhase === 1) {
            return `
                <div class="micro-phase-view active">
                    <div class="micro-hook-hero">
                        <div class="micro-hook-icon">💡</div>
                        <h2 class="micro-hook-title">${u.hook.title || 'Hiện Tượng Thực Tế Đời Sống'}</h2>
                        <div class="micro-hook-text">
                            ${u.hook.scenario}
                        </div>
                        <p style="color: var(--micro-amber); font-weight: 700; margin-bottom: 26px; font-size: 1.05rem;">
                            ${u.hook.curiosity_prompt}
                        </p>
                        <button id="btn-phase-hook-next" class="btn-micro-primary" style="font-size: 1.05rem; padding: 16px 36px;">
                            🎮 Bước Vào Thử Thách Khám Phá ➔
                        </button>
                    </div>
                </div>
            `;
        }

        // Phase 2: Challenge (Interactive Circuit Sandbox as in Mockup 2 or Formula Assembler or Circuit Drag)
        if (this.currentPhase === 2) {
            if (u.challenge.type === 'formula_assembler') {
                return this.renderFormulaAssemblerHTML(u);
            }
            if (u.challenge.type === 'circuit_drag') {
                return this.renderCircuitDragHTML(u, u.challenge);
            }
            return this.renderCircuitLabHTML(u);
        }

        // Phase 3: Memory Card
        if (this.currentPhase === 3) {
            const m = u.memory_card;
            return `
                <div class="micro-phase-view active">
                    <div class="micro-card-wrapper">
                        <div class="micro-memory-card">
                            <h3 style="color: #fff; font-size: 1.35rem; margin-bottom: 12px; font-family: 'Lexend', sans-serif;">${m.title}</h3>
                            <p style="color: #E2E8F0; font-size: 1.08rem; line-height: 1.6;">${m.rule}</p>
                            ${m.image ? `
                                <div style="text-align: center; margin: 14px 0;">
                                    <img src="${m.image}" alt="Minh họa kiến thức trọng tâm" style="max-width: 100%; max-height: 240px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.2); box-shadow: 0 6px 20px rgba(0,0,0,0.5);">
                                </div>
                            ` : ''}

                            <div class="micro-formula-badge">
                                $${m.formula}$
                            </div>

                            <p style="color: #94A3B8; font-size: 0.98rem; white-space: pre-line; line-height: 1.6;">${m.key_takeaway}</p>

                            <div class="micro-mnemonic-box">
                                ${m.mnemonic}
                            </div>
                        </div>
                    </div>

                    <button id="btn-phase-memory-next" class="btn-micro-primary" style="width: 100%; margin-top: 18px; font-size: 1.05rem;">
                        🎯 Luyện Tập Phản Xạ Nhanh (3 Câu) ➔
                    </button>
                </div>
            `;
        }

        // Phase 4: Practice Drill (GDPT 2018 Standard - 4 Task Types)
        if (this.currentPhase === 4) {
            const q = u.practice_drill[this.drillIndex];
            return this.renderDrillQuestionHTML(u, q);
        }

        // Phase 5: Branching & Level-Up
        if (this.currentPhase === 5) {
            const isPerfect = this.drillScore === u.practice_drill.length;
            return `
                <div class="micro-phase-view active micro-branch-box">
                    <div class="micro-stars-row">
                        ${isPerfect ? '⭐⭐⭐' : '⭐⭐'}
                    </div>
                    <h2 style="color: #fff; font-size: 1.7rem; margin-bottom: 8px; font-family: 'Lexend', sans-serif;">
                        ${isPerfect ? '🎉 XUẤT SẮC! ĐẠT 3 SAO TUYỆT ĐỐI' : '👏 HOÀN THÀNH TỐT!'}
                    </h2>
                    <p style="color: var(--micro-text-secondary); max-width: 520px; margin: 0 auto; line-height: 1.6; font-size: 1.02rem;">
                        Bạn đã làm chủ đơn vị kiến thức: <strong>${u.title}</strong> và tích lũy thành công <strong>+${u.xp_reward} XP</strong>!
                    </p>

                    <div class="micro-branch-actions">
                        <button id="btn-action-advanced" class="btn-micro-advanced">
                            🔥 Thử Thách Nâng Cao (+${u.advanced_challenge.bonus_xp} XP)
                        </button>
                        <button id="btn-action-continue" class="btn-micro-primary">
                            ⏩ Mở Khóa Đơn Vị Tiếp Theo
                        </button>
                    </div>
                </div>
            `;
        }

        return '';
    }

    // Interactive Circuit Sandbox (Mockup 2)
    renderCircuitLabHTML(u) {
        return `
            <div class="micro-phase-view active">
                <div style="background: rgba(6, 182, 212, 0.12); border-left: 4px solid var(--micro-cyan); padding: 12px 18px; border-radius: 10px; margin-bottom: 20px;">
                    <span style="font-weight: 800; color: #67E8F9;">THỬ THÁCH PHET:</span>
                    <span style="color: #E2E8F0; margin-left: 6px;">${u.challenge.instruction}</span>
                </div>

                <!-- Live Circuit Box (Mockup 2) -->
                <div class="micro-lab-arena">
                    <div class="micro-circuit-display">
                        <!-- Battery -->
                        <div class="micro-battery-elem">
                            <span style="font-size: 0.75rem; color: #fff; font-weight: 800;">PIN</span>
                            <span id="lab-bat-label" style="font-size: 0.85rem; color: #FEF08A; font-weight: 800;">6V</span>
                        </div>

                        <!-- Wire connecting to Ammeter -->
                        <div style="height: 3px; width: 40px; background: #38BDF8; box-shadow: 0 0 8px #38BDF8;"></div>

                        <!-- Ammeter Gauge -->
                        <div class="micro-meter-gauge">
                            <div style="font-size: 0.75rem; text-transform: uppercase; color: #94A3B8; font-weight: 800;">AMPE KẾ (A)</div>
                            <div class="digital-readout" id="lab-val-i">0.60 A</div>
                        </div>

                        <!-- Wire to Resistor -->
                        <div style="height: 3px; width: 40px; background: #38BDF8; box-shadow: 0 0 8px #38BDF8;"></div>

                        <!-- Resistor -->
                        <div style="padding: 8px 16px; background: #334155; border: 2px solid #F59E0B; border-radius: 8px; font-weight: 800; color: #FBBF24;">
                            R = <span id="lab-res-label">10</span> Ω
                        </div>

                        <!-- Wire to Bulb -->
                        <div style="height: 3px; width: 40px; background: #38BDF8; box-shadow: 0 0 8px #38BDF8;"></div>

                        <!-- Light Bulb with Dynamic Filament Glow -->
                        <div class="micro-bulb-fixture" id="lab-bulb">
                            💡
                        </div>
                    </div>

                    <!-- Bottom Controls Grid (Mockup 2) -->
                    <div class="micro-lab-bottom-grid">
                        <!-- Voltage & Resistance Sliders -->
                        <div class="micro-lab-widget">
                            <h4>🎛️ ĐIỀU CHỈNH BIẾN SỐ</h4>
                            <div style="margin-bottom: 12px;">
                                <div style="display: flex; justify-content: space-between; font-size: 0.85rem; color: #CBD5E1; margin-bottom: 4px;">
                                    <span>Hiệu điện thế (U)</span>
                                    <strong id="label-slider-u" style="color: var(--micro-cyan);">6 V</strong>
                                </div>
                                <input type="range" id="slider-u" class="micro-range-input" min="0" max="12" step="1" value="6" style="width: 100%;">
                            </div>
                            <div>
                                <div style="display: flex; justify-content: space-between; font-size: 0.85rem; color: #CBD5E1; margin-bottom: 4px;">
                                    <span>Điện trở (R)</span>
                                    <strong id="label-slider-r" style="color: var(--micro-amber);">10 Ω</strong>
                                </div>
                                <input type="range" id="slider-r" class="micro-range-input" min="5" max="30" step="5" value="10" style="width: 100%;">
                            </div>
                        </div>

                        <!-- Live I-V Graph Canvas -->
                        <div class="micro-lab-widget">
                            <h4>📈 ĐỒ THỊ I(U) THỰC NGHIỆM</h4>
                            <canvas id="micro-iv-canvas" width="220" height="120"></canvas>
                        </div>

                        <!-- Formula Card -->
                        <div class="micro-lab-widget" style="text-align: center;">
                            <h4>📐 CÔNG THỨC</h4>
                            <div style="font-size: 1.6rem; color: #67E8F9; font-weight: 800; margin: auto;">
                                $I = \\frac{U}{R}$
                            </div>
                        </div>
                    </div>
                </div>

                <button id="btn-phase-challenge-next" class="btn-micro-primary" style="width: 100%; font-size: 1.05rem;">
                    🧠 Đã Nhận Ra Quy Luật ➔ Nhận Thẻ Ghi Nhớ
                </button>
            </div>
        `;
    }

    // Formula Assembler (Duolingo style)
    renderFormulaAssemblerHTML(u) {
        const blocks = u.challenge.blocks || ["I", "=", "U", "/", "R"];
        return `
            <div class="micro-phase-view active">
                <div style="background: rgba(139, 92, 246, 0.15); border-left: 4px solid var(--micro-purple); padding: 14px 18px; border-radius: 10px; margin-bottom: 20px;">
                    <span style="font-weight: 800; color: #DDD6FE;">THỬ THÁCH DUOLINGO MATH:</span>
                    <span style="color: #E2E8F0; margin-left: 6px;">${u.challenge.instruction}</span>
                </div>

                <!-- Formula Drop Slot -->
                <div class="micro-formula-slot-area" id="formula-slot-area">
                    <span style="color: #64748B; font-style: italic;">Chạm vào các khối bên dưới để ghép công thức...</span>
                </div>

                <!-- Tile bank -->
                <div style="display: flex; gap: 12px; flex-wrap: wrap; justify-content: center; margin-bottom: 24px;">
                    ${blocks.map(b => `
                        <div class="micro-formula-tile" data-tile-val="${b}">${b}</div>
                    `).join('')}
                </div>

                <div id="formula-feedback" style="display: none; padding: 12px; border-radius: 10px; margin-bottom: 18px; text-align: center; font-weight: 700;"></div>

                <button id="btn-phase-challenge-next" class="btn-micro-primary" style="width: 100%; font-size: 1.05rem;" disabled>
                    Hoàn Thành Ghép Công Thức ➔
                </button>
            </div>
        `;
    }

    bindPhaseEvents() {
        const btnHook = document.getElementById('btn-phase-hook-next');
        if (btnHook) {
            btnHook.addEventListener('click', () => {
                this.currentPhase = 2;
                this.renderViewport(document.getElementById('micro-viewport-modal'));
            });
        }

        // Live Circuit Simulation events (Mockup 2)
        const sliderU = document.getElementById('slider-u');
        const sliderR = document.getElementById('slider-r');
        if (sliderU && sliderR) {
            const updateLab = () => {
                const u = parseFloat(sliderU.value);
                const r = parseFloat(sliderR.value);
                const i = r > 0 ? (u / r) : 0;
                const power = u * i;

                this.simU = u;
                this.simR = r;

                document.getElementById('label-slider-u').textContent = u + ' V';
                document.getElementById('lab-bat-label').textContent = u + ' V';
                document.getElementById('label-slider-r').textContent = r + ' Ω';
                document.getElementById('lab-res-label').textContent = r;
                document.getElementById('lab-val-i').textContent = i.toFixed(2) + ' A';

                // Light bulb filament glow
                const bulb = document.getElementById('lab-bulb');
                if (bulb) {
                    const brightness = Math.min(1, power / 14);
                    bulb.style.background = `rgba(245, 158, 11, ${0.15 + brightness * 0.85})`;
                    bulb.style.boxShadow = `0 0 ${brightness * 45}px rgba(245, 158, 11, ${brightness * 0.9})`;
                    bulb.style.transform = `scale(${1 + brightness * 0.18})`;
                }

                // Draw live I-V graph canvas
                this.drawIVGraph(u, i);
            };

            sliderU.addEventListener('input', updateLab);
            sliderR.addEventListener('input', updateLab);
            updateLab();
        }

        // Formula Assembler clicks
        const tiles = document.querySelectorAll('.micro-formula-tile');
        const slotArea = document.getElementById('formula-slot-area');
        const nextChalBtn = document.getElementById('btn-phase-challenge-next');
        const fFeedback = document.getElementById('formula-feedback');

        if (tiles.length > 0 && slotArea) {
            tiles.forEach(tile => {
                tile.addEventListener('click', () => {
                    const val = tile.getAttribute('data-tile-val');
                    this.assembledTiles.push(val);
                    slotArea.innerHTML = this.assembledTiles.map(t => `<div class="micro-formula-tile selected">${t}</div>`).join('');
                    
                    const assembledStr = this.assembledTiles.join(' ');
                    if (assembledStr === 'I = U / R' || assembledStr === 'I = U / R' || assembledStr === 'R = U / I') {
                        fFeedback.style.display = 'block';
                        fFeedback.style.background = 'rgba(16, 185, 129, 0.2)';
                        fFeedback.style.color = '#6EE7B7';
                        fFeedback.innerHTML = '🎉 Chính xác! Bạn đã ghép thành công công thức Định luật Ôm!';
                        nextChalBtn.disabled = false;
                    }
                });
            });
        }

        if (nextChalBtn) {
            nextChalBtn.addEventListener('click', () => {
                this.currentPhase = 3;
                this.renderViewport(document.getElementById('micro-viewport-modal'));
            });
        }

        const btnMem = document.getElementById('btn-phase-memory-next');
        if (btnMem) {
            btnMem.addEventListener('click', () => {
                this.currentPhase = 4;
                this.drillIndex = 0;
                this.drillScore = 0;
                this.resetQuestionState();
                this.renderViewport(document.getElementById('micro-viewport-modal'));
            });
        }

        // Phase 2: Circuit Drag Challenge
        if (this.currentPhase === 2 && this.currentUnit && this.currentUnit.challenge && this.currentUnit.challenge.type === 'circuit_drag') {
            this.bindCircuitDragEvents(this.currentUnit.challenge);
        }

        // Phase 4: Practice drill feedback (delegated by question type)
        if (this.currentPhase === 4) {
            const q = this.currentUnit.practice_drill[this.drillIndex];
            this.bindDrillEvents(q);
        }

        // Branching Actions
        const btnAdv = document.getElementById('btn-action-advanced');
        if (btnAdv) {
            btnAdv.addEventListener('click', () => this.openAdvancedModal());
        }

        const btnCont = document.getElementById('btn-action-continue');
        if (btnCont) {
            btnCont.addEventListener('click', () => {
                document.getElementById('micro-viewport-modal').style.display = 'none';
                this.render();
            });
        }
    }

    resetQuestionState() {
        this.multiTfAnswers = {};
        this.shortAnswerVal = '';
        this.circuitPlaced = {};
    }

    renderDrillQuestionHTML(u, q) {
        if (!q) return '<div class="micro-phase-view active">Chưa có dữ liệu câu hỏi.</div>';
        const type = q.type || 'mcq';
        if (type === 'multi_tf') return this.renderMultiTFHTML(u, q);
        if (type === 'short_answer') return this.renderShortAnswerHTML(u, q);
        if (type === 'circuit_drag') return this.renderCircuitDragHTML(u, q);
        return this.renderMCQHTML(u, q);
    }

    renderMCQHTML(u, q) {
        return `
            <div class="micro-phase-view active">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 18px;">
                    <span style="font-size: 0.88rem; font-weight: 800; color: var(--micro-amber); text-transform: uppercase;">
                        CÂU HỎI ${this.drillIndex + 1} / ${u.practice_drill.length} • TRẮC NGHIỆM (${q.level || 'Nhận biết'})
                    </span>
                    <span style="font-size: 0.88rem; color: var(--micro-text-secondary); background: rgba(255,255,255,0.06); padding: 4px 12px; border-radius: 20px;">
                        Điểm: ${this.drillScore} / ${this.drillIndex}
                    </span>
                </div>

                <div class="micro-drill-question">${q.question}</div>
                ${q.image ? `
                    <div class="micro-drill-image-box" style="text-align: center; margin: 12px 0;">
                        <img src="${q.image}" alt="Hình minh họa bài tập" style="max-width: 100%; max-height: 240px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.18); box-shadow: 0 6px 20px rgba(0,0,0,0.5);">
                    </div>
                ` : ''}

                <div class="micro-drill-options">
                    ${q.options.map((opt, oIdx) => `
                        <button class="micro-opt-btn" data-opt-idx="${oIdx}">
                            <span style="font-weight: 800; color: var(--micro-cyan);">${String.fromCharCode(65 + oIdx)}.</span>
                            <span>${opt}</span>
                        </button>
                    `).join('')}
                </div>

                <div id="drill-feedback" class="micro-drill-feedback"></div>

                <button id="btn-drill-next" class="btn-micro-primary" style="display: none; width: 100%; font-size: 1.05rem; margin-top: 14px;">
                    ${this.drillIndex + 1 < u.practice_drill.length ? 'Câu Tiếp Theo ➔' : 'Hoàn Thành Luyện Tập 🏆'}
                </button>
            </div>
        `;
    }

    renderMultiTFHTML(u, q) {
        const items = q.items || [];
        return `
            <div class="micro-phase-view active">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 14px; flex-wrap: wrap; gap: 8px;">
                    <span style="font-size: 0.88rem; font-weight: 800; color: var(--micro-amber); text-transform: uppercase;">
                        CÂU HỎI ${this.drillIndex + 1} / ${u.practice_drill.length} • ĐÚNG / SAI 4 Ý (GDPT 2018)
                    </span>
                    <span class="multi-tf-score-badge">
                        ⚡ Lũy tiến: 0.1 - 0.25 - 0.5 - 1.0 đ
                    </span>
                </div>

                <div class="multi-tf-card">
                    <div class="multi-tf-context">
                        <strong>📋 Ngữ cảnh:</strong> ${q.context || q.question}
                    </div>
                    ${q.image ? `
                        <div class="micro-drill-image-box" style="text-align: center; margin: 12px 0;">
                            <img src="${q.image}" alt="Hình minh họa mệnh đề" style="max-width: 100%; max-height: 240px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.18); box-shadow: 0 6px 20px rgba(0,0,0,0.5);">
                        </div>
                    ` : ''}

                    <div class="multi-tf-items-list">
                        ${items.map((item, idx) => `
                            <div class="multi-tf-subitem" id="tf-row-${idx}">
                                <div class="multi-tf-subtext">
                                    <span style="font-weight: 800; color: var(--micro-cyan); margin-right: 6px;">${String.fromCharCode(97 + idx)})</span>
                                    <span>${item.text}</span>
                                </div>
                                <div class="multi-tf-btn-group">
                                    <button class="btn-pill-tf true-pill" data-row="${idx}" data-val="true">
                                        ✓ ĐÚNG
                                    </button>
                                    <button class="btn-pill-tf false-pill" data-row="${idx}" data-val="false">
                                        ✗ SAI
                                    </button>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <div id="drill-feedback" class="micro-drill-feedback"></div>

                <div style="margin-top: 16px;">
                    <button id="btn-submit-tf" class="btn-micro-primary" style="width: 100%; font-size: 1.05rem;" disabled>
                        🔒 Hãy Chọn Đúng/Sai Cho Đủ 4 Mệnh Đề
                    </button>
                    <button id="btn-drill-next" class="btn-micro-primary" style="display: none; width: 100%; font-size: 1.05rem;">
                        ${this.drillIndex + 1 < u.practice_drill.length ? 'Câu Tiếp Theo ➔' : 'Hoàn Thành Luyện Tập 🏆'}
                    </button>
                </div>
            </div>
        `;
    }

    renderShortAnswerHTML(u, q) {
        return `
            <div class="micro-phase-view active">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 14px; flex-wrap: wrap; gap: 8px;">
                    <span style="font-size: 0.88rem; font-weight: 800; color: var(--micro-amber); text-transform: uppercase;">
                        CÂU HỎI ${this.drillIndex + 1} / ${u.practice_drill.length} • TRẢ LỜI NGẮN / ĐIỀN SỐ
                    </span>
                    <span style="font-size: 0.82rem; color: var(--micro-cyan); background: rgba(6, 182, 212, 0.1); border: 1px solid var(--micro-cyan); padding: 4px 12px; border-radius: 20px; font-weight: 700;">
                        🎯 Sai số cho phép: ±${q.tolerance !== undefined ? q.tolerance : 0.05}
                    </span>
                </div>

                <div class="short-answer-card">
                    <div class="micro-drill-question" style="margin-bottom: 16px;">
                        ${q.question}
                    </div>
                    ${q.image ? `
                        <div class="micro-drill-image-box" style="text-align: center; margin: 12px 0;">
                            <img src="${q.image}" alt="Hình minh họa điền số" style="max-width: 100%; max-height: 240px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.18); box-shadow: 0 6px 20px rgba(0,0,0,0.5);">
                        </div>
                    ` : ''}

                    <div class="short-answer-display-box">
                        <div id="short-answer-value" class="short-answer-display-value ${!this.shortAnswerVal ? 'empty' : ''}">
                            ${this.shortAnswerVal || ''}
                        </div>
                        <div class="short-answer-unit-badge">
                            ${q.unit_symbol || q.unit || ''}
                        </div>
                    </div>

                    <div class="digital-numpad">
                        <button class="btn-numpad" data-key="7">7</button>
                        <button class="btn-numpad" data-key="8">8</button>
                        <button class="btn-numpad" data-key="9">9</button>
                        <button class="btn-numpad action-backspace" data-key="backspace" title="Xóa kí tự cuối">⌫</button>

                        <button class="btn-numpad" data-key="4">4</button>
                        <button class="btn-numpad" data-key="5">5</button>
                        <button class="btn-numpad" data-key="6">6</button>
                        <button class="btn-numpad" data-key="clear" style="color: #FBBF24;" title="Xóa tất cả">C</button>

                        <button class="btn-numpad" data-key="1">1</button>
                        <button class="btn-numpad" data-key="2">2</button>
                        <button class="btn-numpad" data-key="3">3</button>
                        <button class="btn-numpad" data-key="neg" title="Đổi dấu">±</button>

                        <button class="btn-numpad" data-key="0">0</button>
                        <button class="btn-numpad" data-key=".">.</button>
                        <button class="btn-numpad action-submit" data-key="submit" id="btn-numpad-submit">GỬI ĐÁP ÁN ➔</button>
                    </div>
                </div>

                <div id="drill-feedback" class="micro-drill-feedback"></div>

                <button id="btn-drill-next" class="btn-micro-primary" style="display: none; width: 100%; font-size: 1.05rem; margin-top: 14px;">
                    ${this.drillIndex + 1 < u.practice_drill.length ? 'Câu Tiếp Theo ➔' : 'Hoàn Thành Luyện Tập 🏆'}
                </button>
            </div>
        `;
    }

    renderCircuitDragHTML(u, q) {
        return `
            <div class="micro-phase-view active">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 14px;">
                    <span style="font-size: 0.88rem; font-weight: 800; color: var(--micro-amber); text-transform: uppercase;">
                        CÂU HỎI ${this.drillIndex + 1} / ${u.practice_drill ? u.practice_drill.length : 1} • LẮP RÁP MẠCH ĐIỆN
                    </span>
                    <span style="font-size: 0.82rem; color: #67E8F9; background: rgba(56, 189, 248, 0.12); padding: 4px 12px; border-radius: 20px;">
                        Kéo thả / Chạm để ghép nối
                    </span>
                </div>

                <div style="background: rgba(6, 182, 212, 0.12); border-left: 4px solid var(--micro-cyan); padding: 12px 18px; border-radius: 10px; margin-bottom: 16px;">
                    <span style="font-weight: 800; color: #67E8F9;">NHIỆM VỤ:</span>
                    <span style="color: #E2E8F0; margin-left: 6px;">${q.instruction || 'Hãy lắp ráp mạch điện nối tiếp hoàn chỉnh!'}</span>
                </div>

                <div class="circuit-workspace">
                    <div class="circuit-palette">
                        <div style="font-size: 0.82rem; font-weight: 800; color: #94A3B8; text-transform: uppercase; margin-bottom: 6px;">KHO LINH KIỆN</div>
                        <div class="circuit-component-item" data-comp="bat">
                            <span>🔋</span> <span>Nguồn Pin 9V</span>
                        </div>
                        <div class="circuit-component-item" data-comp="switch">
                            <span>🎚️</span> <span>Khóa K</span>
                        </div>
                        <div class="circuit-component-item" data-comp="res1">
                            <span>🔲</span> <span>Điện trở R₁ (10Ω)</span>
                        </div>
                        <div class="circuit-component-item" data-comp="res2">
                            <span>🔲</span> <span>Điện trở R₂ (20Ω)</span>
                        </div>
                        <div class="circuit-component-item" data-comp="bulb">
                            <span>💡</span> <span>Bóng Đèn</span>
                        </div>
                    </div>

                    <div class="circuit-drop-area" id="circuit-board">
                        <div style="position: absolute; top: 12px; left: 16px; font-size: 0.82rem; color: #64748B; font-weight: 700;">BÀN LẮP MẠCH ĐIỆN TỬ</div>
                        
                        <div style="display: flex; justify-content: space-around; align-items: center; width: 100%; padding: 40px 10px 20px; flex-wrap: wrap; gap: 8px;">
                            <div class="circuit-socket" data-slot="source" style="border: 2px dashed #06B6D4; border-radius: 12px; padding: 14px 18px; text-align: center; min-width: 100px; background: rgba(6, 182, 212, 0.05); cursor: pointer;">
                                <div style="font-size: 0.72rem; color: #67E8F9; font-weight: 800;">[NGUỒN]</div>
                                <div class="socket-content" style="font-size: 1.5rem; margin-top: 4px;">❓</div>
                            </div>

                            <div style="height: 3px; width: 30px; background: #38BDF8; box-shadow: 0 0 6px #38BDF8;"></div>

                            <div class="circuit-socket" data-slot="switch" style="border: 2px dashed #F59E0B; border-radius: 12px; padding: 14px 18px; text-align: center; min-width: 100px; background: rgba(245, 158, 11, 0.05); cursor: pointer;">
                                <div style="font-size: 0.72rem; color: #FBBF24; font-weight: 800;">[CÔNG TẮC]</div>
                                <div class="socket-content" style="font-size: 1.5rem; margin-top: 4px;">❓</div>
                            </div>

                            <div style="height: 3px; width: 30px; background: #38BDF8; box-shadow: 0 0 6px #38BDF8;"></div>

                            <div class="circuit-socket" data-slot="load1" style="border: 2px dashed #8B5CF6; border-radius: 12px; padding: 14px 18px; text-align: center; min-width: 100px; background: rgba(139, 92, 246, 0.05); cursor: pointer;">
                                <div style="font-size: 0.72rem; color: #C084FC; font-weight: 800;">[TẢI 1: R₁]</div>
                                <div class="socket-content" style="font-size: 1.5rem; margin-top: 4px;">❓</div>
                            </div>

                            <div style="height: 3px; width: 30px; background: #38BDF8; box-shadow: 0 0 6px #38BDF8;"></div>

                            <div class="circuit-socket" data-slot="load2" style="border: 2px dashed #10B981; border-radius: 12px; padding: 14px 18px; text-align: center; min-width: 100px; background: rgba(16, 185, 129, 0.05); cursor: pointer;">
                                <div style="font-size: 0.72rem; color: #6EE7B7; font-weight: 800;">[TẢI 2: R₂]</div>
                                <div class="socket-content" style="font-size: 1.5rem; margin-top: 4px;">❓</div>
                            </div>
                        </div>

                        <div id="circuit-wire-feedback" style="text-align: center; font-size: 0.9rem; color: #94A3B8; margin-top: 10px;">
                            Nhấp chọn linh kiện từ kho bên trái rồi nhấp vào ô trống tương ứng để lắp ráp.
                        </div>
                    </div>
                </div>

                <div id="drill-feedback" class="micro-drill-feedback"></div>

                <div style="margin-top: 16px;">
                    <button id="btn-submit-circuit" class="btn-micro-primary" style="width: 100%; font-size: 1.05rem;">
                        ⚡ Đóng Khóa K & Kiểm Tra Mạch ➔
                    </button>
                    <button id="btn-drill-next" class="btn-micro-primary" style="display: none; width: 100%; font-size: 1.05rem;">
                        ${(u.practice_drill && this.drillIndex + 1 < u.practice_drill.length) ? 'Câu Tiếp Theo ➔' : (this.currentPhase === 2 ? 'Hoàn Thành Thử Thách ➔' : 'Hoàn Thành Luyện Tập 🏆')}
                    </button>
                </div>
            </div>
        `;
    }

    bindDrillEvents(q) {
        if (!q) return;
        const type = q.type || 'mcq';
        if (type === 'multi_tf') this.bindMultiTFEvents(q);
        else if (type === 'short_answer') this.bindShortAnswerEvents(q);
        else if (type === 'circuit_drag') this.bindCircuitDragEvents(q);
        else this.bindMCQEvents(q);
    }

    bindMCQEvents(q) {
        const optBtns = document.querySelectorAll('.micro-opt-btn');
        const feedbackEl = document.getElementById('drill-feedback');
        const nextBtn = document.getElementById('btn-drill-next');

        optBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                if (btn.classList.contains('correct') || btn.classList.contains('wrong')) return;
                const choice = parseInt(btn.getAttribute('data-opt-idx'));
                
                if (choice === q.correct) {
                    btn.classList.add('correct');
                    this.drillScore++;
                    this.addXP(25);
                    feedbackEl.style.display = 'block';
                    feedbackEl.style.background = 'rgba(16, 185, 129, 0.15)';
                    feedbackEl.style.color = '#6EE7B7';
                    feedbackEl.style.border = '1px solid #10B981';
                    feedbackEl.innerHTML = `✅ <strong>Chính xác!</strong> ${q.explanation}`;
                } else {
                    btn.classList.add('wrong');
                    if (optBtns[q.correct]) optBtns[q.correct].classList.add('correct');
                    feedbackEl.style.display = 'block';
                    feedbackEl.style.background = 'rgba(239, 68, 68, 0.15)';
                    feedbackEl.style.color = '#FCA5A5';
                    feedbackEl.style.border = '1px solid #EF4444';
                    feedbackEl.innerHTML = `❌ <strong>Cần lưu ý:</strong> ${q.explanation}`;
                }

                optBtns.forEach(b => b.style.pointerEvents = 'none');
                nextBtn.style.display = 'block';
                this.renderKaTeX();
            });
        });

        if (nextBtn) {
            nextBtn.addEventListener('click', () => this.handleDrillNext());
        }
    }

    bindMultiTFEvents(q) {
        const items = q.items || [];
        const pills = document.querySelectorAll('.btn-pill-tf');
        const submitBtn = document.getElementById('btn-submit-tf');
        const nextBtn = document.getElementById('btn-drill-next');
        const feedbackEl = document.getElementById('drill-feedback');

        pills.forEach(pill => {
            pill.addEventListener('click', () => {
                if (submitBtn.style.display === 'none') return;
                const row = parseInt(pill.getAttribute('data-row'));
                const val = pill.getAttribute('data-val') === 'true';

                this.multiTfAnswers[row] = val;

                const parentRow = document.getElementById(`tf-row-${row}`);
                if (parentRow) {
                    const rowPills = parentRow.querySelectorAll('.btn-pill-tf');
                    rowPills.forEach(p => {
                        const pVal = p.getAttribute('data-val') === 'true';
                        if (pVal === val) {
                            p.classList.add('active');
                            p.classList.remove('dimmed');
                        } else {
                            p.classList.remove('active');
                            p.classList.add('dimmed');
                        }
                    });
                }

                if (Object.keys(this.multiTfAnswers).length === items.length) {
                    submitBtn.disabled = false;
                    submitBtn.style.opacity = '1';
                    submitBtn.innerHTML = '✨ Kiểm Tra Kết Quả 4 Mệnh Đề ➔';
                }
            });
        });

        if (submitBtn) {
            submitBtn.addEventListener('click', () => {
                let correctCount = 0;
                let explanations = [];

                items.forEach((item, idx) => {
                    const userVal = this.multiTfAnswers[idx];
                    const isCorrect = userVal === item.correct;
                    if (isCorrect) correctCount++;

                    const rowEl = document.getElementById(`tf-row-${idx}`);
                    if (rowEl) {
                        rowEl.style.borderColor = isCorrect ? '#10B981' : '#EF4444';
                        rowEl.style.background = isCorrect ? 'rgba(16, 185, 129, 0.08)' : 'rgba(239, 68, 68, 0.08)';

                        const truePill = rowEl.querySelector('.true-pill');
                        const falsePill = rowEl.querySelector('.false-pill');
                        if (item.correct) {
                            truePill.classList.add('correct');
                        } else {
                            falsePill.classList.add('correct');
                        }
                        if (!isCorrect) {
                            if (userVal === true) truePill.classList.add('wrong');
                            else falsePill.classList.add('wrong');
                        }
                    }

                    const badge = isCorrect ? '✅' : '❌';
                    const exp = item.explanation ? ` — ${item.explanation}` : '';
                    explanations.push(`<div><strong>${badge} Ý ${String.fromCharCode(97 + idx)} (${item.correct ? 'ĐÚNG' : 'SAI'}):</strong>${exp}</div>`);
                });

                const xpMap = { 0: 0, 1: 15, 2: 35, 3: 65, 4: 100 };
                const earnedXP = xpMap[correctCount] || 0;
                if (earnedXP > 0) this.addXP(earnedXP);

                if (correctCount >= 2) this.drillScore++;

                submitBtn.style.display = 'none';
                nextBtn.style.display = 'block';

                pills.forEach(p => p.style.pointerEvents = 'none');

                feedbackEl.style.display = 'block';
                feedbackEl.style.background = correctCount >= 3 ? 'rgba(16, 185, 129, 0.15)' : 'rgba(245, 158, 11, 0.15)';
                feedbackEl.style.borderColor = correctCount >= 3 ? '#10B981' : '#F59E0B';
                feedbackEl.style.color = '#F8FAFC';
                feedbackEl.innerHTML = `
                    <div style="font-weight: 800; font-size: 1.1rem; margin-bottom: 8px; color: ${correctCount >= 3 ? '#6EE7B7' : '#FCD34D'};">
                        ${correctCount === 4 ? '🎉 XUẤT SẮC! Đúng trọn vẹn 4/4 ý (+100 XP - 1.0 đ)' :
                          correctCount === 3 ? '👏 RẤT TỐT! Đúng 3/4 ý (+65 XP - 0.5 đ)' :
                          correctCount === 2 ? '⚡ ĐẠT YÊU CẦU! Đúng 2/4 ý (+35 XP - 0.25 đ)' :
                          correctCount === 1 ? '⚠️ CẦN CỐ GẮNG! Đúng 1/4 ý (+15 XP - 0.1 đ)' : '❌ Chưa chính xác ý nào (+0 XP)'}
                    </div>
                    <div style="font-size: 0.92rem; line-height: 1.6; display: flex; flex-direction: column; gap: 4px;">
                        ${explanations.join('')}
                    </div>
                `;

                this.renderKaTeX();
            });
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', () => this.handleDrillNext());
        }
    }

    bindShortAnswerEvents(q) {
        const numpadBtns = document.querySelectorAll('.btn-numpad');
        const displayValEl = document.getElementById('short-answer-value');
        const nextBtn = document.getElementById('btn-drill-next');
        const feedbackEl = document.getElementById('drill-feedback');

        const updateDisplay = () => {
            if (displayValEl) {
                displayValEl.textContent = this.shortAnswerVal;
                if (!this.shortAnswerVal) displayValEl.classList.add('empty');
                else displayValEl.classList.remove('empty');
            }
        };

        const submitAnswer = () => {
            if (nextBtn.style.display === 'block') return;
            if (!this.shortAnswerVal || this.shortAnswerVal.trim() === '') {
                alert('Vui lòng nhập giá trị số trước khi gửi đáp án!');
                return;
            }

            const parsed = parseFloat(this.shortAnswerVal.replace(',', '.'));
            const tolerance = q.tolerance !== undefined ? q.tolerance : 0.05;
            const target = q.correct_value;
            const isCorrect = !isNaN(parsed) && Math.abs(parsed - target) <= tolerance;

            if (isCorrect) {
                this.drillScore++;
                this.addXP(40);
                if (displayValEl) {
                    displayValEl.style.color = '#10B981';
                    displayValEl.style.textShadow = '0 0 16px rgba(16, 185, 129, 0.8)';
                }
                feedbackEl.style.display = 'block';
                feedbackEl.style.background = 'rgba(16, 185, 129, 0.15)';
                feedbackEl.style.border = '1px solid #10B981';
                feedbackEl.style.color = '#6EE7B7';
                feedbackEl.innerHTML = `
                    <div style="font-weight: 800; font-size: 1.05rem; margin-bottom: 6px;">🎉 CHÍNH XÁC! (+40 XP)</div>
                    <div>Giá trị bạn tính được: <strong>${parsed} ${q.unit_symbol || ''}</strong></div>
                    <div style="margin-top: 6px; font-size: 0.92rem; color: #CBD5E1;">${q.explanation || ''}</div>
                `;
            } else {
                if (displayValEl) {
                    displayValEl.style.color = '#EF4444';
                    displayValEl.style.textShadow = '0 0 16px rgba(239, 68, 68, 0.8)';
                }
                feedbackEl.style.display = 'block';
                feedbackEl.style.background = 'rgba(239, 68, 68, 0.15)';
                feedbackEl.style.border = '1px solid #EF4444';
                feedbackEl.style.color = '#FCA5A5';
                feedbackEl.innerHTML = `
                    <div style="font-weight: 800; font-size: 1.05rem; margin-bottom: 6px;">❌ CHƯA CHÍNH XÁC!</div>
                    <div>Giá trị bạn nhập: <strong>${this.shortAnswerVal}</strong> • Đáp án chuẩn: <strong>${target} ${q.unit_symbol || ''}</strong></div>
                    <div style="margin-top: 6px; font-size: 0.92rem; color: #CBD5E1;">💡 <strong>Lời giải chi tiết:</strong> ${q.explanation || ''}</div>
                `;
            }

            numpadBtns.forEach(b => b.style.pointerEvents = 'none');
            nextBtn.style.display = 'block';
            this.renderKaTeX();
        };

        numpadBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const key = btn.getAttribute('data-key');
                if (key === 'backspace') {
                    this.shortAnswerVal = this.shortAnswerVal.slice(0, -1);
                } else if (key === 'clear') {
                    this.shortAnswerVal = '';
                } else if (key === 'neg') {
                    if (this.shortAnswerVal.startsWith('-')) {
                        this.shortAnswerVal = this.shortAnswerVal.slice(1);
                    } else if (this.shortAnswerVal.length > 0) {
                        this.shortAnswerVal = '-' + this.shortAnswerVal;
                    }
                } else if (key === '.') {
                    if (!this.shortAnswerVal.includes('.')) {
                        this.shortAnswerVal = (this.shortAnswerVal || '0') + '.';
                    }
                } else if (key === 'submit') {
                    submitAnswer();
                    return;
                } else if (key !== null) {
                    if (this.shortAnswerVal.length < 12) {
                        this.shortAnswerVal += key;
                    }
                }
                updateDisplay();
            });
        });

        if (nextBtn) {
            nextBtn.addEventListener('click', () => this.handleDrillNext());
        }
    }

    bindCircuitDragEvents(q) {
        const compItems = document.querySelectorAll('.circuit-component-item');
        const sockets = document.querySelectorAll('.circuit-socket');
        const submitBtn = document.getElementById('btn-submit-circuit');
        const nextBtn = document.getElementById('btn-drill-next');
        const feedbackEl = document.getElementById('drill-feedback');
        const wireFeedback = document.getElementById('circuit-wire-feedback');

        let selectedComp = null;

        compItems.forEach(item => {
            item.addEventListener('click', () => {
                compItems.forEach(c => c.style.borderColor = 'rgba(56, 189, 248, 0.25)');
                item.style.borderColor = '#F59E0B';
                selectedComp = {
                    id: item.getAttribute('data-comp'),
                    icon: item.querySelector('span:first-child').textContent,
                    name: item.querySelector('span:last-child').textContent
                };
                if (wireFeedback) wireFeedback.innerHTML = `Đã chọn: <strong>${selectedComp.name}</strong>. Hãy chạm vào một ô trên bàn mạch để gắn vào!`;
            });
        });

        sockets.forEach(sock => {
            sock.addEventListener('click', () => {
                if (!selectedComp) return;
                const slot = sock.getAttribute('data-slot');
                this.circuitPlaced[slot] = selectedComp.id;

                const content = sock.querySelector('.socket-content');
                if (content) {
                    content.textContent = selectedComp.icon;
                }
                sock.style.background = 'rgba(16, 185, 129, 0.15)';
                sock.style.borderColor = '#10B981';

                if (wireFeedback) {
                    wireFeedback.innerHTML = `Đã gắn <strong>${selectedComp.name}</strong> vào vị trí!`;
                }
            });
        });

        if (submitBtn) {
            submitBtn.addEventListener('click', () => {
                const hasSource = this.circuitPlaced['source'] === 'bat';
                const hasSwitch = this.circuitPlaced['switch'] === 'switch';
                const hasLoad1 = !!this.circuitPlaced['load1'];
                const hasLoad2 = !!this.circuitPlaced['load2'];

                if (hasSource && hasSwitch && hasLoad1 && hasLoad2) {
                    this.drillScore++;
                    this.addXP(50);
                    submitBtn.style.display = 'none';
                    nextBtn.style.display = 'block';

                    sockets.forEach(s => {
                        s.style.boxShadow = '0 0 20px #06B6D4';
                    });

                    feedbackEl.style.display = 'block';
                    feedbackEl.style.background = 'rgba(16, 185, 129, 0.15)';
                    feedbackEl.style.border = '1px solid #10B981';
                    feedbackEl.style.color = '#6EE7B7';
                    feedbackEl.innerHTML = `
                        <div style="font-weight: 800; font-size: 1.1rem; margin-bottom: 6px;">⚡ MẠCH KÍN HOÀN CHỈNH! (+50 XP)</div>
                        <div>Dòng điện bắt đầu lưu thông liên tục qua các phần tử nối tiếp!</div>
                        <div style="font-size: 0.92rem; color: #CBD5E1; margin-top: 6px;">${q.explanation || 'Mạch kín hoàn chỉnh giúp tải hoạt động ổn định và an toàn.'}</div>
                    `;
                } else {
                    feedbackEl.style.display = 'block';
                    feedbackEl.style.background = 'rgba(239, 68, 68, 0.15)';
                    feedbackEl.style.border = '1px solid #EF4444';
                    feedbackEl.style.color = '#FCA5A5';
                    feedbackEl.innerHTML = `
                        <div style="font-weight: 800; font-size: 1.05rem; margin-bottom: 6px;">⚠️ MẠCH CHƯA ĐỦ THÀNH PHẦN!</div>
                        <div>Cần lắp đủ: Nguồn Pin ở vị trí nguồn, Khóa K ở vị trí công tắc, và hai điện trở ở vị trí tải!</div>
                    `;
                }
                this.renderKaTeX();
            });
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                if (this.currentPhase === 2) {
                    this.currentPhase = 3;
                    this.renderViewport(document.getElementById('micro-viewport-modal'));
                } else {
                    this.handleDrillNext();
                }
            });
        }
    }

    handleDrillNext() {
        const u = this.currentUnit;
        if (this.drillIndex + 1 < u.practice_drill.length) {
            this.drillIndex++;
            this.resetQuestionState();
            this.renderViewport(document.getElementById('micro-viewport-modal'));
        } else {
            this.currentPhase = 5;
            const isPerfect = this.drillScore >= u.practice_drill.length;
            this.progress.completed_units[u.unit_id] = {
                stars: isPerfect ? 3 : 2,
                completed_at: new Date().toISOString()
            };
            this.addXP(u.xp_reward);
            this.renderViewport(document.getElementById('micro-viewport-modal'));
        }
    }

    drawIVGraph(currentU, currentI) {
        const canvas = document.getElementById('micro-iv-canvas');
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        const w = canvas.width;
        const h = canvas.height;

        ctx.clearRect(0, 0, w, h);

        // Draw axes
        ctx.strokeStyle = '#334155';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(25, 10);
        ctx.lineTo(25, h - 20);
        ctx.lineTo(w - 10, h - 20);
        ctx.stroke();

        // Labels
        ctx.fillStyle = '#64748B';
        ctx.font = '10px Inter, sans-serif';
        ctx.fillText('I (A)', 28, 14);
        ctx.fillText('U (V)', w - 30, h - 24);

        // Draw linear slope line (straight line through origin)
        ctx.strokeStyle = '#06B6D4';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(25, h - 20);
        ctx.lineTo(w - 20, 15);
        ctx.stroke();

        // Current operating point
        const maxU = 12;
        const maxI = 1.5;
        const ptX = 25 + (currentU / maxU) * (w - 45);
        const ptY = (h - 20) - (currentI / maxI) * (h - 35);

        ctx.fillStyle = '#F59E0B';
        ctx.beginPath();
        ctx.arc(ptX, ptY, 5, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = '#fff';
        ctx.lineWidth = 1.5;
        ctx.stroke();
    }

    openAdvancedModal() {
        const adv = this.currentUnit.advanced_challenge;
        const modal = document.getElementById('micro-viewport-modal');
        modal.innerHTML = `
            <div class="micro-viewport-box">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 18px;">
                    <h3 style="color: var(--micro-amber); font-size: 1.35rem; font-family: 'Lexend', sans-serif;">${adv.title}</h3>
                    <button id="btn-close-adv" style="background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.12); width: 36px; height: 36px; border-radius: 50%; font-size: 1.2rem; color: #94A3B8; cursor: pointer;">✕</button>
                </div>

                <div class="micro-drill-question">${adv.question}</div>

                <div class="micro-drill-options">
                    ${adv.options.map((opt, oIdx) => `
                        <button class="micro-opt-btn" data-adv-opt="${oIdx}">
                            <span style="font-weight: 800; color: var(--micro-amber);">${String.fromCharCode(65 + oIdx)}.</span>
                            <span>${opt}</span>
                        </button>
                    `).join('')}
                </div>

                <div id="adv-feedback" class="micro-drill-feedback"></div>

                <button id="btn-adv-done" class="btn-micro-primary" style="display: none; width: 100%; font-size: 1.05rem;">
                    Nhận Thưởng +${adv.bonus_xp} XP ➔ Tiếp Tục Hành Trình
                </button>
            </div>
        `;

        document.getElementById('btn-close-adv').addEventListener('click', () => {
            modal.style.display = 'none';
            this.render();
        });

        const optBtns = modal.querySelectorAll('.micro-opt-btn');
        const feedbackEl = document.getElementById('adv-feedback');
        const doneBtn = document.getElementById('btn-adv-done');

        optBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const choice = parseInt(btn.getAttribute('data-adv-opt'));
                if (choice === adv.correct) {
                    btn.classList.add('correct');
                    this.addXP(adv.bonus_xp);
                    feedbackEl.style.display = 'block';
                    feedbackEl.style.background = 'rgba(16, 185, 129, 0.15)';
                    feedbackEl.style.color = '#6EE7B7';
                    feedbackEl.style.border = '1px solid #10B981';
                    feedbackEl.innerHTML = `🎉 <strong>XUẤT SẮC!</strong> ${adv.explanation}`;
                } else {
                    btn.classList.add('wrong');
                    optBtns[adv.correct].classList.add('correct');
                    feedbackEl.style.display = 'block';
                    feedbackEl.style.background = 'rgba(239, 68, 68, 0.15)';
                    feedbackEl.style.color = '#FCA5A5';
                    feedbackEl.style.border = '1px solid #EF4444';
                    feedbackEl.innerHTML = `💡 <strong>Giải thích:</strong> ${adv.explanation}`;
                }
                optBtns.forEach(b => b.style.pointerEvents = 'none');
                doneBtn.style.display = 'block';
                this.renderKaTeX();
            });
        });

        doneBtn.addEventListener('click', () => {
            modal.style.display = 'none';
            this.render();
        });

        this.renderKaTeX();
    }

    // =========================================================================
    // END OF LESSON: 3-COLUMN SUMMARY HUB & BOSS FIGHT (Mockup 3)
    // =========================================================================
    openSummaryHub(lesson) {
        this.currentLesson = lesson;
        this.bossHp = 100;
        this.bossQuestionIndex = 0;

        let modal = document.getElementById('micro-viewport-modal');
        if (!modal) {
            modal = document.createElement('div');
            modal.id = 'micro-viewport-modal';
            modal.className = 'micro-viewport-overlay';
            document.body.appendChild(modal);
        }

        const sum = lesson.summary;
        const boss = sum.boss_challenge;

        modal.innerHTML = `
            <div class="micro-viewport-box" style="max-width: 1020px;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
                    <div>
                        <span style="color: var(--micro-amber); font-weight: 800; font-size: 0.85rem; letter-spacing: 0.05em;">TRẠM TỔNG KẾT BÀI HỌC</span>
                        <h2 style="color: #fff; font-size: 1.45rem; margin: 0; font-family: 'Lexend', sans-serif;">${sum.title}</h2>
                    </div>
                    <button id="btn-close-summary" style="background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.12); width: 36px; height: 36px; border-radius: 50%; font-size: 1.2rem; color: #94A3B8; cursor: pointer;">✕</button>
                </div>

                <!-- 3-Column Grid Layout (Mockup 3) -->
                <div class="micro-summary-grid">
                    <!-- Column 1: Concept Mindmap -->
                    <div class="micro-summary-card">
                        <h4 style="color: var(--micro-purple); font-size: 0.95rem; margin-top: 0; font-weight: 800;">🧠 SƠ ĐỒ TƯ DUY</h4>
                        <div class="micro-mindmap-tree">
                            ${sum.mindmap_nodes.map(n => `
                                <div class="micro-mindmap-node">
                                    <div style="font-weight: 800; color: #fff; font-size: 0.92rem; margin-bottom: 4px;">${n.title}</div>
                                    <div style="font-size: 0.82rem; color: #CBD5E1; line-height: 1.4;">${n.content}</div>
                                </div>
                            `).join('')}
                        </div>
                    </div>

                    <!-- Column 2: Center Boss Arena (Lord Ohm ⚡) -->
                    <div class="micro-boss-center-card" id="boss-arena-box">
                        ${this.renderBossQuestionHTML(boss)}
                    </div>

                    <!-- Column 3: Formula Cheat Sheet -->
                    <div class="micro-summary-card">
                        <h4 style="color: var(--micro-cyan); font-size: 0.95rem; margin-top: 0; font-weight: 800;">📋 BẢNG CÔNG THỨC</h4>
                        <table class="micro-cheat-table">
                            <thead>
                                <tr>
                                    <th>Tên</th>
                                    <th>Công Thức</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${sum.cheat_sheet.map(c => `
                                    <tr>
                                        <td style="font-weight: 700; color: #fff; font-size: 0.85rem;">${c.name}</td>
                                        <td style="color: #67E8F9; font-size: 0.95rem;">$${c.formula}$</td>
                                    </tr>
                                `).join('')}
                            </tbody>
                        </table>
                    </div>
                </div>

                <!-- Bottom User Info Bar -->
                <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 24px; padding-top: 16px; border-top: 1px solid rgba(255,255,255,0.08);">
                    <div style="display: flex; gap: 10px; align-items: center;">
                        <span style="font-size: 1.6rem;">🎓</span>
                        <div>
                            <div style="font-weight: 800; color: #fff; font-size: 0.92rem;">Cấp Bậc: ${this.progress.rank}</div>
                            <div style="font-size: 0.8rem; color: var(--micro-text-secondary);">${this.progress.total_xp} / 2500 XP</div>
                        </div>
                    </div>
                    <div class="micro-stat-badge streak">🔥 Chuỗi Ngày: ${this.progress.streak}</div>
                </div>
            </div>
        `;

        modal.style.display = 'flex';

        document.getElementById('btn-close-summary').addEventListener('click', () => {
            modal.style.display = 'none';
        });

        this.bindBossEvents(boss);
        this.renderKaTeX();
    }

    renderBossQuestionHTML(boss) {
        const q = boss.questions[this.bossQuestionIndex];
        return `
            <div style="display: flex; justify-content: space-between; align-items: center;">
                <span class="micro-boss-avatar-glow">${boss.boss_avatar}</span>
                <div>
                    <h3 style="color: #F87171; margin: 0; font-size: 1.25rem;">${boss.boss_name}</h3>
                    <div style="font-size: 0.82rem; color: #EF4444; font-weight: 800;">
                        HP: <span id="boss-hp-num">${this.bossHp}</span> / ${this.bossMaxHp}
                    </div>
                </div>
                <span style="color: var(--micro-amber); font-weight: 800; font-size: 0.85rem;">Câu ${this.bossQuestionIndex + 1}/${boss.questions.length}</span>
            </div>

            <div class="micro-boss-hp-bar">
                <div id="boss-hp-fill" class="micro-boss-hp-fill" style="width: ${this.bossHp}%;"></div>
            </div>

            <div class="micro-drill-question" style="text-align: left; font-size: 1.05rem; margin: 16px 0;">${q.question}</div>

            <div class="micro-drill-options">
                ${q.options.map((opt, oIdx) => `
                    <button class="micro-opt-btn boss-opt" data-boss-opt="${oIdx}" style="padding: 10px 14px; font-size: 0.92rem;">
                        <span style="font-weight: 800; color: #C084FC;">${String.fromCharCode(65 + oIdx)}.</span>
                        <span>${opt}</span>
                    </button>
                `).join('')}
            </div>

            <div id="boss-feedback" class="micro-drill-feedback"></div>

            <button id="btn-boss-next" class="btn-micro-primary" style="display: none; width: 100%; font-size: 1rem;">
                ${this.bossQuestionIndex + 1 < boss.questions.length ? 'Đòn Đánh Tiếp Theo ➔' : 'Giáng Đòn Kết Liễu 🏆'}
            </button>
        `;
    }

    bindBossEvents(boss) {
        const q = boss.questions[this.bossQuestionIndex];
        const optBtns = document.querySelectorAll('.boss-opt');
        const feedbackEl = document.getElementById('boss-feedback');
        const nextBtn = document.getElementById('btn-boss-next');

        optBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const choice = parseInt(btn.getAttribute('data-boss-opt'));
                if (choice === q.correct) {
                    btn.classList.add('correct');
                    this.bossHp = Math.max(0, this.bossHp - q.damage);
                    document.getElementById('boss-hp-fill').style.width = this.bossHp + '%';
                    document.getElementById('boss-hp-num').textContent = this.bossHp;
                    feedbackEl.style.display = 'block';
                    feedbackEl.style.background = 'rgba(16, 185, 129, 0.2)';
                    feedbackEl.style.color = '#6EE7B7';
                    feedbackEl.style.border = '1px solid #10B981';
                    feedbackEl.innerHTML = `⚔️ <strong>CRITICAL HIT!</strong> Đòn tấn công chính xác làm Boss mất -${q.damage} HP!`;
                } else {
                    btn.classList.add('wrong');
                    optBtns[q.correct].classList.add('correct');
                    feedbackEl.style.display = 'block';
                    feedbackEl.style.background = 'rgba(239, 68, 68, 0.2)';
                    feedbackEl.style.color = '#FCA5A5';
                    feedbackEl.style.border = '1px solid #EF4444';
                    feedbackEl.innerHTML = `🛡️ <strong>Hụt đòn!</strong> Boss đã đỡ được và phản công!`;
                }

                optBtns.forEach(b => b.style.pointerEvents = 'none');
                nextBtn.style.display = 'block';
                this.renderKaTeX();
            });
        });

        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                if (this.bossQuestionIndex + 1 < boss.questions.length) {
                    this.bossQuestionIndex++;
                    const arenaBox = document.getElementById('boss-arena-box');
                    arenaBox.innerHTML = this.renderBossQuestionHTML(boss);
                    this.bindBossEvents(boss);
                    this.renderKaTeX();
                } else {
                    this.progress.completed_lessons[this.currentLesson.lesson_id] = true;
                    this.addXP(250);
                    alert(`🎉 CHIẾN THẮNG HUY HOÀNG!\nBạn đã đánh bại ${boss.boss_name} và đoạt Huy Hiệu Vàng: ${this.currentLesson.badge}! (+250 XP)`);
                    document.getElementById('micro-viewport-modal').style.display = 'none';
                    this.render();
                }
            });
        }
    }

    renderKaTeX() {
        if (typeof renderMathInElement === 'function') {
            renderMathInElement(document.body, {
                delimiters: [
                    { left: '$$', right: '$$', display: true },
                    { left: '$', right: '$', display: false }
                ],
                throwOnError: false
            });
        }
    }

        openLesson(lessonId, unitIndex = 0) {
        if (lessonId.startsWith('phy12') && this.currentGrade !== 12) {
            this.switchGrade(12);
        } else if (lessonId.startsWith('phy11') && this.currentGrade !== 11) {
            this.switchGrade(11);
        } else if (lessonId.startsWith('phy10') && this.currentGrade !== 10) {
            this.switchGrade(10);
        } else if (lessonId.startsWith('phy9') && this.currentGrade !== 9) {
            this.switchGrade(9);
        }
        this.show();

        // Ẩn màn hình lobby
        const lobby = document.getElementById('screen-lobby');
        if (lobby) {
            lobby.style.display = 'none';
            lobby.classList.remove('active');
        }

        const lesson = this.data.lessons.find(l => l.lesson_id === lessonId);
        if (lesson && lesson.micro_units && lesson.micro_units.length > 0) {
            const unit = lesson.micro_units[unitIndex] || lesson.micro_units[0];
            this.openMicroUnit(lesson, unit);
        }
    }

    show() {
        this.container.style.display = 'block';
        this.render();
    }

    hide() {
        this.container.style.display = 'none';
    }
}

// Global instance
window.microEngine = null;
document.addEventListener('DOMContentLoaded', () => {
    window.microEngine = new MicroLearningEngine();
});
