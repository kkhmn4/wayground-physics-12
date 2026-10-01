/**
 * Wayground Physics 10 - Master Micro-learning Data Hub (v2.1.0)
 * Standard: GDPT 2018 - Chuẩn kiến thức THPT môn Vật lí Lớp 10
 * Các chuyên đề: Động học, Động lực học, Năng lượng & Cơ năng
 * Bộ 4 Dạng Nhiệm Vụ: MCQ, Kéo thả ráp công thức, Đúng/Sai 4 ý lũy tiến, Trả lời ngắn điền số Numpad
 */

const MICRO_LEARNING_BANK_10 = {
    grade: 10,
    title: "Vật Lí 10 • GDPT 2018",
    theme_color: "#10B981",
    lessons: [
        // =====================================================================
        // BÀI 1: CHUYỂN ĐỘNG THẲNG BIẾN ĐỔI ĐỀU
        // =====================================================================
        {
            lesson_id: "p10_l01_chuyen_dong_bien_doi_deu",
            title: "Bài 1: Chuyển Động Thẳng Biến Đổi Đều",
            chapter: "Chương 2: Mô Tả Chuyển Động",
            grade: 10,
            icon: "🚗",
            badge: "Tay Đua Siêu Tốc",
            total_xp: 450,
            description: "Nắm vững khái niệm gia tốc, công thức vận tốc và độ dịch chuyển trong chuyển động nhanh dần đều và chậm dần đều.",
            micro_units: [
                {
                    unit_id: "p10_u1_1",
                    title: "Đơn vị 1: Gia tốc & Đồ thị vận tốc (v - t)",
                    short_desc: "Đại lượng đặc trưng cho sự biến thiên nhanh chậm của vận tốc: a = (v - v0) / t",
                    duration: "4 phút",
                    xp_reward: 100,
                    hook: {
                        title: "Cú Đạp Ga Của Siêu Xe F1",
                        scenario: "Một chiếc xe đua F1 có thể tăng tốc từ 0 lên 100 km/h chỉ trong vòng 2,4 giây! Đại lượng vật lí nào giúp đo lường chính xác khả năng 'bốc ga' thay đổi vận tốc nhanh đến kinh ngạc này?",
                        curiosity_prompt: "Đó chính là Gia tốc - tốc độ biến thiên của vận tốc theo thời gian!"
                    },
                    challenge: {
                        type: "slider_lab",
                        title: "Thí nghiệm ảo: Khảo sát Gia tốc a",
                        instruction: "Kéo thanh trượt gia tốc $a$ (từ $1\\,\\text{m/s}^2$ đến $5\\,\\text{m/s}^2$) và xem đồ thị $v(t)$ dốc đứng lên như thế nào!",
                        config: {
                            fixed_r: 10,
                            min_u: 1,
                            max_u: 5,
                            step: 1
                        }
                    },
                    memory_card: {
                        title: "Định Nghĩa & Công Thức Gia Tốc",
                        rule: "Gia tốc là đại lượng vectơ đặc trưng cho sự biến thiên nhanh hay chậm của vận tốc theo thời gian.",
                        formula: "a = \\frac{v - v_0}{t - t_0} = \\frac{\\Delta v}{\\Delta t}",
                        key_takeaway: "• Đơn vị gia tốc trong hệ SI: mét trên giây bình phương ($\\text{m/s}^2$).\n• Chuyển động nhanh dần đều: $\\vec{a}$ cùng hướng với $\\vec{v}$ ($a \\cdot v > 0$).\n• Chuyển động chậm dần đều: $\\vec{a}$ ngược hướng với $\\vec{v}$ ($a \\cdot v < 0$).",
                        mnemonic: "💡 Mẹo nhớ: NHANH DẦN thì a và v CÙNG DẤU; CHẬM DẦN thì a và v TRÁI DẤU!"
                    },
                    practice_drill: [
                        {
                            id: "p10_drill_1_1_1",
                            type: "mcq",
                            level: "Nhận biết",
                            question: "Đơn vị đo chuẩn của gia tốc trong hệ đơn vị quốc tế SI là",
                            options: [
                                "m/s²",
                                "m/s",
                                "km/h",
                                "m·s²"
                            ],
                            correct: 0,
                            explanation: "Gia tốc $a = \\frac{\\Delta v}{\\Delta t}$ có đơn vị là $(\\text{m/s}) / \\text{s} = \\text{m/s}^2$."
                        },
                        {
                            id: "p10_drill_1_1_2",
                            type: "multi_tf",
                            level: "Thông hiểu",
                            context: "Một ô tô đang chuyển động thẳng trên đường với vận tốc ban đầu $v_0 = 10\\,\\text{m/s}$ thì người lái xe hãm phanh chuyển động chậm dần đều với gia tốc có độ lớn $2\\,\\text{m/s}^2$. Chọn chiều dương là chiều chuyển động.",
                            items: [
                                {
                                    text: "Vectơ gia tốc của xe ngược chiều với vectơ vận tốc.",
                                    correct: true,
                                    explanation: "Đúng, trong chuyển động chậm dần đều thì vectơ gia tốc luôn ngược chiều với vectơ vận tốc."
                                },
                                {
                                    text: "Giá trị đại số của gia tốc là $a = +2\\,\\text{m/s}^2$.",
                                    correct: false,
                                    explanation: "Sai, vì xe chuyển động chậm dần theo chiều dương nên giá trị đại số của gia tốc là $a = -2\\,\\text{m/s}^2$."
                                },
                                {
                                    text: "Thời gian từ lúc hãm phanh đến khi xe dừng hẳn ($v = 0$) là $5\\,\\text{giây}$.",
                                    correct: true,
                                    explanation: "Đúng, $t = \\frac{v - v_0}{a} = \\frac{0 - 10}{-2} = 5\\,\\text{s}$."
                                },
                                {
                                    text: "Đồ thị vận tốc - thời gian ($v - t$) của chuyển động chậm dần đều là một đường cong parabol.",
                                    correct: false,
                                    explanation: "Sai, đồ thị $v(t)$ trong chuyển động thẳng biến đổi đều là một đường thẳng có hệ số góc bằng $a$."
                                }
                            ]
                        },
                        {
                            id: "p10_drill_1_1_3",
                            type: "short_answer",
                            level: "Vận dụng",
                            question: "Một đoàn tàu hỏa bắt đầu rời ga chuyển động thẳng nhanh dần đều. Sau $20\\,\\text{giây}$, đoàn tàu đạt vận tốc $10\\,\\text{m/s}$ (tương đương $36\\,\\text{km/h}$). Hãy tính độ lớn gia tốc của tàu (đơn vị $\\text{m/s}^2$).",
                            correct_value: 0.5,
                            tolerance: 0.05,
                            unit_symbol: "m/s²",
                            unit: "m/s²",
                            explanation: "$v_0 = 0\\,\\text{m/s}$, $t = 20\\,\\text{s}$, $v = 10\\,\\text{m/s}$. Gia tốc: $a = \\frac{v - v_0}{t} = \\frac{10 - 0}{20} = 0,5\\,\\text{m/s}^2$."
                        }
                    ],
                    advanced_challenge: {
                        id: "p10_adv_1_1",
                        title: "🔥 Bẫy Dấu Vận Tốc & Gia Tốc",
                        question: "Một vật chuyển động theo chiều âm trục tọa độ với vận tốc $v < 0$ và có gia tốc $a < 0$. Chuyển động của vật thuộc loại nào sau đây?",
                        options: [
                            "Chuyển động thẳng nhanh dần đều.",
                            "Chuyển động thẳng chậm dần đều.",
                            "Chuyển động thẳng đều.",
                            "Vật đang đứng yên."
                        ],
                        correct: 0,
                        bonus_xp: 70,
                        explanation: "Vì tích $a \\cdot v = (-a) \\cdot (-v) > 0$ (cùng dấu), nên vectơ gia tốc cùng hướng với vectơ vận tốc, do đó vật chuyển động NHANH DẦN ĐỀU theo chiều âm!"
                    }
                },
                {
                    unit_id: "p10_u1_2",
                    title: "Đơn vị 2: Công thức độ dịch chuyển & Hệ thức độc lập thời gian",
                    short_desc: "d = v0.t + 1/2.a.t² và v² - v0² = 2ad",
                    duration: "5 phút",
                    xp_reward: 120,
                    hook: {
                        scenario: "Khi gặp chướng ngại vật ở khoảng cách 25m, tài xế đạp phanh khẩn cấp. Làm sao cảnh sát giao thông căn cứ vào vết trượt bánh xe trên mặt đường để tính ra tốc độ ban đầu trước khi hãm phanh?",
                        curiosity_prompt: "Hệ thức độc lập thời gian kết nối trực tiếp quãng đường trượt với vận tốc!"
                    },
                    challenge: {
                        type: "formula_assembler",
                        title: "Lắp Ráp Hệ Thức Độc Lập Thời Gian",
                        instruction: "Ghép các khối để hoàn thành công thức liên hệ vận tốc, gia tốc và độ dịch chuyển: $v^2 - v_0^2 = 2ad$!",
                        target_formula: "v^2 - v_0^2 = 2 * a * d",
                        blocks: ["v^2", "-", "v_0^2", "=", "2", "*", "a", "*", "d", "t"],
                        hint: "Hiệu bình phương vận tốc bằng hai lần tích gia tốc và độ dịch chuyển."
                    },
                    memory_card: {
                        title: "Bộ Công Thức Vàng Chuyển Động Biến Đổi Đều",
                        rule: "• Vận tốc: $v = v_0 + at$.\n• Độ dịch chuyển: $d = v_0 t + \\frac{1}{2}at^2$.\n• Hệ thức độc lập: $v^2 - v_0^2 = 2ad$.",
                        formula: "v^2 - v_0^2 = 2ad \\iff d = \\frac{v^2 - v_0^2}{2a}",
                        key_takeaway: "Nếu chọn chiều dương là chiều chuyển động thì độ dịch chuyển $d$ trùng với quãng đường đi được $s$.",
                        mnemonic: "💡 Mẹo nhớ: Muốn tìm quãng đường hãm phanh không cần thời gian, lấy V BÌNH TRỪ VÉC BÌNH chia HAI A!"
                    },
                    practice_drill: [
                        {
                            id: "p10_drill_1_2_1",
                            type: "mcq",
                            level: "Nhận biết",
                            question: "Công thức liên hệ giữa vận tốc $v$, vận tốc đầu $v_0$, gia tốc $a$ và độ dịch chuyển $d$ là",
                            options: [
                                "$v^2 - v_0^2 = 2ad$",
                                "$v^2 + v_0^2 = 2ad$",
                                "$v - v_0 = 2ad$",
                                "$v^2 - v_0^2 = ad$"
                            ],
                            correct: 0,
                            explanation: "Hệ thức độc lập thời gian chuẩn: $v^2 - v_0^2 = 2ad$."
                        },
                        {
                            id: "p10_drill_1_2_2",
                            type: "multi_tf",
                            level: "Thông hiểu",
                            context: "Một vật chuyển động thẳng nhanh dần đều không vận tốc đầu ($v_0 = 0$) với gia tốc $a = 2\\,\\text{m/s}^2$ trên trục Ox.",
                            items: [
                                {
                                    text: "Vận tốc của vật sau $3\\,\\text{giây}$ là $6\\,\\text{m/s}$.",
                                    correct: true,
                                    explanation: "Đúng, $v = v_0 + at = 0 + 2 \\times 3 = 6\\,\\text{m/s}$."
                                },
                                {
                                    text: "Quãng đường vật đi được trong $3\\,\\text{giây}$ đầu tiên là $18\\,\\text{m}$.",
                                    correct: false,
                                    explanation: "Sai, $s = \\frac{1}{2}at^2 = \\frac{1}{2} \\times 2 \\times 3^2 = 9\\,\\text{m}$."
                                },
                                {
                                    text: "Quãng đường vật đi được tỉ lệ thuận với bình phương thời gian chuyển động.",
                                    correct: true,
                                    explanation: "Đúng, vì $v_0 = 0$ nên $s = \\frac{1}{2}at^2 \\implies s \\sim t^2$."
                                },
                                {
                                    text: "Để đạt được vận tốc $10\\,\\text{m/s}$, vật phải đi được quãng đường là $25\\,\\text{m}$.",
                                    correct: true,
                                    explanation: "Đúng, $v^2 - 0 = 2as \\implies s = \\frac{10^2}{2 \\times 2} = 25\\,\\text{m}$."
                                }
                            ]
                        },
                        {
                            id: "p10_drill_1_2_3",
                            type: "short_answer",
                            level: "Vận dụng",
                            question: "Một ô tô đang chạy với tốc độ $20\\,\\text{m/s}$ thì người lái đạp phanh, xe chuyển động chậm dần đều với gia tốc có độ lớn $4\\,\\text{m/s}^2$. Hãy tính quãng đường xe trượt thêm được cho đến khi dừng hẳn (đơn vị mét).",
                            correct_value: 50,
                            tolerance: 0.05,
                            unit_symbol: "m",
                            unit: "mét (m)",
                            explanation: "Chọn chiều dương là chiều chuyển động: $v_0 = 20\\,\\text{m/s}$, $v = 0$, $a = -4\\,\\text{m/s}^2$. Áp dụng $v^2 - v_0^2 = 2as \\implies 0^2 - 20^2 = 2(-4)s \\implies -400 = -8s \\implies s = 50\\,\\text{m}$."
                        }
                    ],
                    advanced_challenge: {
                        id: "p10_adv_1_2",
                        title: "🔥 Quãng Đường Giây Cuối Cùng",
                        question: "Một vật chuyển động thẳng nhanh dần đều không vận tốc đầu. Tỉ số quãng đường vật đi được trong giây thứ nhất và trong giây thứ hai là",
                        options: ["1 : 3", "1 : 2", "1 : 4", "1 : 5"],
                        correct: 0,
                        bonus_xp: 80,
                        explanation: "$s_1 = \\frac{1}{2}a(1^2) = 0.5a$. Quãng đường trong 2 giây: $s_{2s} = \\frac{1}{2}a(2^2) = 2a \\implies$ Quãng đường giây thứ hai: $\\Delta s_2 = 2a - 0.5a = 1.5a$. Tỉ số: $s_1 / \\Delta s_2 = 0.5a / 1.5a = 1/3$."
                    }
                }
            ],
            summary: {
                title: "Tổng Kết Bài 1: Chuyển Động Thẳng Biến Đổi Đều",
                mindmap_nodes: [
                    { title: "Định nghĩa gia tốc", content: "$a = \\frac{\\Delta v}{\\Delta t}$ (đơn vị $\\text{m/s}^2$); đặc trưng cho tốc độ đổi vận tốc." },
                    { title: "Phân loại chuyển động", content: "Nhanh dần đều: $a \\cdot v > 0$; Chậm dần đều: $a \\cdot v < 0$." },
                    { title: "Bộ công thức tọa độ", content: "$v = v_0 + at$, $d = v_0 t + \\frac{1}{2}at^2$, $v^2 - v_0^2 = 2ad$." }
                ],
                cheat_sheet: [
                    { name: "Vận tốc", formula: "v = v_0 + at", unit: "m/s" },
                    { name: "Độ dịch chuyển", formula: "d = v_0 t + \\frac{1}{2}at^2", unit: "m" },
                    { name: "Hệ thức độc lập", formula: "v^2 - v_0^2 = 2ad", unit: "m^2/s^2" }
                ],
                boss_challenge: {
                    boss_name: "Tay Đua Siêu Tốc 🏎️ (Boss Chặng 1)",
                    boss_hp: 100,
                    boss_avatar: "🏎️",
                    dialogue: "Ngươi có đủ tốc độ và phản xạ để giải nhanh bài toán hãm phanh trước mũi xe của ta không?",
                    questions: [
                        {
                            question: "Một xe máy tăng tốc từ $10\\,\\text{m/s}$ lên $20\\,\\text{m/s}$ trên đoạn đường $75\\,\\text{m}$. Gia tốc của xe là",
                            options: ["2 m/s²", "1 m/s²", "1,5 m/s²", "3 m/s²"],
                            correct: 0,
                            damage: 50
                        },
                        {
                            question: "Đồ thị vận tốc - thời gian ($v - t$) của một chuyển động thẳng đều là",
                            options: [
                                "Một đường thẳng song song với trục thời gian Ot.",
                                "Một đường cong parabol.",
                                "Một đường thẳng dốc lên đi qua gốc tọa độ.",
                                "Một đường thẳng dốc xuống cắt trục Ot."
                            ],
                            correct: 0,
                            damage: 50
                        }
                    ]
                }
            }
        },

        // =====================================================================
        // BÀI 2: BA ĐỊNH LUẬT NEWTON
        // =====================================================================
        {
            lesson_id: "p10_l02_dinh_luat_newton",
            title: "Bài 2: Ba Định Luật Newton & Khối Lượng",
            chapter: "Chương 3: Các Lực Trong Thực Tiễn",
            grade: 10,
            icon: "🍎",
            badge: "Nhà Cơ Học Cổ Điển",
            total_xp: 480,
            description: "Thấu hiểu nền tảng của toàn bộ Cơ học cổ điển: Quán tính, phương trình động lực học F = ma và cặp lực trực đối tương hỗ.",
            micro_units: [
                {
                    unit_id: "p10_u2_1",
                    title: "Đơn vị 1: Định luật I Newton & Quán tính",
                    short_desc: "Vật giữ nguyên trạng thái đứng yên hoặc chuyển động thẳng đều khi không chịu lực tác dụng",
                    duration: "4 phút",
                    xp_reward: 100,
                    hook: {
                        scenario: "Khi xe buýt phanh gấp, toàn bộ hành khách trên xe đều bị chúi người về phía trước. Tại sao cơ thể lại tự động đổ dồn về trước mà không ai đẩy?",
                        curiosity_prompt: "Đó chính là Quán tính - xu hướng bảo toàn vận tốc của mọi vật thể có khối lượng!"
                    },
                    challenge: {
                        type: "slider_lab",
                        title: "Mô phỏng: Quán Tính & Khối Lượng",
                        instruction: "Tác dụng cùng một lực đẩy $F = 20\\,\\text{N}$ lên các vật có khối lượng khác nhau để quan sát: khối lượng càng lớn thì vật càng khó đổi vận tốc!",
                        config: {
                            fixed_r: 10,
                            min_u: 1,
                            max_u: 5,
                            step: 1
                        }
                    },
                    memory_card: {
                        title: "Định Luật I Newton (Định Luật Quán Tính)",
                        rule: "Nếu một vật không chịu tác dụng của lực nào hoặc chịu tác dụng của các lực có hợp lực bằng không, thì vật đang đứng yên sẽ tiếp tục đứng yên, đang chuyển động sẽ tiếp tục chuyển động thẳng đều.",
                        formula: "\\sum \\vec{F} = \\vec{0} \\implies \\vec{v} = \\text{const}",
                        key_takeaway: "• Quán tính là tính chất của mọi vật bảo toàn vận tốc của mình.\n• Khối lượng là đại lượng đặc trưng cho mức quán tính của vật.",
                        mnemonic: "💡 Mẹo nhớ: KHÔNG CÓ LỰC ÉP ➔ VẬN TỐC NẰM YÊN HOẶC CHẠY ĐỀU MÃI MÃI!"
                    },
                    practice_drill: [
                        {
                            id: "p10_drill_2_1_1",
                            type: "mcq",
                            level: "Nhận biết",
                            question: "Đại lượng vật lí nào đặc trưng cho mức quán tính của một vật thể?",
                            options: [
                                "Khối lượng của vật.",
                                "Trọng lượng của vật.",
                                "Vận tốc của vật.",
                                "Thể tích của vật."
                            ],
                            correct: 0,
                            explanation: "Khối lượng là số đo mức quán tính của vật: vật có khối lượng càng lớn thì quán tính càng lớn, càng khó thay đổi vận tốc."
                        },
                        {
                            id: "p10_drill_2_1_2",
                            type: "multi_tf",
                            level: "Thông hiểu",
                            context: "Xét một chiếc xe ô tô đang chuyển động thẳng đều trên đường nằm ngang với vận tốc $60\\,\\text{km/h}$.",
                            items: [
                                {
                                    text: "Hợp lực của tất cả các lực tác dụng lên xe bằng không ($\\sum \\vec{F} = \\vec{0}$).",
                                    correct: true,
                                    explanation: "Đúng theo Định luật I Newton: xe chuyển động thẳng đều thì hợp lực tác dụng lên xe phải triệt tiêu."
                                },
                                {
                                    text: "Lực phát động của động cơ xe lớn hơn lực ma sát và lực cản của không khí.",
                                    correct: false,
                                    explanation: "Sai, vì xe chuyển động thẳng đều nên lực phát động cân bằng chính xác với tổng lực ma sát và lực cản."
                                },
                                {
                                    text: "Khi xe đột ngột rẽ sang trái, người ngồi trong xe sẽ bị nghiêng sang phải do quán tính.",
                                    correct: true,
                                    explanation: "Đúng, cơ thể có xu hướng duy trì hướng chuyển động thẳng ban đầu nên bị dạt sang phải."
                                },
                                {
                                    text: "Một vật có khối lượng lớn hơn thì khi phanh hãm sẽ dừng lại dễ dàng hơn.",
                                    correct: false,
                                    explanation: "Sai, vật có khối lượng lớn hơn thì mức quán tính lớn hơn nên khó thay đổi vận tốc hơn (cần quãng đường phanh dài hơn)."
                                }
                            ]
                        },
                        {
                            id: "p10_drill_2_1_3",
                            type: "short_answer",
                            level: "Vận dụng",
                            question: "Một xe tải có khối lượng $m_1 = 3000\\,\\text{kg}$ và một ô tô con có khối lượng $m_2 = 1000\\,\\text{kg}$. Hỏi mức quán tính của xe tải lớn gấp bao nhiêu lần mức quán tính của ô tô con?",
                            correct_value: 3,
                            tolerance: 0.05,
                            unit_symbol: "lần",
                            unit: "lần",
                            explanation: "Mức quán tính tỉ lệ thuận với khối lượng: $\\frac{m_1}{m_2} = \\frac{3000}{1000} = 3$ lần."
                        }
                    ],
                    advanced_challenge: {
                        id: "p10_adv_2_1",
                        title: "🔥 Hiện Tượng Giật Khăn Trải Bàn",
                        question: "Người làm ảo thuật có thể giật nhanh tấm khăn trải bàn ra khỏi chiếc bàn mà các cốc chén bên trên hầu như không bị đổ hay xê dịch. Hiện tượng này giải thích bằng",
                        options: [
                            "Quán tính của các cốc chén giữ chúng ở lại vị trí cũ khi lực ma sát tác dụng trong thời gian cực ngắn.",
                            "Lực hấp dẫn của Trái Đất đột ngột tăng lên giữ cốc chén dính vào bàn.",
                            "Tấm khăn trải bàn trơn láng hoàn toàn không có ma sát.",
                            "Cốc chén có từ tính hút chặt vào mặt bàn."
                        ],
                        correct: 0,
                        bonus_xp: 70,
                        explanation: "Do cốc chén có khối lượng nên có quán tính giữ nguyên trạng thái đứng yên. Khi giật khăn cực nhanh, thời gian ma sát quá nhỏ không đủ tạo xung lực làm cốc chuyển động."
                    }
                },
                {
                    unit_id: "p10_u2_2",
                    title: "Đơn vị 2: Định luật II & III Newton",
                    short_desc: "F = ma và F_A_B = -F_B_A (Lực và phản lực)",
                    duration: "5 phút",
                    xp_reward: 120,
                    hook: {
                        scenario: "Khi một quả bóng bay được bơm căng rồi buông tay, luồng khí phụt ra phía sau làm quả bóng lao vút về phía trước. Hay khi phóng tên lửa vào vũ trụ, động cơ đẩy khí xuống dưới để tên lửa bay lên trên!",
                        curiosity_prompt: "Đó là sự tương tác hai chiều theo Định luật III Newton: Lực luôn xuất hiện theo từng cặp!"
                    },
                    challenge: {
                        type: "formula_assembler",
                        title: "Ghép Phương Trình Động Lực Học",
                        instruction: "Kéo thả các khối để tạo thành công thức trung tâm của Cơ học cổ điển: $F = m \\cdot a$!",
                        target_formula: "F = m * a",
                        blocks: ["F", "=", "m", "*", "a", "/", "v", "t"],
                        hint: "Vectơ gia tốc tỉ lệ thuận với hợp lực và tỉ lệ nghịch với khối lượng."
                    },
                    memory_card: {
                        title: "Định Luật II & III Newton",
                        rule: "• Định luật II: Gia tốc của một vật cùng hướng với lực tác dụng. Độ lớn tỉ lệ thuận với lực và tỉ lệ nghịch với khối lượng: $\\vec{a} = \\frac{\\vec{F}}{m}$.\n• Định luật III: Trong mọi trường hợp, khi vật A tác dụng lên vật B một lực thì vật B cũng tác dụng lại vật A một lực trực đối: $\\vec{F}_{BA} = -\\vec{F}_{AB}$.",
                        formula: "\\vec{F} = m \\cdot \\vec{a} \\quad \\text{và} \\quad \\vec{F}_{AB} = -\\vec{F}_{BA}",
                        key_takeaway: "Lực và phản lực luôn xuất hiện và mất đi đồng thời, cùng bản chất, đặt vào HAI VẬT KHÁC NHAU nên không bao giờ triệt tiêu lẫn nhau!",
                        mnemonic: "💡 Mẹo nhớ: F = m.a (Phở = Mì + Ăn) | Đập tay vào tường, tay đau bao nhiêu tường chịu bấy nhiêu!"
                    },
                    practice_drill: [
                        {
                            id: "p10_drill_2_2_1",
                            type: "mcq",
                            level: "Nhận biết",
                            question: "Theo định luật III Newton, lực và phản lực là hai lực",
                            options: [
                                "Cùng độ lớn, ngược chiều, đặt vào hai vật khác nhau.",
                                "Cùng độ lớn, cùng chiều, đặt vào cùng một vật.",
                                "Cân bằng nhau và triệt tiêu lẫn nhau.",
                                "Xuất hiện không đồng thời (lực tác dụng có trước, phản lực có sau)."
                            ],
                            correct: 0,
                            explanation: "Lực và phản lực luôn cùng độ lớn, ngược chiều, cùng giá nhưng đặt vào HAI VẬT KHÁC NHAU nên không triệt tiêu nhau."
                        },
                        {
                            id: "p10_drill_2_2_2",
                            type: "multi_tf",
                            level: "Thông hiểu",
                            context: "Tác dụng một lực không đổi $F = 10\\,\\text{N}$ vào một vật có khối lượng $m = 2\\,\\text{kg}$ đang đứng yên trên mặt sàn nằm ngang không ma sát.",
                            items: [
                                {
                                    text: "Gia tốc mà vật thu được có độ lớn là $5\\,\\text{m/s}^2$.",
                                    correct: true,
                                    explanation: "Đúng, $a = \\frac{F}{m} = \\frac{10}{2} = 5\\,\\text{m/s}^2$."
                                },
                                {
                                    text: "Vận tốc của vật sau $4\\,\\text{giây}$ chuyển động là $20\\,\\text{m/s}$.",
                                    correct: true,
                                    explanation: "Đúng, $v = v_0 + at = 0 + 5 \\times 4 = 20\\,\\text{m/s}$."
                                },
                                {
                                    text: "Nếu khối lượng của vật tăng lên gấp đôi ($m' = 4\\,\\text{kg}$) thì dưới tác dụng của lực $F$ cũ, gia tốc sẽ tăng gấp đôi.",
                                    correct: false,
                                    explanation: "Sai, gia tốc tỉ lệ nghịch với khối lượng ($a = F/m$), khối lượng tăng gấp đôi thì gia tốc phải giảm đi một nửa."
                                },
                                {
                                    text: "Vectơ gia tốc $\\vec{a}$ luôn có cùng hướng với vectơ hợp lực $\\vec{F}$.",
                                    correct: true,
                                    explanation: "Đúng theo Định luật II Newton: $\\vec{a} = \\frac{\\vec{F}}{m}$."
                                }
                            ]
                        },
                        {
                            id: "p10_drill_2_2_3",
                            type: "short_answer",
                            level: "Vận dụng",
                            question: "Một quả bóng có khối lượng $m = 0,4\\,\\text{kg}$ đang bay với tốc độ $15\\,\\text{m/s}$ thì đập vuông góc vào bức tường và bật ngược trở lại với cùng tốc độ $15\\,\\text{m/s}$. Thời gian va chạm giữa bóng và tường là $0,05\\,\\text{giây}$. Hãy tính độ lớn lực trung bình mà tường tác dụng lên quả bóng (đơn vị Niutơn).",
                            correct_value: 240,
                            tolerance: 1,
                            unit_symbol: "N",
                            unit: "Niutơn (N)",
                            explanation: "Chọn chiều dương là chiều bật ra: $v_1 = -15\\,\\text{m/s}$, $v_2 = +15\\,\\text{m/s}$. Gia tốc: $a = \\frac{v_2 - v_1}{\\Delta t} = \\frac{15 - (-15)}{0,05} = \\frac{30}{0,05} = 600\\,\\text{m/s}^2$. Lực: $F = m \\cdot a = 0,4 \\times 600 = 240\\,\\text{N}$."
                        }
                    ],
                    advanced_challenge: {
                        id: "p10_adv_2_2",
                        title: "🔥 Nghịch Lý Con Ngựa Kéo Xe",
                        question: "Có người nói: 'Theo định luật III Newton, ngựa kéo xe một lực bằng bao nhiêu thì xe kéo ngược lại ngựa một lực đúng bằng bấy nhiêu. Hai lực này bằng nhau và ngược chiều nên triệt tiêu lẫn nhau, làm sao xe di chuyển được?'. Lập luận sai ở điểm nào?",
                        options: [
                            "Hai lực đặt vào hai vật khác nhau (lực kéo đặt vào xe, phản lực đặt vào ngựa) nên không triệt tiêu nhau; xe chạy được là nhờ lực đẩy của mặt đất vào chân ngựa lớn hơn lực cản.",
                            "Định luật III Newton không áp dụng được cho sinh vật sống.",
                            "Lực kéo của ngựa luôn phải lớn hơn phản lực của xe một chút thì xe mới chạy được.",
                            "Phản lực của xe bị mặt đất hấp thụ hoàn toàn."
                        ],
                        correct: 0,
                        bonus_xp: 90,
                        explanation: "Hai lực tác dụng vào 2 vật khác nhau nên không triệt tiêu nhau! Xe chuyển động do hợp lực tác dụng lên xe lớn hơn 0; ngựa tiến lên do lực ma sát nghỉ của mặt đất đẩy chân ngựa về phía trước lớn hơn lực cản của xe kéo lại."
                    }
                }
            ],
            summary: {
                title: "Tổng Kết Bài 2: Ba Định Luật Newton",
                mindmap_nodes: [
                    { title: "Định luật I (Quán tính)", content: "Vật bảo toàn vận tốc khi không có ngoại lực: $\\sum \\vec{F} = \\vec{0} \\implies \\vec{v} = \\text{const}$." },
                    { title: "Định luật II (Động lực học)", content: "$\\vec{a} = \\frac{\\vec{F}}{m} \\implies \\vec{F} = m\\vec{a}$; khối lượng đo mức quán tính." },
                    { title: "Định luật III (Tương hỗ)", content: "$\\vec{F}_{AB} = -\\vec{F}_{BA}$; cùng độ lớn, ngược chiều, khác điểm đặt." }
                ],
                cheat_sheet: [
                    { name: "Định luật II Newton", formula: "F = m \\cdot a", unit: "N = kg \\cdot m/s^2" },
                    { name: "Định luật III Newton", formula: "\\vec{F}_{12} = -\\vec{F}_{21}", unit: "N" },
                    { name: "Trọng lực", formula: "P = m \\cdot g", unit: "N" }
                ],
                boss_challenge: {
                    boss_name: "Thiên Binh Newton 🍎 (Boss Chặng 2)",
                    boss_hp: 100,
                    boss_avatar: "🍎",
                    dialogue: "Ngươi có hiểu thấu đáo bản chất của Lực và Quán tính không? Hãy thử hóa giải đòn đánh của ta!",
                    questions: [
                        {
                            question: "Một vật chịu tác dụng của hai lực đồng quy cùng phương, ngược chiều có độ lớn $F_1 = 30\\,\\text{N}$ và $F_2 = 40\\,\\text{N}$. Hợp lực tác dụng lên vật có độ lớn là",
                            options: ["10 N", "70 N", "50 N", "1200 N"],
                            correct: 0,
                            damage: 50
                        },
                        {
                            question: "Một bao cát $50\\,\\text{kg}$ nằm yên trên sàn. Gia tốc trọng trường $g = 9,8\\,\\text{m/s}^2$. Phản lực do sàn tác dụng lên bao cát có độ lớn là",
                            options: ["490 N", "50 N", "0 N", "9,8 N"],
                            correct: 0,
                            damage: 50
                        }
                    ]
                }
            }
        }
    ]
};
