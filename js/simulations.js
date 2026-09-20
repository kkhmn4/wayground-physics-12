/**
 * Wayground Physics 12 - Textbook-Grade Scientific Diagrams Engine V4.0
 * 100% Vietnamese Scientific Terminology & Accurate GDPT 2018 Physics Principles
 * 
 * 48 DEDICATED VECTOR SVG DIAGRAMS — EXACTLY 1 DIAGRAM PER CONCEPT:
 * - 16 Diagrams for Unit 1 (Bài 1: Cấu trúc của chất. Sự chuyển thể)
 * - 16 Diagrams for Unit 2 (Bài 2: Nội năng. Định luật I nhiệt động lực học)
 * - 16 Diagrams for Unit 3 (Bài 3: Nhiệt độ. Thang nhiệt độ – Nhiệt kế)
 */

class ScientificDiagramEngine {
    constructor() {
        this.initRenderers();
    }

    cleanup() {
        // Lightweight static SVG engine - no active timers or animations
    }

    initRenderers() {
        this.renderers = {
            "c_u1_bay_hoi_va_cac_yeu_to": (c) => this.render_c_u1_bay_hoi_va_cac_yeu_to(c),
            "c_u1_bay_hoi_va_soi": (c) => this.render_c_u1_bay_hoi_va_soi(c),
            "c_u1_chat_ran_tinh_the": (c) => this.render_c_u1_chat_ran_tinh_the(c),
            "c_u1_chuyen_dong_brown": (c) => this.render_c_u1_chuyen_dong_brown(c),
            "c_u1_chuyen_the_nuoc": (c) => this.render_c_u1_chuyen_the_nuoc(c),
            "c_u1_dac_diem_the_chat": (c) => this.render_c_u1_dac_diem_the_chat(c),
            "c_u1_di_huong_dang_huong": (c) => this.render_c_u1_di_huong_dang_huong(c),
            "c_u1_hien_tuong_tuyet_tan": (c) => this.render_c_u1_hien_tuong_tuyet_tan(c),
            "c_u1_khoang_cach_phan_tu": (c) => this.render_c_u1_khoang_cach_phan_tu(c),
            "c_u1_luc_tuong_tac": (c) => this.render_c_u1_luc_tuong_tac(c),
            "c_u1_luc_tuong_tac_khoang_cach": (c) => this.render_c_u1_luc_tuong_tac_khoang_cach(c),
            "c_u1_mo_hinh_phan_tu": (c) => this.render_c_u1_mo_hinh_phan_tu(c),
            "c_u1_nhiet_do_chuyen_dong": (c) => this.render_c_u1_nhiet_do_chuyen_dong(c),
            "c_u1_noi_ap_suat": (c) => this.render_c_u1_noi_ap_suat(c),
            "c_u1_su_ngung_tu": (c) => this.render_c_u1_su_ngung_tu(c),
            "c_u1_su_thang_hoa_ngung_ket": (c) => this.render_c_u1_su_thang_hoa_ngung_ket(c),
            "c_u2_ban_chat_nhiet_luong": (c) => this.render_c_u2_ban_chat_nhiet_luong(c),
            "c_u2_bieu_thuc_dl1": (c) => this.render_c_u2_bieu_thuc_dl1(c),
            "c_u2_bom_xe_dap": (c) => this.render_c_u2_bom_xe_dap(c),
            "c_u2_cac_cach_doi_noi_nang": (c) => this.render_c_u2_cac_cach_doi_noi_nang(c),
            "c_u2_cong_dan_dang_ap": (c) => this.render_c_u2_cong_dan_dang_ap(c),
            "c_u2_dinh_nghia_noi_nang": (c) => this.render_c_u2_dinh_nghia_noi_nang(c),
            "c_u2_dong_co_nhiet": (c) => this.render_c_u2_dong_co_nhiet(c),
            "c_u2_khi_ly_tuong_noi_nang": (c) => this.render_c_u2_khi_ly_tuong_noi_nang(c),
            "c_u2_phu_thuoc_noi_nang": (c) => this.render_c_u2_phu_thuoc_noi_nang(c),
            "c_u2_qua_trinh_dang_tich": (c) => this.render_c_u2_qua_trinh_dang_tich(c),
            "c_u2_qua_trinh_doan_nhiet": (c) => this.render_c_u2_qua_trinh_doan_nhiet(c),
            "c_u2_quy_uoc_dau_a": (c) => this.render_c_u2_quy_uoc_dau_a(c),
            "c_u2_quy_uoc_dau_q": (c) => this.render_c_u2_quy_uoc_dau_q(c),
            "c_u2_tinh_delta_u_1": (c) => this.render_c_u2_tinh_delta_u_1(c),
            "c_u2_tinh_delta_u_2": (c) => this.render_c_u2_tinh_delta_u_2(c),
            "c_u2_xilanh_khi_nen": (c) => this.render_c_u2_xilanh_khi_nen(c),
            "c_u3_an_toan_thuy_ngan": (c) => this.render_c_u3_an_toan_thuy_ngan(c),
            "c_u3_cac_loai_nhiet_ke": (c) => this.render_c_u3_cac_loai_nhiet_ke(c),
            "c_u3_can_bang_nhiet": (c) => this.render_c_u3_can_bang_nhiet(c),
            "c_u3_chieu_truyen_nhiet": (c) => this.render_c_u3_chieu_truyen_nhiet(c),
            "c_u3_cong_thuc_kelvin_celsius": (c) => this.render_c_u3_cong_thuc_kelvin_celsius(c),
            "c_u3_dan_nhiet_sat_go": (c) => this.render_c_u3_dan_nhiet_sat_go(c),
            "c_u3_diem_ba_cua_nuoc": (c) => this.render_c_u3_diem_ba_cua_nuoc(c),
            "c_u3_do_bien_thien_nhiet": (c) => this.render_c_u3_do_bien_thien_nhiet(c),
            "c_u3_don_vi_kelvin": (c) => this.render_c_u3_don_vi_kelvin(c),
            "c_u3_khai_niem_nhiet_do": (c) => this.render_c_u3_khai_niem_nhiet_do(c),
            "c_u3_khong_do_tuyet_doi": (c) => this.render_c_u3_khong_do_tuyet_doi(c),
            "c_u3_nguyen_ly_nhiet_ke": (c) => this.render_c_u3_nguyen_ly_nhiet_ke(c),
            "c_u3_nhiet_ke_y_te": (c) => this.render_c_u3_nhiet_ke_y_te(c),
            "c_u3_thang_nhiet_do_chuan": (c) => this.render_c_u3_thang_nhiet_do_chuan(c),
            "c_u3_tinh_doi_fahrenheit": (c) => this.render_c_u3_tinh_doi_fahrenheit(c),
            "c_u3_tinh_doi_kelvin": (c) => this.render_c_u3_tinh_doi_kelvin(c),
        };
    }

    render(container, conceptId) {
        if (!container) return;
        container.innerHTML = '';
        container.className = 'question-visual-box';

        if (this.renderers && typeof this.renderers[conceptId] === 'function') {
            this.renderers[conceptId](container);
        } else {
            this.renderFallback(container, conceptId);
        }

        // Trigger KaTeX for any math formulas inside captions
        if (window.game && typeof window.game.renderMath === 'function') {
            window.game.renderMath(container);
        }
    }

    renderFallback(container, conceptId) {
        if (!conceptId) {
            if (this.renderers['c_u1_mo_hinh_phan_tu']) this.renderers['c_u1_mo_hinh_phan_tu'](container);
            return;
        }
        if (conceptId.startsWith('c_u1') && this.renderers['c_u1_mo_hinh_phan_tu']) {
            this.renderers['c_u1_mo_hinh_phan_tu'](container);
        } else if (conceptId.startsWith('c_u2') && this.renderers['c_u2_bieu_thuc_dl1']) {
            this.renderers['c_u2_bieu_thuc_dl1'](container);
        } else if (this.renderers['c_u3_cong_thuc_kelvin_celsius']) {
            this.renderers['c_u3_cong_thuc_kelvin_celsius'](container);
        }
    }

    // =========================================================================
    // DEDICATED DIAGRAM RENDERERS (48 CONCEPTS)
    // =========================================================================
    render_c_u1_mo_hinh_phan_tu(container) {
        container.innerHTML = `
            <div class="diagram-header">
                <div class="diagram-title"><span>🔬</span><span>Mô Hình Động Học Phân Tử</span></div>
                <div class="diagram-badge">Bài 1 - Cấu Trúc Chất</div>
            </div>
            <div class="diagram-graphic-wrap">
                <svg viewBox="0 0 580 180" xmlns="http://www.w3.org/2000/svg">
                    <rect width="580" height="180" rx="12" fill="#0F172A" stroke="#334155"/>
                    <rect x="20" y="20" width="540" height="140" rx="8" fill="#1E293B" stroke="#0284C7" stroke-dasharray="4,4"/>
                    <!-- Molecules with random velocity vectors -->
                    <g fill="#38BDF8" stroke="#E0F2FE" stroke-width="1.5">
                        <circle cx="80" cy="60" r="10"/><path d="M 80 60 L 115 45" stroke="#F43F5E" stroke-width="2" marker-end="url(#arrRed)"/>
                        <circle cx="160" cy="110" r="10"/><path d="M 160 110 L 130 140" stroke="#F43F5E" stroke-width="2"/>
                        <circle cx="230" cy="50" r="10"/><path d="M 230 50 L 265 75" stroke="#F43F5E" stroke-width="2"/>
                        <circle cx="290" cy="120" r="10"/><path d="M 290 120 L 325 95" stroke="#F43F5E" stroke-width="2"/>
                        <circle cx="370" cy="70" r="10"/><path d="M 370 70 L 345 40" stroke="#F43F5E" stroke-width="2"/>
                        <circle cx="440" cy="115" r="10"/><path d="M 440 115 L 480 125" stroke="#F43F5E" stroke-width="2"/>
                        <circle cx="500" cy="55" r="10"/><path d="M 500 55 L 470 75" stroke="#F43F5E" stroke-width="2"/>
                    </g>
                    <text x="290" y="150" fill="#38BDF8" font-size="13" font-weight="700" text-anchor="middle">Các phân tử chuyển động nhiệt hỗn loạn không ngừng theo mọi phương</text>
                </svg>
            </div>
            <div class="diagram-caption"><strong>Ghi nhớ:</strong> Các chất được cấu tạo từ các hạt riêng biệt (nguyên tử, phân tử) luôn chuyển động nhiệt hỗn loạn không ngừng.</div>
        `;
    }

    render_c_u1_nhiet_do_chuyen_dong(container) {
        container.innerHTML = `
            <div class="diagram-header">
                <div class="diagram-title"><span>🔥</span><span>Mối Liên Hệ Nhiệt Độ & Tốc Độ Phân Tử</span></div>
                <div class="diagram-badge">Bài 1 - Chuyển Động Nhiệt</div>
            </div>
            <div class="diagram-graphic-wrap">
                <svg viewBox="0 0 580 180" xmlns="http://www.w3.org/2000/svg">
                    <rect width="580" height="180" rx="12" fill="#0F172A" stroke="#334155"/>
                    <!-- Left: Cold -->
                    <rect x="25" y="25" width="250" height="110" rx="8" fill="#1E293B" stroke="#0284C7"/>
                    <text x="150" y="45" fill="#38BDF8" font-size="12" font-weight="700" text-anchor="middle">Nhiệt độ thấp (T1) — Chuyển động chậm</text>
                    <circle cx="70" cy="85" r="8" fill="#38BDF8"/><line x1="70" y1="85" x2="85" y2="78" stroke="#38BDF8" stroke-width="2"/>
                    <circle cx="150" cy="95" r="8" fill="#38BDF8"/><line x1="150" y1="95" x2="162" y2="105" stroke="#38BDF8" stroke-width="2"/>
                    <circle cx="220" cy="75" r="8" fill="#38BDF8"/><line x1="220" y1="75" x2="208" y2="85" stroke="#38BDF8" stroke-width="2"/>
                    <text x="150" y="125" fill="#94A3B8" font-size="11" text-anchor="middle">Vận tốc v nhỏ, ít va chạm</text>
                    <!-- Right: Hot -->
                    <rect x="305" y="25" width="250" height="110" rx="8" fill="#1E293B" stroke="#F59E0B"/>
                    <text x="430" y="45" fill="#FBBF24" font-size="12" font-weight="700" text-anchor="middle">Nhiệt độ cao (T2 > T1) — Chuyển động nhanh</text>
                    <circle cx="350" cy="85" r="8" fill="#F43F5E"/><line x1="350" y1="85" x2="385" y2="70" stroke="#F43F5E" stroke-width="3"/>
                    <circle cx="430" cy="95" r="8" fill="#F43F5E"/><line x1="430" y1="95" x2="400" y2="120" stroke="#F43F5E" stroke-width="3"/>
                    <circle cx="500" cy="75" r="8" fill="#F43F5E"/><line x1="500" y1="75" x2="535" y2="90" stroke="#F43F5E" stroke-width="3"/>
                    <text x="430" y="125" fill="#FCA5A5" font-size="11" text-anchor="middle">Vận tốc v lớn, va chạm dữ dội</text>
                    <text x="290" y="162" fill="#E2E8F0" font-size="13" font-weight="600" text-anchor="middle">Nhiệt độ T càng cao ➔ Vận tốc phân tử v càng lớn</text>
                </svg>
            </div>
            <div class="diagram-caption"><strong>Ghi nhớ:</strong> Nhiệt độ của vật càng cao thì tốc độ chuyển động nhiệt hỗn loạn của các phân tử cấu tạo nên vật càng lớn.</div>
        `;
    }

    render_c_u1_chuyen_dong_brown(container) {
        container.innerHTML = `
            <div class="diagram-header">
                <div class="diagram-title"><span>🔎</span><span>Thí Nghiệm Chuyển Động Brown (1827)</span></div>
                <div class="diagram-badge">Bài 1 - Thực Nghiệm</div>
            </div>
            <div class="diagram-graphic-wrap">
                <svg viewBox="0 0 580 180" xmlns="http://www.w3.org/2000/svg">
                    <rect width="580" height="180" rx="12" fill="#0F172A" stroke="#334155"/>
                    <!-- Pollen Grain -->
                    <circle cx="290" cy="90" r="28" fill="#F59E0B" stroke="#FDE68A" stroke-width="2"/>
                    <text x="290" y="94" fill="#1E293B" font-size="10" font-weight="800" text-anchor="middle">HẠT PHẤN HOA</text>
                    <!-- Water Molecules bombarding -->
                    <circle cx="210" cy="65" r="6" fill="#38BDF8"/><line x1="216" y1="68" x2="262" y2="82" stroke="#38BDF8" stroke-width="2" stroke-dasharray="2,2"/>
                    <circle cx="230" cy="130" r="6" fill="#38BDF8"/><line x1="236" y1="126" x2="268" y2="105" stroke="#38BDF8" stroke-width="2" stroke-dasharray="2,2"/>
                    <circle cx="370" cy="70" r="6" fill="#38BDF8"/><line x1="364" y1="74" x2="318" y2="84" stroke="#38BDF8" stroke-width="2" stroke-dasharray="2,2"/>
                    <circle cx="355" cy="135" r="6" fill="#38BDF8"/><line x1="349" y1="130" x2="312" y2="104" stroke="#38BDF8" stroke-width="2" stroke-dasharray="2,2"/>
                    <!-- Zigzag trajectory -->
                    <path d="M 60 140 L 90 90 L 140 120 L 190 70 L 260 90" fill="none" stroke="#FBBF24" stroke-width="2" stroke-dasharray="4,3"/>
                    <text x="120" y="155" fill="#FBBF24" font-size="11" font-weight="600">Quỹ đạo zic-zắc của hạt</text>
                    <text x="460" y="90" fill="#38BDF8" font-size="12" font-weight="700">Phân tử nước</text>
                    <text x="460" y="110" fill="#94A3B8" font-size="10">Va đập bất đối xứng</text>
                    <text x="460" y="125" fill="#94A3B8" font-size="10">làm hạt dịch chuyển</text>
                </svg>
            </div>
            <div class="diagram-caption"><strong>Ghi nhớ:</strong> Chuyển động Brown chứng minh các phân tử nước chuyển động nhiệt hỗn loạn và va đập bất đối xứng vào hạt phấn hoa.</div>
        `;
    }

