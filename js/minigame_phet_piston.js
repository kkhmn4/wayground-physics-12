/**
 * Wayground Physics 12 - PhET-Style Interactive Thermal Physics Sandbox
 * 🧪 "Phòng Thí Nghiệm Ảo Piston & Khí Lý Tưởng"
 * 
 * Direct Manipulation Sandbox inspired by PhET (Univ of Colorado Boulder):
 * - Real-time 60fps HTML5 Canvas elastic gas particle collision
 * - Tactile Piston Dragging (Compression A > 0 / Expansion A < 0)
 * - Heat Source/Sink (Flame Q > 0 / Ice Frost Q < 0)
 * - Live Gauges: Pressure p (atm), Thermometer T (K & °C), First Law Balance ΔU = A + Q
 * - 4 Hands-on Physics Challenges with instant grading & celebration
 */

class PhetPistonGame {
    constructor(manager) {
        this.manager = manager;
        this.animId = null;
        this.canvas = null;
        this.ctx = null;

        // Thermodynamic State
        this.T = 300.0;           // Kelvin
        this.n = 0.12;            // Moles
        this.R = 0.0821;          // L·atm/(mol·K)
        this.R_Joule = 8.314;     // J/(mol·K)
        this.pistonNorm = 0.5;    // 0 = Expanded (top, V=5.0L), 1 = Compressed (bottom, V=1.0L)
        this.targetPistonNorm = 0.5;
        this.pistonLocked = false;
        this.isDragging = false;
        this.heatMode = 'none';   // 'none', 'heat', 'cool'

        // First Law Accumulators (Joules)
        this.workA = 0;           // Work received by gas
        this.heatQ = 0;           // Heat received by gas
        this.initialU = (3/2) * this.n * this.R_Joule * 300.0;

        // Challenge System
        this.currentChallenge = 0; // 0 = Sandbox, 1..3 = Challenges
        this.challengeSuccess = false;
        this.score = 0;

        // Gas Molecules
        this.particleCount = 42;
        this.particles = [];

        // Drag tracking
        this.dragStartY = 0;
        this.dragStartNorm = 0;

        this.boundTick = this.tick.bind(this);
    }

    start(unitKey = 'all') {
        const container = document.getElementById('active-game-container');
        if (!container) return;

        // Reset state
        this.resetState();

        // If unit 2 specifically selected, prioritize challenge 1
        if (unitKey === 'unit2') {
            this.currentChallenge = 1;
        } else {
            this.currentChallenge = 0;
        }

        this.renderLayout(container);
        this.initCanvas();
        this.initParticles();
        this.bindEvents();

        // Start animation loop
        if (this.animId) cancelAnimationFrame(this.animId);
        this.animId = requestAnimationFrame(this.boundTick);
    }

    resetState() {
        this.T = 300.0;
        this.pistonNorm = 0.5;
        this.targetPistonNorm = 0.5;
        this.pistonLocked = false;
        this.heatMode = 'none';
        this.workA = 0;
        this.heatQ = 0;
        this.challengeSuccess = false;
        this.initialU = (3/2) * this.n * this.R_Joule * 300.0;
    }

    getVolume() {
        // V: 1.0L (pistonNorm = 1) to 5.0L (pistonNorm = 0)
        return 1.0 + (1.0 - this.pistonNorm) * 4.0;
    }

    getPressure() {
        // p = n * R * T / V (atm)
        const v = this.getVolume();
        return (this.n * this.R * this.T) / v;
    }

    getDeltaU() {
        return this.workA + this.heatQ;
    }

