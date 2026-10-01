/**
 * Wayground Physics 9 - Micro-learning Data Hub (v2.1.0)
 * Standard: GDPT 2018 - Chuẩn kiến thức THCS & THPT môn Vật lí
 * Mô hình 4E: Engage (Khởi động) -> Explore (Thử thách) -> Encode (Ghi nhớ) -> Exercise (Luyện tập 4 dạng chuẩn)
 * Bộ 4 Dạng Nhiệm Vụ:
 * 1. mcq: Trắc nghiệm 4 lựa chọn (Phần I)
 * 2. circuit_drag / drag_drop: Kéo thả lắp ráp mạch điện tử & ráp công thức
 * 3. multi_tf: Đúng/Sai 4 ý độc lập có thang điểm lũy tiến 0.1 - 0.25 - 0.5 - 1.0 đ (Phần II)
 * 4. short_answer: Trả lời ngắn / Điền số với bàn phím Numpad và kiểm tra sai số ±0.05 (Phần III)
 */

const MICRO_LEARNING_BANK_9 = {
    lessons: [
        // =====================================================================
        // BÀI 1: SỰ PHỤ THUỘC CỦA I VÀO U - ĐỊNH LUẬT ÔM
        // =====================================================================
        {
            lesson_id: "p9_l01_dinh_luat_om",
            title: "Bài 1: Sự phụ thuộc của I vào U - Định luật Ôm",
            chapter: "Chương 1: Điện Học",
            grade: 9,
            icon: "⚡",
            badge: "Bậc Thầy Định Luật Ôm",
            total_xp: 450,
            description: "Khám phá mối quan hệ cốt lõi giữa Hiệu điện thế, Cường độ dòng điện và Điện trở.",
            micro_units: [
                {
                    unit_id: "p9_u1_1",
                    title: "Đơn vị 1: Mối quan hệ giữa I và U",
                    short_desc: "Tăng điện áp thì dòng điện thay đổi thế nào?",
                    duration: "4 phút",
                    xp_reward: 100,
                    hook: {
                        title: "Bí Ẩn Đèn Xe Máy Điện",
                        scenario: "Khi vít ga xe máy điện chạy nhanh hơn, nguồn cấp điện áp tăng lên làm bóng đèn pha sáng rực rỡ hơn hẳn. Liệu có quy luật toán học chính xác nào kết nối giữa điện áp và độ mạnh của dòng điện không?",
                        curiosity_prompt: "Hãy cùng làm thí nghiệm tăng dần điện áp và quan sát dòng điện chạy qua dây dẫn!"
                    },
                    challenge: {
                        type: "slider_lab",
                        title: "Phòng Thí Nghiệm Ảo: Khảo sát I theo U",
                        instruction: "Kéo thanh trượt Hiệu điện thế $U$ (từ 0V đến 12V) với điện trở cố định $R = 10\\,\\Omega$. Hãy quan sát kim Ampe kế và độ sáng của bóng đèn!",
                        config: {
                            fixed_r: 10,
                            min_u: 0,
                            max_u: 12,
                            step: 2,
                            target_observation: "Khi $U$ tăng gấp đôi (từ 3V lên 6V), dòng điện $I$ cũng tăng gấp đôi (từ 0.3A lên 0.6A)."
                        }
                    },
                    memory_card: {
                        title: "Định Luật Tỉ Lệ Thuận I và U",
                        rule: "Cường độ dòng điện chạy qua một dây dẫn **tỉ lệ thuận** với hiệu điện thế đặt vào hai đầu dây dẫn đó.",
                        formula: "\\frac{I_1}{I_2} = \\frac{U_1}{U_2}",
                        key_takeaway: "Đồ thị biểu diễn sự phụ thuộc của $I$ vào $U$ là một **đường thẳng đi qua gốc tọa độ** $(0; 0)$.",
                        mnemonic: "💡 Mẹo nhớ: U tăng bao nhiêu lần thì I tăng bấy nhiêu lần!"
                    },
                    practice_drill: [
                        {
                            id: "drill_1_1_1",
                            type: "mcq",
                            level: "Nhận biết",
                            question: "Đồ thị biểu diễn sự phụ thuộc của cường độ dòng điện $I$ vào hiệu điện thế $U$ giữa hai đầu dây dẫn có dạng là",
                            options: [
                                "Một đường thẳng đi qua gốc tọa độ (0; 0).",
                                "Một đường cong parabol hướng lên.",
                                "Một đường cong hyperbol đối xứng.",
                                "Một đường thẳng song song với trục hoành."
                            ],
                            correct: 0,
                            explanation: "Đồ thị $I(U)$ là một đường thẳng đi qua gốc tọa độ $(0;0)$, thể hiện mối quan hệ tỉ lệ thuận toán học giữa $I$ và $U$."
                        },
                        {
                            id: "drill_1_1_2",
                            type: "multi_tf",
                            level: "Thông hiểu",
                            context: "Đặt một hiệu điện thế $U$ vào hai đầu một dây dẫn kim loại có điện trở không đổi $R$, dòng điện chạy qua dây là $I$.",
                            items: [
                                {
                                    text: "Cường độ dòng điện $I$ tỉ lệ thuận với hiệu điện thế $U$ giữa hai đầu dây dẫn.",
                                    correct: true,
                                    explanation: "Đúng theo nội dung định luật: $I$ luôn tỉ lệ thuận với $U$ khi điện trở dây không đổi."
                                },
                                {
                                    text: "Khi hiệu điện thế $U$ tăng gấp 3 lần thì cường độ dòng điện $I$ giảm đi 3 lần.",
                                    correct: false,
                                    explanation: "Sai, vì $I$ tỉ lệ thuận với $U$, khi $U$ tăng 3 lần thì $I$ cũng phải tăng 3 lần."
                                },
                                {
                                    text: "Nếu không đặt hiệu điện thế vào hai đầu dây ($U = 0\\text{V}$) thì không có dòng điện chạy qua ($I = 0\\text{A}$).",
                                    correct: true,
                                    explanation: "Đúng, khi $U = 0$ thì $I = 0$, đồ thị $I(U)$ đi qua gốc tọa độ $(0; 0)$."
                                },
                                {
                                    text: "Thương số $\\frac{U}{I}$ của dây dẫn thay đổi khi hiệu điện thế $U$ thay đổi.",
                                    correct: false,
                                    explanation: "Sai, với một dây dẫn xác định thì thương số $\\frac{U}{I} = R$ là một hằng số không đổi."
                                }
                            ]
                        },
                        {
                            id: "drill_1_1_3",
                            type: "short_answer",
                            level: "Vận dụng",
                            question: "Khi hiệu điện thế giữa hai đầu một dây dẫn giảm đi $2\\,\\text{V}$ thì cường độ dòng điện qua dây giảm đi $0,1\\,\\text{A}$. Biết dòng điện ban đầu là $0,4\\,\\text{A}$. Hãy tính giá trị hiệu điện thế ban đầu $U_1$ (đơn vị Vôn).",
                            correct_value: 8,
                            tolerance: 0.05,
                            unit_symbol: "V",
                            unit: "Vôn (V)",
                            explanation: "Vì $I$ tỉ lệ thuận với $U$, ta có: $\\frac{U_1}{I_1} = \\frac{U_1 - 2}{I_1 - 0,1} \\implies \\frac{U_1}{0,4} = \\frac{U_1 - 2}{0,3} \\implies 0,3 U_1 = 0,4 U_1 - 0,8 \\implies 0,1 U_1 = 0,8 \\implies U_1 = 8\\,\\text{V}$."
                        }
                    ],
                    advanced_challenge: {
                        id: "adv_1_1",
                        title: "🔥 Thử Thách Tinh Anh: Phân Tích Đồ Thị",
                        question: "Cho đồ thị $I(U)$ của hai dây dẫn 1 và 2. Cùng một giá trị hiệu điện thế $U$, dây 1 cho dòng điện $I_1$ lớn hơn dây 2 ($I_1 > I_2$). Kết luận nào sau đây đúng?",
                        options: [
                            "Dây 1 cản trở dòng điện ít hơn dây 2 (Điện trở $R_1 < R_2$).",
                            "Dây 1 cản trở dòng điện nhiều hơn dây 2 (Điện trở $R_1 > R_2$).",
                            "Dây 1 và dây 2 có điện trở bằng nhau.",
                            "Không thể so sánh nếu chưa biết chiều dài hai dây."
                        ],
                        correct: 0,
                        bonus_xp: 60,
                        explanation: "Cùng một hiệu điện thế $U$, dây nào cho dòng điện $I$ chạy qua lớn hơn chứng tỏ dây đó cản trở dòng điện ít hơn, tức là điện trở nhỏ hơn ($R_1 < R_2$)."
                    }
                },
                {
                    unit_id: "p9_u1_2",
                    title: "Đơn vị 2: Điện trở & Định luật Ôm",
                    short_desc: "Đại lượng nào cản trở dòng điện và công thức vàng I = U / R",
                    duration: "5 phút",
                    xp_reward: 120,
                    hook: {
                        scenario: "Tại sao hai bóng đèn pin và đèn pha xe hơi cùng được thắp sáng, nhưng đèn pha cần dây đồng to và dày hơn còn đèn pin chỉ cần sợi tóc mảnh mai?",
                        curiosity_prompt: "Sợi dây dẫn đóng vai trò như một đường hẹp cản trở các hạt electron di chuyển. Hãy khám phá khái niệm Điện trở!"
                    },
                    challenge: {
                        type: "formula_assembler",
                        title: "Thử thách Ghép Mảnh: Định Luật Ôm",
                        instruction: "Kéo hoặc nhấp chọn các khối đại lượng để lắp thành công thức Định luật Ôm hoàn chỉnh!",
                        target_formula: "I = U / R",
                        blocks: ["I", "=", "U", "/", "R", "*", "+", "R^2"],
                        hint: "Cường độ dòng điện $I$ tỉ lệ thuận với $U$ và tỉ lệ nghịch với $R$."
                    },
                    memory_card: {
                        title: "Định Luật Ôm Toàn Mạch",
                        rule: "Cường độ dòng điện chạy qua dây dẫn tỉ lệ thuận với hiệu điện thế giữa hai đầu dây và tỉ lệ nghịch với điện trở của dây.",
                        formula: "I = \\frac{U}{R} \\iff R = \\frac{U}{I} \\iff U = I \\cdot R",
                        key_takeaway: "• Đơn vị: $I$ đo bằng Ampe (A), $U$ đo bằng Vôn (V), $R$ đo bằng Ôm ($\\Omega$).\n• Ý nghĩa của $R$: Thể hiện mức độ cản trở dòng điện của vật dẫn. Với cùng $U$, $R$ càng lớn thì $I$ càng bé.",
                        mnemonic: "💡 Mẹo nhớ hình tam giác V-I-R: U ở đỉnh tam giác, I và R ở hai góc đáy!"
                    },
                    practice_drill: [
                        {
                            id: "drill_1_2_1",
                            type: "mcq",
                            level: "Nhận biết",
                            question: "Biểu thức toán học chuẩn của Định luật Ôm cho một đoạn mạch là",
                            options: [
                                "$I = \\frac{U}{R}$",
                                "$R = \\frac{U}{I^2}$",
                                "$I = U \\cdot R$",
                                "$U = \\frac{I}{R}$"
                            ],
                            correct: 0,
                            explanation: "Công thức cơ bản của định luật Ôm: $I = \\frac{U}{R}$."
                        },
                        {
                            id: "drill_1_2_2",
                            type: "multi_tf",
                            level: "Thông hiểu",
                            context: "Xét công thức Định luật Ôm $I = \\frac{U}{R}$ và hệ thức $R = \\frac{U}{I}$ đối với một vật dẫn xác định.",
                            items: [
                                {
                                    text: "Cường độ dòng điện $I$ chạy qua dây dẫn tỉ lệ nghịch với điện trở $R$ của dây.",
                                    correct: true,
                                    explanation: "Đúng, khi giữ nguyên $U$, điện trở $R$ tăng bao nhiêu lần thì dòng điện $I$ giảm bấy nhiêu lần."
                                },
                                {
                                    text: "Điện trở $R$ của dây dẫn tỉ lệ thuận với hiệu điện thế $U$ đặt vào hai đầu dây.",
                                    correct: false,
                                    explanation: "Sai, điện trở $R$ là thuộc tính riêng của vật dẫn, không đổi khi $U$ hoặc $I$ thay đổi."
                                },
                                {
                                    text: "Khi hiệu điện thế giữa hai đầu dây dẫn là $1\\,\\text{V}$ và dòng điện chạy qua là $1\\,\\text{A}$ thì điện trở của dây là $1\\,\\Omega$.",
                                    correct: true,
                                    explanation: "Đúng theo định nghĩa đơn vị Ôm: $1\\,\\Omega = 1\\,\\text{V} / 1\\,\\text{A}$."
                                },
                                {
                                    text: "Nếu thay đổi hiệu điện thế $U$ thì thương số $\\frac{U}{I}$ của dây dẫn cũng bị thay đổi theo.",
                                    correct: false,
                                    explanation: "Sai, thương số $\\frac{U}{I} = R$ luôn là hằng số đặc trưng cho dây dẫn."
                                }
                            ]
                        },
                        {
                            id: "drill_1_2_3",
                            type: "short_answer",
                            level: "Vận dụng",
                            question: "Đặt vào hai đầu một bóng đèn sợi đốt có điện trở $R = 440\\,\\Omega$ một hiệu điện thế $U = 220\\,\\text{V}$. Hãy tính cường độ dòng điện $I$ chạy qua sợi tóc bóng đèn (đơn vị Ampe).",
                            correct_value: 0.5,
                            tolerance: 0.05,
                            unit_symbol: "A",
                            unit: "Ampe (A)",
                            explanation: "Theo định luật Ôm: $I = \\frac{U}{R} = \\frac{220}{440} = 0,5\\,\\text{A}$."
                        }
                    ],
                    advanced_challenge: {
                        id: "adv_1_2",
                        title: "🔥 Bẫy Đại Lượng: Bản chất Điện trở",
                        question: "Có bạn học sinh nói: 'Từ công thức $R = \\frac{U}{I}$, ta thấy điện trở $R$ tỉ lệ thuận với hiệu điện thế $U$ và tỉ lệ nghịch với dòng điện $I$'. Ý kiến này đúng hay sai?",
                        options: [
                            "Sai. Điện trở $R$ là đại lượng đặc trưng cho vật dẫn, không đổi khi $U$ hoặc $I$ thay đổi.",
                            "Đúng. Công thức đã ghi rõ $R$ tỉ lệ thuận với $U$.",
                            "Chỉ đúng khi dòng điện một chiều.",
                            "Chỉ đúng ở nhiệt độ phòng."
                        ],
                        correct: 0,
                        bonus_xp: 70,
                        explanation: "Điện trở $R$ phụ thuộc vào bản chất vật liệu, chiều dài và tiết diện của dây dẫn, KHÔNG phụ thuộc vào $U$ hay $I$ đặt vào nó."
                    }
                },
                {
                    unit_id: "p9_u1_3",
                    title: "Đơn vị 3: Điện trở suất & Yếu tố ảnh hưởng đến R",
                    short_desc: "Dây dài hay ngắn, to hay nhỏ, làm bằng đồng hay nhôm thì điện trở khác nhau ra sao?",
                    duration: "5 phút",
                    xp_reward: 130,
                    hook: {
                        scenario: "Đường dây tải điện cao thế Bắc - Nam dài hàng nghìn kilômét người ta dùng nhôm lõi thép, còn dây trong vi mạch điện thoại siêu nhỏ lại mạ vàng. Vật liệu và kích thước quyết định điện trở như thế nào?",
                        curiosity_prompt: "Cùng làm thí nghiệm kéo giãn chiều dài và làm dày tiết diện dây dẫn!"
                    },
                    challenge: {
                        type: "slider_lab",
                        title: "Thí nghiệm ảo: 3 Yếu Tố Quyết Định Điện Trở",
                        instruction: "Kéo các thông số Chiều dài $l$, Tiết diện $S$ và xem điện trở $R$ thay đổi thế nào theo công thức $R = \\rho \\frac{l}{S}$!",
                        config: {
                            fixed_r: 10,
                            min_u: 0,
                            max_u: 12,
                            step: 2
                        }
                    },
                    memory_card: {
                        title: "Công Thức Điện Trở Của Dây Dẫn",
                        rule: "Điện trở của dây dẫn tỉ lệ thuận với chiều dài $l$, tỉ lệ nghịch với tiết diện $S$ và phụ thuộc vào vật liệu làm dây (điện trở suất $\\rho$).",
                        formula: "R = \\rho \\frac{l}{S}",
                        key_takeaway: "• $l$ (chiều dài): đơn vị mét (m).\n• $S$ (tiết diện): đơn vị mét vuông ($\\text{m}^2$) - Chú ý đổi $1\\text{mm}^2 = 10^{-6}\\text{m}^2$!\n• $\\rho$ (điện trở suất): đơn vị Ôm-mét ($\\Omega\\cdot\\text{m}$).",
                        mnemonic: "💡 Mẹo nhớ: Dây càng DÀI điện trở càng TO, dây càng DÀY điện trở càng NHỎ!"
                    },
                    practice_drill: [
                        {
                            id: "drill_1_3_1",
                            type: "mcq",
                            level: "Nhận biết",
                            question: "Công thức tính điện trở của dây dẫn hình trụ đồng chất, tiết diện đều là",
                            options: [
                                "$R = \\rho \\frac{l}{S}$",
                                "$R = \\rho \\frac{S}{l}$",
                                "$R = \\frac{l}{\\rho S}$",
                                "$R = \\rho \\cdot l \\cdot S$"
                            ],
                            correct: 0,
                            explanation: "Công thức chính xác: $R = \\rho \\frac{l}{S}$."
                        },
                        {
                            id: "drill_1_3_2",
                            type: "multi_tf",
                            level: "Thông hiểu",
                            context: "Xét hai dây dẫn kim loại hình trụ có chiều dài $l_1, l_2$, tiết diện $S_1, S_2$ và làm bằng các vật liệu có điện trở suất $\\rho_1, \\rho_2$.",
                            items: [
                                {
                                    text: "Nếu cắt một sợi dây dẫn đồng chất làm hai nửa bằng nhau thì điện trở của mỗi nửa giảm đi 2 lần.",
                                    correct: true,
                                    explanation: "Đúng, vì $R$ tỉ lệ thuận với chiều dài $l$, khi $l$ giảm 2 lần thì $R$ giảm 2 lần."
                                },
                                {
                                    text: "Hai dây dẫn có cùng chiều dài và tiết diện, dây nào làm bằng vật liệu có điện trở suất lớn hơn thì dẫn điện tốt hơn.",
                                    correct: false,
                                    explanation: "Sai, điện trở suất $\\rho$ càng lớn thì điện trở $R$ càng lớn, tức là cản trở dòng điện nhiều hơn và dẫn điện kém hơn."
                                },
                                {
                                    text: "Nếu tăng đường kính tiết diện của dây dẫn lên 2 lần thì điện trở của dây dẫn sẽ giảm đi 4 lần.",
                                    correct: true,
                                    explanation: "Đúng, vì tiết diện $S = \\pi \\frac{d^2}{4}$, khi đường kính $d$ tăng 2 lần thì $S$ tăng 4 lần $\\implies R$ giảm 4 lần."
                                },
                                {
                                    text: "Điện trở suất $\\rho$ của kim loại có đơn vị trong hệ SI là $\\Omega / \\text{m}$.",
                                    correct: false,
                                    explanation: "Sai, đơn vị chuẩn của điện trở suất là Ôm-mét ($\\Omega\\cdot\\text{m}$)."
                                }
                            ]
                        },
                        {
                            id: "drill_1_3_3",
                            type: "short_answer",
                            level: "Vận dụng",
                            question: "Một sợi dây đồng dài $l = 200\\,\\text{m}$, tiết diện $S = 1\\,\\text{mm}^2 = 10^{-6}\\,\\text{m}^2$. Cho biết điện trở suất của đồng là $\\rho = 1,7 \\times 10^{-8}\\,\\Omega\\cdot\\text{m}$. Hãy tính điện trở của sợi dây đồng này (đơn vị Ôm).",
                            correct_value: 3.4,
                            tolerance: 0.05,
                            unit_symbol: "\\Omega",
                            unit: "Ôm (\\Omega)",
                            explanation: "Áp dụng công thức: $R = \\rho \\frac{l}{S} = 1,7 \\times 10^{-8} \\times \\frac{200}{10^{-6}} = 3,4\\,\\Omega$."
                        }
                    ],
                    advanced_challenge: {
                        id: "adv_1_3",
                        title: "🔥 Bẫy Kéo Giãn Dây Dẫn",
                        question: "Kéo một sợi dây kim loại đồng chất để chiều dài của nó tăng gấp đôi (giả sử thể tích không đổi). Điện trở của dây sau khi kéo sẽ",
                        options: [
                            "Tăng gấp 4 lần.",
                            "Tăng gấp 2 lần.",
                            "Không đổi vì khối lượng không đổi.",
                            "Giảm đi 2 lần."
                        ],
                        correct: 0,
                        bonus_xp: 80,
                        explanation: "Khi chiều dài tăng gấp 2 ($l' = 2l$) mà thể tích $V = l \\cdot S$ không đổi thì tiết diện phải giảm 2 lần ($S' = \\frac{S}{2}$). Do đó $R' = \\rho \\frac{l'}{S'} = \\rho \\frac{2l}{S/2} = 4 R$ (Tăng gấp 4 lần!)."
                    }
                }
            ],
            summary: {
                title: "Tổng Kết Bài 1: Sự Phụ Thuộc Của I Vào U & Định Luật Ôm",
                mindmap_nodes: [
                    { title: "Mối quan hệ I - U", content: "$I$ tỉ lệ thuận với $U$; đồ thị $I(U)$ là đường thẳng qua gốc tọa độ." },
                    { title: "Định luật Ôm", content: "$I = \\frac{U}{R}$; R là điện trở đặc trưng cho mức độ cản trở dòng điện." },
                    { title: "Công thức Dây dẫn", content: "$R = \\rho \\frac{l}{S}$; phụ thuộc chiều dài, tiết diện và vật liệu." }
                ],
                cheat_sheet: [
                    { name: "Định luật Ôm", formula: "I = \\frac{U}{R}", unit: "A = V / \\Omega" },
                    { name: "Điện trở dây dẫn", formula: "R = \\rho \\frac{l}{S}", unit: "\\Omega = (\\Omega\\cdot\\text{m}) \\cdot \\text{m} / \\text{m}^2" },
                    { name: "Đổi đơn vị chuẩn", formula: "1\\text{mm}^2 = 10^{-6}\\text{m}^2", unit: "1\\text{k}\\Omega = 1000\\,\\Omega" }
                ],
                boss_challenge: {
                    boss_name: "Thần Sấm Ohm ⚡ (Boss Chặng 1)",
                    boss_hp: 100,
                    boss_avatar: "⚡",
                    dialogue: "Ngươi muốn làm chủ sức mạnh của dòng điện ư? Hãy vượt qua 5 câu hỏi thách thức của ta!",
                    questions: [
                        {
                            question: "Đặt một hiệu điện thế $U$ vào hai đầu điện trở $R$ thì cường độ dòng điện là $I$. Nếu tăng $U$ lên 2 lần và giảm $R$ đi 2 lần thì cường độ dòng điện sẽ",
                            options: ["Tăng 4 lần", "Giảm 4 lần", "Không đổi", "Tăng 2 lần"],
                            correct: 0,
                            damage: 20
                        },
                        {
                            question: "Một dây nhôm dài $100\\text{m}$, tiết diện $2\\text{mm}^2$. Biết điện trở suất của nhôm là $2,8 \\times 10^{-8}\\,\\Omega\\cdot\\text{m}$. Điện trở của dây là",
                            options: ["1,4 Ω", "14 Ω", "0,14 Ω", "2,8 Ω"],
                            correct: 0,
                            damage: 20
                        },
                        {
                            question: "Đơn vị của điện trở suất trong hệ SI là",
                            options: ["Ω·m", "Ω/m", "Ω·m²", "V·m"],
                            correct: 0,
                            damage: 20
                        },
                        {
                            question: "Dòng điện chạy qua dây tóc bóng đèn là $0,25\\text{A}$ khi nối vào mạng điện $220\\text{V}$. Điện trở của dây tóc khi đó là",
                            options: ["880 Ω", "55 Ω", "220 Ω", "440 Ω"],
                            correct: 0,
                            damage: 20
                        },
                        {
                            question: "Ý nghĩa của số ghi $100\\,\\Omega - 2\\text{A}$ trên một biến trở là",
                            options: [
                                "Điện trở lớn nhất là 100 Ω và cường độ dòng điện lớn nhất được phép qua biến trở là 2 A.",
                                "Điện trở nhỏ nhất là 100 Ω và cường độ dòng điện nhỏ nhất là 2 A.",
                                "Biến trở luôn có điện trở 100 Ω khi dòng điện là 2 A.",
                                "Hiệu điện thế cực đại đặt vào biến trở là 100 V."
                            ],
                            correct: 0,
                            damage: 20
                        }
                    ]
                }
            }
        },

        // =====================================================================
        // BÀI 2: ĐOẠN MẠCH NỐI TIẾP & ĐOẠN MẠCH SONG SONG
        // =====================================================================
        {
            lesson_id: "p9_l02_doan_mach_nt_ss",
            title: "Bài 2: Đoạn Mạch Nối Tiếp & Đoạn Mạch Song Song",
            chapter: "Chương 1: Điện Học",
            grade: 9,
            icon: "🔌",
            badge: "Kỹ Sư Ghép Mạch",
            total_xp: 500,
            description: "Thành thạo cách tính điện trở tương đương, hiệu điện thế và cường độ dòng điện trong các cấu hình mạch nối tiếp và song song.",
            micro_units: [
                {
                    unit_id: "p9_u2_1",
                    title: "Đơn vị 1: Đoạn mạch nối tiếp",
                    short_desc: "Dòng điện chung một lối đi: I = I1 = I2 và Rtd = R1 + R2",
                    duration: "4 phút",
                    xp_reward: 100,
                    hook: {
                        scenario: "Đèn nháy trang trí cây thông Noel gồm 50 bóng nhỏ mắc nối tiếp. Khi chỉ 1 bóng bị cháy đứt tóc, vì sao toàn bộ dàn đèn đều tắt ngấm?",
                        curiosity_prompt: "Trong mạch nối tiếp, dòng điện chỉ có một con đường duy nhất để lưu thông!"
                    },
                    challenge: {
                        type: "circuit_drag",
                        title: "Thực hành ảo: Lắp ráp mạch nối tiếp",
                        instruction: "Kéo hoặc chạm để lắp Nguồn Pin, Khóa K và hai Điện trở R₁, R₂ vào bàn mạch điện tử!",
                        required_components: ["bat", "switch", "res1", "res2"],
                        explanation: "Khi mạch kín hoàn chỉnh, dòng điện lưu thông qua từng phần tử một cách liên tục."
                    },
                    memory_card: {
                        title: "Quy Tắc Mạch Nối Tiếp",
                        rule: "• Cường độ dòng điện như nhau tại mọi điểm: $I = I_1 = I_2$.\n• Hiệu điện thế bằng tổng các hiệu điện thế thành phần: $U = U_1 + U_2$.\n• Điện trở tương đương: $R_{td} = R_1 + R_2$.",
                        formula: "R_{td} = R_1 + R_2 + \\dots + R_n",
                        key_takeaway: "Hiệu điện thế giữa hai đầu mỗi điện trở tỉ lệ thuận với điện trở đó: $\\frac{U_1}{U_2} = \\frac{R_1}{R_2}$.",
                        mnemonic: "💡 Mẹo nhớ: NỐI TIẾP = I BẰNG NHAU, U VÀ R CỘNG LẠI!"
                    },
                    practice_drill: [
                        {
                            id: "drill_2_1_1",
                            type: "mcq",
                            level: "Nhận biết",
                            question: "Trong đoạn mạch gồm hai điện trở $R_1$ và $R_2$ mắc nối tiếp, công thức tính điện trở tương đương $R_{td}$ là",
                            options: [
                                "$R_{td} = R_1 + R_2$",
                                "$\\frac{1}{R_{td}} = \\frac{1}{R_1} + \\frac{1}{R_2}$",
                                "$R_{td} = \\frac{R_1 R_2}{R_1 + R_2}$",
                                "$R_{td} = R_1 - R_2$"
                            ],
                            correct: 0,
                            explanation: "Mạch nối tiếp: $R_{td} = R_1 + R_2$."
                        },
                        {
                            id: "drill_2_1_2",
                            type: "multi_tf",
                            level: "Thông hiểu",
                            context: "Cho đoạn mạch gồm hai điện trở $R_1 = 10\\,\\Omega$ và $R_2 = 20\\,\\Omega$ mắc nối tiếp vào hiệu điện thế không đổi $U = 12\\,\\text{V}$.",
                            items: [
                                {
                                    text: "Cường độ dòng điện qua $R_1$ bằng cường độ dòng điện qua $R_2$: $I_1 = I_2$.",
                                    correct: true,
                                    explanation: "Đúng, tính chất cơ bản của mạch nối tiếp là cường độ dòng điện như nhau tại mọi điểm."
                                },
                                {
                                    text: "Điện trở tương đương của đoạn mạch nối tiếp này là $30\\,\\Omega$.",
                                    correct: true,
                                    explanation: "Đúng, $R_{td} = R_1 + R_2 = 10 + 20 = 30\\,\\Omega$."
                                },
                                {
                                    text: "Hiệu điện thế giữa hai đầu điện trở $R_2$ là $4\\,\\text{V}$.",
                                    correct: false,
                                    explanation: "Sai, dòng điện $I = 12 / 30 = 0,4\\text{A} \\implies U_2 = 0,4 \\times 20 = 8\\,\\text{V}$."
                                },
                                {
                                    text: "Điện trở tương đương của đoạn mạch nối tiếp luôn lớn hơn từng điện trở thành phần.",
                                    correct: true,
                                    explanation: "Đúng, vì $R_{td} = R_1 + R_2 > R_1$ và $R_{td} > R_2$."
                                }
                            ]
                        },
                        {
                            id: "drill_2_1_3",
                            type: "short_answer",
                            level: "Vận dụng",
                            question: "Mắc nối tiếp hai điện trở $R_1 = 15\\,\\Omega$ và $R_2 = 25\\,\\Omega$ vào nguồn điện có hiệu điện thế $U = 12\\,\\text{V}$. Hãy tính cường độ dòng điện $I$ chạy trong mạch chính (đơn vị Ampe).",
                            correct_value: 0.3,
                            tolerance: 0.05,
                            unit_symbol: "A",
                            unit: "Ampe (A)",
                            explanation: "Điện trở tương đương: $R_{td} = 15 + 25 = 40\\,\\Omega$. Dòng điện mạch chính: $I = \\frac{U}{R_{td}} = \\frac{12}{40} = 0,3\\,\\text{A}$."
                        }
                    ],
                    advanced_challenge: {
                        id: "adv_2_1",
                        title: "🔥 Phân Áp Điện Trở Nối Tiếp",
                        question: "Có 3 điện trở giống nhau mỗi chiếc có giá trị $R$. Khi mắc nối tiếp cả 3 chiếc vào nguồn $9\\text{V}$, hiệu điện thế giữa hai đầu mỗi chiếc là",
                        options: ["3 V", "9 V", "1 V", "6 V"],
                        correct: 0,
                        bonus_xp: 50,
                        explanation: "Vì 3 điện trở giống nhau mắc nối tiếp nên hiệu điện thế chia đều: $U_1 = U_2 = U_3 = \\frac{9}{3} = 3\\text{V}$."
                    }
                },
                {
                    unit_id: "p9_u2_2",
                    title: "Đơn vị 2: Đoạn mạch song song",
                    short_desc: "Dòng điện rẽ nhánh: U = U1 = U2 và 1/Rtd = 1/R1 + 1/R2",
                    duration: "5 phút",
                    xp_reward: 120,
                    hook: {
                        scenario: "Tại sao trong gia đình, khi bạn tắt đèn phòng ngủ thì quạt máy ở phòng khách vẫn quay bình thường mà không bị tắt theo?",
                        curiosity_prompt: "Mỗi thiết bị trong nhà nằm trên một nhánh rẽ độc lập của mạch song song!"
                    },
                    challenge: {
                        type: "slider_lab",
                        title: "Phòng thí nghiệm: Mạch Hai Nhánh Song Song",
                        instruction: "Thay đổi $R_1$ và $R_2$ để nhận thấy điện trở tương đương $R_{td}$ luôn NHỎ HƠN cả $R_1$ và $R_2$!",
                        config: {
                            fixed_r: 10,
                            min_u: 0,
                            max_u: 12,
                            step: 2
                        }
                    },
                    memory_card: {
                        title: "Quy Tắc Mạch Song Song",
                        rule: "• Hiệu điện thế như nhau giữa hai đầu các nhánh: $U = U_1 = U_2$.\n• Cường độ dòng điện mạch chính bằng tổng các dòng nhánh: $I = I_1 + I_2$.\n• Nghịch đảo điện trở tương đương bằng tổng nghịch đảo các điện trở thành phần.",
                        formula: "\\frac{1}{R_{td}} = \\frac{1}{R_1} + \\frac{1}{R_2} \\implies R_{td} = \\frac{R_1 R_2}{R_1 + R_2}",
                        key_takeaway: "Điện trở tương đương của mạch song song luôn nhỏ hơn điện trở của từng nhánh thành phần!",
                        mnemonic: "💡 Mẹo nhớ: SONG SONG = U BẰNG NHAU, I CỘNG LẠI, R BÉ HƠN TỪNG NHÁNH!"
                    },
                    practice_drill: [
                        {
                            id: "drill_2_2_1",
                            type: "mcq",
                            level: "Nhận biết",
                            question: "Đối với đoạn mạch gồm hai điện trở $R_1$ và $R_2$ mắc song song, công thức tính nhanh điện trở tương đương $R_{td}$ là",
                            options: [
                                "$R_{td} = \\frac{R_1 R_2}{R_1 + R_2}$",
                                "$R_{td} = R_1 + R_2$",
                                "$R_{td} = \\frac{R_1 + R_2}{R_1 R_2}$",
                                "$R_{td} = \\frac{R_1 - R_2}{2}$"
                            ],
                            correct: 0,
                            explanation: "Từ $\\frac{1}{R_{td}} = \\frac{1}{R_1} + \\frac{1}{R_2} = \\frac{R_1 + R_2}{R_1 R_2} \\implies R_{td} = \\frac{R_1 R_2}{R_1 + R_2}$."
                        },
                        {
                            id: "drill_2_2_2",
                            type: "multi_tf",
                            level: "Thông hiểu",
                            context: "Mắc song song hai bóng đèn $Đ_1$ và $Đ_2$ vào nguồn điện gia đình có hiệu điện thế không đổi $U = 220\\,\\text{V}$.",
                            items: [
                                {
                                    text: "Hiệu điện thế đặt vào hai đầu mỗi bóng đèn đều bằng $220\\,\\text{V}$.",
                                    correct: true,
                                    explanation: "Đúng, trong mạch song song thì $U = U_1 = U_2 = 220\\text{V}$."
                                },
                                {
                                    text: "Nếu bóng đèn $Đ_1$ bị đứt dây tóc thì bóng đèn $Đ_2$ cũng bị tắt theo.",
                                    correct: false,
                                    explanation: "Sai, các nhánh trong mạch song song hoạt động độc lập, $Đ_2$ vẫn sáng bình thường."
                                },
                                {
                                    text: "Cường độ dòng điện qua mỗi bóng đèn tỉ lệ nghịch với điện trở của bóng đèn đó.",
                                    correct: true,
                                    explanation: "Đúng, vì $I_1 = \\frac{U}{R_1}$ và $I_2 = \\frac{U}{R_2}$, $U$ bằng nhau nên $I$ tỉ lệ nghịch với $R$."
                                },
                                {
                                    text: "Điện trở tương đương của hai bóng đèn lớn hơn điện trở của từng bóng đèn.",
                                    correct: false,
                                    explanation: "Sai, trong mạch song song điện trở tương đương luôn nhỏ hơn điện trở của từng nhánh."
                                }
                            ]
                        },
                        {
                            id: "drill_2_2_3",
                            type: "short_answer",
                            level: "Vận dụng",
                            question: "Mắc song song hai điện trở $R_1 = 20\\,\\Omega$ và $R_2 = 30\\,\\Omega$ vào hai điểm có hiệu điện thế $U = 12\\,\\text{V}$. Tính điện trở tương đương $R_{td}$ của đoạn mạch (đơn vị Ôm).",
                            correct_value: 12,
                            tolerance: 0.05,
                            unit_symbol: "\\Omega",
                            unit: "Ôm (\\Omega)",
                            explanation: "$R_{td} = \\frac{R_1 R_2}{R_1 + R_2} = \\frac{20 \\times 30}{20 + 30} = \\frac{600}{50} = 12\\,\\Omega$."
                        }
                    ],
                    advanced_challenge: {
                        id: "adv_2_2",
                        title: "🔥 Bẫy Mắc Thêm Nhánh Song Song",
                        question: "Một đoạn mạch đang có một bóng đèn sáng bình thường. Nếu mắc thêm một bóng đèn giống hệt song song với đèn thứ nhất thì cường độ dòng điện trong mạch chính sẽ",
                        options: [
                            "Tăng gấp đôi.",
                            "Giảm đi một nửa.",
                            "Không đổi.",
                            "Tăng gấp 4 lần."
                        ],
                        correct: 0,
                        bonus_xp: 60,
                        explanation: "Khi mắc thêm nhánh song song giống hệt, điện trở tương đương giảm đi 2 lần ($R' = R/2$), do đó dòng điện mạch chính $I' = \\frac{U}{R'} = 2I$ (tăng gấp đôi!)."
                    }
                }
            ],
            summary: {
                title: "Tổng Kết Bài 2: Đoạn Mạch Nối Tiếp & Song Song",
                mindmap_nodes: [
                    { title: "Nối tiếp", content: "$I$ chung, $U = U_1 + U_2$, $R_{td} = R_1 + R_2$ ($R_{td}$ lớn hơn các điện trở thành phần)." },
                    { title: "Song song", content: "$U$ chung, $I = I_1 + I_2$, $\\frac{1}{R_{td}} = \\frac{1}{R_1} + \\frac{1}{R_2}$ ($R_{td}$ nhỏ hơn các điện trở thành phần)." }
                ],
                cheat_sheet: [
                    { name: "2 điện trở song song", formula: "R_{td} = \\frac{R_1 R_2}{R_1 + R_2}", unit: "\\Omega" },
                    { name: "n điện trở giống nhau song song", formula: "R_{td} = \\frac{R}{n}", unit: "\\Omega" }
                ],
                boss_challenge: {
                    boss_name: "Robot Mạch Song Song 🤖 (Boss Chặng 2)",
                    boss_hp: 100,
                    boss_avatar: "🤖",
                    dialogue: "Ngươi có dám tính nhanh dòng điện qua mạch hỗn hợp không?",
                    questions: [
                        {
                            question: "Hai điện trở $R_1 = 6\\,\\Omega$ và $R_2 = 12\\,\\Omega$ mắc song song thì điện trở tương đương là",
                            options: ["4 Ω", "18 Ω", "8 Ω", "9 Ω"],
                            correct: 0,
                            damage: 50
                        },
                        {
                            question: "Mắc song song hai bóng đèn có cùng hiệu điện thế định mức vào đúng hiệu điện thế đó thì",
                            options: ["Hai đèn đều sáng bình thường", "Đèn nào có công suất nhỏ hơn sẽ cháy", "Cả hai đèn đều tối hơn bình thường", "Chỉ một đèn sáng"],
                            correct: 0,
                            damage: 50
                        }
                    ]
                }
            }
        },

        // =====================================================================
        // BÀI 3: BIẾN TRỞ & ĐIỆN TRỞ DÙNG TRONG KỸ THUẬT
        // =====================================================================
        {
            lesson_id: "p9_l03_bien_tro",
            title: "Bài 3: Biến Trở & Điện Trở Dùng Trong Kỹ Thuật",
            chapter: "Chương 1: Điện Học",
            grade: 9,
            icon: "🎛️",
            badge: "Chuyên Gia Điều Khiển Tải",
            total_xp: 480,
            description: "Tìm hiểu cấu tạo và nguyên lý hoạt động của biến trở con chạy, chiết áp xoay và ứng dụng trong dimmer đèn, volume loa.",
            micro_units: [
                {
                    unit_id: "p9_u3_1",
                    title: "Đơn vị 1: Cấu tạo & Nguyên lí biến trở",
                    short_desc: "Dịch chuyển con chạy để thay đổi chiều dài dây dẫn và điện trở",
                    duration: "4 phút",
                    xp_reward: 100,
                    hook: {
                        scenario: "Núm xoay điều chỉnh độ sáng đèn học (dimmer) hay núm xoay âm lượng trên loa hoạt động dựa vào cơ chế linh kiện nào bên trong?",
                        curiosity_prompt: "Một sợi dây điện trở dài được cuộn tròn và tiếp xúc qua một con chạy di động!"
                    },
                    challenge: {
                        type: "slider_lab",
                        title: "Mô phỏng: Biến Trở Con Chạy",
                        instruction: "Kéo thanh trượt con chạy để thay đổi chiều dài $l$ của phần dây có dòng điện chạy qua và xem kim ampe kế!",
                        config: {
                            fixed_r: 10,
                            min_u: 0,
                            max_u: 12,
                            step: 2
                        }
                    },
                    memory_card: {
                        title: "Nguyên Lý Biến Trở",
                        rule: "Biến trở là điện trở có thể **thay đổi trị số** được. Hoạt động dựa trên việc thay đổi **chiều dài** của dây dẫn làm biến trở.",
                        formula: "R = \\rho \\frac{l}{S} \\implies R \\sim l",
                        key_takeaway: "Khi dịch chuyển con chạy, chiều dài phần dây có dòng điện chạy qua thay đổi, dẫn tới điện trở thay đổi và điều chỉnh được cường độ dòng điện trong mạch.",
                        mnemonic: "💡 Mẹo nhớ: Con chạy dịch làm DÀI DÂY ➔ R TĂNG ➔ DÒNG I GIẢM ➔ ĐÈN TỐI!"
                    },
                    practice_drill: [
                        {
                            id: "drill_3_1_1",
                            type: "mcq",
                            level: "Nhận biết",
                            question: "Biến trở hoạt động dựa trên việc thay đổi yếu tố nào của dây dẫn?",
                            options: [
                                "Chiều dài của dây dẫn tham gia vào mạch.",
                                "Nhiệt độ của dây dẫn khi có dòng điện.",
                                "Tiết diện ngang của sợi dây dẫn.",
                                "Vật liệu làm lõi của dây dẫn."
                            ],
                            correct: 0,
                            explanation: "Biến trở con chạy hoạt động bằng cách dịch chuyển con chạy làm thay đổi chiều dài phần dây dẫn có dòng điện chạy qua."
                        },
                        {
                            id: "drill_3_1_2",
                            type: "multi_tf",
                            level: "Thông hiểu",
                            context: "Một biến trở con chạy có ghi $50\\,\\Omega - 2,5\\,\\text{A}$ được mắc nối tiếp với một bóng đèn vào nguồn điện $12\\,\\text{V}$.",
                            items: [
                                {
                                    text: "Số ghi $50\\,\\Omega$ là điện trở lớn nhất của biến trở này.",
                                    correct: true,
                                    explanation: "Đúng, giá trị Ôm ghi trên biến trở là điện trở toàn phần cực đại."
                                },
                                {
                                    text: "Số ghi $2,5\\,\\text{A}$ là cường độ dòng điện định mức tối đa được phép qua biến trở mà không làm cháy dây.",
                                    correct: true,
                                    explanation: "Đúng, đây là giới hạn an toàn dòng điện của biến trở."
                                },
                                {
                                    text: "Khi dịch chuyển con chạy về phía làm tăng chiều dài dây dẫn thì bóng đèn sẽ sáng mạnh hơn.",
                                    correct: false,
                                    explanation: "Sai, chiều dài tăng $\\implies$ điện trở tăng $\\implies$ dòng điện giảm $\\implies$ đèn tối đi."
                                },
                                {
                                    text: "Biến trở có thể dùng để điều chỉnh cường độ dòng điện trong mạch một cách êm ái, liên tục.",
                                    correct: true,
                                    explanation: "Đúng, đó là công dụng chính của biến trở trong các thiết bị thực tế."
                                }
                            ]
                        },
                        {
                            id: "drill_3_1_3",
                            type: "short_answer",
                            level: "Vận dụng",
                            question: "Một biến trở con chạy được làm bằng dây constantan có điện trở suất $\\rho = 0,5 \\times 10^{-6}\\,\\Omega\\cdot\\text{m}$, tiết diện $S = 0,5\\,\\text{mm}^2 = 0,5 \\times 10^{-6}\\,\\text{m}^2$. Điện trở toàn phần của biến trở là $40\\,\\Omega$. Tính chiều dài toàn bộ sợi dây làm biến trở (đơn vị mét).",
                            correct_value: 40,
                            tolerance: 0.05,
                            unit_symbol: "m",
                            unit: "mét (m)",
                            explanation: "$R = \\rho \\frac{l}{S} \\implies l = \\frac{R \\cdot S}{\\rho} = \\frac{40 \\times 0,5 \\times 10^{-6}}{0,5 \\times 10^{-6}} = 40\\,\\text{m}$."
                        }
                    ],
                    advanced_challenge: {
                        id: "adv_3_1",
                        title: "🔥 Bẫy Đấu Dây Biến Trở",
                        question: "Nếu đấu hai đầu dây dẫn vào hai chốt cố định ở hai đầu cuộn dây biến trở (không dùng chốt con chạy), biến trở sẽ hoạt động như thế nào?",
                        options: [
                            "Như một điện trở cố định có giá trị cực đại, dịch con chạy không có tác dụng.",
                            "Mạch điện bị đoản mạch (chập điện).",
                            "Biến trở bị nổ ngay lập tức.",
                            "Điện trở luôn bằng 0."
                        ],
                        correct: 0,
                        bonus_xp: 70,
                        explanation: "Khi nối vào 2 chốt cố định, dòng điện chạy qua toàn bộ cuộn dây nên điện trở luôn bằng giá trị cực đại và con chạy mất tác dụng điều chỉnh."
                    }
                }
            ],
            summary: {
                title: "Tổng Kết Bài 3: Biến Trở & Điện Trở Kỹ Thuật",
                mindmap_nodes: [
                    { title: "Cấu tạo biến trở", content: "Gồm cuộn dây điện trở hợp kim có điện trở suất lớn và một con chạy (hoặc tay quay) tiếp xúc trượt." },
                    { title: "Nguyên tắc hoạt động", content: "Dịch chuyển con chạy làm thay đổi chiều dài $l$ của phần dây có dòng điện, dẫn tới thay đổi điện trở $R$." },
                    { title: "Số ghi kỹ thuật", content: "Ví dụ $100\\,\\Omega - 2\\text{A}$: Điện trở cực đại 100Ω và dòng điện cho phép tối đa 2A." }
                ],
                cheat_sheet: [
                    { name: "Công thức biến trở", formula: "R = \\rho \\frac{l}{S}", unit: "\\Omega" },
                    { name: "Hiệu điện thế cực đại", formula: "U_{max} = I_{max} \\cdot R_{max}", unit: "V" }
                ],
                boss_challenge: {
                    boss_name: "Thần Cơ Biến Trở 🎛️ (Boss Chặng 3)",
                    boss_hp: 100,
                    boss_avatar: "🎛️",
                    dialogue: "Ngươi có hiểu rõ cách điều chỉnh núm vặn biến trở để khống chế dòng điện không?",
                    questions: [
                        {
                            question: "Một biến trở con chạy có ghi $20\\,\\Omega - 1,5\\,\\text{A}$. Hiệu điện thế lớn nhất được phép đặt vào hai đầu biến trở là",
                            options: ["30 V", "13,3 V", "20 V", "15 V"],
                            correct: 0,
                            damage: 50
                        },
                        {
                            question: "Khi điều chỉnh con chạy của biến trở trong mạch kín, đại lượng nào sau đây KHÔNG đổi?",
                            options: [
                                "Hiệu điện thế của nguồn điện cấp cho mạch.",
                                "Điện trở của phần biến trở tham gia vào mạch.",
                                "Cường độ dòng điện chạy qua mạch chính.",
                                "Độ sáng của bóng đèn mắc nối tiếp với biến trở."
                            ],
                            correct: 0,
                            damage: 50
                        }
                    ]
                }
            }
        },

        // =====================================================================
        // BÀI 4: CÔNG SUẤT ĐIỆN & ĐỊNH LUẬT JOULE - LENZ
        // =====================================================================
        {
            lesson_id: "p9_l04_cong_suat_dien",
            title: "Bài 4: Công Suất Điện & Định Luật Jun - Len-xơ",
            chapter: "Chương 1: Điện Học",
            grade: 9,
            icon: "🔥",
            badge: "Bậc Thầy Năng Lượng Điện",
            total_xp: 520,
            description: "Hiểu rõ công suất điện định mức của thiết bị, tính điện năng tiêu thụ và nhiệt lượng tỏa ra theo định luật Joule - Lenz.",
            micro_units: [
                {
                    unit_id: "p9_u4_1",
                    title: "Đơn vị 1: Công suất điện & Điện năng tiêu thụ",
                    short_desc: "P = U.I = I²R = U²/R và A = P.t",
                    duration: "5 phút",
                    xp_reward: 120,
                    hook: {
                        scenario: "Bình nóng lạnh 2500W tiêu thụ điện nhanh hơn bóng đèn LED 15W gấp hơn 160 lần. Con số Oát (W) trên vỏ thiết bị mang ý nghĩa gì?",
                        curiosity_prompt: "Công suất điện biểu thị tốc độ tiêu thụ điện năng của một dụng cụ điện!"
                    },
                    challenge: {
                        type: "slider_lab",
                        title: "Mô phỏng: Tính Công Suất Điện P = U.I",
                        instruction: "Tăng điện áp $U$ và quan sát công suất tiêu thụ của bóng đèn $P = U \\cdot I$ tăng theo hàm bậc hai!",
                        config: {
                            fixed_r: 10,
                            min_u: 0,
                            max_u: 12,
                            step: 2
                        }
                    },
                    memory_card: {
                        title: "Công Thức Công Suất & Điện Năng",
                        rule: "• Công suất điện: $\\mathcal{P} = U \\cdot I = I^2 R = \\frac{U^2}{R}$.\n• Điện năng tiêu thụ: $A = \\mathcal{P} \\cdot t = U \\cdot I \\cdot t$.\n• 1 số điện đếm trên công tơ = $1\\,\\text{kW}\\cdot\\text{h} = 3\\,600\\,000\\,\\text{J}$.",
                        formula: "\\mathcal{P} = U \\cdot I \\quad \\text{và} \\quad A = \\mathcal{P} \\cdot t",
                        key_takeaway: "Số vôn và số oát ghi trên mỗi dụng cụ điện cho biết hiệu điện thế định mức và công suất định mức khi dụng cụ hoạt động bình thường.",
                        mnemonic: "💡 Mẹo nhớ: P = U.I (Phải Uống Ít) | A = P.t (Ăn Phải Trả)!"
                    },
                    practice_drill: [
                        {
                            id: "drill_4_1_1",
                            type: "mcq",
                            level: "Nhận biết",
                            question: "Công thức nào sau đây KHÔNG PHẢI là công thức tính công suất điện của đoạn mạch có điện trở $R$?",
                            options: [
                                "$\\mathcal{P} = U^2 \\cdot R$",
                                "$\\mathcal{P} = U \\cdot I$",
                                "$\\mathcal{P} = I^2 \\cdot R$",
                                "$\\mathcal{P} = \\frac{U^2}{R}$"
                            ],
                            correct: 0,
                            explanation: "Công thức sai là $U^2 \\cdot R$. Công thức đúng là $\\frac{U^2}{R}$."
                        },
                        {
                            id: "drill_4_1_2",
                            type: "multi_tf",
                            level: "Thông hiểu",
                            context: "Trên một bóng đèn sợi đốt có ghi nhãn: $220\\,\\text{V} - 100\\,\\text{W}$.",
                            items: [
                                {
                                    text: "Bóng đèn hoạt động bình thường khi được mắc vào hiệu điện thế $220\\,\\text{V}$.",
                                    correct: true,
                                    explanation: "Đúng, $220\\text{V}$ là hiệu điện thế định mức."
                                },
                                {
                                    text: "Khi mắc đèn vào hiệu điện thế $110\\,\\text{V}$, công suất của đèn vẫn là $100\\,\\text{W}$.",
                                    correct: false,
                                    explanation: "Sai, khi $U$ giảm 2 lần thì $\\mathcal{P} = \\frac{U^2}{R}$ giảm 4 lần, chỉ còn khoảng $25\\text{W}$."
                                },
                                {
                                    text: "Điện trở của bóng đèn khi sáng bình thường là $484\\,\\Omega$.",
                                    correct: true,
                                    explanation: "Đúng, $R = \\frac{U_{dm}^2}{\\mathcal{P}_{dm}} = \\frac{220^2}{100} = 484\\,\\Omega$."
                                },
                                {
                                    text: "Khi đèn sáng bình thường trong 10 giờ, điện năng tiêu thụ là $1\\,\\text{kW}\\cdot\\text{h}$ (1 số điện).",
                                    correct: true,
                                    explanation: "Đúng, $A = \\mathcal{P} \\cdot t = 100\\,\\text{W} \\times 10\\,\\text{h} = 1000\\,\\text{Wh} = 1\\,\\text{kWh}$."
                                }
                            ]
                        },
                        {
                            id: "drill_4_1_3",
                            type: "short_answer",
                            level: "Vận dụng",
                            question: "Một bàn là điện có công suất $\\mathcal{P} = 1000\\,\\text{W}$ hoạt động ở hiệu điện thế $220\\,\\text{V}$. Hãy tính cường độ dòng điện chạy qua bàn là (kết quả làm tròn 2 chữ số thập phân, đơn vị Ampe).",
                            correct_value: 4.55,
                            tolerance: 0.05,
                            unit_symbol: "A",
                            unit: "Ampe (A)",
                            explanation: "$\\mathcal{P} = U \\cdot I \\implies I = \\frac{\\mathcal{P}}{U} = \\frac{1000}{220} \\approx 4,545\\,\\text{A} \\approx 4,55\\,\\text{A}$."
                        }
                    ],
                    advanced_challenge: {
                        id: "adv_4_1",
                        title: "🔥 Tính Tiền Điện Gia Đình",
                        question: "Một điều hòa 12000 BTU có công suất tiêu thụ điện 1000W hoạt động trung bình 8 giờ mỗi ngày. Nếu giá điện là 2500 đồng/kWh thì trong 30 ngày tiền điện phải trả là",
                        options: ["600 000 đồng", "240 000 đồng", "720 000 đồng", "300 000 đồng"],
                        correct: 0,
                        bonus_xp: 80,
                        explanation: "$A = 1\\text{kW} \\times 8\\text{h} \\times 30 = 240\\text{kWh}$. Tiền điện: $240 \\times 2500 = 600\\,000$ đồng."
                    }
                },
                {
                    unit_id: "p9_u4_2",
                    title: "Đơn vị 2: Định luật Joule - Lenz (Jun - Len-xơ)",
                    short_desc: "Nhiệt lượng tỏa ra trên dây dẫn tỉ lệ với bình phương cường độ dòng điện: Q = I²Rt",
                    duration: "5 phút",
                    xp_reward: 130,
                    hook: {
                        scenario: "Tại sao dây dẫn nối từ ổ cắm đến ấm siêu tốc hầu như không nóng, trong khi mâm nhiệt bên trong ấm lại nóng rực và đun sôi nước nhanh chóng dù cùng một dòng điện chạy qua?",
                        curiosity_prompt: "Nhiệt lượng tỏa ra phụ thuộc rất lớn vào điện trở của dây dẫn!"
                    },
                    challenge: {
                        type: "formula_assembler",
                        title: "Lắp Ráp Công Thức: Định Luật Jun - Len-xơ",
                        instruction: "Ghép các đại lượng để tạo thành công thức tính nhiệt lượng $Q = I^2 \\cdot R \\cdot t$!",
                        target_formula: "Q = I^2 * R * t",
                        blocks: ["Q", "=", "I^2", "*", "R", "*", "t", "U", "I"],
                        hint: "Nhiệt lượng $Q$ tỉ lệ thuận với bình phương dòng điện $I^2$, điện trở $R$ và thời gian $t$."
                    },
                    memory_card: {
                        title: "Định Luật Jun - Len-xơ (Joule - Lenz)",
                        rule: "Nhiệt lượng tỏa ra ở một dây dẫn khi có dòng điện chạy qua **tỉ lệ thuận với bình phương** cường độ dòng điện, với điện trở của dây dẫn và thời gian dòng điện chạy qua.",
                        formula: "Q = I^2 \\cdot R \\cdot t",
                        key_takeaway: "• Nếu $Q$ tính bằng Jun (J): $I$ tính bằng A, $R$ tính bằng $\\Omega$, $t$ tính bằng giây (s).\n• Nếu tính bằng Calo (cal): $Q = 0,24 \\cdot I^2 \\cdot R \\cdot t$ (với $1\\,\\text{J} \\approx 0,24\\,\\text{cal}$).",
                        mnemonic: "💡 Mẹo nhớ: Q = I BÌNH PHƯƠNG nhân R nhân t (Dòng điện tăng gấp đôi ➔ Nhiệt tỏa tăng gấp bốn)!"
                    },
                    practice_drill: [
                        {
                            id: "drill_4_2_1",
                            type: "mcq",
                            level: "Nhận biết",
                            question: "Biểu thức của định luật Jun - Len-xơ về nhiệt lượng tỏa ra trên dây dẫn là",
                            options: [
                                "$Q = I^2 \\cdot R \\cdot t$",
                                "$Q = I \\cdot R^2 \\cdot t$",
                                "$Q = I \\cdot R \\cdot t$",
                                "$Q = \\frac{I^2 R}{t}$"
                            ],
                            correct: 0,
                            explanation: "Biểu thức chuẩn xác: $Q = I^2 \\cdot R \\cdot t$."
                        },
                        {
                            id: "drill_4_2_2",
                            type: "multi_tf",
                            level: "Thông hiểu",
                            context: "Xét dòng điện chạy qua một dây dẫn có điện trở $R$ trong thời gian $t$, nhiệt lượng tỏa ra là $Q$.",
                            items: [
                                {
                                    text: "Khi cường độ dòng điện $I$ tăng gấp 3 lần thì nhiệt lượng tỏa ra trên dây dẫn tăng gấp 9 lần.",
                                    correct: true,
                                    explanation: "Đúng, vì $Q$ tỉ lệ thuận với bình phương cường độ dòng điện $I^2$ ($3^2 = 9$)."
                                },
                                {
                                    text: "Dây đồng nối nguồn tỏa nhiệt ít hơn mâm nhiệt ấm điện vì dây đồng có điện trở nhỏ hơn rất nhiều.",
                                    correct: true,
                                    explanation: "Đúng, vì dòng $I$ như nhau mà $R_{dong} \\ll R_{day\\_nhiet}$ nên $Q_{dong} \\ll Q_{day\\_nhiet}$."
                                },
                                {
                                    text: "Trong công thức $Q = I^2 R t$, nếu thời gian $t$ tính bằng phút thì nhiệt lượng $Q$ có đơn vị là Jun (J).",
                                    correct: false,
                                    explanation: "Sai, để $Q$ có đơn vị là Jun (J) thì thời gian $t$ bắt buộc phải đổi sang đơn vị GIÂY (s)."
                                },
                                {
                                    text: "Tác dụng nhiệt của dòng điện luôn luôn có hại và không có ứng dụng thực tiễn.",
                                    correct: false,
                                    explanation: "Sai, tác dụng nhiệt được ứng dụng trong bàn là, ấm đun nước, bếp điện, máy sấy tóc, cầu chì an toàn."
                                }
                            ]
                        },
                        {
                            id: "drill_4_2_3",
                            type: "short_answer",
                            level: "Vận dụng",
                            question: "Một bếp điện có điện trở $R = 80\\,\\Omega$ được mắc vào hiệu điện thế $U = 220\\,\\text{V}$. Tính nhiệt lượng $Q$ mà bếp tỏa ra trong thời gian $t = 1\\,\\text{giây}$ (kết quả làm tròn đến phần nguyên, đơn vị Jun).",
                            correct_value: 605,
                            tolerance: 1,
                            unit_symbol: "J",
                            unit: "Jun (J)",
                            explanation: "$Q = \\frac{U^2}{R} \\cdot t = \\frac{220^2}{80} \\times 1 = \\frac{48400}{80} = 605\\,\\text{J}$."
                        }
                    ],
                    advanced_challenge: {
                        id: "adv_4_2",
                        title: "🔥 Hiệu Suất Đun Nước Của Ấm Điện",
                        question: "Một ấm điện đun sôi 2 lít nước từ 20°C trong 10 phút. Nhiệt dung riêng của nước là 4200 J/(kg.K). Nhiệt lượng có ích để làm nóng nước là",
                        options: ["672 000 J", "336 000 J", "840 000 J", "168 000 J"],
                        correct: 0,
                        bonus_xp: 90,
                        explanation: "$Q_{ich} = m \\cdot c \\cdot \\Delta t = 2 \\times 4200 \\times (100 - 20) = 672\\,000\\,\\text{J}$."
                    }
                }
            ],
            summary: {
                title: "Tổng Kết Bài 4: Công Suất Điện & Định Luật Jun - Len-xơ",
                mindmap_nodes: [
                    { title: "Công suất điện", content: "$\\mathcal{P} = U \\cdot I = I^2 R = \\frac{U^2}{R}$ (đơn vị Oát - W)." },
                    { title: "Điện năng tiêu thụ", content: "$A = \\mathcal{P} \\cdot t$; $1\\,\\text{kWh} = 3,6 \\times 10^6\\,\\text{J}$." },
                    { title: "Định luật Jun - Len-xơ", content: "$Q = I^2 \\cdot R \\cdot t$; nhiệt lượng tỉ lệ với bình phương dòng điện." }
                ],
                cheat_sheet: [
                    { name: "Công suất", formula: "\\mathcal{P} = U \\cdot I", unit: "W = V \\cdot A" },
                    { name: "Điện năng", formula: "A = \\mathcal{P} \\cdot t", unit: "J = W \\cdot s" },
                    { name: "Nhiệt lượng tỏa ra", formula: "Q = I^2 R t", unit: "J" }
                ],
                boss_challenge: {
                    boss_name: "Lò Nhiệt Đồ 🌋 (Boss Chặng 4)",
                    boss_hp: 100,
                    boss_avatar: "🌋",
                    dialogue: "Ngươi có chịu nổi sức nóng của định luật Jun - Len-xơ không? Hãy giải các bài toán năng lượng!",
                    questions: [
                        {
                            question: "Nếu cường độ dòng điện qua dây dẫn tăng gấp đôi và điện trở giảm đi một nửa thì nhiệt lượng tỏa ra trong cùng một thời gian sẽ",
                            options: ["Tăng gấp 2 lần", "Tăng gấp 4 lần", "Không đổi", "Giảm 2 lần"],
                            correct: 0,
                            damage: 50
                        },
                        {
                            question: "Một bóng đèn có ghi $12\\,\\text{V} - 6\\,\\text{W}$. Điện trở của đèn là",
                            options: ["24 Ω", "2 Ω", "72 Ω", "0,5 Ω"],
                            correct: 0,
                            damage: 50
                        }
                    ]
                }
            }
        }
    ]
};
