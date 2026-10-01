/**
 * Wayground Physics 12 - Mini-Game Knowledge & Visual Assets Database
 * Covers Unit 1, Unit 2, Unit 3 & All (Thermal Physics - GDPT 2018)
 * Tận dụng toàn bộ 29 ảnh minh họa khoa học chuẩn SGK
 */

const MINIGAMES_DATA = {
    // =========================================================================
    // GAME 1: LẬT THẺ TRÍ NHỚ TRỰC QUAN (MEMORY CARD MATCHING)
    // Mỗi cặp gồm: { id, photo, conceptTitle, conceptDetail, unit }
    // =========================================================================
    memoryPairs: [
        // --- BÀI 1: CẤU TRÚC CHẤT. SỰ CHUYỂN THỂ ---
        {
            id: "mem_u1_brown",
            unit: "unit1",
            photo: "images/brownian_motion.jpg",
            title: "Chuyển Động Brown (1827)",
            desc: "Hạt phấn hoa chuyển động hỗn loạn do va chạm nhiệt từ các phân tử nước xung quanh."
        },
        {
            id: "mem_u1_temp_speed",
            unit: "unit1",
            photo: "images/temp_molecular_speed.jpg",
            title: "Tốc Độ Phân Tử & Nhiệt Độ",
            desc: "Nhiệt độ càng cao thì tốc độ chuyển động nhiệt hỗn loạn của phân tử càng lớn."
        },
        {
            id: "mem_u1_states",
            unit: "unit1",
            photo: "images/three_states_matter.jpg",
            title: "Ba Trạng Thái Vật Chất",
            desc: "Rắn (thể tích & hình dạng xác định), Lỏng (thể tích xác định), Khí (chiếm toàn bộ bình chứa)."
        },
        {
            id: "mem_u1_forces",
            unit: "unit1",
            photo: "images/intermolecular_forces_r0.jpg",
            title: "Lực Tương Tác Phân Tử",
            desc: "Khoảng cách r < r₀ lực đẩy chiếm ưu thế, r > r₀ lực hút chiếm ưu thế, r = r₀ cân bằng."
        },
        {
            id: "mem_u1_crystal",
            unit: "unit1",
            photo: "images/crystal_vs_amorphous.jpg",
            title: "Rắn Kết Tinh vs Vô Định Hình",
            desc: "Chất rắn kết tinh có nhiệt độ nóng chảy xác định; chất rắn vô định hình thì không."
        },
        {
            id: "mem_u1_phase",
            unit: "unit1",
            photo: "images/phase_transition_diagram.jpg",
            title: "Sơ Đồ 6 Quá Trình Chuyển Thể",
            desc: "Nóng chảy - Đông đặc, Bay hơi - Ngưng tụ, Thăng hoa - Ngưng kết."
        },
        {
            id: "mem_u1_pressure_cooker",
            unit: "unit1",
            photo: "images/pressure_cooker_boiling.jpg",
            title: "Nồi Áp Suất & Nhiệt Độ Sôi",
            desc: "Áp suất trên mặt thoáng càng cao thì nhiệt độ sôi của chất lỏng càng tăng (nước sôi > 100°C)."
        },
        {
            id: "mem_u1_snow",
            unit: "unit1",
            photo: "images/snow_melting_cold.jpg",
            title: "Hiện Tượng Tuyết Tan Trời Lạnh",
            desc: "Quá trình nóng chảy của tuyết thu nhiệt lượng lớn từ môi trường xung quanh."
        },

        // --- BÀI 2: NỘI NĂNG & ĐỊNH LUẬT I NHIỆT ĐỘNG LỰC HỌC ---
        {
            id: "mem_u2_dl1",
            unit: "unit2",
            photo: "images/dl1_thermodynamics_piston.jpg",
            title: "Định Luật I: ΔU = A + Q",
            desc: "Độ biến thiên nội năng bằng tổng công và nhiệt lượng mà hệ nhận được."
        },
        {
            id: "mem_u2_pump",
            unit: "unit2",
            photo: "images/bicycle_pump_heating.jpg",
            title: "Bơm Xe Đạp Nóng Lên",
            desc: "Khi nén pít-tông khí, ta thực hiện công (A > 0) làm nội năng của chất khí tăng lên."
        },
        {
            id: "mem_u2_ways",
            unit: "unit2",
            photo: "images/change_internal_energy.jpg",
            title: "Hai Cách Biến Đổi Nội Năng",
            desc: "Gồm hai phương thức: Thực hiện công (có chuyển dời vĩ mô) và Truyền nhiệt (chuyển động vi mô)."
        },
        {
            id: "mem_u2_isochoric",
            unit: "unit2",
            photo: "images/isochoric_process.jpg",
            title: "Quá Trình Đẳng Tích (V = const)",
            desc: "Khí không sinh công (A = 0), do đó toàn bộ nhiệt lượng truyền sang nội năng: ΔU = Q."
        },
        {
            id: "mem_u2_adiabatic",
            unit: "unit2",
            photo: "images/adiabatic_spray.jpg",
            title: "Giãn Nở Đoạn Nhiệt (Q = 0)",
            desc: "Bình xịt khí giãn nở rất nhanh, hệ sinh công (A' > 0, A < 0), nội năng giảm và khí bị lạnh đi."
        },
        {
            id: "mem_u2_engine",
            unit: "unit2",
            photo: "images/heat_engine_principle.jpg",
            title: "Nguyên Lí Động Cơ Nhiệt",
            desc: "Nhận nhiệt Q₁ từ nguồn nóng, sinh công cơ học A' và nhả nhiệt lượng Q₂ cho nguồn lạnh."
        },
        {
            id: "mem_u2_isobaric",
            unit: "unit2",
            photo: "images/isobaric_work_pv.jpg",
            title: "Công Đẳng Áp: A' = p · ΔV",
            desc: "Trong đồ thị (p, V), độ lớn của công cơ học đúng bằng diện tích hình chữ nhật dưới đường đẳng áp."
        },

        // --- BÀI 3: NHIỆT ĐỘ. THANG NHIỆT ĐỘ & NHIỆT KẾ ---
        {
            id: "mem_u3_scales",
            unit: "unit3",
            photo: "images/three_temperature_scales.jpg",
            title: "Ba Thang Đo Nhiệt Độ",
            desc: "Thang Celsius (°C, Anders Celsius 1742), Thang Kelvin (K, Lord Kelvin 1848), Thang Fahrenheit (°F)."
        },
        {
            id: "mem_u3_kelvin_celsius",
            unit: "unit3",
            photo: "images/kelvin_celsius_scale.jpg",
            title: "Công Thức: T(K) = t(°C) + 273,15",
            desc: "Độ chia một độ trong thang Kelvin bằng đúng độ chia một độ trong thang Celsius (ΔT = Δt)."
        },
        {
            id: "mem_u3_abs_zero",
            unit: "unit3",
            photo: "images/absolute_zero_kelvin.jpg",
            title: "Độ Không Tuyệt Đối (0 K)",
            desc: "Ứng với -273,15 °C. Tại đây mọi chuyển động nhiệt của các phân tử đạt trạng thái cực tiểu."
        },
        {
            id: "mem_u3_triple_point",
            unit: "unit3",
            photo: "images/triple_point_water.jpg",
            title: "Điểm Ba Của Nước (273,16 K)",
            desc: "Tại 0,01 °C và áp suất 611,65 Pa, ba thể rắn, lỏng, hơi của nước cùng tồn tại cân bằng."
        },
        {
            id: "mem_u3_equilibrium",
            unit: "unit3",
            photo: "images/thermal_equilibrium.jpg",
            title: "Cân Bằng Nhiệt & Định Luật 0",
            desc: "Khi hai vật tiếp xúc đạt cùng nhiệt độ thì không còn sự truyền nhiệt ròng giữa chúng."
        },
        {
            id: "mem_u3_thermometer_types",
            unit: "unit3",
            photo: "images/thermometer_types.jpg",
            title: "Các Loại Nhiệt Kế Thực Tế",
            desc: "Nhiệt kế chất lỏng (thủy ngân/rượu), nhiệt kế điện tử (điện trở), nhiệt kế hồng ngoại."
        },
        {
            id: "mem_u3_mercury_safety",
            unit: "unit3",
            photo: "images/mercury_spill_safety.jpg",
            title: "An Toàn Thủy Ngân: Bột Lưu Huỳnh",
            desc: "Khi nhiệt kế vỡ, dùng bột lưu huỳnh (Sulfur) rắc lên để tạo hợp chất HgS rắn không bay hơi."
        },
        {
            id: "mem_u3_conduction",
            unit: "unit3",
            photo: "images/iron_wood_conduction.jpg",
            title: "Sờ Sắt Thấy Lạnh Hơn Gỗ",
            desc: "Cùng ở nhiệt độ phòng nhưng sắt dẫn nhiệt nhanh hơn gỗ, làm mất nhiệt từ ngón tay nhanh hơn."
        }
    ],

    // =========================================================================
    // GAME 2: GẮN NHÃN SƠ ĐỒ & ĐỒ THỊ KHOA HỌC (DIAGRAM PINPOINT)
    // Sơ đồ lớn kèm các điểm gán nhãn cần đặt đúng vị trí
    // =========================================================================
    diagramPuzzles: [
        {
            id: "pin_phase_transition",
            unit: "unit1",
            title: "Sơ Đồ 6 Quá Trình Chuyển Thể Của Vật Chất",
            sub: "Kéo thả hoặc nhấp chọn các nhãn quá trình vào đúng vị trí mũi tên biến đổi",
            image: "images/phase_transition_diagram.jpg",
            spots: [
                { id: "s1", label: "Nóng Chảy", x: 28, y: 38, hint: "Rắn chuyển thành Lỏng" },
                { id: "s2", label: "Đông Đặc", x: 28, y: 62, hint: "Lỏng chuyển thành Rắn" },
                { id: "s3", label: "Bay Hơi", x: 72, y: 38, hint: "Lỏng chuyển thành Khí/Hơi" },
                { id: "s4", label: "Ngưng Tụ", x: 72, y: 62, hint: "Khí chuyển thành Lỏng" },
                { id: "s5", label: "Thăng Hoa", x: 50, y: 18, hint: "Rắn trực tiếp thành Khí" },
                { id: "s6", label: "Ngưng Kết", x: 50, y: 84, hint: "Khí trực tiếp thành Rắn" }
            ]
        },
        {
            id: "pin_intermolecular_forces",
            unit: "unit1",
            title: "Đồ Thị Lực Tương Tác Phân Tử Theo Khoảng Cách r",
            sub: "Xác định các vùng lực đẩy, lực hút và vị trí cân bằng r₀",
            image: "images/intermolecular_forces_r0.jpg",
            spots: [
                { id: "f1", label: "Lực Đẩy chiếm ưu thế (r < r₀)", x: 25, y: 25, hint: "Khoảng cách rất gần" },
                { id: "f2", label: "Khoảng cách cân bằng r = r₀", x: 48, y: 56, hint: "Lực hút triệt tiêu lực đẩy, F = 0" },
                { id: "f3", label: "Lực Hút chiếm ưu thế (r > r₀)", x: 75, y: 68, hint: "Khoảng cách lớn hơn r₀" },
                { id: "f4", label: "Lực tương tác coi như bằng 0", x: 88, y: 48, hint: "Khoảng cách rất xa phân tử" }
            ]
        },
        {
            id: "pin_heat_engine",
            unit: "unit2",
            title: "Sơ Đồ Nguyên Lí Hoạt Động Của Động Cơ Nhiệt",
            sub: "Gắn các đại lượng trao đổi năng lượng vào sơ đồ nhiệt động lực học",
            image: "images/heat_engine_principle.jpg",
            spots: [
                { id: "he1", label: "Nguồn Nóng (Nhiệt độ T₁)", x: 50, y: 15, hint: "Cung cấp nhiệt lượng cho tác nhân" },
                { id: "he2", label: "Nhiệt lượng cung cấp Q₁", x: 38, y: 35, hint: "Q₁ truyền vào tác nhân sinh công" },
                { id: "he3", label: "Công có ích sinh ra A'", x: 80, y: 50, hint: "Công cơ học do động cơ phát ra" },
                { id: "he4", label: "Nhiệt lượng nhả ra Q₂", x: 38, y: 68, hint: "Thải vào nguồn lạnh" },
                { id: "he5", label: "Nguồn Lạnh (Nhiệt độ T₂ < T₁)", x: 50, y: 88, hint: "Môi trường nhận nhiệt thừa" }
            ]
        },
        {
            id: "pin_temp_scales",
            unit: "unit3",
            title: "Bảng So Sánh 3 Thang Nhiệt Độ Chuẩn",
            sub: "Điền đúng các mốc nhiệt độ quan trọng trên thang Celsius, Kelvin và Fahrenheit",
            image: "images/three_temperature_scales.jpg",
            spots: [
                { id: "ts1", label: "Nhiệt độ sôi của nước (100 °C / 373,15 K / 212 °F)", x: 50, y: 18, hint: "Mốc sôi chuẩn ở 1 atm" },
                { id: "ts2", label: "Thân nhiệt người bình thường (37 °C / 310 K / 98,6 °F)", x: 50, y: 45, hint: "Nhiệt độ cơ thể khỏe mạnh" },
                { id: "ts3", label: "Nhiệt độ tan của băng (0 °C / 273,15 K / 32 °F)", x: 50, y: 68, hint: "Nước đá tan ở 1 atm" },
                { id: "ts4", label: "Độ không tuyệt đối (0 K / -273,15 °C / -459,67 °F)", x: 50, y: 92, hint: "Nhiệt độ thấp nhất vũ trụ" }
            ]
        }
    ],

    // =========================================================================
    // GAME 3: PHÂN LOẠI HIỆN TƯỢNG SIÊU TỐC (RAPID PHYSICS SORTER)
    // Học sinh phân loại các hiện tượng / vật thể vào đúng thùng
    // =========================================================================
    sorterRounds: [
        {
            id: "sort_dl1_signs",
            unit: "unit2",
            title: "Phân Loại Dấu Định Luật I: ΔU = A + Q",
            sub: "Quy ước dấu cốt lõi: Nhận là DƯƠNG (>0), Thực hiện/Tỏa là ÂM (<0)",
            buckets: [
                { id: "b_q_in", title: "Nhận Nhiệt (Q > 0)", color: "#EF4444", icon: "🔥" },
                { id: "b_q_out", title: "Tỏa Nhiệt (Q < 0)", color: "#3B82F6", icon: "❄️" },
                { id: "b_a_in", title: "Nhận Công (A > 0)", color: "#10B981", icon: "📥" },
                { id: "b_a_out", title: "Sinh Công (A < 0)", color: "#F59E0B", icon: "📤" }
            ],
            items: [
                { text: "Bơm xe đạp bị nén khí từ bên ngoài", target: "b_a_in", image: "images/bicycle_pump_heating.jpg" },
                { text: "Khí nóng dãn nở đẩy pít-tông đi lên", target: "b_a_out", image: "images/dl1_thermodynamics_piston.jpg" },
                { text: "Đun nóng ấm nước trên bếp ga", target: "b_q_in", image: "images/change_internal_energy.jpg" },
                { text: "Thả thỏi sắt nóng vào chậu nước lạnh (sắt)", target: "b_q_out", image: "images/iron_wood_conduction.jpg" },
                { text: "Khối khí thu nhiệt lượng 100 J từ đèn cồn", target: "b_q_in", image: "images/change_internal_energy.jpg" },
                { text: "Chất khí sinh công 50 J làm quay tuabin", target: "b_a_out", image: "images/heat_engine_principle.jpg" },
                { text: "Ngoại lực dùng pít-tông nén khí một công 80 J", target: "b_a_in", image: "images/isochoric_process.jpg" },
                { text: "Khối đồng nguội đi, tỏa ra môi trường 40 J", target: "b_q_out", image: "images/thermal_equilibrium.jpg" }
            ]
        },
        {
            id: "sort_matter_types",
            unit: "unit1",
            title: "Phân Biệt Chất Rắn: Kết Tinh vs Vô Định Hình",
            sub: "Rèn phản xạ nhận biết cấu trúc phân tử và nhiệt độ nóng chảy",
            buckets: [
                { id: "b_crystal", title: "Chất Rắn Kết Tinh", color: "#8B5CF6", icon: "💎" },
                { id: "b_amorphous", title: "Chất Rắn Vô Định Hình", color: "#EC4899", icon: "🧪" }
            ],
            items: [
                { text: "Muối ăn (NaCl) dạng tinh thể lập phương", target: "b_crystal", image: "images/crystal_vs_amorphous.jpg" },
                { text: "Thủy tinh cửa sổ làm từ cát silicat", target: "b_amorphous", image: "images/crystal_vs_amorphous.jpg" },
                { text: "Kim cương và than chì (Graphite)", target: "b_crystal", image: "images/anisotropic_crystal.jpg" },
                { text: "Nhựa đường trải mặt đường giao thông", target: "b_amorphous", image: "images/crystal_vs_amorphous.jpg" },
                { text: "Băng tuyết (nước đá tinh khiết)", target: "b_crystal", image: "images/snow_melting_cold.jpg" },
                { text: "Kẹo mạch nha và hắc ín", target: "b_amorphous", image: "images/crystal_vs_amorphous.jpg" },
                { text: "Thạch anh (Quartz) có tính dị hướng", target: "b_crystal", image: "images/anisotropic_crystal.jpg" },
                { text: "Chất dẻo Polietilen (PE)", target: "b_amorphous", image: "images/crystal_vs_amorphous.jpg" }
            ]
        },
        {
            id: "sort_thermometers",
            unit: "unit3",
            title: "Ứng Dụng Các Loại Nhiệt Kế",
            sub: "Chọn loại nhiệt kế phù hợp nhất cho từng trường hợp đo thực tế",
            buckets: [
                { id: "b_clinical", title: "Nhiệt Kế Y Tế (35-42°C)", color: "#10B981", icon: "🩺" },
                { id: "b_lab_mercury", title: "Nhiệt Kế PTN (-10 đến 110°C)", color: "#06B6D4", icon: "🌡️" },
                { id: "b_infrared", title: "Nhiệt Kế Hồng Ngoại (Từ xa)", color: "#F59E0B", icon: "📡" }
            ],
            items: [
                { text: "Đo thân nhiệt học sinh bị sốt kẹp nách", target: "b_clinical", image: "images/clinical_thermometer.jpg" },
                { text: "Đo nhiệt độ nước sôi trong thí nghiệm đun cồn", target: "b_lab_mercury", image: "images/thermometer_types.jpg" },
                { text: "Kiểm tra nhiệt độ trán từ xa tại cổng sân bay", target: "b_infrared", image: "images/thermometer_types.jpg" },
                { text: "Theo dõi nhiệt độ hỗn hợp nước đá đang tan trong cốc", target: "b_lab_mercury", image: "images/triple_point_water.jpg" },
                { text: "Đo thân nhiệt trẻ sơ sinh quấy khóc không chạm da", target: "b_infrared", image: "images/clinical_thermometer.jpg" },
                { text: "Đo nhiệt độ chất lỏng trong bình đun kín phòng thí nghiệm", target: "b_lab_mercury", image: "images/thermometer_types.jpg" }
            ]
        }
    ]
};

// Expose globally
window.MINIGAMES_DATA = MINIGAMES_DATA;
