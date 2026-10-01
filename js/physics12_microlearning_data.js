/**
 * Wayground Physics 12 - Master Micro-learning Data Hub (v2.2.0)
 * Standard: GDPT 2018 - Chương trình SGK mới môn Vật lí Lớp 12
 * Khóa thi Tốt nghiệp THPT 2025 - 2026 - 2027
 * Tích hợp đầy đủ hình ảnh thí nghiệm mô phỏng và bộ câu hỏi trọng tâm cào về từ Thầy Đỗ Công Thành (File 27, 25, 24)
 * Bộ 4 Dạng Nhiệm Vụ: MCQ (Phần I), Thí nghiệm mô phỏng (Explore), Đúng/Sai 4 ý lũy tiến (Phần II), Điền số Numpad (Phần III)
 */

const MICRO_LEARNING_BANK_12 = {
    grade: 12,
    title: "Vật Lí 12 • GDPT 2018 (Thi TN THPT 2025-2027)",
    theme_color: "#EF4444",
    lessons: [
        // =====================================================================
        // CHƯƠNG 1: VẬT LÍ NHIỆT (THERMAL PHYSICS)
        // =====================================================================

        // BÀI 1: CẤU TRÚC CỦA CHẤT & SỰ CHUYỂN THỂ
        {
            lesson_id: "p12_l01_cau_truc_chat_chuyen_the",
            title: "Bài 1: Cấu Trúc Của Chất & Sự Chuyển Thể",
            chapter: "Chương 1: Vật Lí Nhiệt",
            grade: 12,
            icon: "🧊",
            badge: "Bậc Thầy Chuyển Thể",
            total_xp: 500,
            description: "Thấu suốt mô hình động học phân tử, cấu trúc thể rắn, lỏng, khí và đồ thị chuyển thể chất rắn kết tinh.",
            micro_units: [
                {
                    unit_id: "p12_u1_1",
                    title: "Đơn vị 1: Mô hình động học phân tử & Thang nhiệt độ",
                    short_desc: "Chuyển động Brown, tương tác phân tử và thang Kelvin T = t + 273.15",
                    duration: "4 phút",
                    xp_reward: 100,
                    hook: {
                        title: "Bí Ẩn Độ Không Tuyệt Đối",
                        scenario: "Tại sao các nhà khoa học vũ trụ có thể nung nóng vật chất lên hàng triệu độ trong lõi Mặt Trời, nhưng không bao giờ có thể làm lạnh bất kì vật nào xuống dưới -273,15°C (0 Kelvin)?",
                        curiosity_prompt: "Ở 0 Kelvin, toàn bộ chuyển động nhiệt hỗn loạn của các phân tử hoàn toàn ngừng lại!",
                        image: "images/absolute_zero_kelvin.jpg"
                    },
                    challenge: {
                        type: "slider_lab",
                        title: "Mô phỏng: Chuyển Động Nhiệt Phân Tử",
                        instruction: "Tăng nhiệt độ $T$ từ $100\\,\\text{K}$ lên $600\\,\\text{K}$ để chứng kiến các hạt phân tử va chạm hỗn loạn với tốc độ kinh hoàng!",
                        config: { fixed_r: 10, min_u: 100, max_u: 600, step: 50 }
                    },
                    memory_card: {
                        title: "Mô Hình Động Học Phân Tử & Thang Kelvin",
                        rule: "• Các chất cấu tạo từ các phân tử chuyển động hỗn loạn không ngừng.\n• Nhiệt độ càng cao thì tốc độ chuyển động nhiệt càng lớn.\n• Lực tương tác phân tử: vừa có lực hút, vừa có lực đẩy.",
                        formula: "T(\\text{K}) = t(^\\circ\\text{C}) + 273,15",
                        image: "images/three_states_matter.jpg",
                        key_takeaway: "• Khoảng chia $1\\,\\text{K}$ bằng khoảng chia $1^\\circ\\text{C}$ ($\\Delta T = \\Delta t$).\n• Khoảng cách phân tử: Thể khí >> Thể lỏng ≈ Thể rắn.",
                        mnemonic: "💡 Mẹo nhớ: Muốn đổi sang Kelvin, lấy độ C CỘNG 273,15!"
                    },
                    practice_drill: [
                        {
                            id: "p12_drill_1_1_1",
                            type: "mcq",
                            level: "Nhận biết",
                            question: "Khi khoảng cách giữa các phân tử rất nhỏ thì giữa các phân tử",
                            options: [
                                "Có cả lực hút và lực đẩy, nhưng lực đẩy lớn hơn lực hút.",
                                "Chỉ có lực hút phân tử.",
                                "Chỉ có lực đẩy phân tử.",
                                "Lực hút và lực đẩy hoàn toàn triệt tiêu nhau."
                            ],
                            correct: 0,
                            image: "images/intermolecular_forces_r0.jpg",
                            explanation: "Khi các phân tử lại rất gần nhau ($r < r_0$), lực đẩy chiếm ưu thế hơn lực hút."
                        },
                        {
                            id: "p12_drill_1_1_2",
                            type: "multi_tf",
                            level: "Thông hiểu",
                            context: "Khi nghiên cứu về cấu tạo chất và chuyển thể theo chương trình GDPT 2018:",
                            image: "images/crystal_vs_amorphous.jpg",
                            items: [
                                {
                                    text: "Chất rắn kết tinh có cấu trúc tinh thể và nhiệt độ nóng chảy hoàn toàn xác định ở áp suất chuẩn.",
                                    correct: true,
                                    explanation: "Đúng, ví dụ như nước đá nóng chảy ở 0°C, sắt nóng chảy ở 1538°C."
                                },
                                {
                                    text: "Chất rắn vô định hình (thủy tinh, hắc ín) không có cấu trúc tinh thể và không có nhiệt độ nóng chảy xác định.",
                                    correct: true,
                                    explanation: "Đúng, khi nung nóng chất rắn vô định hình mềm dần rồi chuyển sang thể lỏng liên tục."
                                },
                                {
                                    text: "Các hạt phấn hoa chuyển động Brown trong nước là do bản thân hạt phấn hoa tự bơi.",
                                    correct: false,
                                    explanation: "Sai, hạt phấn hoa chuyển động không ngừng là do bị các phân tử nước va chạm hỗn loạn từ mọi phía."
                                },
                                {
                                    text: "Trong suốt thời gian nóng chảy của chất rắn kết tinh, nhiệt độ của khối chất luôn không đổi.",
                                    correct: true,
                                    explanation: "Đúng, toàn bộ nhiệt lượng cung cấp dùng để phá vỡ mạng tinh thể chứ không làm tăng động năng nhiệt phân tử."
                                }
                            ]
                        },
                        {
                            id: "p12_drill_1_1_3",
                            type: "short_answer",
                            level: "Vận dụng",
                            question: "Một nhiệt kế đo nhiệt độ phòng là $27^\\circ\\text{C}$. Nhiệt độ tuyệt đối tương ứng trong thang Kelvin là bao nhiêu Kelvin (làm tròn đến phần nguyên)?",
                            correct_value: 300,
                            tolerance: 0.5,
                            unit_symbol: "K",
                            unit: "Kelvin (K)",
                            explanation: "$T = t + 273,15 = 27 + 273,15 = 300,15\\,\\text{K} \\approx 300\\,\\text{K}$."
                        }
                    ],
                    advanced_challenge: {
                        id: "p12_adv_1_1",
                        title: "🔥 Nghịch Lý Sôi Dưới Áp Suất Thấp",
                        question: "Trên đỉnh núi Everest cao 8848m, người ta đun nước thấy nước sôi ở nhiệt độ chỉ khoảng 68°C. Nguyên nhân vật lí là gì?",
                        options: [
                            "Áp suất khí quyển trên đỉnh núi rất thấp, áp suất hơi bão hòa dễ dàng bằng áp suất ngoài.",
                            "Không khí trên núi quá loãng làm lửa cháy mạnh hơn.",
                            "Nước trên núi chứa nhiều khoáng chất hạ nhiệt độ sôi.",
                            "Gia tốc trọng trường trên cao giảm làm phân tử nước nhẹ hơn."
                        ],
                        correct: 0,
                        bonus_xp: 80,
                        explanation: "Nhiệt độ sôi là nhiệt độ mà áp suất hơi bão hòa của chất lỏng bằng áp suất khí quyển đè lên mặt thoáng. Áp suất ngoài càng nhỏ, nước sôi ở nhiệt độ càng thấp!"
                    }
                }
            ],
            summary: {
                title: "Tổng Kết Bài 1: Cấu Trúc Chất & Chuyển Thể",
                mindmap_nodes: [
                    { title: "Mô hình phân tử", content: "Chất cấu tạo từ các phân tử chuyển động hỗn loạn không ngừng; nhiệt độ tỉ lệ thuận với động năng nhiệt." },
                    { title: "Thang Kelvin", content: "$T(\\text{K}) = t(^\\circ\\text{C}) + 273,15$; $0\\,\\text{K}$ là độ không tuyệt đối." },
                    { title: "Chất rắn", content: "Kết tinh (có nhiệt độ nóng chảy xác định, dị hướng/đẳng hướng) vs Vô định hình (không có nhiệt độ nóng chảy xác định)." }
                ],
                cheat_sheet: [
                    { name: "Đổi thang nhiệt", formula: "T(\\text{K}) = t(^\\circ\\text{C}) + 273,15", unit: "K" },
                    { name: "Khoảng chia", formula: "\\Delta T = \\Delta t", unit: "K = ^\\circ\\text{C}" },
                    { name: "Lực tương tác", formula: "r < r_0 \\implies F_{day} > F_{hut}", unit: "N" }
                ],
                boss_challenge: {
                    boss_name: "Băng Hỏa Thần Nữ ❄️🔥",
                    boss_hp: 100,
                    boss_avatar: "❄️",
                    dialogue: "Ngươi có chịu được sự biến đổi pha từ băng giá âm độ sang hơi nước rực lửa của ta không?",
                    questions: [
                        {
                            question: "Đặc điểm nào sau đây KHÔNG PHẢI của chất rắn kết tinh?",
                            options: [
                                "Không có nhiệt độ nóng chảy xác định.",
                                "Có cấu trúc tinh thể tuần hoàn trong không gian.",
                                "Có nhiệt độ nóng chảy hoàn toàn xác định ở áp suất chuẩn.",
                                "Có thể có tính dị hướng hoặc đẳng hướng."
                            ],
                            correct: 0,
                            damage: 50
                        },
                        {
                            question: "Khi đưa một khối nước đá từ -10°C đến khi tan chảy hoàn toàn thành nước ở 0°C thì",
                            options: [
                                "Nhiệt độ tăng dần từ -10°C lên 0°C rồi giữ nguyên 0°C trong suốt quá trình nóng chảy.",
                                "Nhiệt độ tăng liên tục không ngừng từ -10°C đến 100°C.",
                                "Nhiệt độ giảm xuống rồi mới tăng.",
                                "Nhiệt độ giữ nguyên -10°C cho đến khi tan hết."
                            ],
                            correct: 0,
                            damage: 50
                        }
                    ]
                }
            }
        },

        // BÀI 2: NỘI NĂNG & ĐỊNH LUẬT I NHIỆT ĐỘNG LỰC HỌC
        {
            lesson_id: "p12_l02_noi_nang_dinh_luat_1",
            title: "Bài 2: Nội Năng & Định Luật I Nhiệt Động Lực Học",
            chapter: "Chương 1: Vật Lí Nhiệt",
            grade: 12,
            icon: "⚙️",
            badge: "Nhà Kỹ Thuật Nhiệt Động",
            total_xp: 480,
            description: "Nắm vững bản chất nội năng U, hai phương thức truyền nhiệt và thực hiện công, biểu thức vàng ΔU = A + Q với quy ước dấu chuẩn.",
            micro_units: [
                {
                    unit_id: "p12_u2_1",
                    title: "Đơn vị 1: Định luật I Nhiệt động lực học & Quy ước dấu",
                    short_desc: "Độ biến thiên nội năng: ΔU = A + Q (Nhận dương, nhả âm)",
                    duration: "5 phút",
                    xp_reward: 120,
                    hook: {
                        title: "Hiện Tượng Bơm Xe Đạp Nóng Lên",
                        scenario: "Khi bạn dùng bơm tay để bơm lốp xe đạp, chỉ sau vài chục lần nhấn piston, ta sờ vào đầu dưới của ống bơm thấy nóng ran lên dù không hề hơ trên lửa. Vì sao ống bơm lại nóng lên?",
                        curiosity_prompt: "Đó là vì công cơ học mà bạn thực hiện đã chuyển hóa thành nội năng của khối khí bên trong!",
                        image: "images/bicycle_pump_heating.jpg"
                    },
                    challenge: {
                        type: "slider_lab",
                        title: "Mô phỏng Piston: Nén Khí Sinh Nhiệt",
                        instruction: "Kéo nén piston để thực hiện công $A > 0$ và quan sát kim nhiệt kế nhảy vọt tăng vọt nội năng $\\Delta U$!",
                        config: { fixed_r: 10, min_u: 1, max_u: 5, step: 1 }
                    },
                    memory_card: {
                        title: "Định Luật I Nhiệt Động Lực Học",
                        rule: "Độ biến thiên nội năng của một hệ bằng tổng công và nhiệt lượng mà hệ nhận được.",
                        formula: "\\Delta U = A + Q",
                        image: "images/dl1_thermodynamics_piston.jpg",
                        key_takeaway: "QUY ƯỚC DẤU BẮT BUỘC:\n• $Q > 0$: Hệ NHẬN nhiệt lượng | $Q < 0$: Hệ TRUYỀN nhiệt lượng.\n• $A > 0$: Hệ NHẬN công (bị nén) | $A < 0$: Hệ THỰC HIỆN công (sinh công đẩy vật khác).",
                        mnemonic: "💡 Mẹo nhớ quy ước dấu: NHẬN VÀO LÀ DƯƠNG (+) • TRUYỀN ĐI LÀ ÂM (-)!"
                    },
                    practice_drill: [
                        {
                            id: "p12_drill_2_1_1",
                            type: "mcq",
                            level: "Nhận biết",
                            question: "Cách nào sau đây làm thay đổi nội năng của vật bằng hình thức THỰC HIỆN CÔNG?",
                            options: [
                                "Cọ xát miếng kim loại lên mặt bàn nhám làm miếng kim loại nóng lên.",
                                "Thả miếng kim loại vào cốc nước sôi.",
                                "Hơ miếng kim loại trên ngọn lửa đèn cồn.",
                                "Phơi miếng kim loại ngoài trời nắng gắt."
                            ],
                            correct: 0,
                            image: "images/change_internal_energy.jpg",
                            explanation: "Cọ xát là quá trình thực hiện công cơ học chuyển hóa thành nội năng."
                        },
                        {
                            id: "p12_drill_2_1_2",
                            type: "multi_tf",
                            level: "Thông hiểu",
                            context: "Người ta truyền cho chất khí trong xilanh một nhiệt lượng $Q = 100\\,\\text{J}$. Chất khí nở ra đẩy pit-tông lên và thực hiện một công $A' = 70\\,\\text{J}$ đẩy môi trường ngoài.",
                            image: "images/dl1_thermodynamics_piston.jpg",
                            items: [
                                {
                                    text: "Công mà khối khí nhận được trong quá trình này là $A = -70\\,\\text{J}$.",
                                    correct: true,
                                    explanation: "Đúng, vì khối khí thực hiện công ra ngoài nên theo quy ước dấu $A = -70\\,\\text{J}$."
                                },
                                {
                                    text: "Nhiệt lượng mà khối khí nhận được mang dấu dương: $Q = +100\\,\\text{J}$.",
                                    correct: true,
                                    explanation: "Đúng, khối khí nhận nhiệt lượng nên $Q > 0$."
                                },
                                {
                                    text: "Độ biến thiên nội năng của khối khí là $\\Delta U = +30\\,\\text{J}$.",
                                    correct: true,
                                    explanation: "Đúng, $\\Delta U = A + Q = -70 + 100 = +30\\,\\text{J}$ (nội năng tăng thêm)."
                                },
                                {
                                    text: "Trong quá trình đẳng tích (thể tích không đổi), chất khí không sinh công nên $\\Delta U = Q$.",
                                    correct: true,
                                    explanation: "Đúng, khi thể tích không đổi thì $A = 0 \\implies \\Delta U = Q$."
                                }
                            ]
                        },
                        {
                            id: "p12_drill_2_1_3",
                            type: "short_answer",
                            level: "Vận dụng",
                            question: "Khi nén một khối khí trong xilanh, người ta thực hiện một công $A = 120\\,\\text{J}$. Trong quá trình này, khối khí truyền ra môi trường xung quanh một nhiệt lượng $40\\,\\text{J}$. Hãy tính độ biến thiên nội năng $\\Delta U$ của khối khí (đơn vị Jun).",
                            correct_value: 80,
                            tolerance: 0.05,
                            unit_symbol: "J",
                            unit: "Jun (J)",
                            explanation: "Khối khí nhận công: $A = +120\\,\\text{J}$. Khối khí truyền nhiệt ra ngoài: $Q = -40\\,\\text{J}$. Độ biến thiên nội năng: $\\Delta U = A + Q = 120 + (-40) = 80\\,\\text{J}$."
                        }
                    ],
                    advanced_challenge: {
                        id: "p12_adv_2_1",
                        title: "🔥 Bình Xịt Khử Mùi Phun Sương Mát Lạnh",
                        question: "Khi bạn xịt mạnh bình khử mùi hoặc bình gas mini trong vài giây, tại sao vỏ kim loại của bình lại lạnh buốt và có thể bám một lớp sương giá mỏng?",
                        options: [
                            "Khí nén bên trong giãn nở đột ngột thực hiện công chống lại áp suất ngoài, làm nội năng khí giảm mạnh dẫn đến hạ nhiệt độ.",
                            "Dung dịch bên trong phản ứng hóa học thu nhiệt với kim loại.",
                            "Gió thổi trên bề mặt bình làm bốc hơi kim loại.",
                            "Vỏ bình làm bằng chất cách nhiệt tuyệt đối."
                        ],
                        correct: 0,
                        bonus_xp: 90,
                        explanation: "Quá trình giãn nở đoạn nhiệt: Khí thực hiện công sinh công ($A < 0$) trong thời gian rất ngắn ($Q \\approx 0$), do đó $\\Delta U = A < 0$, nội năng giảm mạnh khiến nhiệt độ tụt sâu!"
                    }
                }
            ],
            summary: {
                title: "Tổng Kết Bài 2: Nội Năng & Định Luật I NĐLH",
                mindmap_nodes: [
                    { title: "Nội năng U", content: "Tổng động năng chuyển động nhiệt của các phân tử và thế năng tương tác giữa chúng: $U = f(T, V)$." },
                    { title: "2 Phương thức", content: "Thực hiện công (có sự chuyển dời vĩ mô) và Truyền nhiệt (chỉ có sự trao đổi vi mô không chuyển dời vĩ mô)." },
                    { title: "Định luật I", content: "$\\Delta U = A + Q$. Nhận (+) • Cho (-)." }
                ],
                cheat_sheet: [
                    { name: "Định luật I", formula: "\\Delta U = A + Q", unit: "J" },
                    { name: "Quá trình đẳng tích", formula: "A = 0 \\implies \\Delta U = Q", unit: "J" },
                    { name: "Quá trình đoạn nhiệt", formula: "Q = 0 \\implies \\Delta U = A", unit: "J" }
                ],
                boss_challenge: {
                    boss_name: "Nhiệt Động Cơ Ma ⚙️🔥",
                    boss_hp: 100,
                    boss_avatar: "⚙️",
                    dialogue: "Ngươi có phân biệt được hệ nhận công hay sinh công? Hãy bước vào buồng đốt piston của ta!",
                    questions: [
                        {
                            question: "Trong một chu trình kín của một động cơ nhiệt, chất khí nhận nhiệt lượng 500 J từ nguồn nóng và truyền 300 J cho nguồn lạnh. Công mà động cơ sinh ra là",
                            options: ["200 J", "800 J", "500 J", "300 J"],
                            correct: 0,
                            damage: 50
                        },
                        {
                            question: "Nếu chất khí trong xilanh nhận công 50 J và nội năng tăng thêm 80 J thì chất khí đã",
                            options: [
                                "Nhận nhiệt lượng 30 J.",
                                "Tỏa nhiệt lượng 30 J.",
                                "Nhận nhiệt lượng 130 J.",
                                "Tỏa nhiệt lượng 130 J."
                            ],
                            correct: 0,
                            damage: 50
                        }
                    ]
                }
            }
        },

        // BÀI 3: NHIỆT ĐỘ. THANG NHIỆT ĐỘ & NHIỆT KẾ
        {
            lesson_id: "p12_l03_nhiet_do_thang_nhiet_ke",
            title: "Bài 3: Nhiệt Độ. Thang Nhiệt Độ & Nhiệt Kế",
            chapter: "Chương 1: Vật Lí Nhiệt",
            grade: 12,
            icon: "🌡️",
            badge: "Bậc Thầy Đo Lường Nhiệt",
            total_xp: 460,
            description: "Làm chủ định nghĩa trạng thái cân bằng nhiệt, nguyên lý hoạt động của các loại nhiệt kế và sự chuyển đổi giữa thang Celsius, Kelvin.",
            micro_units: [
                {
                    unit_id: "p12_u3_1",
                    title: "Đơn vị 1: Cân bằng nhiệt & Thang nhiệt độ Kelvin",
                    short_desc: "Trạng thái cân bằng nhiệt, nhiệt kế y tế và thang đo Kelvin: T = t + 273.15",
                    duration: "4 phút",
                    xp_reward: 110,
                    hook: {
                        title: "Cảm Giác Đánh Lừa Xúc Giác",
                        scenario: "Vào một buổi sáng mùa đông, khi chạm tay vào chiếc chân bàn bằng sắt ta thấy buốt lạnh, nhưng chạm vào mặt bàn gỗ lại thấy ấm hơn. Có phải nhiệt độ của thanh sắt thấp hơn mặt bàn gỗ không?",
                        curiosity_prompt: "Thực ra cả hai đều cùng một nhiệt độ phòng cân bằng nhiệt, thanh sắt lạnh hơn vì nó dẫn nhiệt ra khỏi tay ta nhanh hơn gỗ rất nhiều!",
                        image: "images/iron_wood_conduction.jpg"
                    },
                    challenge: {
                        type: "slider_lab",
                        title: "Mô phỏng: Cân Bằng Nhiệt Giữa 2 Vật",
                        instruction: "Kéo nhiệt độ 2 vật tiếp xúc nhau để xem dòng năng lượng truyền tự phát từ vật có nhiệt độ cao sang vật có nhiệt độ thấp!",
                        config: { fixed_r: 10, min_u: 20, max_u: 100, step: 10 }
                    },
                    memory_card: {
                        title: "Trạng Thái Cân Bằng Nhiệt & Nhiệt Kế",
                        rule: "• Khi hai vật có nhiệt độ khác nhau tiếp xúc nhau, nhiệt năng truyền từ vật có nhiệt độ cao sang vật có nhiệt độ thấp cho đến khi nhiệt độ hai vật bằng nhau.\n• Nhiệt kế hoạt động dựa trên sự phụ thuộc của một tính chất vật lí (thể tích, điện trở, bức xạ) vào nhiệt độ.",
                        formula: "T(\\text{K}) = t(^\\circ\\text{C}) + 273,15",
                        image: "images/three_temperature_scales.jpg",
                        key_takeaway: "• Nhiệt kế thủy ngân / rượu: dựa trên sự giãn nở vì nhiệt của chất lỏng.\n• Nhiệt kế y tế có chỗ thắt ở đáy ống để giữ mức thủy ngân không bị tụt xuống khi rút ra đọc.",
                        mnemonic: "💡 Mẹo: Cân bằng nhiệt ➔ Nhiệt độ bằng nhau ➔ Dừng truyền nhiệt!"
                    },
                    practice_drill: [
                        {
                            id: "p12_drill_3_1_1",
                            type: "mcq",
                            level: "Nhận biết",
                            question: "Nguyên tắc hoạt động của nhiệt kế chất lỏng (như nhiệt kế thủy ngân, nhiệt kế rượu) dựa trên",
                            options: [
                                "Sự giãn nở vì nhiệt của chất lỏng.",
                                "Sự thay đổi màu sắc của vật khi bị nung nóng.",
                                "Sự biến thiên điện trở kim loại theo nhiệt độ.",
                                "Sự phát xạ tia hồng ngoại của bề mặt vật chất."
                            ],
                            correct: 0,
                            image: "images/thermometer_types.jpg",
                            explanation: "Nhiệt kế chất lỏng hoạt động dựa trên sự nở vì nhiệt của chất lỏng trong bầu chứa."
                        },
                        {
                            id: "p12_drill_3_1_2",
                            type: "multi_tf",
                            level: "Thông hiểu",
                            context: "Một học sinh đo thân nhiệt bằng nhiệt kế y tế thủy ngân và ghi nhận số đo $37,0^\\circ\\text{C}$:",
                            image: "images/clinical_thermometer.jpg",
                            items: [
                                {
                                    text: "Thân nhiệt này tương đương với 310,15 K trong thang nhiệt độ tuyệt đối Kelvin.",
                                    correct: true,
                                    explanation: "Đúng, $T = 37 + 273,15 = 310,15\\,\\text{K}$."
                                },
                                {
                                    text: "Nhiệt kế y tế thủy ngân có chỗ uốn cong (chỗ thắt) ở gần bầu để ngăn thủy ngân tự động tụt xuống bầu trước khi đọc số đo.",
                                    correct: true,
                                    explanation: "Đúng, chỗ thắt giúp cố định mức thủy ngân khi đưa nhiệt kế ra khỏi cơ thể."
                                },
                                {
                                    text: "Nếu chẳng may làm vỡ nhiệt kế thủy ngân trong phòng học, ta có thể dùng bột lưu huỳnh rắc lên để thu gom an toàn.",
                                    correct: true,
                                    explanation: "Đúng, thủy ngân phản ứng tạo HgS dạng rắn không bay hơi, tránh độc tố hơi thủy ngân."
                                },
                                {
                                    text: "Trước khi dùng lại nhiệt kế y tế thủy ngân cho người tiếp theo, ta chỉ cần ngâm vào nước sôi 100°C để tiệt trùng.",
                                    correct: false,
                                    explanation: "Sai, nhiệt kế y tế chỉ có thang đo tối đa khoảng 42°C, ngâm vào nước sôi 100°C sẽ làm vỡ bầu thủy ngân ngay lập tức!"
                                }
                            ]
                        },
                        {
                            id: "p12_drill_3_1_3",
                            type: "short_answer",
                            level: "Vận dụng",
                            question: "Nếu độ biến thiên nhiệt độ của một khối chất là $\\Delta t = 25^\\circ\\text{C}$ thì độ biến thiên nhiệt độ tương ứng trong thang Kelvin $\\Delta T$ là bao nhiêu Kelvin?",
                            correct_value: 25,
                            tolerance: 0.05,
                            unit_symbol: "K",
                            unit: "Kelvin (K)",
                            explanation: "Khoảng chia của thang Celsius bằng đúng khoảng chia thang Kelvin, do đó $\\Delta T = \\Delta t = 25\\,\\text{K}$."
                        }
                    ],
                    advanced_challenge: {
                        id: "p12_adv_3_1",
                        title: "🔥 Điểm Ba Của Nước (Triple Point)",
                        question: "Điểm ba của nước trong thang đo quốc tế là trạng thái duy nhất mà nước tồn tại đồng thời ở cả 3 thể rắn, lỏng, hơi cân bằng động. Nhiệt độ của điểm ba này là",
                        options: [
                            "273,16 K (tương ứng 0,01°C) ở áp suất 611,65 Pa.",
                            "0,00 K (độ không tuyệt đối).",
                            "100,00°C ở áp suất 1 atm.",
                            "273,15 K ở áp suất 1 atm."
                        ],
                        correct: 0,
                        bonus_xp: 85,
                        explanation: "Điểm ba của nước được chọn làm mốc chuẩn nhiệt động lực học có nhiệt độ chính xác là 273,16 K (0,01°C)."
                    }
                }
            ],
            summary: {
                title: "Tổng Kết Bài 3: Nhiệt Độ & Thang Đo Nhiệt Kế",
                mindmap_nodes: [
                    { title: "Cân bằng nhiệt", content: "Trạng thái các đại lượng nhiệt độ không đổi theo thời gian; nhiệt độ là thước đo động năng tịnh tiến trung bình." },
                    { title: "Thang Kelvin", content: "$T(\\text{K}) = t(^\\circ\\text{C}) + 273,15$. Không có nhiệt độ âm trong thang Kelvin." },
                    { title: "Các loại nhiệt kế", content: "Chất lỏng (thủy ngân/rượu), Cặp nhiệt điện, Điện trở bán dẫn, Hồng ngoại không tiếp xúc." }
                ],
                cheat_sheet: [
                    { name: "Đổi đơn vị nhiệt", formula: "T(\\text{K}) = t(^\\circ\\text{C}) + 273,15", unit: "K" },
                    { name: "Độ biến thiên", formula: "\\Delta T = \\Delta t", unit: "K = ^\\circ\\text{C}" },
                    { name: "Điểm ba của nước", formula: "T_{tr} = 273,16\\,\\text{K}", unit: "K" }
                ],
                boss_challenge: {
                    boss_name: "Thần Nhiệt Đo Lường 🌡️⚡",
                    boss_hp: 100,
                    boss_avatar: "🌡️",
                    dialogue: "Ngươi có chắc mình chuyển đổi chính xác giữa Kelvin và Celsius trong mọi bài toán?",
                    questions: [
                        {
                            question: "Khi một vật có nhiệt độ 50°C thì nhiệt độ tuyệt đối của vật là",
                            options: ["323,15 K", "223,15 K", "50 K", "122 K"],
                            correct: 0,
                            damage: 50
                        },
                        {
                            question: "Thiết bị nào sau đây đo nhiệt độ cơ thể người nhanh nhất mà không cần chạm trực tiếp vào da?",
                            options: [
                                "Nhiệt kế hồng ngoại điện tử.",
                                "Nhiệt kế thủy ngân y tế.",
                                "Nhiệt kế rượu.",
                                "Nhiệt kế kim loại lưỡng kim."
                            ],
                            correct: 0,
                            damage: 50
                        }
                    ]
                }
            }
        },

        // BÀI 4: NHIỆT DUNG RIÊNG & THÍ NGHIỆM ĐO
        {
            lesson_id: "p12_l04_nhiet_dung_rieng_thi_nghiem",
            title: "Bài 4: Nhiệt Dung Riêng & Thí Nghiệm Thực Hành",
            chapter: "Chương 1: Vật Lí Nhiệt",
            grade: 12,
            icon: "🔥",
            badge: "Nhà Thực Nghiệm Nhiệt",
            total_xp: 500,
            description: "Nắm vững công thức Q = mcΔt, ý nghĩa nhiệt dung riêng lớn của nước điều hòa khí hậu và phương pháp đo bằng bình nhiệt lượng kế.",
            micro_units: [
                {
                    unit_id: "p12_u4_1",
                    title: "Đơn vị 1: Nhiệt lượng & Nhiệt dung riêng",
                    short_desc: "Công thức Q = mcΔT, đơn vị J/(kg.K) và vai trò của nước đối với khí hậu Trái Đất",
                    duration: "5 phút",
                    xp_reward: 120,
                    hook: {
                        title: "Vì Sao Vùng Biển Mát Hơn Vùng Sa Mạc?",
                        scenario: "Vào mùa hè, các vùng duyên hải ven biển ban ngày mát mẻ hơn nhiều so với các vùng sa mạc đất liền, dù cùng nhận lượng bức xạ Mặt Trời như nhau. Yếu tố vật lí nào quyết định điều này?",
                        curiosity_prompt: "Nước có nhiệt dung riêng c ≈ 4180 J/(kg.K), lớn gấp 4-5 lần đất cát, nên nước nóng lên chậm và nguội đi cũng rất chậm!",
                        image: "images/thermal_equilibrium.jpg"
                    },
                    challenge: {
                        type: "slider_lab",
                        title: "Mô phỏng: Cung Cấp Nhiệt Lượng Q = P.t",
                        instruction: "Tăng công suất bếp điện $\\mathcal{P}$ và thời gian đun $t$ để theo dõi độ tăng nhiệt độ của khối nước trong nhiệt lượng kế!",
                        config: { fixed_r: 10, min_u: 100, max_u: 500, step: 50 }
                    },
                    memory_card: {
                        title: "Công Thức Nhiệt Dung Riêng & Đo Nhiệt Lượng",
                        rule: "Nhiệt lượng cần cung cấp để làm nóng một vật khối lượng m tăng thêm một khoảng nhiệt độ ΔT là Q = mcΔT.\nNhiệt dung riêng c là nhiệt lượng cần thiết để làm 1 kg chất tăng thêm 1 K.",
                        formula: "Q = m \\cdot c \\cdot \\Delta T \\iff c = \\frac{Q}{m \\cdot \\Delta T}",
                        image: "images/experiments/exp_p3_img1.png",
                        key_takeaway: "• Đơn vị nhiệt dung riêng: $\\text{J/(kg}\\cdot\\text{K)}$ hoặc $\\text{J/(kg}\\cdot^\\circ\\text{C)}$.\n• Thí nghiệm đo: Cấp nhiệt bằng oát kế $\\mathcal{P}$, nhiệt lượng kế cách nhiệt: $\\mathcal{P} \\cdot t = (m c + m_k c_k)\\Delta T$.",
                        mnemonic: "💡 Mẹo nhớ: Q = m.c.Delta T: Quả Cầu Mang Trọng Trách!"
                    },
                    practice_drill: [
                        {
                            id: "p12_drill_4_1_1",
                            type: "mcq",
                            level: "Nhận biết",
                            question: "Đơn vị đo chuẩn của nhiệt dung riêng trong hệ SI là",
                            options: [
                                "J/(kg·K)",
                                "J/kg",
                                "J·kg·K",
                                "cal/g"
                            ],
                            correct: 0,
                            explanation: "$c = \\frac{Q}{m \\Delta T} \\implies \\text{J/(kg}\\cdot\\text{K)}$."
                        },
                        {
                            id: "p12_drill_4_1_2",
                            type: "multi_tf",
                            level: "Thông hiểu",
                            context: "Trong thí nghiệm đo nhiệt dung riêng của nước bằng nhiệt lượng kế điện:",
                            image: "images/experiments/exp_p5_img1.png",
                            items: [
                                {
                                    text: "Oát kế hoặc vôn kế - ampe kế dùng để đo công suất điện cấp cho dây nung nhiệt lượng kế.",
                                    correct: true,
                                    explanation: "Đúng, $\\mathcal{P} = U \\cdot I$ xác định năng lượng cấp vào."
                                },
                                {
                                    text: "Cần khuấy nhẹ nước trong quá trình đun để nhiệt lượng lan tỏa đều khắp khối chất lỏng.",
                                    correct: true,
                                    explanation: "Đúng, que khuấy giúp nhiệt kế đo đúng nhiệt độ trung bình."
                                },
                                {
                                    text: "Bình nhiệt lượng kế thường có vỏ xốp cách nhiệt để giảm thiểu tối đa sự thất thoát nhiệt ra môi trường.",
                                    correct: true,
                                    explanation: "Đúng, giúp biểu thức cân bằng nhiệt $Q_{toa} = Q_{thu}$ chính xác nhất."
                                },
                                {
                                    text: "Bỏ qua nhiệt dung của vỏ bình và hao phí thì công thức tính là $c = \\frac{\\mathcal{P} \\cdot t}{m \\cdot (T_2 - T_1)}$.",
                                    correct: true,
                                    explanation: "Đúng, năng lượng điện chuyển hóa trọn vẹn thành nhiệt lượng làm ấm nước."
                                }
                            ]
                        },
                        {
                            id: "p12_drill_4_1_3",
                            type: "short_answer",
                            level: "Vận dụng",
                            question: "Cần cung cấp một nhiệt lượng bao nhiêu kiloJun (kJ) để đun nóng $2\\,\\text{kg}$ nước từ $20^\\circ\\text{C}$ lên $80^\\circ\\text{C}$? Cho nhiệt dung riêng của nước là $c = 4180\\,\\text{J/(kg}\\cdot\\text{K)}$.",
                            correct_value: 501.6,
                            tolerance: 1.0,
                            unit_symbol: "kJ",
                            unit: "kiloJun (kJ)",
                            explanation: "$Q = mc\\Delta t = 2 \\times 4180 \\times (80 - 20) = 501\\,600\\,\\text{J} = 501,6\\,\\text{kJ}$."
                        }
                    ],
                    advanced_challenge: {
                        id: "p12_adv_4_1",
                        title: "🔥 Hiệu Suất Đun Sôi Của Ấm Siêu Tốc",
                        question: "Một ấm siêu tốc 220V - 1500W đun sôi 1,5 kg nước từ 25°C mất 7 phút. Cho c = 4200 J/(kg.K). Hiệu suất nhiệt của ấm là khoảng bao nhiêu?",
                        options: [
                            "75%",
                            "85%",
                            "90%",
                            "65%"
                        ],
                        correct: 0,
                        bonus_xp: 90,
                        explanation: "$A_{toan\\,phan} = 1500 \\times 420 = 630\\,000\\,\\text{J}$. $Q_{ich} = 1,5 \\times 4200 \\times 75 = 472\\,500\\,\\text{J}$. $H = \\frac{472500}{630000} \\approx 75\\%$."
                    }
                }
            ],
            summary: {
                title: "Tổng Kết Bài 4: Nhiệt Dung Riêng & Thí Nghiệm",
                mindmap_nodes: [
                    { title: "Nhiệt dung riêng c", content: "Đặc trưng cho lượng nhiệt cần để 1 kg chất tăng 1 K: $Q = mc\\Delta T$." },
                    { title: "Nhiệt dung riêng của nước", content: "Rất lớn ($c \\approx 4180\\,\\text{J/(kg}\\cdot\\text{K)}$) ➔ Vai trò điều hòa khí hậu đại dương." },
                    { title: "Thí nghiệm đo", content: "Dùng nhiệt lượng kế điện: $Q = \\mathcal{P}t = mc\\Delta T$." }
                ],
                cheat_sheet: [
                    { name: "Nhiệt lượng", formula: "Q = m \\cdot c \\cdot \\Delta T", unit: "J" },
                    { name: "Nhiệt dung riêng", formula: "c = \\frac{Q}{m \\cdot \\Delta T}", unit: "J/(kg.K)" },
                    { name: "Công suất nhiệt kế", formula: "\\mathcal{P} \\cdot t = mc(T_2 - T_1)", unit: "W.s = J" }
                ],
                boss_challenge: {
                    boss_name: "Chúa Tể Nhiệt Lượng Kế ⚡♨️",
                    boss_hp: 100,
                    boss_avatar: "♨️",
                    dialogue: "Ngươi có tính toán được công suất và nhiệt lượng thất thoát trong các phép đo nhiệt lượng không?",
                    questions: [
                        {
                            question: "Một khối kim loại 1 kg nhận nhiệt lượng 3800 J thì tăng thêm 10 K. Nhiệt dung riêng của kim loại đó là",
                            options: ["380 J/(kg.K)", "3800 J/(kg.K)", "38 J/(kg.K)", "38000 J/(kg.K)"],
                            correct: 0,
                            damage: 50
                        },
                        {
                            question: "Chất nào sau đây có nhiệt dung riêng lớn nhất trong các chất thông thường?",
                            options: ["Nước lỏng.", "Đồng.", "Chì.", "Thủy ngân."],
                            correct: 0,
                            damage: 50
                        }
                    ]
                }
            }
        },

        // BÀI 5: NHIỆT NÓNG CHẢY RIÊNG & NHIỆT HÓA HƠI RIÊNG
        {
            lesson_id: "p12_l05_nhiet_nong_chay_hoa_hoi",
            title: "Bài 5: Nhiệt Nóng Chảy Riêng & Nhiệt Hóa Hơi Riêng",
            chapter: "Chương 1: Vật Lí Nhiệt",
            grade: 12,
            icon: "💨",
            badge: "Chuyên Gia Nhiệt Chuyển Thể",
            total_xp: 500,
            description: "Nắm vững bản chất nhiệt chuyển thể Q = mλ, Q = mL, giải thích hiện tượng bỏng hơi nước nguy hiểm hơn nước sôi.",
            micro_units: [
                {
                    unit_id: "p12_u5_1",
                    title: "Đơn vị 1: Nhiệt nóng chảy riêng λ & Nhiệt hóa hơi riêng L",
                    short_desc: "Q = m.λ (nóng chảy) và Q = m.L (hóa hơi), đơn vị J/kg",
                    duration: "5 phút",
                    xp_reward: 120,
                    hook: {
                        title: "Bỏng Hơi Nước Sôi Nguy Hiểm Gấp Bội",
                        scenario: "Tại sao khi mở nắp vung nồi cơm điện đang sôi hoặc nồi canh, nếu để luồng hơi nước 100°C phà trực tiếp vào da tay thì vết bỏng lại sâu và phồng rộp nặng hơn rất nhiều so với bị bắn vài giọt nước sôi 100°C?",
                        curiosity_prompt: "Khi 1 gam hơi nước ngưng tụ thành nước lỏng ở 100°C, nó giải phóng thêm một lượng nhiệt hóa hơi khổng lồ L ≈ 2,26 × 10⁶ J/kg!",
                        image: "images/pressure_cooker_boiling.jpg"
                    },
                    challenge: {
                        type: "slider_lab",
                        title: "Mô phỏng Đồ Thị Chuyển Thể Nhiệt",
                        instruction: "Kéo thanh nhiệt lượng cấp vào để theo dõi các đoạn nằm ngang khi nước đá nóng chảy (0°C) và khi nước sôi hóa hơi (100°C)!",
                        config: { fixed_r: 10, min_u: 0, max_u: 200, step: 20 }
                    },
                    memory_card: {
                        title: "Nhiệt Chuyển Thể: Nóng Chảy & Hóa Hơi",
                        rule: "• Nhiệt nóng chảy riêng λ: nhiệt lượng cần để làm nóng chảy hoàn toàn 1 kg chất rắn kết tinh ở nhiệt độ nóng chảy: Q = m.λ.\n• Nhiệt hóa hơi riêng L: nhiệt lượng cần để làm hóa hơi hoàn toàn 1 kg chất lỏng ở nhiệt độ sôi: Q = m.L.",
                        formula: "Q_{nc} = m \\cdot \\lambda \\quad | \\quad Q_{hh} = m \\cdot L",
                        image: "images/phase_transition_diagram.jpg",
                        key_takeaway: "• Đơn vị: $\\text{J/kg}$.\n• Trong suốt quá trình chuyển thể, nhiệt độ của hệ KHÔNG THAY ĐỔI vì nhiệt lượng dùng để thắng liên kết phân tử.",
                        mnemonic: "💡 Mẹo: Chuyển thể giữ nguyên nhiệt độ • Nóng chảy cần Lam-đa • Hóa hơi cần L!"
                    },
                    practice_drill: [
                        {
                            id: "p12_drill_5_1_1",
                            type: "mcq",
                            level: "Nhận biết",
                            question: "Nhiệt nóng chảy riêng của một chất rắn kết tinh có đơn vị đo là",
                            options: [
                                "J/kg",
                                "J/(kg·K)",
                                "J",
                                "W/kg"
                            ],
                            correct: 0,
                            explanation: "$\\lambda = \\frac{Q}{m} \\implies \\text{J/kg}$."
                        },
                        {
                            id: "p12_drill_5_1_2",
                            type: "multi_tf",
                            level: "Thông hiểu",
                            context: "Cho biết nhiệt nóng chảy riêng của nước đá là $\\lambda = 3,34 \\times 10^5\\,\\text{J/kg}$ và nhiệt hóa hơi riêng của nước là $L = 2,26 \\times 10^6\\,\\text{J/kg}$:",
                            image: "images/snow_melting_cold.jpg",
                            items: [
                                {
                                    text: "Để làm nóng chảy hoàn toàn 2 kg nước đá ở 0°C thành nước ở 0°C cần cung cấp nhiệt lượng 6,68 × 10⁵ J.",
                                    correct: true,
                                    explanation: "Đúng, $Q = m\\lambda = 2 \\times 3,34 \\times 10^5 = 6,68 \\times 10^5\\,\\text{J}$."
                                },
                                {
                                    text: "Nhiệt hóa hơi riêng L của nước lớn hơn rất nhiều so với nhiệt nóng chảy riêng λ.",
                                    correct: true,
                                    explanation: "Đúng, $2,26 \\times 10^6 > 3,34 \\times 10^5$ (gần gấp 7 lần), do để đưa phân tử sang thể hơi tự do cần phá vỡ hoàn toàn liên kết."
                                },
                                {
                                    text: "Khi hơi nước ngưng tụ thành nước lỏng ở 100°C, nó thu nhiệt lượng từ môi trường.",
                                    correct: false,
                                    explanation: "Sai, ngưng tụ là quá trình tỏa nhiệt lượng ra môi trường xung quanh."
                                },
                                {
                                    text: "Vào mùa đông khi tuyết tan, không khí xung quanh trở nên lạnh buốt hơn bình thường vì quá trình tan tuyết hấp thụ nhiệt lượng lớn từ khí quyển.",
                                    correct: true,
                                    explanation: "Đúng, nước đá tan cần nhận nhiệt lượng nóng chảy từ không khí xung quanh."
                                }
                            ]
                        },
                        {
                            id: "p12_drill_5_1_3",
                            type: "short_answer",
                            level: "Vận dụng",
                            question: "Một ấm điện công suất $\\mathcal{P} = 1000\\,\\text{W}$ đang đun sôi nước ở $100^\\circ\\text{C}$. Biết nhiệt hóa hơi riêng của nước là $L = 2,26 \\times 10^6\\,\\text{J/kg}$. Bỏ qua hao phí nhiệt, tính thời gian cần thiết (đơn vị giây) để làm hóa hơi hoàn toàn $0,2\\,\\text{kg}$ nước sôi (làm tròn số nguyên).",
                            correct_value: 452,
                            tolerance: 2,
                            unit_symbol: "s",
                            unit: "giây (s)",
                            explanation: "$Q = m \\cdot L = 0,2 \\times 2,26 \\times 10^6 = 452\\,000\\,\\text{J}$. Thời gian: $t = \\frac{Q}{\\mathcal{P}} = \\frac{452000}{1000} = 452\\,\\text{giây}$."
                        }
                    ],
                    advanced_challenge: {
                        id: "p12_adv_5_1",
                        title: "🔥 Đúc Tượng Đồng Cổ Truyền",
                        question: "Người ta nung nóng chảy 10 kg đồng ở nhiệt độ nóng chảy 1084°C bằng lò nung hiệu suất 60%. Cho biết nhiệt nóng chảy riêng của đồng là λ = 1,8 × 10⁵ J/kg. Nhiệt lượng toàn phần do nhiên liệu đốt cung cấp là",
                        options: [
                            "3,0 × 10⁶ J",
                            "1,8 × 10⁶ J",
                            "1,08 × 10⁶ J",
                            "2,5 × 10⁶ J"
                        ],
                        correct: 0,
                        bonus_xp: 95,
                        explanation: "$Q_{ich} = m\\lambda = 10 \\times 1,8 \\times 10^5 = 1,8 \\times 10^6\\,\\text{J}$. $Q_{tp} = \\frac{Q_{ich}}{H} = \\frac{1,8 \\times 10^6}{0,6} = 3,0 \\times 10^6\\,\\text{J}$."
                    }
                }
            ],
            summary: {
                title: "Tổng Kết Bài 5: Nhiệt Nóng Chảy & Hóa Hơi",
                mindmap_nodes: [
                    { title: "Nhiệt nóng chảy Q = mλ", content: "Nhiệt lượng làm nóng chảy 1 kg chất rắn kết tinh ở nhiệt độ nóng chảy xác định." },
                    { title: "Nhiệt hóa hơi Q = mL", content: "Nhiệt lượng làm hóa hơi 1 kg chất lỏng ở nhiệt độ sôi." },
                    { title: "Đặc điểm chuyển thể", content: "Nhiệt độ không đổi trong suốt quá trình biến đổi pha chất tinh khiết." }
                ],
                cheat_sheet: [
                    { name: "Nóng chảy", formula: "Q = m \\cdot \\lambda", unit: "J" },
                    { name: "Hóa hơi", formula: "Q = m \\cdot L", unit: "J" },
                    { name: "Bảo toàn năng lượng", formula: "\\mathcal{P} \\cdot t = m \\cdot L", unit: "J" }
                ],
                boss_challenge: {
                    boss_name: "Thần Sông Băng Khổng Lồ 🧊❄️",
                    boss_hp: 100,
                    boss_avatar: "🧊",
                    dialogue: "Ngươi có đủ nhiệt lượng để làm tan chảy tảng băng vĩnh cửu của ta không?",
                    questions: [
                        {
                            question: "Để làm nóng chảy hoàn toàn khối đồng 5 kg ở nhiệt độ nóng chảy (λ = 1,8 × 10⁵ J/kg), cần nhiệt lượng là",
                            options: ["9,0 × 10⁵ J", "3,6 × 10⁵ J", "1,8 × 10⁵ J", "4,5 × 10⁵ J"],
                            correct: 0,
                            damage: 50
                        },
                        {
                            question: "Khi chất lỏng bay hơi ở mặt thoáng, những phân tử nào sẽ thoát ra ngoài đầu tiên?",
                            options: [
                                "Những phân tử có động năng lớn nhất ở lớp mặt thoáng.",
                                "Những phân tử có động năng nhỏ nhất.",
                                "Những phân tử ở tận đáy bình.",
                                "Tất cả các phân tử đều bay hơi đồng loạt như nhau."
                            ],
                            correct: 0,
                            damage: 50
                        }
                    ]
                }
            }
        },

        // =====================================================================
        // CHƯƠNG 2: KHÍ LÍ TƯỞNG (IDEAL GAS)
        // =====================================================================

        // BÀI 6: MÔ HÌNH ĐỘNG HỌC PHÂN TỬ CHẤT KHÍ
        {
            lesson_id: "p12_l06_mo_hinh_chat_khi",
            title: "Bài 6: Mô Hình Động Học Phân Tử Chất Khí",
            chapter: "Chương 2: Khí Lí Tưởng",
            grade: 12,
            icon: "🎈",
            badge: "Nhà Động Lực Học Khí",
            total_xp: 480,
            description: "Khám phá mô hình khí lí tưởng: kích thước phân tử rất nhỏ, va chạm hoàn toàn đàn hồi và nguyên nhân sinh ra áp suất chất khí lên thành bình.",
            micro_units: [
                {
                    unit_id: "p12_u6_1",
                    title: "Đơn vị 1: Khí lí tưởng & Áp suất khí lên thành bình",
                    short_desc: "Chất điểm, chỉ tương tác khi va chạm và áp suất p = F/S sinh ra từ vô số va chạm phân tử",
                    duration: "4 phút",
                    xp_reward: 110,
                    hook: {
                        title: "Bí Ẩn Quả Bóng Bay Căng Tròn",
                        scenario: "Khi thổi căng một quả bóng cao su rồi buộc chặt, quả bóng giữ nguyên hình cầu căng tròn. Hàng tỉ tỉ phân tử khí vô hình bên trong đã tác dụng lực gì để giữ căng màng cao su dày đặc như vậy?",
                        curiosity_prompt: "Vô số phân tử chuyển động hỗn loạn không ngừng va đập vào thành bóng, tổng hợp các va chạm này tạo thành áp suất chất khí tác dụng vuông góc lên mặt thành!",
                        image: "images/gas_molecular_distance.jpg"
                    },
                    challenge: {
                        type: "slider_lab",
                        title: "Mô phỏng: Hộp Khí Va Chạm Đàn Hồi",
                        instruction: "Tăng mật độ hạt khí trong hộp để thấy số lượng va chạm lên thành bình tăng vọt, làm đồng hồ áp suất kim nhảy vọt!",
                        config: { fixed_r: 10, min_u: 10, max_u: 100, step: 10 }
                    },
                    memory_card: {
                        title: "Mô Hình Khí Lí Tưởng",
                        rule: "• Chất khí gồm các phân tử coi như chất điểm (kích thước rất nhỏ so với khoảng cách giữa chúng).\n• Các phân tử chuyển động hỗn loạn không ngừng; chuyển động càng nhanh thì nhiệt độ càng cao.\n• Các phân tử chỉ tương tác với nhau khi va chạm; va chạm giữa các phân tử và với thành bình là va chạm hoàn toàn đàn hồi.",
                        formula: "p = \\frac{F}{S} \\quad | \\quad p = \\frac{1}{3} \\mu m \\overline{v^2}",
                        image: "images/gas_molecular_distance.jpg",
                        key_takeaway: "• Áp suất chất khí sinh ra do các phân tử va chạm vào thành bình.\n• Khí thực ở áp suất thấp và nhiệt độ cao có thể coi gần đúng là khí lí tưởng.",
                        mnemonic: "💡 Mẹo: Khí lí tưởng = Chất điểm + Chỉ tương tác khi chạm + Đàn hồi 100%!"
                    },
                    practice_drill: [
                        {
                            id: "p12_drill_6_1_1",
                            type: "mcq",
                            level: "Nhận biết",
                            question: "Trong mô hình khí lí tưởng, các phân tử khí được coi là",
                            options: [
                                "Chất điểm và chỉ tương tác với nhau khi va chạm.",
                                "Các quả cầu có kích thước lớn và luôn hút nhau.",
                                "Đứng yên tại các vị trí cân bằng cố định.",
                                "Luôn chuyển động theo cùng một hướng xác định."
                            ],
                            correct: 0,
                            image: "images/gas_molecular_distance.jpg",
                            explanation: "Khí lí tưởng coi phân tử là chất điểm, bỏ qua lực tương tác ở khoảng cách xa."
                        },
                        {
                            id: "p12_drill_6_1_2",
                            type: "multi_tf",
                            level: "Thông hiểu",
                            context: "Xét một khối khí lí tưởng bị nhốt trong bình kín thể tích không đổi:",
                            items: [
                                {
                                    text: "Khi tăng nhiệt độ của khối khí, tốc độ chuyển động nhiệt trung bình của các phân tử tăng lên.",
                                    correct: true,
                                    explanation: "Đúng, nhiệt độ là thước đo động năng tịnh tiến trung bình của phân tử."
                                },
                                {
                                    text: "Áp suất chất khí lên thành bình tăng lên khi nhiệt độ tăng là do phân tử va chạm vào thành bình thường xuyên hơn và mạnh hơn.",
                                    correct: true,
                                    explanation: "Đúng, xung lượng truyền cho thành bình trên một đơn vị thời gian tăng lên."
                                },
                                {
                                    text: "Va chạm giữa các phân tử khí lí tưởng với nhau là va chạm mềm dính vào nhau.",
                                    correct: false,
                                    explanation: "Sai, trong mô hình khí lí tưởng va chạm là hoàn toàn đàn hồi bảo toàn động năng."
                                },
                                {
                                    text: "Ở cùng một nhiệt độ, các phân tử khí có khối lượng càng nhỏ thì tốc độ chuyển động nhiệt trung bình càng lớn.",
                                    correct: true,
                                    explanation: "Đúng, vì $\\overline{E_d} = \\frac{1}{2}m\\overline{v^2}$ phụ thuộc nhiệt độ T, nên m nhỏ thì v lớn."
                                }
                            ]
                        },
                        {
                            id: "p12_drill_6_1_3",
                            type: "short_answer",
                            level: "Vận dụng",
                            question: "Một khối khí gây ra áp lực $F = 240\\,\\text{N}$ phân bố đều lên nắp xilanh có diện tích $S = 0,02\\,\\text{m}^2$. Áp suất của khối khí này là bao nhiêu Pascal (Pa)?",
                            correct_value: 12000,
                            tolerance: 10,
                            unit_symbol: "Pa",
                            unit: "Pascal (Pa)",
                            explanation: "$p = \\frac{F}{S} = \\frac{240}{0,02} = 12\\,000\\,\\text{Pa}$."
                        }
                    ],
                    advanced_challenge: {
                        id: "p12_adv_6_1",
                        title: "🔥 Vận Tốc Căn Quân Phương Của Khí Oxy",
                        question: "Ở 0°C (273 K), tốc độ căn quân phương của các phân tử khí Oxy trong không khí vào khoảng bao nhiêu km/s?",
                        options: [
                            "Khoảng 0,46 km/s (nhanh hơn tốc độ âm thanh trong không khí).",
                            "Khoảng 0,01 km/s (rất chậm).",
                            "Khoảng 300 km/s (gần bằng tốc độ ánh sáng).",
                            "Khoảng 5 km/s."
                        ],
                        correct: 0,
                        bonus_xp: 90,
                        explanation: "$v_{rms} = \\sqrt{\\frac{3RT}{M}} = \\sqrt{\\frac{3 \\times 8,31 \\times 273}{0,032}} \\approx 461\\,\\text{m/s} \\approx 0,46\\,\\text{km/s}$."
                    }
                }
            ],
            summary: {
                title: "Tổng Kết Bài 6: Mô Hình Khí Lí Tưởng",
                mindmap_nodes: [
                    { title: "Khí lí tưởng", content: "Chất điểm, chuyển động hỗn loạn không ngừng, va chạm đàn hồi." },
                    { title: "Nguồn gốc áp suất", content: "Do vô số phân tử va đập liên tục truyền xung lượng vào bề mặt thành bình: $p = F/S$." },
                    { title: "Nhiệt độ & Động năng", content: "Nhiệt độ $T$ tỉ lệ thuận với động năng tịnh tiến trung bình: $\\overline{E_d} = \\frac{3}{2}kT$." }
                ],
                cheat_sheet: [
                    { name: "Áp suất", formula: "p = \\frac{F}{S}", unit: "Pa = N/m^2" },
                    { name: "Hằng số Boltzmann", formula: "k = \\frac{R}{N_A} \\approx 1,38 \\times 10^{-23}", unit: "J/K" },
                    { name: "Động năng trung bình", formula: "\\overline{E_d} = \\frac{3}{2}kT", unit: "J" }
                ],
                boss_challenge: {
                    boss_name: "Chúa Tể Bão Khí 🌪️🎈",
                    boss_hp: 100,
                    boss_avatar: "🌪️",
                    dialogue: "Ngươi có né được hàng tỉ tỉ phân tử đang lao tới với tốc độ siêu thanh của ta không?",
                    questions: [
                        {
                            question: "Áp suất chất khí tác dụng lên thành bình phụ thuộc vào những yếu tố nào?",
                            options: [
                                "Mật độ phân tử khí và tốc độ chuyển động nhiệt của phân tử.",
                                "Chỉ phụ thuộc vào hình dạng của bình chứa.",
                                "Chỉ phụ thuộc vào khối lượng của riêng một phân tử.",
                                "Không phụ thuộc vào nhiệt độ của khối khí."
                            ],
                            correct: 0,
                            damage: 50
                        },
                        {
                            question: "Điều kiện để một khí thực được coi gần đúng là một khí lí tưởng là",
                            options: [
                                "Nhiệt độ cao và áp suất thấp.",
                                "Nhiệt độ rất thấp và áp suất rất cao.",
                                "Khối lượng khí rất lớn.",
                                "Thể tích bình chứa cực kì nhỏ."
                            ],
                            correct: 0,
                            damage: 50
                        }
                    ]
                }
            }
        },

        // BÀI 7: ĐỊNH LUẬT BOYLE - QUÁ TRÌNH ĐẲNG NHIỆT
        {
            lesson_id: "p12_l07_dinh_luat_boyle",
            title: "Bài 7: Định Luật Boyle - Quá Trình Đẳng Nhiệt",
            chapter: "Chương 2: Khí Lí Tưởng",
            grade: 12,
            icon: "📉",
            badge: "Bậc Thầy Đẳng Nhiệt",
            total_xp: 500,
            description: "Thấu hiểu quá trình đẳng nhiệt, định luật Boyle p.V = const, đồ thị đường đẳng nhiệt hyperbol và ứng dụng trong lặn biển, bơm xịt.",
            micro_units: [
                {
                    unit_id: "p12_u7_1",
                    title: "Đơn vị 1: Định luật Boyle & Đường đẳng nhiệt p-V",
                    short_desc: "T = hằng số: Áp suất tỉ lệ nghịch với thể tích p1.V1 = p2.V2",
                    duration: "5 phút",
                    xp_reward: 120,
                    hook: {
                        title: "Bọt Khí Thở Của Thợ Lặn",
                        scenario: "Khi một thợ lặn thở ra dưới đáy biển sâu 20m, các bọt khí nổi dần lên mặt nước. Càng lên gần mặt nước, bọt khí càng to phình ra gấp nhiều lần. Tại sao bọt khí lại to dần lên?",
                        curiosity_prompt: "Càng lên cao áp suất nước càng giảm, theo định luật Boyle thể tích bọt khí phải tăng tỉ lệ nghịch với áp suất ngoài!",
                        image: "images/dew_condensation.jpg"
                    },
                    challenge: {
                        type: "slider_lab",
                        title: "Mô phỏng Thí Nghiệm Boyle Piston",
                        instruction: "Kéo giảm thể tích xilanh $V$ từ $4\\,\\text{lít}$ xuống $1\\,\\text{lít}$ để thấy kim áp kế vọt từ $1\\,\\text{atm}$ lên $4\\,\\text{atm}$ tạo đường cong hyperbol!",
                        config: { fixed_r: 10, min_u: 1, max_u: 4, step: 1 }
                    },
                    memory_card: {
                        title: "Định Luật Boyle (Bôi-lơ)",
                        rule: "Trong quá trình đẳng nhiệt của một lượng khí lí tưởng xác định, áp suất tỉ lệ nghịch với thể tích.",
                        formula: "p \\cdot V = \\text{hằng số} \\iff p_1 V_1 = p_2 V_2",
                        image: "images/experiments/exp_p12_img1.png",
                        key_takeaway: "• Quá trình đẳng nhiệt: $T = \\text{const}$.\n• Đường đẳng nhiệt trong hệ tọa độ $(p, V)$ là một nhánh hypebol.\n• Đường đẳng nhiệt ở nhiệt độ cao hơn nằm phía trên đường ở nhiệt độ thấp hơn.",
                        mnemonic: "💡 Mẹo nhớ: BOYLE = ĐẲNG NHIỆT (T = hằng số) ➔ p và V nhân nhau bằng không đổi!"
                    },
                    practice_drill: [
                        {
                            id: "p12_drill_7_1_1",
                            type: "mcq",
                            level: "Nhận biết",
                            question: "Hệ thức nào sau đây diễn tả đúng Định luật Boyle cho một khối khí lí tưởng xác định?",
                            options: [
                                "p₁ · V₁ = p₂ · V₂ (khi T không đổi)",
                                "p / V = hằng số",
                                "V / T = hằng số",
                                "p · T = hằng số"
                            ],
                            correct: 0,
                            explanation: "Định luật Boyle: $p_1 V_1 = p_2 V_2$ khi nhiệt độ $T$ không đổi."
                        },
                        {
                            id: "p12_drill_7_1_2",
                            type: "multi_tf",
                            level: "Thông hiểu",
                            context: "Một khối khí lí tưởng có thể tích $V_1 = 4\\,\\text{lít}$ ở áp suất $p_1 = 1\\,\\text{atm}$. Giữ nhiệt độ không đổi, nén khối khí đến thể tích $V_2 = 1\\,\\text{lít}$:",
                            image: "images/experiments/exp_p12_img1.png",
                            items: [
                                {
                                    text: "Quá trình biến đổi trạng thái của khối khí trên là quá trình đẳng nhiệt.",
                                    correct: true,
                                    explanation: "Đúng, vì nhiệt độ được giữ không đổi trong suốt quá trình."
                                },
                                {
                                    text: "Áp suất của khối khí sau khi nén tăng lên thành p₂ = 4 atm.",
                                    correct: true,
                                    explanation: "Đúng, $p_2 = \\frac{p_1 V_1}{V_2} = \\frac{1 \\times 4}{1} = 4\\,\\text{atm}$."
                                },
                                {
                                    text: "Đồ thị biểu diễn quá trình này trong hệ tọa độ (p, V) là một đường thẳng đi qua gốc tọa độ.",
                                    correct: false,
                                    explanation: "Sai, đường đẳng nhiệt trong hệ (p, V) là một nhánh đường cong hypebol."
                                },
                                {
                                    text: "Mật độ phân tử khí trong bình sau khi nén tăng lên gấp 4 lần so với ban đầu.",
                                    correct: true,
                                    explanation: "Đúng, thể tích giảm 4 lần thì số hạt trong 1 đơn vị thể tích tăng 4 lần."
                                }
                            ]
                        },
                        {
                            id: "p12_drill_7_1_3",
                            type: "short_answer",
                            level: "Vận dụng",
                            question: "Một khối khí được nén đẳng nhiệt từ thể tích $6\\,\\text{lít}$ xuống còn $2\\,\\text{lít}$. Áp suất ban đầu là $1,5\\,\\text{bar}$. Áp suất sau khi nén là bao nhiêu bar?",
                            correct_value: 4.5,
                            tolerance: 0.1,
                            unit_symbol: "bar",
                            unit: "bar",
                            explanation: "$p_2 = \\frac{p_1 V_1}{V_2} = \\frac{1,5 \\times 6}{2} = 4,5\\,\\text{bar}$."
                        }
                    ],
                    advanced_challenge: {
                        id: "p12_adv_7_1",
                        title: "🔥 Độ Sâu Của Hồ Nước",
                        question: "Một bọt khí nổi từ đáy hồ nước lên đến mặt nước có thể tích tăng gấp 3 lần. Coi nhiệt độ nước như nhau ở mọi độ sâu, áp suất khí quyển là p0 = 10⁵ Pa, khối lượng riêng của nước là 1000 kg/m³, g = 10 m/s². Độ sâu của đáy hồ là",
                        options: [
                            "20 m",
                            "10 m",
                            "30 m",
                            "15 m"
                        ],
                        correct: 0,
                        bonus_xp: 95,
                        explanation: "$p_{day} = p_0 + \\rho g h = 3 p_0 \\implies \\rho g h = 2 p_0 \\implies h = \\frac{2 \\times 10^5}{1000 \\times 10} = 20\\,\\text{m}$."
                    }
                }
            ],
            summary: {
                title: "Tổng Kết Bài 7: Định Luật Boyle",
                mindmap_nodes: [
                    { title: "Điều kiện", content: "Lượng khí không đổi ($m = \\text{const}$) và nhiệt độ không đổi ($T = \\text{const}$)." },
                    { title: "Nội dung", content: "Áp suất tỉ lệ nghịch với thể tích: $p \\sim 1/V \\iff pV = \\text{const}$." },
                    { title: "Đồ thị (p, V)", content: "Là một nhánh hypebol. T càng cao thì đường hypebol càng nằm xa gốc tọa độ." }
                ],
                cheat_sheet: [
                    { name: "Định luật Boyle", formula: "p_1 \\cdot V_1 = p_2 \\cdot V_2", unit: "Pa.m^3 = atm.lít" },
                    { name: "Đồ thị (p, 1/V)", formula: "p = a \\cdot (1/V) \\implies \\text{Đường thẳng}", unit: "-" },
                    { name: "Áp suất thủy tĩnh đáy", formula: "p = p_0 + \\rho g h", unit: "Pa" }
                ],
                boss_challenge: {
                    boss_name: "Chúa Tể Áp Suất Khí Ma 📉⚡",
                    boss_hp: 100,
                    boss_avatar: "📉",
                    dialogue: "Ngươi có nén nổi khối khí của ta khi thể tích co lại đến cực hạn?",
                    questions: [
                        {
                            question: "Khi thể tích của một khối khí đẳng nhiệt giảm đi 3 lần thì áp suất của khối khí sẽ",
                            options: ["Tăng lên 3 lần.", "Giảm đi 3 lần.", "Tăng lên 9 lần.", "Không thay đổi."],
                            correct: 0,
                            damage: 50
                        },
                        {
                            question: "Trên đồ thị (p, V), hai đường đẳng nhiệt của cùng một lượng khí ứng với nhiệt độ T1 và T2, đường T2 nằm cao hơn đường T1. Kết luận đúng là",
                            options: ["T2 > T1", "T2 < T1", "T2 = T1", "T2 = 2 T1"],
                            correct: 0,
                            damage: 50
                        }
                    ]
                }
            }
        },

        // BÀI 8: ĐỊNH LUẬT CHARLES & PHƯƠNG TRÌNH TRẠNG THÁI KHÍ LÍ TƯỞNG
        {
            lesson_id: "p12_l08_dinh_luat_charles_pttt",
            title: "Bài 8: Định Luật Charles & Phương Trình Trạng Thái",
            chapter: "Chương 2: Khí Lí Tưởng",
            grade: 12,
            icon: "📈",
            badge: "Kiến Trúc Sư Khí Lí Tưởng",
            total_xp: 500,
            description: "Hoàn thiện các quá trình biến đổi trạng thái: đẳng áp Charles V/T = const, đẳng tích Gay-Lussac và phương trình Clapeyron - Mendeleev pV = nRT.",
            micro_units: [
                {
                    unit_id: "p12_u8_1",
                    title: "Đơn vị 1: Định luật Charles & Phương trình trạng thái",
                    short_desc: "Đẳng áp: V1/T1 = V2/T2 • Phương trình Clapeyron: pV/T = const và pV = nRT",
                    duration: "5 phút",
                    xp_reward: 120,
                    hook: {
                        title: "Quả Bóng Bàn Bị Bẹp Nở Căng Trở Lại",
                        scenario: "Khi một quả bóng bàn vô tình bị giẫm bẹp một vết lõm (không bị thủng), người ta chỉ cần thả quả bóng vào cốc nước nóng thì chỉ sau chốc lát quả bóng lại phồng căng tròn như mới. Vì sao quả bóng bàn lại tự phồng lên?",
                        curiosity_prompt: "Nhiệt độ khí bên trong tăng lên làm tăng áp suất và thể tích khối khí bên trong, đẩy căng vỏ bóng trở lại!",
                        image: "images/isobaric_work_pv.jpg"
                    },
                    challenge: {
                        type: "slider_lab",
                        title: "Mô phỏng: Piston Đẳng Áp Charles",
                        instruction: "Tăng nhiệt độ $T$ từ $300\\,\\text{K}$ lên $600\\,\\text{K}$ dưới áp suất không đổi để chứng kiến thể tích $V$ dãn nở tuyến tính gấp đôi!",
                        config: { fixed_r: 10, min_u: 300, max_u: 600, step: 50 }
                    },
                    memory_card: {
                        title: "Định Luật Charles & Phương Trình Trạng Thái",
                        rule: "• Quá trình đẳng áp (Charles): Thể tích tỉ lệ thuận với nhiệt độ tuyệt đối: V/T = hằng số.\n• Phương trình trạng thái khí lí tưởng: tích pV chia T luôn là hằng số với một lượng khí xác định.",
                        formula: "\\frac{p_1 V_1}{T_1} = \\frac{p_2 V_2}{T_2} \\quad | \\quad p V = n R T = \\frac{m}{M} R T",
                        image: "images/isobaric_work_pv.jpg",
                        key_takeaway: "• Hằng số khí lí tưởng: $R \\approx 8,31\\,\\text{J/(mol}\\cdot\\text{K)}$.\n• Lưu ý sống còn: Nhiệt độ trong mọi công thức khí BẮT BUỘC dùng nhiệt độ Kelvin ($T = t + 273,15$), tuyệt đối không dùng độ C!",
                        mnemonic: "💡 Mẹo: Charles = Đẳng áp (V tỉ lệ T) • Clapeyron: pV chia T bằng hằng số!"
                    },
                    practice_drill: [
                        {
                            id: "p12_drill_8_1_1",
                            type: "mcq",
                            level: "Nhận biết",
                            question: "Hệ thức nào sau đây diễn tả Định luật Charles cho quá trình đẳng áp?",
                            options: [
                                "V₁ / T₁ = V₂ / T₂ (với T tính theo Kelvin)",
                                "V₁ · T₁ = V₂ · T₂",
                                "V₁ / t₁ = V₂ / t₂ (với t tính theo độ Celsius)",
                                "p₁ / T₁ = p₂ / T₂"
                            ],
                            correct: 0,
                            explanation: "Định luật Charles: $\\frac{V_1}{T_1} = \\frac{V_2}{T_2}$ khi áp suất $p$ không đổi và $T$ tính theo Kelvin."
                        },
                        {
                            id: "p12_drill_8_1_2",
                            type: "multi_tf",
                            level: "Thông hiểu",
                            context: "Một khối khí lí tưởng ban đầu ở trạng thái 1 ($p_1 = 1\\,\\text{atm}, V_1 = 2\\,\\text{lít}, T_1 = 300\\,\\text{K}$) được đun nóng đẳng áp đến nhiệt độ $T_2 = 600\\,\\text{K}$:",
                            image: "images/isochoric_process.jpg",
                            items: [
                                {
                                    text: "Thể tích của khối khí ở trạng thái 2 dãn nở tăng gấp đôi lên thành V₂ = 4 lít.",
                                    correct: true,
                                    explanation: "Đúng, $V_2 = V_1 \\cdot \\frac{T_2}{T_1} = 2 \\times \\frac{600}{300} = 4\\,\\text{lít}$."
                                },
                                {
                                    text: "Đồ thị biểu diễn quá trình đẳng áp trong hệ tọa độ (V, T) là một đoạn thẳng kéo dài đi qua gốc tọa độ O.",
                                    correct: true,
                                    explanation: "Đúng, $V = \\text{const} \\cdot T$ có dạng phương trình đường thẳng qua gốc tọa độ."
                                },
                                {
                                    text: "Nếu tiếp tục giữ thể tích V₂ = 4 lít và nung nóng đến khi áp suất tăng lên 2 atm thì đó là quá trình đẳng tích.",
                                    correct: true,
                                    explanation: "Đúng, thể tích không đổi là quá trình đẳng tích."
                                },
                                {
                                    text: "Trong phương trình pV = nRT, nếu dùng đơn vị p là Pa, V là m³ thì R có giá trị là 8,31 J/(mol.K).",
                                    correct: true,
                                    explanation: "Đúng, hằng số khí lí tưởng chuẩn SI là $R = 8,314\\,\\text{J/(mol}\\cdot\\text{K)}$."
                                }
                            ]
                        },
                        {
                            id: "p12_drill_8_1_3",
                            type: "short_answer",
                            level: "Vận dụng",
                            question: "Một bình chứa $2\\,\\text{mol}$ khí lí tưởng ở nhiệt độ $300\\,\\text{K}$ và thể tích $0,05\\,\\text{m}^3$. Cho hằng số khí $R = 8,31\\,\\text{J/(mol}\\cdot\\text{K)}$. Áp suất của khối khí trong bình là bao nhiêu Pascal (Pa)?",
                            correct_value: 99720,
                            tolerance: 50,
                            unit_symbol: "Pa",
                            unit: "Pascal (Pa)",
                            explanation: "$p = \\frac{nRT}{V} = \\frac{2 \\times 8,31 \\times 300}{0,05} = 99\\,720\\,\\text{Pa}$."
                        }
                    ],
                    advanced_challenge: {
                        id: "p12_adv_8_1",
                        title: "🔥 Nổ Lốp Xe Ngày Hè",
                        question: "Một bánh xe máy bơm khí ở áp suất 2,2 bar vào buổi sáng mát 27°C. Buổi trưa chạy trên đường nhựa nắng nóng làm nhiệt độ khí trong lốp tăng lên 87°C (thể tích lốp coi như không đổi). Áp suất khí trong lốp lúc trưa là",
                        options: [
                            "Khoảng 2,64 bar",
                            "Khoảng 3,50 bar",
                            "Khoảng 2,20 bar (không đổi)",
                            "Khoảng 7,10 bar"
                        ],
                        correct: 0,
                        bonus_xp: 90,
                        explanation: "Quá trình đẳng tích: $T_1 = 300\\,\\text{K}$, $T_2 = 360\\,\\text{K}$. $p_2 = p_1 \\cdot \\frac{T_2}{T_1} = 2,2 \\times \\frac{360}{300} = 2,64\\,\\text{bar}$."
                    }
                }
            ],
            summary: {
                title: "Tổng Kết Bài 8: Định Luật Charles & PTTT Khí Lí Tưởng",
                mindmap_nodes: [
                    { title: "Đẳng áp Charles", content: "$p = \\text{const} \\implies \\frac{V}{T} = \\text{const}$. Thể tích dãn nở tỉ lệ với nhiệt độ tuyệt đối." },
                    { title: "Đẳng tích", content: "$V = \\text{const} \\implies \\frac{p}{T} = \\text{const}$. Áp suất tăng tỉ lệ với nhiệt độ tuyệt đối." },
                    { title: "Phương trình trạng thái", content: "Clapeyron - Mendeleev: $\\frac{p_1 V_1}{T_1} = \\frac{p_2 V_2}{T_2}$ và $pV = nRT = \\frac{m}{M}RT$." }
                ],
                cheat_sheet: [
                    { name: "Định luật Charles", formula: "\\frac{V_1}{T_1} = \\frac{V_2}{T_2}", unit: "lít/K = m^3/K" },
                    { name: "Định luật Đẳng tích", formula: "\\frac{p_1}{T_1} = \\frac{p_2}{T_2}", unit: "Pa/K" },
                    { name: "Phương trình Clapeyron", formula: "p \\cdot V = n \\cdot R \\cdot T", unit: "Pa, m^3, mol, K" }
                ],
                boss_challenge: {
                    boss_name: "Chúa Tể Khí Lí Tưởng Toàn Năng 👑🪐",
                    boss_hp: 100,
                    boss_avatar: "🪐",
                    dialogue: "Ngươi đã làm chủ toàn bộ các quá trình biến đổi trạng thái của chất khí? Hãy giải bài toán tổng hợp cuối cùng!",
                    questions: [
                        {
                            question: "Một khối khí lí tưởng biến đổi từ trạng thái 1 (p1, V1, T1) sang trạng thái 2 (p2, V2, T2). Biểu thức nào sau đây luôn đúng trong mọi trường hợp biến đổi?",
                            options: [
                                "(p₁ · V₁) / T₁ = (p₂ · V₂) / T₂",
                                "p₁ · V₁ = p₂ · V₂",
                                "V₁ / T₁ = V₂ / T₂",
                                "p₁ / T₁ = p₂ / T₂"
                            ],
                            correct: 0,
                            damage: 50
                        },
                        {
                            question: "Ở điều kiện chuẩn (p0 = 1 atm, T0 = 273,15 K), 1 mol của bất kì chất khí lí tưởng nào đều chiếm thể tích xấp xỉ là",
                            options: ["22,4 lít", "24,79 lít", "1,0 lít", "2,24 lít"],
                            correct: 0,
                            damage: 50
                        }
                    ]
                }
            }
        }
    ]
};