    render_c_u1_luc_tuong_tac(container) {
        container.innerHTML = `
            <div class="diagram-header">
                <div class="diagram-title"><span>🧲</span><span>Lực Tương Tác Giữa Hai Phân Tử</span></div>
                <div class="diagram-badge">Bài 1 - Lực Phân Tử</div>
            </div>
            <div class="diagram-graphic-wrap">
                <svg viewBox="0 0 580 180" xmlns="http://www.w3.org/2000/svg">
                    <rect width="580" height="180" rx="12" fill="#0F172A" stroke="#334155"/>
                    <!-- Molecule 1 -->
                    <circle cx="180" cy="90" r="24" fill="#0284C7" stroke="#38BDF8" stroke-width="2"/>
                    <text x="180" y="95" fill="#FFFFFF" font-size="12" font-weight="700" text-anchor="middle">Phân tử 1</text>
                    <!-- Molecule 2 -->
                    <circle cx="400" cy="90" r="24" fill="#0284C7" stroke="#38BDF8" stroke-width="2"/>
                    <text x="400" y="95" fill="#FFFFFF" font-size="12" font-weight="700" text-anchor="middle">Phân tử 2</text>
                    <!-- Attraction forces (green) -->
                    <line x1="210" y1="75" x2="270" y2="75" stroke="#10B981" stroke-width="3"/>
                    <polygon points="270,70 280,75 270,80" fill="#10B981"/>
                    <line x1="370" y1="75" x2="310" y2="75" stroke="#10B981" stroke-width="3"/>
                    <polygon points="310,70 300,75 310,80" fill="#10B981"/>
                    <text x="290" y="65" fill="#10B981" font-size="12" font-weight="700" text-anchor="middle">LỰC HÚT (F_hút)</text>
                    <!-- Repulsion forces (red) -->
                    <line x1="170" y1="120" x2="120" y2="120" stroke="#F43F5E" stroke-width="3"/>
                    <polygon points="120,115 110,120 120,125" fill="#F43F5E"/>
                    <line x1="410" y1="120" x2="460" y2="120" stroke="#F43F5E" stroke-width="3"/>
                    <polygon points="460,115 470,120 460,125" fill="#F43F5E"/>
                    <text x="290" y="135" fill="#F43F5E" font-size="12" font-weight="700" text-anchor="middle">LỰC ĐẨY (F_đẩy)</text>
                    <text x="290" y="165" fill="#E2E8F0" font-size="12" text-anchor="middle">Luôn tồn tại đồng thời cả lực hút và lực đẩy giữa các phân tử</text>
                </svg>
            </div>
            <div class="diagram-caption"><strong>Ghi nhớ:</strong> Giữa các phân tử luôn tồn tại đồng thời cả lực hút và lực đẩy phân tử.</div>
        `;
    }

    render_c_u1_luc_tuong_tac_khoang_cach(container) {
        container.innerHTML = `
            <div class="diagram-header">
                <div class="diagram-title"><span>📏</span><span>Khoảng Cách Phân Tử & Tính Khó Nén</span></div>
                <div class="diagram-badge">Bài 1 - Lực Tương Tác</div>
            </div>
            <div class="diagram-graphic-wrap">
                <svg viewBox="0 0 580 180" xmlns="http://www.w3.org/2000/svg">
                    <rect width="580" height="180" rx="12" fill="#0F172A" stroke="#334155"/>
                    <!-- 3 zones -->
                    <rect x="30" y="30" width="160" height="105" rx="6" fill="#1E293B" stroke="#F43F5E"/>
                    <text x="110" y="55" fill="#F87171" font-size="12" font-weight="700" text-anchor="middle">r < r0 (Rất gần)</text>
                    <text x="110" y="80" fill="#FCA5A5" font-size="13" font-weight="800" text-anchor="middle">Lực ĐẨY chiếm ưu thế</text>
                    <text x="110" y="110" fill="#E2E8F0" font-size="11" text-anchor="middle">➔ Rất khó nén chất</text>

                    <rect x="210" y="30" width="160" height="105" rx="6" fill="#1E293B" stroke="#F59E0B"/>
                    <text x="290" y="55" fill="#FBBF24" font-size="12" font-weight="700" text-anchor="middle">r = r0 (Cân bằng)</text>
                    <text x="290" y="80" fill="#FDE68A" font-size="13" font-weight="800" text-anchor="middle">Hợp lực F = 0</text>
                    <text x="290" y="110" fill="#E2E8F0" font-size="11" text-anchor="middle">➔ Vị trí cân bằng</text>

                    <rect x="390" y="30" width="160" height="105" rx="6" fill="#1E293B" stroke="#10B981"/>
                    <text x="470" y="55" fill="#34D399" font-size="12" font-weight="700" text-anchor="middle">r > r0 (Xa nhau)</text>
                    <text x="470" y="80" fill="#6EE7B7" font-size="13" font-weight="800" text-anchor="middle">Lực HÚT chiếm ưu thế</text>
                    <text x="470" y="110" fill="#E2E8F0" font-size="11" text-anchor="middle">➔ Giữ các phân tử lại</text>
                    <text x="290" y="160" fill="#94A3B8" font-size="12" text-anchor="middle">Khi r rất lớn (r >> r0), lực tương tác coi như không đáng kể</text>
                </svg>
            </div>
            <div class="diagram-caption"><strong>Ghi nhớ:</strong> Khi khoảng cách $r < r_0$, lực đẩy chiếm ưu thế giải thích vì sao chất rắn và chất lỏng rất khó bị nén lại.</div>
        `;
    }

    render_c_u1_khoang_cach_phan_tu(container) {
        container.innerHTML = `
            <div class="diagram-header">
                <div class="diagram-title"><span>🌌</span><span>Khoảng Cách Phân Tử Ở 3 Thể</span></div>
                <div class="diagram-badge">Bài 1 - Cấu Trúc Chất</div>
            </div>
            <div class="diagram-graphic-wrap">
                <svg viewBox="0 0 580 180" xmlns="http://www.w3.org/2000/svg">
                    <rect width="580" height="180" rx="12" fill="#0F172A" stroke="#334155"/>
                    <!-- Solid box -->
                    <rect x="25" y="25" width="160" height="110" rx="8" fill="#1E293B" stroke="#0284C7"/>
                    <text x="105" y="45" fill="#38BDF8" font-size="12" font-weight="700" text-anchor="middle">THỂ RẮN</text>
                    <g fill="#38BDF8">
                        <circle cx="65" cy="70" r="8"/><circle cx="85" cy="70" r="8"/><circle cx="105" cy="70" r="8"/><circle cx="125" cy="70" r="8"/>
                        <circle cx="65" cy="90" r="8"/><circle cx="85" cy="90" r="8"/><circle cx="105" cy="90" r="8"/><circle cx="125" cy="90" r="8"/>
                    </g>
                    <text x="105" y="120" fill="#94A3B8" font-size="10.5" text-anchor="middle">Khoảng cách rất nhỏ</text>
                    <!-- Liquid box -->
                    <rect x="210" y="25" width="160" height="110" rx="8" fill="#1E293B" stroke="#F59E0B"/>
                    <text x="290" y="45" fill="#FBBF24" font-size="12" font-weight="700" text-anchor="middle">THỂ LỎNG</text>
                    <g fill="#FBBF24">
                        <circle cx="245" cy="75" r="8"/><circle cx="275" cy="70" r="8"/><circle cx="310" cy="78" r="8"/><circle cx="335" cy="72" r="8"/>
                        <circle cx="255" cy="98" r="8"/><circle cx="290" cy="95" r="8"/><circle cx="325" cy="98" r="8"/>
                    </g>
                    <text x="290" y="120" fill="#94A3B8" font-size="10.5" text-anchor="middle">Khoảng cách gần nhau</text>
                    <!-- Gas box -->
                    <rect x="395" y="25" width="160" height="110" rx="8" fill="#1E293B" stroke="#10B981"/>
                    <text x="475" y="45" fill="#34D399" font-size="12" font-weight="700" text-anchor="middle">THỂ KHÍ</text>
                    <g fill="#34D399">
                        <circle cx="430" cy="65" r="7"/><circle cx="520" cy="80" r="7"/><circle cx="475" cy="100" r="7"/>
                    </g>
                    <text x="475" y="120" fill="#34D399" font-size="10.5" font-weight="700" text-anchor="middle">Khoảng cách rất lớn (>> d0)</text>
                    <text x="290" y="160" fill="#E2E8F0" font-size="12" text-anchor="middle">Khoảng cách phân tử thể khí gấp hàng chục lần kích thước phân tử</text>
                </svg>
            </div>
            <div class="diagram-caption"><strong>Ghi nhớ:</strong> Ở thể khí, khoảng cách giữa các phân tử rất lớn so với thể rắn và lỏng, do đó lực tương tác phân tử rất yếu.</div>
        `;
    }

    render_c_u1_dac_diem_the_chat(container) {
        container.innerHTML = `
            <div class="diagram-header">
                <div class="diagram-title"><span>📦</span><span>Đặc Điểm Thể Tích & Hình Dạng</span></div>
                <div class="diagram-badge">Bài 1 - Thể Vật Chất</div>
            </div>
            <div class="diagram-graphic-wrap">
                <svg viewBox="0 0 580 180" xmlns="http://www.w3.org/2000/svg">
                    <rect width="580" height="180" rx="12" fill="#0F172A" stroke="#334155"/>
                    <!-- Solid block -->
                    <rect x="50" y="50" width="80" height="60" rx="4" fill="#0284C7" stroke="#38BDF8" stroke-width="2"/>
                    <text x="90" y="130" fill="#38BDF8" font-size="12" font-weight="700" text-anchor="middle">THỂ RẮN</text>
                    <text x="90" y="145" fill="#94A3B8" font-size="10" text-anchor="middle">Hình dạng xác định</text>
                    <text x="90" y="158" fill="#94A3B8" font-size="10" text-anchor="middle">Thể tích xác định</text>
                    <!-- Liquid beaker -->
                    <path d="M 240 50 L 240 110 Q 280 120 320 110 L 320 50 Z" fill="#F59E0B" fill-opacity="0.3" stroke="#FBBF24" stroke-width="2"/>
                    <path d="M 242 75 Q 280 82 318 75 L 318 108 Q 280 118 242 108 Z" fill="#F59E0B" fill-opacity="0.8"/>
                    <text x="280" y="130" fill="#FBBF24" font-size="12" font-weight="700" text-anchor="middle">THỂ LỎNG</text>
                    <text x="280" y="145" fill="#94A3B8" font-size="10" text-anchor="middle">Hình dạng của bình chứa</text>
                    <text x="280" y="158" fill="#94A3B8" font-size="10" text-anchor="middle">Thể tích xác định</text>
                    <!-- Gas flask -->
                    <rect x="430" y="50" width="80" height="60" rx="10" fill="#1E293B" stroke="#10B981" stroke-width="2"/>
                    <circle cx="450" cy="70" r="5" fill="#34D399"/><circle cx="490" cy="65" r="5" fill="#34D399"/><circle cx="460" cy="95" r="5" fill="#34D399"/>
                    <text x="470" y="130" fill="#34D399" font-size="12" font-weight="700" text-anchor="middle">THỂ KHÍ</text>
                    <text x="470" y="145" fill="#94A3B8" font-size="10" text-anchor="middle">Không có hình dạng riêng</text>
                    <text x="470" y="158" fill="#94A3B8" font-size="10" text-anchor="middle">Chiếm toàn bộ bình</text>
                </svg>
            </div>
            <div class="diagram-caption"><strong>Ghi nhớ:</strong> Chất rắn có hình dạng và thể tích riêng xác định; chất lỏng có thể tích xác định; chất khí chiếm toàn bộ bình chứa.</div>
        `;
    }

    render_c_u1_chat_ran_tinh_the(container) {
        container.innerHTML = `
            <div class="diagram-header">
                <div class="diagram-title"><span>💎</span><span>Chất Rắn Kết Tinh vs Vô Định Hình</span></div>
                <div class="diagram-badge">Bài 1 - Phân Loại Chất Rắn</div>
            </div>
            <div class="diagram-graphic-wrap">
                <svg viewBox="0 0 580 180" xmlns="http://www.w3.org/2000/svg">
                    <rect width="580" height="180" rx="12" fill="#0F172A" stroke="#334155"/>
                    <!-- Crystal lattice -->
                    <rect x="30" y="25" width="240" height="110" rx="8" fill="#1E293B" stroke="#0284C7"/>
                    <text x="150" y="45" fill="#38BDF8" font-size="12" font-weight="700" text-anchor="middle">CHẤT RẮN KẾT TINH (Muối ăn, thạch anh)</text>
                    <!-- Grid of ions -->
                    <g stroke="#0284C7" stroke-width="1">
                        <line x1="80" y1="65" x2="220" y2="65"/><line x1="80" y1="85" x2="220" y2="85"/><line x1="80" y1="105" x2="220" y2="105"/>
                        <line x1="100" y1="55" x2="100" y2="115"/><line x1="150" y1="55" x2="150" y2="115"/><line x1="200" y1="55" x2="200" y2="115"/>
                    </g>
                    <circle cx="100" cy="65" r="5" fill="#38BDF8"/><circle cx="150" cy="65" r="5" fill="#F43F5E"/><circle cx="200" cy="65" r="5" fill="#38BDF8"/>
                    <circle cx="100" cy="85" r="5" fill="#F43F5E"/><circle cx="150" cy="85" r="5" fill="#38BDF8"/><circle cx="200" cy="85" r="5" fill="#F43F5E"/>
                    <text x="150" y="125" fill="#38BDF8" font-size="10.5" font-weight="700" text-anchor="middle">Nhiệt độ nóng chảy XÁC ĐỊNH</text>
                    <!-- Amorphous -->
                    <rect x="310" y="25" width="240" height="110" rx="8" fill="#1E293B" stroke="#F59E0B"/>
                    <text x="430" y="45" fill="#FBBF24" font-size="12" font-weight="700" text-anchor="middle">CHẤT RẮN VÔ ĐỊNH HÌNH (Thủy tinh, nhựa)</text>
                    <g fill="#FBBF24">
                        <circle cx="360" cy="65" r="5"/><circle cx="390" cy="80" r="5"/><circle cx="430" cy="60" r="5"/>
                        <circle cx="465" cy="85" r="5"/><circle cx="410" cy="100" r="5"/><circle cx="485" cy="65" r="5"/>
                    </g>
                    <path d="M 360 65 Q 390 80 430 60 T 485 65" fill="none" stroke="#F59E0B" stroke-dasharray="2,2"/>
                    <text x="430" y="125" fill="#FBBF24" font-size="10.5" font-weight="700" text-anchor="middle">KHÔNG có nhiệt độ nóng chảy xác định</text>
                    <text x="290" y="160" fill="#E2E8F0" font-size="12" text-anchor="middle">Chất kết tinh có mạng tuần hoàn; chất vô định hình mềm dần khi đun nóng</text>
                </svg>
            </div>
            <div class="diagram-caption"><strong>Ghi nhớ:</strong> Chất rắn kết tinh có cấu trúc mạng tinh thể và $T_{nc}$ xác định; chất vô định hình không có cấu trúc tinh thể và không có $T_{nc}$ xác định.</div>
        `;
    }

    render_c_u1_di_huong_dang_huong(container) {
        container.innerHTML = `
            <div class="diagram-header">
                <div class="diagram-title"><span>🧭</span><span>Tính Dị Hướng & Đẳng Hướng</span></div>
                <div class="diagram-badge">Bài 1 - Tinh Thể</div>
            </div>
            <div class="diagram-graphic-wrap">
                <svg viewBox="0 0 580 180" xmlns="http://www.w3.org/2000/svg">
                    <rect width="580" height="180" rx="12" fill="#0F172A" stroke="#334155"/>
                    <!-- Single crystal -->
                    <rect x="30" y="25" width="240" height="110" rx="8" fill="#1E293B" stroke="#A855F7"/>
                    <text x="150" y="45" fill="#C084FC" font-size="12" font-weight="700" text-anchor="middle">ĐƠN TINH THỂ ➔ DỊ HƯỚNG</text>
                    <line x1="80" y1="80" x2="220" y2="80" stroke="#38BDF8" stroke-width="2"/>
                    <text x="150" y="75" fill="#38BDF8" font-size="10" text-anchor="middle">Hướng 1 (dọc trục)</text>
                    <line x1="100" y1="110" x2="200" y2="55" stroke="#F43F5E" stroke-width="2"/>
                    <text x="175" y="115" fill="#F43F5E" font-size="10">Hướng 2 (chéo)</text>
                    <text x="150" y="125" fill="#E2E8F0" font-size="10.5" text-anchor="middle">Tính chất vật lý khác nhau theo mỗi hướng</text>
                    <!-- Polycrystal -->
                    <rect x="310" y="25" width="240" height="110" rx="8" fill="#1E293B" stroke="#10B981"/>
                    <text x="430" y="45" fill="#34D399" font-size="12" font-weight="700" text-anchor="middle">ĐA TINH THỂ ➔ ĐẲNG HƯỚNG</text>
                    <g stroke="#334155" stroke-width="1.5">
                        <polygon points="340,60 380,55 370,85 335,80" fill="#064E3B"/>
                        <polygon points="380,55 430,60 420,95 370,85" fill="#047857"/>
                        <polygon points="430,60 480,55 490,90 420,95" fill="#065F46"/>
                        <polygon points="370,85 420,95 400,120 350,115" fill="#059669"/>
                    </g>
                    <text x="430" y="125" fill="#E2E8F0" font-size="10.5" text-anchor="middle">Vô số tinh thể con định hướng ngẫu nhiên</text>
                    <text x="290" y="160" fill="#E2E8F0" font-size="12" text-anchor="middle">Đơn tinh thể có tính dị hướng; đa tinh thể và chất vô định hình có tính đẳng hướng</text>
                </svg>
            </div>
            <div class="diagram-caption"><strong>Ghi nhớ:</strong> Đơn tinh thể có tính dị hướng; đa tinh thể và chất rắn vô định hình có tính đẳng hướng.</div>
        `;
    }

