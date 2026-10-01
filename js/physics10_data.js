/**
 * Wayground Physics 10 - Master Question Bank
 * Standard: GDPT 2018 - Chuẩn kiến thức THPT môn Vật Lí 10
 * Bao gồm 4 Chuyên đề trọng tâm: Động học, Động lực học Newton, Năng lượng & Cơ năng, Động lượng
 * Chuẩn hóa 3 Dạng thức thi Bộ GD&ĐT:
 * - Phần I: Trắc nghiệm 4 lựa chọn ABCD (multiple_choice)
 * - Phần II: Trắc nghiệm Đúng/Sai 4 ý (multi_tf)
 * - Phần III: Trả lời ngắn / Điền số (short_answer)
 */

const QUESTION_BANK_10 = {
    "u10_dong_hoc": {
        "title": "Chương 2: Mô Tả Chuyển Động & Rơi Tự Do",
        "questions": [
            {
                "id": "p10_u1_mc_01",
                "conceptId": "c10_gia_toc",
                "type": "multiple_choice",
                "level": "Nhận biết",
                "question": "Công thức xác định gia tốc của một chuyển động thẳng biến đổi đều là",
                "options": [
                    "$a = \\frac{v - v_0}{t}$",
                    "$a = \\frac{v + v_0}{t}$",
                    "$a = \\frac{v^2 - v_0^2}{t}$",
                    "$a = v \\cdot t$"
                ],
                "correct": 0,
                "explanation": "Gia tốc được xác định bằng độ biến thiên vận tốc trong một đơn vị thời gian: $a = \\frac{\\Delta v}{\\Delta t} = \\frac{v - v_0}{t}$."
            },
            {
                "id": "p10_u1_mc_02",
                "conceptId": "c10_chuyen_dong_nhanh_dan",
                "type": "multiple_choice",
                "level": "Nhận biết",
                "question": "Trong chuyển động thẳng nhanh dần đều, vectơ gia tốc $\\vec{a}$ và vectơ vận tốc $\\vec{v}$ có đặc điểm gì?",
                "options": [
                    "$\\vec{a}$ cùng hướng với $\\vec{v}$ ($a \\cdot v > 0$).",
                    "$\\vec{a}$ ngược hướng với $\\vec{v}$ ($a \\cdot v < 0$).",
                    "$\\vec{a}$ vuông góc với $\\vec{v}$.",
                    "$\\vec{a}$ luôn bằng vectơ không."
                ],
                "correct": 0,
                "explanation": "Chuyển động thẳng nhanh dần đều có gia tốc cùng hướng với vận tốc ($a \\cdot v > 0$), còn chuyển động chậm dần đều có $a \\cdot v < 0$."
            },
            {
                "id": "p10_u1_mc_03",
                "conceptId": "c10_do_dich_chuyen",
                "type": "multiple_choice",
                "level": "Thông hiểu",
                "question": "Một ô tô bắt đầu khởi hành từ trạng thái nghỉ và chuyển động thẳng nhanh dần đều với gia tốc $a = 2\\,\\text{m/s}^2$. Quãng đường ô tô đi được sau $5\\,\\text{giây}$ là",
                "options": [
                    "25 m",
                    "50 m",
                    "10 m",
                    "20 m"
                ],
                "correct": 0,
                "explanation": "Áp dụng công thức độ dịch chuyển với $v_0 = 0$: $d = \\frac{1}{2}at^2 = \\frac{1}{2} \\times 2 \\times 5^2 = 25\\,\\text{m}$."
            },
            {
                "id": "p10_u1_mc_04",
                "conceptId": "c10_cong_thuc_doc_lap",
                "type": "multiple_choice",
                "level": "Thông hiểu",
                "question": "Công thức liên hệ giữa vận tốc $v$, vận tốc đầu $v_0$, gia tốc $a$ và độ dịch chuyển $d$ trong chuyển động thẳng biến đổi đều là",
                "options": [
                    "$v^2 - v_0^2 = 2ad$",
                    "$v - v_0 = 2ad$",
                    "$v^2 + v_0^2 = 2ad$",
                    "$v^2 - v_0^2 = ad$"
                ],
                "correct": 0,
                "explanation": "Hệ thức độc lập với thời gian: $v^2 - v_0^2 = 2ad$."
            },
            {
                "id": "p10_u1_mc_05",
                "conceptId": "c10_roi_tu_do_dac_diem",
                "type": "multiple_choice",
                "level": "Nhận biết",
                "question": "Chuyển động rơi tự do của một vật là",
                "options": [
                    "Chuyển động thẳng nhanh dần đều theo phương thẳng đứng hướng từ trên xuống.",
                    "Chuyển động thẳng đều theo phương thẳng đứng.",
                    "Chuyển động thẳng biến đổi không đều.",
                    "Chuyển động cong do sức cản của không khí."
                ],
                "correct": 0,
                "explanation": "Sự rơi tự do là chuyển động của vật chỉ dưới tác dụng của trọng lực, là chuyển động thẳng nhanh dần đều theo phương thẳng đứng với gia tốc trọng trường $\\vec{g}$."
            },
            {
                "id": "p10_u1_mc_06",
                "conceptId": "c10_do_thi_vt",
                "type": "multiple_choice",
                "level": "Thông hiểu",
                "question": "Độ dốc (hệ số góc) của đồ thị vận tốc - thời gian ($v - t$) trong chuyển động thẳng biến đổi đều có giá trị bằng",
                "options": [
                    "Gia tốc của chuyển động.",
                    "Quãng đường vật đi được.",
                    "Vận tốc tức thời.",
                    "Độ dịch chuyển của vật."
                ],
                "correct": 0,
                "explanation": "Độ dốc của đồ thị $v - t$ chính là $\\frac{\\Delta v}{\\Delta t} = a$ (gia tốc của chuyển động)."
            },
            {
                "id": "p10_u1_mc_07",
                "conceptId": "c10_ham_phanh",
                "type": "multiple_choice",
                "level": "Vận dụng",
                "question": "Một đoàn tàu đang chạy với vận tốc $72\\,\\text{km/h}$ thì hãm phanh chuyển động thẳng chậm dần đều với gia tốc có độ lớn $0{,}5\\,\\text{m/s}^2$. Quãng đường tàu đi được từ lúc hãm phanh đến khi dừng hẳn là",
                "options": [
                    "400 m",
                    "200 m",
                    "100 m",
                    "72 m"
                ],
                "correct": 0,
                "explanation": "Đổi $v_0 = 72\\,\\text{km/h} = 20\\,\\text{m/s}$. Khi dừng hẳn $v = 0$. Chuyển động chậm dần đều nên $a = -0{,}5\\,\\text{m/s}^2$. Áp dụng $v^2 - v_0^2 = 2as \\Rightarrow 0^2 - 20^2 = 2(-0{,}5)s \\Rightarrow s = 400\\,\\text{m}$."
            },
            {
                "id": "p10_u1_mc_08",
                "conceptId": "c10_roi_tu_do_tinh",
                "type": "multiple_choice",
                "level": "Vận dụng",
                "question": "Thả một hòn đá rơi tự do từ miệng giếng sâu $h = 45\\,\\text{m}$ xuống đáy giếng. Lấy $g = 10\\,\\text{m/s}^2$. Thời gian hòn đá rơi chạm đáy giếng là",
                "options": [
                    "3 giây",
                    "4,5 giây",
                    "9 giây",
                    "1,5 giây"
                ],
                "correct": 0,
                "explanation": "$h = \\frac{1}{2}gt^2 \\Rightarrow t = \\sqrt{\\frac{2h}{g}} = \\sqrt{\\frac{2 \\times 45}{10}} = \\sqrt{9} = 3\\,\\text{giây}$."
            },
            {
                "id": "p10_u1_tf_01",
                "conceptId": "c10_roi_tu_do_kiem_chung",
                "type": "multi_tf",
                "level": "Thông hiểu",
                "context": "Một học sinh thực hiện thí nghiệm thả rơi tự do hai vật: một viên bi sắt nặng 200 gam và một mẩu gỗ nhẹ 20 gam từ cùng độ cao 20 m tại nơi có gia tốc trọng trường g = 9,8 m/s² trong ống chân không Newton.",
                "statements": [
                    { "text": "Trong ống chân không, cả hai vật rơi chạm đáy cùng một thời điểm.", "isCorrect": true },
                    { "text": "Vận tốc chạm đất của viên bi sắt và mẩu gỗ là như nhau và bằng v = √(2gh).", "isCorrect": true },
                    { "text": "Gia tốc rơi tự do tỉ lệ thuận với khối lượng của vật rơi.", "isCorrect": false },
                    { "text": "Nếu thực hiện ngoài không khí, mẩu gỗ rơi nhanh hơn viên bi sắt.", "isCorrect": false }
                ],
                "explanation": "Trong chân không mọi vật rơi tự do với cùng gia tốc g không phụ thuộc khối lượng. Ngoài không khí lực cản khiến mẩu gỗ rơi chậm hơn viên bi sắt."
            },
            {
                "id": "p10_u1_tf_02",
                "conceptId": "c10_chuyen_dong_bien_doi_deu_tf",
                "type": "multi_tf",
                "level": "Vận dụng",
                "context": "Xét một chất điểm chuyển động dọc theo trục Ox với phương trình vận tốc v = 10 - 2t (v tính bằng m/s, t tính bằng giây):",
                "statements": [
                    { "text": "Vận tốc ban đầu của chất điểm là v₀ = 10 m/s.", "isCorrect": true },
                    { "text": "Gia tốc của chất điểm là a = -2 m/s² và không đổi theo thời gian.", "isCorrect": true },
                    { "text": "Chất điểm chuyển động thẳng nhanh dần đều theo chiều dương trục Ox.", "isCorrect": false },
                    { "text": "Tại thời điểm t = 5 s chất điểm dừng lại đổi chiều chuyển động.", "isCorrect": true }
                ],
                "explanation": "Vì v₀ = 10 m/s > 0 và a = -2 m/s² < 0 nên tích a.v₀ < 0, chuyển động là chậm dần đều (mệnh đề 3 sai). Tại t = 5s, v = 0 m/s (dừng lại)."
            },
            {
                "id": "p10_u1_sa_01",
                "conceptId": "c10_tinh_gia_toc",
                "type": "short_answer",
                "level": "Thông hiểu",
                "question": "Một ô tô đang chuyển động với vận tốc $15\\,\\text{m/s}$ thì tăng tốc, sau $10\\,\\text{s}$ đạt vận tốc $25\\,\\text{m/s}$. Gia tốc của ô tô bằng bao nhiêu $\\text{m/s}^2$?",
                "answer": "1.0",
                "unit": "m/s²",
                "tolerance": 0.05,
                "explanation": "$a = \\frac{v - v_0}{t} = \\frac{25 - 15}{10} = 1\\,\\text{m/s}^2$."
            },
            {
                "id": "p10_u1_sa_02",
                "conceptId": "c10_tinh_van_toc_roi",
                "type": "short_answer",
                "level": "Vận dụng",
                "question": "Một vật được thả rơi tự do không vận tốc đầu từ độ cao $20\\,\\text{m}$. Lấy $g = 10\\,\\text{m/s}^2$. Vận tốc của vật ngay trước khi chạm đất bằng bao nhiêu $\\text{m/s}$?",
                "answer": "20",
                "unit": "m/s",
                "tolerance": 0.05,
                "explanation": "$v = \\sqrt{2gh} = \\sqrt{2 \\times 10 \\times 20} = \\sqrt{400} = 20\\,\\text{m/s}$."
            }
        ]
    },

    "u10_dong_luc_hoc": {
        "title": "Chương 3: Ba Định Luật Newton & Các Lực Trong Thực Tiễn",
        "questions": [
            {
                "id": "p10_u2_mc_01",
                "conceptId": "c10_dinh_luat_1_newton",
                "type": "multiple_choice",
                "level": "Nhận biết",
                "question": "Quán tính là tính chất của mọi vật có xu hướng bảo toàn",
                "options": [
                    "Vận tốc cả về hướng và độ lớn.",
                    "Chỉ bảo toàn độ lớn vận tốc.",
                    "Vị trí đứng yên của vật.",
                    "Gia tốc của vật."
                ],
                "correct": 0,
                "explanation": "Định luật I Newton: Quán tính là tính chất của mọi vật có xu hướng bảo toàn vận tốc cả về hướng và độ lớn."
            },
            {
                "id": "p10_u2_mc_02",
                "conceptId": "c10_dinh_luat_2_newton",
                "type": "multiple_choice",
                "level": "Nhận biết",
                "question": "Biểu thức của định luật II Newton dưới dạng vectơ là",
                "options": [
                    "$\\vec{F} = m\\vec{a}$",
                    "$\\vec{F} = \\frac{\\vec{a}}{m}$",
                    "$\\vec{a} = m\\vec{F}$",
                    "$F = m \\cdot a$"
                ],
                "correct": 0,
                "explanation": "Định luật II Newton: Gia tốc của một vật cùng hướng với lực tác dụng và có độ lớn tỉ lệ thuận với độ lớn của lực, tỉ lệ nghịch với khối lượng: $\\vec{a} = \\frac{\\vec{F}}{m} \\Rightarrow \\vec{F} = m\\vec{a}$."
            },
            {
                "id": "p10_u2_mc_03",
                "conceptId": "c10_dinh_luat_3_newton",
                "type": "multiple_choice",
                "level": "Thông hiểu",
                "question": "Lực và phản lực trong định luật III Newton có đặc điểm nào sau đây?",
                "options": [
                    "Xuất hiện và mất đi đồng thời, tác dụng vào hai vật khác nhau (không cân bằng).",
                    "Cùng tác dụng vào một vật nên triệt tiêu lẫn nhau.",
                    "Luôn cùng hướng và có độ lớn khác nhau.",
                    "Lực xuất hiện trước, phản lực sinh ra sau."
                ],
                "correct": 0,
                "explanation": "Lực và phản lực luôn xuất hiện đồng thời, là cặp lực trực đối tác dụng vào hai vật khác nhau nên không thể triệt tiêu nhau."
            },
            {
                "id": "p10_u2_mc_04",
                "conceptId": "c10_luc_ma_sat",
                "type": "multiple_choice",
                "level": "Thông hiểu",
                "question": "Độ lớn của lực ma sát trượt tác dụng lên vật chuyển động trên mặt phẳng ngang tỉ lệ thuận với",
                "options": [
                    "Áp lực của vật lên mặt tiếp xúc: $F_{\\text{mst}} = \\mu N$.",
                    "Diện tích bề mặt tiếp xúc của vật.",
                    "Tốc độ chuyển động của vật.",
                    "Gia tốc chuyển động của vật."
                ],
                "correct": 0,
                "explanation": "Lực ma sát trượt: $F_{\\text{mst}} = \\mu N$, không phụ thuộc vào diện tích tiếp xúc và tốc độ của vật (trong giới hạn vận tốc vừa phải)."
            },
            {
                "id": "p10_u2_mc_05",
                "conceptId": "c10_luc_keo_vat",
                "type": "multiple_choice",
                "level": "Vận dụng",
                "question": "Tác dụng một lực kéo nằm ngang $F = 20\\,\\text{N}$ vào một vật khối lượng $m = 4\\,\\text{kg}$ đặt trên sàn nhẵn không ma sát. Gia tốc của vật thu được là",
                "options": [
                    "5 m/s²",
                    "80 m/s²",
                    "0,2 m/s²",
                    "2 m/s²"
                ],
                "correct": 0,
                "explanation": "$a = \\frac{F}{m} = \\frac{20}{4} = 5\\,\\text{m/s}^2$."
            },
            {
                "id": "p10_u2_mc_06",
                "conceptId": "c10_trong_luc_khoi_luong",
                "type": "multiple_choice",
                "level": "Thông hiểu",
                "question": "Một vật có khối lượng $m = 50\\,\\text{kg}$ tại bề mặt Trái Đất nơi có $g = 9{,}8\\,\\text{m/s}^2$. Trọng lượng của vật là",
                "options": [
                    "490 N",
                    "50 N",
                    "980 N",
                    "5,1 N"
                ],
                "correct": 0,
                "explanation": "Trọng lượng: $P = mg = 50 \\times 9{,}8 = 490\\,\\text{N}$."
            },
            {
                "id": "p10_u2_mc_07",
                "conceptId": "c10_ma_sat_tinh_gia_toc",
                "type": "multiple_choice",
                "level": "Vận dụng",
                "question": "Kéo một vật khối lượng $m = 2\\,\\text{kg}$ chuyển động trên mặt sàn nằm ngang bằng lực kéo $F_k = 10\\,\\text{N}$. Hệ số ma sát trượt giữa vật và sàn là $\\mu = 0{,}2$. Lấy $g = 10\\,\\text{m/s}^2$. Gia tốc của vật là",
                "options": [
                    "3 m/s²",
                    "5 m/s²",
                    "2 m/s²",
                    "4 m/s²"
                ],
                "correct": 0,
                "explanation": "$F_{\\text{mst}} = \\mu m g = 0{,}2 \\times 2 \\times 10 = 4\\,\\text{N}$. Hợp lực tác dụng: $F_{\\text{hl}} = F_k - F_{\\text{mst}} = 10 - 4 = 6\\,\\text{N}$. Gia tốc: $a = \\frac{F_{\\text{hl}}}{m} = \\frac{6}{2} = 3\\,\\text{m/s}^2$."
            },
            {
                "id": "p10_u2_mc_08",
                "conceptId": "c10_luc_can_khong_khi",
                "type": "multiple_choice",
                "level": "Thông hiểu",
                "question": "Khi người nhảy dù rơi trong không khí một khoảng thời gian thì đạt tới vận tốc giới hạn (vận tốc không đổi). Trạng thái này xảy ra khi",
                "options": [
                    "Lực cản của không khí cân bằng với trọng lực tác dụng lên người và dù.",
                    "Lực cản của không khí triệt tiêu hoàn toàn.",
                    "Trọng lực tác dụng lên người bị mất đi.",
                    "Dù sinh ra lực nâng lớn hơn trọng lực."
                ],
                "correct": 0,
                "explanation": "Khi lực cản không khí tăng dần và có độ lớn bằng trọng lực ($F_c = P$), hợp lực tác dụng bằng 0, vật chuyển sang chuyển động thẳng đều với vận tốc giới hạn."
            },
            {
                "id": "p10_u2_tf_01",
                "conceptId": "c10_dinh_luat_newton_tf",
                "type": "multi_tf",
                "level": "Thông hiểu",
                "context": "Xét một ô tô đồ chơi đang chạy trên sàn nhà dưới tác dụng của lực kéo động cơ và lực ma sát:",
                "statements": [
                    { "text": "Khi lực kéo cân bằng với lực ma sát cản trở, ô tô chuyển động thẳng đều.", "isCorrect": true },
                    { "text": "Nếu đột ngột ngắt động cơ (lực kéo bằng 0), ô tô dừng lại ngay lập tức.", "isCorrect": false },
                    { "text": "Gia tốc hãm phanh của ô tô tỉ lệ nghịch với khối lượng của ô tô.", "isCorrect": true },
                    { "text": "Hành khách trên xe bị ngã chúi về phía trước khi xe phanh gấp do quán tính.", "isCorrect": true }
                ],
                "explanation": "Khi ngắt động cơ lực ma sát cản trở làm ô tô chuyển động chậm dần đều rồi mới dừng lại chứ không dừng ngay lập tức (mệnh đề 2 sai)."
            },
            {
                "id": "p10_u2_tf_02",
                "conceptId": "c10_luc_va_phan_luc_tf",
                "type": "multi_tf",
                "level": "Vận dụng",
                "context": "Một quả táo nằm yên trên mặt bàn nằm ngang trong phòng thí nghiệm:",
                "statements": [
                    { "text": "Trọng lực tác dụng lên quả táo và phản lực của mặt bàn lên quả táo là hai lực cân bằng.", "isCorrect": true },
                    { "text": "Lực hút của Trái Đất lên quả táo và lực hút của quả táo lên Trái Đất là cặp lực trực đối theo Định luật III Newton.", "isCorrect": true },
                    { "text": "Trọng lực của quả táo và phản lực của mặt bàn là cặp lực trực đối theo Định luật III Newton.", "isCorrect": false },
                    { "text": "Mặt bàn không bị gãy vì độ bền cơ học của mặt bàn tạo ra phản lực nâng đỡ quả táo.", "isCorrect": true }
                ],
                "explanation": "Trọng lực và phản lực mặt bàn tác dụng vào CÙNG quả táo nên là 2 lực cân bằng, KHÔNG PHẢI cặp lực trực đối ĐL III Newton (mệnh đề 3 sai)."
            },
            {
                "id": "p10_u2_sa_01",
                "conceptId": "c10_tinh_luc_f",
                "type": "short_answer",
                "level": "Thông hiểu",
                "question": "Một vật khối lượng $m = 5\\,\\text{kg}$ chuyển động với gia tốc $a = 3\\,\\text{m/s}^2$. Độ lớn hợp lực tác dụng lên vật bằng bao nhiêu Newton?",
                "answer": "15",
                "unit": "N",
                "tolerance": 0.05,
                "explanation": "$F = m \\cdot a = 5 \\times 3 = 15\\,\\text{N}$."
            },
            {
                "id": "p10_u2_sa_02",
                "conceptId": "c10_tinh_luc_ma_sat",
                "type": "short_answer",
                "level": "Vận dụng",
                "question": "Một khối gỗ khối lượng $m = 4\\,\\text{kg}$ trượt trên sàn ngang có hệ số ma sát trượt $\\mu = 0{,}25$. Lấy $g = 9{,}8\\,\\text{m/s}^2$. Độ lớn lực ma sát trượt tác dụng lên khối gỗ bằng bao nhiêu Newton?",
                "answer": "9.8",
                "unit": "N",
                "tolerance": 0.05,
                "explanation": "$F_{\\text{mst}} = \\mu m g = 0{,}25 \\times 4 \\times 9{,}8 = 9{,}8\\,\\text{N}$."
            }
        ]
    },

    "u10_nang_luong": {
        "title": "Chương 4: Năng Lượng, Công Cơ Học & Định Luật Bảo Toàn Cơ Năng",
        "questions": [
            {
                "id": "p10_u3_mc_01",
                "conceptId": "c10_cong_co_hoc_dinh_nghia",
                "type": "multiple_choice",
                "level": "Nhận biết",
                "question": "Công cơ học do lực không đổi $\\vec{F}$ thực hiện khi làm vật dịch chuyển quãng đường $s$ theo hướng hợp với lực góc $\\alpha$ được tính bằng",
                "options": [
                    "$A = F \\cdot s \\cdot \\cos\\alpha$",
                    "$A = F \\cdot s \\cdot \\sin\\alpha$",
                    "$A = \\frac{F \\cdot s}{\\cos\\alpha}$",
                    "$A = F \\cdot s$"
                ],
                "correct": 0,
                "explanation": "Định nghĩa công cơ học của lực không đổi: $A = F \\cdot s \\cdot \\cos\\alpha$."
            },
            {
                "id": "p10_u3_mc_02",
                "conceptId": "c10_cong_can_cong_phat_dong",
                "type": "multiple_choice",
                "level": "Thông hiểu",
                "question": "Khi hướng của lực tác dụng vuông góc với hướng chuyển dịch của vật ($\\alpha = 90^\\circ$), công của lực đó bằng",
                "options": [
                    "0 J",
                    "F.s",
                    "-F.s",
                    "vô cùng lớn"
                ],
                "correct": 0,
                "explanation": "Vì $\\cos 90^\\circ = 0$ nên công $A = F \\cdot s \\cdot \\cos 90^\\circ = 0\\,\\text{J}$. Lực vuông góc với quỹ đạo không sinh công."
            },
            {
                "id": "p10_u3_mc_03",
                "conceptId": "c10_dong_nang",
                "type": "multiple_choice",
                "level": "Nhận biết",
                "question": "Động năng của một vật khối lượng $m$ chuyển động với vận tốc $v$ được xác định bởi công thức",
                "options": [
                    "$W_d = \\frac{1}{2}mv^2$",
                    "$W_d = mv^2$",
                    "$W_d = \\frac{1}{2}mv$",
                    "$W_d = 2mv^2$"
                ],
                "correct": 0,
                "explanation": "Động năng của vật: $W_d = \\frac{1}{2}mv^2$."
            },
            {
                "id": "p10_u3_mc_04",
                "conceptId": "c10_the_nang_trong_truong",
                "type": "multiple_choice",
                "level": "Nhận biết",
                "question": "Thế năng trọng trường của một vật khối lượng $m$ ở độ cao $z$ so với mốc thế năng là",
                "options": [
                    "$W_t = mgz$",
                    "$W_t = \\frac{1}{2}mgz$",
                    "$W_t = \\frac{mg}{z}$",
                    "$W_t = mgz^2$"
                ],
                "correct": 0,
                "explanation": "Thế năng trọng trường: $W_t = mgz$."
            },
            {
                "id": "p10_u3_mc_05",
                "conceptId": "c10_cong_suat",
                "type": "multiple_choice",
                "level": "Thông hiểu",
                "question": "Công suất là đại lượng đặc trưng cho",
                "options": [
                    "Tốc độ sinh công của lực trong một đơn vị thời gian: $P = \\frac{A}{t}$.",
                    "Nhiệt lượng tỏa ra nhiều hay ít.",
                    "Quãng đường dịch chuyển dài hay ngắn.",
                    "Khả năng dự trữ năng lượng của vật."
                ],
                "correct": 0,
                "explanation": "Công suất đo bằng công thực hiện được trong một đơn vị thời gian: $P = \\frac{A}{t}$ (đơn vị Watt: $1\\,\\text{W} = 1\\,\\text{J/s}$)."
            },
            {
                "id": "p10_u3_mc_06",
                "conceptId": "c10_bao_toan_co_nang",
                "type": "multiple_choice",
                "level": "Thông hiểu",
                "question": "Trong trường trọng lực, khi một vật chuyển động chỉ chịu tác dụng của trọng lực thì",
                "options": [
                    "Cơ năng của vật được bảo toàn ($W_d + W_t = \\text{hằng số}$).",
                    "Động năng của vật luôn không đổi.",
                    "Thế năng của vật luôn không đổi.",
                    "Cơ năng của vật tăng dần theo độ cao."
                ],
                "correct": 0,
                "explanation": "Định luật bảo toàn cơ năng: Khi vật chỉ chịu tác dụng của trọng lực, cơ năng của vật là một đại lượng bảo toàn."
            },
            {
                "id": "p10_u3_mc_07",
                "conceptId": "c10_tinh_cong_co_hoc",
                "type": "multiple_choice",
                "level": "Vận dụng",
                "question": "Một người kéo một thùng hàng trượt trên sàn với lực kéo $F = 100\\,\\text{N}$ hợp với phương ngang góc $\\alpha = 60^\\circ$. Quãng đường kéo là $s = 20\\,\\text{m}$. Công của lực kéo bằng",
                "options": [
                    "1000 J",
                    "2000 J",
                    "1732 J",
                    "500 J"
                ],
                "correct": 0,
                "explanation": "$A = F \\cdot s \\cdot \\cos 60^\\circ = 100 \\times 20 \\times 0{,}5 = 1000\\,\\text{J}$."
            },
            {
                "id": "p10_u3_mc_08",
                "conceptId": "c10_hieu_suat_nang_luong",
                "type": "multiple_choice",
                "level": "Thông hiểu",
                "question": "Hiệu suất của một động cơ cơ học được xác định bằng tỉ số giữa",
                "options": [
                    "Năng lượng có ích và năng lượng toàn phần: $H = \\frac{A_{\\text{ích}}}{A_{\\text{tp}}} \\times 100\\%$.",
                    "Năng lượng hao phí và năng lượng toàn phần.",
                    "Năng lượng toàn phần và năng lượng có ích.",
                    "Công suất cản và công suất phát động."
                ],
                "correct": 0,
                "explanation": "Hiệu suất: $H = \\frac{A_{\\text{ích}}}{A_{\\text{tp}}} \\times 100\\%$ hoặc $H = \\frac{P_{\\text{ích}}}{P_{\\text{tp}}} \\times 100\\%$."
            },
            {
                "id": "p10_u3_tf_01",
                "conceptId": "c10_chuyen_hoa_co_nang_tf",
                "type": "multi_tf",
                "level": "Thông hiểu",
                "context": "Một quả bóng được ném thẳng đứng từ mặt đất lên cao với vận tốc ban đầu v₀. Bỏ qua sức cản của không khí:",
                "statements": [
                    { "text": "Khi quả bóng đi lên, động năng giảm dần và thế năng tăng dần.", "isCorrect": true },
                    { "text": "Tại điểm cao nhất của quỹ đạo, thế năng trọng trường đạt giá trị cực đại.", "isCorrect": true },
                    { "text": "Tại điểm cao nhất của quỹ đạo, cơ năng của quả bóng bằng 0.", "isCorrect": false },
                    { "text": "Vận tốc của quả bóng khi chạm đất có độ lớn đúng bằng vận tốc ban đầu v₀.", "isCorrect": true }
                ],
                "explanation": "Cơ năng bảo toàn nên tại điểm cao nhất cơ năng bằng thế năng cực đại (khác 0) (mệnh đề 3 sai)."
            },
            {
                "id": "p10_u3_tf_02",
                "conceptId": "c10_cong_ma_sat_tf",
                "type": "multi_tf",
                "level": "Vận dụng",
                "context": "Một vật trượt từ đỉnh xuống chân một mặt phẳng nghiêng có ma sát:",
                "statements": [
                    { "text": "Trọng lực thực hiện công phát động làm vật tăng tốc trượt xuống.", "isCorrect": true },
                    { "text": "Lực ma sát trượt thực hiện công cản (A < 0) làm tiêu tán cơ năng thành nhiệt.", "isCorrect": true },
                    { "text": "Cơ năng của vật ở chân dốc lớn hơn cơ năng của vật ở đỉnh dốc.", "isCorrect": false },
                    { "text": "Phản lực pháp tuyến của mặt phẳng nghiêng không sinh công vì vuông góc quỹ đạo.", "isCorrect": true }
                ],
                "explanation": "Vì có ma sát nên cơ năng bị hao phí, cơ năng ở chân dốc nhỏ hơn cơ năng ở đỉnh dốc (mệnh đề 3 sai)."
            },
            {
                "id": "p10_u3_sa_01",
                "conceptId": "c10_tinh_dong_nang",
                "type": "short_answer",
                "level": "Thông hiểu",
                "question": "Một ô tô có khối lượng $m = 1000\\,\\text{kg}$ đang chuyển động với vận tốc $v = 10\\,\\text{m/s}$. Động năng của ô tô bằng bao nhiêu kilôjun (kJ)?",
                "answer": "50",
                "unit": "kJ",
                "tolerance": 0.05,
                "explanation": "$W_d = \\frac{1}{2}mv^2 = \\frac{1}{2} \\times 1000 \\times 10^2 = 50\\,000\\,\\text{J} = 50\\,\\text{kJ}$."
            },
            {
                "id": "p10_u3_sa_02",
                "conceptId": "c10_tinh_cong_suat",
                "type": "short_answer",
                "level": "Vận dụng",
                "question": "Một cần cẩu nâng một khối bê tông có trọng lượng $P = 5000\\,\\text{N}$ lên độ cao $h = 10\\,\\text{m}$ đều đặn trong thời gian $t = 25\\,\\text{giây}$. Công suất của cần cẩu bằng bao nhiêu Watt?",
                "answer": "2000",
                "unit": "W",
                "tolerance": 0.05,
                "explanation": "Công thực hiện: $A = P \\cdot h = 5000 \\times 10 = 50\\,000\\,\\text{J}$. Công suất: $P = \\frac{A}{t} = \\frac{50\\,000}{25} = 2000\\,\\text{W}$."
            }
        ]
    },

    "u10_dong_luong": {
        "title": "Chương 5: Động Lượng & Định Luật Bảo Toàn Động Lượng",
        "questions": [
            {
                "id": "p10_u4_mc_01",
                "conceptId": "c10_dong_luong_dinh_nghia",
                "type": "multiple_choice",
                "level": "Nhận biết",
                "question": "Động lượng $\\vec{p}$ của một vật có khối lượng $m$ đang chuyển động với vận tốc $\\vec{v}$ được xác định bằng",
                "options": [
                    "$\\vec{p} = m\\vec{v}$",
                    "$\\vec{p} = \\frac{1}{2}m\\vec{v}$",
                    "$\\vec{p} = m\\vec{a}$",
                    "$p = \\frac{m}{v}$"
                ],
                "correct": 0,
                "explanation": "Vectơ động lượng: $\\vec{p} = m\\vec{v}$, cùng hướng với vectơ vận tốc $\\vec{v}$."
            },
            {
                "id": "p10_u4_mc_02",
                "conceptId": "c10_don_vi_dong_luong",
                "type": "multiple_choice",
                "level": "Nhận biết",
                "question": "Đơn vị chuẩn của động lượng trong hệ đơn vị SI là",
                "options": [
                    "$\\text{kg}\\cdot\\text{m/s}$ (hoặc $\\text{N}\\cdot\\text{s}$)",
                    "$\\text{J}\\cdot\\text{s}$",
                    "$\\text{N/m}$",
                    "$\\text{kg}\\cdot\\text{m/s}^2$"
                ],
                "correct": 0,
                "explanation": "Đơn vị động lượng là $\\text{kg}\\cdot\\text{m/s}$ tương đương với $\\text{N}\\cdot\\text{s}$ (xung lượng)."
            },
            {
                "id": "p10_u4_mc_03",
                "conceptId": "c10_xung_luong_cua_luc",
                "type": "multiple_choice",
                "level": "Thông hiểu",
                "question": "Xung lượng của lực $\\vec{F}\\Delta t$ tác dụng lên một vật trong khoảng thời gian $\\Delta t$ bằng",
                "options": [
                    "Độ biến thiên động lượng của vật: $\\Delta \\vec{p} = \\vec{p}_2 - \\vec{p}_1$.",
                    "Công cơ học do lực sinh ra.",
                    "Độ biến thiên động năng của vật.",
                    "Gia tốc mà vật thu được."
                ],
                "correct": 0,
                "explanation": "Dạng tổng quát định luật II Newton: $\\vec{F}\\Delta t = \\Delta \\vec{p}$ (Xung lượng của lực bằng độ biến thiên động lượng của vật)."
            },
            {
                "id": "p10_u4_mc_04",
                "conceptId": "c10_he_kin",
                "type": "multiple_choice",
                "level": "Nhận biết",
                "question": "Một hệ nhiều vật được gọi là một hệ kín (hệ cô lập) khi",
                "options": [
                    "Không có ngoại lực tác dụng hoặc các ngoại lực tác dụng triệt tiêu lẫn nhau.",
                    "Các vật trong hệ không chuyển động.",
                    "Khối lượng các vật hoàn toàn bằng nhau.",
                    "Chỉ có lực ma sát tác dụng giữa các vật."
                ],
                "correct": 0,
                "explanation": "Hệ kín là hệ chỉ có nội lực tương tác giữa các vật trong hệ mà không có ngoại lực, hoặc hợp lực của các ngoại lực bằng 0."
            },
            {
                "id": "p10_u4_mc_05",
                "conceptId": "c10_bao_toan_dong_luong",
                "type": "multiple_choice",
                "level": "Thông hiểu",
                "question": "Định luật bảo toàn động lượng phát biểu rằng trong một hệ kín",
                "options": [
                    "Tổng vectơ động lượng của hệ được bảo toàn: $\\vec{p}_1 + \\vec{p}_2 + ... = \\text{không đổi}$.",
                    "Động lượng của từng vật thành phần không đổi.",
                    "Tổng cơ năng của hệ luôn bằng không.",
                    "Vận tốc của các vật luôn bằng nhau."
                ],
                "correct": 0,
                "explanation": "Trong hệ kín, tổng vectơ động lượng của hệ là một đại lượng bảo toàn."
            },
            {
                "id": "p10_u4_mc_06",
                "conceptId": "c10_va_cham_mem",
                "type": "multiple_choice",
                "level": "Thông hiểu",
                "question": "Va chạm mềm là loại va chạm trong đó sau khi va chạm",
                "options": [
                    "Hai vật dính vào nhau và cùng chuyển động với cùng một vận tốc.",
                    "Hai vật bật ngược trở lại hoàn toàn đàn hồi.",
                    "Động năng toàn phần của hệ được bảo toàn 100%.",
                    "Hai vật đứng yên tại vị trí va chạm."
                ],
                "correct": 0,
                "explanation": "Va chạm mềm là va chạm mà sau đó hai vật gắn liền vào nhau và chuyển động với cùng vận tốc: $v = \\frac{m_1 v_1 + m_2 v_2}{m_1 + m_2}$."
            },
            {
                "id": "p10_u4_mc_07",
                "conceptId": "c10_phan_luc_ten_lua",
                "type": "multiple_choice",
                "level": "Thông hiểu",
                "question": "Nguyên tắc hoạt động của động cơ phản lực ở tên lửa vũ trụ dựa trên",
                "options": [
                    "Định luật bảo toàn động lượng: Phụt luồng khí về phía sau để đẩy tên lửa về phía trước.",
                    "Lực đẩy Archimedes của không khí.",
                    "Hiện tượng cảm ứng điện từ.",
                    "Định luật bảo toàn cơ năng thuần túy."
                ],
                "correct": 0,
                "explanation": "Chuyển động bằng phản lực của tên lửa dựa trên định luật bảo toàn động lượng: $m_{\\text{tên lửa}}\\vec{v} + m_{\\text{khí}}\\vec{v}_{\\text{khí}} = \\vec{0}$."
            },
            {
                "id": "p10_u4_mc_08",
                "conceptId": "c10_tui_khi_o_to",
                "type": "multiple_choice",
                "level": "Vận dụng",
                "question": "Túi khí trong ô tô giúp bảo vệ an toàn cho người ngồi khi có va chạm mạnh chủ yếu vì nó",
                "options": [
                    "Kéo dài thời gian va chạm $\\Delta t$, làm giảm lực va đập tác dụng lên cơ thể: $F = \\frac{\\Delta p}{\\Delta t}$.",
                    "Làm tăng độ biến thiên động lượng của người.",
                    "Hút hết toàn bộ động lượng của xe ô tô.",
                    "Làm mất trọng lực tác dụng lên người."
                ],
                "correct": 0,
                "explanation": "Vì $\\Delta p = F \\cdot \\Delta t$ không đổi, túi khí làm tăng thời gian hãm phanh $\\Delta t$ nên lực cản trung bình $F$ tác dụng lên cơ thể giảm đi rất nhiều, hạn chế chấn thương."
            },
            {
                "id": "p10_u4_tf_01",
                "conceptId": "c10_va_cham_hai_bi_tf",
                "type": "multi_tf",
                "level": "Thông hiểu",
                "context": "Xét hai viên bi A và B chuyển động không ma sát trên mặt phẳng ngang tới va chạm trực diện với nhau:",
                "statements": [
                    { "text": "Hệ gồm hai viên bi A và B có thể coi là hệ kín theo phương ngang.", "isCorrect": true },
                    { "text": "Tổng động lượng của hệ trước và sau va chạm luôn được bảo toàn.", "isCorrect": true },
                    { "text": "Nếu là va chạm đàn hồi thì cả động lượng và động năng toàn phần đều được bảo toàn.", "isCorrect": true },
                    { "text": "Nếu là va chạm mềm thì động năng toàn phần sau va chạm lớn hơn trước va chạm.", "isCorrect": false }
                ],
                "explanation": "Trong va chạm mềm, một phần cơ năng biến thành nội năng làm biến dạng và nóng hai vật nên động năng sau va chạm luôn NHỎ HƠN trước va chạm (mệnh đề 4 sai)."
            },
            {
                "id": "p10_u4_tf_02",
                "conceptId": "c10_sung_giat_tf",
                "type": "multi_tf",
                "level": "Vận dụng",
                "context": "Một khẩu súng khối lượng M = 4 kg bắn ra một viên đạn khối lượng m = 20 g theo phương ngang với vận tốc v = 600 m/s:",
                "statements": [
                    { "text": "Trước khi bắn súng và đạn đứng yên nên tổng động lượng của hệ bằng 0.", "isCorrect": true },
                    { "text": "Khi bắn viên đạn bay về phía trước thì súng bị giật lùi về phía sau.", "isCorrect": true },
                    { "text": "Vận tốc giật lùi của súng cùng hướng với vận tốc viên đạn.", "isCorrect": false },
                    { "text": "Độ lớn vận tốc giật lùi của súng là 3 m/s.", "isCorrect": true }
                ],
                "explanation": "Bảo toàn động lượng: M.V + m.v = 0 => V = -mv/M = - (0.02 * 600)/4 = -3 m/s. Súng giật lùi ngược hướng đạn (mệnh đề 3 sai)."
            },
            {
                "id": "p10_u4_sa_01",
                "conceptId": "c10_tinh_dong_luong",
                "type": "short_answer",
                "level": "Thông hiểu",
                "question": "Một quả bóng đá có khối lượng $m = 0{,}4\\,\\text{kg}$ bay với vận tốc $v = 20\\,\\text{m/s}$. Độ lớn động lượng của quả bóng bằng bao nhiêu $\\text{kg}\\cdot\\text{m/s}$?",
                "answer": "8.0",
                "unit": "kg.m/s",
                "tolerance": 0.05,
                "explanation": "$p = m \\cdot v = 0{,}4 \\times 20 = 8\\,\\text{kg}\\cdot\\text{m/s}$."
            },
            {
                "id": "p10_u4_sa_02",
                "conceptId": "c10_tinh_va_cham_mem",
                "type": "short_answer",
                "level": "Vận dụng",
                "question": "Toa xe thứ nhất khối lượng $m_1 = 3000\\,\\text{kg}$ chạy với vận tốc $v_1 = 2\\,\\text{m/s}$ đến va chạm mềm vào toa xe thứ hai khối lượng $m_2 = 1000\\,\\text{kg}$ đang đứng yên. Vận tốc của hai toa xe sau va chạm bằng bao nhiêu $\\text{m/s}$?",
                "answer": "1.5",
                "unit": "m/s",
                "tolerance": 0.05,
                "explanation": "$v = \\frac{m_1 v_1}{m_1 + m_2} = \\frac{3000 \\times 2}{3000 + 1000} = \\frac{6000}{4000} = 1{,}5\\,\\text{m/s}$."
            }
        ]
    }
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { QUESTION_BANK_10 };
}
