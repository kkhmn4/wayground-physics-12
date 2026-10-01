/**
 * Wayground Physics 12 - Neal.fun-Style Cosmic Temperature Scale Explorer & Target Challenge
 * 🌌 "Thang Đo Nhiệt Độ Vũ Trụ & Đố Vui Điểm Dừng"
 * 
 * Inspired by Neal.fun (The Size of Space, Deep Sea, Asteroid Launcher):
 * - Logarithmic Infinite Scale from 0 K (Absolute Zero) to 15,000,000 K (Sun Core)
 * - Real-time 3-Scale Synchronization: Kelvin (K), Celsius (°C), Fahrenheit (°F)
 * - Dynamic Formula Conversion Display (T = t + 273.15, t_F = 1.8t + 32)
 * - 12 Rich Scientific Milestones with real-world physics facts & icons
 * - Interactive Neal.fun Target Guessing Game with accuracy rating, stars, and sounds
 */

class CosmicScaleGame {
    constructor(manager) {
        this.manager = manager;
        this.currentT = 300.0; // Kelvin
        this.sliderNorm = 0.45; // 0 to 1
        this.isGameMode = false;
        
        // Target Challenge State
        this.gameRounds = [];
        this.currentRoundIdx = 0;
        this.score = 0;
        this.totalRounds = 5;
        this.roundSubmitted = false;

        // 12 Scientific Milestones
        this.milestones = [
            {
                id: 'abs_zero',
                k: 0.0,
                c: -273.15,
                f: -459.67,
                icon: '❄️',
                title: 'Độ Không Tuyệt Đối (Absolute Zero)',
                tag: 'Cột mốc lý thuyết',
                desc: 'Nhiệt độ thấp nhất có thể trong vũ trụ (0 K). Mọi chuyển động nhiệt của phân tử ngừng lại. Nguyên tử rơi vào trạng thái ngưng tụ Bose-Einstein. Theo nguyên lý III nhiệt động lực học, không thể làm lạnh bất kỳ vật nào về đúng 0 K qua hữu hạn bước.'
            },
            {
                id: 'cmb',
                k: 2.73,
                c: -270.42,
                f: -454.76,
                icon: '🌌',
                title: 'Bức Xạ Tàn Dư Vũ Trụ (CMB)',
                tag: 'Vũ trụ học',
                desc: 'Nhiệt độ nền của khoảng không gian sâu giữa các thiên hà. Đây là tàn dư ánh sáng nguội dần từ vụ nổ Big Bang cách đây 13,8 tỷ năm.'
            },
            {
                id: 'liquid_n2',
                k: 77.36,
                c: -195.79,
                f: -320.42,
                icon: '🧪',
                title: 'Nitơ Lỏng Sôi (Liquid Nitrogen)',
                tag: 'Kỹ thuật lạnh sâu',
                desc: 'Điểm sôi của nitơ lỏng ở 1 atm. Được sử dụng rộng rãi trong y học để bảo quản tế bào, đông lạnh phôi và làm lạnh các chất siêu dẫn nhiệt độ cao.'
            },
            {
                id: 'dry_ice',
                k: 194.65,
                c: -78.50,
                f: -109.30,
                icon: '🧊',
                title: 'Băng Khô Thăng Hoa (Dry Ice - CO₂)',
                tag: 'Chuyển thể',
                desc: 'Ở áp suất khí quyển, CO₂ rắn chuyển thẳng thành khí CO₂ không qua thể lỏng (hiện tượng thăng hoa). Ứng dụng tạo khói sân khấu và bảo quản thực phẩm.'
            },
            {
                id: 'ice_melt',
                k: 273.15,
                c: 0.0,
                f: 32.0,
                icon: '💧',
                title: 'Điểm Băng (Nước Đá Tan Chảy)',
                tag: 'Chuẩn thang đo',
                desc: 'Nhiệt độ nóng chảy của nước đá nguyên chất ở 1 atm. Đây là mốc 0 chuẩn lịch sử của thang đo Celsius do Anders Celsius đề xuất năm 1742.'
            },
            {
                id: 'triple_water',
                k: 273.16,
                c: 0.01,
                f: 32.02,
                icon: '🎯',
                title: 'Điểm Ba Của Nước (Triple Point)',
                tag: 'Định nghĩa Kelvin',
                desc: 'Trạng thái duy nhất mà nước tồn tại đồng thời cả 3 thể rắn, lỏng, hơi ở cân bằng nhiệt động (áp suất 611,65 Pa). Độ Kelvin từng được định nghĩa bằng đúng 1/273,16 nhiệt độ nhiệt động lực học của điểm này.'
            },
            {
                id: 'human_body',
                k: 310.15,
                c: 37.0,
                f: 98.6,
                icon: '🩺',
                title: 'Thân Nhiệt Người Bình Thường',
                tag: 'Sinh học',
                desc: 'Nhiệt độ tối ưu cho hoạt động của các enzyme trong cơ thể người. Được đo chính xác bằng nhiệt kế y tế (thủy ngân hoặc điện tử) với khoảng đo hẹp 35°C - 42°C.'
            },
            {
                id: 'fever_limit',
                k: 315.15,
                c: 42.0,
                f: 107.6,
                icon: '⚠️',
                title: 'Giới Hạn Sốt Nguy Hiểm',
                tag: 'Y tế khẩn cấp',
                desc: 'Ngưỡng trên của nhiệt kế y tế. Nếu thân nhiệt người vượt quá 42°C, các phân tử protein và enzyme bị biến tính không thuận nghịch, đe dọa trực tiếp tính mạng.'
            },
            {
                id: 'water_boil',
                k: 373.15,
                c: 100.0,
                f: 212.0,
                icon: '♨️',
                title: 'Nước Sôi Ở Áp Suất 1 atm',
                tag: 'Chuẩn thang đo',
                desc: 'Điểm sôi của nước nguyên chất ở áp suất tiêu chuẩn. Mốc 100 của thang Celsius và 212 của thang Fahrenheit.'
            },
            {
                id: 'iron_melt',
                k: 1808.0,
                c: 1535.0,
                f: 2795.0,
                icon: '🌋',
                title: 'Sắt Nóng Chảy (Molten Iron)',
                tag: 'Luyện kim & Địa chất',
                desc: 'Nhiệt độ nóng chảy của kim loại sắt nguyên chất. Tương đương với nhiệt độ dung nham macma trong lòng núi lửa và lớp manti của Trái Đất.'
            },
            {
                id: 'sun_surface',
                k: 5778.0,
                c: 5505.0,
                f: 9941.0,
                icon: '☀️',
                title: 'Quang Cầu Mặt Trời (Bề Mặt)',
                tag: 'Thiên văn học',
                desc: 'Nhiệt độ bề mặt Mặt Trời bức xạ ánh sáng vàng khả kiến, là nguồn năng lượng duy trì sự sống và các hiện tượng khí tượng trên Trái Đất.'
            },
            {
                id: 'sun_core',
                k: 15000000.0,
                c: 14999727.0,
                f: 26999540.0,
                icon: '💥',
                title: 'Lõi Mặt Trời (Sun Core)',
                tag: 'Phản ứng nhiệt hạch',
                desc: 'Áp suất 250 tỷ atm và nhiệt độ 15 triệu Kelvin tạo điều kiện cho các hạt nhân Hydro va chạm thắng lực đẩy Coulomb, nhiệt hạch tạo thành Heli và giải phóng năng lượng khổng lồ.'
            }
        ];
    }

