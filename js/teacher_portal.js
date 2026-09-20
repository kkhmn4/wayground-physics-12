/**
 * Wayground Physics 12 - Dedicated Teacher Portal Engine
 * Features:
 * - Password Authentication & Session Security (Lock Screen)
 * - Dynamic Class & Difficulty Filters
 * - Class-wide KPIs & Real-time Student Search
 * - Student Detailed Question Breakdown Modal
 * - UTF-8 BOM CSV Export for Microsoft Excel
 * - Change Password System
 */

class TeacherPortal {
    constructor() {
        this.defaultPassword = "giaovien12";
        this.initDOM();
        this.bindEvents();
        this.checkAuthStatus();
    }

    getPassword() {
        return localStorage.getItem('wayground_teacher_pwd') || this.defaultPassword;
    }

    setPassword(newPwd) {
        localStorage.setItem('wayground_teacher_pwd', newPwd);
    }

    isAuthenticated() {
        return sessionStorage.getItem('wayground_teacher_auth') === 'true';
    }

    setAuthenticated(status) {
        if (status) {
            sessionStorage.setItem('wayground_teacher_auth', 'true');
        } else {
            sessionStorage.removeItem('wayground_teacher_auth');
        }
    }

    initDOM() {
        // Auth / Lock Screen elements
        this.sectionLogin = document.getElementById('section-teacher-login');
        this.sectionDashboard = document.getElementById('section-teacher-dashboard');
        this.formLogin = document.getElementById('form-teacher-login');
        this.inputPwd = document.getElementById('teacher-pwd-input');
        this.btnToggleVisibility = document.getElementById('btn-toggle-pwd-visibility');
        this.loginErrorMsg = document.getElementById('login-error-msg');
        this.btnSubmitLogin = document.getElementById('btn-submit-login');

        // Header controls
        this.btnHeaderChangePwd = document.getElementById('btn-header-change-pwd');
        this.btnHeaderLogout = document.getElementById('btn-header-logout');
        this.btnToggleSound = document.getElementById('btn-toggle-sound');

        // Dashboard KPIs
        this.kpiTotalSubmissions = document.getElementById('tp-total-submissions');
        this.kpiAvgScore = document.getElementById('tp-avg-score');
        this.kpiAvgAccuracy = document.getElementById('tp-avg-accuracy');
        this.kpiRemediationCount = document.getElementById('tp-remediation-count');

        // Dashboard Controls
        this.filterClass = document.getElementById('tp-filter-class');
        this.filterMode = document.getElementById('tp-filter-mode');
        this.searchStudent = document.getElementById('tp-search-student');
        this.btnExportCsv = document.getElementById('btn-tp-export-csv');
        this.btnSeedDemo = document.getElementById('btn-tp-seed-demo');
        this.btnClearData = document.getElementById('btn-tp-clear-data');

        // Table & Insights
        this.tableCount = document.getElementById('tp-table-count');
        this.tableBody = document.getElementById('tp-students-table-body');
        this.insightsList = document.getElementById('tp-insights-list');

        // Detail Modal
        this.modalReport = document.getElementById('modal-teacher-report');
        this.btnCloseReport = document.getElementById('btn-close-report');
        this.repStudentName = document.getElementById('rep-student-name');
        this.repStudentClass = document.getElementById('rep-student-class');
        this.repTotalScore = document.getElementById('rep-total-score');
        this.repAccuracy = document.getElementById('rep-accuracy');
        this.reportTableBody = document.getElementById('report-table-body');
        this.btnExportSingleCsv = document.getElementById('btn-export-single-csv');
        this.btnPrintReport = document.getElementById('btn-print-report');

        // Change Password Modal
        this.modalChangePwd = document.getElementById('modal-change-password');
        this.btnCloseChangePwd = document.getElementById('btn-close-change-pwd');
        this.btnCancelChangePwd = document.getElementById('btn-cancel-change-pwd');
        this.formChangePwd = document.getElementById('form-change-pwd');
        this.inputCurrentPwd = document.getElementById('input-current-pwd');
        this.inputNewPwd = document.getElementById('input-new-pwd');
        this.inputConfirmPwd = document.getElementById('input-confirm-pwd');
        this.changePwdMsg = document.getElementById('change-pwd-msg');
        this.btnSubmitNewPwd = document.getElementById('btn-submit-new-pwd');

        this.currentViewingRecord = null;
    }

