/**
 * Wayground Physics 11 - Master Micro-learning Data Hub (v2.1.0)
 * Standard: GDPT 2018 - Chuẩn kiến thức THPT môn Vật lí Lớp 11
 * Các chuyên đề: Dao động điều hòa, Sóng cơ & Giao thoa, Điện trường & Tĩnh điện
 * Bộ 4 Dạng Nhiệm Vụ: MCQ, Kéo thả ráp công thức, Đúng/Sai 4 ý lũy tiến, Trả lời ngắn điền số Numpad
 */

const MICRO_LEARNING_BANK_11 = {
    grade: 11,
    title: "Vật Lí 11 • GDPT 2018",
    theme_color: "#8B5CF6",
    lessons: [
        // =====================================================================
        // BÀI 1: MÔ TẢ DAO ĐỘNG ĐIỀU HÒA
        // =====================================================================
        {
            lesson_id: "p11_l01_dao_dong_dieu_hoa",
            title: "Bài 1: Mô Tả Dao Động Điều Hòa",
            chapter: "Chương 1: Dao Động",
            grade: 11,
            icon: "🌊",
            badge: "Bậc Thầy Sóng & Nhịp",
            total_xp: 450,
            description: "Làm chủ phương trình li độ x = A.cos(ωt + φ), chu kì T, tần số f và sự lệch pha giữa các đại lượng điều hòa.",
            micro_units: [
                {
                    unit_id: "p11_u1_1",
                    title: "Đơn vị 1: Các đặc trưng của dao động điều hòa",
                    short_desc: "Biên độ A, Tần số góc ω, Chu kì T và Pha dao động",
                    duration: "4 phút",
                    xp_reward: 100,
                    hook: {
                        title: "Nhịp Đập Đồng Hồ Quả Lắc",
                        scenario: "Tại sao quả lắc đồng hồ cứ lặp đi lặp lại một chuyển động quanh vị trí cân bằng với thời gian một chu kì chính xác đến từng phần trăm giây trong suốt hàng thế kỉ?",
                        curiosity_prompt: "Chuyển động lặp đi lặp lại tuần hoàn theo quy luật hàm cosin chính là Dao động điều hòa!"
                    },
                    challenge: {
                        type: "slider_lab",
                        title: "Mô phỏng: Đồ Thị Li Độ x(t)",
                        instruction: "Kéo thanh trượt Biên độ $A$ và Tần số góc $\\omega$ để quan sát hình dạng sóng cosin co giãn nhịp nhàng!",
                        config: {
                            fixed_r: 10,
                            min_u: 1,
                            max_u: 5,
                            step: 1
                        }
                    },
                    memory_card: {
                        title: "Phương Trình Dao Động Điều Hòa",
                        rule: "Dao động điều hòa là dao động trong đó li độ của vật là một hàm cosin (hoặc sin) theo thời gian.",
                        formula: "x = A \\cos(\\omega t + \\varphi)",
                        key_takeaway: "• $A$: Biên độ dao động ($A > 0$), li độ cực đại.\n• $\\omega$: Tần số góc ($\\text{rad/s}$); Chu kì $T = \\frac{2\\pi}{\\omega}$; Tần số $f = \\frac{1}{T} = \\frac{\\omega}{2\\pi}$.\n• $(\\omega t + \\varphi)$: Pha dao động tại thời điểm $t$; $\\varphi$ là pha ban đầu tại $t = 0$.",
                        mnemonic: "💡 Mẹo nhớ: Omega = Hai Pi chia T | Quãng đường 1 chu kì luôn là BỐN A (4A)!"
                    },
                    practice_drill: [
                        {
                            id: "p11_drill_1_1_1",
                            type: "mcq",
                            level: "Nhận biết",
                            question: "Một chất điểm dao động điều hòa theo phương trình $x = 5\\cos(4\\pi t + \\frac{\\pi}{3})\\,\\text{cm}$. Biên độ dao động của chất điểm là",
                            options: [
                                "5 cm",
                                "4π cm",
                                "10 cm",
                                "π/3 cm"
                            ],
                            correct: 0,
                            explanation: "So sánh với phương trình chuẩn $x = A\\cos(\\omega t + \\varphi)$, ta có biên độ $A = 5\\,\\text{cm}$."
                        },
                        {
                            id: "p11_drill_1_1_2",
                            type: "multi_tf",
                            level: "Thông hiểu",
                            context: "Một vật nhỏ dao động điều hòa với phương trình $x = 6\\cos(2\\pi t - \\frac{\\pi}{2})\\,\\text{cm}$ ($t$ tính bằng giây).",
                            items: [
                                {
                                    text: "Chu kì dao động của vật là $T = 1\\,\\text{giây}$.",
                                    correct: true,
                                    explanation: "Đúng, $T = \\frac{2\\pi}{\\omega} = \\frac{2\\pi}{2\\pi} = 1\\,\\text{s}$."
                                },
                                {
                                    text: "Tần số dao động của vật là $f = 2\\,\\text{Hz}$.",
                                    correct: false,
                                    explanation: "Sai, $f = \\frac{1}{T} = \\frac{1}{1} = 1\\,\\text{Hz}$."
                                },
                                {
                                    text: "Tại thời điểm ban đầu $t = 0$, vật đang ở vị trí cân bằng ($x = 0$) và chuyển động theo chiều dương.",
                                    correct: true,
                                    explanation: "Đúng, $x(0) = 6\\cos(-\\pi/2) = 0$; pha ban đầu $\\varphi = -\\pi/2 < 0 \\implies v > 0$ (theo chiều dương)."
                                },
                                {
                                    text: "Quãng đường vật đi được trong một chu kì dao động toàn phần là $24\\,\\text{cm}$.",
                                    correct: true,
                                    explanation: "Đúng, trong 1 chu kì vật luôn đi được quãng đường $S = 4A = 4 \\times 6 = 24\\,\\text{cm}$."
                                }
                            ]
                        },
                        {
                            id: "p11_drill_1_1_3",
                            type: "short_answer",
                            level: "Vận dụng",
                            question: "Một con lắc lò xo thực hiện được $30$ dao động toàn phần trong thời gian $15\\,\\text{giây}$. Hãy tính chu kì dao động $T$ của con lắc (đơn vị giây).",
                            correct_value: 0.5,
                            tolerance: 0.05,
                            unit_symbol: "s",
                            unit: "giây (s)",
                            explanation: "Chu kì là thời gian thực hiện 1 dao động toàn phần: $T = \\frac{\\Delta t}{N} = \\frac{15}{30} = 0,5\\,\\text{s}$."
                        }
                    ],
                    advanced_challenge: {
                        id: "p11_adv_1_1",
                        title: "🔥 Thời Gian Ngắn Nhất Đi Từ -A/2 Đến +A/2",
                        question: "Một vật dao động điều hòa với chu kì $T$. Khoảng thời gian ngắn nhất để vật đi từ vị trí có li độ $x = -\\frac{A}{2}$ đến vị trí $x = +\\frac{A}{2}$ là",
                        options: ["T / 6", "T / 4", "T / 12", "T / 3"],
                        correct: 0,
                        bonus_xp: 70,
                        explanation: "Góc quét trên vòng tròn lượng giác từ $-\\frac{A}{2}$ đến $+\\frac{A}{2}$ là $\\Delta\\alpha = \\frac{\\pi}{6} + \\frac{\\pi}{6} = \\frac{\\pi}{3}$. Thời gian: $\\Delta t = \\frac{\\Delta\\alpha}{\\omega} = \\frac{\\pi / 3}{2\\pi / T} = \\frac{T}{6}$."
                    }
                },
                {
                    unit_id: "p11_u1_2",
                    title: "Đơn vị 2: Vận tốc, Gia tốc & Đồ thị pha",
                    short_desc: "v sớm pha π/2 so với x, a ngược pha với x: a = -ω²x",
                    duration: "5 phút",
                    xp_reward: 120,
                    hook: {
                        scenario: "Khi quả lắc bay qua vị trí cân bằng, nó lao đi với tốc độ xé gió cực đại nhưng gia tốc kéo về lại bằng 0. Ngược lại ở hai biên, vật dừng lại trong tích tắc nhưng lực kéo về lại mạnh nhất!",
                        curiosity_prompt: "Khám phá mối quan hệ vuông pha và ngược pha kỳ thú giữa x, v và a!"
                    },
                    challenge: {
                        type: "formula_assembler",
                        title: "Lắp Ráp Hệ Thức Độc Lập Vận Tốc & Li Độ",
                        instruction: "Ghép các khối để hoàn thành công thức liên hệ vuông pha: $x^2 + \\frac{v^2}{\\omega^2} = A^2$!",
                        target_formula: "x^2 + v^2 / \\omega^2 = A^2",
                        blocks: ["x^2", "+", "v^2", "/", "\\omega^2", "=", "A^2", "-", "a^2"],
                        hint: "Li độ x và vận tốc v vuông pha với nhau."
                    },
                    memory_card: {
                        title: "Mối Quan Hệ Pha Giữa x, v và a",
                        rule: "• Vận tốc: $v = x' = -\\omega A \\sin(\\omega t + \\varphi) = \\omega A \\cos(\\omega t + \\varphi + \\frac{\\pi}{2})$. ($v$ sớm pha $\\frac{\\pi}{2}$ so với $x$).\n• Gia tốc: $a = v' = -\\omega^2 x = \\omega^2 A \\cos(\\omega t + \\varphi + \\pi)$. ($a$ ngược pha với $x$).",
                        formula: "a = -\\omega^2 x \\quad \\text{và} \\quad x^2 + \\frac{v^2}{\\omega^2} = A^2",
                        key_takeaway: "• Tại vị trí cân bằng ($x = 0$): Tốc độ cực đại $v_{max} = \\omega A$, gia tốc $a = 0$.\n• Tại vị trí biên ($x = \\pm A$): Tốc độ bằng 0, độ lớn gia tốc cực đại $a_{max} = \\omega^2 A$.",
                        mnemonic: "💡 Mẹo nhớ: QUA VTCB THÌ VẬN TỐC TỐI ĐA, RA BIÊN THÌ GIA TỐC TỐI ĐA!"
                    },
                    practice_drill: [
                        {
                            id: "p11_drill_1_2_1",
                            type: "mcq",
                            level: "Nhận biết",
                            question: "Trong dao động điều hòa, gia tốc của vật luôn",
                            options: [
                                "Ngược pha với li độ và hướng về vị trí cân bằng.",
                                "Cùng pha với li độ.",
                                "Sớm pha π/2 so với vận tốc.",
                                "Có độ lớn không đổi theo thời gian."
                            ],
                            correct: 0,
                            explanation: "Hệ thức $a = -\\omega^2 x$ chứng minh gia tốc luôn tỉ lệ và ngược dấu (ngược pha) với li độ, luôn hướng về vị trí cân bằng."
                        },
                        {
                            id: "p11_drill_1_2_2",
                            type: "multi_tf",
                            level: "Thông hiểu",
                            context: "Một chất điểm dao động điều hòa với biên độ $A = 4\\,\\text{cm}$ và tần số góc $\\omega = 10\\,\\text{rad/s}$.",
                            items: [
                                {
                                    text: "Tốc độ cực đại của chất điểm khi qua vị trí cân bằng là $40\\,\\text{cm/s}$.",
                                    correct: true,
                                    explanation: "Đúng, $v_{max} = \\omega A = 10 \\times 4 = 40\\,\\text{cm/s}$."
                                },
                                {
                                    text: "Độ lớn gia tốc cực đại của chất điểm tại hai biên là $400\\,\\text{cm/s}^2$ ($4\\,\\text{m/s}^2$).",
                                    correct: true,
                                    explanation: "Đúng, $a_{max} = \\omega^2 A = 10^2 \\times 4 = 400\\,\\text{cm/s}^2 = 4\\,\\text{m/s}^2$."
                                },
                                {
                                    text: "Khi chất điểm có li độ $x = 2\\,\\text{cm}$ thì gia tốc của nó là $a = +200\\,\\text{cm/s}^2$.",
                                    correct: false,
                                    explanation: "Sai, $a = -\\omega^2 x = -100 \\times 2 = -200\\,\\text{cm/s}^2$ (phải mang dấu âm)."
                                },
                                {
                                    text: "Vận tốc biến thiên điều hòa sớm pha $\\frac{\\pi}{2}$ so với li độ.",
                                    correct: true,
                                    explanation: "Đúng, vectơ vận tốc vuông pha và quay sớm hơn vectơ li độ một góc $\\frac{\\pi}{2}$."
                                }
                            ]
                        },
                        {
                            id: "p11_drill_1_2_3",
                            type: "short_answer",
                            level: "Vận dụng",
                            question: "Một vật dao động điều hòa với tần số góc $\\omega = 10\\,\\text{rad/s}$. Khi vật có li độ $x = 3\\,\\text{cm}$ thì vận tốc của nó có độ lớn $v = 40\\,\\text{cm/s}$. Hãy tính biên độ dao động $A$ của vật (đơn vị cm).",
                            correct_value: 5,
                            tolerance: 0.05,
                            unit_symbol: "cm",
                            unit: "cm",
                            explanation: "Áp dụng hệ thức độc lập: $A = \\sqrt{x^2 + \\frac{v^2}{\\omega^2}} = \\sqrt{3^2 + \\left(\\frac{40}{10}\\right)^2} = \\sqrt{9 + 16} = 5\\,\\text{cm}$."
                        }
                    ],
                    advanced_challenge: {
                        id: "p11_adv_1_2",
                        title: "🔥 Tốc Độ Trung Bình Trong Nửa Chu Kì",
                        question: "Tốc độ trung bình lớn nhất mà một vật dao động điều hòa với biên độ A và chu kì T có thể đạt được trong khoảng thời gian $\\Delta t = \\frac{T}{3}$ là",
                        options: [
                            "\\frac{3\\sqrt{3} A}{T}",
                            "\\frac{6 A}{T}",
                            "\\frac{3 A}{T}",
                            "\\frac{4 A}{T}"
                        ],
                        correct: 0,
                        bonus_xp: 80,
                        explanation: "Trong thời gian $T/3$, góc quét là $2\\pi/3$. Quãng đường lớn nhất đối xứng qua VTCB: $S_{max} = 2A\\sin(\\frac{2\\pi/3}{2}) = 2A\\sin(\\frac{\\pi}{3}) = A\\sqrt{3}$. Tốc độ TB cực đại: $v_{tb} = \\frac{A\\sqrt{3}}{T/3} = \\frac{3\\sqrt{3}A}{T}$."
                    }
                }
            ],
            summary: {
                title: "Tổng Kết Bài 1: Mô Tả Dao Động Điều Hòa",
                mindmap_nodes: [
                    { title: "Phương trình li độ", content: "$x = A\\cos(\\omega t + \\varphi)$; $A$: biên độ, $\\omega$: tần số góc, $\\varphi$: pha ban đầu." },
                    { title: "Phương trình vận tốc", content: "$v = -\\omega A\\sin(\\omega t + \\varphi)$; sớm pha $\\pi/2$ so với li độ; cực đại tại VTCB." },
                    { title: "Phương trình gia tốc", content: "$a = -\\omega^2 x$; ngược pha với li độ; độ lớn cực đại tại hai biên." }
                ],
                cheat_sheet: [
                    { name: "Chu kì và tần số", formula: "T = \\frac{2\\pi}{\\omega}, \\quad f = \\frac{1}{T}", unit: "s, Hz" },
                    { name: "Hệ thức độc lập", formula: "x^2 + \\frac{v^2}{\\omega^2} = A^2", unit: "cm" },
                    { name: "Gia tốc cực đại", formula: "a_{max} = \\omega^2 A", unit: "cm/s^2" }
                ],
                boss_challenge: {
                    boss_name: "Con Lắc Pha Lê 💎 (Boss Chặng 1)",
                    boss_hp: 100,
                    boss_avatar: "💎",
                    dialogue: "Ngươi có bắt kịp tần số và nhịp đập biến ảo của ta không? Hãy giải các bài toán pha dao động!",
                    questions: [
                        {
                            question: "Một chất điểm dao động có phương trình $x = 10\\cos(5\\pi t - \\frac{\\pi}{4})\\,\\text{cm}$. Pha của dao động tại thời điểm $t = 1\\,\\text{s}$ là",
                            options: ["4,75π rad", "5π rad", "5,25π rad", "-π/4 rad"],
                            correct: 0,
                            damage: 50
                        },
                        {
                            question: "Khi vật dao động điều hòa đổi chiều chuyển động thì",
                            options: [
                                "Vận tốc bằng 0 và gia tốc có độ lớn cực đại.",
                                "Lực kéo về bằng 0.",
                                "Vận tốc đạt độ lớn cực đại.",
                                "Gia tốc bằng 0."
                            ],
                            correct: 0,
                            damage: 50
                        }
                    ]
                }
            }
        },

        // =====================================================================
        // BÀI 2: SÓNG CƠ & GIAO THOA SÓNG
        // =====================================================================
        {
            lesson_id: "p11_l02_song_co_giao_thoa",
            title: "Bài 2: Sóng Cơ & Hiện Tượng Giao Thoa",
            chapter: "Chương 2: Sóng",
            grade: 11,
            icon: "🌊",
            badge: "Chúa Tể Sóng Biển",
            total_xp: 480,
            description: "Khám phá quá trình lan truyền dao động cơ, bước sóng λ = v.T và các vân giao thoa cực đại, cực tiểu đối xứng tuyệt mỹ.",
            micro_units: [
                {
                    unit_id: "p11_u2_1",
                    title: "Đơn vị 1: Bản chất sóng cơ & Bước sóng",
                    short_desc: "Sóng truyền pha dao động và năng lượng, không truyền phần tử vật chất: λ = v.T = v / f",
                    duration: "4 phút",
                    xp_reward: 100,
                    hook: {
                        scenario: "Khi một chiếc lá rơi xuống mặt hồ yên ả, gợn sóng lan rộng ra bờ nhưng chiếc lá chỉ nhấp nhô lên xuống tại chỗ mà không bị dạt vào bờ theo làn sóng. Vì sao vậy?",
                        curiosity_prompt: "Sóng chỉ truyền pha dao động và năng lượng, các phần tử môi trường chỉ dao động tại chỗ quanh vị trí cân bằng!"
                    },
                    challenge: {
                        type: "slider_lab",
                        title: "Mô phỏng: Bước Sóng Lan Truyền",
                        instruction: "Kéo thanh trượt Tần số $f$ để thấy: tần số càng cao thì bước sóng $\\lambda$ càng ngắn lại theo công thức $\\lambda = v / f$!",
                        config: {
                            fixed_r: 10,
                            min_u: 1,
                            max_u: 5,
                            step: 1
                        }
                    },
                    memory_card: {
                        title: "Định Nghĩa Sóng Cơ & Bước Sóng",
                        rule: "Sóng cơ là sự lan truyền dao động cơ trong môi trường vật chất theo thời gian.\nBước sóng $\\lambda$ là quãng đường sóng truyền đi được trong một chu kì dao động.",
                        formula: "\\lambda = v \\cdot T = \\frac{v}{f}",
                        key_takeaway: "• Bước sóng cũng là khoảng cách giữa hai điểm gần nhau nhất trên cùng một phương truyền sóng dao động CÙNG PHA.\n• Khoảng cách giữa hai điểm gần nhất dao động NGƯỢC PHA là $\\frac{\\lambda}{2}$.",
                        mnemonic: "💡 Mẹo nhớ: Lam-đa = Vận tốc nhân Chu kì (Người Lái Đò Vèo Vèo Vượt Thác)!"
                    },
                    practice_drill: [
                        {
                            id: "p11_drill_2_1_1",
                            type: "mcq",
                            level: "Nhận biết",
                            question: "Bước sóng là",
                            options: [
                                "Quãng đường sóng truyền đi được trong một chu kì dao động.",
                                "Khoảng cách giữa hai ngọn sóng bất kì.",
                                "Quãng đường sóng truyền đi được trong một giây.",
                                "Biên độ dao động của phần tử sóng."
                            ],
                            correct: 0,
                            explanation: "Định nghĩa chuẩn: Bước sóng $\\lambda$ là quãng đường sóng truyền được trong một chu kì dao động."
                        },
                        {
                            id: "p11_drill_2_1_2",
                            type: "multi_tf",
                            level: "Thông hiểu",
                            context: "Một sóng cơ hình sin truyền dọc theo trục Ox trong một môi trường đàn hồi đồng tính với tốc độ $v = 2\\,\\text{m/s}$ và tần số $f = 10\\,\\text{Hz}$.",
                            items: [
                                {
                                    text: "Bước sóng của sóng này là $\\lambda = 0,2\\,\\text{m}$ ($20\\,\\text{cm}$).",
                                    correct: true,
                                    explanation: "Đúng, $\\lambda = \\frac{v}{f} = \\frac{2}{10} = 0,2\\,\\text{m} = 20\\,\\text{cm}$."
                                },
                                {
                                    text: "Chu kì dao động của sóng là $T = 0,1\\,\\text{giây}$.",
                                    correct: true,
                                    explanation: "Đúng, $T = \\frac{1}{f} = \\frac{1}{10} = 0,1\\,\\text{s}$."
                                },
                                {
                                    text: "Hai điểm trên cùng phương truyền sóng cách nhau $10\\,\\text{cm}$ dao động ngược pha nhau.",
                                    correct: true,
                                    explanation: "Đúng, khoảng cách $d = 10\\,\\text{cm} = \\frac{\\lambda}{2}$ nên hai điểm dao động ngược pha."
                                },
                                {
                                    text: "Khi sóng truyền đi, các phần tử môi trường cũng bị cuốn theo phương truyền sóng với vận tốc $2\\,\\text{m/s}$.",
                                    correct: false,
                                    explanation: "Sai, các phần tử môi trường chỉ dao động tại chỗ quanh vị trí cân bằng, không chuyển dời theo sóng."
                                }
                            ]
                        },
                        {
                            id: "p11_drill_2_1_3",
                            type: "short_answer",
                            level: "Vận dụng",
                            question: "Một người quan sát sóng trên mặt biển thấy khoảng cách giữa 5 ngọn sóng liên tiếp là $12\\,\\text{m}$. Hãy tính bước sóng $\\lambda$ của sóng biển này (đơn vị mét).",
                            correct_value: 3,
                            tolerance: 0.05,
                            unit_symbol: "m",
                            unit: "mét (m)",
                            explanation: "Khoảng cách giữa $n$ ngọn sóng liên tiếp là $(n - 1)\\lambda$. Ở đây có 5 ngọn sóng $\\implies 4\\lambda = 12\\,\\text{m} \\implies \\lambda = \\frac{12}{4} = 3\\,\\text{m}$."
                        }
                    ],
                    advanced_challenge: {
                        id: "p11_adv_2_1",
                        title: "🔥 Bẫy Truyền Sóng Giữa Hai Môi Trường",
                        question: "Khi một sóng âm truyền từ không khí vào trong nước, đại lượng nào sau đây KHÔNG THAY ĐỔI?",
                        options: [
                            "Tần số của sóng âm.",
                            "Tốc độ truyền sóng âm.",
                            "Bước sóng của sóng âm.",
                            "Biên độ của sóng âm."
                        ],
                        correct: 0,
                        bonus_xp: 70,
                        explanation: "Khi sóng truyền từ môi trường này sang môi trường khác, TẦN SỐ $f$ luôn do nguồn phát quyết định và KHÔNG ĐỔI. Vận tốc $v$ tăng (trong nước âm truyền nhanh hơn không khí) nên bước sóng $\\lambda = v/f$ tăng theo."
                    }
                },
                {
                    unit_id: "p11_u2_2",
                    title: "Đơn vị 2: Hiện tượng giao thoa sóng cơ",
                    short_desc: "Điều kiện sóng kết hợp, cực đại d2 - d1 = kλ, cực tiểu d2 - d1 = (k + 0.5)λ",
                    duration: "5 phút",
                    xp_reward: 120,
                    hook: {
                        scenario: "Gõ đồng thời hai mũi kim nhúng trên mặt nước, ta thấy xuất hiện các dải gợn sóng hình hyperbol xen kẽ nhau: có chỗ mặt nước dao động cực mạnh, nhưng có những đường nước lại hoàn toàn phẳng lặng đứng yên!",
                        curiosity_prompt: "Đó chính là Giao thoa sóng - bằng chứng không thể chối cãi của tính chất sóng!"
                    },
                    challenge: {
                        type: "formula_assembler",
                        title: "Lắp Ráp Điều Kiện Cực Đại Giao Thoa",
                        instruction: "Ghép các khối để hoàn thành điều kiện cực đại giao thoa của 2 nguồn cùng pha: $d_2 - d_1 = k \\cdot \\lambda$!",
                        target_formula: "d_2 - d_1 = k * \\lambda",
                        blocks: ["d_2", "-", "d_1", "=", "k", "*", "\\lambda", "+", "0.5"],
                        hint: "Hiệu đường đi bằng một số nguyên lần bước sóng."
                    },
                    memory_card: {
                        title: "Quy Tắc Giao Thoa Hai Nguồn Cùng Pha",
                        rule: "Hiện tượng hai sóng kết hợp khi gặp nhau tạo nên những vị trí dao động tăng cường (cực đại) hoặc triệt tiêu nhau (cực tiểu).",
                        formula: "\\text{Cực đại: } d_2 - d_1 = k\\lambda \\quad | \\quad \\text{Cực tiểu: } d_2 - d_1 = (k + 0,5)\\lambda",
                        key_takeaway: "• Hai nguồn kết hợp: Cùng phương, cùng tần số và có hiệu số pha không đổi theo thời gian.\n• Khoảng cách giữa hai cực đại liên tiếp trên đoạn thẳng nối hai nguồn là $\\frac{\\lambda}{2}$.",
                        mnemonic: "💡 Mẹo nhớ: CỰC ĐẠI là SỐ NGUYÊN lần lam-đa, CỰC TIỂU là SỐ BÁN NGUYÊN lần lam-đa!"
                    },
                    practice_drill: [
                        {
                            id: "p11_drill_2_2_1",
                            type: "mcq",
                            level: "Nhận biết",
                            question: "Điều kiện để hai sóng giao thoa được với nhau là hai sóng phải xuất phát từ hai nguồn kết hợp, tức là hai nguồn có",
                            options: [
                                "Cùng phương, cùng tần số và hiệu số pha không đổi theo thời gian.",
                                "Cùng biên độ và cùng tốc độ truyền sóng.",
                                "Cùng pha ban đầu và cùng phương truyền sóng.",
                                "Cùng bước sóng và biên độ cực đại."
                            ],
                            correct: 0,
                            explanation: "Định nghĩa hai nguồn kết hợp: Cùng phương, cùng tần số và có hiệu số pha không đổi theo thời gian."
                        },
                        {
                            id: "p11_drill_2_2_2",
                            type: "multi_tf",
                            level: "Thông hiểu",
                            context: "Trong thí nghiệm giao thoa sóng nước với hai nguồn kết hợp $S_1, S_2$ cùng pha, phát ra bước sóng $\\lambda = 2\\,\\text{cm}$.",
                            items: [
                                {
                                    text: "Điểm M cách hai nguồn các khoảng $d_1 = 12\\,\\text{cm}$ và $d_2 = 16\\,\\text{cm}$ là một điểm dao động với biên độ cực đại.",
                                    correct: true,
                                    explanation: "Đúng, hiệu đường đi $d_2 - d_1 = 16 - 12 = 4\\,\\text{cm} = 2\\lambda$ (số nguyên lần $\\lambda$, cực đại bậc 2)."
                                },
                                {
                                    text: "Đường trung trực của đoạn thẳng $S_1 S_2$ là một vân cực tiểu đứng yên.",
                                    correct: false,
                                    explanation: "Sai, đường trung trực có $d_1 = d_2 \\implies d_2 - d_1 = 0 = 0\\lambda$ là vân cực đại trung tâm."
                                },
                                {
                                    text: "Khoảng cách giữa hai đỉnh cực đại liên tiếp trên đoạn nối hai nguồn $S_1 S_2$ là $1\\,\\text{cm}$.",
                                    correct: true,
                                    explanation: "Đúng, khoảng cách giữa 2 cực đại liên tiếp trên đoạn nối nguồn là $\\frac{\\lambda}{2} = \\frac{2}{2} = 1\\,\\text{cm}$."
                                },
                                {
                                    text: "Tại điểm cực tiểu giao thoa, hai sóng thành phần gửi tới luôn dao động ngược pha và triệt tiêu nhau.",
                                    correct: true,
                                    explanation: "Đúng, hai sóng ngược pha nhau nên biên độ tổng hợp triệt tiêu."
                                }
                            ]
                        },
                        {
                            id: "p11_drill_2_2_3",
                            type: "short_answer",
                            level: "Vận dụng",
                            question: "Trong thí nghiệm giao thoa trên mặt nước với hai nguồn cùng pha cách nhau $S_1 S_2 = 9\\,\\text{cm}$, bước sóng $\\lambda = 2\\,\\text{cm}$. Hãy tính số đường cực đại giao thoa quan sát được trên đoạn thẳng nối hai nguồn $S_1 S_2$.",
                            correct_value: 9,
                            tolerance: 0.05,
                            unit_symbol: "đường",
                            unit: "đường cực đại",
                            explanation: "Điều kiện cực đại: $-\\frac{S_1 S_2}{\\lambda} < k < \\frac{S_1 S_2}{\\lambda} \\implies -\\frac{9}{2} < k < \\frac{9}{2} \\implies -4,5 < k < 4,5$. Các giá trị nguyên của $k$: $\\{-4, -3, -2, -1, 0, 1, 2, 3, 4\\}$ gồm 9 giá trị, tức có 9 đường cực đại."
                        }
                    ],
                    advanced_challenge: {
                        id: "p11_adv_2_2",
                        title: "🔥 Hai Nguồn Ngược Pha",
                        question: "Nếu hai nguồn sóng kết hợp $S_1$ và $S_2$ dao động NGƯỢC PHA nhau thì đường trung trực của đoạn thẳng $S_1 S_2$ sẽ là",
                        options: [
                            "Đường cực tiểu giao thoa (đứng yên).",
                            "Đường cực đại giao thoa bậc 0.",
                            "Đường cực đại giao thoa bậc 1.",
                            "Không xác định được."
                        ],
                        correct: 0,
                        bonus_xp: 80,
                        explanation: "Khi 2 nguồn ngược pha, tại trung trực $d_1 = d_2$ hai sóng tới ngược pha nhau triệt tiêu hoàn toàn, biến đường trung trực thành vân CỰC TIỂU!"
                    }
                }
            ],
            summary: {
                title: "Tổng Kết Bài 2: Sóng Cơ & Hiện Tượng Giao Thoa",
                mindmap_nodes: [
                    { title: "Đặc trưng sóng", content: "$\\lambda = v \\cdot T = \\frac{v}{f}$; sóng truyền năng lượng, không truyền phần tử." },
                    { title: "Điều kiện giao thoa", content: "Hai nguồn kết hợp (cùng tần số, cùng phương, hiệu pha không đổi)." },
                    { title: "Vân giao thoa", content: "Cực đại: $d_2 - d_1 = k\\lambda$; Cực tiểu: $d_2 - d_1 = (k + 0,5)\\lambda$." }
                ],
                cheat_sheet: [
                    { name: "Bước sóng", formula: "\\lambda = v \\cdot T = \\frac{v}{f}", unit: "m" },
                    { name: "Hiệu đường đi cực đại", formula: "d_2 - d_1 = k\\lambda", unit: "m" },
                    { name: "Khoảng cách 2 cực đại", formula: "\\Delta d = \\frac{\\lambda}{2}", unit: "m" }
                ],
                boss_challenge: {
                    boss_name: "Chúa Tể Sóng Biển 🌊 (Boss Chặng 2)",
                    boss_hp: 100,
                    boss_avatar: "🌊",
                    dialogue: "Ngươi có đủ bản lĩnh để cưỡi lên đỉnh ngọn sóng giao thoa của ta không?",
                    questions: [
                        {
                            question: "Một sóng cơ truyền trong môi trường với tốc độ $120\\,\\text{m/s}$ có bước sóng $3\\,\\text{m}$. Tần số của sóng là",
                            options: ["40 Hz", "360 Hz", "0,025 Hz", "80 Hz"],
                            correct: 0,
                            damage: 50
                        },
                        {
                            question: "Khoảng cách giữa hai điểm gần nhau nhất trên cùng một phương truyền sóng dao động ngược pha nhau là",
                            options: ["λ / 2", "λ", "2λ", "λ / 4"],
                            correct: 0,
                            damage: 50
                        }
                    ]
                }
            }
        }
    ]
};