    render_c_u1_su_thang_hoa_ngung_ket(container) {
        container.innerHTML = `
            <div class="diagram-header">
                <div class="diagram-title"><span>❄️</span><span>Sơ Đồ Chuyển Thể: Thăng Hoa & Ngưng Kết</span></div>
                <div class="diagram-badge">Bài 1 - Chuyển Thể</div>
            </div>
            <div class="diagram-graphic-wrap">
                <svg viewBox="0 0 580 180" xmlns="http://www.w3.org/2000/svg">
                    <rect width="580" height="180" rx="12" fill="#0F172A" stroke="#334155"/>
                    <!-- 3 states nodes -->
                    <circle cx="120" cy="120" r="30" fill="#0284C7" stroke="#38BDF8" stroke-width="2"/>
                    <text x="120" y="125" fill="#FFFFFF" font-size="13" font-weight="800" text-anchor="middle">RẮN</text>

                    <circle cx="290" cy="40" r="30" fill="#F59E0B" stroke="#FBBF24" stroke-width="2"/>
                    <text x="290" y="45" fill="#FFFFFF" font-size="13" font-weight="800" text-anchor="middle">LỎNG</text>

                    <circle cx="460" cy="120" r="30" fill="#10B981" stroke="#34D399" stroke-width="2"/>
                    <text x="460" y="125" fill="#FFFFFF" font-size="13" font-weight="800" text-anchor="middle">KHÍ</text>

                    <!-- Thang hoa arrow (solid to gas) -->
                    <path d="M 160 110 Q 290 150 420 110" fill="none" stroke="#F43F5E" stroke-width="3"/>
                    <polygon points="420,110 410,105 412,118" fill="#F43F5E"/>
                    <text x="290" y="152" fill="#F43F5E" font-size="12" font-weight="800" text-anchor="middle">THĂNG HOA (Rắn ➔ Khí: Băng phiến, Đá khô)</text>

                    <!-- Ngung ket arrow (gas to solid) -->
                    <path d="M 420 135 Q 290 175 160 135" fill="none" stroke="#A855F7" stroke-width="3"/>
                    <polygon points="160,135 172,130 170,142" fill="#A855F7"/>
                    <text x="290" y="172" fill="#C084FC" font-size="11" font-weight="700" text-anchor="middle">NGƯNG KẾT (Khí ➔ Rắn: Sương muối)</text>
                </svg>
            </div>
            <div class="diagram-caption"><strong>Ghi nhớ:</strong> Thăng hoa là chuyển thẳng từ thể rắn sang thể khí (không qua lỏng); Ngưng kết là chuyển thẳng từ thể khí sang thể rắn.</div>
        `;
    }

    render_c_u1_hien_tuong_tuyet_tan(container) {
        container.innerHTML = `
            <div class="diagram-header">
                <div class="diagram-title"><span>☃️</span><span>Hiện Tượng Nóng Chảy: Tuyết Tan Thu Nhiệt</span></div>
                <div class="diagram-badge">Bài 1 - Nóng Chảy</div>
            </div>
            <div class="diagram-graphic-wrap">
                <svg viewBox="0 0 580 180" xmlns="http://www.w3.org/2000/svg">
                    <rect width="580" height="180" rx="12" fill="#0F172A" stroke="#334155"/>
                    <!-- Snow melting icon -->
                    <circle cx="200" cy="90" r="40" fill="#E2E8F0" stroke="#94A3B8" stroke-width="2"/>
                    <path d="M 180 120 Q 200 135 220 120 Z" fill="#38BDF8"/>
                    <text x="200" y="85" fill="#1E293B" font-size="12" font-weight="800" text-anchor="middle">KHỐI TUYẾT</text>
                    <text x="200" y="100" fill="#0284C7" font-size="10" font-weight="700" text-anchor="middle">Đang tan ở 0°C</text>
                    <!-- Heat arrows entering from air -->
                    <line x1="80" y1="50" x2="155" y2="75" stroke="#F59E0B" stroke-width="3"/>
                    <polygon points="155,75 145,70 148,80" fill="#F59E0B"/>
                    <line x1="80" y1="130" x2="155" y2="105" stroke="#F59E0B" stroke-width="3"/>
                    <polygon points="155,105 148,100 145,110" fill="#F59E0B"/>
                    <line x1="290" y1="90" x2="245" y2="90" stroke="#F59E0B" stroke-width="3"/>
                    <polygon points="245,90 255,85 255,95" fill="#F59E0B"/>
                    <text x="130" y="45" fill="#FBBF24" font-size="11" font-weight="700">Thu nhiệt Q</text>
                    <!-- Ambient air box -->
                    <rect x="330" y="45" width="220" height="90" rx="8" fill="#1E293B" stroke="#38BDF8"/>
                    <text x="440" y="70" fill="#38BDF8" font-size="13" font-weight="700" text-anchor="middle">Không khí xung quanh</text>
                    <text x="440" y="95" fill="#F87171" font-size="13" font-weight="800" text-anchor="middle">Bị mất nhiệt lượng ➔ LẠNH BUỐT</text>
                    <text x="440" y="115" fill="#94A3B8" font-size="11" text-anchor="middle">Tuyết tan lạnh hơn khi tuyết rơi</text>
                </svg>
            </div>
            <div class="diagram-caption"><strong>Ghi nhớ:</strong> Sự nóng chảy là quá trình thu nhiệt lượng từ môi trường, làm nhiệt độ không khí xung quanh giảm xuống.</div>
        `;
    }

    render_c_u1_bay_hoi_va_cac_yeu_to(container) {
        container.innerHTML = `
            <div class="diagram-header">
                <div class="diagram-title"><span>💨</span><span>Bản Chất & Các Yếu Tố Ảnh Hưởng Sự Bay Hơi</span></div>
                <div class="diagram-badge">Bài 1 - Bay Hơi</div>
            </div>
            <div class="diagram-graphic-wrap">
                <svg viewBox="0 0 580 180" xmlns="http://www.w3.org/2000/svg">
                    <rect width="580" height="180" rx="12" fill="#0F172A" stroke="#334155"/>
                    <!-- Liquid surface -->
                    <rect x="30" y="90" width="240" height="60" rx="6" fill="#0284C7" fill-opacity="0.4" stroke="#0284C7"/>
                    <text x="150" y="130" fill="#38BDF8" font-size="12" font-weight="700" text-anchor="middle">MẶT THOÁNG CHẤT LỎNG</text>
                    <!-- Escaping molecules -->
                    <circle cx="80" cy="70" r="5" fill="#38BDF8"/><path d="M 80 70 L 70 45" stroke="#38BDF8" stroke-width="2"/>
                    <circle cx="140" cy="65" r="5" fill="#38BDF8"/><path d="M 140 65 L 140 40" stroke="#38BDF8" stroke-width="2"/>
                    <circle cx="200" cy="70" r="5" fill="#38BDF8"/><path d="M 200 70 L 215 45" stroke="#38BDF8" stroke-width="2"/>
                    <text x="150" y="30" fill="#FBBF24" font-size="11" font-weight="700" text-anchor="middle">Phân tử động năng lớn bứt ra</text>
                    <!-- 4 factors box -->
                    <rect x="300" y="25" width="250" height="130" rx="8" fill="#1E293B" stroke="#334155"/>
                    <text x="425" y="45" fill="#FBBF24" font-size="12" font-weight="700" text-anchor="middle">4 YẾU TỐ TĂNG TỐC ĐỘ BAY HƠI</text>
                    <text x="320" y="70" fill="#E2E8F0" font-size="11">1. Nhiệt độ chất lỏng (T ↑)</text>
                    <text x="320" y="90" fill="#E2E8F0" font-size="11">2. Diện tích mặt thoáng (S ↑)</text>
                    <text x="320" y="110" fill="#E2E8F0" font-size="11">3. Tốc độ gió phía trên (Gió ↑)</text>
                    <text x="320" y="130" fill="#E2E8F0" font-size="11">4. Độ ẩm không khí (Độ ẩm ↓)</text>
                </svg>
            </div>
            <div class="diagram-caption"><strong>Ghi nhớ:</strong> Sự bay hơi xảy ra ở bề mặt thoáng ở mọi nhiệt độ; tốc độ bay hơi tăng khi $T$, diện tích mặt thoáng, gió tăng và độ ẩm giảm.</div>
        `;
    }

    render_c_u1_su_ngung_tu(container) {
        container.innerHTML = `
            <div class="diagram-header">
                <div class="diagram-title"><span>💧</span><span>Hiện Tượng Ngưng Tụ Hơi Nước</span></div>
                <div class="diagram-badge">Bài 1 - Ngưng Tụ</div>
            </div>
            <div class="diagram-graphic-wrap">
                <svg viewBox="0 0 580 180" xmlns="http://www.w3.org/2000/svg">
                    <rect width="580" height="180" rx="12" fill="#0F172A" stroke="#334155"/>
                    <!-- Cold Glass -->
                    <rect x="120" y="30" width="140" height="110" rx="8" fill="#0284C7" fill-opacity="0.3" stroke="#38BDF8" stroke-width="2"/>
                    <text x="190" y="75" fill="#FFFFFF" font-size="13" font-weight="800" text-anchor="middle">CỐC NƯỚC ĐÁ</text>
                    <text x="190" y="95" fill="#38BDF8" font-size="11" text-anchor="middle">(Thành cốc lạnh 0°C)</text>
                    <!-- Droplets condensing on outer wall -->
                    <circle cx="115" cy="50" r="4" fill="#38BDF8"/><circle cx="115" cy="75" r="5" fill="#38BDF8"/><circle cx="115" cy="100" r="4" fill="#38BDF8"/>
                    <circle cx="265" cy="60" r="5" fill="#38BDF8"/><circle cx="265" cy="85" r="4" fill="#38BDF8"/><circle cx="265" cy="110" r="5" fill="#38BDF8"/>
                    <!-- Water vapor arriving from air -->
                    <g fill="#94A3B8">
                        <circle cx="50" cy="50" r="4"/><path d="M 55 50 L 95 55" stroke="#94A3B8" stroke-dasharray="2,2"/>
                        <circle cx="50" cy="95" r="4"/><path d="M 55 95 L 95 90" stroke="#94A3B8" stroke-dasharray="2,2"/>
                        <circle cx="330" cy="65" r="4"/><path d="M 325 65 L 285 70" stroke="#94A3B8" stroke-dasharray="2,2"/>
                        <circle cx="330" cy="105" r="4"/><path d="M 325 105 L 285 100" stroke="#94A3B8" stroke-dasharray="2,2"/>
                    </g>
                    <!-- Explanation box -->
                    <rect x="370" y="40" width="180" height="90" rx="8" fill="#1E293B" stroke="#F59E0B"/>
                    <text x="460" y="65" fill="#FBBF24" font-size="12" font-weight="700" text-anchor="middle">Hơi nước trong không khí</text>
                    <text x="460" y="85" fill="#E2E8F0" font-size="11" text-anchor="middle">Gặp thành cốc lạnh 0°C</text>
                    <text x="460" y="105" fill="#38BDF8" font-size="12" font-weight="800" text-anchor="middle">Ngưng tụ thành giọt lỏng</text>
                    <text x="290" y="165" fill="#E2E8F0" font-size="12" text-anchor="middle">Sự ngưng tụ là quá trình khí hóa lỏng khi giảm nhiệt độ, quá trình này tỏa nhiệt</text>
                </svg>
            </div>
            <div class="diagram-caption"><strong>Ghi nhớ:</strong> Sự ngưng tụ là quá trình chuyển từ thể khí sang thể lỏng khi gặp lạnh, quá trình này tỏa nhiệt lượng.</div>
        `;
    }

    render_c_u1_noi_ap_suat(container) {
        container.innerHTML = `
            <div class="diagram-header">
                <div class="diagram-title"><span>🍲</span><span>Sự Sôi & Nguyên Lý Nồi Áp Suất</span></div>
                <div class="diagram-badge">Bài 1 - Sự Sôi</div>
            </div>
            <div class="diagram-graphic-wrap">
                <svg viewBox="0 0 580 180" xmlns="http://www.w3.org/2000/svg">
                    <rect width="580" height="180" rx="12" fill="#0F172A" stroke="#334155"/>
                    <!-- Pressure Cooker Pot -->
                    <rect x="60" y="45" width="160" height="95" rx="12" fill="#334155" stroke="#94A3B8" stroke-width="2"/>
                    <rect x="50" y="35" width="180" height="14" rx="4" fill="#64748B"/>
                    <!-- Water inside pot -->
                    <rect x="65" y="85" width="150" height="50" rx="4" fill="#0284C7" fill-opacity="0.6"/>
                    <!-- Boiling bubbles -->
                    <circle cx="100" cy="115" r="4" fill="#E0F2FE"/><circle cx="140" cy="105" r="5" fill="#E0F2FE"/><circle cx="170" cy="95" r="6" fill="#E0F2FE"/>
                    <!-- Pressure gauge on top -->
                    <circle cx="140" cy="20" r="14" fill="#1E293B" stroke="#F43F5E" stroke-width="2"/>
                    <line x1="140" y1="20" x2="148" y2="12" stroke="#F43F5E" stroke-width="2"/>
                    <text x="140" y="55" fill="#FDE047" font-size="9" font-weight="700" text-anchor="middle">HƠI NƯỚC KÍN p ≈ 2 atm</text>
                    <!-- Explanation boxes -->
                    <rect x="270" y="35" width="280" height="110" rx="8" fill="#1E293B" stroke="#0284C7"/>
                    <text x="410" y="58" fill="#38BDF8" font-size="12.5" font-weight="700" text-anchor="middle">TĂNG ÁP SUẤT ➔ TĂNG NHIỆT ĐỘ SÔI</text>
                    <text x="290" y="82" fill="#E2E8F0" font-size="11.5">• Nồi thường (1 atm): Nước sôi ở 100°C</text>
                    <text x="290" y="104" fill="#FBBF24" font-size="11.5" font-weight="700">• Nồi áp suất (2 atm): Nước sôi ở ~120°C</text>
                    <text x="290" y="126" fill="#34D399" font-size="11">➔ Nhiệt độ cao giúp thức ăn nhừ nhanh gấp 3-4 lần</text>
                </svg>
            </div>
            <div class="diagram-caption"><strong>Ghi nhớ:</strong> Áp suất trên mặt thoáng càng cao thì nhiệt độ sôi càng cao; nồi áp suất làm tăng nhiệt độ sôi lên khoảng $120^\\circ	ext{C}$ giúp nấu chín nhanh.</div>
        `;
    }

    render_c_u1_chuyen_the_nuoc(container) {
        container.innerHTML = `
            <div class="diagram-header">
                <div class="diagram-title"><span>📈</span><span>Đồ Thị Nhiệt Độ Chuyển Thể Của Nước</span></div>
                <div class="diagram-badge">Bài 1 - Đồ Thị Chuyển Thể</div>
            </div>
            <div class="diagram-graphic-wrap">
                <svg viewBox="0 0 580 180" xmlns="http://www.w3.org/2000/svg">
                    <rect width="580" height="180" rx="12" fill="#0F172A" stroke="#334155"/>
                    <line x1="60" y1="150" x2="540" y2="150" stroke="#94A3B8" stroke-width="2"/>
                    <line x1="60" y1="150" x2="60" y2="20" stroke="#94A3B8" stroke-width="2"/>
                    <text x="540" y="165" fill="#94A3B8" font-size="11" text-anchor="end">Thời gian t</text>
                    <text x="45" y="25" fill="#94A3B8" font-size="11">T(°C)</text>
                    <!-- Landmarks -->
                    <line x1="55" y1="120" x2="540" y2="120" stroke="#334155" stroke-dasharray="2,2"/>
                    <text x="50" y="124" fill="#38BDF8" font-size="11" text-anchor="end">0°C</text>
                    <line x1="55" y1="60" x2="540" y2="60" stroke="#334155" stroke-dasharray="2,2"/>
                    <text x="50" y="64" fill="#F43F5E" font-size="11" text-anchor="end">100°C</text>
                    <!-- Curve -->
                    <path d="M 60 145 L 120 120 L 220 120 L 340 60 L 440 60 L 510 30" fill="none" stroke="#FBBF24" stroke-width="3"/>
                    <!-- Flat Plateaus -->
                    <text x="170" y="112" fill="#38BDF8" font-size="10.5" font-weight="700" text-anchor="middle">T = 0°C (Đang tan)</text>
                    <text x="390" y="52" fill="#F43F5E" font-size="10.5" font-weight="700" text-anchor="middle">T = 100°C (Đang sôi)</text>
                    <text x="280" y="95" fill="#10B981" font-size="10" text-anchor="middle">Nước lỏng ấm lên</text>
                </svg>
            </div>
            <div class="diagram-caption"><strong>Ghi nhớ:</strong> Trong suốt quá trình nóng chảy ($0^\\circ	ext{C}$) và sôi ($100^\\circ	ext{C}$) của chất tinh khiết, nhiệt độ luôn giữ không đổi (đoạn nằm ngang).</div>
        `;
    }

    render_c_u1_bay_hoi_va_soi(container) {
        container.innerHTML = `
            <div class="diagram-header">
                <div class="diagram-title"><span>⚖️</span><span>Phân Biệt Toàn Diện: Bay Hơi & Sôi</span></div>
                <div class="diagram-badge">Bài 1 - So Sánh</div>
            </div>
            <div class="diagram-graphic-wrap">
                <svg viewBox="0 0 580 180" xmlns="http://www.w3.org/2000/svg">
                    <rect width="580" height="180" rx="12" fill="#0F172A" stroke="#334155"/>
                    <!-- Column 1: Bay hoi -->
                    <rect x="25" y="25" width="250" height="120" rx="8" fill="#1E293B" stroke="#0284C7"/>
                    <text x="150" y="48" fill="#38BDF8" font-size="13" font-weight="700" text-anchor="middle">SỰ BAY HƠI</text>
                    <text x="40" y="75" fill="#E2E8F0" font-size="11.5">• Vị trí: <strong style="color:#38BDF8">Chỉ xảy ra ở mặt thoáng</strong></text>
                    <text x="40" y="98" fill="#E2E8F0" font-size="11.5">• Nhiệt độ: <strong style="color:#FBBF24">Xảy ra ở MỌI nhiệt độ</strong></text>
                    <text x="40" y="121" fill="#E2E8F0" font-size="11.5">• Đặc điểm: Không có bọt khí trong lòng</text>
                    <!-- Column 2: Soi -->
                    <rect x="305" y="25" width="250" height="120" rx="8" fill="#1E293B" stroke="#F43F5E"/>
                    <text x="430" y="48" fill="#F87171" font-size="13" font-weight="700" text-anchor="middle">SỰ SÔI</text>
                    <text x="320" y="75" fill="#E2E8F0" font-size="11.5">• Vị trí: <strong style="color:#F87171">Cả bề mặt & Trong lòng chất lỏng</strong></text>
                    <text x="320" y="98" fill="#E2E8F0" font-size="11.5">• Nhiệt độ: <strong style="color:#FBBF24">Chỉ ở nhiệt độ sôi xác định</strong></text>
                    <text x="320" y="121" fill="#E2E8F0" font-size="11.5">• Đặc điểm: Bọt khí vỡ ra mãnh liệt</text>
                    <text x="290" y="165" fill="#94A3B8" font-size="12" text-anchor="middle">Sôi là trường hợp bay hơi đặc biệt xảy ra đồng thời ở bề mặt và trong lòng chất lỏng</text>
                </svg>
            </div>
            <div class="diagram-caption"><strong>Ghi nhớ:</strong> Bay hơi xảy ra ở mọi nhiệt độ trên mặt thoáng; Sôi là quá trình bay hơi xảy ra ở cả bề mặt và lòng chất lỏng ở nhiệt độ sôi xác định.</div>
        `;
    }