    bindEvents() {
        // Sound toggle
        if (this.btnToggleSound && window.soundEngine) {
            this.btnToggleSound.addEventListener('click', () => {
                const isEnabled = soundEngine.toggleSound();
                this.btnToggleSound.textContent = isEnabled ? '🔊' : '🔇';
                soundEngine.playClick();
            });
        }

        // Toggle Password Visibility
        if (this.btnToggleVisibility && this.inputPwd) {
            this.btnToggleVisibility.addEventListener('click', () => {
                const isPass = this.inputPwd.type === 'password';
                this.inputPwd.type = isPass ? 'text' : 'password';
                this.btnToggleVisibility.textContent = isPass ? '🙈' : '👁️';
            });
        }

        // Login Submit
        if (this.formLogin) {
            this.formLogin.addEventListener('submit', () => this.handleLogin());
        }
        if (this.btnSubmitLogin) {
            this.btnSubmitLogin.addEventListener('click', () => this.handleLogin());
        }

        // Logout & Change Password buttons in header
        if (this.btnHeaderLogout) {
            this.btnHeaderLogout.addEventListener('click', () => this.logout());
        }
        if (this.btnHeaderChangePwd) {
            this.btnHeaderChangePwd.addEventListener('click', () => this.openChangePasswordModal());
        }

        // Filters
        if (this.filterClass) {
            this.filterClass.addEventListener('change', () => this.renderDashboard());
        }
        if (this.filterMode) {
            this.filterMode.addEventListener('change', () => this.renderDashboard());
        }
        if (this.searchStudent) {
            this.searchStudent.addEventListener('input', () => this.renderDashboard());
        }

        // Dashboard Actions
        if (this.btnExportCsv) {
            this.btnExportCsv.addEventListener('click', () => this.exportDashboardCSV());
        }
        if (this.btnSeedDemo) {
            this.btnSeedDemo.addEventListener('click', () => {
                this.seedDemoData(true);
                this.renderDashboard();
                if (window.soundEngine) soundEngine.playCorrect();
            });
        }
        if (this.btnClearData) {
            this.btnClearData.addEventListener('click', () => {
                if (confirm("Thầy/Cô có chắc chắn muốn xóa toàn bộ lịch sử nộp bài của học sinh không?")) {
                    localStorage.removeItem('wayground_physics_records');
                    this.renderDashboard();
                    if (window.soundEngine) soundEngine.playClick();
                }
            });
        }

        // Detail modal close
        if (this.btnCloseReport) {
            this.btnCloseReport.addEventListener('click', () => this.closeDetailModal());
        }
        if (this.modalReport) {
            this.modalReport.addEventListener('click', (e) => {
                if (e.target === this.modalReport) this.closeDetailModal();
            });
        }
        if (this.btnPrintReport) {
            this.btnPrintReport.addEventListener('click', () => window.print());
        }
        if (this.btnExportSingleCsv) {
            this.btnExportSingleCsv.addEventListener('click', () => this.exportSingleStudentCSV());
        }

        // Change Password Modal events
        if (this.btnCloseChangePwd) {
            this.btnCloseChangePwd.addEventListener('click', () => this.closeChangePasswordModal());
        }
        if (this.btnCancelChangePwd) {
            this.btnCancelChangePwd.addEventListener('click', () => this.closeChangePasswordModal());
        }
        if (this.modalChangePwd) {
            this.modalChangePwd.addEventListener('click', (e) => {
                if (e.target === this.modalChangePwd) this.closeChangePasswordModal();
            });
        }
        if (this.formChangePwd) {
            this.formChangePwd.addEventListener('submit', () => this.handleChangePasswordSubmit());
        }
        if (this.btnSubmitNewPwd) {
            this.btnSubmitNewPwd.addEventListener('click', () => this.handleChangePasswordSubmit());
        }

        // Global Escape shortcut
        window.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                if (this.modalReport && this.modalReport.classList.contains('active')) {
                    this.closeDetailModal();
                }
                if (this.modalChangePwd && this.modalChangePwd.classList.contains('active')) {
                    this.closeChangePasswordModal();
                }
            }
        });
    }

    checkAuthStatus() {
        if (this.isAuthenticated()) {
            this.showDashboard();
        } else {
            this.showLogin();
        }
    }

    handleLogin() {
        const entered = (this.inputPwd.value || '').trim();
        const actual = this.getPassword();

        if (entered === actual) {
            this.setAuthenticated(true);
            if (this.loginErrorMsg) this.loginErrorMsg.style.display = 'none';
            if (window.soundEngine) soundEngine.playCorrect();
            this.showDashboard();
        } else {
            if (this.loginErrorMsg) {
                this.loginErrorMsg.style.display = 'block';
                this.loginErrorMsg.innerHTML = '<span>⚠️ Mật khẩu không chính xác! Vui lòng kiểm tra lại.</span>';
            }
            if (this.inputPwd) {
                this.inputPwd.classList.add('input-shake');
                setTimeout(() => this.inputPwd.classList.remove('input-shake'), 600);
                this.inputPwd.focus();
            }
            if (window.soundEngine) soundEngine.playWrong();
        }
    }

    showLogin() {
        if (this.sectionLogin) this.sectionLogin.style.display = 'flex';
        if (this.sectionDashboard) this.sectionDashboard.style.display = 'none';
        if (this.btnHeaderChangePwd) this.btnHeaderChangePwd.style.display = 'none';
        if (this.btnHeaderLogout) this.btnHeaderLogout.style.display = 'none';
        if (this.inputPwd) {
            this.inputPwd.value = '';
            this.inputPwd.focus();
        }
    }

    showDashboard() {
        if (this.sectionLogin) this.sectionLogin.style.display = 'none';
        if (this.sectionDashboard) this.sectionDashboard.style.display = 'block';
        if (this.btnHeaderChangePwd) this.btnHeaderChangePwd.style.display = 'inline-flex';
        if (this.btnHeaderLogout) this.btnHeaderLogout.style.display = 'inline-flex';
        this.renderDashboard();
    }

    logout() {
        if (confirm("Thầy/Cô có muốn khóa bảng quản lý và đăng xuất không?")) {
            this.setAuthenticated(false);
            if (window.soundEngine) soundEngine.playClick();
            this.showLogin();
        }
    }

    // =========================================================================
    // CHANGE PASSWORD
    // =========================================================================
    openChangePasswordModal() {
        if (!this.modalChangePwd) return;
        this.inputCurrentPwd.value = '';
        this.inputNewPwd.value = '';
        this.inputConfirmPwd.value = '';
        this.changePwdMsg.style.display = 'none';
        this.modalChangePwd.classList.add('active');
        if (window.soundEngine) soundEngine.playClick();
        setTimeout(() => this.inputCurrentPwd.focus(), 200);
    }

    closeChangePasswordModal() {
        if (!this.modalChangePwd) return;
        this.modalChangePwd.classList.remove('active');
    }

    handleChangePasswordSubmit() {
        const cur = (this.inputCurrentPwd.value || '').trim();
        const newP = (this.inputNewPwd.value || '').trim();
        const conf = (this.inputConfirmPwd.value || '').trim();
        const actual = this.getPassword();

        if (cur !== actual) {
            this.showChangePwdMsg("⚠️ Mật khẩu hiện tại không đúng!", true);
            return;
        }

        if (newP.length < 4) {
            this.showChangePwdMsg("⚠️ Mật khẩu mới phải có ít nhất 4 ký tự!", true);
            return;
        }

        if (newP !== conf) {
            this.showChangePwdMsg("⚠️ Xác nhận mật khẩu mới không trùng khớp!", true);
            return;
        }

        this.setPassword(newP);
        this.showChangePwdMsg("✅ Đổi mật khẩu thành công! Hãy ghi nhớ mật khẩu mới.", false);
        if (window.soundEngine) soundEngine.playVictory();

        setTimeout(() => {
            this.closeChangePasswordModal();
        }, 1500);
    }

    showChangePwdMsg(text, isError) {
        if (!this.changePwdMsg) return;
        this.changePwdMsg.style.display = 'block';
        this.changePwdMsg.style.background = isError ? 'rgba(239, 68, 68, 0.15)' : 'rgba(16, 185, 129, 0.15)';
        this.changePwdMsg.style.borderColor = isError ? 'rgba(239, 68, 68, 0.3)' : 'rgba(16, 185, 129, 0.3)';
        this.changePwdMsg.style.color = isError ? '#FCA5A5' : '#6EE7B7';
        this.changePwdMsg.textContent = text;
    }

    // =========================================================================
    // DATA & DASHBOARD RENDERING
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

    renderDashboard() {
        const records = this.getStoredRecords();

        // 1. Populate Class Filter dropdown
        if (this.filterClass) {
            const currentSelectedClass = this.filterClass.value;
            const uniqueClasses = Array.from(new Set(records.map(r => r.className).filter(Boolean))).sort();

            this.filterClass.innerHTML = '<option value="all">Tất Cả Các Lớp</option>';
            uniqueClasses.forEach(cls => {
                const opt = document.createElement('option');
                opt.value = cls;
                opt.textContent = `Lớp ${cls}`;
                if (cls === currentSelectedClass) opt.selected = true;
                this.filterClass.appendChild(opt);
            });
        }

        // 2. Filter records
        const classFilter = this.filterClass ? this.filterClass.value : 'all';
        const modeFilter = this.filterMode ? this.filterMode.value : 'all';
        const searchQuery = this.searchStudent ? this.searchStudent.value.trim().toLowerCase() : '';

        const filtered = records.filter(r => {
            if (classFilter !== 'all' && r.className !== classFilter) return false;
            if (modeFilter !== 'all' && r.mode !== modeFilter) return false;
            if (searchQuery && !r.name.toLowerCase().includes(searchQuery)) return false;
            return true;
        });

        // 3. Compute and update KPIs
        const totalSubs = filtered.length;
        const totalScore = filtered.reduce((acc, cur) => acc + (cur.score || 0), 0);
        const avgScore = totalSubs > 0 ? Math.round(totalScore / totalSubs) : 0;
        const totalAcc = filtered.reduce((acc, cur) => acc + (cur.accuracy || 0), 0);
        const avgAcc = totalSubs > 0 ? Math.round(totalAcc / totalSubs) : 0;
        const remediationSubs = filtered.filter(r => r.round === 2).length;

        if (this.kpiTotalSubmissions) this.kpiTotalSubmissions.textContent = totalSubs;
        if (this.kpiAvgScore) this.kpiAvgScore.textContent = avgScore.toLocaleString();
        if (this.kpiAvgAccuracy) this.kpiAvgAccuracy.textContent = `${avgAcc}%`;
        if (this.kpiRemediationCount) this.kpiRemediationCount.textContent = remediationSubs;
        if (this.tableCount) this.tableCount.textContent = `${totalSubs} học sinh`;

        // 4. Render Table Rows
        if (this.tableBody) {
            this.tableBody.innerHTML = '';
            if (filtered.length === 0) {
                const emptyTr = document.createElement('tr');
                emptyTr.innerHTML = `<td colspan="11" style="text-align: center; padding: 32px; color: var(--text-muted);">
                    Chưa có bài làm nào phù hợp với bộ lọc. Hãy đổi bộ lọc hoặc bấm "Nạp Demo Lớp 12"!
                </td>`;
                this.tableBody.appendChild(emptyTr);
            } else {
                filtered.forEach((r, idx) => {
                    const tr = document.createElement('tr');

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
                            this.openDetailModal(r.id);
                        });
                    }

                    this.tableBody.appendChild(tr);
                });
            }
        }

        // 5. Render Diagnostic Insights
        this.renderDiagnosticInsights(filtered);
    }

    renderDiagnosticInsights(filteredRecords) {
        if (!this.insightsList) return;
        this.insightsList.innerHTML = '';

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
            this.insightsList.innerHTML = `
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
            this.insightsList.appendChild(item);
        });
    }

    // =========================================================================
    // STUDENT DETAIL MODAL
    // =========================================================================
    openDetailModal(recordId) {
        const records = this.getStoredRecords();
        const record = records.find(r => r.id === recordId);
        if (!record) return;

        this.currentViewingRecord = record;

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

        this.renderMath(this.modalReport);
        this.modalReport.classList.add('active');
        if (window.soundEngine) soundEngine.playClick();
    }

    closeDetailModal() {
        if (!this.modalReport) return;
        this.modalReport.classList.remove('active');
    }

    renderMath(element) {
        if (window.renderMathInElement && element) {
            try {
                window.renderMathInElement(element, {
                    delimiters: [
                        { left: "$$", right: "$$", display: true },
                        { left: "$", right: "$", display: false }
                    ],
                    throwOnError: false
                });
            } catch (e) {
                console.warn("KaTeX rendering warning in teacher portal:", e);
            }
        }
    }

    // =========================================================================
    // CSV EXPORT
    // =========================================================================
    exportDashboardCSV() {
        const records = this.getStoredRecords();
        const classFilter = this.filterClass ? this.filterClass.value : 'all';
        const modeFilter = this.filterMode ? this.filterMode.value : 'all';
        const searchQuery = this.searchStudent ? this.searchStudent.value.trim().toLowerCase() : '';

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

    exportSingleStudentCSV() {
        if (!this.currentViewingRecord) return;
        const r = this.currentViewingRecord;

        const rows = [
            ["BAO CAO KET QUA HOC TAP MON VAT LI 12 - WAYGROUND"],
            ["Hoc Sinh:", r.name, "Lop:", r.className, "Thoi Gian:", r.fullDate || r.timestamp || new Date().toLocaleString('vi-VN')],
            ["Tong Diem:", r.score, "Ti Le Dung:", `${r.accuracy}%`, "Chuoi Max:", r.maxStreak || 0],
            [],
            ["STT", "Dang Cau", "Noi Dung Cau Hoi", "Chi Tiet Tra Loi", "Trang Thai", "Diem"]
        ];

        if (Array.isArray(r.history)) {
            r.history.forEach((h, idx) => {
                rows.push([
                    idx + 1,
                    h.type,
                    `"${(h.title || '').replace(/"/g, '""')}"`,
                    `"${(h.detail || '').replace(/"/g, '""')}"`,
                    h.status,
                    h.score
                ]);
            });
        }

        const csvContent = "\uFEFF" + rows.map(e => e.join(",")).join("\n");
        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.setAttribute("href", url);
        link.setAttribute("download", `Bao_Cao_${(r.name || 'HocSinh').replace(/\s+/g, '_')}_${r.className}.csv`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
}

// Instantiate on page ready
document.addEventListener('DOMContentLoaded', () => {
    window.teacherPortal = new TeacherPortal();
});
