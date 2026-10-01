/**
 * Wayground Physics 10 - Arcade Master Question Bank
 * Standard: GDPT 2018 - Chuẩn kiến thức THPT môn Vật Lí 10
 */

const QUESTION_BANK_10 = {
    "u10_dong_hoc": {
        "title": "Chương 2: Mô Tả Chuyển Động (Vận tốc, Gia tốc, Chuyển động biến đổi đều)",
        "questions": [
            {
                "id": "p10_u1_mc_01", "conceptId": "c10_gia_toc",
                "type": "multiple_choice", "level": "Nhận biết",
                "question": "Công thức tính gia tốc của chuyển động thẳng biến đổi đều là",
                "options": [
                    "$a = \\frac{v - v_0}{t}$",
                    "$a = \\frac{v + v_0}{t}$",
                    "$a = \\frac{v^2 - v_0^2}{t}$",
                    "$a = v \\cdot t$"
                ],
                "correct": 0,
                "explanation": "Gia tốc được xác định bằng độ biến thiên vận tốc trong một đơn vị thời gian: $a = \\frac{v - v_0}{t}$."
            },
            {
                "id": "p10_u1_mc_02", "conceptId": "c10_do_dich_chuyen",
                "type": "multiple_choice", "level": "Thông hiểu",
                "question": "Một ô tô khởi hành chuyển động thẳng nhanh dần đều với gia tốc $a = 2\\,\\text{m/s}^2$. Quãng đường ô tô đi được sau $5\\,\\text{giây}$ là",
                "options": ["25 m", "50 m", "10 m", "20 m"],
                "correct": 0,
                "explanation": "$s = \\frac{1}{2}at^2 = \\frac{1}{2} \\times 2 \\times 5^2 = 25\\,\\text{m}$."
            },
            {
                "id": "p10_u1_tf_01", "conceptId": "c10_roi_tu_do",
                "type": "multi_tf", "level": "Thông hiểu",
                "context": "Một vật được thả rơi tự do không vận tốc đầu từ độ cao h xuống đất tại nơi có gia tốc trọng trường g = 9,8 m/s².",
                "statements": [
                    { "text": "Chuyển động rơi tự do là chuyển động thẳng nhanh dần đều theo phương thẳng đứng.", "isCorrect": true },
                    { "text": "Vận tốc của vật khi chạm đất được tính bằng công thức $v = \\sqrt{2gh}$.", "isCorrect": true },
                    { "text": "Vật nặng rơi nhanh hơn vật nhẹ trong môi trường chân không.", "isCorrect": false },
                    { "text": "Thời gian rơi tỉ lệ thuận với độ cao h.", "isCorrect": false }
                ],
                "explanation": "Trong chân không mọi vật rơi như nhau với cùng gia tốc g. Thời gian rơi $t = \\sqrt{2h/g}$ tỉ lệ với căn bậc hai của h."
            }
        ]
    },
    "u10_dong_luc_hoc": {
        "title": "Chương 3: Các Lực Trong Thực Tiễn & Định Luật Newton",
        "questions": [
            {
                "id": "p10_u2_mc_01", "conceptId": "c10_dinh_luat_2_newton",
                "type": "multiple_choice", "level": "Nhận biết",
                "question": "Hệ thức của định luật II Newton là",
                "options": [
                    "$\\vec{F} = m\\vec{a}$",
                    "$\\vec{F} = \\frac{\\vec{a}}{m}$",
                    "$\\vec{a} = m\\vec{F}$",
                    "$F = \\frac{m}{a}$"
                ],
                "correct": 0,
                "explanation": "Định luật II Newton: $\\vec{F} = m\\vec{a}$."
            },
            {
                "id": "p10_u2_mc_02", "conceptId": "c10_cong_co_hoc",
                "type": "multiple_choice", "level": "Thông hiểu",
                "question": "Một lực $F = 50\\,\\text{N}$ kéo một vật dịch chuyển một đoạn $s = 10\\,\\text{m}$ theo hướng của lực. Công do lực thực hiện là",
                "options": ["500 J", "5 J", "250 J", "0 J"],
                "correct": 0,
                "explanation": "$A = F \\cdot s \\cdot \\cos 0^\\circ = 50 \\times 10 = 500\\,\\text{J}$."
            }
        ]
    }
};
