/**
 * Wayground Physics 11 - Master Question Bank
 * Standard: GDPT 2018 - Chuẩn kiến thức THPT môn Vật Lí 11
 * Bao gồm 4 Chuyên đề trọng tâm: Dao động điều hòa, Sóng cơ & Giao thoa, Điện trường, Dòng điện không đổi
 * Chuẩn hóa 3 Dạng thức thi Bộ GD&ĐT:
 * - Phần I: Trắc nghiệm 4 lựa chọn ABCD (multiple_choice)
 * - Phần II: Trắc nghiệm Đúng/Sai 4 ý (multi_tf)
 * - Phần III: Trả lời ngắn / Điền số (short_answer)
 */

const QUESTION_BANK_11 = {
    "u11_dao_dong": {
        "title": "Chương 1: Dao Động Điều Hòa & Hiện Tượng Cộng Hưởng",
        "questions": [
            {
                "id": "p11_u1_mc_01",
                "conceptId": "c11_dao_dong_dieu_hoa_dinh_nghia",
                "type": "multiple_choice",
                "level": "Nhận biết",
                "question": "Trong phương trình dao động điều hòa $x = A\\cos(\\omega t + \\varphi)$, đại lượng $A$ được gọi là",
                "options": [
                    "Biên độ dao động (luôn dương $A > 0$).",
                    "Pha ban đầu của dao động.",
                    "Tần số góc của dao động.",
                    "Chu kì của dao động."
                ],
                "correct": 0,
                "explanation": "$A$ là biên độ dao động ($A > 0$), biểu thị li độ cực đại của vật khỏi vị trí cân bằng."
            },
            {
                "id": "p11_u1_mc_02",
                "conceptId": "c11_van_toc_gia_toc",
                "type": "multiple_choice",
                "level": "Nhận biết",
                "question": "Hệ thức liên hệ giữa gia tốc $a$ và li độ $x$ của chất điểm dao động điều hòa với tần số góc $\\omega$ là",
                "options": [
                    "$a = -\\omega^2 x$",
                    "$a = \\omega^2 x$",
                    "$a = -\\omega x$",
                    "$a = -\\frac{x}{\\omega^2}$"
                ],
                "correct": 0,
                "explanation": "Gia tốc luôn ngược dấu và tỉ lệ với li độ: $a = -\\omega^2 x$. Vectơ gia tốc luôn hướng về vị trí cân bằng."
            },
            {
                "id": "p11_u1_mc_03",
                "conceptId": "c11_toc_do_cuc_dai",
                "type": "multiple_choice",
                "level": "Thông hiểu",
                "question": "Một chất điểm dao động điều hòa với biên độ $A = 5\\,\\text{cm}$ và tần số góc $\\omega = 10\\,\\text{rad/s}$. Tốc độ cực đại của chất điểm khi đi qua vị trí cân bằng là",
                "options": [
                    "50 cm/s",
                    "2 cm/s",
                    "25 cm/s",
                    "100 cm/s"
                ],
                "correct": 0,
                "explanation": "$v_{\\max} = \\omega A = 10 \\times 5 = 50\\,\\text{cm/s}$."
            },
            {
                "id": "p11_u1_mc_04",
                "conceptId": "c11_gia_toc_cuc_dai",
                "type": "multiple_choice",
                "level": "Thông hiểu",
                "question": "Độ lớn gia tốc cực đại của một vật dao động điều hòa đạt được tại vị trí nào?",
                "options": [
                    "Tại vị trí biên ($x = \\pm A$).",
                    "Tại vị trí cân bằng ($x = 0$).",
                    "Tại vị trí có li độ $x = A/2$.",
                    "Gia tốc có độ lớn không đổi tại mọi vị trí."
                ],
                "correct": 0,
                "explanation": "Độ lớn gia tốc: $|a| = \\omega^2 |x|$. Khi $x = \\pm A$ thì $|a|_{\\max} = \\omega^2 A$ (tại hai vị trí biên)."
            },
            {
                "id": "p11_u1_mc_05",
                "conceptId": "c11_chu_ki_con_lac_lo_xo",
                "type": "multiple_choice",
                "level": "Nhận biết",
                "question": "Công thức tính chu kì dao động điều hòa của con lắc lò xo có khối lượng $m$, độ cứng $k$ là",
                "options": [
                    "$T = 2\\pi \\sqrt{\\frac{m}{k}}$",
                    "$T = 2\\pi \\sqrt{\\frac{k}{m}}$",
                    "$T = \\frac{1}{2\\pi} \\sqrt{\\frac{m}{k}}$",
                    "$T = 2\\pi \\sqrt{\\frac{g}{l}}$"
                ],
                "correct": 0,
                "explanation": "Chu kì con lắc lò xo: $T = 2\\pi \\sqrt{\\frac{m}{k}}$."
            },
            {
                "id": "p11_u1_mc_06",
                "conceptId": "c11_nang_luong_dao_dong",
                "type": "multiple_choice",
                "level": "Thông hiểu",
                "question": "Cơ năng của một vật dao động điều hòa tỉ lệ thuận với",
                "options": [
                    "Bình phương biên độ dao động: $W = \\frac{1}{2} k A^2 = \\frac{1}{2} m \\omega^2 A^2$.",
                    "Biên độ dao động bậc nhất.",
                    "Chu kì dao động của vật.",
                    "Li độ của vật tại thời điểm khảo sát."
                ],
                "correct": 0,
                "explanation": "Cơ năng dao động điều hòa tỉ lệ thuận với bình phương biên độ dao động: $W \\sim A^2$."
            },
            {
                "id": "p11_u1_mc_07",
                "conceptId": "c11_cong_huong_co",
                "type": "multiple_choice",
                "level": "Thông hiểu",
                "question": "Hiện tượng cộng hưởng cơ xảy ra khi",
                "options": [
                    "Tần số của ngoại lực cưỡng bức bằng tần số dao động riêng của hệ ($f = f_0$).",
                    "Biên độ của ngoại lực cưỡng bức giảm dần về 0.",
                    "Lực ma sát trong hệ đạt giá trị cực đại.",
                    "Tần số ngoại lực lớn hơn rất nhiều so với tần số riêng."
                ],
                "correct": 0,
                "explanation": "Hiện tượng cộng hưởng cơ xảy ra khi tần số ngoại lực cưỡng bức bằng tần số dao động riêng ($f = f_0$), khi đó biên độ dao động cưỡng bức đạt giá trị cực đại."
            },
            {
                "id": "p11_u1_mc_08",
                "conceptId": "c11_dao_dong_tat_dan",
                "type": "multiple_choice",
                "level": "Nhận biết",
                "question": "Dao động tắt dần là dao động có đặc điểm nào sau đây?",
                "options": [
                    "Biên độ và năng lượng giảm dần theo thời gian do ma sát.",
                    "Biên độ không đổi nhưng tần số giảm dần.",
                    "Cơ năng của vật luôn được bảo toàn.",
                    "Chu kì dao động tăng dần theo hàm số mũ."
                ],
                "correct": 0,
                "explanation": "Dao động tắt dần có biên độ và cơ năng giảm dần theo thời gian do ma sát và lực cản của môi trường."
            },
            {
                "id": "p11_u1_tf_01",
                "conceptId": "c11_con_lac_lo_xo_tf",
                "type": "multi_tf",
                "level": "Thông hiểu",
                "context": "Xét một con lắc lò xo dao động điều hòa trên mặt phẳng nằm ngang không ma sát:",
                "statements": [
                    { "text": "Khi vật đi từ vị trí cân bằng ra vị trí biên, thế năng tăng dần và động năng giảm dần.", "isCorrect": true },
                    { "text": "Tại vị trí cân bằng, thế năng của vật đạt giá trị cực đại.", "isCorrect": false },
                    { "text": "Cơ năng của con lắc lò xo được bảo toàn không đổi theo thời gian.", "isCorrect": true },
                    { "text": "Động năng và thế năng của con lắc biến thiên tuần hoàn với tần số góc gấp đôi tần số góc dao động.", "isCorrect": true }
                ],
                "explanation": "Tại VTCB thế năng bằng 0 và động năng cực đại (mệnh đề 2 sai). Động năng và thế năng biến thiên với $\\omega' = 2\\omega$."
            },
            {
                "id": "p11_u1_tf_02",
                "conceptId": "c11_pha_dao_dong_tf",
                "type": "multi_tf",
                "level": "Vận dụng",
                "context": "Một chất điểm dao động điều hòa theo phương trình x = 4cos(2πt - π/3) (cm, s):",
                "statements": [
                    { "text": "Biên độ dao động của chất điểm là A = 4 cm.", "isCorrect": true },
                    { "text": "Chu kì dao động của chất điểm là T = 1 s.", "isCorrect": true },
                    { "text": "Tại thời điểm ban đầu t = 0, chất điểm chuyển động theo chiều âm.", "isCorrect": false },
                    { "text": "Gia tốc của chất điểm vuông pha với li độ dao động.", "isCorrect": false }
                ],
                "explanation": "Pha ban đầu $\\varphi = -\\pi/3 < 0$ nên $v_0 = -\\omega A \\sin\\varphi > 0$ (chuyển động theo chiều dương, mệnh đề 3 sai). Gia tốc ngược pha với li độ, không phải vuông pha (mệnh đề 4 sai)."
            },
            {
                "id": "p11_u1_sa_01",
                "conceptId": "c11_tinh_chu_ki_lo_xo",
                "type": "short_answer",
                "level": "Thông hiểu",
                "question": "Một con lắc lò xo có khối lượng $m = 0{,}1\\,\\text{kg}$, độ cứng của lò xo $k = 40\\,\\text{N/m}$. Lấy $\\pi^2 = 10$. Chu kì dao động của con lắc lò xo bằng bao nhiêu giây (s)?",
                "answer": "0.316",
                "unit": "s",
                "tolerance": 0.05,
                "explanation": "$T = 2\\pi \\sqrt{\\frac{m}{k}} = 2\\pi \\sqrt{\\frac{0{,}1}{40}} = 2\\pi \\frac{1}{20} = \\frac{\\pi}{10} \\approx 0{,}316\\,\\text{s}$."
            },
            {
                "id": "p11_u1_sa_02",
                "conceptId": "c11_tinh_co_nang",
                "type": "short_answer",
                "level": "Vận dụng",
                "question": "Một con lắc lò xo dao động điều hòa với biên độ $A = 0{,}1\\,\\text{m}$ và độ cứng $k = 100\\,\\text{N/m}$. Cơ năng của con lắc bằng bao nhiêu Jun (J)?",
                "answer": "0.5",
                "unit": "J",
                "tolerance": 0.05,
                "explanation": "$W = \\frac{1}{2} k A^2 = \\frac{1}{2} \\times 100 \\times (0{,}1)^2 = 50 \\times 0{,}01 = 0{,}5\\,\\text{J}$."
            }
        ]
    },

    "u11_song_co": {
        "title": "Chương 2: Sóng Cơ, Giao Thoa Sóng & Sóng Dừng",
        "questions": [
            {
                "id": "p11_u2_mc_01",
                "conceptId": "c11_buoc_song_dinh_nghia",
                "type": "multiple_choice",
                "level": "Nhận biết",
                "question": "Công thức liên hệ giữa bước sóng $\\lambda$, tốc độ truyền sóng $v$ và chu kì $T$ (hoặc tần số $f$) là",
                "options": [
                    "$\\lambda = v \\cdot T = \\frac{v}{f}$",
                    "$\\lambda = \\frac{v}{T} = v \\cdot f$",
                    "$\\lambda = \\frac{f}{v}$",
                    "$\\lambda = \\frac{v}{2f}$"
                ],
                "correct": 0,
                "explanation": "Bước sóng là quãng đường sóng truyền đi được trong một chu kì: $\\lambda = v \\cdot T = \\frac{v}{f}$."
            },
            {
                "id": "p11_u2_mc_02",
                "conceptId": "c11_song_ngang_song_doc",
                "type": "multiple_choice",
                "level": "Nhận biết",
                "question": "Sóng ngang là sóng cơ trong đó các phần tử môi trường dao động theo phương",
                "options": [
                    "Vuông góc với phương truyền sóng.",
                    "Trùng với phương truyền sóng.",
                    "Song song với phương thẳng đứng.",
                    "Quay tròn quanh phương truyền sóng."
                ],
                "correct": 0,
                "explanation": "Sóng ngang: phương dao động vuông góc với phương truyền sóng (truyền trong chất rắn và bề mặt chất lỏng). Sóng dọc: phương dao động trùng phương truyền sóng."
            },
            {
                "id": "p11_u2_mc_03",
                "conceptId": "c11_giao_thoa_cuc_dai",
                "type": "multiple_choice",
                "level": "Thông hiểu",
                "question": "Trong giao thoa sóng nước với hai nguồn kết hợp cùng pha, những điểm dao động với biên độ cực đại thỏa mãn điều kiện hiệu đường đi",
                "options": [
                    "$d_2 - d_1 = k\\lambda$ ($k \\in \\mathbb{Z}$)",
                    "$d_2 - d_1 = (k + 0{,}5)\\lambda$",
                    "$d_2 - d_1 = (2k + 1)\\lambda$",
                    "$d_2 - d_1 = k\\frac{\\lambda}{2}$"
                ],
                "correct": 0,
                "explanation": "Cực đại giao thoa của hai nguồn cùng pha: $d_2 - d_1 = k\\lambda$ (hiệu đường đi bằng số nguyên lần bước sóng)."
            },
            {
                "id": "p11_u2_mc_04",
                "conceptId": "c11_giao_thoa_cuc_tieu",
                "type": "multiple_choice",
                "level": "Thông hiểu",
                "question": "Điều kiện để một điểm trên mặt nước dao động với biên độ cực tiểu (triệt tiêu) trong giao thoa hai nguồn cùng pha là",
                "options": [
                    "$d_2 - d_1 = (k + 0{,}5)\\lambda$",
                    "$d_2 - d_1 = k\\lambda$",
                    "$d_2 - d_1 = 2k\\lambda$",
                    "$d_2 - d_1 = k\\frac{\\lambda}{4}$"
                ],
                "correct": 0,
                "explanation": "Cực tiểu giao thoa hai nguồn cùng pha: $d_2 - d_1 = (k + 0{,}5)\\lambda$ (hiệu đường đi bằng số bán nguyên lần bước sóng)."
            },
            {
                "id": "p11_u2_mc_05",
                "conceptId": "c11_song_dung_hai_dau_co_dinh",
                "type": "multiple_choice",
                "level": "Thông hiểu",
                "question": "Điều kiện có sóng dừng trên sợi dây chiều dài $L$ có hai đầu cố định là",
                "options": [
                    "$L = k \\frac{\\lambda}{2}$ ($k = 1, 2, 3...$)",
                    "$L = (2k + 1)\\frac{\\lambda}{4}$",
                    "$L = k\\lambda$",
                    "$L = (k + 0{,}5)\\frac{\\lambda}{2}$"
                ],
                "correct": 0,
                "explanation": "Sóng dừng hai đầu cố định: chiều dài sợi dây bằng số nguyên lần nửa bước sóng: $L = k \\frac{\\lambda}{2}$ (với $k$ là số bụng sóng)."
            },
            {
                "id": "p11_u2_mc_06",
                "conceptId": "c11_khoang_cach_nut_bung",
                "type": "multiple_choice",
                "level": "Nhận biết",
                "question": "Trong hiện tượng sóng dừng, khoảng cách giữa hai nút sóng liên tiếp hoặc hai bụng sóng liên tiếp bằng",
                "options": [
                    "Một nửa bước sóng ($\\lambda/2$).",
                    "Một bước sóng ($\\lambda$).",
                    "Một phần tư bước sóng ($\\lambda/4$).",
                    "Hai bước sóng ($2\\lambda$)."
                ],
                "correct": 0,
                "explanation": "Khoảng cách giữa hai nút liên tiếp (hoặc hai bụng liên tiếp) bằng $\\lambda/2$. Khoảng cách giữa một nút và một bụng liền kề là $\\lambda/4$."
            },
            {
                "id": "p11_u2_mc_07",
                "conceptId": "c11_tinh_buoc_song",
                "type": "multiple_choice",
                "level": "Vận dụng",
                "question": "Một sóng cơ hình sin truyền trong môi trường với tốc độ $v = 12\\,\\text{m/s}$ và tần số $f = 60\\,\\text{Hz}$. Bước sóng của sóng này là",
                "options": [
                    "0,2 m (20 cm)",
                    "5 m",
                    "720 m",
                    "2 m"
                ],
                "correct": 0,
                "explanation": "$\\lambda = \\frac{v}{f} = \\frac{12}{60} = 0{,}2\\,\\text{m} = 20\\,\\text{cm}$."
            },
            {
                "id": "p11_u2_mc_08",
                "conceptId": "c11_song_am",
                "type": "multiple_choice",
                "level": "Thông hiểu",
                "question": "Đặc trưng sinh lí của âm gồm độ cao, độ to và âm sắc. Độ cao của âm gắn liền với đặc trưng vật lí nào?",
                "options": [
                    "Tần số của âm.",
                    "Cường độ âm.",
                    "Mức cường độ âm.",
                    "Đồ thị dao động âm."
                ],
                "correct": 0,
                "explanation": "Độ cao của âm gắn liền với tần số âm. Độ to gắn với mức cường độ âm ($L$). Âm sắc gắn liền với đồ thị dao động âm."
            },
            {
                "id": "p11_u2_tf_01",
                "conceptId": "c11_giao_thoa_song_tf",
                "type": "multi_tf",
                "level": "Thông hiểu",
                "context": "Trên mặt nước có hai nguồn kết hợp S₁ và S₂ dao động cùng pha tạo ra các vân giao thoa:",
                "statements": [
                    { "text": "Đường trung trực của đoạn S₁S₂ là một vân cực đại giao thoa bậc 0.", "isCorrect": true },
                    { "text": "Các vân cực đại và cực tiểu xen kẽ nhau có dạng các đường hyperbol nhận S₁ và S₂ làm tiêu điểm.", "isCorrect": true },
                    { "text": "Điểm nằm trên vân cực tiểu hoàn toàn đứng yên nếu hai nguồn cùng biên độ.", "isCorrect": true },
                    { "text": "Khi tăng tần số dao động của hai nguồn thì khoảng cách giữa các vân cực đại tăng lên.", "isCorrect": false }
                ],
                "explanation": "Vì $\\lambda = v/f$, khi tần số $f$ tăng thì bước sóng $\\lambda$ giảm, khoảng cách giữa các cực đại giảm đi (mệnh đề 4 sai)."
            },
            {
                "id": "p11_u2_tf_02",
                "conceptId": "c11_song_dung_tf",
                "type": "multi_tf",
                "level": "Vận dụng",
                "context": "Một sợi dây đàn hồi dài L = 1,2 m hai đầu cố định, trên dây đang xảy ra sóng dừng với 3 bụng sóng:",
                "statements": [
                    { "text": "Số nút sóng trên sợi dây (kể cả hai đầu cố định) là 4 nút.", "isCorrect": true },
                    { "text": "Bước sóng của sóng trên dây là λ = 0,8 m.", "isCorrect": true },
                    { "text": "Các phần tử thuộc cùng một bụng sóng dao động ngược pha nhau.", "isCorrect": false },
                    { "text": "Bề rộng của một bụng sóng bằng 4 lần biên độ sóng tới.", "isCorrect": true }
                ],
                "explanation": "$L = 3\\frac{\\lambda}{2} \\Rightarrow \\lambda = \\frac{2 \\times 1{,}2}{3} = 0{,}8\\,\\text{m}$. Các phần tử trong cùng 1 bụng dao động CÙNG PHA nhau (mệnh đề 3 sai)."
            },
            {
                "id": "p11_u2_sa_01",
                "conceptId": "c11_tinh_buoc_song_sa",
                "type": "short_answer",
                "level": "Thông hiểu",
                "question": "Một người quan sát sóng biển thấy chiếc phao nhấp nhô lên xuống 10 lần trong thời gian $18\\,\\text{giây}$. Khoảng cách giữa 2 ngọn sóng liên tiếp là $4\\,\\text{m}$. Tốc độ truyền sóng biển bằng bao nhiêu $\\text{m/s}$?",
                "answer": "2.0",
                "unit": "m/s",
                "tolerance": 0.05,
                "explanation": "Phao nhô lên 10 lần ứng với 9 chu kì: $9T = 18\\,\\text{s} \\Rightarrow T = 2\\,\\text{s}$. Bước sóng $\\lambda = 4\\,\\text{m}$. Tốc độ: $v = \\frac{\\lambda}{T} = \\frac{4}{2} = 2\\,\\text{m/s}$."
            },
            {
                "id": "p11_u2_sa_02",
                "conceptId": "c11_tinh_so_bung_song",
                "type": "short_answer",
                "level": "Vận dụng",
                "question": "Sóng dừng trên sợi dây hai đầu cố định dài $L = 100\\,\\text{cm}$ với bước sóng $\\lambda = 40\\,\\text{cm}$. Số bụng sóng quan sát được trên sợi dây bằng bao nhiêu?",
                "answer": "5",
                "unit": "bụng",
                "tolerance": 0.05,
                "explanation": "$L = k \\frac{\\lambda}{2} \\Rightarrow 100 = k \\times \\frac{40}{2} = 20k \\Rightarrow k = 5$ bụng sóng."
            }
        ]
    },

    "u11_dien_truong": {
        "title": "Chương 3: Điện Trường, Điện Thế & Tụ Điện",
        "questions": [
            {
                "id": "p11_u3_mc_01",
                "conceptId": "c11_dinh_luat_coulomb",
                "type": "multiple_choice",
                "level": "Nhận biết",
                "question": "Định luật Coulomb xác định lực tương tác tĩnh điện giữa hai điện tích điểm $q_1, q_2$ đặt trong chân không cách nhau khoảng $r$ là",
                "options": [
                    "$F = k \\frac{|q_1 q_2|}{r^2}$",
                    "$F = k \\frac{q_1 q_2}{r}$",
                    "$F = k \\frac{|q_1 q_2|}{r^3}$",
                    "$F = \\frac{|q_1 q_2|}{k r^2}$"
                ],
                "correct": 0,
                "explanation": "Định luật Coulomb: $F = k \\frac{|q_1 q_2|}{r^2}$ với hằng số $k = 9 \\times 10^9\\,\\text{N}\\cdot\\text{m}^2/\\text{C}^2$."
            },
            {
                "id": "p11_u3_mc_02",
                "conceptId": "c11_cuong_do_dien_truong",
                "type": "multiple_choice",
                "level": "Nhận biết",
                "question": "Cường độ điện trường $\\vec{E}$ tại một điểm đặc trưng cho điện trường về",
                "options": [
                    "Khả năng tác dụng lực: $\\vec{E} = \\frac{\\vec{F}}{q}$.",
                    "Khả năng sinh công của điện trường.",
                    "Nhiệt lượng tỏa ra trong điện trường.",
                    "Khả năng tích điện của môi trường."
                ],
                "correct": 0,
                "explanation": "Cường độ điện trường đặc trưng cho tác dụng lực của điện trường: $\\vec{E} = \\frac{\\vec{F}}{q}$, đơn vị là Vôn trên mét (V/m)."
            },
            {
                "id": "p11_u3_mc_03",
                "conceptId": "c11_cong_luc_dien",
                "type": "multiple_choice",
                "level": "Thông hiểu",
                "question": "Công của lực điện trường khi dịch chuyển một điện tích $q$ trong điện trường đều không phụ thuộc vào",
                "options": [
                    "Hình dạng đường đi mà chỉ phụ thuộc vị trí điểm đầu và điểm cuối ($A = qEd$).",
                    "Độ lớn điện tích $q$.",
                    "Cường độ điện trường $E$.",
                    "Khoảng cách giữa hình chiếu điểm đầu và điểm cuối lên đường sức."
                ],
                "correct": 0,
                "explanation": "Điện trường là một trường thế, công của lực điện không phụ thuộc hình dạng đường đi: $A = qEd$."
            },
            {
                "id": "p11_u3_mc_04",
                "conceptId": "c11_hieu_dien_the",
                "type": "multiple_choice",
                "level": "Thông hiểu",
                "question": "Mối liên hệ giữa cường độ điện trường đều $E$ và hiệu điện thế $U$ giữa hai điểm cách nhau khoảng $d$ dọc theo đường sức là",
                "options": [
                    "$U = E \\cdot d$",
                    "$E = U \\cdot d$",
                    "$U = \\frac{E}{d}$",
                    "$E = U \\cdot d^2$"
                ],
                "correct": 0,
                "explanation": "$U = E \\cdot d \\Rightarrow E = \\frac{U}{d}$ (V/m)."
            },
            {
                "id": "p11_u3_mc_05",
                "conceptId": "c11_tu_dien",
                "type": "multiple_choice",
                "level": "Nhận biết",
                "question": "Điện dung $C$ của tụ điện là đại lượng đặc trưng cho khả năng tích điện của tụ, được tính bằng",
                "options": [
                    "$C = \\frac{Q}{U}$",
                    "$C = Q \\cdot U$",
                    "$C = \\frac{U}{Q}$",
                    "$C = \\frac{Q^2}{U}$"
                ],
                "correct": 0,
                "explanation": "$C = \\frac{Q}{U}$ (đơn vị Fara: F, thường dùng $\\mu\\text{F}, \\text{nF}, \\text{pF}$)."
            },
            {
                "id": "p11_u3_mc_06",
                "conceptId": "c11_nang_luong_tu_dien",
                "type": "multiple_choice",
                "level": "Thông hiểu",
                "question": "Năng lượng điện trường dự trữ bên trong một tụ điện có điện dung $C$ nạp tới hiệu điện thế $U$ là",
                "options": [
                    "$W = \\frac{1}{2} C U^2 = \\frac{1}{2} \\frac{Q^2}{C}$",
                    "$W = C U^2$",
                    "$W = \\frac{1}{2} C^2 U$",
                    "$W = Q \\cdot U^2$"
                ],
                "correct": 0,
                "explanation": "Năng lượng điện trường tụ điện: $W = \\frac{1}{2}CU^2 = \\frac{1}{2}QU = \\frac{Q^2}{2C}$."
            },
            {
                "id": "p11_u3_mc_07",
                "conceptId": "c11_duong_suc_dien",
                "type": "multiple_choice",
                "level": "Nhận biết",
                "question": "Hình dạng các đường sức điện của một điện tích điểm dương $q > 0$ đặt trong chân không là",
                "options": [
                    "Các đường thẳng xuất phát từ điện tích dương hướng ra vô cực.",
                    "Các đường tròn đồng tâm bao quanh điện tích.",
                    "Các đường thẳng hướng từ vô cực đi vào điện tích.",
                    "Các đường xoắn ốc khép kín."
                ],
                "correct": 0,
                "explanation": "Đường sức điện xuất phát ở điện tích dương và kết thúc ở điện tích âm (hoặc vô cực)."
            },
            {
                "id": "p11_u3_mc_08",
                "conceptId": "c11_luc_coulomb_tinh",
                "type": "multiple_choice",
                "level": "Vận dụng",
                "question": "Hai điện tích điểm $q_1 = 2 \\times 10^{-8}\\,\\text{C}$ và $q_2 = -2 \\times 10^{-8}\\,\\text{C}$ đặt cách nhau $r = 3\\,\\text{cm}$ trong chân không. Lực tương tác giữa chúng là",
                "options": [
                    "Lực hút có độ lớn $4 \\times 10^{-3}\\,\\text{N}$.",
                    "Lực đẩy có độ lớn $4 \\times 10^{-3}\\,\\text{N}$.",
                    "Lực hút có độ lớn $4 \\times 10^{-5}\\,\\text{N}$.",
                    "Lực đẩy có độ lớn $12 \\times 10^{-3}\\,\\text{N}$."
                ],
                "correct": 0,
                "explanation": "Vì trái dấu nên là lực hút. $F = 9 \\times 10^9 \\frac{2 \\times 10^{-8} \\times 2 \\times 10^{-8}}{(0{,}03)^2} = 9 \\times 10^9 \\frac{4 \\times 10^{-16}}{9 \\times 10^{-4}} = 4 \\times 10^{-3}\\,\\text{N}$."
            },
            {
                "id": "p11_u3_tf_01",
                "conceptId": "c11_dien_truong_deu_tf",
                "type": "multi_tf",
                "level": "Thông hiểu",
                "context": "Xét điện trường đều giữa hai bản kim loại phẳng tích điện trái dấu đặt song song cách nhau d = 2 cm, hiệu điện thế U = 100 V:",
                "statements": [
                    { "text": "Cường độ điện trường giữa hai bản là E = 5000 V/m.", "isCorrect": true },
                    { "text": "Vectơ cường độ điện trường hướng từ bản âm sang bản dương.", "isCorrect": false },
                    { "text": "Các đường sức điện giữa hai bản là các đường thẳng song song và cách đều nhau.", "isCorrect": true },
                    { "text": "Một electron đặt trong điện trường này sẽ chịu lực điện kéo về phía bản dương.", "isCorrect": true }
                ],
                "explanation": "$E = U/d = 100/0{,}02 = 5000\\,\\text{V/m}$. Vectơ $\\vec{E}$ luôn hướng từ BẢN DƯƠNG sang BẢN ÂM (mệnh đề 2 sai). Electron mang điện tích âm nên $\\vec{F} = q\\vec{E}$ ngược hướng $\\vec{E}$, bay về bản dương."
            },
            {
                "id": "p11_u3_tf_02",
                "conceptId": "c11_tu_dien_tf",
                "type": "multi_tf",
                "level": "Vận dụng",
                "context": "Một tụ điện phẳng có điện dung C = 20 μF được mắc vào nguồn điện không đổi có hiệu điện thế U = 12 V:",
                "statements": [
                    { "text": "Điện tích mà tụ điện tích được là Q = 240 μC.", "isCorrect": true },
                    { "text": "Năng lượng điện trường dự trữ trong tụ là W = 1,44 mJ.", "isCorrect": true },
                    { "text": "Nếu ngắt tụ khỏi nguồn rồi tăng khoảng cách giữa hai bản thì điện tích Q của tụ tăng lên.", "isCorrect": false },
                    { "text": "Nếu nối hai bản tụ bằng dây dẫn thì tụ sẽ phóng điện và năng lượng giải phóng thành tia lửa điện và nhiệt.", "isCorrect": true }
                ],
                "explanation": "Khi ngắt khỏi nguồn, tụ bị cô lập về điện nên điện tích $Q$ BẢO TOÀN không đổi (mệnh đề 3 sai)."
            },
            {
                "id": "p11_u3_sa_01",
                "conceptId": "c11_tinh_cuong_do_e",
                "type": "short_answer",
                "level": "Thông hiểu",
                "question": "Hiệu điện thế giữa hai bản kim loại phẳng song song là $U = 200\\,\\text{V}$, khoảng cách giữa hai bản là $d = 5\\,\\text{cm} = 0{,}05\\,\\text{m}$. Cường độ điện trường đều giữa hai bản bằng bao nhiêu Vôn trên mét (V/m)?",
                "answer": "4000",
                "unit": "V/m",
                "tolerance": 0.05,
                "explanation": "$E = \\frac{U}{d} = \\frac{200}{0{,}05} = 4000\\,\\text{V/m}$."
            },
            {
                "id": "p11_u3_sa_02",
                "conceptId": "c11_tinh_dien_tich_tu",
                "type": "short_answer",
                "level": "Vận dụng",
                "question": "Một tụ điện có điện dung $C = 50\\,\\mu\\text{F}$ được nối vào hai cực của nguồn điện có hiệu điện thế $U = 20\\,\\text{V}$. Điện tích tích được trên mỗi bản tụ bằng bao nhiêu micro-Coulomb ($\\mu\\text{C}$)?",
                "answer": "1000",
                "unit": "μC",
                "tolerance": 0.05,
                "explanation": "$Q = C \\cdot U = 50\\,\\mu\\text{F} \\times 20\\,\\text{V} = 1000\\,\\mu\\text{C}$."
            }
        ]
    },

    "u11_dong_dien": {
        "title": "Chương 4: Dòng Điện Không Đổi & Định Luật Ôm Toàn Mạch",
        "questions": [
            {
                "id": "p11_u4_mc_01",
                "conceptId": "c11_cuong_do_dong_dien_dinh_nghia",
                "type": "multiple_choice",
                "level": "Nhận biết",
                "question": "Cường độ dòng điện không đổi $I$ chạy qua tiết diện thẳng của dây dẫn được tính bằng",
                "options": [
                    "$I = \\frac{q}{t}$",
                    "$I = q \\cdot t$",
                    "$I = \\frac{t}{q}$",
                    "$I = q^2 t$"
                ],
                "correct": 0,
                "explanation": "$I = \\frac{q}{t}$ (đơn vị Ampe: $1\\,\\text{A} = 1\\,\\text{C/s}$)."
            },
            {
                "id": "p11_u4_mc_02",
                "conceptId": "c11_suat_dien_dong",
                "type": "multiple_choice",
                "level": "Nhận biết",
                "question": "Suất điện động $\\mathcal{E}$ của nguồn điện là đại lượng đặc trưng cho",
                "options": [
                    "Khả năng thực hiện công của lực lạ bên trong nguồn điện: $\\mathcal{E} = \\frac{A_{\\text{lạ}}}{q}$.",
                    "Khả năng tác dụng lực điện trường ngoài mạch.",
                    "Lượng điện tích dự trữ bên trong nguồn.",
                    "Điện trở nội của nguồn điện."
                ],
                "correct": 0,
                "explanation": "Suất điện động của nguồn điện: $\\mathcal{E} = \\frac{A}{q}$ (đơn vị Vôn: V)."
            },
            {
                "id": "p11_u4_mc_03",
                "conceptId": "c11_dinh_luat_om_toan_mach",
                "type": "multiple_choice",
                "level": "Thông hiểu",
                "question": "Hệ thức định luật Ôm đối với toàn mạch gồm nguồn $(\\mathcal{E}, r)$ và điện trở mạch ngoài $R_N$ là",
                "options": [
                    "$I = \\frac{\\mathcal{E}}{R_N + r}$",
                    "$I = \\frac{\\mathcal{E}}{R_N - r}$",
                    "$I = \\frac{\\mathcal{E} + r}{R_N}$",
                    "$I = \\frac{R_N + r}{\\mathcal{E}}$"
                ],
                "correct": 0,
                "explanation": "Định luật Ôm toàn mạch: Cường độ dòng điện tỉ lệ thuận với suất điện động và tỉ lệ nghịch với điện trở toàn phần: $I = \\frac{\\mathcal{E}}{R_N + r}$."
            },
            {
                "id": "p11_u4_mc_04",
                "conceptId": "c11_hieu_dien_the_mach_ngoai",
                "type": "multiple_choice",
                "level": "Thông hiểu",
                "question": "Hiệu điện thế giữa hai cực của nguồn điện (hiệu điện thế mạch ngoài) liên hệ với suất điện động $\\mathcal{E}$ theo biểu thức",
                "options": [
                    "$U = \\mathcal{E} - I \\cdot r$",
                    "$U = \\mathcal{E} + I \\cdot r$",
                    "$U = I \\cdot r$",
                    "$U = \\frac{\\mathcal{E}}{r}$"
                ],
                "correct": 0,
                "explanation": "$U = I R_N = \\mathcal{E} - Ir$. Hiệu điện thế mạch ngoài luôn nhỏ hơn suất điện động một lượng đúng bằng độ giảm thế trong nguồn."
            },
            {
                "id": "p11_u4_mc_05",
                "conceptId": "c11_hien_tuong_doan_mach",
                "type": "multiple_choice",
                "level": "Thông hiểu",
                "question": "Hiện tượng đoản mạch (ngắn mạch) xảy ra khi",
                "options": [
                    "Nối hai cực của nguồn điện bằng dây dẫn có điện trở rất nhỏ ($R_N \\approx 0$), làm dòng điện $I_{\\text{đm}} = \\frac{\\mathcal{E}}{r}$ tăng rất lớn.",
                    "Mạch ngoài có điện trở vô cùng lớn.",
                    "Ngắt mạch điện hoàn toàn.",
                    "Suất điện động của nguồn điện giảm về 0."
                ],
                "correct": 0,
                "explanation": "Khi đoản mạch ($R_N = 0$), $I_{\\text{đm}} = \\mathcal{E}/r$ rất lớn có thể gây cháy nổ dây dẫn và nguồn."
            },
            {
                "id": "p11_u4_mc_06",
                "conceptId": "c11_hieu_suat_nguon_dien",
                "type": "multiple_choice",
                "level": "Thông hiểu",
                "question": "Hiệu suất $H$ của một nguồn điện cung cấp cho mạch ngoài có điện trở $R_N$ là",
                "options": [
                    "$H = \\frac{U}{\\mathcal{E}} = \\frac{R_N}{R_N + r} \\times 100\\%$",
                    "$H = \\frac{\\mathcal{E}}{U} \\times 100\\%$",
                    "$H = \\frac{r}{R_N + r} \\times 100\\%$",
                    "$H = \\frac{R_N - r}{R_N} \\times 100\\%$"
                ],
                "correct": 0,
                "explanation": "Hiệu suất nguồn: $H = \\frac{A_{\\text{ngoài}}}{A_{\\text{tp}}} = \\frac{U I t}{\\mathcal{E} I t} = \\frac{U}{\\mathcal{E}} = \\frac{R_N}{R_N + r}$."
            },
            {
                "id": "p11_u4_mc_07",
                "conceptId": "c11_dinh_luat_joule_lenz",
                "type": "multiple_choice",
                "level": "Nhận biết",
                "question": "Nhiệt lượng tỏa ra trên một vật dẫn có điện trở $R$ khi có dòng điện $I$ chạy qua trong thời gian $t$ tuân theo định luật Joule - Lenz là",
                "options": [
                    "$Q = I^2 R t$",
                    "$Q = I R t$",
                    "$Q = I^2 \\frac{R}{t}$",
                    "$Q = \\frac{U^2}{R t}$"
                ],
                "correct": 0,
                "explanation": "Định luật Joule - Lenz: $Q = I^2 R t$."
            },
            {
                "id": "p11_u4_mc_08",
                "conceptId": "c11_cong_suat_cuc_dai",
                "type": "multiple_choice",
                "level": "Vận dụng",
                "question": "Công suất tiêu thụ mạch ngoài đạt giá trị cực đại khi điện trở mạch ngoài $R_N$ có giá trị bằng",
                "options": [
                    "Bằng đúng điện trở trong của nguồn: $R_N = r$.",
                    "Bằng 0.",
                    "Lớn vô cùng.",
                    "Gấp đôi điện trở trong: $R_N = 2r$."
                ],
                "correct": 0,
                "explanation": "Theo bất đẳng thức Cô-si, $P_N = I^2 R_N = \\frac{\\mathcal{E}^2 R_N}{(R_N + r)^2}$ đạt cực đại khi $R_N = r$."
            },
            {
                "id": "p11_u4_tf_01",
                "conceptId": "c11_toan_mach_tf",
                "type": "multi_tf",
                "level": "Thông hiểu",
                "context": "Một nguồn điện có suất điện động E = 12 V và điện trở trong r = 1 Ω được mắc với mạch ngoài là điện trở R = 5 Ω:",
                "statements": [
                    { "text": "Cường độ dòng điện chạy trong mạch là I = 2 A.", "isCorrect": true },
                    { "text": "Hiệu điện thế giữa hai cực của nguồn là U = 10 V.", "isCorrect": true },
                    { "text": "Công suất của nguồn điện sinh ra là P_nguồn = 24 W.", "isCorrect": true },
                    { "text": "Hiệu suất của nguồn điện trong trường hợp này là 50%.", "isCorrect": false }
                ],
                "explanation": "$I = \\frac{12}{5+1} = 2\\,\\text{A}$. $U = IR = 2 \\times 5 = 10\\,\\text{V}$. $P_{\\text{ng}} = \\mathcal{E}I = 12 \\times 2 = 24\\,\\text{W}$. Hiệu suất $H = U/\\mathcal{E} = 10/12 \\approx 83{,}3\\%$ (mệnh đề 4 sai)."
            },
            {
                "id": "p11_u4_tf_02",
                "conceptId": "c11_doan_mach_cau_chi_tf",
                "type": "multi_tf",
                "level": "Vận dụng",
                "context": "Về an toàn điện và các biện pháp bảo vệ mạch điện gia đình:",
                "statements": [
                    { "text": "Cầu chì hoặc aptomat luôn được mắc nối tiếp với thiết bị cần bảo vệ trên dây pha (dây nóng).", "isCorrect": true },
                    { "text": "Khi xảy ra đoản mạch dòng điện tăng đột biến làm dây chì nóng chảy tự động ngắt mạch.", "isCorrect": true },
                    { "text": "Có thể thay thế dây chì bị đứt bằng một đoạn dây đồng to để tránh bị đứt lại.", "isCorrect": false },
                    { "text": "Mắc thêm nhiều thiết bị điện công suất lớn song song cùng lúc có thể gây quá tải đường dây.", "isCorrect": true }
                ],
                "explanation": "Tuyệt đối không dùng dây đồng thay dây chì vì nhiệt độ nóng chảy của đồng rất cao ($1083^\\circ\\text{C}$) sẽ không tự ngắt được khi đoản mạch, gây cháy nổ (mệnh đề 3 sai)."
            },
            {
                "id": "p11_u4_sa_01",
                "conceptId": "c11_tinh_dong_dien_toan_mach",
                "type": "short_answer",
                "level": "Thông hiểu",
                "question": "Một acquy có suất điện động $\\mathcal{E} = 6\\,\\text{V}$, điện trở trong $r = 0{,}5\\,\\Omega$ mắc với điện trở mạch ngoài $R = 2{,}5\\,\\Omega$. Cường độ dòng điện chạy trong mạch bằng bao nhiêu Ampe (A)?",
                "answer": "2.0",
                "unit": "A",
                "tolerance": 0.05,
                "explanation": "$I = \\frac{\\mathcal{E}}{R + r} = \\frac{6}{2{,}5 + 0{,}5} = \\frac{6}{3} = 2\\,\\text{A}$."
            },
            {
                "id": "p11_u4_sa_02",
                "conceptId": "c11_tinh_hieu_dien_the",
                "type": "short_answer",
                "level": "Vận dụng",
                "question": "Nguồn điện có suất điện động $\\mathcal{E} = 9\\,\\text{V}$ và điện trở trong $r = 1\\,\\Omega$. Khi dòng điện chạy qua nguồn là $I = 1{,}5\\,\\text{A}$ thì hiệu điện thế giữa hai cực của nguồn bằng bao nhiêu Vôn (V)?",
                "answer": "7.5",
                "unit": "V",
                "tolerance": 0.05,
                "explanation": "$U = \\mathcal{E} - I \\cdot r = 9 - 1{,}5 \\times 1 = 7{,}5\\,\\text{V}$."
            }
        ]
    }
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { QUESTION_BANK_11 };
}