    render_c_u2_dinh_nghia_noi_nang(container) {
        container.innerHTML = `
            <div class="diagram-header">
                <div class="diagram-title"><span>⚛️</span><span>Định Nghĩa Nội Năng Của Vật</span></div>
                <div class="diagram-badge">Bài 2 - Nội Năng</div>
            </div>
            <div class="diagram-graphic-wrap">
                <svg viewBox="0 0 580 180" xmlns="http://www.w3.org/2000/svg">
                    <rect width="580" height="180" rx="12" fill="#0F172A" stroke="#334155"/>
                    <!-- U = Ed + Ett formula box -->
                    <rect x="30" y="30" width="520" height="120" rx="8" fill="#1E293B" stroke="#0284C7"/>
                    <text x="290" y="60" fill="#38BDF8" font-size="18" font-weight="800" text-anchor="middle">U = E_đ + E_tt</text>
                    <!-- Left: Ed -->
                    <rect x="50" y="75" width="220" height="60" rx="6" fill="#0F172A" stroke="#38BDF8"/>
                    <text x="160" y="98" fill="#7DD3FC" font-size="13" font-weight="700" text-anchor="middle">E_đ: Tổng Động Năng Phân Tử</text>
                    <text x="160" y="118" fill="#94A3B8" font-size="11" text-anchor="middle">(Do chuyển động nhiệt hỗn loạn)</text>
                    <!-- Plus sign -->
                    <text x="290" y="112" fill="#FBBF24" font-size="20" font-weight="800" text-anchor="middle">+</text>
                    <!-- Right: Ett -->
                    <rect x="310" y="75" width="220" height="60" rx="6" fill="#0F172A" stroke="#F59E0B"/>
                    <text x="420" y="98" fill="#FDE68A" font-size="13" font-weight="700" text-anchor="middle">E_tt: Tổng Thế Năng Tương Tác</text>
                    <text x="420" y="118" fill="#94A3B8" font-size="11" text-anchor="middle">(Do lực tương tác giữa các phân tử)</text>
                    <text x="290" y="165" fill="#E2E8F0" font-size="12" text-anchor="middle">Nội năng là năng lượng bên trong vật, hoàn toàn khác cơ năng vĩ mô</text>
                </svg>
            </div>
            <div class="diagram-caption"><strong>Ghi nhớ:</strong> Nội năng ($U$) là tổng động năng chuyển động nhiệt của các phân tử và thế năng tương tác giữa chúng: $U = E_đ + E_{tt}$.</div>
        `;
    }

    render_c_u2_phu_thuoc_noi_nang(container) {
        container.innerHTML = `
            <div class="diagram-header">
                <div class="diagram-title"><span>📊</span><span>Sự Phụ Thuộc Của Nội Năng U = f(T, V)</span></div>
                <div class="diagram-badge">Bài 2 - Thông Số Nội Năng</div>
            </div>
            <div class="diagram-graphic-wrap">
                <svg viewBox="0 0 580 180" xmlns="http://www.w3.org/2000/svg">
                    <rect width="580" height="180" rx="12" fill="#0F172A" stroke="#334155"/>
                    <rect x="40" y="25" width="230" height="110" rx="8" fill="#1E293B" stroke="#F43F5E"/>
                    <text x="155" y="52" fill="#F87171" font-size="14" font-weight="700" text-anchor="middle">Nhiệt Độ (T)</text>
                    <line x1="80" y1="65" x2="230" y2="65" stroke="#F43F5E" stroke-width="1.5"/>
                    <text x="155" y="85" fill="#E2E8F0" font-size="12" text-anchor="middle">T quyết định tốc độ phân tử</text>
                    <text x="155" y="105" fill="#FCA5A5" font-size="12" font-weight="700" text-anchor="middle">➔ Quyết định ĐỘNG NĂNG E_đ</text>

                    <rect x="310" y="25" width="230" height="110" rx="8" fill="#1E293B" stroke="#0284C7"/>
                    <text x="425" y="52" fill="#38BDF8" font-size="14" font-weight="700" text-anchor="middle">Thể Tích (V)</text>
                    <line x1="350" y1="65" x2="500" y2="65" stroke="#0284C7" stroke-width="1.5"/>
                    <text x="425" y="85" fill="#E2E8F0" font-size="12" text-anchor="middle">V quyết định khoảng cách phân tử</text>
                    <text x="425" y="105" fill="#7DD3FC" font-size="12" font-weight="700" text-anchor="middle">➔ Quyết định THẾ NĂNG E_tt</text>
                    <text x="290" y="160" fill="#FBBF24" font-size="14" font-weight="800" text-anchor="middle">KẾT LUẬN: Nội năng của một lượng chất U = f(T, V)</text>
                </svg>
            </div>
            <div class="diagram-caption"><strong>Ghi nhớ:</strong> Nội năng của chất thực phụ thuộc vào nhiệt độ $T$ (ảnh hưởng động năng) và thể tích $V$ (ảnh hưởng thế năng tương tác).</div>
        `;
    }

    render_c_u2_khi_ly_tuong_noi_nang(container) {
        container.innerHTML = `
            <div class="diagram-header">
                <div class="diagram-title"><span>🎈</span><span>Nội Năng Khí Lý Tưởng U = f(T)</span></div>
                <div class="diagram-badge">Bài 2 - Khí Lý Tưởng</div>
            </div>
            <div class="diagram-graphic-wrap">
                <svg viewBox="0 0 580 180" xmlns="http://www.w3.org/2000/svg">
                    <rect width="580" height="180" rx="12" fill="#0F172A" stroke="#334155"/>
                    <rect x="30" y="25" width="520" height="120" rx="8" fill="#1E293B" stroke="#10B981"/>
                    <text x="290" y="55" fill="#34D399" font-size="15" font-weight="800" text-anchor="middle">MÔ HÌNH KHÍ LÝ TƯỞNG</text>
                    <text x="290" y="80" fill="#E2E8F0" font-size="12.5" text-anchor="middle">• Phân tử là chất điểm, bỏ qua lực tương tác từ xa ➔ <strong style="color:#FBBF24">Thế năng E_tt = 0</strong></text>
                    <text x="290" y="105" fill="#E2E8F0" font-size="12.5" text-anchor="middle">• Nội năng chỉ gồm tổng động năng phân tử ➔ <strong style="color:#38BDF8">U = E_đ</strong></text>
                    <rect x="180" y="115" width="220" height="25" rx="4" fill="#064E3B" stroke="#34D399"/>
                    <text x="290" y="132" fill="#A7F3D0" font-size="12" font-weight="700" text-anchor="middle">Nội năng khí lý tưởng CHỈ phụ thuộc T</text>
                    <text x="290" y="165" fill="#94A3B8" font-size="12" text-anchor="middle">Khi nhiệt độ không đổi (T = const), nội năng khí lý tưởng không đổi (ΔU = 0)</text>
                </svg>
            </div>
            <div class="diagram-caption"><strong>Ghi nhớ:</strong> Vì bỏ qua tương tác giữa các phân tử khi không va chạm ($E_{tt} = 0$), nội năng của khí lý tưởng chỉ phụ thuộc vào nhiệt độ: $U = f(T)$.</div>
        `;
    }

    render_c_u2_cac_cach_doi_noi_nang(container) {
        container.innerHTML = `
            <div class="diagram-header">
                <div class="diagram-title"><span>🛠️</span><span>Hai Cách Làm Biến Đổi Nội Năng</span></div>
                <div class="diagram-badge">Bài 2 - Biến Đổi Nội Năng</div>
            </div>
            <div class="diagram-graphic-wrap">
                <svg viewBox="0 0 580 180" xmlns="http://www.w3.org/2000/svg">
                    <rect width="580" height="180" rx="12" fill="#0F172A" stroke="#334155"/>
                    <!-- Method 1: Work -->
                    <rect x="30" y="25" width="240" height="110" rx="8" fill="#1E293B" stroke="#0284C7"/>
                    <text x="150" y="50" fill="#38BDF8" font-size="13" font-weight="800" text-anchor="middle">1. THỰC HIỆN CÔNG (A)</text>
                    <text x="50" y="75" fill="#E2E8F0" font-size="11.5">• Có ngoại lực cơ học tác dụng</text>
                    <text x="50" y="95" fill="#FBBF24" font-size="11.5">• Có sự CHUYỂN HÓA năng lượng:</text>
                    <text x="150" y="118" fill="#38BDF8" font-size="12" font-weight="700" text-anchor="middle">Cơ năng ➔ Nội năng</text>
                    <!-- Method 2: Heat -->
                    <rect x="310" y="25" width="240" height="110" rx="8" fill="#1E293B" stroke="#F59E0B"/>
                    <text x="430" y="50" fill="#FBBF24" font-size="13" font-weight="800" text-anchor="middle">2. TRUYỀN NHIỆT (Q)</text>
                    <text x="330" y="75" fill="#E2E8F0" font-size="11.5">• Không có ngoại lực cơ học</text>
                    <text x="330" y="95" fill="#34D399" font-size="11.5">• KHÔNG chuyển hóa dạng năng lượng:</text>
                    <text x="430" y="118" fill="#FBBF24" font-size="12" font-weight="700" text-anchor="middle">Nội năng (vật 1) ➔ Nội năng (vật 2)</text>
                    <text x="290" y="160" fill="#E2E8F0" font-size="12" text-anchor="middle">Cọ xát hoặc nén khí = Thực hiện công; Đun nóng hoặc thả vào nước = Truyền nhiệt</text>
                </svg>
            </div>
            <div class="diagram-caption"><strong>Ghi nhớ:</strong> Thực hiện công có sự chuyển hóa cơ năng thành nội năng; Truyền nhiệt chỉ có sự trao đổi nội năng giữa hai vật.</div>
        `;
    }

    render_c_u2_ban_chat_nhiet_luong(container) {
        container.innerHTML = `
            <div class="diagram-header">
                <div class="diagram-title"><span>🔥</span><span>Bản Chất Của Nhiệt Lượng (Q)</span></div>
                <div class="diagram-badge">Bài 2 - Nhiệt Lượng</div>
            </div>
            <div class="diagram-graphic-wrap">
                <svg viewBox="0 0 580 180" xmlns="http://www.w3.org/2000/svg">
                    <rect width="580" height="180" rx="12" fill="#0F172A" stroke="#334155"/>
                    <circle cx="140" cy="80" r="40" fill="#F43F5E" fill-opacity="0.3" stroke="#F43F5E" stroke-width="2"/>
                    <text x="140" y="75" fill="#FFFFFF" font-size="12" font-weight="700" text-anchor="middle">Vật Nóng (T1)</text>
                    <text x="140" y="95" fill="#FCA5A5" font-size="10" text-anchor="middle">Chứa nội năng U1</text>

                    <!-- Flow arrow representing Heat Q -->
                    <path d="M 190 80 L 370 80" stroke="#FBBF24" stroke-width="5" stroke-dasharray="6,3"/>
                    <polygon points="370,75 385,80 370,85" fill="#FBBF24"/>
                    <text x="285" y="65" fill="#FBBF24" font-size="14" font-weight="800" text-anchor="middle">Nhiệt lượng Q = ΔU</text>

                    <circle cx="440" cy="80" r="40" fill="#0284C7" fill-opacity="0.3" stroke="#38BDF8" stroke-width="2"/>
                    <text x="440" y="75" fill="#FFFFFF" font-size="12" font-weight="700" text-anchor="middle">Vật Lạnh (T2)</text>
                    <text x="440" y="95" fill="#7DD3FC" font-size="10" text-anchor="middle">Chứa nội năng U2</text>

                    <text x="290" y="145" fill="#F87171" font-size="12" font-weight="700" text-anchor="middle">Vật KHÔNG chứa nhiệt lượng, vật chỉ chứa NỘI NĂNG</text>
                    <text x="290" y="165" fill="#94A3B8" font-size="11.5" text-anchor="middle">Nhiệt lượng là số đo phần nội năng trao đổi trong quá trình truyền nhiệt</text>
                </svg>
            </div>
            <div class="diagram-caption"><strong>Ghi nhớ:</strong> Nhiệt lượng ($Q$) là số đo phần nội năng tăng thêm hay mất đi của vật trong quá trình truyền nhiệt ($\\Delta U = Q$).</div>
        `;
    }

    render_c_u2_bieu_thuc_dl1(container) {
        container.innerHTML = `
            <div class="diagram-header">
                <div class="diagram-title"><span>📐</span><span>Biểu Thức Định Luật I: ΔU = A + Q</span></div>
                <div class="diagram-badge">Bài 2 - Định Luật I</div>
            </div>
            <div class="diagram-graphic-wrap">
                <svg viewBox="0 0 580 180" xmlns="http://www.w3.org/2000/svg">
                    <rect width="580" height="180" rx="12" fill="#0F172A" stroke="#334155"/>
                    <!-- Central System Box -->
                    <rect x="180" y="35" width="220" height="100" rx="10" fill="#1E293B" stroke="#38BDF8" stroke-width="2"/>
                    <text x="290" y="75" fill="#38BDF8" font-size="16" font-weight="800" text-anchor="middle">HỆ NHIỆT ĐỘNG</text>
                    <text x="290" y="105" fill="#FBBF24" font-size="18" font-weight="800" text-anchor="middle">ΔU = A + Q</text>

                    <!-- Work Arrow -->
                    <line x1="60" y1="65" x2="165" y2="65" stroke="#10B981" stroke-width="3"/>
                    <polygon points="165,60 175,65 165,70" fill="#10B981"/>
                    <text x="110" y="55" fill="#10B981" font-size="12" font-weight="700" text-anchor="middle">Công A</text>

                    <!-- Heat Arrow -->
                    <line x1="60" y1="115" x2="165" y2="115" stroke="#F59E0B" stroke-width="3"/>
                    <polygon points="165,110 175,115 165,120" fill="#F59E0B"/>
                    <text x="110" y="105" fill="#F59E0B" font-size="12" font-weight="700" text-anchor="middle">Nhiệt lượng Q</text>

                    <text x="480" y="80" fill="#E2E8F0" font-size="12" text-anchor="middle">Độ biến thiên</text>
                    <text x="480" y="100" fill="#38BDF8" font-size="13" font-weight="700" text-anchor="middle">Nội năng ΔU</text>
                    <text x="290" y="162" fill="#94A3B8" font-size="12" text-anchor="middle">Độ biến thiên nội năng bằng tổng đại số của công và nhiệt lượng hệ nhận được</text>
                </svg>
            </div>
            <div class="diagram-caption"><strong>Ghi nhớ:</strong> Hệ thức Định luật I: $\\Delta U = A + Q$. Độ biến thiên nội năng bằng tổng công và nhiệt lượng mà hệ nhận được.</div>
        `;
    }

    render_c_u2_quy_uoc_dau_q(container) {
        container.innerHTML = `
            <div class="diagram-header">
                <div class="diagram-title"><span>🌡️</span><span>Quy Ước Dấu Của Nhiệt Lượng (Q)</span></div>
                <div class="diagram-badge">Bài 2 - Quy Ước Dấu</div>
            </div>
            <div class="diagram-graphic-wrap">
                <svg viewBox="0 0 580 180" xmlns="http://www.w3.org/2000/svg">
                    <rect width="580" height="180" rx="12" fill="#0F172A" stroke="#334155"/>
                    <!-- Q > 0 (Nhận nhiệt) -->
                    <rect x="35" y="25" width="240" height="110" rx="8" fill="#1E293B" stroke="#10B981"/>
                    <text x="155" y="48" fill="#34D399" font-size="13" font-weight="800" text-anchor="middle">Q > 0 (HỆ NHẬN NHIỆT LƯỢNG)</text>
                    <rect x="70" y="65" width="80" height="50" rx="6" fill="#0F172A" stroke="#334155"/>
                    <text x="110" y="95" fill="#E2E8F0" font-size="11" text-anchor="middle">Hệ</text>
                    <line x1="220" y1="90" x2="160" y2="90" stroke="#10B981" stroke-width="4"/>
                    <polygon points="160,84 150,90 160,96" fill="#10B981"/>
                    <text x="195" y="80" fill="#10B981" font-size="12" font-weight="700">Q > 0</text>
                    <text x="155" y="125" fill="#A7F3D0" font-size="11" text-anchor="middle">Nhiệt truyền TỪ ngoài VÀO hệ</text>

                    <!-- Q < 0 (Truyền nhiệt) -->
                    <rect x="305" y="25" width="240" height="110" rx="8" fill="#1E293B" stroke="#F43F5E"/>
                    <text x="425" y="48" fill="#F87171" font-size="13" font-weight="800" text-anchor="middle">Q < 0 (HỆ TRUYỀN NHIỆT LƯỢNG)</text>
                    <rect x="340" y="65" width="80" height="50" rx="6" fill="#0F172A" stroke="#334155"/>
                    <text x="380" y="95" fill="#E2E8F0" font-size="11" text-anchor="middle">Hệ</text>
                    <line x1="420" y1="90" x2="480" y2="90" stroke="#F43F5E" stroke-width="4"/>
                    <polygon points="480,84 490,90 480,96" fill="#F43F5E"/>
                    <text x="450" y="80" fill="#F43F5E" font-size="12" font-weight="700">Q < 0</text>
                    <text x="425" y="125" fill="#FCA5A5" font-size="11" text-anchor="middle">Nhiệt truyền TỪ hệ RA ngoài</text>
                    <text x="290" y="160" fill="#E2E8F0" font-size="12" text-anchor="middle">Quy ước: Nhận vào là DƯƠNG (> 0), Tỏa ra là ÂM (< 0)</text>
                </svg>
            </div>
            <div class="diagram-caption"><strong>Ghi nhớ:</strong> $Q > 0$ khi hệ nhận nhiệt lượng từ môi trường; $Q < 0$ khi hệ truyền nhiệt lượng cho môi trường.</div>
        `;
    }