    start(unitKey = 'all') {
        const container = document.getElementById('active-game-container');
        if (!container) return;

        this.currentT = 300.0;
        this.sliderNorm = this.tempToNorm(300.0);
        this.isGameMode = false;
        this.roundSubmitted = false;

        this.renderLayout(container);
        this.bindEvents();
        this.updateView();
    }

    // Mapping: slider norm [0, 1] <-> Temperature T (Kelvin)
    // Uses segmented logarithmic mapping so human temps (200-400K) have high sensitivity
    normToTemp(norm) {
        if (norm <= 0.001) return 0.0;
        if (norm < 0.15) {
            // 0 to 100 K
            return (norm / 0.15) * 100.0;
        } else if (norm < 0.65) {
            // 100 K to 500 K (Key human & textbook zone!)
            const subNorm = (norm - 0.15) / 0.50;
            return 100.0 + subNorm * 400.0;
        } else if (norm < 0.85) {
            // 500 K to 10,000 K
            const subNorm = (norm - 0.65) / 0.20;
            return 500.0 + Math.pow(subNorm, 2) * 9500.0;
        } else {
            // 10,000 K to 15,000,000 K
            const subNorm = (norm - 0.85) / 0.15;
            return 10000.0 * Math.pow(1500.0, subNorm);
        }
    }