    renderLayout(container) {
        container.innerHTML = `
            <div class="phet-sandbox-wrapper">
                <!-- Sandbox Header / Challenge Bar -->
                <div class="phet-top-nav">
                    <div class="phet-title-box">
                        <span class="phet-badge">🧪 Mô Phỏng Vật Lí Trực Quan (PhET Style)</span>
                        <h3>Phòng Thí Nghiệm Piston & Khí Lý Tưởng</h3>
                    </div>
                    <div class="phet-modes-pills">
                        <button type="button" class="phet-mode-btn ${this.currentChallenge === 0 ? 'active' : ''}" data-ch="0">🎮 Thử Nghiệm Tự Do</button>
                        <button type="button" class="phet-mode-btn ${this.currentChallenge === 1 ? 'active' : ''}" data-ch="1">🎯 Nhiệm Vụ 1 (Nén Đoạn Nhiệt)</button>
                        <button type="button" class="phet-mode-btn ${this.currentChallenge === 2 ? 'active' : ''}" data-ch="2">🎯 Nhiệm Vụ 2 (Đẳng Nhiệt)</button>
                        <button type="button" class="phet-mode-btn ${this.currentChallenge === 3 ? 'active' : ''}" data-ch="3">🎯 Nhiệm Vụ 3 (Đẳng Tích Tăng Áp)</button>
                    </div>
                </div>

                <!-- Mission Prompt Banner (if challenge active) -->
                <div id="phet-mission-card" class="phet-mission-banner ${this.currentChallenge === 0 ? 'hidden' : ''}">
                    <div class="mission-icon-box">🏆</div>
                    <div class="mission-content">
                        <h4 id="phet-mission-title">Nhiệm vụ</h4>
                        <p id="phet-mission-desc">Mô tả nhiệm vụ...</p>
                        <div id="phet-mission-status" class="mission-status-tag">Đang thực hiện...</div>
                    </div>
                </div>

                <!-- Main Lab Stage: Split Gauges & Cylinder -->
                <div class="phet-stage-grid">
                    
                    <!-- Left Column: Simulation Canvas (Cylinder + Piston + Heat) -->
                    <div class="phet-canvas-column">
                        <div class="canvas-glass-card">
                            <div class="canvas-top-controls">
                                <span class="canvas-hint">✋ Kéo chốt pít-tông để nén/dãn khí</span>
                                <button type="button" id="btn-lock-piston" class="btn-tool-pill ${this.pistonLocked ? 'active' : ''}">
                                    ${this.pistonLocked ? '🔒 Đã Khóa Pít-tông (A = 0)' : '🔓 Khóa Pít-tông (Đẳng Tích)'}
                                </button>
                                <button type="button" id="btn-reset-phet" class="btn-tool-pill" title="Đặt lại về 300K, 1 atm">🔄 Đặt Lại</button>
                            </div>
                            
                            <div class="canvas-container-relative" id="phet-canvas-wrap">
                                <canvas id="phet-canvas" width="400" height="420"></canvas>
                                
                                <!-- Floating Direct Buttons for quick interaction -->
                                <div class="piston-floating-actions">
                                    <button type="button" id="btn-piston-compress" class="btn-float-step" title="Nén nhanh">⬇️ Nén Khí (+A)</button>
                                    <button type="button" id="btn-piston-expand" class="btn-float-step" title="Dãn nhanh">⬆️ Dãn Khí (-A)</button>
                                </div>
                            </div>

                            <!-- Heat Source Interactive Controls -->
                            <div class="heat-control-bar">
                                <span class="heat-bar-label">Nguồn Nhiệt (Q):</span>
                                <div class="heat-btn-group">
                                    <button type="button" class="btn-heat-mode ${this.heatMode === 'cool' ? 'active cool' : ''}" id="btn-heat-cool">
                                        ❄️ Ướp Đá (Q &lt; 0)
                                    </button>
                                    <button type="button" class="btn-heat-mode ${this.heatMode === 'none' ? 'active' : ''}" id="btn-heat-none">
                                        ⏸️ Cách Nhiệt (Q = 0)
                                    </button>
                                    <button type="button" class="btn-heat-mode ${this.heatMode === 'heat' ? 'active heat' : ''}" id="btn-heat-fire">
                                        🔥 Đun Lửa (Q &gt; 0)
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Right Column: Gauges & First Law Mathematical Balance -->
                    <div class="phet-gauges-column">
                        
                        <!-- First Law Balance Box (Trọng tâm GDPT 2018) -->
                        <div class="balance-card">
                            <div class="balance-card-header">
                                <span class="b-icon">⚖️</span>
                                <h4>Định Luật I Nhiệt Động Lực Học</h4>
                            </div>
                            <div class="first-law-formula-row">
                                <div class="formula-block du-block">
                                    <span class="f-label">Biến thiên Nội năng</span>
                                    <span class="f-sym">ΔU</span>
                                    <strong class="f-val" id="val-delta-u">+0 J</strong>
                                </div>
                                <span class="formula-sign">=</span>
                                <div class="formula-block a-block">
                                    <span class="f-label">Công nhận/sinh</span>
                                    <span class="f-sym">A</span>
                                    <strong class="f-val" id="val-work-a">+0 J</strong>
                                    <span class="f-badge" id="badge-sign-a">Chưa sinh công</span>
                                </div>
                                <span class="formula-sign">+</span>
                                <div class="formula-block q-block">
                                    <span class="f-label">Nhiệt lượng</span>
                                    <span class="f-sym">Q</span>
                                    <strong class="f-val" id="val-heat-q">+0 J</strong>
                                    <span class="f-badge" id="badge-sign-q">Cách nhiệt</span>
                                </div>
                            </div>
                            <div class="first-law-note" id="phet-first-law-explain">
                                💡 <em>Khí đang ở trạng thái cân bằng. Hãy nén pít-tông hoặc đun nhiệt để quan sát sự chuyển hóa năng lượng!</em>
                            </div>
                        </div>

                        <!-- Twin Instrument Gauges (Pressure & Temperature) -->
                        <div class="instruments-grid">
                            <!-- Gauge 1: Pressure Meter -->
                            <div class="gauge-card">
                                <div class="gauge-header">
                                    <span>Áp Suất (p)</span>
                                    <strong id="gauge-p-val">1.00 atm</strong>
                                </div>
                                <div class="gauge-dial-wrap">
                                    <div class="gauge-dial-svg">
                                        <svg viewBox="0 0 100 60" class="gauge-svg">
                                            <!-- Dial background arc -->
                                            <path d="M 15 50 A 35 35 0 0 1 85 50" fill="none" stroke="#334155" stroke-width="8" stroke-linecap="round"/>
                                            <!-- Safe zone (0 - 2 atm) -->
                                            <path d="M 15 50 A 35 35 0 0 1 50 15" fill="none" stroke="#10B981" stroke-width="8" stroke-linecap="round"/>
                                            <!-- High zone (2 - 3.5 atm) -->
                                            <path d="M 50 15 A 35 35 0 0 1 75 25" fill="none" stroke="#F59E0B" stroke-width="8"/>
                                            <!-- Danger zone (3.5 - 5 atm) -->
                                            <path d="M 75 25 A 35 35 0 0 1 85 50" fill="none" stroke="#EF4444" stroke-width="8" stroke-linecap="round"/>
                                            <!-- Needle -->
                                            <line id="gauge-p-needle" x1="50" y1="50" x2="25" y2="25" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round"/>
                                            <circle cx="50" cy="50" r="5" fill="#C084FC"/>
                                        </svg>
                                    </div>
                                    <span class="gauge-sub" id="gauge-p-pa">~101.3 kPa</span>
                                </div>
                            </div>

                            <!-- Gauge 2: Thermometer -->
                            <div class="gauge-card">
                                <div class="gauge-header">
                                    <span>Nhiệt Độ (T)</span>
                                    <strong id="gauge-t-val">300.0 K</strong>
                                </div>
                                <div class="thermometer-visual-row">
                                    <div class="thermo-stem">
                                        <div class="thermo-fluid" id="thermo-fluid-bar" style="height: 40%;"></div>
                                        <div class="thermo-bulb"></div>
                                    </div>
                                    <div class="thermo-readings">
                                        <div class="tr-row">
                                            <span class="tr-tag">Kelvin:</span>
                                            <strong class="tr-k" id="tr-k-text">300.0 K</strong>
                                        </div>
                                        <div class="tr-row">
                                            <span class="tr-tag">Celsius:</span>
                                            <strong class="tr-c" id="tr-c-text">26.8 °C</strong>
                                        </div>
                                        <div class="tr-row">
                                            <span class="tr-tag">Động năng hạt:</span>
                                            <span class="tr-e" id="tr-energy-text">Trung bình</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Live Molecular Stats -->
                        <div class="stats-pills-row">
                            <div class="stat-pill">
                                <span>Thể Tích (V):</span>
                                <strong id="stat-vol-val">3.0 L</strong>
                            </div>
                            <div class="stat-pill">
                                <span>Mật Độ Hạt:</span>
                                <strong id="stat-density-val">14 hạt/L</strong>
                            </div>
                            <div class="stat-pill">
                                <span>Tần Số Va Chạm:</span>
                                <strong id="stat-hits-val">Vừa phải</strong>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        `;
    }