    render_c_u2_quy_uoc_dau_a(container) {
        container.innerHTML = `
            <div class="diagram-header">
                <div class="diagram-title"><span>⚙️</span><span>Quy Ước Dấu Của Công (A)</span></div>
                <div class="diagram-badge">Bài 2 - Quy Ước Dấu</div>
            </div>
            <div class="diagram-graphic-wrap">
                <svg viewBox="0 0 580 180" xmlns="http://www.w3.org/2000/svg">
                    <rect width="580" height="180" rx="12" fill="#0F172A" stroke="#334155"/>
                    <!-- A > 0 (Nén khí, nhận công) -->
                    <rect x="35" y="25" width="240" height="110" rx="8" fill="#1E293B" stroke="#0284C7"/>
                    <text x="155" y="48" fill="#38BDF8" font-size="13" font-weight="800" text-anchor="middle">A > 0 (HỆ NHẬN CÔNG / NÉN)</text>
                    <rect x="60" y="65" width="70" height="40" rx="4" fill="#0284C7" fill-opacity="0.3" stroke="#0284C7"/>
                    <rect x="130" y="60" width="10" height="50" fill="#64748B"/>
                    <line x1="210" y1="85" x2="150" y2="85" stroke="#38BDF8" stroke-width="4"/>
                    <polygon points="150,79 140,85 150,91" fill="#38BDF8"/>
                    <text x="180" y="75" fill="#38BDF8" font-size="12" font-weight="700">A > 0</text>
                    <text x="155" y="125" fill="#7DD3FC" font-size="11" text-anchor="middle">Ngoại lực nén khí (Thể tích V ↓)</text>

                    <!-- A < 0 (Dãn nở, sinh công) -->
                    <rect x="305" y="25" width="240" height="110" rx="8" fill="#1E293B" stroke="#F59E0B"/>
                    <text x="425" y="48" fill="#FBBF24" font-size="13" font-weight="800" text-anchor="middle">A < 0 (HỆ SINH CÔNG / DÃN)</text>
                    <rect x="330" y="65" width="90" height="40" rx="4" fill="#F59E0B" fill-opacity="0.3" stroke="#F59E0B"/>
                    <rect x="420" y="60" width="10" height="50" fill="#64748B"/>
                    <line x1="430" y1="85" x2="490" y2="85" stroke="#FBBF24" stroke-width="4"/>
                    <polygon points="490,79 500,85 490,91" fill="#FBBF24"/>
                    <text x="460" y="75" fill="#FBBF24" font-size="12" font-weight="700">A < 0</text>
                    <text x="425" y="125" fill="#FDE68A" font-size="11" text-anchor="middle">Khí đẩy pít-tông ra (Thể tích V ↑)</text>
                    <text x="290" y="160" fill="#E2E8F0" font-size="12" text-anchor="middle">Quy ước: Khí bị nén nhận công A > 0; Khí dãn nở sinh công A < 0</text>
                </svg>
            </div>
            <div class="diagram-caption"><strong>Ghi nhớ:</strong> $A > 0$ khi hệ nhận công từ ngoại lực (bị nén, thể tích giảm); $A < 0$ khi hệ sinh công ra môi trường (dãn nở).</div>
        `;
    }

    render_c_u2_tinh_delta_u_1(container) {
        container.innerHTML = `
            <div class="diagram-header">
                <div class="diagram-title"><span>🧮</span><span>Tính ΔU: Hệ Nhận Đồng Thời Công & Nhiệt</span></div>
                <div class="diagram-badge">Bài 2 - Vận Dụng ĐL I</div>
            </div>
            <div class="diagram-graphic-wrap">
                <svg viewBox="0 0 580 180" xmlns="http://www.w3.org/2000/svg">
                    <rect width="580" height="180" rx="12" fill="#0F172A" stroke="#334155"/>
                    <rect x="40" y="25" width="220" height="110" rx="8" fill="#1E293B" stroke="#0284C7"/>
                    <text x="150" y="50" fill="#38BDF8" font-size="13" font-weight="700" text-anchor="middle">Xi lanh khí nhận năng lượng</text>
                    <text x="60" y="78" fill="#FBBF24" font-size="12">• Nhận nhiệt: <strong style="color:#FBBF24">Q = +120 J</strong></text>
                    <text x="60" y="105" fill="#38BDF8" font-size="12">• Nhận công: <strong style="color:#38BDF8">A = +80 J</strong></text>

                    <!-- Arrow calculating -->
                    <line x1="270" y1="80" x2="310" y2="80" stroke="#94A3B8" stroke-width="3"/>
                    <polygon points="310,75 320,80 310,85" fill="#94A3B8"/>

                    <!-- Result Box -->
                    <rect x="330" y="25" width="210" height="110" rx="8" fill="#1E293B" stroke="#10B981"/>
                    <text x="435" y="50" fill="#34D399" font-size="13" font-weight="800" text-anchor="middle">ĐỘ BIẾN THIÊN NỘI NĂNG</text>
                    <text x="435" y="78" fill="#E2E8F0" font-size="13" text-anchor="middle">ΔU = A + Q</text>
                    <text x="435" y="100" fill="#E2E8F0" font-size="13" text-anchor="middle">ΔU = 80 + 120</text>
                    <text x="435" y="125" fill="#34D399" font-size="16" font-weight="800" text-anchor="middle">ΔU = +200 J</text>
                    <text x="290" y="162" fill="#E2E8F0" font-size="12" text-anchor="middle">Cả công và nhiệt nhận vào đều làm tăng nội năng của hệ</text>
                </svg>
            </div>
            <div class="diagram-caption"><strong>Ghi nhớ:</strong> Khí nhận nhiệt ($Q = +120	ext{ J}$) và nhận công ($A = +80	ext{ J}$): $\\Delta U = A + Q = 80 + 120 = 200	ext{ J}$.</div>
        `;
    }

    render_c_u2_tinh_delta_u_2(container) {
        container.innerHTML = `
            <div class="diagram-header">
                <div class="diagram-title"><span>🧮</span><span>Tính ΔU: Nhận Nhiệt & Dãn Nở Sinh Công</span></div>
                <div class="diagram-badge">Bài 2 - Vận Dụng ĐL I</div>
            </div>
            <div class="diagram-graphic-wrap">
                <svg viewBox="0 0 580 180" xmlns="http://www.w3.org/2000/svg">
                    <rect width="580" height="180" rx="12" fill="#0F172A" stroke="#334155"/>
                    <rect x="40" y="25" width="220" height="110" rx="8" fill="#1E293B" stroke="#F59E0B"/>
                    <text x="150" y="50" fill="#FBBF24" font-size="13" font-weight="700" text-anchor="middle">Khí nhận nhiệt & dãn nở</text>
                    <text x="60" y="78" fill="#FBBF24" font-size="12">• Nhận nhiệt: <strong style="color:#FBBF24">Q = +300 J</strong></text>
                    <text x="60" y="105" fill="#F87171" font-size="12">• Sinh công: <strong style="color:#F87171">A' = 180 J ➔ A = -180 J</strong></text>

                    <line x1="270" y1="80" x2="310" y2="80" stroke="#94A3B8" stroke-width="3"/>
                    <polygon points="310,75 320,80 310,85" fill="#94A3B8"/>

                    <rect x="330" y="25" width="210" height="110" rx="8" fill="#1E293B" stroke="#0284C7"/>
                    <text x="435" y="50" fill="#38BDF8" font-size="13" font-weight="800" text-anchor="middle">ĐỘ BIẾN THIÊN NỘI NĂNG</text>
                    <text x="435" y="78" fill="#E2E8F0" font-size="13" text-anchor="middle">ΔU = A + Q</text>
                    <text x="435" y="100" fill="#E2E8F0" font-size="13" text-anchor="middle">ΔU = -180 + 300</text>
                    <text x="435" y="125" fill="#38BDF8" font-size="16" font-weight="800" text-anchor="middle">ΔU = +120 J</text>
                    <text x="290" y="162" fill="#E2E8F0" font-size="12" text-anchor="middle">Nội năng tăng 120 J vì lượng nhiệt nhận vào lớn hơn công sinh ra</text>
                </svg>
            </div>
            <div class="diagram-caption"><strong>Ghi nhớ:</strong> Khí nhận nhiệt ($Q = +300	ext{ J}$) và sinh công ($A = -180	ext{ J}$): $\\Delta U = A + Q = -180 + 300 = 120	ext{ J}$.</div>
        `;
    }

    render_c_u2_cong_dan_dang_ap(container) {
        container.innerHTML = `
            <div class="diagram-header">
                <div class="diagram-title"><span>📏</span><span>Công Dãn Nở Đẳng Áp: A' = p · ΔV</span></div>
                <div class="diagram-badge">Bài 2 - Công Đẳng Áp</div>
            </div>
            <div class="diagram-graphic-wrap">
                <svg viewBox="0 0 580 180" xmlns="http://www.w3.org/2000/svg">
                    <rect width="580" height="180" rx="12" fill="#0F172A" stroke="#334155"/>
                    <!-- Cylinder and Piston -->
                    <rect x="50" y="45" width="220" height="80" rx="4" fill="#1E293B" stroke="#94A3B8" stroke-width="2"/>
                    <!-- Gas V1 -->
                    <rect x="52" y="47" width="100" height="76" fill="#0284C7" fill-opacity="0.5"/>
                    <text x="100" y="90" fill="#E0F2FE" font-size="12" font-weight="700">V1</text>
                    <!-- Displacement delta V -->
                    <rect x="152" y="47" width="60" height="76" fill="#F59E0B" fill-opacity="0.3" stroke="#F59E0B" stroke-dasharray="2,2"/>
                    <text x="182" y="90" fill="#FBBF24" font-size="12" font-weight="700">ΔV</text>
                    <!-- Piston head moved -->
                    <rect x="212" y="42" width="12" height="86" fill="#64748B"/>
                    <line x1="224" y1="85" x2="265" y2="85" stroke="#94A3B8" stroke-width="6"/>
                    <!-- Pressure arrow -->
                    <line x1="160" y1="85" x2="205" y2="85" stroke="#F43F5E" stroke-width="3"/>
                    <polygon points="205,80 215,85 205,90" fill="#F43F5E"/>
                    <text x="175" y="70" fill="#F87171" font-size="11" font-weight="700">Áp suất p</text>
                    <!-- Formula panel -->
                    <rect x="300" y="35" width="245" height="100" rx="8" fill="#1E293B" stroke="#0284C7"/>
                    <text x="422" y="60" fill="#38BDF8" font-size="14" font-weight="800" text-anchor="middle">A' = p · ΔV = p(V2 - V1)</text>
                    <text x="320" y="88" fill="#E2E8F0" font-size="11.5">• p = 2 · 10^5 Pa; ΔV = 0,005 m³</text>
                    <text x="320" y="112" fill="#FBBF24" font-size="12" font-weight="700">➔ A' = 2 · 10^5 · 0,005 = 1000 J</text>
                    <text x="290" y="160" fill="#94A3B8" font-size="12" text-anchor="middle">Công khối khí sinh ra: A' = p · ΔV; Công khí nhận vào: A = -A' = -p · ΔV</text>
                </svg>
            </div>
            <div class="diagram-caption"><strong>Ghi nhớ:</strong> Công do chất khí sinh ra trong quá trình dãn nở đẳng áp: $A' = p \\cdot \\Delta V = p(V_2 - V_1)$.</div>
        `;
    }

    render_c_u2_qua_trinh_dang_tich(container) {
        container.innerHTML = `
            <div class="diagram-header">
                <div class="diagram-title"><span>🔒</span><span>Quá Trình Đẳng Tích: ΔV = 0 ➔ ΔU = Q</span></div>
                <div class="diagram-badge">Bài 2 - Quá Trình Đẳng Tích</div>
            </div>
            <div class="diagram-graphic-wrap">
                <svg viewBox="0 0 580 180" xmlns="http://www.w3.org/2000/svg">
                    <rect width="580" height="180" rx="12" fill="#0F172A" stroke="#334155"/>
                    <!-- Rigid sealed container -->
                    <rect x="60" y="35" width="160" height="100" rx="6" fill="#1E293B" stroke="#64748B" stroke-width="3"/>
                    <text x="140" y="60" fill="#94A3B8" font-size="12" font-weight="700" text-anchor="middle">BÌNH KÍN CỐ ĐỊNH</text>
                    <text x="140" y="80" fill="#38BDF8" font-size="13" font-weight="800" text-anchor="middle">Thể tích V = const</text>
                    <text x="140" y="100" fill="#F87171" font-size="13" font-weight="800" text-anchor="middle">ΔV = 0 ➔ A = 0</text>
                    <!-- Heat entering from burner -->
                    <path d="M 120 160 Q 140 140 160 160 Z" fill="#F59E0B"/>
                    <text x="140" y="130" fill="#FBBF24" font-size="11" font-weight="700" text-anchor="middle">Truyền nhiệt Q ↑</text>
                    <!-- Logic Box -->
                    <rect x="270" y="35" width="275" height="100" rx="8" fill="#1E293B" stroke="#0284C7"/>
                    <text x="407" y="60" fill="#38BDF8" font-size="13" font-weight="700" text-anchor="middle">Định luật I: ΔU = A + Q</text>
                    <text x="407" y="85" fill="#E2E8F0" font-size="12" text-anchor="middle">Vì khí không dịch chuyển pít-tông (A = 0)</text>
                    <text x="407" y="115" fill="#34D399" font-size="16" font-weight="800" text-anchor="middle">➔ ΔU = Q</text>
                    <text x="290" y="162" fill="#E2E8F0" font-size="12" text-anchor="middle">Trong quá trình đẳng tích, toàn bộ nhiệt lượng nhận vào chỉ để tăng nội năng</text>
                </svg>
            </div>
            <div class="diagram-caption"><strong>Ghi nhớ:</strong> Trong quá trình đẳng tích ($\\Delta V = 0$), chất khí không thực hiện công ($A = 0$), do đó $\\Delta U = Q$.</div>
        `;
    }

    render_c_u2_qua_trinh_doan_nhiet(container) {
        container.innerHTML = `
            <div class="diagram-header">
                <div class="diagram-title"><span>❄️</span><span>Quá Trình Đoạn Nhiệt: Q = 0 ➔ ΔU = A</span></div>
                <div class="diagram-badge">Bài 2 - Quá Trình Đoạn Nhiệt</div>
            </div>
            <div class="diagram-graphic-wrap">
                <svg viewBox="0 0 580 180" xmlns="http://www.w3.org/2000/svg">
                    <rect width="580" height="180" rx="12" fill="#0F172A" stroke="#334155"/>
                    <!-- Insulated cylinder -->
                    <rect x="50" y="35" width="180" height="95" rx="6" fill="#1E293B" stroke="#F59E0B" stroke-width="4" stroke-dasharray="4,4"/>
                    <text x="140" y="55" fill="#FBBF24" font-size="11" font-weight="700" text-anchor="middle">VỎ CÁCH NHIỆT (Q = 0)</text>
                    <!-- Gas expands fast -->
                    <line x1="160" y1="85" x2="210" y2="85" stroke="#38BDF8" stroke-width="4"/>
                    <polygon points="210,79 220,85 210,91" fill="#38BDF8"/>
                    <text x="140" y="90" fill="#38BDF8" font-size="11" font-weight="700" text-anchor="middle">Khí dãn nở nhanh</text>
                    <text x="140" y="110" fill="#F87171" font-size="11" text-anchor="middle">Sinh công: A < 0</text>
                    <!-- Calculation -->
                    <rect x="270" y="35" width="275" height="100" rx="8" fill="#1E293B" stroke="#0284C7"/>
                    <text x="407" y="60" fill="#38BDF8" font-size="13" font-weight="700" text-anchor="middle">ΔU = A + Q = A (do Q = 0)</text>
                    <text x="407" y="85" fill="#E2E8F0" font-size="12" text-anchor="middle">Vì khí sinh công (A < 0) ➔ <strong style="color:#38BDF8">ΔU < 0</strong></text>
                    <text x="407" y="115" fill="#38BDF8" font-size="14" font-weight="800" text-anchor="middle">➔ Nhiệt độ giảm mạnh (Hơi lạnh, khói sương)</text>
                    <text x="290" y="162" fill="#94A3B8" font-size="12" text-anchor="middle">Ví dụ: Mở nắp chai nước ngọt có ga hoặc ấn nhanh bình xịt hơi</text>
                </svg>
            </div>
            <div class="diagram-caption"><strong>Ghi nhớ:</strong> Quá trình đoạn nhiệt ($Q = 0$), khi khí dãn nở sinh công ($A < 0$) thì $\\Delta U = A < 0$ làm nhiệt độ giảm đột ngột tạo ra làn sương lạnh.</div>
        `;
    }

