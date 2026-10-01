/**
 * Wayground Physics 9 - Master Question Bank
 * Standard: GDPT 2018 - Chuẩn kiến thức THCS môn KHTN / Phân môn Vật Lí 9
 * Bao gồm 4 Chuyên đề trọng tâm: Điện học, Điện từ học, Quang học, Bảo toàn năng lượng
 * Chuẩn hóa 3 Dạng thức thi Bộ GD&ĐT:
 * - Phần I: Trắc nghiệm 4 lựa chọn ABCD (multiple_choice)
 * - Phần II: Trắc nghiệm Đúng/Sai 4 ý (multi_tf)
 * - Phần III: Trả lời ngắn / Điền số (short_answer)
 */

const QUESTION_BANK_9 = {
    "u9_dien_hoc": {
        "title": "Chương 1: Điện Học (Định luật Ôm, Công suất điện & Định luật Joule-Lenz)",
        "questions": [
            {
                "id": "p9_u1_mc_01",
                "conceptId": "c9_dinh_luat_om",
                "type": "multiple_choice",
                "level": "Nhận biết",
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
                "id": "p9_u1_mc_02",
                "conceptId": "c9_dien_tro_day_dan",
                "type": "multiple_choice",
                "level": "Nhận biết",
                "question": "Một dây dẫn hình trụ đồng chất có chiều dài $l$, tiết diện $S$, điện trở suất $\\rho$. Công thức tính điện trở $R$ của dây dẫn là",
                "options": [
                    "$R = \\rho \\frac{l}{S}$",
                    "$R = \\frac{l}{\\rho S}$",
                    "$R = \\rho \\frac{S}{l}$",
                    "$R = \\frac{S}{\\rho l}$"
                ],
                "correct": 0,
                "explanation": "Điện trở dây dẫn: $R = \\rho \\frac{l}{S}$ (tỉ lệ thuận với chiều dài $l$ và tỉ lệ nghịch với tiết diện $S$)."
            },
            {
                "id": "p9_u1_mc_03",
                "conceptId": "c9_mach_noi_tiep",
                "type": "multiple_choice",
                "level": "Thông hiểu",
                "question": "Trong đoạn mạch gồm hai điện trở $R_1$ và $R_2$ mắc nối tiếp, công thức điện trở tương đương $R_{td}$ là",
                "options": [
                    "$R_{td} = R_1 + R_2$",
                    "$R_{td} = \\frac{R_1 R_2}{R_1 + R_2}$",
                    "$R_{td} = \\frac{1}{R_1} + \\frac{1}{R_2}$",
                    "$R_{td} = R_1 - R_2$"
                ],
                "correct": 0,
                "explanation": "Mắc nối tiếp: $R_{td} = R_1 + R_2$ và $I = I_1 = I_2$."
            },
            {
                "id": "p9_u1_mc_04",
                "conceptId": "c9_mach_song_song",
                "type": "multiple_choice",
                "level": "Thông hiểu",
                "question": "Hai điện trở $R_1 = 10\\,\\Omega$ và $R_2 = 15\\,\\Omega$ mắc song song vào nguồn điện có hiệu điện thế $U = 12\\,\\text{V}$. Cường độ dòng điện chạy trong mạch chính là",
                "options": [
                    "2,0 A",
                    "0,8 A",
                    "1,2 A",
                    "5,0 A"
                ],
                "correct": 0,
                "explanation": "$R_{td} = \\frac{R_1 R_2}{R_1 + R_2} = \\frac{10 \\times 15}{10 + 15} = 6\\,\\Omega$. Dòng điện mạch chính: $I = \\frac{U}{R_{td}} = \\frac{12}{6} = 2\\,\\text{A}$."
            },
            {
                "id": "p9_u1_mc_05",
                "conceptId": "c9_cong_suat_dien",
                "type": "multiple_choice",
                "level": "Nhận biết",
                "question": "Công thức tính công suất điện $P$ của một đoạn mạch tiêu thụ điện là",
                "options": [
                    "$P = U \\cdot I = I^2 R = \\frac{U^2}{R}$",
                    "$P = \\frac{U}{I}$",
                    "$P = U \\cdot I \\cdot t$",
                    "$P = I \\cdot R$"
                ],
                "correct": 0,
                "explanation": "Công suất điện: $P = U \\cdot I = I^2 R = \\frac{U^2}{R}$ (đơn vị Watt: W)."
            },
            {
                "id": "p9_u1_mc_06",
                "conceptId": "c9_dien_nang_tieu_thu",
                "type": "multiple_choice",
                "level": "Thông hiểu",
                "question": "Điện năng tiêu thụ $A$ của một đoạn mạch được đo bằng dụng cụ nào?",
                "options": [
                    "Công tơ điện.",
                    "Ampe kế.",
                    "Vôn kế.",
                    "Nhiệt kế điện tử."
                ],
                "correct": 0,
                "explanation": "Điện năng tiêu thụ được đo bằng công tơ điện (đơn vị thực tế là số điện, $1\\,\\text{kWh} = 3{,}6 \\times 10^6\\,\\text{J}$)."
            },
            {
                "id": "p9_u1_mc_07",
                "conceptId": "c9_dinh_luat_joule_lenz",
                "type": "multiple_choice",
                "level": "Nhận biết",
                "question": "Định luật Joule - Lenz cho biết nhiệt lượng tỏa ra trên dây dẫn tỉ lệ thuận với",
                "options": [
                    "Bình phương cường độ dòng điện, điện trở và thời gian: $Q = I^2 R t$.",
                    "Cường độ dòng điện bậc nhất: $Q = I R t$.",
                    "Hiệu điện thế và thời gian: $Q = U t$.",
                    "Tỉ số giữa điện trở và cường độ dòng điện."
                ],
                "correct": 0,
                "explanation": "Định luật Joule - Lenz: $Q = I^2 R t$."
            },
            {
                "id": "p9_u1_mc_08",
                "conceptId": "c9_an_toan_dien",
                "type": "multiple_choice",
                "level": "Thông hiểu",
                "question": "Để đảm bảo an toàn khi sử dụng điện trong gia đình, dây nối đất (tiếp địa) thường được nối với",
                "options": [
                    "Vỏ kim loại của các thiết bị điện như máy giặt, tủ lạnh, lò vi sóng.",
                    "Dây pha (dây nóng) của nguồn điện.",
                    "Bóng đèn chiếu sáng.",
                    "Công tắc nguồn điện."
                ],
                "correct": 0,
                "explanation": "Dây tiếp địa nối vỏ kim loại của thiết bị xuống đất, nếu có dòng rò rỉ ra vỏ thì dòng điện sẽ truyền xuống đất, tránh giật điện người dùng."
            },
            {
                "id": "p9_u1_tf_01",
                "conceptId": "c9_joule_lenz_tf",
                "type": "multi_tf",
                "level": "Thông hiểu",
                "context": "Xét định luật Joule - Lenz và tác dụng nhiệt của dòng điện trong đời sống:",
                "statements": [
                    { "text": "Nhiệt lượng tỏa ra trên dây dẫn tỉ lệ thuận với bình phương cường độ dòng điện: Q = I²Rt.", "isCorrect": true },
                    { "text": "Nếu cường độ dòng điện tăng gấp 2 lần thì nhiệt lượng tỏa ra trong cùng thời gian sẽ tăng gấp 4 lần.", "isCorrect": true },
                    { "text": "Cầu chì bảo vệ mạch điện hoạt động dựa trên tác dụng từ của dòng điện.", "isCorrect": false },
                    { "text": "Dây mai-so của bàn là điện làm bằng hợp kim có điện trở suất lớn để tỏa nhiệt tốt.", "isCorrect": true }
                ],
                "explanation": "Cầu chì hoạt động dựa trên tác dụng nhiệt nóng chảy của chì khi dòng điện quá tải, KHÔNG PHẢI tác dụng từ (mệnh đề 3 sai)."
            },
            {
                "id": "p9_u1_tf_02",
                "conceptId": "c9_bong_den_tf",
                "type": "multi_tf",
                "level": "Vận dụng",
                "context": "Một bóng đèn sợi đốt có ghi 220 V - 100 W được mắc vào mạng điện đúng hiệu điện thế định mức 220 V:",
                "statements": [
                    { "text": "Điện trở của dây tóc bóng đèn khi sáng bình thường là 484 Ω.", "isCorrect": true },
                    { "text": "Cường độ dòng điện qua bóng đèn xấp xỉ 0,455 A.", "isCorrect": true },
                    { "text": "Nếu mắc bóng đèn vào mạng điện 110 V thì công suất bóng đèn giảm đi một nửa (còn 50 W).", "isCorrect": false },
                    { "text": "Nếu thắp sáng đèn liên tục 10 giờ thì điện năng tiêu thụ là 1 kWh (1 số điện).", "isCorrect": true }
                ],
                "explanation": "$R = U^2/P = 220^2/100 = 484\\,\\Omega$. Khi $U$ giảm còn 110V ($U$ giảm 2 lần) thì $P = U^2/R$ giảm 4 lần (còn 25 W, mệnh đề 3 sai)."
            },
            {
                "id": "p9_u1_sa_01",
                "conceptId": "c9_tinh_dien_tro_tuong_duong",
                "type": "short_answer",
                "level": "Thông hiểu",
                "question": "Hai điện trở $R_1 = 20\\,\\Omega$ và $R_2 = 30\\,\\Omega$ được mắc song song với nhau. Điện trở tương đương của đoạn mạch bằng bao nhiêu Ôm ($\\Omega$)?",
                "answer": "12",
                "unit": "Ω",
                "tolerance": 0.05,
                "explanation": "$R_{td} = \\frac{R_1 R_2}{R_1 + R_2} = \\frac{20 \\times 30}{20 + 30} = \\frac{600}{50} = 12\\,\\Omega$."
            },
            {
                "id": "p9_u1_sa_02",
                "conceptId": "c9_tinh_dien_nang",
                "type": "short_answer",
                "level": "Vận dụng",
                "question": "Một bếp điện có công suất $P = 1000\\,\\text{W}$ hoạt động liên tục trong thời gian $t = 3\\,\\text{giờ}$. Lượng điện năng tiêu thụ của bếp bằng bao nhiêu số điện ($\\text{kWh}$)?",
                "answer": "3.0",
                "unit": "kWh",
                "tolerance": 0.05,
                "explanation": "$A = P \\cdot t = 1\\,\\text{kW} \\times 3\\,\\text{h} = 3\\,\\text{kWh}$."
            }
        ]
    },

    "u9_dien_tu_hoc": {
        "title": "Chương 2: Điện Từ Học (Từ trường, Lực điện từ, Cảm ứng điện từ & Máy biến thế)",
        "questions": [
            {
                "id": "p9_u2_mc_01",
                "conceptId": "c9_tu_truong_ong_day",
                "type": "multiple_choice",
                "level": "Nhận biết",
                "question": "Để xác định chiều của đường sức từ trong lòng một ống dây có dòng điện chạy qua, ta dùng",
                "options": [
                    "Quy tắc nắm tay phải.",
                    "Quy tắc bàn tay trái.",
                    "Quy tắc vặn đinh ốc bàn tay trái.",
                    "Định luật bảo toàn điện tích."
                ],
                "correct": 0,
                "explanation": "Quy tắc nắm tay phải: Nắm bàn tay phải sao cho 4 ngón tay hướng theo chiều dòng điện qua các vòng dây, ngón cái choãi ra chỉ chiều của đường sức từ trong lòng ống dây."
            },
            {
                "id": "p9_u2_mc_02",
                "conceptId": "c9_luc_dien_tu",
                "type": "multiple_choice",
                "level": "Thông hiểu",
                "question": "Lực điện từ tác dụng lên đoạn dây dẫn mang dòng điện đặt vuông góc trong từ trường tuân theo quy tắc nào?",
                "options": [
                    "Quy tắc bàn tay trái.",
                    "Quy tắc nắm tay phải.",
                    "Định luật khúc xạ ánh sáng.",
                    "Nguyên lý Archimedes."
                ],
                "correct": 0,
                "explanation": "Quy tắc bàn tay trái: Đặt bàn tay trái sao cho các đường sức từ hướng vào lòng bàn tay, chiều từ cổ tay đến ngón giữa theo chiều dòng điện thì ngón cái choãi ra 90 độ chỉ chiều lực điện từ."
            },
            {
                "id": "p9_u2_mc_03",
                "conceptId": "c9_cam_ung_dien_tu",
                "type": "multiple_choice",
                "level": "Nhận biết",
                "question": "Hiện tượng xuất hiện dòng điện cảm ứng trong cuộn dây dẫn kín được gọi là hiện tượng cảm ứng điện từ. Điều kiện xuất hiện dòng điện này là",
                "options": [
                    "Số đường sức từ xuyên qua tiết diện của cuộn dây biến thiên (tăng hoặc giảm).",
                    "Cuộn dây đặt trong từ trường đều không đổi.",
                    "Nối cuộn dây vào một nguồn điện pin không đổi.",
                    "Lõi sắt của cuộn dây đứng yên."
                ],
                "correct": 0,
                "explanation": "Dòng điện cảm ứng xuất hiện trong cuộn dây dẫn kín khi số đường sức từ xuyên qua tiết diện cuộn dây biến thiên."
            },
            {
                "id": "p9_u2_mc_04",
                "conceptId": "c9_may_phat_dien_xoay_chieu",
                "type": "multiple_choice",
                "level": "Thông hiểu",
                "question": "Hai bộ phận chính của một máy phát điện xoay chiều là",
                "options": [
                    "Nam châm (tạo từ trường) và cuộn dây dẫn (tạo dòng điện cảm ứng).",
                    "Cuộn sơ cấp và cuộn thứ cấp.",
                    "Bộ góp điện và chổi quét than.",
                    "Lõi thép và biến trở."
                ],
                "correct": 0,
                "explanation": "Máy phát điện xoay chiều có 2 bộ phận chính: Roto (phần quay) và Stato (phần đứng yên), gồm nam châm và cuộn dây dẫn."
            },
            {
                "id": "p9_u2_mc_05",
                "conceptId": "c9_may_bien_the",
                "type": "multiple_choice",
                "level": "Thông hiểu",
                "question": "Công thức biến đổi hiệu điện thế của máy biến thế lí tưởng có số vòng cuộn sơ cấp $N_1$ và thứ cấp $N_2$ là",
                "options": [
                    "$\\frac{U_1}{U_2} = \\frac{N_1}{N_2}$",
                    "$\\frac{U_1}{U_2} = \\frac{N_2}{N_1}$",
                    "$U_1 \\cdot U_2 = N_1 \\cdot N_2$",
                    "$\\frac{U_1}{N_1} = \\frac{N_2}{U_2}$"
                ],
                "correct": 0,
                "explanation": "Hệ thức máy biến thế: $\\frac{U_1}{U_2} = \\frac{N_1}{N_2}$. Nếu $N_2 > N_1$ là máy tăng thế, $N_2 < N_1$ là máy hạ thế."
            },
            {
                "id": "p9_u2_mc_06",
                "conceptId": "c9_hao_phi_truyen_tai",
                "type": "multiple_choice",
                "level": "Thông hiểu",
                "question": "Để giảm hao phí do tỏa nhiệt trên đường dây truyền tải điện năng đi xa, biện pháp tốt nhất và kinh tế nhất là",
                "options": [
                    "Tăng hiệu điện thế ở hai đầu đường dây truyền tải trước khi truyền đi xa.",
                    "Giảm hiệu điện thế xuống mức an toàn.",
                    "Tăng tiết diện dây dẫn lên nhiều lần.",
                    "Chọn kim loại bạc đắt tiền để làm dây dẫn."
                ],
                "correct": 0,
                "explanation": "Công suất hao phí $P_{hp} = R \\frac{P^2}{U^2}$. Tăng $U$ lên $n$ lần thì hao phí giảm $n^2$ lần, đây là giải pháp kinh tế nhất."
            },
            {
                "id": "p9_u2_mc_07",
                "conceptId": "c9_dong_dien_xoay_chieu",
                "type": "multiple_choice",
                "level": "Nhận biết",
                "question": "Dòng điện xoay chiều có các tác dụng nào sau đây?",
                "options": [
                    "Tác dụng nhiệt, tác dụng phát sáng và tác dụng từ.",
                    "Chỉ có tác dụng nhiệt.",
                    "Chỉ có tác dụng hóa học mạ điện một chiều.",
                    "Chỉ có tác dụng sinh lí."
                ],
                "correct": 0,
                "explanation": "Dòng điện xoay chiều có tác dụng nhiệt (bàn là, nồi cơm), tác dụng quang (đèn), tác dụng từ (nam châm điện) và tác dụng sinh lí."
            },
            {
                "id": "p9_u2_mc_08",
                "conceptId": "c9_tinh_may_bien_the",
                "type": "multiple_choice",
                "level": "Vận dụng",
                "question": "Một máy biến thế có cuộn sơ cấp $N_1 = 500$ vòng, cuộn thứ cấp $N_2 = 2500$ vòng. Khi đặt vào cuộn sơ cấp hiệu điện thế xoay chiều $U_1 = 220\\,\\text{V}$ thì hiệu điện thế ở hai đầu cuộn thứ cấp là",
                "options": [
                    "1100 V",
                    "44 V",
                    "550 V",
                    "2200 V"
                ],
                "correct": 0,
                "explanation": "$U_2 = U_1 \\frac{N_2}{N_1} = 220 \\times \\frac{2500}{500} = 220 \\times 5 = 1100\\,\\text{V}$."
            },
            {
                "id": "p9_u2_tf_01",
                "conceptId": "c9_truyen_tai_dien_nang_tf",
                "type": "multi_tf",
                "level": "Thông hiểu",
                "context": "Về vấn đề giảm hao phí tỏa nhiệt khi truyền tải điện năng đi xa bằng đường dây cao thế:",
                "statements": [
                    { "text": "Công suất hao phí tỉ lệ nghịch với bình phương hiệu điện thế truyền tải: P_hp = R.P²/U².", "isCorrect": true },
                    { "text": "Biện pháp kinh tế nhất là dùng máy biến thế để tăng hiệu điện thế lên hàng trăm kV trước khi truyền đi.", "isCorrect": true },
                    { "text": "Nếu tăng hiệu điện thế lên 10 lần thì công suất hao phí do tỏa nhiệt trên đường dây giảm 100 lần.", "isCorrect": true },
                    { "text": "Máy biến thế có thể làm tăng hiệu điện thế của nguồn pin điện một chiều (DC).", "isCorrect": false }
                ],
                "explanation": "Máy biến thế hoạt động dựa trên cảm ứng điện từ nên CHỈ HOẠT ĐỘNG VỚI DÒNG ĐIỆN XOAY CHIỀU, không hoạt động với nguồn pin một chiều (mệnh đề 4 sai)."
            },
            {
                "id": "p9_u2_tf_02",
                "conceptId": "c9_nam_cham_dien_tf",
                "type": "multi_tf",
                "level": "Vận dụng",
                "context": "Xét một nam châm điện gồm ống dây có lõi sắt non được cấp điện:",
                "statements": [
                    { "text": "Từ tính của nam châm điện tăng khi tăng cường độ dòng điện qua các vòng dây.", "isCorrect": true },
                    { "text": "Từ tính của nam châm điện tăng khi tăng số vòng dây của ống dây.", "isCorrect": true },
                    { "text": "Lõi sắt non có tác dụng làm tăng mạnh từ trường của ống dây.", "isCorrect": true },
                    { "text": "Khi ngắt dòng điện, lõi sắt non vẫn giữ được từ tính lâu dài như thép tôi cứng.", "isCorrect": false }
                ],
                "explanation": "Lõi sắt non mất sạch từ tính ngay khi ngắt dòng điện (thép mới giữ được từ tính lâu để làm nam châm vĩnh cửu, mệnh đề 4 sai)."
            },
            {
                "id": "p9_u2_sa_01",
                "conceptId": "c9_tinh_may_ha_the",
                "type": "short_answer",
                "level": "Thông hiểu",
                "question": "Một máy hạ thế dùng trong sạc điện thoại có cuộn sơ cấp $N_1 = 2200$ vòng cắm vào mạng điện $U_1 = 220\\,\\text{V}$. Cuộn thứ cấp đưa ra hiệu điện thế $U_2 = 5\\,\\text{V}$. Số vòng dây của cuộn thứ cấp $N_2$ bằng bao nhiêu vòng?",
                "answer": "50",
                "unit": "vòng",
                "tolerance": 0.05,
                "explanation": "$N_2 = N_1 \\frac{U_2}{U_1} = 2200 \\times \\frac{5}{220} = 50$ vòng."
            },
            {
                "id": "p9_u2_sa_02",
                "conceptId": "c9_tinh_giam_hao_phi",
                "type": "short_answer",
                "level": "Vận dụng",
                "question": "Cùng một công suất điện truyền đi trên một đường dây dẫn, nếu dùng máy biến thế để tăng hiệu điện thế từ $20\\,\\text{kV}$ lên $100\\,\\text{kV}$ thì công suất hao phí do tỏa nhiệt trên dây dẫn sẽ giảm đi bao nhiêu lần?",
                "answer": "25",
                "unit": "lần",
                "tolerance": 0.05,
                "explanation": "Hiệu điện thế tăng: $100/20 = 5$ lần. Công suất hao phí tỉ lệ nghịch với bình phương $U$ nên giảm: $5^2 = 25$ lần."
            }
        ]
    },

    "u9_quang_hoc": {
        "title": "Chương 3: Quang Học (Khúc xạ, Thấu kính hội tụ, Phân kì, Mắt & Kính)",
        "questions": [
            {
                "id": "p9_u3_mc_01",
                "conceptId": "c9_khuc_xa_anh_sang",
                "type": "multiple_choice",
                "level": "Nhận biết",
                "question": "Khi tia sáng truyền từ không khí vào nước, góc khúc xạ $r$ so với góc tới $i$ như thế nào?",
                "options": [
                    "Góc khúc xạ nhỏ hơn góc tới ($r < i$).",
                    "Góc khúc xạ lớn hơn góc tới ($r > i$).",
                    "Góc khúc xạ luôn bằng góc tới ($r = i$).",
                    "Góc khúc xạ luôn bằng 90 độ."
                ],
                "correct": 0,
                "explanation": "Khi truyền từ không khí sang nước (môi trường chiết quang hơn), tia khúc xạ bị lệch lại gần pháp tuyến nên $r < i$."
            },
            {
                "id": "p9_u3_mc_02",
                "conceptId": "c9_thau_kinh_hoi_tu_dac_diem",
                "type": "multiple_choice",
                "level": "Nhận biết",
                "question": "Thấu kính hội tụ có phần rìa ngoài như thế nào so với phần giữa?",
                "options": [
                    "Phần rìa mỏng hơn phần giữa.",
                    "Phần rìa dày hơn phần giữa.",
                    "Phần rìa và phần giữa có độ dày bằng nhau.",
                    "Phần rìa lõm sâu vào trong."
                ],
                "correct": 0,
                "explanation": "Thấu kính hội tụ là thấu kính rìa mỏng (phần rìa mỏng hơn phần giữa). Thấu kính phân kì là thấu kính rìa dày."
            },
            {
                "id": "p9_u3_mc_03",
                "conceptId": "c9_anh_thau_kinh_hoi_tu",
                "type": "multiple_choice",
                "level": "Thông hiểu",
                "question": "Vật sáng đặt ngoài khoảng tiêu cự của thấu kính hội tụ ($d > f$) luôn cho",
                "options": [
                    "Ảnh thật, ngược chiều với vật.",
                    "Ảnh ảo, cùng chiều và lớn hơn vật.",
                    "Ảnh ảo, ngược chiều và nhỏ hơn vật.",
                    "Ảnh thật, cùng chiều với vật."
                ],
                "correct": 0,
                "explanation": "Khi $d > f$, thấu kính hội tụ luôn cho ảnh thật, ngược chiều với vật. Khi $d < f$ mới cho ảnh ảo cùng chiều lớn hơn vật."
            },
            {
                "id": "p9_u3_mc_04",
                "conceptId": "c9_anh_thau_kinh_phan_ki",
                "type": "multiple_choice",
                "level": "Thông hiểu",
                "question": "Ảnh của một vật sáng tạo bởi thấu kính phân kì luôn có tính chất nào?",
                "options": [
                    "Luôn là ảnh ảo, cùng chiều và nhỏ hơn vật, nằm trong khoảng tiêu cự.",
                    "Luôn là ảnh thật, ngược chiều và lớn hơn vật.",
                    "Có thể là ảnh thật hoặc ảnh ảo tùy khoảng cách.",
                    "Luôn là ảnh ảo cùng chiều và lớn hơn vật."
                ],
                "correct": 0,
                "explanation": "Thấu kính phân kì với vật thật luôn cho ảnh ảo, cùng chiều và nhỏ hơn vật, nằm trong khoảng tiêu cự của thấu kính."
            },
            {
                "id": "p9_u3_mc_05",
                "conceptId": "c9_mat_can_thi",
                "type": "multiple_choice",
                "level": "Thông hiểu",
                "question": "Người bị tật cận thị khi nhìn các vật ở xa mắt thì ảnh của vật hiện ra ở đâu, và cần đeo kính gì để khắc phục?",
                "options": [
                    "Ảnh hiện ở trước màng lưới; cần đeo kính phân kì.",
                    "Ảnh hiện ở sau màng lưới; cần đeo kính hội tụ.",
                    "Ảnh hiện đúng trên màng lưới; không cần đeo kính.",
                    "Ảnh hiện ở trước màng lưới; cần đeo kính hai tròng hội tụ."
                ],
                "correct": 0,
                "explanation": "Mắt cận có tiêu cự ngắn, ảnh của vật ở xa hội tụ ở trước màng lưới. Khắc phục bằng cách đeo kính phân kì thích hợp."
            },
            {
                "id": "p9_u3_mc_06",
                "conceptId": "c9_mat_lao_thi",
                "type": "multiple_choice",
                "level": "Thông hiểu",
                "question": "Người già bị tật mắt lão khi nhìn các vật ở gần thì cơ mi co giãn kém, điểm cực cận dời xa mắt. Để đọc sách rõ, người lão thị cần đeo kính gì?",
                "options": [
                    "Kính hội tụ (kính lão).",
                    "Kính phân kì.",
                    "Kính râm chống chói.",
                    "Kính lúp phóng đại 100 lần."
                ],
                "correct": 0,
                "explanation": "Mắt lão nhìn gần kém do điểm cực cận lùi ra xa mắt, cần đeo kính hội tụ thích hợp để nhìn rõ vật ở gần."
            },
            {
                "id": "p9_u3_mc_07",
                "conceptId": "c9_kinh_lup",
                "type": "multiple_choice",
                "level": "Nhận biết",
                "question": "Kính lúp là một thấu kính hội tụ có tiêu cự $f$ như thế nào, dùng để quan sát các vật nhỏ?",
                "options": [
                    "Tiêu cự ngắn (thường $f < 25\\,\\text{cm}$).",
                    "Tiêu cự rất dài hàng chục mét.",
                    "Tiêu cự âm.",
                    "Tiêu cự thay đổi liên tục."
                ],
                "correct": 0,
                "explanation": "Kính lúp là thấu kính hội tụ có tiêu cự ngắn, dùng để quan sát các vật nhỏ dưới dạng ảnh ảo phóng đại lớn hơn vật."
            },
            {
                "id": "p9_u3_mc_08",
                "conceptId": "c9_cong_thuc_thau_kinh",
                "type": "multiple_choice",
                "level": "Vận dụng",
                "question": "Một vật sáng đặt cách thấu kính hội tụ một khoảng $d = 2f$ (gấp đôi tiêu cự). Ảnh tạo bởi thấu kính có đặc điểm gì?",
                "options": [
                    "Ảnh thật, ngược chiều và có độ cao bằng đúng độ cao của vật ($d' = 2f$).",
                    "Ảnh ảo, cùng chiều và lớn gấp đôi vật.",
                    "Ảnh thật, ngược chiều và nhỏ bằng nửa vật.",
                    "Không thu được ảnh (ảnh ở vô cực)."
                ],
                "correct": 0,
                "explanation": "Khi đặt vật ở khoảng cách $d = 2f$, ta thu được ảnh thật ngược chiều, cách thấu kính $d' = 2f$ và có kích thước bằng đúng vật."
            },
            {
                "id": "p9_u3_tf_01",
                "conceptId": "c9_thau_kinh_hoi_tu_tf",
                "type": "multi_tf",
                "level": "Thông hiểu",
                "context": "Xét một thấu kính hội tụ có tiêu cự f = 15 cm:",
                "statements": [
                    { "text": "Tia sáng đi qua quang tâm O tiếp tục truyền thẳng không đổi hướng.", "isCorrect": true },
                    { "text": "Tia sáng song song với trục chính cho tia ló đi qua tiêu điểm chính F'.", "isCorrect": true },
                    { "text": "Đặt vật sáng cách thấu kính 10 cm ta thu được ảnh thật ngược chiều trên màn chắn.", "isCorrect": false },
                    { "text": "Đặt vật sáng cách thấu kính 30 cm ta thu được ảnh thật cách thấu kính 30 cm.", "isCorrect": true }
                ],
                "explanation": "Khi vật cách thấu kính 10 cm ($d < f = 15\\,\\text{cm}$), thấu kính cho ảnh ẢO cùng chiều lớn hơn vật, không hứng được trên màn (mệnh đề 3 sai)."
            },
            {
                "id": "p9_u3_tf_02",
                "conceptId": "c9_mat_va_may_anh_tf",
                "type": "multi_tf",
                "level": "Vận dụng",
                "context": "So sánh giữa mắt người và máy ảnh cơ bản:",
                "statements": [
                    { "text": "Thể thủy tinh của mắt đóng vai trò như thấu kính hội tụ (vật kính máy ảnh).", "isCorrect": true },
                    { "text": "Màng lưới (võng mạc) của mắt đóng vai trò như màn hứng ảnh (phim hoặc cảm biến).", "isCorrect": true },
                    { "text": "Ảnh của vật quan sát hiện trên màng lưới của mắt là ảnh ảo, cùng chiều với vật.", "isCorrect": false },
                    { "text": "Mắt điều tiết để nhìn rõ vật ở các khoảng cách khác nhau bằng cách thay đổi độ cong của thể thủy tinh.", "isCorrect": true }
                ],
                "explanation": "Ảnh thu được trên màng lưới của mắt là ẢNH THẬT, NGƯỢC CHIỀU và nhỏ hơn vật (màng não sau đó xử lý cho ta cảm giác nhìn thuận chiều, mệnh đề 3 sai)."
            },
            {
                "id": "p9_u3_sa_01",
                "conceptId": "c9_tinh_do_boi_giac",
                "type": "short_answer",
                "level": "Thông hiểu",
                "question": "Một kính lúp có số bội giác ghi trên vành là $G = 5\\text{X}$. Tiêu cự $f$ của kính lúp này bằng bao nhiêu centimet (cm)?",
                "answer": "5",
                "unit": "cm",
                "tolerance": 0.05,
                "explanation": "$G = \\frac{25}{f} \\Rightarrow f = \\frac{25}{G} = \\frac{25}{5} = 5\\,\\text{cm}$."
            },
            {
                "id": "p9_u3_sa_02",
                "conceptId": "c9_tinh_vi_tri_anh",
                "type": "short_answer",
                "level": "Vận dụng",
                "question": "Một thấu kính hội tụ có tiêu cự $f = 20\\,\\text{cm}$. Vật sáng $AB$ đặt vuông góc với trục chính cách thấu kính một đoạn $d = 40\\,\\text{cm}$. Khoảng cách từ ảnh $A'B'$ đến thấu kính $d'$ bằng bao nhiêu centimet (cm)?",
                "answer": "40",
                "unit": "cm",
                "tolerance": 0.05,
                "explanation": "Vì $d = 2f = 40\\,\\text{cm}$ nên ảnh thật $A'B'$ cách thấu kính $d' = 2f = 40\\,\\text{cm}$."
            }
        ]
    },

    "u9_nang_luong": {
        "title": "Chương 4: Sự Chuyển Hóa & Định Luật Bảo Toàn Năng Lượng",
        "questions": [
            {
                "id": "p9_u4_mc_01",
                "conceptId": "c9_dinh_luat_bao_toan_nang_luong",
                "type": "multiple_choice",
                "level": "Nhận biết",
                "question": "Định luật bảo toàn và chuyển hóa năng lượng phát biểu rằng năng lượng",
                "options": [
                    "Không tự nhiên sinh ra cũng không tự nhiên mất đi, chỉ chuyển hóa từ dạng này sang dạng khác hoặc truyền từ vật này sang vật khác.",
                    "Tự động tăng lên khi có ma sát tỏa nhiệt.",
                    "Bị tiêu biến hoàn toàn khi thực hiện công.",
                    "Luôn được bảo toàn và không bao giờ chuyển hóa thành nhiệt năng."
                ],
                "correct": 0,
                "explanation": "Năng lượng không tự nhiên sinh ra hay mất đi, chỉ chuyển từ dạng này sang dạng khác hoặc truyền từ vật này sang vật khác."
            },
            {
                "id": "p9_u4_mc_02",
                "conceptId": "c9_chuyen_hoa_nang_luong_pin",
                "type": "multiple_choice",
                "level": "Thông hiểu",
                "question": "Khi một pin điện hóa hoạt động cung cấp điện cho bóng đèn pin phát sáng, năng lượng đã chuyển hóa chủ yếu theo chu trình nào?",
                "options": [
                    "Hóa năng $\\rightarrow$ Điện năng $\\rightarrow$ Quang năng và Nhiệt năng.",
                    "Cơ năng $\\rightarrow$ Điện năng $\\rightarrow$ Hóa năng.",
                    "Quang năng $\\rightarrow$ Hóa năng $\\rightarrow$ Nhiệt năng.",
                    "Hạt nhân $\\rightarrow$ Quang năng $\\rightarrow$ Cơ năng."
                ],
                "correct": 0,
                "explanation": "Hóa năng trong pin chuyển thành điện năng, sau đó điện năng qua dây tóc bóng đèn chuyển thành quang năng và nhiệt năng."
            },
            {
                "id": "p9_u4_mc_03",
                "conceptId": "c9_nha_may_thuy_dien",
                "type": "multiple_choice",
                "level": "Thông hiểu",
                "question": "Trong nhà máy thủy điện, dạng năng lượng nào của dòng nước được chuyển hóa thành điện năng?",
                "options": [
                    "Thế năng trọng trường của nước trên cao $\\rightarrow$ Động năng của dòng nước $\\rightarrow$ Cơ năng của tuabin $\\rightarrow$ Điện năng.",
                    "Nhiệt năng $\\rightarrow$ Hóa năng $\\rightarrow$ Điện năng.",
                    "Quang năng $\\rightarrow$ Động năng $\\rightarrow$ Điện năng.",
                    "Hóa năng $\\rightarrow$ Cơ năng $\\rightarrow$ Điện năng."
                ],
                "correct": 0,
                "explanation": "Thế năng dòng nước trên đập cao chuyển thành động năng dòng chảy quay tuabin (cơ năng), máy phát điện biến cơ năng thành điện năng."
            },
            {
                "id": "p9_u4_mc_04",
                "conceptId": "c9_nha_may_nhiet_dien",
                "type": "multiple_choice",
                "level": "Thông hiểu",
                "question": "Trong nhà máy nhiệt điện đốt than, chu trình biến đổi năng lượng chính là",
                "options": [
                    "Hóa năng (than đá) $\\rightarrow$ Nhiệt năng (hơi nước) $\\rightarrow$ Cơ năng (tuabin) $\\rightarrow$ Điện năng.",
                    "Quang năng $\\rightarrow$ Điện năng $\\rightarrow$ Cơ năng.",
                    "Thế năng $\\rightarrow$ Hóa năng $\\rightarrow$ Điện năng.",
                    "Hạt nhân $\\rightarrow$ Động năng $\\rightarrow$ Điện năng."
                ],
                "correct": 0,
                "explanation": "Đốt than (hóa năng) sinh nhiệt đun sôi nước (nhiệt năng), hơi nước phụt quay tuabin (cơ năng), máy phát sinh điện (điện năng)."
            },
            {
                "id": "p9_u4_mc_05",
                "conceptId": "c9_nang_luong_tai_tao",
                "type": "multiple_choice",
                "level": "Nhận biết",
                "question": "Nguồn năng lượng nào sau đây là nguồn năng lượng tái tạo sạch thân thiện với môi trường?",
                "options": [
                    "Năng lượng gió, năng lượng mặt trời và thủy triều.",
                    "Than đá và dầu mỏ.",
                    "Khí đốt thiên nhiên.",
                    "Nhiên liệu hạt nhân Urani."
                ],
                "correct": 0,
                "explanation": "Năng lượng gió, mặt trời, thủy triều, địa nhiệt là nguồn năng lượng tái tạo sạch không phát thải khí nhà kính."
            },
            {
                "id": "p9_u4_mc_06",
                "conceptId": "c9_dong_co_vinh_cuu",
                "type": "multiple_choice",
                "level": "Thông hiểu",
                "question": "Con người không thể chế tạo được một động cơ vĩnh cửu hoạt động liên tục mà không cần cung cấp năng lượng từ bên ngoài vì",
                "options": [
                    "Vi phạm định luật bảo toàn và chuyển hóa năng lượng (không thể tự sinh ra năng lượng).",
                    "Do kỹ thuật luyện kim chưa đủ hiện đại.",
                    "Do các vật thể quá nặng.",
                    "Do ma sát trong chân không quá lớn."
                ],
                "correct": 0,
                "explanation": "Động cơ vĩnh cửu không thể tồn tại vì trái với định luật bảo toàn năng lượng: không có thiết bị nào có thể sinh công mà không tiêu tốn năng lượng."
            },
            {
                "id": "p9_u4_mc_07",
                "conceptId": "c9_hieu_suat_nang_luong",
                "type": "multiple_choice",
                "level": "Thông hiểu",
                "question": "Một động cơ điện tiêu thụ $1000\\,\\text{J}$ điện năng, trong đó chuyển hóa thành $800\\,\\text{J}$ cơ năng có ích để kéo hàng. Hiệu suất của động cơ là",
                "options": [
                    "80%",
                    "20%",
                    "125%",
                    "800%"
                ],
                "correct": 0,
                "explanation": "Hiệu suất: $H = \\frac{A_{\\text{ích}}}{A_{\\text{tp}}} \\times 100\\% = \\frac{800}{1000} \\times 100\\% = 80\\%$."
            },
            {
                "id": "p9_u4_mc_08",
                "conceptId": "c9_tiet_kiem_nang_luong",
                "type": "multiple_choice",
                "level": "Nhận biết",
                "question": "Hành động nào sau đây thể hiện việc sử dụng tiết kiệm và hiệu quả năng lượng trong gia đình?",
                "options": [
                    "Tắt đèn và các thiết bị điện khi không sử dụng, tận dụng ánh sáng tự nhiên.",
                    "Bật điều hòa ở nhiệt độ 16 độ C liên tục suốt ngày đêm.",
                    "Mở cửa tủ lạnh thật lâu khi chọn đồ ăn.",
                    "Bật bình nóng lạnh 24/24 giờ mỗi ngày."
                ],
                "correct": 0,
                "explanation": "Tắt các thiết bị điện khi rời phòng và tận dụng gió, ánh sáng tự nhiên giúp giảm lãng phí điện năng tiêu thụ."
            },
            {
                "id": "p9_u4_tf_01",
                "conceptId": "c9_bao_toan_nang_luong_tf",
                "type": "multi_tf",
                "level": "Thông hiểu",
                "context": "Xét một con lắc dao động trong không khí từ vị trí thả ban đầu:",
                "statements": [
                    { "text": "Con lắc dao động tắt dần vì một phần cơ năng chuyển hóa thành nhiệt năng do ma sát với không khí.", "isCorrect": true },
                    { "text": "Khi con lắc dừng lại, cơ năng ban đầu của con lắc đã bị biến mất hoàn toàn khỏi vũ trụ.", "isCorrect": false },
                    { "text": "Tổng toàn bộ năng lượng (cơ năng còn lại + nhiệt năng tỏa ra môi trường) luôn bằng cơ năng ban đầu.", "isCorrect": true },
                    { "text": "Nếu thực hiện dao động trong chân không lý tưởng không ma sát thì con lắc dao động mãi mãi.", "isCorrect": true }
                ],
                "explanation": "Năng lượng không hề bị tiêu biến mà đã chuyển hóa hoàn toàn thành nhiệt năng làm ấm con lắc và môi trường xung quanh (mệnh đề 2 sai)."
            },
            {
                "id": "p9_u4_tf_02",
                "conceptId": "c9_pin_mat_troi_tf",
                "type": "multi_tf",
                "level": "Vận dụng",
                "context": "Về pin quang điện (pin năng lượng mặt trời) dùng trong gia đình:",
                "statements": [
                    { "text": "Pin mặt trời chuyển hóa trực tiếp quang năng của ánh sáng thành điện năng.", "isCorrect": true },
                    { "text": "Pin mặt trời hoạt động dựa trên hiện tượng cảm ứng điện từ của Faraday.", "isCorrect": false },
                    { "text": "Hiệu suất chuyển đổi quang - điện của các tấm pin mặt trời thương mại hiện nay đạt khoảng 18% đến 22%.", "isCorrect": true },
                    { "text": "Sử dụng năng lượng mặt trời góp phần giảm phát thải khí CO₂ gây hiệu ứng nhà kính.", "isCorrect": true }
                ],
                "explanation": "Pin mặt trời hoạt động dựa trên HIỆN TƯỢNG QUANG ĐIỆN trong chất bán dẫn, KHÔNG PHẢI hiện tượng cảm ứng điện từ (mệnh đề 2 sai)."
            },
            {
                "id": "p9_u4_sa_01",
                "conceptId": "c9_tinh_hieu_suat_sa",
                "type": "short_answer",
                "level": "Thông hiểu",
                "question": "Một động cơ điện nhận một công điện $A_{\\text{tp}} = 2000\\,\\text{J}$ và sinh ra công cơ học có ích $A_{\\text{ích}} = 1700\\,\\text{J}$. Hiệu suất của động cơ bằng bao nhiêu phần trăm (%)?",
                "answer": "85",
                "unit": "%",
                "tolerance": 0.05,
                "explanation": "$H = \\frac{1700}{2000} \\times 100\\% = 85\\%$."
            },
            {
                "id": "p9_u4_sa_02",
                "conceptId": "c9_tinh_hao_phi_sa",
                "type": "short_answer",
                "level": "Vận dụng",
                "question": "Một bóng đèn LED có công suất $10\\,\\text{W}$ có hiệu suất phát quang là $30\\%$ (chuyển hóa thành ánh sáng có ích). Công suất nhiệt hao phí làm nóng đèn bằng bao nhiêu Watt (W)?",
                "answer": "7.0",
                "unit": "W",
                "tolerance": 0.05,
                "explanation": "Hiệu suất có ích là 30% thì tỉ lệ hao phí là: $100\\% - 30\\% = 70\\%$. Công suất hao phí: $P_{\\text{hp}} = 10\\,\\text{W} \\times 0{,}7 = 7\\,\\text{W}$."
            }
        ]
    }
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { QUESTION_BANK_9 };
}
