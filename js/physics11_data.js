/**
 * Wayground Physics 11 - Arcade Master Question Bank
 * Standard: GDPT 2018 - Chuẩn kiến thức THPT môn Vật Lí 11
 */

const QUESTION_BANK_11 = {
    "u11_dao_dong": {
        "title": "Chương 1: Dao Động (Dao động điều hòa, Năng lượng, Hiện tượng cộng hưởng)",
        "questions": [
            {
                "id": "p11_u1_mc_01", "conceptId": "c11_dao_dong_dieu_hoa",
                "type": "multiple_choice", "level": "Nhận biết",
                "question": "Trong phương trình dao động điều hòa $x = A\\cos(\\omega t + \\varphi)$, đại lượng $A$ được gọi là",
                "options": [
                    "Biên độ dao động.",
                    "Pha ban đầu của dao động.",
                    "Tần số góc của dao động.",
                    "Chu kì của dao động."
                ],
                "correct": 0,
                "explanation": "$A$ là biên độ dao động, luôn có giá trị dương ($A > 0$) biểu thị li độ cực đại."
            },
            {
                "id": "p11_u1_mc_02", "conceptId": "c11_van_toc_cuc_dai",
                "type": "multiple_choice", "level": "Thông hiểu",
                "question": "Một chất điểm dao động điều hòa với biên độ $A = 5\\,\\text{cm}$ và tần số góc $\\omega = 10\\,\\text{rad/s}$. Tốc độ cực đại của chất điểm là",
                "options": ["50 cm/s", "2 cm/s", "25 cm/s", "100 cm/s"],
                "correct": 0,
                "explanation": "$v_{max} = \\omega A = 10 \\times 5 = 50\\,\\text{cm/s}$."
            },
            {
                "id": "p11_u1_tf_01", "conceptId": "c11_nang_luong_dao_dong",
                "type": "multi_tf", "level": "Thông hiểu",
                "context": "Xét một con lắc lò xo dao động điều hòa trên mặt phẳng nằm ngang không ma sát.",
                "statements": [
                    { "text": "Cơ năng của con lắc tỉ lệ thuận với bình phương biên độ dao động: $W = \\frac{1}{2} k A^2$.", "isCorrect": true },
                    { "text": "Khi vật đi từ vị trí cân bằng ra vị trí biên thì thế năng tăng dần và động năng giảm dần.", "isCorrect": true },
                    { "text": "Tại vị trí cân bằng, thế năng của con lắc đạt giá trị cực đại.", "isCorrect": false },
                    { "text": "Cơ năng của con lắc biến thiên điều hòa theo thời gian với chu kì bằng một nửa chu kì dao động.", "isCorrect": false }
                ],
                "explanation": "Tại VTCB động năng cực đại, thế năng = 0 (3 sai). Cơ năng BẢO TOÀN là một hằng số không đổi theo thời gian, không biến thiên (4 sai)."
            }
        ]
    },
    "u11_song_co": {
        "title": "Chương 2: Sóng (Sóng cơ, Bước sóng, Giao thoa sóng)",
        "questions": [
            {
                "id": "p11_u2_mc_01", "conceptId": "c11_buoc_song",
                "type": "multiple_choice", "level": "Nhận biết",
                "question": "Công thức liên hệ giữa bước sóng $\\lambda$, tốc độ truyền sóng $v$ và tần số $f$ là",
                "options": [
                    "$\\lambda = \\frac{v}{f}$",
                    "$\\lambda = v \\cdot f$",
                    "$\\lambda = \\frac{f}{v}$",
                    "$\\lambda = \\frac{v}{2f}$"
                ],
                "correct": 0,
                "explanation": "Bước sóng: $\\lambda = v \\cdot T = \\frac{v}{f}$."
            },
            {
                "id": "p11_u2_mc_02", "conceptId": "c11_giao_thoa",
                "type": "multiple_choice", "level": "Thông hiểu",
                "question": "Trong giao thoa sóng nước với hai nguồn cùng pha, những điểm dao động với biên độ cực tiểu thỏa mãn điều kiện",
                "options": [
                    "$d_2 - d_1 = (k + 0,5)\\lambda$",
                    "$d_2 - d_1 = k\\lambda$",
                    "$d_2 - d_1 = (2k + 1)\\lambda$",
                    "$d_2 - d_1 = k\\frac{\\lambda}{2}$"
                ],
                "correct": 0,
                "explanation": "Hiệu đường đi của cực tiểu giao thoa hai nguồn cùng pha bằng một số bán nguyên lần bước sóng: $d_2 - d_1 = (k + 0,5)\\lambda$."
            }
        ]
    }
};