    tempToNorm(t) {
        if (t <= 0.001) return 0.0;
        if (t <= 100.0) {
            return (t / 100.0) * 0.15;
        } else if (t <= 500.0) {
            return 0.15 + ((t - 100.0) / 400.0) * 0.50;
        } else if (t <= 10000.0) {
            const subNorm = Math.sqrt((t - 500.0) / 9500.0);
            return 0.65 + subNorm * 0.20;
        } else {
            const subNorm = Math.log(t / 10000.0) / Math.log(1500.0);
            return 0.85 + Math.min(1.0, subNorm) * 0.15;
        }
    }

    renderLayout(container) {
        container.innerHTML = `
            <div class="cosmic-explorer-wrapper">
                
                <!-- Top Navigation & Mode Switch -->
                <div class="cosmic-top-bar">
                    <div class="cosmic-brand-box">
                        <span class="cosmic-badge">🌌 Thang Nhiệt Độ Trực Quan (Neal.fun Style)</span>
                        <h3>Thang Đo Nhiệt Độ Vũ Trụ & Đố Vui Điểm Dừng</h3>
                    </div>
                    <div class="cosmic-mode-toggle">
                        <button type="button" class="btn-cosmic-tab ${!this.isGameMode ? 'active' : ''}" id="btn-tab-explore">
                            🔍 Chế Độ Khám Phá
                        </button>
                        <button type="button" class="btn-cosmic-tab ${this.isGameMode ? 'active' : ''}" id="btn-tab-challenge">
                            🎯 Mini-Game Bắn Tọa Độ
                        </button>
                    </div>
                </div>

                <!-- Challenge Banner (If Mini-Game Mode Active) -->
                <div id="cosmic-challenge-banner" class="cosmic-challenge-banner ${!this.isGameMode ? 'hidden' : ''}">
                    <div class="c-target-header">
                        <span class="c-round-badge" id="c-round-indicator">Vòng 1 / 5</span>
                        <div class="c-score-badge">Điểm: <strong id="c-live-score">0</strong></div>
                    </div>
                    <div class="c-target-question">
                        <span class="c-target-icon" id="c-target-icon">🎯</span>
                        <div class="c-target-text-wrap">
                            <h4 id="c-target-prompt">Hãy kéo thanh trượt đến nhiệt độ sôi của Nitơ lỏng!</h4>
                            <p id="c-target-hint">Gợi ý: Nitơ lỏng dùng để làm lạnh sâu trong y học.</p>
                        </div>
                    </div>
                    <div class="c-target-actions">
                        <button type="button" id="btn-submit-target" class="btn-submit-target">🎯 BẮN CHỐT NHIỆT ĐỘ</button>
                        <div id="c-result-feedback" class="c-result-feedback" style="display: none;"></div>
                    </div>
                </div>

                <!-- 3 Synchronized Scales Display Cards -->
                <div class="scales-trio-grid">
                    
                    <!-- Card 1: Kelvin Scale (SI) -->
                    <div class="scale-card kelvin-card">
                        <div class="scale-card-header">
                            <span class="sc-tag">Hệ Đo Lường Quốc Tế (SI)</span>
                            <span class="sc-unit">Thang Kelvin</span>
                        </div>
                        <div class="sc-main-value">
                            <span class="sc-num" id="sc-val-kelvin">300.0</span>
                            <span class="sc-sym">K</span>
                        </div>
                        <div class="sc-sub-info" id="sc-kelvin-note">
                            Nhiệt độ tuyệt đối (T)
                        </div>
                    </div>

                    <!-- Card 2: Celsius Scale -->
                    <div class="scale-card celsius-card">
                        <div class="scale-card-header">
                            <span class="sc-tag">Thường Dùng Ở Việt Nam</span>
                            <span class="sc-unit">Thang Celsius</span>
                        </div>
                        <div class="sc-main-value">
                            <span class="sc-num" id="sc-val-celsius">26.85</span>
                            <span class="sc-sym">°C</span>
                        </div>
                        <div class="sc-sub-info" id="sc-celsius-note">
                            t = T - 273,15
                        </div>
                    </div>

                    <!-- Card 3: Fahrenheit Scale -->
                    <div class="scale-card fahrenheit-card">
                        <div class="scale-card-header">
                            <span class="sc-tag">Thường Dùng Ở Mỹ / Anh</span>
                            <span class="sc-unit">Thang Fahrenheit</span>
                        </div>
                        <div class="sc-main-value">
                            <span class="sc-num" id="sc-val-fahrenheit">80.33</span>
                            <span class="sc-sym">°F</span>
                        </div>
                        <div class="sc-sub-info" id="sc-fahrenheit-note">
                            t(°F) = 1,8·t(°C) + 32
                        </div>
                    </div>

                </div>

                <!-- Dynamic Math Formula Conversion Bar -->
                <div class="dynamic-formula-bar" id="cosmic-formula-box">
                    <span class="df-icon">📐</span>
                    <div class="df-equations">
                        <span class="df-eq" id="eq-kelvin-celsius">T(K) = t(°C) + 273,15 ➔ <strong>300,00 K = 26,85 °C + 273,15</strong></span>
                        <span class="df-sep">•</span>
                        <span class="df-eq" id="eq-celsius-fahrenheit">t(°F) = 1,8·t(°C) + 32 ➔ <strong>80,33 °F = 1,8·(26,85) + 32</strong></span>
                    </div>
                </div>

                <!-- Main Neal.fun Interactive Logarithmic Slider Track -->
                <div class="cosmic-slider-container">
                    <div class="slider-header-info">
                        <span class="sl-left-label">0 K (Độ Không Tuyệt Đối)</span>
                        <span class="sl-mid-label" id="slider-current-badge">300.0 K (26.9 °C)</span>
                        <span class="sl-right-label">15.000.000 K (Lõi Mặt Trời)</span>
                    </div>

                    <div class="slider-track-wrap">
                        <input type="range" min="0" max="10000" value="4500" class="cosmic-range-slider" id="cosmic-range-slider">
                        <div class="slider-color-glow" id="slider-glow-bar"></div>
                    </div>

                    <!-- Quick Step Landmark Pins -->
                    <div class="milestone-pins-row">
                        <button type="button" class="btn-landmark-pin" data-t="0">❄️ 0 K</button>
                        <button type="button" class="btn-landmark-pin" data-t="77.36">🧪 77 K</button>
                        <button type="button" class="btn-landmark-pin" data-t="194.65">🧊 195 K</button>
                        <button type="button" class="btn-landmark-pin" data-t="273.15">💧 273 K</button>
                        <button type="button" class="btn-landmark-pin" data-t="310.15">🩺 310 K</button>
                        <button type="button" class="btn-landmark-pin" data-t="373.15">♨️ 373 K</button>
                        <button type="button" class="btn-landmark-pin" data-t="1808">🌋 1808 K</button>
                        <button type="button" class="btn-landmark-pin" data-t="5778">☀️ 5778 K</button>
                        <button type="button" class="btn-landmark-pin" data-t="15000000">💥 15M K</button>
                    </div>
                </div>

                <!-- Active Landmark Spotlight Card -->
                <div class="landmark-spotlight-card" id="landmark-spotlight">
                    <div class="ls-icon-box" id="ls-icon">🩺</div>
                    <div class="ls-info">
                        <div class="ls-title-row">
                            <h4 id="ls-title">Thân Nhiệt Người Bình Thường</h4>
                            <span class="ls-badge" id="ls-tag">Sinh học</span>
                        </div>
                        <div class="ls-temps-row">
                            <span class="ls-temp-pill kelvin" id="ls-k">310.15 K</span>
                            <span class="ls-temp-pill celsius" id="ls-c">37.0 °C</span>
                            <span class="ls-temp-pill fahrenheit" id="ls-f">98.6 °F</span>
                        </div>
                        <p class="ls-desc" id="ls-desc">Nhiệt độ tối ưu cho hoạt động của các enzyme trong cơ thể người. Được đo bằng nhiệt kế y tế.</p>
                    </div>
                </div>

                <!-- 12 Milestones Gallery Grid (For Quick Browsing) -->
                <div class="milestones-gallery-section">
                    <h4 class="mg-section-title">🗺️ Bản Đồ 12 Cột Mốc Nhiệt Độ Vũ Trụ & Đời Sống:</h4>
                    <div class="mg-cards-grid" id="mg-cards-grid">
                        ${this.milestones.map(m => `
                            <div class="mg-mini-card" data-tid="${m.id}" data-k="${m.k}">
                                <div class="mg-top">
                                    <span class="mg-icon">${m.icon}</span>
                                    <span class="mg-k">${m.k >= 1000000 ? (m.k/1000000).toFixed(0) + 'M K' : (m.k >= 1000 ? m.k.toFixed(0) + ' K' : m.k.toFixed(1) + ' K')}</span>
                                </div>
                                <h5>${m.title}</h5>
                                <span class="mg-c">${m.c >= 1000000 ? (m.c/1000000).toFixed(0) + 'M °C' : m.c.toFixed(1) + ' °C'}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>

            </div>
        `;
    }

    bindEvents() {
        const slider = document.getElementById('cosmic-range-slider');
        const btnTabExplore = document.getElementById('btn-tab-explore');
        const btnTabChallenge = document.getElementById('btn-tab-challenge');
        const btnSubmit = document.getElementById('btn-submit-target');

        // Mode Switching
        btnTabExplore?.addEventListener('click', () => {
            this.isGameMode = false;
            btnTabExplore.classList.add('active');
            btnTabChallenge?.classList.remove('active');
            document.getElementById('cosmic-challenge-banner')?.classList.add('hidden');
            if (window.soundEngine) soundEngine.playClick();
        });

        btnTabChallenge?.addEventListener('click', () => {
            this.isGameMode = true;
            btnTabChallenge.classList.add('active');
            btnTabExplore?.classList.remove('active');
            document.getElementById('cosmic-challenge-banner')?.classList.remove('hidden');
            this.initTargetChallenge();
            if (window.soundEngine) soundEngine.playClick();
        });

        // Range Slider Input
        slider?.addEventListener('input', (e) => {
            const rawVal = parseInt(e.target.value, 10);
            this.sliderNorm = rawVal / 10000.0;
            this.currentT = this.normToTemp(this.sliderNorm);
            this.updateView();
        });

        // Quick Pin Buttons
        const pinBtns = document.querySelectorAll('.btn-landmark-pin');
        pinBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const targetK = parseFloat(btn.dataset.t);
                this.jumpToTemp(targetK);
                if (window.soundEngine) soundEngine.playClick();
            });
        });

        // Gallery Mini Cards
        const miniCards = document.querySelectorAll('.mg-mini-card');
        miniCards.forEach(card => {
            card.addEventListener('click', () => {
                const targetK = parseFloat(card.dataset.k);
                this.jumpToTemp(targetK);
                if (window.soundEngine) soundEngine.playClick();
            });
        });

        // Target Submit Button
        btnSubmit?.addEventListener('click', () => {
            this.handleTargetSubmit();
        });
    }

    jumpToTemp(targetK) {
        this.currentT = targetK;
        this.sliderNorm = this.tempToNorm(targetK);
        const slider = document.getElementById('cosmic-range-slider');
        if (slider) {
            slider.value = Math.round(this.sliderNorm * 10000);
        }
        this.updateView();
    }

    updateView() {
        const k = this.currentT;
        const c = k - 273.15;
        const f = c * 1.8 + 32.0;

        // 1. Update 3 Scales
        const elK = document.getElementById('sc-val-kelvin');
        const elC = document.getElementById('sc-val-celsius');
        const elF = document.getElementById('sc-val-fahrenheit');

        const formatVal = (val) => {
            if (Math.abs(val) >= 1000000) return (val / 1000000).toFixed(2) + 'M';
            if (Math.abs(val) >= 10000) return val.toFixed(0);
            return val.toFixed(2);
        };

        if (elK) elK.textContent = formatVal(k);
        if (elC) elC.textContent = formatVal(c);
        if (elF) elF.textContent = formatVal(f);

        // 2. Dynamic Math Formula
        const eqKC = document.getElementById('eq-kelvin-celsius');
        const eqCF = document.getElementById('eq-celsius-fahrenheit');

        if (eqKC) {
            eqKC.innerHTML = `T(K) = t(°C) + 273,15 ➔ <strong>${formatVal(k)} K = ${formatVal(c)} °C + 273,15</strong>`;
        }
        if (eqCF) {
            eqCF.innerHTML = `t(°F) = 1,8·t(°C) + 32 ➔ <strong>${formatVal(f)} °F = 1,8·(${formatVal(c)}) + 32</strong>`;
        }

        // 3. Slider Badge & Glow
        const badge = document.getElementById('slider-current-badge');
        const glowBar = document.getElementById('slider-glow-bar');

        if (badge) {
            badge.textContent = `${formatVal(k)} K (${formatVal(c)} °C)`;
        }
        if (glowBar) {
            glowBar.style.width = `${(this.sliderNorm * 100).toFixed(1)}%`;
            if (k > 5000) {
                glowBar.style.background = 'linear-gradient(90deg, #3B82F6 0%, #EC4899 40%, #EF4444 80%, #FEF08A 100%)';
            } else if (k < 200) {
                glowBar.style.background = 'linear-gradient(90deg, #0284C7 0%, #38BDF8 100%)';
            } else {
                glowBar.style.background = 'linear-gradient(90deg, #3B82F6 0%, #8B5CF6 50%, #EC4899 100%)';
            }
        }

        // 4. Closest Milestone Highlight
        let closest = this.milestones[0];
        let minDiff = Infinity;
        this.milestones.forEach(m => {
            // Compare in normalized space
            const mNorm = this.tempToNorm(m.k);
            const diff = Math.abs(mNorm - this.sliderNorm);
            if (diff < minDiff) {
                minDiff = diff;
                closest = m;
            }
        });

        // Update spotlight
        const lsIcon = document.getElementById('ls-icon');
        const lsTitle = document.getElementById('ls-title');
        const lsTag = document.getElementById('ls-tag');
        const lsK = document.getElementById('ls-k');
        const lsC = document.getElementById('ls-c');
        const lsF = document.getElementById('ls-f');
        const lsDesc = document.getElementById('ls-desc');

        if (lsIcon) lsIcon.textContent = closest.icon;
        if (lsTitle) lsTitle.textContent = closest.title;
        if (lsTag) lsTag.textContent = closest.tag;
        if (lsK) lsK.textContent = formatVal(closest.k) + ' K';
        if (lsC) lsC.textContent = formatVal(closest.c) + ' °C';
        if (lsF) lsF.textContent = formatVal(closest.f) + ' °F';
        if (lsDesc) lsDesc.textContent = closest.desc;

        // Highlight mini card in gallery
        const allCards = document.querySelectorAll('.mg-mini-card');
        allCards.forEach(c => {
            c.classList.toggle('active', c.dataset.tid === closest.id);
        });
    }

    // =========================================================================
    // MINI-GAME TARGET CHALLENGE ENGINE
    // =========================================================================
    initTargetChallenge() {
        this.currentRoundIdx = 0;
        this.score = 0;
        this.roundSubmitted = false;

        // Pick 5 random milestones as targets (excluding absolute zero if too easy)
        const candidates = [...this.milestones];
        candidates.sort(() => Math.random() - 0.5);
        this.gameRounds = candidates.slice(0, this.totalRounds);

        this.renderTargetRound();
    }

    renderTargetRound() {
        const round = this.gameRounds[this.currentRoundIdx];
        if (!round) {
            this.finishChallenge();
            return;
        }

        this.roundSubmitted = false;

        const roundInd = document.getElementById('c-round-indicator');
        const liveScore = document.getElementById('c-live-score');
        const icon = document.getElementById('c-target-icon');
        const prompt = document.getElementById('c-target-prompt');
        const hint = document.getElementById('c-target-hint');
        const btnSubmit = document.getElementById('btn-submit-target');
        const feedback = document.getElementById('c-result-feedback');

        if (roundInd) roundInd.textContent = `Vòng ${this.currentRoundIdx + 1} / ${this.totalRounds}`;
        if (liveScore) liveScore.textContent = this.score.toLocaleString();
        if (icon) icon.textContent = round.icon;
        if (prompt) prompt.innerHTML = `Hãy kéo thanh trượt đến: <strong>${round.title}</strong>!`;
        if (hint) hint.textContent = `Gợi ý: ${round.tag} • ${round.desc.slice(0, 80)}...`;

        if (btnSubmit) {
            btnSubmit.style.display = 'inline-flex';
            btnSubmit.textContent = '🎯 BẮN CHỐT NHIỆT ĐỘ';
            btnSubmit.disabled = false;
        }
        if (feedback) {
            feedback.style.display = 'none';
            feedback.className = 'c-result-feedback';
        }
    }

    handleTargetSubmit() {
        if (this.roundSubmitted) {
            // Next round
            this.currentRoundIdx++;
            this.renderTargetRound();
            return;
        }

        const round = this.gameRounds[this.currentRoundIdx];
        if (!round) return;

        this.roundSubmitted = true;
        const targetK = round.k;
        const userK = this.currentT;

        // Calculate precision error based on slider normalized distance
        const userNorm = this.tempToNorm(userK);
        const targetNorm = this.tempToNorm(targetK);
        const normError = Math.abs(userNorm - targetNorm); // 0 to 1

        let pts = 0;
        let ratingText = '';
        let ratingClass = '';
        let stars = '';

        if (normError <= 0.02) {
            pts = 1000;
            ratingText = '🎯 BẮN TRÚNG HỒNG TÂM! (HOÀN HẢO)';
            ratingClass = 'perfect';
            stars = '⭐⭐⭐';
            if (window.soundEngine) soundEngine.playCorrect();
            if (window.confettiEngine) confettiEngine.fire({ count: 80 });
        } else if (normError <= 0.06) {
            pts = 750;
            ratingText = '🌟 RẤT CHÍNH XÁC!';
            ratingClass = 'great';
            stars = '⭐⭐';
            if (window.soundEngine) soundEngine.playCorrect();
        } else if (normError <= 0.15) {
            pts = 400;
            ratingText = '👍 GẦN ĐÚNG RỒI!';
            ratingClass = 'good';
            stars = '⭐';
            if (window.soundEngine) soundEngine.playClick();
        } else {
            pts = 150;
            ratingText = '⚠️ CHƯA CHÍNH XÁC!';
            ratingClass = 'miss';
            stars = '';
            if (window.soundEngine) soundEngine.playWrong();
        }

        this.score += pts;

        const liveScore = document.getElementById('c-live-score');
        if (liveScore) liveScore.textContent = this.score.toLocaleString();

        const feedback = document.getElementById('c-result-feedback');
        if (feedback) {
            feedback.style.display = 'block';
            feedback.className = `c-result-feedback ${ratingClass}`;
            feedback.innerHTML = `
                <div class="rf-title-row">
                    <strong>${ratingText} ${stars}</strong>
                    <span class="rf-pts">+${pts} Điểm</span>
                </div>
                <div class="rf-details">
                    <span>Bạn chọn: <strong>${userK.toFixed(1)} K</strong></span>
                    <span>Chuẩn: <strong>${targetK.toFixed(1)} K (${round.c.toFixed(1)} °C)</strong></span>
                </div>
            `;
        }

        const btnSubmit = document.getElementById('btn-submit-target');
        if (btnSubmit) {
            btnSubmit.textContent = this.currentRoundIdx + 1 < this.totalRounds ? 'Câu Tiếp Theo ➔' : 'Xem Kết Quả Tổng Kết ➔';
        }
    }

    finishChallenge() {
        const accuracyPct = Math.round((this.score / 5000) * 100);
        let starRating = '⭐⭐⭐';
        let title = 'Vua Tọa Độ Nhiệt Độ Vũ Trụ!';
        if (accuracyPct < 50) {
            starRating = '⭐';
            title = 'Hoàn Thành Thử Thách!';
        } else if (accuracyPct < 80) {
            starRating = '⭐⭐';
            title = 'Xạ Thủ Nhiệt Độ Xuất Sắc!';
        }

        if (window.soundEngine) soundEngine.playVictory();
        if (window.confettiEngine) confettiEngine.fire({ count: 120 });

        this.manager.showVictoryModal({
            title: title,
            stars: starRating,
            desc: `Bạn đã hoàn thành 5 vòng đố vui Thang Nhiệt Độ Vũ Trụ với độ chính xác đạt ${accuracyPct}%!`,
            stats: [
                { label: 'Tổng Điểm Đạt Được:', val: `${this.score.toLocaleString()} ĐIỂM` },
                { label: 'Độ Chính Xác:', val: `${accuracyPct}%` },
                { label: 'Số Vòng Chinh Phục:', val: '5 / 5 Vòng' },
                { label: 'Thang Đo Áp Dụng:', val: 'Kelvin • Celsius • Fahrenheit' }
            ],
            onReplay: () => {
                this.initTargetChallenge();
            }
        });
    }

    cleanup() {
        // Clear listeners or timers if any
    }
}
