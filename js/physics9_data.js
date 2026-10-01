/**
 * Wayground Physics 9 (9physics) - Question Bank & Remediation Clone Bank
 * Standard: GDPT 2018 - Chuẩn cấu trúc THCS môn KHTN / Vật Lí 9
 * Phân môn: Điện học, Điện từ học, Quang học, Bảo toàn năng lượng
 */

const QUESTION_BANK_9 = {
    "u9_dien_hoc": {
        "title": "Chương 1: Điện Học (Định luật Ôm, Công suất, Định luật Joule-Lenz)",
        "questions": [
            {
                "id": "p9_u1_mc_01", "conceptId": "c9_dinh_luat_om",
                "type": "multiple_choice", "level": "Nhận biết",
                "question": "Theo Định luật Ôm, cường độ dòng điện $I$ chạy qua một dây dẫn",
                "options": [
                    "Tỉ lệ thuận với hiệu điện thế $U$ và tỉ lệ nghịch với điện trở $R$.",
                    "Tỉ lệ nghịch với hiệu điện thế $U$ và tỉ lệ thuận với điện trở $R$.",
                    "Chỉ phụ thuộc vào hiệu điện thế $U$ mà không phụ thuộc điện trở $R$.",
                    "Tăng khi điện trở $R$ tăng ở hiệu điện thế không đổi."
                ],
                "correct": 0,
                "explanation": "Định luật Ôm: $I = \\frac{U}{R}$. Cường độ dòng điện tỉ lệ thuận với hiệu điện thế và tỉ lệ nghịch với điện trở."
            },
            {
                "id": "p9_u1_mc_02", "conceptId": "c9_dien_tro_day_dan",
                "type": "multiple_choice", "level": "Thông hiểu",
                "question": "Một dây dẫn bằng đồng có chiều dài $l$, tiết diện $S$, điện trở suất $\\rho$. Công thức tính điện trở $R$ của dây dẫn là",
                "options": [
                    "$R = \\rho \\frac{l}{S}$",
                    "$R = \\frac{l}{\\rho S}$",
                    "$R = \\rho \\frac{S}{l}$",
                    "$R = \\frac{S}{\\rho l}$"
                ],
                "correct": 0,
                "explanation": "Điện trở của dây dẫn hình trụ đồng chất được xác định bởi công thức: $R = \\rho \\frac{l}{S}$."
            },
            {
                "id": "p9_u1_mc_03", "conceptId": "c9_mach_noi_tiep_song_song",
                "type": "multiple_choice", "level": "Vận dụng",
                "question": "Hai điện trở $R_1 = 10\\,\\Omega$ và $R_2 = 15\\,\\Omega$ mắc song song vào nguồn điện có hiệu điện thế $U = 12\\text{V}$. Cường độ dòng điện chạy trong mạch chính là",
                "options": ["2,0 A", "0,8 A", "1,2 A", "5,0 A"],
                "correct": 0,
                "explanation": "$R_{td} = \\frac{R_1 R_2}{R_1 + R_2} = \\frac{10 \\times 15}{10 + 15} = 6\\,\\Omega$. Dòng điện mạch chính: $I = \\frac{U}{R_{td}} = \\frac{12}{6} = 2\\text{A}$."
            },
            {
                "id": "p9_u1_mc_04", "conceptId": "c9_cong_suat_dien",
                "type": "multiple_choice", "level": "Vận dụng cao",
                "question": "Một bóng đèn có ghi $220\\text{V} - 100\\text{W}$ thắp sáng liên tục ở hiệu điện thế $220\\text{V}$ trong 30 ngày, mỗi ngày 4 giờ. Lượng điện năng tiêu thụ đếm được trên công tơ điện là",
                "options": ["12 kWh (12 số điện)", "1,2 kWh", "120 kWh", "44 kWh"],
                "correct": 0,
                "explanation": "Tổng thời gian: $t = 30 \\times 4 = 120\\text{h}$. Điện năng tiêu thụ: $A = P \\cdot t = 0,1\\text{kW} \\times 120\\text{h} = 12\\text{kWh}$."
            },
            {
                "id": "p9_u1_tf_01", "conceptId": "c9_joule_lenz",
                "type": "multi_tf", "level": "Thông hiểu",
                "context": "Xét định luật Joule-Lenz và tác dụng nhiệt của dòng điện:",
                "statements": [
                    { "text": "Nhiệt lượng tỏa ra trên dây dẫn tỉ lệ thuận với bình phương cường độ dòng điện: $Q = I^2 R t$.", "isCorrect": true },
                    { "text": "Nếu cường độ dòng điện tăng gấp 2 lần thì nhiệt lượng tỏa ra trong cùng khoảng thời gian sẽ tăng gấp 4 lần.", "isCorrect": true },
                    { "text": "Cầu chì hoạt động dựa trên tác dụng từ của dòng điện.", "isCorrect": false },
                    { "text": "Dây mai-so của bàn là điện thường làm bằng hợp kim có điện trở suất lớn để tỏa nhiệt tốt.", "isCorrect": true }
                ],
                "explanation": "Q = I²Rt nên I tăng 2 thì Q tăng 4. Cầu chì hoạt động dựa trên tác dụng nhiệt nóng chảy (3 sai)."
            }
        ]
    },
    "u9_dien_tu_hoc": {
        "title": "Chương 2: Điện Từ Học (Từ trường, Cảm ứng điện từ, Máy biến thế)",
        "questions": [
            {
                "id": "p9_u2_mc_01", "conceptId": "c9_tu_truong_ong_day",
                "type": "multiple_choice", "level": "Nhận biết",
                "question": "Để xác định chiều của đường sức từ trong lòng một ống dây có dòng điện chạy qua, ta dùng",
                "options": [
                    "Quy tắc nắm tay phải.",
                    "Quy tắc bàn tay trái.",
                    "Quy tắc vặn đinh ốc bàn tay trái.",
                    "Định luật bảo toàn điện tích."
                ],
                "correct": 0,
                "explanation": "Quy tắc nắm tay phải: Nắm bàn tay phải sao cho bốn ngón tay hướng theo chiều dòng điện qua các vòng dây, khi đó ngón tay cái choãi ra chỉ chiều của đường sức từ trong lòng ống dây."
            },
            {
                "id": "p9_u2_mc_02", "conceptId": "c9_luc_dien_tu",
                "type": "multiple_choice", "level": "Thông hiểu",
                "question": "Lực điện từ tác dụng lên đoạn dây dẫn mang dòng điện đặt vuông góc trong từ trường tuân theo quy tắc nào?",
                "options": [
                    "Quy tắc bàn tay trái.",
                    "Quy tắc nắm tay phải.",
                    "Định luật phản xạ ánh sáng.",
                    "Nguyên lý Archimedes."
                ],
                "correct": 0,
                "explanation": "Quy tắc bàn tay trái: Đặt bàn tay trái sao cho các đường sức từ hướng vào lòng bàn tay, chiều từ cổ tay đến ngón tay giữa hướng theo chiều dòng điện thì ngón tay cái choãi ra 90 độ chỉ chiều của lực điện từ."
            },
            {
                "id": "p9_u2_mc_03", "conceptId": "c9_may_bien_the",
                "type": "multiple_choice", "level": "Vận dụng",
                "question": "Một máy biến thế có cuộn sơ cấp $N_1 = 500$ vòng, cuộn thứ cấp $N_2 = 2500$ vòng. Khi đặt vào hai đầu cuộn sơ cấp hiệu điện thế xoay chiều $U_1 = 220\\text{V}$ thì hiệu điện thế ở hai đầu cuộn thứ cấp là",
                "options": ["1100 V", "44 V", "550 V", "2200 V"],
                "correct": 0,
                "explanation": "Ta có: $\\frac{U_1}{U_2} = \\frac{N_1}{N_2} \\Rightarrow U_2 = U_1 \\frac{N_2}{N_1} = 220 \\times \\frac{2500}{500} = 220 \\times 5 = 1100\\text{V}$."
            },
            {
                "id": "p9_u2_tf_01", "conceptId": "c9_truyen_tai_dien_nang",
                "type": "multi_tf", "level": "Vận dụng cao",
                "context": "Về vấn đề giảm hao phí do tỏa nhiệt khi truyền tải điện năng đi xa:",
                "statements": [
                    { "text": "Công suất hao phí tỉ lệ nghịch với bình phương hiệu điện thế truyền tải: $P_{hp} = R \\frac{P^2}{U^2}$.", "isCorrect": true },
                    { "text": "Biện pháp tốt nhất và kinh tế nhất để giảm hao phí là tăng hiệu điện thế $U$ trước khi truyền tải.", "isCorrect": true },
                    { "text": "Nếu tăng hiệu điện thế lên 10 lần thì công suất hao phí do tỏa nhiệt trên đường dây giảm 100 lần.", "isCorrect": true },
                    { "text": "Tăng tiết diện dây dẫn là giải pháp tối ưu nhất mà không tốn kém chi phí cột điện.", "isCorrect": false }
                ],
                "explanation": "Tăng tiết diện dây dẫn làm dây rất nặng, tốn nhiều kim loại và phải xây cột điện đồ sộ nên rất tốn kém (4 sai)."
            }
        ]
    },
    "u9_quang_hoc": {
        "title": "Chương 3: Quang Học (Khúc xạ, Thấu kính, Mắt & Dụng cụ quang)",
        "questions": [
            {
                "id": "p9_u3_mc_01", "conceptId": "c9_khuc_xa_anh_sang",
                "type": "multiple_choice", "level": "Nhận biết",
                "question": "Khi tia sáng truyền từ không khí vào nước, góc khúc xạ $r$ so với góc tới $i$ như thế nào?",
                "options": [
                    "Góc khúc xạ nhỏ hơn góc tới ($r < i$).",
                    "Góc khúc xạ lớn hơn góc tới ($r > i$).",
                    "Góc khúc xạ luôn bằng góc tới ($r = i$).",
                    "Góc khúc xạ luôn bằng $90^\\circ$."
                ],
                "correct": 0,
                "explanation": "Khi ánh sáng truyền từ môi trường kém chiết quang (không khí) sang môi trường chiết quang hơn (nước) thì tia khúc xạ bị bẻ cong về phía pháp tuyến, do đó $r < i$."
            },
            {
                "id": "p9_u3_mc_02", "conceptId": "c9_thau_kinh_hoi_tu",
                "type": "multiple_choice", "level": "Thông hiểu",
                "question": "Vật sáng đặt ngoài khoảng tiêu cự của thấu kính hội tụ ($d > f$) luôn cho",
                "options": [
                    "Ảnh thật, ngược chiều với vật.",
                    "Ảnh ảo, cùng chiều và lớn hơn vật.",
                    "Ảnh ảo, ngược chiều và nhỏ hơn vật.",
                    "Ảnh thật, cùng chiều với vật."
                ],
                "correct": 0,
                "explanation": "Khi đặt vật ngoài khoảng tiêu cự của thấu kính hội tụ, thấu kính luôn cho ảnh thật, ngược chiều với vật."
            },
            {
                "id": "p9_u3_mc_03", "conceptId": "c9_mat_can",
                "type": "multiple_choice", "level": "Vận dụng",
                "question": "Người bị tật cận thị khi nhìn các vật ở xa mắt thì ảnh của vật hiện ra ở đâu, và cần đeo kính gì để khắc phục?",
                "options": [
                    "Ảnh hiện ở trước màng lưới; cần đeo kính phân kì.",
                    "Ảnh hiện ở sau màng lưới; cần đeo kính hội tụ.",
                    "Ảnh hiện đúng trên màng lưới; không cần đeo kính.",
                    "Ảnh hiện ở trước màng lưới; cần đeo kính hai tròng hội tụ."
                ],
                "correct": 0,
                "explanation": "Mắt cận có tiêu cự ngắn, ảnh của vật ở xa hội tụ ở trước màng lưới. Để nhìn rõ vật ở xa, người cận thị cần đeo kính phân kì thích hợp."
            }
        ]
    }
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { QUESTION_BANK_9 };
}