    initCanvas() {
        this.canvas = document.getElementById('phet-canvas');
        if (!this.canvas) return;
        this.ctx = this.canvas.getContext('2d');
    }

    initParticles() {
        this.particles = [];
        const chamber = this.getChamberBounds();
        for (let i = 0; i < this.particleCount; i++) {
            const speed = Math.sqrt(this.T / 300.0) * (2.0 + Math.random() * 1.5);
            const angle = Math.random() * Math.PI * 2;
            this.particles.push({
                x: chamber.left + 15 + Math.random() * (chamber.width - 30),
                y: chamber.pistonBottom + 15 + Math.random() * (chamber.gasHeight - 30),
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed,
                radius: 4.5,
                colorHue: 45 // 45 = gold/amber, 0 = red, 200 = blue
            });
        }
    }

    getChamberBounds() {
        if (!this.canvas) return { left: 50, right: 350, topLimit: 60, bottomLimit: 270, width: 300, cylinderBottom: 360, pistonY: 150, pistonHeight: 26, pistonBottom: 176, gasHeight: 184 };
        
        const w = this.canvas.width;
        const h = this.canvas.height;
        const left = 65;
        const right = w - 65;
        const width = right - left;
        const topLimit = 60;   // Maximum expanded position (V = 5.0L)
        const bottomLimit = 270; // Maximum compressed position (V = 1.0L)
        const cylinderBottom = h - 60;

        // Current piston position
        const pistonY = topLimit + this.pistonNorm * (bottomLimit - topLimit);
        const pistonHeight = 26;
        const pistonBottom = pistonY + pistonHeight;
        const gasHeight = cylinderBottom - pistonBottom;

        return {
            left,
            right,
            width,
            topLimit,
            bottomLimit,
            cylinderBottom,
            pistonY,
            pistonHeight,
            pistonBottom,
            gasHeight
        };
    }