    render_c_u2_bom_xe_dap(container) {
        container.innerHTML = `
            <div class="diagram-header">
                <div class="diagram-title"><span>🚲</span><span>Hiện Tượng Thân Ống Bơm Xe Đạp Bị Nóng</span></div>
                <div class="diagram-badge">Bài 2 - Hiện Tượng Đời Sống</div>
            </div>
            <div class="diagram-graphic-wrap">
                <svg viewBox="0 0 580 180" xmlns="http://www.w3.org/2000/svg">
                    <rect width="580" height="180" rx="12" fill="#0F172A" stroke="#334155"/>
                    <!-- Bicycle pump drawing -->
                    <rect x="60" y="50" width="180" height="45" rx="4" fill="#334155" stroke="#94A3B8"/>
                    <rect x="50" y="45" width="10" height="55" fill="#64748B"/>
                    <rect x="180" y="52" width="55" height="41" fill="#F43F5E" fill-opacity="0.4"/>
                    <text x="207" y="75" fill="#FCA5A5" font-size="11" font-weight="800" text-anchor="middle">RẤT NÓNG</text>
                    <line x1="130" y1="72" x2="175" y2="72" stroke="#FBBF24" stroke-width="4"/>
                    <polygon points="175,67 185,72 175,77" fill="#FBBF24"/>
                    <!-- 2 causes box -->
                    <rect x="280" y="30" width="265" height="110" rx="8" fill="#1E293B" stroke="#F59E0B"/>
                    <text x="412" y="55" fill="#FBBF24" font-size="13" font-weight="800" text-anchor="middle">2 NGUYÊN NHÂN ĐỒNG THỜI</text>
                    <text x="300" y="80" fill="#E2E8F0" font-size="11.5">1. <strong style="color:#38BDF8">Thực hiện công nén khí:</strong></text>
                    <text x="315" y="98" fill="#94A3B8" font-size="11">Công nén (A > 0) làm tăng nội năng của khí</text>
                    <text x="300" y="118" fill="#E2E8F0" font-size="11.5">2. <strong style="color:#F43F5E">Lực ma sát:</strong> Pít-tông cọ xát với thành ống</text>
                    <text x="290" y="162" fill="#E2E8F0" font-size="12" text-anchor="middle">Thân bơm nóng lên do kết hợp cả công nén khí và ma sát cơ học</text>
                </svg>
            </div>
            <div class="diagram-caption"><strong>Ghi nhớ:</strong> Ống bơm nóng lên do hai nguyên nhân: thực hiện công nén khí làm tăng nội năng khí và ma sát giữa pít-tông với thành ống.</div>
        `;
    }

    render_c_u2_xilanh_khi_nen(container) {
        container.innerHTML = `
            <div class="diagram-header">
                <div class="diagram-title"><span>📋</span><span>Ma Trận Dấu Của Khí Trong Xi Lanh Pít-tông</span></div>
                <div class="diagram-badge">Bài 2 - Bảng Quy Ước Tổng Hợp</div>
            </div>
            <div class="diagram-graphic-wrap">
                <svg viewBox="0 0 580 180" xmlns="http://www.w3.org/2000/svg">
                    <rect width="580" height="180" rx="12" fill="#0F172A" stroke="#334155"/>
                    <!-- 4 Process Matrix -->
                    <g fill="#1E293B" stroke="#334155" stroke-width="1.5">
                        <rect x="30" y="25" width="245" height="55" rx="6"/>
                        <rect x="305" y="25" width="245" height="55" rx="6"/>
                        <rect x="30" y="90" width="245" height="55" rx="6"/>
                        <rect x="305" y="90" width="245" height="55" rx="6"/>
                    </g>
                    <!-- Box 1: Nen nhanh -->
                    <text x="45" y="46" fill="#38BDF8" font-size="12" font-weight="700">1. Nén nhanh đoạn nhiệt:</text>
                    <text x="45" y="66" fill="#E2E8F0" font-size="11">A > 0, Q = 0 ➔ ΔU > 0 (Khí nóng lên)</text>
                    <!-- Box 2: Dan no sinh cong -->
                    <text x="320" y="46" fill="#FBBF24" font-size="12" font-weight="700">2. Nhận nhiệt dãn nở:</text>
                    <text x="320" y="66" fill="#E2E8F0" font-size="11">Q > 0, A < 0 ➔ ΔU = Q - |A|</text>
                    <!-- Box 3: Dang tich -->
                    <text x="45" y="111" fill="#10B981" font-size="12" font-weight="700">3. Đun nóng đẳng tích:</text>
                    <text x="45" y="131" fill="#E2E8F0" font-size="11">ΔV = 0 ➔ A = 0 ➔ ΔU = Q</text>
                    <!-- Box 4: Dang nhiet -->
                    <text x="320" y="111" fill="#A855F7" font-size="12" font-weight="700">4. Nén đẳng nhiệt (T = const):</text>
                    <text x="320" y="131" fill="#E2E8F0" font-size="11">ΔU = 0 ➔ A = -Q (Nhận công bao nhiêu tỏa nhiệt bấy nhiêu)</text>
                    <text x="290" y="165" fill="#94A3B8" font-size="12" text-anchor="middle">Hiểu rõ bản chất từng đại lượng giúp giải nhanh mọi bài toán nhiệt động</text>
                </svg>
            </div>
            <div class="diagram-caption"><strong>Ghi nhớ:</strong> Xác định chính xác dấu của công $A$ và nhiệt lượng $Q$ theo đúng bản chất quá trình biến đổi của hệ.</div>
        `;
    }

    render_c_u2_dong_co_nhiet(container) {
        container.innerHTML = `
            <div class="diagram-header">
                <div class="diagram-title"><span>🚂</span><span>Nguyên Lý Động Cơ Nhiệt & Hiệu Suất H < 100%</span></div>
                <div class="diagram-badge">Bài 2 - Động Cơ Nhiệt</div>
            </div>
            <div class="diagram-graphic-wrap">
                <svg viewBox="0 0 580 180" xmlns="http://www.w3.org/2000/svg">
                    <rect width="580" height="180" rx="12" fill="#0F172A" stroke="#334155"/>
                    <!-- Hot Reservoir -->
                    <rect x="40" y="30" width="130" height="45" rx="6" fill="#F43F5E" fill-opacity="0.3" stroke="#F43F5E"/>
                    <text x="105" y="56" fill="#FCA5A5" font-size="11.5" font-weight="800" text-anchor="middle">NGUỒN NÓNG (T1)</text>

                    <!-- Heat Engine Circle -->
                    <circle cx="280" cy="90" r="32" fill="#1E293B" stroke="#FBBF24" stroke-width="2"/>
                    <text x="280" y="88" fill="#FBBF24" font-size="11" font-weight="800" text-anchor="middle">ĐỘNG CƠ</text>
                    <text x="280" y="103" fill="#E2E8F0" font-size="9" text-anchor="middle">NHIỆT</text>

                    <!-- Arrow Q1 -->
                    <path d="M 170 52 L 250 75" stroke="#F43F5E" stroke-width="3"/>
                    <text x="205" y="55" fill="#F43F5E" font-size="11" font-weight="700">Q1 (nhận)</text>

                    <!-- Work Arrow Out -->
                    <line x1="312" y1="90" x2="430" y2="90" stroke="#10B981" stroke-width="4"/>
                    <polygon points="430,84 442,90 430,96" fill="#10B981"/>
                    <text x="380" y="80" fill="#10B981" font-size="12" font-weight="800">CÔNG CÓ ÍCH A'</text>

                    <!-- Cold Reservoir -->
                    <rect x="40" y="115" width="130" height="45" rx="6" fill="#0284C7" fill-opacity="0.3" stroke="#0284C7"/>
                    <text x="105" y="141" fill="#7DD3FC" font-size="11.5" font-weight="800" text-anchor="middle">NGUỒN LẠNH (T2)</text>

                    <!-- Arrow Q2 -->
                    <path d="M 255 105 L 170 135" stroke="#0284C7" stroke-width="3"/>
                    <text x="210" y="132" fill="#38BDF8" font-size="11" font-weight="700">Q2 (thải)</text>

                    <!-- Efficiency Formula -->
                    <rect x="440" y="115" width="120" height="45" rx="6" fill="#1E293B" stroke="#334155"/>
                    <text x="500" y="135" fill="#FBBF24" font-size="12" font-weight="800" text-anchor="middle">H = A' / Q1 < 100%</text>
                    <text x="500" y="150" fill="#94A3B8" font-size="9" text-anchor="middle">Bắt buộc có nguồn lạnh</text>
                </svg>
            </div>
            <div class="diagram-caption"><strong>Ghi nhớ:</strong> Động cơ nhiệt bắt buộc phải truyền nhiệt lượng $Q_2$ cho nguồn lạnh; hiệu suất luôn nhỏ hơn $100\%$ ($H = rac{|A|}{Q_1} < 100\%$).</div>
        `;
    }

    render_c_u3_khai_niem_nhiet_do(container) {
        container.innerHTML = `
            <div class="diagram-header">
                <div class="diagram-title"><span>🌡️</span><span>Bản Chất Vi Mô Của Nhiệt Độ</span></div>
                <div class="diagram-badge">Bài 3 - Khái Niệm Nhiệt Độ</div>
            </div>
            <div class="diagram-graphic-wrap">
                <svg viewBox="0 0 580 180" xmlns="http://www.w3.org/2000/svg">
                    <rect width="580" height="180" rx="12" fill="#0F172A" stroke="#334155"/>
                    <circle cx="150" cy="85" r="45" fill="#1E293B" stroke="#38BDF8" stroke-width="2"/>
                    <g fill="#38BDF8">
                        <circle cx="130" cy="70" r="6"/><circle cx="165" cy="75" r="6"/><circle cx="145" cy="100" r="6"/>
                        <line x1="130" y1="70" x2="115" y2="60" stroke="#F43F5E" stroke-width="2"/>
                        <line x1="165" y1="75" x2="185" y2="85" stroke="#F43F5E" stroke-width="2"/>
                        <line x1="145" y1="100" x2="135" y2="115" stroke="#F43F5E" stroke-width="2"/>
                    </g>
                    <!-- Formula connecting Micro and Macro -->
                    <rect x="230" y="45" width="310" height="85" rx="8" fill="#1E293B" stroke="#0284C7"/>
                    <text x="385" y="72" fill="#FBBF24" font-size="14" font-weight="800" text-anchor="middle">E_đ(tb) = (3/2) · k · T</text>
                    <text x="385" y="98" fill="#E2E8F0" font-size="12" text-anchor="middle">Nhiệt độ tỷ lệ thuận với động năng</text>
                    <text x="385" y="116" fill="#38BDF8" font-size="12" font-weight="700" text-anchor="middle">chuyển động nhiệt trung bình của phân tử</text>
                    <text x="290" y="160" fill="#94A3B8" font-size="12" text-anchor="middle">Hai vật cùng nhiệt độ thì động năng tịnh tiến trung bình của phân tử bằng nhau</text>
                </svg>
            </div>
            <div class="diagram-caption"><strong>Ghi nhớ:</strong> Về mặt vi mô, nhiệt độ là đại lượng đặc trưng cho động năng tịnh tiến trung bình của các phân tử cấu tạo nên vật.</div>
        `;
    }

    render_c_u3_chieu_truyen_nhiet(container) {
        container.innerHTML = `
            <div class="diagram-header">
                <div class="diagram-title"><span>➡️</span><span>Chiều Truyền Nhiệt Tự Phát: T_cao ➔ T_thấp</span></div>
                <div class="diagram-badge">Bài 3 - Truyền Nhiệt</div>
            </div>
            <div class="diagram-graphic-wrap">
                <svg viewBox="0 0 580 180" xmlns="http://www.w3.org/2000/svg">
                    <rect width="580" height="180" rx="12" fill="#0F172A" stroke="#334155"/>
                    <!-- Hot object -->
                    <rect x="60" y="40" width="130" height="90" rx="10" fill="#F43F5E" fill-opacity="0.3" stroke="#F43F5E" stroke-width="2"/>
                    <text x="125" y="75" fill="#FFFFFF" font-size="13" font-weight="800" text-anchor="middle">VẬT NÓNG</text>
                    <text x="125" y="100" fill="#FCA5A5" font-size="13" font-weight="700" text-anchor="middle">T1 = 80°C</text>

                    <!-- Spontaneous Heat Transfer Arrow -->
                    <line x1="210" y1="85" x2="360" y2="85" stroke="#FBBF24" stroke-width="6"/>
                    <polygon points="360,77 375,85 360,93" fill="#FBBF24"/>
                    <text x="285" y="70" fill="#FBBF24" font-size="13" font-weight="800" text-anchor="middle">Nhiệt lượng Q tự phát</text>

                    <!-- Cold object -->
                    <rect x="390" y="40" width="130" height="90" rx="10" fill="#0284C7" fill-opacity="0.3" stroke="#0284C7" stroke-width="2"/>
                    <text x="455" y="75" fill="#FFFFFF" font-size="13" font-weight="800" text-anchor="middle">VẬT LẠNH</text>
                    <text x="455" y="100" fill="#7DD3FC" font-size="13" font-weight="700" text-anchor="middle">T2 = 20°C</text>
                    <text x="290" y="160" fill="#E2E8F0" font-size="12" text-anchor="middle">Nhiệt luôn tự phát truyền từ vật có nhiệt độ cao sang vật có nhiệt độ thấp</text>
                </svg>
            </div>
            <div class="diagram-caption"><strong>Ghi nhớ:</strong> Quá trình truyền nhiệt tự phát luôn diễn ra từ vật có nhiệt độ cao sang vật có nhiệt độ thấp (không phụ thuộc vật nào có nội năng lớn hơn).</div>
        `;
    }

    render_c_u3_can_bang_nhiet(container) {
        container.innerHTML = `
            <div class="diagram-header">
                <div class="diagram-title"><span>🤝</span><span>Trạng Thái Cân Bằng Nhiệt (T1 = T2)</span></div>
                <div class="diagram-badge">Bài 3 - Cân Bằng Nhiệt</div>
            </div>
            <div class="diagram-graphic-wrap">
                <svg viewBox="0 0 580 180" xmlns="http://www.w3.org/2000/svg">
                    <rect width="580" height="180" rx="12" fill="#0F172A" stroke="#334155"/>
                    <!-- Two touching blocks in equilibrium -->
                    <rect x="150" y="40" width="130" height="90" rx="6" fill="#10B981" fill-opacity="0.3" stroke="#10B981" stroke-width="2"/>
                    <text x="215" y="75" fill="#FFFFFF" font-size="13" font-weight="800" text-anchor="middle">VẬT A</text>
                    <text x="215" y="100" fill="#34D399" font-size="13" font-weight="700" text-anchor="middle">T_A = 35°C</text>

                    <rect x="300" y="40" width="130" height="90" rx="6" fill="#10B981" fill-opacity="0.3" stroke="#10B981" stroke-width="2"/>
                    <text x="365" y="75" fill="#FFFFFF" font-size="13" font-weight="800" text-anchor="middle">VẬT B</text>
                    <text x="365" y="100" fill="#34D399" font-size="13" font-weight="700" text-anchor="middle">T_B = 35°C</text>

                    <!-- Equal sign in center -->
                    <text x="290" y="92" fill="#FBBF24" font-size="24" font-weight="800" text-anchor="middle">=</text>
                    <text x="290" y="150" fill="#34D399" font-size="13" font-weight="800" text-anchor="middle">CÂN BẰNG NHIỆT: T_A = T_B ➔ KHÔNG CÒN TRUYỀN NHIỆT (Q = 0)</text>
                    <text x="290" y="168" fill="#94A3B8" font-size="11.5" text-anchor="middle">Cơ sở để đo nhiệt độ bằng nhiệt kế</text>
                </svg>
            </div>
            <div class="diagram-caption"><strong>Ghi nhớ:</strong> Hai vật ở trạng thái cân bằng nhiệt với nhau khi và chỉ khi chúng có cùng nhiệt độ, khi đó không còn quá trình truyền nhiệt lượng.</div>
        `;
    }

    render_c_u3_don_vi_kelvin(container) {
        container.innerHTML = `
            <div class="diagram-header">
                <div class="diagram-title"><span>🌐</span><span>Đơn Vị Đo Nhiệt Độ Chuẩn SI: Kelvin (K)</span></div>
                <div class="diagram-badge">Bài 3 - Đơn Vị SI</div>
            </div>
            <div class="diagram-graphic-wrap">
                <svg viewBox="0 0 580 180" xmlns="http://www.w3.org/2000/svg">
                    <rect width="580" height="180" rx="12" fill="#0F172A" stroke="#334155"/>
                    <rect x="50" y="30" width="480" height="110" rx="10" fill="#1E293B" stroke="#0284C7"/>
                    <!-- Large K symbol -->
                    <rect x="80" y="45" width="80" height="80" rx="12" fill="#0284C7" stroke="#38BDF8"/>
                    <text x="120" y="100" fill="#FFFFFF" font-size="44" font-weight="900" text-anchor="middle">K</text>
                    <!-- Explanations -->
                    <text x="180" y="65" fill="#38BDF8" font-size="14" font-weight="800">Đơn vị cơ bản trong Hệ đơn vị quốc tế (SI)</text>
                    <text x="180" y="90" fill="#10B981" font-size="13" font-weight="700">✓ Đúng chuẩn: T = 300 K</text>
                    <text x="180" y="112" fill="#F43F5E" font-size="13" font-weight="700">✗ Sai quy chuẩn: 300 °K (Không dùng dấu độ °)</text>
                    <text x="290" y="160" fill="#E2E8F0" font-size="12" text-anchor="middle">Thang nhiệt độ nhiệt động lực học tuyệt đối lấy mốc 0 K</text>
                </svg>
            </div>
            <div class="diagram-caption"><strong>Ghi nhớ:</strong> Đơn vị đo nhiệt độ cơ bản trong hệ SI là Kelvin, ký hiệu là $	ext{K}$ (lưu ý không có dấu độ $^\\circ$ ở trước chữ K).</div>
        `;
    }

    render_c_u3_cong_thuc_kelvin_celsius(container) {
        container.innerHTML = `
            <div class="diagram-header">
                <div class="diagram-title"><span>🔄</span><span>Công Thức Chuyển Đổi: T(K) = t(°C) + 273,15</span></div>
                <div class="diagram-badge">Bài 3 - Công Thức Chuyển Đổi</div>
            </div>
            <div class="diagram-graphic-wrap">
                <svg viewBox="0 0 580 180" xmlns="http://www.w3.org/2000/svg">
                    <rect width="580" height="180" rx="12" fill="#0F172A" stroke="#334155"/>
                    <rect x="40" y="25" width="500" height="120" rx="10" fill="#1E293B" stroke="#0284C7"/>
                    <text x="290" y="58" fill="#FBBF24" font-size="17" font-weight="800" text-anchor="middle">T(K) = t(°C) + 273,15</text>
                    <text x="290" y="82" fill="#94A3B8" font-size="11.5" text-anchor="middle">(Tính gần đúng trong bài tập: T = t + 273)</text>
                    <line x1="80" y1="92" x2="500" y2="92" stroke="#334155"/>
                    <!-- 3 examples -->
                    <text x="120" y="115" fill="#38BDF8" font-size="11.5" font-weight="700" text-anchor="middle">0°C = 273,15 K</text>
                    <text x="120" y="132" fill="#94A3B8" font-size="10" text-anchor="middle">(Nước đá tan)</text>
                    <text x="290" y="115" fill="#10B981" font-size="11.5" font-weight="700" text-anchor="middle">37°C = 310,15 K</text>
                    <text x="290" y="132" fill="#94A3B8" font-size="10" text-anchor="middle">(Thân nhiệt người)</text>
                    <text x="460" y="115" fill="#F43F5E" font-size="11.5" font-weight="700" text-anchor="middle">100°C = 373,15 K</text>
                    <text x="460" y="132" fill="#94A3B8" font-size="10" text-anchor="middle">(Nước sôi 1 atm)</text>
                    <text x="290" y="165" fill="#E2E8F0" font-size="12" text-anchor="middle">Chuyển ngược lại: t(°C) = T(K) - 273,15</text>
                </svg>
            </div>
            <div class="diagram-caption"><strong>Ghi nhớ:</strong> Công thức chuyển đổi giữa nhiệt độ Celsius ($t$) và Kelvin ($T$): $T(	ext{K}) = t(^\\circ	ext{C}) + 273{,}15$.</div>
        `;
    }

    render_c_u3_khong_do_tuyet_doi(container) {
        container.innerHTML = `
            <div class="diagram-header">
                <div class="diagram-title"><span>🧊</span><span>Không Độ Tuyệt Đối: 0 K = -273,15°C</span></div>
                <div class="diagram-badge">Bài 3 - Không Độ Tuyệt Đối</div>
            </div>
            <div class="diagram-graphic-wrap">
                <svg viewBox="0 0 580 180" xmlns="http://www.w3.org/2000/svg">
                    <rect width="580" height="180" rx="12" fill="#0F172A" stroke="#334155"/>
                    <circle cx="130" cy="85" r="45" fill="#0284C7" fill-opacity="0.3" stroke="#38BDF8" stroke-width="2"/>
                    <text x="130" y="80" fill="#38BDF8" font-size="24" font-weight="900" text-anchor="middle">0 K</text>
                    <text x="130" y="105" fill="#E2E8F0" font-size="12" font-weight="700" text-anchor="middle">-273,15°C</text>

                    <!-- Explanation cards -->
                    <rect x="210" y="30" width="330" height="110" rx="8" fill="#1E293B" stroke="#0284C7"/>
                    <text x="375" y="55" fill="#FBBF24" font-size="13" font-weight="800" text-anchor="middle">GIỚI HẠN NHIỆT ĐỘ THẤP NHẤT VŨ TRỤ</text>
                    <text x="230" y="80" fill="#E2E8F0" font-size="11.5">• Nhiệt độ lý thuyết thấp nhất có thể đạt tới</text>
                    <text x="230" y="102" fill="#34D399" font-size="11.5">• Chuyển động nhiệt phân tử đạt năng lượng cực tiểu</text>
                    <text x="230" y="124" fill="#F87171" font-size="11.5">• Thang Kelvin KHÔNG BAO GIỜ có nhiệt độ âm</text>
                    <text x="290" y="162" fill="#94A3B8" font-size="12" text-anchor="middle">Không thể làm lạnh một vật xuống dưới 0 K bằng bất kỳ phương pháp nào</text>
                </svg>
            </div>
            <div class="diagram-caption"><strong>Ghi nhớ:</strong> Không độ tuyệt đối ($0	ext{ K} = -273{,}15^\\circ	ext{C}$) là nhiệt độ thấp nhất trên lý thuyết; thang Kelvin không bao giờ có giá trị âm.</div>
        `;
    }

    render_c_u3_tinh_doi_kelvin(container) {
        container.innerHTML = `
            <div class="diagram-header">
                <div class="diagram-title"><span>🧮</span><span>Bảng Chuyển Đổi Mẫu °C ➔ K</span></div>
                <div class="diagram-badge">Bài 3 - Thực Hành Tính Đổi</div>
            </div>
            <div class="diagram-graphic-wrap">
                <svg viewBox="0 0 580 180" xmlns="http://www.w3.org/2000/svg">
                    <rect width="580" height="180" rx="12" fill="#0F172A" stroke="#334155"/>
                    <g stroke="#334155" stroke-width="1.5" fill="#1E293B">
                        <rect x="30" y="30" width="160" height="95" rx="6"/>
                        <rect x="210" y="30" width="160" height="95" rx="6"/>
                        <rect x="390" y="30" width="160" height="95" rx="6"/>
                    </g>
                    <!-- Box 1: 0 C -->
                    <text x="110" y="55" fill="#38BDF8" font-size="13" font-weight="700" text-anchor="middle">Nước đá đang tan</text>
                    <text x="110" y="80" fill="#E2E8F0" font-size="14" font-weight="600" text-anchor="middle">t = 0°C</text>
                    <text x="110" y="105" fill="#FBBF24" font-size="15" font-weight="800" text-anchor="middle">T = 273,15 K</text>

                    <!-- Box 2: 37 C -->
                    <text x="290" y="55" fill="#10B981" font-size="13" font-weight="700" text-anchor="middle">Thân nhiệt người</text>
                    <text x="290" y="80" fill="#E2E8F0" font-size="14" font-weight="600" text-anchor="middle">t = 37°C</text>
                    <text x="290" y="105" fill="#FBBF24" font-size="15" font-weight="800" text-anchor="middle">T = 310,15 K</text>

                    <!-- Box 3: 100 C -->
                    <text x="470" y="55" fill="#F43F5E" font-size="13" font-weight="700" text-anchor="middle">Nước đang sôi</text>
                    <text x="470" y="80" fill="#E2E8F0" font-size="14" font-weight="600" text-anchor="middle">t = 100°C</text>
                    <text x="470" y="105" fill="#FBBF24" font-size="15" font-weight="800" text-anchor="middle">T = 373,15 K</text>
                    <text x="290" y="155" fill="#E2E8F0" font-size="12" text-anchor="middle">Muốn đổi từ °C sang K: Chỉ cần cộng thêm 273,15</text>
                </svg>
            </div>
            <div class="diagram-caption"><strong>Ghi nhớ:</strong> $T = t + 273{,}15$. Thân nhiệt $37^\\circ	ext{C} = 310{,}15	ext{ K}$; Nước sôi $100^\\circ	ext{C} = 373{,}15	ext{ K}$.</div>
        `;
    }

    render_c_u3_tinh_doi_fahrenheit(container) {
        container.innerHTML = `
            <div class="diagram-header">
                <div class="diagram-title"><span>🌡️</span><span>Thang Nhiệt Độ Fahrenheit: t(°F) = 1,8·t(°C) + 32</span></div>
                <div class="diagram-badge">Bài 3 - Thang Fahrenheit</div>
            </div>
            <div class="diagram-graphic-wrap">
                <svg viewBox="0 0 580 180" xmlns="http://www.w3.org/2000/svg">
                    <rect width="580" height="180" rx="12" fill="#0F172A" stroke="#334155"/>
                    <rect x="40" y="25" width="500" height="120" rx="10" fill="#1E293B" stroke="#F59E0B"/>
                    <text x="290" y="55" fill="#FBBF24" font-size="16" font-weight="800" text-anchor="middle">t(°F) = 1,8 · t(°C) + 32</text>
                    <line x1="70" y1="70" x2="510" y2="70" stroke="#334155"/>
                    <!-- 3 points -->
                    <text x="120" y="95" fill="#38BDF8" font-size="12" font-weight="700" text-anchor="middle">0°C ➔ 32°F</text>
                    <text x="120" y="115" fill="#94A3B8" font-size="10.5" text-anchor="middle">(Băng tan)</text>

                    <text x="290" y="95" fill="#10B981" font-size="12" font-weight="700" text-anchor="middle">25°C ➔ 77°F</text>
                    <text x="290" y="115" fill="#94A3B8" font-size="10.5" text-anchor="middle">(Phòng điều hòa)</text>

                    <text x="460" y="95" fill="#F43F5E" font-size="12" font-weight="700" text-anchor="middle">100°C ➔ 212°F</text>
                    <text x="460" y="115" fill="#94A3B8" font-size="10.5" text-anchor="middle">(Nước sôi 1 atm)</text>
                    <text x="290" y="162" fill="#E2E8F0" font-size="12" text-anchor="middle">Đặc biệt: Ở -40°C = -40°F (hai thang chỉ cùng giá trị số)</text>
                </svg>
            </div>
            <div class="diagram-caption"><strong>Ghi nhớ:</strong> $t(^\\circ	ext{F}) = 1{,}8 \\cdot t(^\\circ	ext{C}) + 32$. Mốc băng tan là $32^\\circ	ext{F}$, mốc nước sôi là $212^\\circ	ext{F}$.</div>
        `;
    }

    render_c_u3_do_bien_thien_nhiet(container) {
        container.innerHTML = `
            <div class="diagram-header">
                <div class="diagram-title"><span>📏</span><span>Độ Biến Thiên Nhiệt Độ: ΔT(K) = Δt(°C)</span></div>
                <div class="diagram-badge">Bài 3 - Khoảng Biến Thiên</div>
            </div>
            <div class="diagram-graphic-wrap">
                <svg viewBox="0 0 580 180" xmlns="http://www.w3.org/2000/svg">
                    <rect width="580" height="180" rx="12" fill="#0F172A" stroke="#334155"/>
                    <rect x="40" y="25" width="500" height="110" rx="10" fill="#1E293B" stroke="#0284C7"/>
                    <text x="290" y="58" fill="#38BDF8" font-size="17" font-weight="800" text-anchor="middle">ΔT(K) = Δt(°C)</text>
                    <text x="290" y="85" fill="#FBBF24" font-size="13" font-weight="700" text-anchor="middle">Độ lớn 1 vạch chia thang Celsius = Độ lớn 1 vạch chia thang Kelvin</text>
                    <!-- Visual ruler -->
                    <rect x="120" y="98" width="340" height="22" rx="4" fill="#0F172A" stroke="#38BDF8"/>
                    <line x1="160" y1="98" x2="160" y2="120" stroke="#38BDF8" stroke-width="2"/>
                    <line x1="260" y1="98" x2="260" y2="120" stroke="#38BDF8" stroke-width="2"/>
                    <line x1="360" y1="98" x2="360" y2="120" stroke="#38BDF8" stroke-width="2"/>
                    <text x="210" y="114" fill="#34D399" font-size="11" font-weight="700" text-anchor="middle">Δt = +10°C</text>
                    <text x="310" y="114" fill="#FBBF24" font-size="11" font-weight="700" text-anchor="middle">ΔT = +10 K</text>
                    <text x="290" y="158" fill="#E2E8F0" font-size="12" text-anchor="middle">Tăng 15°C cũng chính là tăng 15 K (không được cộng 273,15 khi tính độ chênh lệch!)</text>
                </svg>
            </div>
            <div class="diagram-caption"><strong>Ghi nhớ:</strong> Khoảng cách nhiệt độ giữa hai mức: $\\Delta T(	ext{K}) = \\Delta t(^\\circ	ext{C})$. Tăng $15^\\circ	ext{C}$ nghĩa là tăng đúng $15	ext{ K}$.</div>
        `;
    }

    render_c_u3_dan_nhiet_sat_go(container) {
        container.innerHTML = `
            <div class="diagram-header">
                <div class="diagram-title"><span>❄️</span><span>Hiện Tượng Cảm Giác Nhiệt: Sắt vs Gỗ</span></div>
                <div class="diagram-badge">Bài 3 - Dẫn Nhiệt</div>
            </div>
            <div class="diagram-graphic-wrap">
                <svg viewBox="0 0 580 180" xmlns="http://www.w3.org/2000/svg">
                    <rect width="580" height="180" rx="12" fill="#0F172A" stroke="#334155"/>
                    <!-- Hand touching Iron -->
                    <rect x="40" y="25" width="230" height="110" rx="8" fill="#1E293B" stroke="#0284C7"/>
                    <text x="155" y="50" fill="#38BDF8" font-size="13" font-weight="700" text-anchor="middle">CHẠM VÀO THANH SẮT</text>
                    <rect x="70" y="65" width="70" height="35" rx="4" fill="#64748B"/>
                    <text x="105" y="87" fill="#FFFFFF" font-size="11" font-weight="700" text-anchor="middle">Sắt (20°C)</text>
                    <line x1="160" y1="82" x2="220" y2="82" stroke="#F43F5E" stroke-width="4"/>
                    <polygon points="160,76 150,82 160,88" fill="#F43F5E"/>
                    <text x="190" y="75" fill="#FCA5A5" font-size="10" font-weight="700">Truyền nhiệt RẤT NHANH</text>
                    <text x="155" y="122" fill="#38BDF8" font-size="11.5" font-weight="700" text-anchor="middle">➔ Cảm giác LẠNH BUỐT</text>

                    <!-- Hand touching Wood -->
                    <rect x="310" y="25" width="230" height="110" rx="8" fill="#1E293B" stroke="#F59E0B"/>
                    <text x="425" y="50" fill="#FBBF24" font-size="13" font-weight="700" text-anchor="middle">CHẠM VÀO THANH GỖ</text>
                    <rect x="340" y="65" width="70" height="35" rx="4" fill="#B45309"/>
                    <text x="375" y="87" fill="#FFFFFF" font-size="11" font-weight="700" text-anchor="middle">Gỗ (20°C)</text>
                    <line x1="430" y1="82" x2="470" y2="82" stroke="#F59E0B" stroke-width="1.5" stroke-dasharray="3,3"/>
                    <text x="460" y="75" fill="#FDE68A" font-size="10">Dẫn nhiệt KÉM</text>
                    <text x="425" y="122" fill="#FBBF24" font-size="11.5" font-weight="700" text-anchor="middle">➔ Cảm giác ẤM HƠN</text>
                    <text x="290" y="160" fill="#E2E8F0" font-size="12" text-anchor="middle">Hai thanh cùng 20°C nhưng sắt dẫn nhiệt nhanh hơn nên làm da tay hạ nhiệt nhanh hơn</text>
                </svg>
            </div>
            <div class="diagram-caption"><strong>Ghi nhớ:</strong> Sắt dẫn nhiệt tốt hơn gỗ, nhiệt từ tay truyền sang sắt nhanh hơn làm da tay hạ nhiệt nhanh, gây cảm giác lạnh hơn.</div>
        `;
    }