    bindEvents() {
        // Mode & Challenge Buttons
        const modeBtns = document.querySelectorAll('.phet-mode-btn');
        modeBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                modeBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                this.setChallenge(parseInt(btn.dataset.ch, 10));
                if (window.soundEngine) soundEngine.playClick();
            });
        });

        // Heat Mode Buttons
        const btnCool = document.getElementById('btn-heat-cool');
        const btnNone = document.getElementById('btn-heat-none');
        const btnFire = document.getElementById('btn-heat-fire');

        const updateHeatBtns = (mode) => {
            this.heatMode = mode;
            [btnCool, btnNone, btnFire].forEach(b => b?.classList.remove('active', 'cool', 'heat'));
            if (mode === 'cool') btnCool?.classList.add('active', 'cool');
            else if (mode === 'none') btnNone?.classList.add('active');
            else if (mode === 'heat') btnFire?.classList.add('active', 'heat');
            if (window.soundEngine) soundEngine.playClick();
        };

        btnCool?.addEventListener('click', () => updateHeatBtns('cool'));
        btnNone?.addEventListener('click', () => updateHeatBtns('none'));
        btnFire?.addEventListener('click', () => updateHeatBtns('heat'));

        // Piston Lock Button
        const btnLock = document.getElementById('btn-lock-piston');
        btnLock?.addEventListener('click', () => {
            this.pistonLocked = !this.pistonLocked;
            btnLock.classList.toggle('active', this.pistonLocked);
            btnLock.innerHTML = this.pistonLocked ? '🔒 Đã Khóa Pít-tông (A = 0)' : '🔓 Khóa Pít-tông (Đẳng Tích)';
            if (window.soundEngine) soundEngine.playClick();
        });

        // Reset Button
        const btnReset = document.getElementById('btn-reset-phet');
        btnReset?.addEventListener('click', () => {
            this.resetState();
            this.initParticles();
            updateHeatBtns('none');
            if (window.soundEngine) soundEngine.playClick();
        });

        // Step Buttons
        const btnCompress = document.getElementById('btn-piston-compress');
        const btnExpand = document.getElementById('btn-piston-expand');

        btnCompress?.addEventListener('click', () => {
            if (this.pistonLocked) return;
            this.applyPistonDelta(0.12);
        });

        btnExpand?.addEventListener('click', () => {
            if (this.pistonLocked) return;
            this.applyPistonDelta(-0.12);
        });

        // Canvas Mouse / Touch Dragging on Piston
        if (this.canvas) {
            const onPointerDown = (e) => {
                if (this.pistonLocked) return;
                const rect = this.canvas.getBoundingClientRect();
                const clientY = e.clientY || (e.touches && e.touches[0].clientY);
                const clientX = e.clientX || (e.touches && e.touches[0].clientX);
                const scaleY = this.canvas.height / rect.height;
                const scaleX = this.canvas.width / rect.width;
                const canvasY = (clientY - rect.top) * scaleY;
                const canvasX = (clientX - rect.left) * scaleX;

                const bounds = this.getChamberBounds();
                if (canvasX >= bounds.left - 20 && canvasX <= bounds.right + 20 &&
                    canvasY >= bounds.pistonY - 45 && canvasY <= bounds.pistonBottom + 25) {
                    this.isDragging = true;
                    this.dragStartY = canvasY;
                    this.dragStartNorm = this.pistonNorm;
                    e.preventDefault();
                }
            };

            const onPointerMove = (e) => {
                if (!this.isDragging || this.pistonLocked) return;
                const rect = this.canvas.getBoundingClientRect();
                const clientY = e.clientY || (e.touches && e.touches[0].clientY);
                const scaleY = this.canvas.height / rect.height;
                const canvasY = (clientY - rect.top) * scaleY;

                const bounds = this.getChamberBounds();
                const deltaPx = canvasY - this.dragStartY;
                const travelRange = bounds.bottomLimit - bounds.topLimit;
                const newNorm = Math.max(0, Math.min(1.0, this.dragStartNorm + deltaPx / travelRange));
                
                const deltaNorm = newNorm - this.pistonNorm;
                if (Math.abs(deltaNorm) > 0.005) {
                    this.applyPistonDelta(deltaNorm);
                }
                e.preventDefault();
            };

            const onPointerUp = () => {
                this.isDragging = false;
            };

            this.canvas.addEventListener('mousedown', onPointerDown);
            window.addEventListener('mousemove', onPointerMove);
            window.addEventListener('mouseup', onPointerUp);

            this.canvas.addEventListener('touchstart', onPointerDown, { passive: false });
            window.addEventListener('touchmove', onPointerMove, { passive: false });
            window.addEventListener('touchend', onPointerUp);
        }

        // Apply current challenge text
        this.updateMissionBanner();
    }

    applyPistonDelta(deltaNorm) {
        if (this.pistonLocked) return;
        const oldVol = this.getVolume();
        const oldP = this.getPressure();

        this.pistonNorm = Math.max(0.0, Math.min(1.0, this.pistonNorm + deltaNorm));
        const newVol = this.getVolume();
        const dV = newVol - oldVol; // Liters

        // Work: A = - p * dV
        // Convert L·atm to Joules: 1 L·atm = 101.325 J
        const avgP = (oldP + this.getPressure()) / 2;
        const deltaWorkJ = - (avgP * dV) * 101.325;
        this.workA += deltaWorkJ;

        // Dynamic Heating from Compression
        const Cv = (3/2) * this.n * this.R_Joule;
        this.T = Math.max(80.0, Math.min(900.0, this.T + deltaWorkJ / Cv));

        this.checkChallengeGoal();
    }

    setChallenge(chNum) {
        this.currentChallenge = chNum;
        this.resetState();
        this.initParticles();
        this.updateMissionBanner();

        const missionCard = document.getElementById('phet-mission-card');
        if (missionCard) {
            missionCard.classList.toggle('hidden', chNum === 0);
        }
    }

    updateMissionBanner() {
        const title = document.getElementById('phet-mission-title');
        const desc = document.getElementById('phet-mission-desc');
        const status = document.getElementById('phet-mission-status');
        if (!title || !desc || !status) return;

        status.className = 'mission-status-tag';
        status.textContent = 'Đang thực hiện...';

        switch (this.currentChallenge) {
            case 1:
                title.textContent = 'Nhiệm Vụ 1: Nén Đoạn Nhiệt (Q = 0)';
                desc.innerHTML = 'Giữ cách nhiệt (<strong>Q = 0</strong>), dùng tay kéo hoặc nút nén pít-tông xuống nhanh để đưa nhiệt độ khí vượt mốc <strong>430 K</strong>!';
                break;
            case 2:
                title.textContent = 'Nhiệm Vụ 2: Biến Đổi Đẳng Nhiệt (ΔU ≈ 0)';
                desc.innerHTML = 'Nén pít-tông xuống (Thể tích &lt; 2.2 L) nhưng đồng thời <strong>Ướp Đá (Q &lt; 0)</strong> sao cho nhiệt độ khí vẫn nằm trong khoảng <strong>290 K – 315 K</strong>!';
                break;
            case 3:
                title.textContent = 'Nhiệm Vụ 3: Đẳng Tích Tăng Áp (A = 0)';
                desc.innerHTML = 'Bấm <strong>Khóa Pít-tông (A = 0)</strong>, sau đó bật <strong>Đun Lửa (Q &gt; 0)</strong> để đưa áp suất khí đạt <strong>≥ 3.0 atm</strong> mà không để pít-tông di chuyển!';
                break;
            default:
                title.textContent = 'Chế Độ Tự Do';
                desc.textContent = 'Tự do thử nghiệm nén/dãn pít-tông, đun nóng và làm lạnh để quan sát định luật I.';
                break;
        }
    }

    checkChallengeGoal() {
        if (this.currentChallenge === 0 || this.challengeSuccess) return;

        const p = this.getPressure();
        const v = this.getVolume();

        if (this.currentChallenge === 1) {
            // Adiabatic compression: Q == 0, T >= 430 K
            if (Math.abs(this.heatQ) < 15 && this.T >= 430) {
                this.triggerMissionVictory('Chúc mừng! Bạn đã hoàn thành quá trình Nén Đoạn Nhiệt! Toàn bộ công nhận vào chuyển thành nội năng làm nhiệt độ tăng vọt!');
            }
        } else if (this.currentChallenge === 2) {
            // Isothermal compression: V < 2.2L and 290K <= T <= 315K and workA > 60J
            if (v <= 2.2 && this.T >= 290 && this.T <= 315 && this.workA >= 50) {
                this.triggerMissionVictory('Xuất sắc! Quá trình Đẳng Nhiệt hoàn hảo: Công cơ học nhận vào được tỏa ra dưới dạng nhiệt lượng, nội năng không đổi (ΔU ≈ 0)!');
            }
        } else if (this.currentChallenge === 3) {
            // Isochoric: pistonLocked is true, p >= 3.0
            if (this.pistonLocked && p >= 3.0) {
                this.triggerMissionVictory('Tuyệt vời! Quá trình Đẳng Tích: Khí không sinh công (A = 0), toàn bộ nhiệt lượng nhận vào làm tăng nội năng và áp suất (ΔU = Q)!');
            }
        }
    }

    triggerMissionVictory(msg) {
        this.challengeSuccess = true;
        const status = document.getElementById('phet-mission-status');
        if (status) {
            status.className = 'mission-status-tag success';
            status.textContent = '🎉 HOÀN THÀNH XUẤT SẮC!';
        }

        if (window.soundEngine) soundEngine.playVictory();
        if (window.confettiEngine) confettiEngine.fire({ count: 120 });

        setTimeout(() => {
            this.manager.showVictoryModal({
                title: 'Nhiệm Vụ Nhiệt Động Lực Học Hoàn Thành!',
                stars: '⭐⭐⭐',
                desc: msg,
                stats: [
                    { label: 'Nhiệt độ đạt được:', val: `${this.T.toFixed(1)} K` },
                    { label: 'Áp suất đo được:', val: `${this.getPressure().toFixed(2)} atm` },
                    { label: 'Công A:', val: `${this.workA >= 0 ? '+' : ''}${Math.round(this.workA)} J` },
                    { label: 'Nhiệt lượng Q:', val: `${this.heatQ >= 0 ? '+' : ''}${Math.round(this.heatQ)} J` },
                    { label: 'Biến thiên ΔU:', val: `${this.getDeltaU() >= 0 ? '+' : ''}${Math.round(this.getDeltaU())} J` }
                ],
                onReplay: () => {
                    this.resetState();
                    this.initParticles();
                    this.updateMissionBanner();
                }
            });
        }, 1200);
    }

    tick() {
        this.updatePhysics();
        this.drawCanvas();
        this.updateHUD();

        // Loop
        this.animId = requestAnimationFrame(this.boundTick);
    }

    updatePhysics() {
        const bounds = this.getChamberBounds();

        // Handle Continuous Heat Mode (Burner or Ice)
        if (this.heatMode === 'heat') {
            const dQ = 1.4; // Joules per tick
            this.heatQ += dQ;
            const Cv = (3/2) * this.n * this.R_Joule;
            this.T = Math.min(850.0, this.T + dQ / Cv);
            this.checkChallengeGoal();
        } else if (this.heatMode === 'cool') {
            const dQ = 1.4;
            this.heatQ -= dQ;
            const Cv = (3/2) * this.n * this.R_Joule;
            this.T = Math.max(90.0, this.T - dQ / Cv);
            this.checkChallengeGoal();
        }

        // Target speed based on Maxwell-Boltzmann distribution (v ~ sqrt(T))
        const baseSpeed = Math.sqrt(this.T / 300.0) * 3.2;

        // Update each molecule
        this.particles.forEach(p => {
            p.x += p.vx;
            p.y += p.vy;

            // Normalize velocity magnitude towards temperature thermal speed smoothly
            const curSpeed = Math.hypot(p.vx, p.vy);
            if (curSpeed > 0.1) {
                const targetSpeed = baseSpeed * (0.8 + (p.radius % 2) * 0.4);
                p.vx = (p.vx / curSpeed) * (curSpeed * 0.96 + targetSpeed * 0.04);
                p.vy = (p.vy / curSpeed) * (curSpeed * 0.96 + targetSpeed * 0.04);
            }

            // Left / Right Walls
            if (p.x - p.radius <= bounds.left) {
                p.x = bounds.left + p.radius;
                p.vx = Math.abs(p.vx);
            } else if (p.x + p.radius >= bounds.right) {
                p.x = bounds.right - p.radius;
                p.vx = -Math.abs(p.vx);
            }

            // Bottom Wall (Interacts with Heat Source/Sink)
            if (p.y + p.radius >= bounds.cylinderBottom) {
                p.y = bounds.cylinderBottom - p.radius;
                p.vy = -Math.abs(p.vy);

                if (this.heatMode === 'heat') {
                    p.vy -= 1.0; // Thermal impulse
                    p.colorHue = 10; // Red/orange
                } else if (this.heatMode === 'cool') {
                    p.vy *= 0.7; // Kinetic damping
                    p.colorHue = 200; // Blue/cyan
                }
            }

            // Piston Face (Top moving boundary)
            if (p.y - p.radius <= bounds.pistonBottom) {
                p.y = bounds.pistonBottom + p.radius;
                p.vy = Math.abs(p.vy);
            }

            // Temperature color gradient
            if (this.T < 220) p.colorHue = 210;
            else if (this.T < 310) p.colorHue = 45;
            else if (this.T < 450) p.colorHue = 25;
            else p.colorHue = 0;
        });
    }

    drawCanvas() {
        if (!this.ctx || !this.canvas) return;
        const ctx = this.ctx;
        const w = this.canvas.width;
        const h = this.canvas.height;
        const bounds = this.getChamberBounds();

        ctx.clearRect(0, 0, w, h);

        // 1. Draw Background Outer Environment
        ctx.fillStyle = '#0F172A';
        ctx.fillRect(0, 0, w, h);

        // 2. Draw Bottom Heat/Cool Apparatus (Burner or Ice Tray)
        this.drawHeatSource(ctx, bounds);

        // 3. Draw Cylinder Glass Container
        ctx.save();
        // Inner chamber fill
        ctx.fillStyle = 'rgba(30, 41, 59, 0.75)';
        ctx.fillRect(bounds.left, bounds.topLimit - 10, bounds.width, bounds.cylinderBottom - (bounds.topLimit - 10));

        // Gas volume highlight
        const gasGradient = ctx.createLinearGradient(0, bounds.pistonBottom, 0, bounds.cylinderBottom);
        if (this.T > 420) {
            gasGradient.addColorStop(0, 'rgba(239, 68, 68, 0.18)');
            gasGradient.addColorStop(1, 'rgba(249, 115, 22, 0.28)');
        } else if (this.T < 230) {
            gasGradient.addColorStop(0, 'rgba(56, 189, 248, 0.15)');
            gasGradient.addColorStop(1, 'rgba(14, 165, 233, 0.25)');
        } else {
            gasGradient.addColorStop(0, 'rgba(168, 85, 247, 0.08)');
            gasGradient.addColorStop(1, 'rgba(59, 130, 246, 0.15)');
        }
        ctx.fillStyle = gasGradient;
        ctx.fillRect(bounds.left, bounds.pistonBottom, bounds.width, bounds.gasHeight);

        // Measurement Rulers on Left Wall
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.25)';
        ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
        ctx.font = '10px Inter, sans-serif';
        ctx.textAlign = 'right';
        for (let vStep = 1; vStep <= 5; vStep++) {
            const norm = (5 - vStep) / 4.0;
            const yMark = bounds.topLimit + norm * (bounds.bottomLimit - bounds.topLimit) + bounds.pistonHeight;
            ctx.beginPath();
            ctx.moveTo(bounds.left, yMark);
            ctx.lineTo(bounds.left + 10, yMark);
            ctx.stroke();
            ctx.fillText(`${vStep}L`, bounds.left - 4, yMark + 3);
        }

        // Thick Glass Walls
        ctx.lineWidth = 6;
        ctx.strokeStyle = '#64748B';
        ctx.beginPath();
        ctx.moveTo(bounds.left, bounds.topLimit - 15);
        ctx.lineTo(bounds.left, bounds.cylinderBottom);
        ctx.lineTo(bounds.right, bounds.cylinderBottom);
        ctx.lineTo(bounds.right, bounds.topLimit - 15);
        ctx.stroke();
        ctx.restore();

        // 4. Draw Gas Molecules
        this.particles.forEach(p => {
            ctx.save();
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fillStyle = `hsl(${p.colorHue}, 90%, 60%)`;
            ctx.shadowColor = `hsl(${p.colorHue}, 90%, 60%)`;
            ctx.shadowBlur = this.T > 400 ? 8 : 4;
            ctx.fill();

            // Inner core highlight
            ctx.beginPath();
            ctx.arc(p.x - 1, p.y - 1, p.radius * 0.4, 0, Math.PI * 2);
            ctx.fillStyle = '#FFFFFF';
            ctx.fill();
            ctx.restore();
        });

        // 5. Draw Piston Head, Shaft & Handle
        this.drawPiston(ctx, bounds);
    }

    drawPiston(ctx, bounds) {
        ctx.save();

        // Piston Shaft (Vertical Rod)
        const shaftWidth = 14;
        const shaftX = (bounds.left + bounds.right) / 2 - shaftWidth / 2;
        const shaftTop = 15;
        const shaftHeight = bounds.pistonY - shaftTop;

        const shaftGrad = ctx.createLinearGradient(shaftX, 0, shaftX + shaftWidth, 0);
        shaftGrad.addColorStop(0, '#94A3B8');
        shaftGrad.addColorStop(0.5, '#F1F5F9');
        shaftGrad.addColorStop(1, '#64748B');

        ctx.fillStyle = shaftGrad;
        ctx.fillRect(shaftX, shaftTop, shaftWidth, shaftHeight);

        // Piston Head (Metallic block)
        const headGrad = ctx.createLinearGradient(bounds.left, bounds.pistonY, bounds.right, bounds.pistonY);
        headGrad.addColorStop(0, '#475569');
        headGrad.addColorStop(0.3, '#CBD5E1');
        headGrad.addColorStop(0.7, '#E2E8F0');
        headGrad.addColorStop(1, '#334155');

        ctx.fillStyle = headGrad;
        ctx.fillRect(bounds.left + 2, bounds.pistonY, bounds.width - 4, bounds.pistonHeight);

        // Rubber Seals on sides
        ctx.fillStyle = '#0F172A';
        ctx.fillRect(bounds.left, bounds.pistonY + 4, 3, bounds.pistonHeight - 8);
        ctx.fillRect(bounds.right - 3, bounds.pistonY + 4, 3, bounds.pistonHeight - 8);

        // Piston Handle at Top
        const handleW = 90;
        const handleH = 16;
        const handleX = (bounds.left + bounds.right) / 2 - handleW / 2;
        const handleY = shaftTop - handleH / 2;

        ctx.fillStyle = this.pistonLocked ? '#EF4444' : (this.isDragging ? '#A855F7' : '#3B82F6');
        ctx.shadowColor = ctx.fillStyle;
        ctx.shadowBlur = 10;
        ctx.beginPath();
        ctx.roundRect(handleX, handleY, handleW, handleH, 8);
        ctx.fill();

        ctx.fillStyle = '#FFFFFF';
        ctx.font = 'bold 11px Inter, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(this.pistonLocked ? '🔒 ĐÃ KHÓA' : '✋ TAY CẦM', (bounds.left + bounds.right) / 2, handleY + 12);

        ctx.restore();
    }

    drawHeatSource(ctx, bounds) {
        const bottomY = bounds.cylinderBottom + 4;
        const centerX = (bounds.left + bounds.right) / 2;

        if (this.heatMode === 'heat') {
            // Animated Fire Embers & Flames
            ctx.save();
            const flameW = bounds.width * 0.7;
            const leftF = centerX - flameW / 2;

            for (let i = 0; i < 7; i++) {
                const fx = leftF + (i / 6) * flameW + (Math.sin(Date.now() * 0.01 + i) * 6);
                const flameH = 24 + Math.sin(Date.now() * 0.015 + i * 2) * 10;

                ctx.beginPath();
                ctx.moveTo(fx - 12, bottomY + 30);
                ctx.quadraticCurveTo(fx, bottomY - flameH, fx + 12, bottomY + 30);
                ctx.fillStyle = (i % 2 === 0) ? '#EF4444' : '#F59E0B';
                ctx.shadowColor = '#F59E0B';
                ctx.shadowBlur = 15;
                ctx.fill();

                // Inner core
                ctx.beginPath();
                ctx.moveTo(fx - 6, bottomY + 25);
                ctx.quadraticCurveTo(fx, bottomY - flameH * 0.6, fx + 6, bottomY + 25);
                ctx.fillStyle = '#FEF08A';
                ctx.fill();
            }

            // Burner stand
            ctx.fillStyle = '#475569';
            ctx.fillRect(centerX - flameW / 2 - 10, bottomY + 28, flameW + 20, 8);
            ctx.restore();

        } else if (this.heatMode === 'cool') {
            // Ice Frost & Ice Cubes
            ctx.save();
            const trayW = bounds.width * 0.75;
            const leftI = centerX - trayW / 2;

            ctx.fillStyle = '#0284C7';
            ctx.fillRect(leftI, bottomY + 2, trayW, 30);

            // Ice cubes
            for (let i = 0; i < 5; i++) {
                const ix = leftI + 6 + i * (trayW / 5);
                ctx.fillStyle = 'rgba(224, 242, 254, 0.85)';
                ctx.strokeStyle = '#38BDF8';
                ctx.lineWidth = 1.5;
                ctx.beginPath();
                ctx.roundRect(ix, bottomY + 6, trayW / 5 - 8, 20, 4);
                ctx.fill();
                ctx.stroke();
            }

            // Cold mist particles
            ctx.fillStyle = 'rgba(186, 230, 253, 0.4)';
            for (let m = 0; m < 6; m++) {
                const mx = leftI + (m / 5) * trayW + Math.cos(Date.now() * 0.003 + m) * 10;
                const my = bottomY - 6 - Math.sin(Date.now() * 0.005 + m) * 8;
                ctx.beginPath();
                ctx.arc(mx, my, 4 + (m % 3), 0, Math.PI * 2);
                ctx.fill();
            }

            ctx.restore();
        } else {
            // Standby / Insulated Pedestal
            ctx.save();
            ctx.fillStyle = '#334155';
            ctx.fillRect(centerX - 60, bottomY + 4, 120, 16);
            ctx.fillStyle = '#64748B';
            ctx.font = '10px Inter, sans-serif';
            ctx.textAlign = 'center';
            ctx.fillText('ĐẾ CÁCH NHIỆT (Q = 0)', centerX, bottomY + 16);
            ctx.restore();
        }
    }

    updateHUD() {
        const p = this.getPressure();
        const v = this.getVolume();
        const deltaU = this.getDeltaU();

        // 1. First Law Balance
        const elDeltaU = document.getElementById('val-delta-u');
        const elWorkA = document.getElementById('val-work-a');
        const elHeatQ = document.getElementById('val-heat-q');
        const badgeA = document.getElementById('badge-sign-a');
        const badgeQ = document.getElementById('badge-sign-q');
        const explain = document.getElementById('phet-first-law-explain');

        if (elDeltaU) elDeltaU.textContent = `${deltaU >= 0 ? '+' : ''}${Math.round(deltaU)} J`;
        if (elWorkA) elWorkA.textContent = `${this.workA >= 0 ? '+' : ''}${Math.round(this.workA)} J`;
        if (elHeatQ) elHeatQ.textContent = `${this.heatQ >= 0 ? '+' : ''}${Math.round(this.heatQ)} J`;

        if (badgeA) {
            if (this.workA > 5) {
                badgeA.className = 'f-badge receive-work';
                badgeA.textContent = 'Khí nhận công (A > 0)';
            } else if (this.workA < -5) {
                badgeA.className = 'f-badge do-work';
                badgeA.textContent = 'Khí sinh công (A < 0)';
            } else {
                badgeA.className = 'f-badge';
                badgeA.textContent = 'A ≈ 0 J';
            }
        }

        if (badgeQ) {
            if (this.heatQ > 5) {
                badgeQ.className = 'f-badge receive-heat';
                badgeQ.textContent = 'Khí nhận nhiệt (Q > 0)';
            } else if (this.heatQ < -5) {
                badgeQ.className = 'f-badge release-heat';
                badgeQ.textContent = 'Khí tỏa nhiệt (Q < 0)';
            } else {
                badgeQ.className = 'f-badge';
                badgeQ.textContent = 'Cách nhiệt (Q = 0)';
            }
        }

        if (explain) {
            if (this.workA > 15 && Math.abs(this.heatQ) < 10) {
                explain.innerHTML = '🔥 <strong>Nén đoạn nhiệt:</strong> Pít-tông thực hiện công lên khí (A &gt; 0), nhiệt lượng không kịp truyền ra ngoài (Q = 0) $\\Rightarrow$ Toàn bộ công làm tăng nội năng, nhiệt độ khí tăng!';
            } else if (this.workA < -15 && Math.abs(this.heatQ) < 10) {
                explain.innerHTML = '❄️ <strong>Dãn đoạn nhiệt:</strong> Khí sinh công đẩy pít-tông (A &lt; 0) $\\Rightarrow$ Nội năng giảm (ΔU &lt; 0), khí bị lạnh đi nhanh chóng!';
            } else if (this.heatQ > 15 && this.pistonLocked) {
                explain.innerHTML = '♨️ <strong>Đẳng tích nhận nhiệt:</strong> Pít-tông bị khóa (A = 0) $\\Rightarrow$ Toàn bộ nhiệt lượng Q chuyển thành nội năng ΔU và làm tăng áp suất p!';
            } else {
                explain.innerHTML = '💡 <em>Công thức chuẩn GDPT 2018: <strong>ΔU = A + Q</strong>. Quy ước: Nhận công A &gt; 0, sinh công A &lt; 0; Nhận nhiệt Q &gt; 0, tỏa nhiệt Q &lt; 0.</em>';
            }
            if (window.renderMathInElement) {
                renderMathInElement(explain, { delimiters: [{ left: "$", right: "$", display: false }] });
            }
        }

        // 2. Pressure Gauge
        const elGaugeP = document.getElementById('gauge-p-val');
        const elGaugePa = document.getElementById('gauge-p-pa');
        const elNeedle = document.getElementById('gauge-p-needle');

        if (elGaugeP) elGaugeP.textContent = `${p.toFixed(2)} atm`;
        if (elGaugePa) elGaugePa.textContent = `~${(p * 101.325).toFixed(1)} kPa`;

        if (elNeedle) {
            // Gauge arc goes from 150 deg (left, 0 atm) to 30 deg (right, 5 atm)
            const clampedP = Math.max(0, Math.min(5.0, p));
            const angleRad = Math.PI - (clampedP / 5.0) * Math.PI;
            const needleLen = 28;
            const nx = 50 + Math.cos(angleRad) * needleLen;
            const ny = 50 - Math.sin(angleRad) * needleLen;
            elNeedle.setAttribute('x2', nx.toFixed(1));
            elNeedle.setAttribute('y2', ny.toFixed(1));
        }

        // 3. Thermometer
        const elGaugeT = document.getElementById('gauge-t-val');
        const elTrK = document.getElementById('tr-k-text');
        const elTrC = document.getElementById('tr-c-text');
        const elFluid = document.getElementById('thermo-fluid-bar');
        const elTrEnergy = document.getElementById('tr-energy-text');

        const tempC = this.T - 273.15;
        if (elGaugeT) elGaugeT.textContent = `${this.T.toFixed(1)} K`;
        if (elTrK) elTrK.textContent = `${this.T.toFixed(1)} K`;
        if (elTrC) elTrC.textContent = `${tempC.toFixed(1)} °C`;

        if (elFluid) {
            // Range 100K to 800K -> height 10% to 100%
            const pct = Math.max(10, Math.min(100, ((this.T - 100) / 700) * 100));
            elFluid.style.height = `${pct}%`;
            if (this.T > 420) {
                elFluid.style.background = 'linear-gradient(to top, #F59E0B, #EF4444)';
            } else if (this.T < 230) {
                elFluid.style.background = 'linear-gradient(to top, #0284C7, #38BDF8)';
            } else {
                elFluid.style.background = 'linear-gradient(to top, #8B5CF6, #EC4899)';
            }
        }

        if (elTrEnergy) {
            if (this.T > 450) elTrEnergy.innerHTML = '<span style="color:#EF4444; font-weight:800;">Rất Lớn (Nóng Rực)</span>';
            else if (this.T < 220) elTrEnergy.innerHTML = '<span style="color:#38BDF8; font-weight:800;">Rất Bé (Lạnh Giá)</span>';
            else elTrEnergy.innerHTML = '<span style="color:#10B981; font-weight:800;">Bình Thường (300K)</span>';
        }

        // 4. Molecular Stats
        const elStatVol = document.getElementById('stat-vol-val');
        const elStatDensity = document.getElementById('stat-density-val');
        const elStatHits = document.getElementById('stat-hits-val');

        if (elStatVol) elStatVol.textContent = `${v.toFixed(2)} L`;
        if (elStatDensity) elStatDensity.textContent = `${Math.round(this.particleCount / v)} hạt/L`;
        if (elStatHits) {
            const hits = (p * 45).toFixed(0);
            elStatHits.textContent = `${hits} va chạm/s`;
        }
    }

    cleanup() {
        if (this.animId) {
            cancelAnimationFrame(this.animId);
            this.animId = null;
        }
        this.canvas = null;
        this.ctx = null;
    }
}