    render_c_u3_nhiet_ke_y_te(container) {
        container.innerHTML = `
            <div class="diagram-header">
                <div class="diagram-title"><span>🩺</span><span>Cấu Tạo Nhiệt Kế Y Tế Thủy Ngân</span></div>
                <div class="diagram-badge">Bài 3 - Nhiệt Kế Y Tế</div>
            </div>
            <div class="diagram-graphic-wrap">
                <svg viewBox="0 0 580 180" xmlns="http://www.w3.org/2000/svg">
                    <rect width="580" height="180" rx="12" fill="#0F172A" stroke="#334155"/>
                    <!-- Thermometer Bulb -->
                    <circle cx="80" cy="90" r="18" fill="#F43F5E" stroke="#94A3B8" stroke-width="2"/>
                    <text x="80" y="125" fill="#FCA5A5" font-size="10" font-weight="700" text-anchor="middle">Bầu Thủy Ngân</text>

                    <!-- Constriction (Cho that) -->
                    <path d="M 98 86 L 125 86 L 132 89 L 140 86 L 360 86" stroke="#94A3B8" stroke-width="3" fill="none"/>
                    <path d="M 98 94 L 125 94 L 132 91 L 140 94 L 360 94" stroke="#94A3B8" stroke-width="3" fill="none"/>
                    <!-- Mercury thread inside -->
                    <rect x="98" y="88" width="180" height="4" fill="#F43F5E"/>
                    <!-- Callout arrow to constriction -->
                    <circle cx="132" cy="90" r="10" fill="none" stroke="#FBBF24" stroke-width="2" stroke-dasharray="2,2"/>
                    <line x1="132" y1="75" x2="132" y2="40" stroke="#FBBF24" stroke-width="1.5"/>
                    <text x="132" y="32" fill="#FBBF24" font-size="11.5" font-weight="800" text-anchor="middle">CHỖ THẮT HẸP</text>

                    <!-- Explanation Panel -->
                    <rect x="375" y="30" width="175" height="110" rx="8" fill="#1E293B" stroke="#0284C7"/>
                    <text x="462" y="55" fill="#38BDF8" font-size="12" font-weight="800" text-anchor="middle">CÔNG DỤNG CHỖ THẮT</text>
                    <text x="390" y="78" fill="#E2E8F0" font-size="10.5">• Ngăn cột thủy ngân</text>
                    <text x="390" y="93" fill="#E2E8F0" font-size="10.5">tự động tụt về bầu</text>
                    <text x="390" y="112" fill="#34D399" font-size="10.5" font-weight="700">➔ Đọc kết quả chính xác</text>
                    <text x="390" y="130" fill="#FDE68A" font-size="10">• Trước khi đo: Vẩy mạnh</text>
                    <text x="290" y="165" fill="#94A3B8" font-size="12" text-anchor="middle">Dải đo 35°C đến 42°C chuyên dụng đo thân nhiệt con người</text>
                </svg>
            </div>
            <div class="diagram-caption"><strong>Ghi nhớ:</strong> Chỗ thắt hẹp ở ống quản ngăn thủy ngân tự tụt về bầu khi lấy ra khỏi cơ thể, giúp đọc nhiệt độ chính xác.</div>
        `;
    }

    render_c_u3_cac_loai_nhiet_ke(container) {
        container.innerHTML = `
            <div class="diagram-header">
                <div class="diagram-title"><span>📡</span><span>Nhiệt Kế Hồng Ngoại & Nhiệt Kế Hiện Đại</span></div>
                <div class="diagram-badge">Bài 3 - Các Loại Nhiệt Kế</div>
            </div>
            <div class="diagram-graphic-wrap">
                <svg viewBox="0 0 580 180" xmlns="http://www.w3.org/2000/svg">
                    <rect width="580" height="180" rx="12" fill="#0F172A" stroke="#334155"/>
                    <!-- Infrared gun -->
                    <rect x="40" y="45" width="80" height="40" rx="6" fill="#334155" stroke="#38BDF8"/>
                    <rect x="60" y="85" width="25" height="45" rx="4" fill="#1E293B" stroke="#38BDF8"/>
                    <!-- Screen on gun -->
                    <rect x="45" y="52" width="30" height="18" rx="2" fill="#0284C7"/>
                    <text x="60" y="65" fill="#FFFFFF" font-size="9" font-weight="700" text-anchor="middle">36.8°C</text>
                    <!-- Infrared waves -->
                    <path d="M 130 50 Q 150 65 130 80" stroke="#F43F5E" stroke-width="2" fill="none"/>
                    <path d="M 145 45 Q 170 65 145 85" stroke="#F43F5E" stroke-width="2" fill="none"/>
                    <!-- Human head target -->
                    <circle cx="210" cy="65" r="28" fill="#1E293B" stroke="#FBBF24" stroke-width="2"/>
                    <text x="210" y="70" fill="#FBBF24" font-size="10" font-weight="700" text-anchor="middle">Trán người</text>
                    <!-- Comparison table -->
                    <rect x="270" y="30" width="270" height="115" rx="8" fill="#1E293B" stroke="#334155"/>
                    <text x="405" y="52" fill="#38BDF8" font-size="12.5" font-weight="800" text-anchor="middle">ƯU ĐIỂM NHIỆT KẾ HỒNG NGOẠI</text>
                    <text x="290" y="75" fill="#34D399" font-size="11">✓ Đo không tiếp xúc (khoảng cách 3-5 cm)</text>
                    <text x="290" y="95" fill="#34D399" font-size="11">✓ Cho kết quả cực nhanh (~1 giây)</text>
                    <text x="290" y="115" fill="#34D399" font-size="11">✓ An toàn, không chứa thủy ngân độc hại</text>
                    <text x="290" y="133" fill="#E2E8F0" font-size="10.5">Rất phù hợp phòng chống dịch bệnh</text>
                </svg>
            </div>
            <div class="diagram-caption"><strong>Ghi nhớ:</strong> Nhiệt kế hồng ngoại đo năng lượng bức xạ nhiệt phát ra từ vật mà không cần tiếp xúc trực tiếp, cho kết quả tức thì và an toàn.</div>
        `;
    }

    render_c_u3_diem_ba_cua_nuoc(container) {
        container.innerHTML = `
            <div class="diagram-header">
                <div class="diagram-title"><span>🎯</span><span>Điểm Ba Của Nước: T = 273,16 K (0,01°C)</span></div>
                <div class="diagram-badge">Bài 3 - Mốc Chuẩn Thang Kelvin</div>
            </div>
            <div class="diagram-graphic-wrap">
                <svg viewBox="0 0 580 180" xmlns="http://www.w3.org/2000/svg">
                    <rect width="580" height="180" rx="12" fill="#0F172A" stroke="#334155"/>
                    <!-- Phase diagram axes -->
                    <line x1="60" y1="140" x2="280" y2="140" stroke="#94A3B8" stroke-width="2"/>
                    <line x1="60" y1="140" x2="60" y2="30" stroke="#94A3B8" stroke-width="2"/>
                    <text x="280" y="155" fill="#94A3B8" font-size="10" text-anchor="end">Nhiệt độ T</text>
                    <text x="50" y="35" fill="#94A3B8" font-size="10">Áp suất P</text>
                    <!-- Triple point curve lines -->
                    <path d="M 60 110 Q 130 95 160 85" stroke="#38BDF8" stroke-width="2" fill="none"/>
                    <path d="M 160 85 Q 220 50 260 40" stroke="#F59E0B" stroke-width="2" fill="none"/>
                    <path d="M 160 85 L 150 35" stroke="#10B981" stroke-width="2"/>
                    <!-- Triple point node -->
                    <circle cx="160" cy="85" r="5" fill="#F43F5E"/>
                    <text x="175" y="82" fill="#FCA5A5" font-size="11" font-weight="800">ĐIỂM BA CỦA NƯỚC</text>
                    <text x="110" y="60" fill="#38BDF8" font-size="10">Rắn</text>
                    <text x="190" y="55" fill="#10B981" font-size="10">Lỏng</text>
                    <text x="210" y="110" fill="#FBBF24" font-size="10">Khí</text>
                    <!-- Definition Card -->
                    <rect x="300" y="30" width="245" height="115" rx="8" fill="#1E293B" stroke="#0284C7"/>
                    <text x="422" y="55" fill="#38BDF8" font-size="13" font-weight="800" text-anchor="middle">MỐC CHUẨN DUY NHẤT CỦA THANG K</text>
                    <text x="320" y="80" fill="#FBBF24" font-size="12" font-weight="700">• T = 273,16 K (đúng bằng 0,01°C)</text>
                    <text x="320" y="102" fill="#E2E8F0" font-size="11.5">• Áp suất: p = 611,65 Pa</text>
                    <text x="320" y="124" fill="#34D399" font-size="11.5">• Cả 3 thể RẮN - LỎNG - HƠI cùng cân bằng</text>
                    <text x="290" y="165" fill="#94A3B8" font-size="12" text-anchor="middle">Độ lặp lại cực cao, không phụ thuộc vào áp suất khí quyển bên ngoài</text>
                </svg>
            </div>
            <div class="diagram-caption"><strong>Ghi nhớ:</strong> Điểm ba của nước ($273{,}16	ext{ K} = 0{,}01^\\circ	ext{C}$, $611{,}65	ext{ Pa}$) là trạng thái cả 3 thể rắn, lỏng, khí cùng tồn tại cân bằng, là mốc chuẩn thang Kelvin.</div>
        `;
    }

    render_c_u3_an_toan_thuy_ngan(container) {
        container.innerHTML = `
            <div class="diagram-header">
                <div class="diagram-title"><span>⚠️</span><span>Quy Tắc An Toàn: Xử Lý Vỡ Nhiệt Kế Thủy Ngân</span></div>
                <div class="diagram-badge">Bài 3 - An Toàn Phòng Thí Nghiệm</div>
            </div>
            <div class="diagram-graphic-wrap">
                <svg viewBox="0 0 580 180" xmlns="http://www.w3.org/2000/svg">
                    <rect width="580" height="180" rx="12" fill="#0F172A" stroke="#334155"/>
                    <!-- Broken glass & Mercury drops -->
                    <circle cx="80" cy="85" r="7" fill="#94A3B8" stroke="#E2E8F0"/>
                    <circle cx="110" cy="95" r="9" fill="#94A3B8" stroke="#E2E8F0"/>
                    <circle cx="140" cy="80" r="6" fill="#94A3B8" stroke="#E2E8F0"/>
                    <text x="110" y="125" fill="#F87171" font-size="11" font-weight="700" text-anchor="middle">Thủy ngân (Hg) độc hại</text>

                    <!-- Plus Sulfur Powder -->
                    <text x="180" y="90" fill="#FBBF24" font-size="22" font-weight="800" text-anchor="middle">+</text>
                    <rect x="210" y="60" width="60" height="50" rx="6" fill="#FBBF24" fill-opacity="0.2" stroke="#FBBF24"/>
                    <text x="240" y="85" fill="#FBBF24" font-size="11" font-weight="800" text-anchor="middle">BỘT S</text>
                    <text x="240" y="100" fill="#FDE68A" font-size="9" text-anchor="middle">(Lưu huỳnh)</text>

                    <!-- Equals Arrow -->
                    <line x1="285" y1="85" x2="330" y2="85" stroke="#34D399" stroke-width="4"/>
                    <polygon points="330,79 340,85 330,91" fill="#34D399"/>

                    <!-- Result Panel -->
                    <rect x="350" y="30" width="195" height="115" rx="8" fill="#1E293B" stroke="#10B981"/>
                    <text x="447" y="55" fill="#34D399" font-size="13" font-weight="800" text-anchor="middle">Hg + S ➔ HgS (Rắn)</text>
                    <text x="365" y="80" fill="#E2E8F0" font-size="11">• Không bay hơi</text>
                    <text x="365" y="98" fill="#E2E8F0" font-size="11">• Không độc hại</text>
                    <text x="365" y="118" fill="#34D399" font-size="11" font-weight="700">✓ Thu gom an toàn tuyệt đối</text>
                    <text x="365" y="135" fill="#F87171" font-size="10.5">✗ KHÔNG DÙNG MÁY HÚT BỤI</text>
                </svg>
            </div>
            <div class="diagram-caption"><strong>Ghi nhớ:</strong> Khi nhiệt kế thủy ngân bị vỡ, rắc bột lưu huỳnh ($	ext{S}$) để tạo thành $	ext{HgS}$ dạng rắn không bay hơi trước khi thu gom an toàn.</div>
        `;
    }

    render_c_u3_thang_nhiet_do_chuan(container) {
        container.innerHTML = `
            <div class="diagram-header">
                <div class="diagram-title"><span>📊</span><span>Đối Chiếu 3 Thang Nhiệt Độ: Celsius, Kelvin, Fahrenheit</span></div>
                <div class="diagram-badge">Bài 3 - Bảng Đối Chiếu</div>
            </div>
            <div class="diagram-graphic-wrap">
                <svg viewBox="0 0 580 180" xmlns="http://www.w3.org/2000/svg">
                    <rect width="580" height="180" rx="12" fill="#0F172A" stroke="#334155"/>
                    <!-- 3 Thermometer Columns -->
                    <!-- Celsius -->
                    <rect x="80" y="30" width="20" height="110" rx="6" fill="#1E293B" stroke="#0284C7"/>
                    <rect x="82" y="70" width="16" height="68" rx="4" fill="#0284C7"/>
                    <text x="90" y="22" fill="#38BDF8" font-size="12" font-weight="800" text-anchor="middle">°C</text>
                    <!-- Kelvin -->
                    <rect x="230" y="30" width="20" height="110" rx="6" fill="#1E293B" stroke="#10B981"/>
                    <rect x="232" y="70" width="16" height="68" rx="4" fill="#10B981"/>
                    <text x="240" y="22" fill="#34D399" font-size="12" font-weight="800" text-anchor="middle">K</text>
                    <!-- Fahrenheit -->
                    <rect x="380" y="30" width="20" height="110" rx="6" fill="#1E293B" stroke="#F59E0B"/>
                    <rect x="382" y="70" width="16" height="68" rx="4" fill="#F59E0B"/>
                    <text x="390" y="22" fill="#FBBF24" font-size="12" font-weight="800" text-anchor="middle">°F</text>
                    <!-- Reference lines across 3 columns -->
                    <line x1="50" y1="40" x2="430" y2="40" stroke="#F43F5E" stroke-dasharray="2,2"/>
                    <text x="450" y="44" fill="#FCA5A5" font-size="11" font-weight="700">Nước sôi: 100°C ➔ 373,15 K ➔ 212°F</text>
                    <line x1="50" y1="90" x2="430" y2="90" stroke="#38BDF8" stroke-dasharray="2,2"/>
                    <text x="450" y="94" fill="#7DD3FC" font-size="11" font-weight="700">Băng tan: 0°C ➔ 273,15 K ➔ 32°F</text>
                    <line x1="50" y1="135" x2="430" y2="135" stroke="#A855F7" stroke-dasharray="2,2"/>
                    <text x="450" y="139" fill="#C084FC" font-size="11" font-weight="700">0 K: -273,15°C ➔ 0 K ➔ -459,67°F</text>
                </svg>
            </div>
            <div class="diagram-caption"><strong>Ghi nhớ:</strong> Thang Celsius lấy mốc $0^\\circ	ext{C}$ và $100^\\circ	ext{C}$; Thang Kelvin lấy $0	ext{ K}$; Thang Fahrenheit lấy $32^\\circ	ext{F}$ và $212^\\circ	ext{F}$.</div>
        `;
    }

    render_c_u3_nguyen_ly_nhiet_ke(container) {
        container.innerHTML = `
            <div class="diagram-header">
                <div class="diagram-title"><span>🔬</span><span>Nguyên Lý Hoạt Động Của Các Loại Nhiệt Kế</span></div>
                <div class="diagram-badge">Bài 3 - Nguyên Lý Đo</div>
            </div>
            <div class="diagram-graphic-wrap">
                <svg viewBox="0 0 580 180" xmlns="http://www.w3.org/2000/svg">
                    <rect width="580" height="180" rx="12" fill="#0F172A" stroke="#334155"/>
                    <!-- 3 principles -->
                    <rect x="30" y="25" width="165" height="110" rx="8" fill="#1E293B" stroke="#0284C7"/>
                    <text x="112" y="48" fill="#38BDF8" font-size="12" font-weight="800" text-anchor="middle">1. DÃN NỞ CHẤT LỎNG</text>
                    <text x="45" y="72" fill="#E2E8F0" font-size="10.5">• Nhiệt kế thủy ngân</text>
                    <text x="45" y="90" fill="#E2E8F0" font-size="10.5">• Nhiệt kế rượu, dầu</text>
                    <text x="112" y="120" fill="#94A3B8" font-size="10" text-anchor="middle">Thể tích dãn nở theo T</text>

                    <rect x="207" y="25" width="165" height="110" rx="8" fill="#1E293B" stroke="#10B981"/>
                    <text x="290" y="48" fill="#34D399" font-size="12" font-weight="800" text-anchor="middle">2. BIẾN THIÊN ĐIỆN</text>
                    <text x="220" y="72" fill="#E2E8F0" font-size="10.5">• Nhiệt điện trở (Pt)</text>
                    <text x="220" y="90" fill="#E2E8F0" font-size="10.5">• Cặp nhiệt điện Seebeck</text>
                    <text x="290" y="120" fill="#94A3B8" font-size="10" text-anchor="middle">Điện trở R tăng theo T</text>

                    <rect x="385" y="25" width="165" height="110" rx="8" fill="#1E293B" stroke="#F59E0B"/>
                    <text x="467" y="48" fill="#FBBF24" font-size="12" font-weight="800" text-anchor="middle">3. BỨC XẠ NHIỆT</text>
                    <text x="398" y="72" fill="#E2E8F0" font-size="10.5">• Nhiệt kế hồng ngoại</text>
                    <text x="398" y="90" fill="#E2E8F0" font-size="10.5">• Hỏa kế quang học</text>
                    <text x="467" y="120" fill="#94A3B8" font-size="10" text-anchor="middle">Đo năng lượng bức xạ từ xa</text>
                    <text x="290" y="160" fill="#E2E8F0" font-size="12" text-anchor="middle">Mỗi loại nhiệt kế ứng dụng một tính chất vật lý phụ thuộc nhiệt độ của vật chất</text>
                </svg>
            </div>
            <div class="diagram-caption"><strong>Ghi nhớ:</strong> Nhiệt kế hoạt động dựa trên các tính chất vật lý thay đổi theo nhiệt độ: sự dãn nở chất lỏng, điện trở, hiệu điện thế nhiệt điện, hoặc bức xạ hồng ngoại.</div>
        `;
    }
}

// Global instance for browser
if (typeof window !== 'undefined') {
    window.ScientificDiagramEngine = ScientificDiagramEngine;
    window.physicsSimulationEngine = new ScientificDiagramEngine();
}
