/**
 * Wayground Physics 12 - Master Question Bank & Remediation Clone Bank
 * Standard: GDPT 2018 - Chuẩn cấu trúc Bộ GD&ĐT 2025
 * Format: 8 Units x (16 MC + 4 Multi-TF + 4 Short Answer) = 192 Master Questions
 */

const QUESTION_BANK = {
    "unit1": {
        "title": "Bài 1: Cấu trúc của chất. Sự chuyển thể",
        "questions": [
            {
                "id": "u1_mc_ext1",
                "conceptId": "c_u1_nhiet_nong_chay_vd",
                "image": "images/phase_transition_diagram.jpg",
                "type": "multiple_choice",
                "level": "Vận dụng cao",
                "question": "Để đúc một thanh nhôm, người ta nấu chảy 2 kg nhôm ở 20°C. Biết nhiệt nóng chảy riêng của nhôm là 3.9×10⁵ J/kg, nhiệt dung riêng là 880 J/kg.K, nhiệt độ nóng chảy là 660°C. Nhiệt lượng tổng cộng tối thiểu cần cung cấp là bao nhiêu?",
                "options": [
                    "1.906.400 J",
                    "1.126.400 J",
                    "780.000 J",
                    "2.252.800 J"
                ],
                "correct": 0,
                "explanation": "Q = mcΔt + mλ = 2 × 880 × 640 + 2 × 3.9×10⁵ = 1,126,400 + 780,000 = 1,906,400 J."
            },
            {
                "id": "u1_mc_ext2",
                "conceptId": "c_u1_hoa_hoi_vd",
                "image": "images/evaporation_factors.jpg",
                "type": "multiple_choice",
                "level": "Vận dụng cao",
                "question": "Một ấm điện công suất 1000W đun sôi 1 lít nước ở 20°C. Sau khi nước sôi (100°C), nếu tiếp tục đun thêm 5 phút thì lượng nước còn lại trong ấm xấp xỉ bao nhiêu? (c = 4200 J/kg.K, L = 2.26×10⁶ J/kg).",
                "options": [
                    "0.867 kg",
                    "0.133 kg",
                    "1.0 kg",
                    "0.500 kg"
                ],
                "correct": 0,
                "explanation": "Q tỏa ra 5 phút (300s) = 300,000 J. Hóa hơi: m = 300,000 / 2.26×10⁶ ≈ 0.133 kg. Còn lại: 1 - 0.133 = 0.867 kg."
            },
            {
                "id": "u1_mc_01",
                "conceptId": "c_u1_mo_hinh_phan_tu",
                "image": "images/temp_molecular_speed.jpg",
                "type": "multiple_choice",
                "level": "Nhận biết",
                "question": "Theo mô hình động học phân tử, các chất được cấu tạo từ",
                "options": [
                    "Các phân tử đứng yên và chỉ chuyển động khi có ngoại lực tác dụng.",
                    "Các hạt riêng biệt là nguyên tử, phân tử chuyển động hỗn loạn không ngừng.",
                    "Các phân tử chuyển động không ngừng và dừng lại khi nhiệt độ giảm về $0^\\circ\\text{C}$.",
                    "Các hạt liên kết dính chặt cố định không thể dịch chuyển."
                ],
                "correct": 1,
                "explanation": "Ghi nhớ cốt lõi: Các chất được cấu tạo từ các hạt riêng biệt là nguyên tử hoặc phân tử, chúng chuyển động hỗn loạn không ngừng (chuyển động nhiệt)."
            },
            {
                "id": "u1_mc_02",
                "conceptId": "c_u1_nhiet_do_chuyen_dong",
                "image": "images/temp_molecular_speed.jpg",
                "type": "multiple_choice",
                "level": "Nhận biết",
                "question": "Chuyển động hỗn loạn của các phân tử cấu tạo nên vật chuyển động càng nhanh khi",
                "options": [
                    "Nhiệt độ của vật càng cao thì các phân tử cấu tạo nên vật chuyển động càng chậm chạp và có xu hướng ngưng tụ lại thành khối rắn đặc.",
                    "Nhiệt độ của vật càng cao thì các phân tử cấu tạo nên vật chuyển động nhiệt hỗn loạn càng nhanh và có động năng trung bình càng lớn.",
                    "Nhiệt độ của vật càng cao thì khoảng cách giữa các phân tử càng giảm đi khiến lực đẩy tương tác giữa các phân tử tăng lên cực đại.",
                    "Nhiệt độ của vật càng cao thì khối lượng của từng phân tử càng tăng lên do chúng hấp thụ thêm năng lượng nhiệt từ môi trường ngoài."
                ],
                "correct": 1,
                "explanation": "Ghi nhớ cốt lõi: Nhiệt độ của vật càng cao thì tốc độ chuyển động nhiệt hỗn loạn của các phân tử cấu tạo nên vật càng lớn."
            },
            {
                "id": "u1_mc_03",
                "conceptId": "c_u1_chuyen_dong_brown",
                "image": "images/brownian_motion.jpg",
                "type": "multiple_choice",
                "level": "Nhận biết",
                "question": "Trong thí nghiệm của Robert Brown (1827), các hạt phấn hoa trong nước chuyển động hỗn loạn không ngừng là do",
                "options": [
                    "Chuyển động hỗn loạn, không ngừng của các hạt bụi rất nhỏ lơ lửng trong chất lỏng hoặc chất khí do bị các phân tử môi trường va chạm không đồng đều từ mọi phía.",
                    "Chuyển động có hướng xác định của các hạt bụi dưới tác dụng của lực hấp dẫn và lực cản của môi trường chất lỏng hoặc chất khí xung quanh.",
                    "Chuyển động tuần hoàn theo chu kỳ của các phân tử chất lỏng hoặc chất khí do sự chênh lệch khối lượng riêng khi bị đun nóng ở đáy bình chứa.",
                    "Chuyển động dao động điều hòa của các hạt mang điện tích dưới tác dụng của từ trường Trái Đất và điện trường khí quyển trong không gian tự do."
                ],
                "correct": 0,
                "explanation": "Ghi nhớ cốt lõi: Chuyển động Brown là minh chứng thực nghiệm chứng minh các phân tử nước chuyển động nhiệt hỗn loạn không ngừng; tại mỗi thời điểm số phân tử nước va chạm vào các phía của hạt phấn hoa không đều nhau, gây ra chuyển động zic-zắc không ngừng."
            },
            {
                "id": "u1_mc_04",
                "conceptId": "c_u1_luc_tuong_tac",
                "image": "images/intermolecular_forces_r0.jpg",
                "type": "multiple_choice",
                "level": "Nhận biết",
                "question": "Giữa các phân tử cấu tạo nên chất luôn tồn tại",
                "options": [
                    "Bao gồm cả lực hút và lực đẩy phân tử; độ lớn của chúng phụ thuộc vào khoảng cách giữa các phân tử cấu tạo nên chất.",
                    "Chỉ xuất hiện lực hút khi vật ở thể rắn và chỉ xuất hiện lực đẩy khi các phân tử chuyển động hỗn loạn tự do ở thể khí.",
                    "Chỉ gồm lực hút tĩnh điện giữa các electron ngoài cùng mà hoàn toàn không có lực đẩy tương tác giữa các hạt nhân.",
                    "Luôn luôn là lực đẩy có độ lớn cố định không phụ thuộc vào khoảng cách hay nhiệt độ chuyển động của hệ vật chất."
                ],
                "correct": 0,
                "explanation": "Ghi nhớ cốt lõi: Giữa các phân tử luôn tồn tại đồng thời cả lực hút và lực đẩy phân tử."
            },
            {
                "id": "u1_mc_05",
                "conceptId": "c_u1_luc_tuong_tac_khoang_cach",
                "image": "images/intermolecular_forces_r0.jpg",
                "type": "multiple_choice",
                "level": "Thông hiểu",
                "question": "Ở khoảng cách cân bằng $r_0$ giữa hai phân tử, lực hút và lực đẩy triệt tiêu nhau ($F = 0$). Khi đưa hai phân tử lại gần nhau hơn khoảng cách $r_0$ ($r < r_0$) thì",
                "options": [
                    "Khi khoảng cách giữa các phân tử rất lớn thì lực đẩy chiếm ưu thế còn lực hút phân tử bị triệt tiêu hoàn toàn về mức bằng 0.",
                    "Khi khoảng cách giữa các phân tử giảm đi thì lực hút tăng lên rất nhanh còn lực đẩy tương tác giữa các hạt nhân không thay đổi.",
                    "Khi khoảng cách giữa các phân tử rất nhỏ thì lực đẩy chiếm ưu thế, còn khi khoảng cách đủ lớn thì lực hút phân tử chiếm ưu thế.",
                    "Lực tương tác giữa các phân tử luôn là lực hút thuần túy và không bao giờ xuất hiện lực đẩy tĩnh điện trong cấu trúc chất rắn."
                ],
                "correct": 2,
                "explanation": "Ghi nhớ cốt lõi: Khi $r < r_0$, lực đẩy tăng nhanh hơn lực hút nên lực đẩy chiếm ưu thế. Điều này giải thích tại sao chất rắn và chất lỏng rất khó bị nén lại."
            },
            {
                "id": "u1_mc_06",
                "conceptId": "c_u1_khoang_cach_phan_tu",
                "image": "images/gas_molecular_distance.jpg",
                "type": "multiple_choice",
                "level": "Nhận biết",
                "question": "Khoảng cách giữa các phân tử ở thể khí so với kích thước phân tử thì",
                "options": [
                    "Lực tương tác giữa các phân tử chủ yếu là lực đẩy vì lực hút bị triệt tiêu hoàn toàn khi các phân tử rời xa nhau.",
                    "Lực tương tác giữa các phân tử chủ yếu là lực hút vì lực đẩy giảm nhanh hơn lực hút khi khoảng cách tăng lên.",
                    "Lực hút và lực đẩy phân tử luôn triệt tiêu lẫn nhau khiến tổng hợp lực tương tác giữa hai phân tử luôn bằng 0.",
                    "Lực tương tác phân tử biến mất hoàn toàn và các phân tử lập tức chuyển động như các hạt tự do độc lập với nhau."
                ],
                "correct": 1,
                "explanation": "Ghi nhớ cốt lõi: Ở thể khí, các phân tử ở rất xa nhau (khoảng cách trung bình gấp hàng chục lần kích thước phân tử), do đó lực tương tác giữa chúng rất yếu."
            },
            {
                "id": "u1_mc_07",
                "conceptId": "c_u1_dac_diem_the_chat",
                "image": "images/three_states_matter.jpg",
                "type": "multiple_choice",
                "level": "Nhận biết",
                "question": "Thể nào sau đây của vật chất có thể tích và hình dạng riêng xác định?",
                "options": [
                    "Thể rắn có thể tích và hình dạng xác định; thể lỏng có thể tích xác định nhưng hình dạng phụ thuộc bình chứa; thể khí không có hình dạng và thể tích riêng.",
                    "Thể rắn có hình dạng xác định nhưng thể tích thay đổi; thể lỏng không có thể tích xác định; thể khí luôn có hình dạng và thể tích cố định không đổi.",
                    "Thể rắn và thể lỏng đều không có thể tích xác định; chỉ có thể khí là có thể tích xác định nhờ lực tương tác giữa các phân tử khí rất mạnh mẽ.",
                    "Cả ba thể rắn, lỏng, khí đều có hình dạng và thể tích xác định độc lập với bình chứa do khoảng cách giữa các phân tử luôn bằng nhau."
                ],
                "correct": 0,
                "explanation": "Ghi nhớ cốt lõi: Thể rắn có thể tích và hình dạng riêng xác định vì các phân tử liên kết rất chặt chẽ và chỉ dao động nhỏ quanh vị trí cân bằng cố định."
            },
            {
                "id": "u1_mc_08",
                "conceptId": "c_u1_chat_ran_tinh_the",
                "image": "images/crystal_vs_amorphous.jpg",
                "type": "multiple_choice",
                "level": "Thông hiểu",
                "question": "Đặc điểm nào sau đây giúp phân biệt chất rắn kết tinh (như muối ăn, thạch anh) với chất rắn vô định hình (như thủy tinh, nhựa đường)?",
                "options": [
                    "Chất rắn kết tinh không có nhiệt độ nóng chảy xác định mà mềm dần trong một khoảng nhiệt độ rất rộng khi bị đốt nóng liên tục.",
                    "Chất rắn kết tinh có cấu trúc tinh thể trật tự tuần hoàn và có nhiệt độ nóng chảy hoàn toàn xác định ở một áp suất khí quyển cho trước.",
                    "Chất rắn kết tinh luôn có tính đẳng hướng về mọi tính chất vật lý như độ dẫn điện, độ dẫn nhiệt và tốc độ truyền sóng âm thanh.",
                    "Chất rắn kết tinh không có cấu trúc hạt trật tự mà các hạt phân tử liên kết ngẫu nhiên tương tự như cấu trúc vi mô của chất lỏng."
                ],
                "correct": 1,
                "explanation": "Ghi nhớ cốt lõi: Chất rắn kết tinh có cấu trúc mạng tinh thể tuần hoàn trật tự xa và có nhiệt độ nóng chảy xác định ở một áp suất cho trước. Chất rắn vô định hình không có cấu trúc tinh thể và không có nhiệt độ nóng chảy xác định (nó mềm dần khi nhiệt độ tăng)."
            },
            {
                "id": "u1_mc_09",
                "conceptId": "c_u1_di_huong_dang_huong",
                "image": "images/anisotropic_crystal.jpg",
                "type": "multiple_choice",
                "level": "Thông hiểu",
                "question": "Tính dị hướng (các tính chất vật lý như độ dãn dài nhiệt, độ dẫn nhiệt... theo các hướng khác nhau là khác nhau) là tính chất đặc trưng của",
                "options": [
                    "Chất rắn đơn tinh thể có tính dị hướng vì cấu trúc tinh thể của nó trật tự tuần hoàn theo các phương không gian khác nhau trong mạng lưới.",
                    "Chất rắn đơn tinh thể có tính đẳng hướng vì các hạt nguyên tử chuyển động nhiệt hỗn loạn đồng đều theo mọi phương không gian trong vật thể.",
                    "Chất rắn đa tinh thể có tính dị hướng mạnh mẽ do kích thước của các hạt tinh thể con bên trong cấu trúc quá nhỏ bé không đồng đều nhau.",
                    "Tính dị hướng hay đẳng hướng của vật rắn chỉ phụ thuộc vào màu sắc bề mặt và khả năng phản xạ ánh sáng của vật mà không do cấu trúc."
                ],
                "correct": 0,
                "explanation": "Ghi nhớ cốt lõi: Chất rắn đơn tinh thể có tính dị hướng vì cấu trúc hạt theo các phương khác nhau không giống nhau. Ngược lại, chất rắn đa tinh thể và chất rắn vô định hình có tính đẳng hướng (tính chất vật lý như nhau theo mọi hướng)."
            },
            {
                "id": "u1_mc_10",
                "conceptId": "c_u1_su_thang_hoa_ngung_ket",
                "image": "images/phase_transition_diagram.jpg",
                "type": "multiple_choice",
                "level": "Nhận biết",
                "question": "Hiện tượng một chất chuyển trực tiếp từ thể rắn sang thể khí mà không qua thể lỏng được gọi là",
                "options": [
                    "Sự bay hơi.",
                    "Sự sôi.",
                    "Sự thăng hoa.",
                    "Sự ngưng kết."
                ],
                "correct": 2,
                "explanation": "Ghi nhớ cốt lõi: Sự chuyển trực tiếp từ thể rắn sang thể khí gọi là sự thăng hoa (ví dụ: băng phiến, tuyết carbon dioxide / đá khô). Quá trình ngược lại từ thể khí sang thể rắn gọi là sự ngưng kết (ví dụ: sương muối)."
            },
            {
                "id": "u1_mc_11",
                "conceptId": "c_u1_hien_tuong_tuyet_tan",
                "image": "images/snow_melting_cold.jpg",
                "type": "multiple_choice",
                "level": "Thông hiểu",
                "question": "Vào mùa đông ở các xứ lạnh, khi tuyết tan, người ta thường cảm thấy không khí xung quanh trở nên lạnh buốt hơn so với lúc tuyết đang rơi. Nguyên nhân vật lý là do",
                "options": [
                    "Nước đá có khối lượng riêng nhẹ hơn nước thường nên diện tích tiếp xúc với chất lỏng tăng lên làm nước nguội đi nhanh chóng.",
                    "Nước đá khi tan cần hấp thụ nhiệt nóng chảy rất lớn từ nước cam để phá vỡ mạng tinh thể, làm giảm nhiệt độ của ly nước cam hiệu quả.",
                    "Nước đá ngăn cản nhiệt lượng từ không khí ấm bên ngoài truyền vào ly nước cam nhờ tạo thành một màng chắn cách nhiệt tự nhiên trên mặt.",
                    "Nước đá tạo ra các dòng điện ly giải phóng năng lượng liên kết làm giảm động năng chuyển động của các phân tử đường trong ly nước cam."
                ],
                "correct": 1,
                "explanation": "Ghi nhớ cốt lõi: Sự nóng chảy là quá trình chuyển thể thu nhiệt. Khi tuyết tan, nó thu nhiệt lượng từ môi trường không khí xung quanh, làm nhiệt độ môi trường giảm xuống khiến ta cảm thấy lạnh buốt."
            },
            {
                "id": "u1_mc_12",
                "conceptId": "c_u1_bay_hoi_va_cac_yeu_to",
                "image": "images/evaporation_factors.jpg",
                "type": "multiple_choice",
                "level": "Nhận biết",
                "question": "Tốc độ bay hơi của một chất lỏng KHÔNG phụ thuộc vào yếu tố nào sau đây?",
                "options": [
                    "Gấp quần áo lại cho gọn gàng và phơi trong phòng kín gió để tránh nhiệt lượng từ ánh sáng mặt trời làm hỏng sợi vải quần áo.",
                    "Trải rộng quần áo (tăng diện tích mặt thoáng), phơi ở nơi có nắng ấm và nhiều gió lưu thông để tăng tối đa tốc độ bay hơi của nước.",
                    "Cho quần áo vào túi nilon đậy kín dưới trời nắng gắt để giữ hơi nước bốc lên tạo áp suất cao làm khô vải từ bên trong sợi bông.",
                    "Treo quần áo sát khít vào nhau trong phòng tắm ẩm ướt để giữ độ ẩm đồng đều và hạn chế sự bốc hơi quá nhanh làm nhăn bề mặt vải."
                ],
                "correct": 1,
                "explanation": "Ghi nhớ cốt lõi: Tốc độ bay hơi chỉ phụ thuộc vào nhiệt độ chất lỏng, diện tích mặt thoáng, tốc độ gió và độ ẩm không khí. Nó hoàn toàn không phụ thuộc vào khối lượng riêng hay chất liệu của bình chứa."
            },
            {
                "id": "u1_mc_13",
                "conceptId": "c_u1_su_ngung_tu",
                "image": "images/dew_condensation.jpg",
                "type": "multiple_choice",
                "level": "Nhận biết",
                "question": "Hiện tượng các giọt nước đọng trên bề mặt ngoài của một cốc nước đá để trong phòng kín là ví dụ về",
                "options": [
                    "Nước từ rễ cây được đẩy mạnh lên lá rồi tự động thẩm thấu ngược qua biểu bì lá vào thời điểm sáng sớm mát mẻ.",
                    "Hơi nước trong không khí gặp lạnh vào ban đêm ngưng tụ lại thành các giọt nước lỏng đọng trên bề mặt lá cây.",
                    "Không khí bị ion hóa mạnh vào ban đêm làm các phân tử khí oxy và hydro tự phát liên kết tạo thành các hạt nước.",
                    "Hiện tượng thăng hoa của băng tuyết ngầm trong đất bốc lên gặp sương sớm chuyển thành các giọt nước đọng trên lá."
                ],
                "correct": 1,
                "explanation": "Ghi nhớ cốt lõi: Thành cốc lạnh làm các phân tử hơi nước trong không khí chuyển động chậm lại, liên kết với nhau chuyển từ thể khí sang thể lỏng đọng lại thành giọt nước (quá trình ngưng tụ)."
            },
            {
                "id": "u1_mc_14",
                "conceptId": "c_u1_noi_ap_suat",
                "image": "images/pressure_cooker_boiling.jpg",
                "type": "multiple_choice",
                "level": "Thông hiểu",
                "question": "Nồi áp suất giúp nấu chín thức ăn nhanh và mềm hơn nồi thông thường vì",
                "options": [
                    "Khi đậy kín, áp suất khí và hơi trong nồi tăng cao làm nhiệt độ sôi của nước tăng lên vượt quá $100^\\circ\\text{C}$.",
                    "Nắp nồi kín làm cản trở nhiệt lượng thoát ra ngoài giúp ngọn lửa bếp gas truyền vào nồi mạnh hơn bình thường.",
                    "Áp suất nén cao ép chặt thức ăn làm giảm nhiệt dung riêng của thực phẩm giúp chúng hấp thụ nhiệt nhanh hơn.",
                    "Hơi nước nén chặt trong nồi tạo ra các tia bức xạ hồng ngoại cường độ cao làm thức ăn chín đều từ bên trong."
                ],
                "correct": 0,
                "explanation": "Ghi nhớ cốt lõi: Nhiệt độ sôi của chất lỏng phụ thuộc vào áp suất trên mặt thoáng. Áp suất khí càng cao thì nhiệt độ sôi của nước càng cao (trong nồi áp suất, áp suất có thể lên đến $2\\text{ atm}$, nước sôi ở khoảng $120^\\circ\\text{C}$ giúp thức ăn chín nhanh hơn)."
            },
            {
                "id": "u1_tf_ext1",
                "conceptId": "c_u1_so_sanh_vd",
                "image": "images/crystal_vs_amorphous.jpg",
                "type": "multi_tf",
                "level": "Vận dụng cao",
                "context": "Trong thực tiễn sản xuất kim loại và pha lê, sự chuyển thể có những đặc tính quan trọng:",
                "statements": [
                    {
                        "text": "Chất rắn vô định hình như thủy tinh có nhiệt độ nóng chảy xác định.",
                        "isCorrect": false
                    },
                    {
                        "text": "Khi hàn kim loại, người thợ dùng hợp kim có nhiệt độ nóng chảy thấp hơn kim loại cơ bản.",
                        "isCorrect": true
                    },
                    {
                        "text": "Pha lê là chất rắn kết tinh, nên nó sẽ có nhiệt độ nóng chảy cố định.",
                        "isCorrect": true
                    },
                    {
                        "text": "Nước muối sẽ đóng băng ở đúng 0°C.",
                        "isCorrect": false
                    }
                ],
                "explanation": "Vô định hình không có nhiệt độ nóng chảy xác định. Que hàn cần chảy trước. Pha lê kết tinh có T nc cố định. Nước có tạp chất đóng băng < 0°C."
            },
            {
                "id": "u1_tf_ext2",
                "conceptId": "c_u1_ung_dung_vd",
                "image": "images/snow_melting_cold.jpg",
                "type": "multi_tf",
                "level": "Vận dụng cao",
                "context": "Xét quá trình nóng chảy của băng tuyết vào mùa xuân ở vùng ôn đới:",
                "statements": [
                    {
                        "text": "Trong quá trình tuyết tan, dù nhận nhiệt từ mặt trời nhưng nhiệt độ của tuyết không đổi.",
                        "isCorrect": true
                    },
                    {
                        "text": "Nhiệt lượng tỏa ra khi tuyết tan làm môi trường xung quanh ấm lên.",
                        "isCorrect": false
                    },
                    {
                        "text": "Người ta rải muối lên tuyết để làm tăng nhiệt độ nóng chảy của tuyết.",
                        "isCorrect": false
                    },
                    {
                        "text": "Rải muối làm tuyết tan thành nước ở nhiệt độ dưới 0°C, tránh trơn trượt.",
                        "isCorrect": true
                    }
                ],
                "explanation": "Tan thu nhiệt nên làm môi trường lạnh (2 sai). Muối làm GIẢM nhiệt độ đóng băng, giúp băng tan ngay cả ở âm độ (3 sai, 4 đúng)."
            },
            {
                "id": "u1_tf_01",
                "conceptId": "c_u1_chuyen_the_nuoc",
                "image": "images/three_states_matter.jpg",
                "type": "multi_tf",
                "level": "Thông hiểu",
                "context": "Hình vẽ mô tả đồ thị nhiệt độ theo thời gian của 1 kg nước đá ở $-10^\\circ\\text{C}$ được đun nóng liên tục đến khi hóa hơi hoàn toàn ở áp suất tiêu chuẩn $1\\text{ atm}$. Xét tính đúng/sai của các phát biểu sau:",
                "statements": [
                    {
                        "text": "Đoạn từ $-10^\\circ\\text{C}$ đến $0^\\circ\\text{C}$, nước đá thu nhiệt lượng để tăng nhiệt độ và nội năng của khối chất tăng lên.",
                        "isCorrect": true
                    },
                    {
                        "text": "Trong suốt thời gian nóng chảy ở $0^\\circ\\text{C}$, nhiệt độ của khối nước đá không đổi dù nhiệt lượng vẫn tiếp tục được cung cấp.",
                        "isCorrect": true
                    },
                    {
                        "text": "Quá trình nóng chảy của nước đá ở $0^\\circ\\text{C}$ là quá trình phá vỡ mạng tinh thể trật tự của chất rắn để chuyển sang cấu trúc trật tự gần của chất lỏng.",
                        "isCorrect": true
                    },
                    {
                        "text": "Khi nước sôi ở $100^\\circ\\text{C}$, nếu cung cấp thêm nhiệt lượng thì nhiệt độ của nước lỏng sẽ lập tức tăng lên trên $100^\\circ\\text{C}$.",
                        "isCorrect": false
                    }
                ],
                "explanation": "Ghi nhớ cốt lõi: Trong suốt quá trình nóng chảy ($0^\\circ\\text{C}$) và sôi ($100^\\circ\\text{C}$) của nước tinh khiết ở áp suất chuẩn, nhiệt độ luôn giữ không đổi (đoạn nằm ngang trên đồ thị). Nhiệt lượng cung cấp được dùng để phá vỡ liên kết giữa các phân tử chuyển thể."
            },
            {
                "id": "u1_tf_02",
                "conceptId": "c_u1_bay_hoi_va_soi",
                "image": "images/three_states_matter.jpg",
                "type": "multi_tf",
                "level": "Thông hiểu",
                "context": "Xét hai quá trình chuyển thể từ thể lỏng sang thể khí là sự bay hơi và sự sôi của nước ở áp suất tiêu chuẩn $1\\text{ atm}$. Xét tính đúng/sai của các phát biểu sau:",
                "statements": [
                    {
                        "text": "Sự bay hơi chỉ diễn ra ở bề mặt thoáng của chất lỏng và xảy ra ở mọi nhiệt độ.",
                        "isCorrect": true
                    },
                    {
                        "text": "Sự sôi là quá trình bay hơi đặc biệt, diễn ra đồng thời ở cả bề mặt thoáng và trong lòng khối chất lỏng.",
                        "isCorrect": true
                    },
                    {
                        "text": "Ở áp suất tiêu chuẩn, nước có thể sôi ở bất kỳ nhiệt độ nào nếu ta đun bằng ngọn lửa thật lớn.",
                        "isCorrect": false
                    },
                    {
                        "text": "Khi tăng áp suất khí quyển phía trên mặt thoáng thì nhiệt độ sôi của chất lỏng sẽ tăng lên.",
                        "isCorrect": true
                    }
                ],
                "explanation": "Ghi nhớ cốt lõi: Sự bay hơi xảy ra ở bề mặt thoáng ở mọi nhiệt độ. Sự sôi chỉ xảy ra ở nhiệt độ sôi xác định (phụ thuộc áp suất mặt thoáng), với sự hình thành và vỡ ra của các bọt khí trong lòng chất lỏng."
            },
            {
                "id": "u1_sa_01",
                "conceptId": "c_u1_nhiet_nong_chay_vd",
                "image": "images/phase_transition_diagram.jpg",
                "type": "short_answer",
                "level": "Vận dụng",
                "question": "Tính nhiệt lượng cần cung cấp để làm nóng chảy hoàn toàn khối nhôm $2\\text{ kg}$ ở nhiệt độ nóng chảy $660^{\\circ}\\text{C}$. Biết nhiệt nóng chảy riêng của nhôm là $3{,}9 \\times 10^5\\text{ J/kg}$. (Nhập kết quả theo đơn vị $\\text{kJ}$)",
                "answer": "780",
                "unit": "kJ",
                "tolerance": 0.01,
                "explanation": "Nhiệt lượng nóng chảy: $Q = m\\lambda = 2 \\times 3{,}9 \\times 10^5 = 780\\,000\\text{ J} = 780\\text{ kJ}$."
            },
            {
                "id": "u1_sa_02",
                "conceptId": "c_u1_hoa_hoi_vd",
                "image": "images/evaporation_factors.jpg",
                "type": "short_answer",
                "level": "Vận dụng",
                "question": "Cần cung cấp một nhiệt lượng bao nhiêu $\\text{kJ}$ để làm hoá hơi hoàn toàn $0{,}5\\text{ kg}$ nước ở $100^{\\circ}\\text{C}$? Biết nhiệt hoá hơi riêng của nước là $L = 2{,}26 \\times 10^6\\text{ J/kg}$.",
                "answer": "1130",
                "unit": "kJ",
                "tolerance": 0.01,
                "explanation": "Nhiệt lượng hoá hơi: $Q = m L = 0{,}5 \\times 2{,}26 \\times 10^6 = 1\\,130\\,000\\text{ J} = 1130\\text{ kJ}$."
            },
            {
                "id": "u1_sa_03",
                "conceptId": "c_u1_chuyen_hoa_nang_luong",
                "image": "images/crystal_vs_amorphous.jpg",
                "type": "short_answer",
                "level": "Vận dụng cao",
                "question": "Một vật bằng chì có khối lượng $0{,}2\\text{ kg}$ rơi tự do từ độ cao $h = 50\\text{ m}$ xuống một tấm thép cứng. Giả sử $80\\%$ cơ năng chuyển thành nhiệt làm nóng vật chì. Cho $g = 9{,}8\\text{ m/s}^2$, nhiệt dung riêng của chì $c = 130\\text{ J/kg.K}$. Độ tăng nhiệt độ $\\Delta T$ của vật chì bằng bao nhiêu $^{\\circ}\\text{C}$ (làm tròn đến 1 chữ số thập phân)?",
                "answer": "3.0",
                "unit": "°C",
                "tolerance": 0.05,
                "explanation": "Nhiệt lượng hấp thụ: $Q = 0{,}8 \\times m g h = m c \\Delta T \\Rightarrow \\Delta T = \\frac{0{,}8 \\times 9{,}8 \\times 50}{130} = \\frac{392}{130} \\approx 3{,}0^{\\circ}\\text{C}$."
            },
            {
                "id": "u1_sa_04",
                "conceptId": "c_u1_nhiet_nong_chay_vd",
                "image": "images/snow_melting_cold.jpg",
                "type": "short_answer",
                "level": "Vận dụng cao",
                "question": "Thả một cục nước đá khối lượng $100\\text{ g}$ ở $0^{\\circ}\\text{C}$ vào một cốc chứa $300\\text{ g}$ nước ở $20^{\\circ}\\text{C}$. Bỏ qua nhiệt dung của cốc và hao phí nhiệt. Biết $\\lambda = 3{,}34 \\times 10^5\\text{ J/kg}$, $c = 4200\\text{ J/kg.K}$. Khối lượng nước đá tan ra bằng bao nhiêu gam (làm tròn đến 1 chữ số thập phân)?",
                "answer": "75.4",
                "unit": "gam",
                "tolerance": 0.02,
                "explanation": "Nhiệt tỏa ra khi $300\\text{ g}$ nước hạ về $0^{\\circ}\\text{C}$: $Q_{\\text{tỏa}} = 0{,}3 \\times 4200 \\times 20 = 25\\,200\\text{ J}$. Lượng nước đá tan: $m_{\\text{tan}} = \\frac{25\\,200}{334\\,000} \\approx 0{,}07545\\text{ kg} = 75{,}45\\text{ g} \\approx 75{,}4\\text{ g}$."
            }
        ]
    },
    "unit2": {
        "title": "Bài 2: Nội năng. Định luật I của nhiệt động lực học",
        "questions": [
            {
                "id": "u2_mc_ext1",
                "conceptId": "c_u2_dl1_vd",
                "image": "images/isobaric_work_pv.jpg",
                "type": "multiple_choice",
                "level": "Vận dụng cao",
                "question": "Hệ nhận nhiệt 500 J và thực hiện công 300 J. Sau đó hệ tỏa 150 J và nhận công 50 J. Tổng độ biến thiên nội năng là:",
                "options": [
                    "+100 J",
                    "+200 J",
                    "+500 J",
                    "-100 J"
                ],
                "correct": 0,
                "explanation": "GĐ1: Q1=+500, A1=-300 => ΔU1=+200. GĐ2: Q2=-150, A2=+50 => ΔU2=-100. Tổng: ΔU=+100 J."
            },
            {
                "id": "u2_mc_ext2",
                "conceptId": "c_u2_nhiet_dong_vd2",
                "image": "images/heat_engine_principle.jpg",
                "type": "multiple_choice",
                "level": "Vận dụng cao",
                "question": "Chu trình Carnot thuận gồm 2 quá trình đẳng nhiệt và 2 đoạn nhiệt. Câu nào sai?",
                "options": [
                    "Hiệu suất luôn đạt 100%",
                    "Nhận nhiệt ở nhiệt độ cao",
                    "Tỏa nhiệt ở nhiệt độ thấp",
                    "Là chu trình lý tưởng"
                ],
                "correct": 0,
                "explanation": "Hiệu suất động cơ Carnot luôn nhỏ hơn 100% (1-T2/T1)."
            },
            {
                "id": "u2_mc_01",
                "conceptId": "c_u2_dinh_nghia_noi_nang",
                "image": "images/internal_energy_real_ideal.jpg",
                "type": "multiple_choice",
                "level": "Nhận biết",
                "question": "Nội năng của một vật là",
                "options": [
                    "Tổng động năng chuyển động nhiệt hỗn loạn của các phân tử và thế năng tương tác giữa các phân tử cấu tạo nên vật.",
                    "Tổng động năng chuyển động cơ học của toàn bộ vật thể và thế năng hấp dẫn của vật so với mốc thế năng mặt đất.",
                    "Nhiệt lượng mà vật hấp thụ được từ môi trường ngoài trong suốt quá trình đun nóng hoặc ma sát với các vật khác.",
                    "Năng lượng liên kết hạt nhân nguyên tử của tất cả các nguyên tố hóa học cấu thành nên vật chất của vật thể đó."
                ],
                "correct": 0,
                "explanation": "Ghi nhớ cốt lõi: Nội năng ($U$) của vật là tổng động năng chuyển động nhiệt của các phân tử và thế năng tương tác giữa các phân tử cấu tạo nên vật: $U = E_đ + E_{tt}$."
            },
            {
                "id": "u2_mc_02",
                "conceptId": "c_u2_phu_thuoc_noi_nang",
                "image": "images/internal_energy_real_ideal.jpg",
                "type": "multiple_choice",
                "level": "Nhận biết",
                "question": "Nội năng của một lượng chất thực nói chung phụ thuộc vào các thông số trạng thái nào sau đây?",
                "options": [
                    "Thế năng tương tác giữa các phân tử đồng tăng mạnh do khoảng cách giữa các nguyên tử tăng lên đáng kể khi bị đốt nóng liên tục.",
                    "Động năng chuyển động nhiệt hỗn loạn của các nguyên tử đồng quanh vị trí cân bằng tăng lên do nhiệt độ của thanh đồng tăng cao.",
                    "Số lượng nguyên tử đồng bên trong thanh tăng thêm do vật thể hấp thụ thêm vật chất từ ngọn lửa của lò nung truyền vào thanh.",
                    "Khối lượng của thanh đồng tăng lên đáng kể do năng lượng nhiệt chuyển hóa thành khối lượng nghỉ theo thuyết tương đối của Einstein."
                ],
                "correct": 1,
                "explanation": "Ghi nhớ cốt lõi: Động năng phân tử phụ thuộc vào nhiệt độ ($T$), còn thế năng tương tác phân tử phụ thuộc vào khoảng cách giữa các phân tử tức là thể tích ($V$). Do đó nội năng $U = f(T, V)$."
            },
            {
                "id": "u2_mc_03",
                "conceptId": "c_u2_khi_ly_tuong_noi_nang",
                "image": "images/internal_energy_real_ideal.jpg",
                "type": "multiple_choice",
                "level": "Thông hiểu",
                "question": "Đối với một khối khí lý tưởng xác định, nội năng của khối khí",
                "options": [
                    "Các phân tử khí lý tưởng được coi là chất điểm không có khối lượng nên động năng chuyển động nhiệt của chúng luôn luôn bằng 0.",
                    "Mô hình khí lý tưởng bỏ qua lực tương tác giữa các phân tử khi không va chạm, do đó thế năng tương tác phân tử bằng 0, nội năng chỉ là tổng động năng.",
                    "Thể tích riêng của các phân tử khí lý tưởng luôn bằng 0 nên áp suất khối khí không thể sinh công trong các quá trình biến đổi trạng thái.",
                    "Nhiệt độ của khối khí lý tưởng luôn được giữ cố định ở $0\\text{ K}$ trong mọi quá trình nhiệt động học theo định nghĩa của chất khí."
                ],
                "correct": 1,
                "explanation": "Ghi nhớ cốt lõi: Trong mô hình khí lý tưởng, các phân tử được coi là chất điểm và bỏ qua lực tương tác phân tử (ngoại trừ khi va chạm). Do thế năng tương tác bằng 0, nội năng của khí lý tưởng CHỈ là tổng động năng của các phân tử, do đó CHỈ phụ thuộc vào nhiệt độ: $U = f(T)$."
            },
            {
                "id": "u2_mc_04",
                "conceptId": "c_u2_cac_cach_doi_noi_nang",
                "image": "images/change_internal_energy.jpg",
                "type": "multiple_choice",
                "level": "Nhận biết",
                "question": "Hai cách làm thay đổi nội năng của một vật là",
                "options": [
                    "Thả miếng kim loại đang nguội vào một cốc nước sôi để nhiệt lượng truyền tự phát từ nước sôi sang miếng kim loại làm nó nóng lên.",
                    "Dùng búa đập liên tục nhiều lần vào một thanh sắt đặt trên đe làm thanh sắt biến dạng cơ học và nóng lên rõ rệt sau một lúc.",
                    "Phơi một miếng tôn kim loại ngoài trời nắng gắt trong nhiều giờ liền để hấp thụ năng lượng bức xạ nhiệt từ Mặt Trời chiếu vào.",
                    "Áp miếng kim loại đang nóng vào một khối nước đá để nhiệt lượng từ miếng kim loại truyền sang khối nước đá làm nó tan chảy."
                ],
                "correct": 1,
                "explanation": "Ghi nhớ cốt lõi: Có hai cách cơ bản làm thay đổi nội năng của một vật: Thực hiện công (có sự chuyển hóa từ cơ năng thành nội năng) và Truyền nhiệt (chỉ có sự truyền nội năng mà không chuyển hóa năng lượng)."
            },
            {
                "id": "u2_mc_05",
                "conceptId": "c_u2_ban_chat_nhiet_luong",
                "image": "images/change_internal_energy.jpg",
                "type": "multiple_choice",
                "level": "Thông hiểu",
                "question": "Phát biểu nào sau đây về nhiệt lượng là ĐÚNG về mặt bản chất vật lý?",
                "options": [
                    "Nhiệt lượng là một dạng năng lượng dự trữ sẵn bên trong vật thể tương tự như nội năng hoặc thế năng hấp dẫn của vật.",
                    "Nhiệt lượng không phải là dạng năng lượng chứa trong vật, mà là số đo phần nội năng được truyền đi trong quá trình truyền nhiệt.",
                    "Nhiệt lượng là đại lượng đặc trưng cho mức độ nóng lạnh của một vật thể và có giá trị tỷ lệ thuận với nhiệt độ Kelvin của vật.",
                    "Nhiệt lượng là phần cơ năng chuyển hóa thành năng lượng nhiệt khi hai vật thể chuyển động va chạm trực tiếp với nhau."
                ],
                "correct": 1,
                "explanation": "Ghi nhớ cốt lõi: Vật chỉ chứa nội năng chứ không chứa nhiệt lượng. Nhiệt lượng ($Q$) là số đo phần nội năng mà vật nhận được hay mất đi trong quá trình truyền nhiệt: $\\Delta U = Q$."
            },
            {
                "id": "u2_mc_06",
                "conceptId": "c_u2_bieu_thuc_dl1",
                "image": "images/dl1_thermodynamics_piston.jpg",
                "type": "multiple_choice",
                "level": "Nhận biết",
                "question": "Hệ thức nào sau đây diễn tả đúng Định luật I của nhiệt động lực học?",
                "options": [
                    "Sự vận dụng định luật bảo toàn và chuyển hóa năng lượng vào các hiện tượng biến đổi trạng thái nhiệt của các hệ nhiệt động lực học.",
                    "Định luật về sự nở vì nhiệt của các vật rắn và chất lỏng khi nhiệt độ của môi trường xung quanh thay đổi theo thời gian thực nghiệm.",
                    "Định luật xác định vận tốc chuyển động tịnh tiến trung bình của các phân tử chất khí theo căn bậc hai của nhiệt độ tuyệt đối Kelvin.",
                    "Định luật về sự bảo toàn điện tích và dòng điện dẫn trong các vật dẫn kim loại khi có sự chênh lệch nhiệt độ giữa hai đầu tiếp giáp."
                ],
                "correct": 0,
                "explanation": "Ghi nhớ cốt lõi: Hệ thức Định luật I nhiệt động lực học: $\\Delta U = A + Q$, trong đó $\\Delta U$ là độ biến thiên nội năng, $A$ và $Q$ là công và nhiệt lượng mà hệ nhận được."
            },
            {
                "id": "u2_mc_07",
                "conceptId": "c_u2_quy_uoc_dau_q",
                "image": "images/dl1_thermodynamics_piston.jpg",
                "type": "multiple_choice",
                "level": "Nhận biết",
                "question": "Theo quy ước dấu trong Định luật I nhiệt động lực học, khi hệ NHẬN nhiệt lượng từ môi trường bên ngoài thì",
                "options": [
                    "$Q > 0$ vì khối băng tuyết nhận nhiệt lượng từ môi trường không khí xung quanh để phá vỡ mạng tinh thể chất rắn chuyển thành thể lỏng.",
                    "$Q < 0$ vì khối băng tuyết làm cho môi trường không khí xung quanh bị lạnh đi rõ rệt trong suốt quá trình băng tan thành nước lỏng.",
                    "$Q = 0$ vì trong suốt quá trình tan chảy thì nhiệt độ của khối băng tuyết luôn giữ cố định không đổi ở mốc nhiệt độ $0^\\circ\\text{C}$.",
                    "$Q$ luôn có độ lớn bằng đúng công cơ học $A$ do áp suất khí quyển nén lên bề mặt của khối băng tuyết theo nguyên lý cân bằng năng lượng."
                ],
                "correct": 0,
                "explanation": "Ghi nhớ cốt lõi: Quy ước dấu nhiệt lượng: $Q > 0$ khi hệ nhận nhiệt lượng từ môi trường; $Q < 0$ khi hệ truyền (tỏa) nhiệt lượng cho môi trường."
            },
            {
                "id": "u2_mc_08",
                "conceptId": "c_u2_quy_uoc_dau_a",
                "image": "images/dl1_thermodynamics_piston.jpg",
                "type": "multiple_choice",
                "level": "Nhận biết",
                "question": "Khi một khối khí trong xi lanh dãn nở đẩy pít-tông di chuyển ra phía ngoài (khí thực hiện công lên môi trường), theo quy ước dấu của Định luật I thì công $A$ mà khối khí nhận được có giá trị",
                "options": [
                    "$A > 0$ vì khối khí có áp suất rất lớn đẩy pít-tông chuyển động tịnh tiến với gia tốc lớn làm tăng động năng của toàn bộ hệ cơ học.",
                    "$A < 0$ vì khối khí thực hiện công cơ học lên pít-tông (sinh công ra môi trường bên ngoài làm quay trục khuỷu của động cơ nhiệt).",
                    "$A = 0$ vì pít-tông chuyển động quá nhanh khiến lực ma sát cơ học triệt tiêu hoàn toàn công dãn nở của khối khí đốt trong xi lanh.",
                    "Công $A$ không thể xác định được dấu vì thể tích khối khí vừa tăng vừa giảm liên tục theo chu kỳ hoạt động bốn kỳ của động cơ."
                ],
                "correct": 1,
                "explanation": "Ghi nhớ cốt lõi: Quy ước dấu công: $A > 0$ khi hệ nhận công từ ngoại lực (khối khí bị nén, thể tích giảm); $A < 0$ khi hệ sinh công ra môi trường (khối khí dãn nở, thể tích tăng)."
            },
            {
                "id": "u2_mc_09",
                "conceptId": "c_u2_tinh_delta_u_1",
                "image": "images/dl1_thermodynamics_piston.jpg",
                "type": "multiple_choice",
                "level": "Thông hiểu",
                "question": "Người ta cung cấp cho khối khí trong xi lanh nhiệt lượng $Q = 120\\text{ J}$, đồng thời ngoại lực thực hiện công nén khí là $A = 80\\text{ J}$. Độ biến thiên nội năng của khối khí là",
                "options": [
                    "$\\Delta U = 40\\text{ J}$",
                    "$\\Delta U = -40\\text{ J}$",
                    "$\\Delta U = 200\\text{ J}$",
                    "$\\Delta U = -200\\text{ J}$"
                ],
                "correct": 2,
                "explanation": "Ghi nhớ cốt lõi: Khí nhận nhiệt: $Q = +120\\text{ J}$; khí nhận công (bị nén): $A = +80\\text{ J}$. Áp dụng ĐL I: $\\Delta U = A + Q = 80 + 120 = 200\\text{ J}$ (nội năng tăng thêm $200\\text{ J}$)."
            },
            {
                "id": "u2_mc_10",
                "conceptId": "c_u2_tinh_delta_u_2",
                "image": "images/dl1_thermodynamics_piston.jpg",
                "type": "multiple_choice",
                "level": "Thông hiểu",
                "question": "Một khối khí nhận nhiệt lượng $300\\text{ J}$ từ nguồn nhiệt và dãn nở thực hiện một công $180\\text{ J}$ đẩy pít-tông ra ngoài. Độ biến thiên nội năng của khối khí là",
                "options": [
                    "$\\Delta U = 480\\text{ J}$",
                    "$\\Delta U = 120\\text{ J}$",
                    "$\\Delta U = -120\\text{ J}$",
                    "$\\Delta U = -480\\text{ J}$"
                ],
                "correct": 1,
                "explanation": "Ghi nhớ cốt lõi: Khí nhận nhiệt lượng $Q = +300\\text{ J}$. Khí dãn nở sinh công $A' = 180\\text{ J}$ nên công khí nhận là $A = -A' = -180\\text{ J}$. Do đó $\\Delta U = A + Q = -180 + 300 = 120\\text{ J}$."
            },
            {
                "id": "u2_mc_11",
                "conceptId": "c_u2_cong_dan_dang_ap",
                "image": "images/isobaric_work_pv.jpg",
                "type": "multiple_choice",
                "level": "Thông hiểu",
                "question": "Một khối khí trong xi lanh dãn nở ở áp suất không đổi $p = 2 \\cdot 10^5\\text{ Pa}$, làm thể tích tăng từ $V_1 = 0{,}01\\text{ m}^3$ đến $V_2 = 0{,}015\\text{ m}^3$. Công do khối khí sinh ra ($A'$) có độ lớn là",
                "options": [
                    "$A' = 1000\\text{ J}$",
                    "$A' = 500\\text{ J}$",
                    "$A' = 2000\\text{ J}$",
                    "$A' = 3000\\text{ J}$"
                ],
                "correct": 0,
                "explanation": "Ghi nhớ cốt lõi: Công do chất khí sinh ra trong quá trình dãn nở đẳng áp tính theo công thức: $A' = p \\cdot \\Delta V = p(V_2 - V_1) = 2 \\cdot 10^5 \\cdot (0{,}015 - 0{,}01) = 2 \\cdot 10^5 \\cdot 0{,}005 = 1000\\text{ J}$."
            },
            {
                "id": "u2_mc_12",
                "conceptId": "c_u2_qua_trinh_dang_tich",
                "image": "images/isochoric_process.jpg",
                "type": "multiple_choice",
                "level": "Thông hiểu",
                "question": "Trong quá trình biến đổi đẳng tích của một lượng khí xác định (thể tích không đổi, $\\Delta V = 0$), hệ thức của Định luật I nhiệt động lực học có dạng",
                "options": [
                    "$\\Delta U = A$",
                    "$\\Delta U = Q$",
                    "$A = Q$",
                    "$\\Delta U = 0$"
                ],
                "correct": 1,
                "explanation": "Ghi nhớ cốt lõi: Vì thể tích không đổi ($\\\\Delta V = 0$), khí không dịch chuyển vị trí pít-tông nên không thực hiện công ($A = 0$). Hệ thức ĐL I trở thành: $\\\\Delta U = Q$ (toàn bộ nhiệt lượng truyền cho khối khí được dùng để làm tăng nội năng của nó)."
            },
            {
                "id": "u2_mc_13",
                "conceptId": "c_u2_qua_trinh_doan_nhiet",
                "image": "images/adiabatic_spray.jpg",
                "type": "multiple_choice",
                "level": "Thông hiểu",
                "question": "Khi ta ấn thật nhanh vòi xịt của một bình xịt gas hoặc mở nắp nhanh một chai nước ngọt có gas, ta thấy ở miệng chai có một làn khói sương lạnh xuất hiện. Giải thích nào sau đây là ĐÚNG?",
                "options": [
                    "Khí bên trong bình hấp thụ nhiệt lượng lớn từ không khí xung quanh làm thể tích khối khí tăng lên đột ngột tạo ra làn khói trắng.",
                    "Khí dãn nở rất nhanh sinh công ($A < 0$) trong điều kiện đoạn nhiệt ($Q \\approx 0$), làm nội năng giảm mạnh khiến nhiệt độ hạ làm hơi nước ngưng tụ.",
                    "Áp suất khí giảm đột ngột làm phản ứng hóa học tỏa nhiệt xảy ra tức thì biến đổi các phân tử khí gas thành các hạt khói sương mịn.",
                    "Khí bên trong bình bị ma sát mạnh với thành vòi xịt khi phun ra ngoài làm nhiệt độ tăng cao làm cháy các hạt bụi tạo thành làn khói mỏng."
                ],
                "correct": 1,
                "explanation": "Ghi nhớ cốt lõi: Khi khí dãn nở rất nhanh, không kịp trao đổi nhiệt với môi trường ($Q = 0$, quá trình đoạn nhiệt). Vì khí sinh công đẩy không khí xung quanh ($A < 0$), theo ĐL I: $\\Delta U = A < 0$, nội năng giảm nên nhiệt độ hạ thấp đột ngột, làm hơi nước trong không khí ngưng tụ thành làn khói sương."
            },
            {
                "id": "u2_mc_14",
                "conceptId": "c_u2_bom_xe_dap",
                "image": "images/bicycle_pump_heating.jpg",
                "type": "multiple_choice",
                "level": "Thông hiểu",
                "question": "Khi dùng bơm tay để bơm lốp xe đạp liên tục một lúc, ta sờ vào phần dưới của thân ống bơm thấy rất nóng. Nguyên nhân chính khiến ống bơm bị nóng lên là do",
                "options": [
                    "Khí bị nén nhận công ($A > 0$) làm nội năng và nhiệt độ tăng lên, đồng thời có một phần nhiệt do ma sát giữa pít-tông và thân ống bơm.",
                    "Khí bị nén tỏa nhiệt lượng ra thành ống bơm do các phân tử khí va chạm đàn hồi hoàn toàn với vỏ kim loại của chiếc bơm xe đạp.",
                    "Tay người truyền trực tiếp nhiệt lượng từ cơ thể vào thân ống bơm trong suốt thời gian cầm nắm và tác dụng lực bơm liên tục.",
                    "Áp suất khí bên trong lốp xe đạp truyền ngược sóng nhiệt qua van dẫn vào ống bơm làm kim loại nóng lên nhanh chóng sau vài nhịp."
                ],
                "correct": 0,
                "explanation": "Ghi nhớ cốt lõi: Ống bơm nóng lên do hai nguyên nhân đồng thời: người thực hiện công nén khí làm tăng nội năng và nhiệt độ của khí trong bơm, đồng thời ma sát giữa pít-tông và thành xilanh cũng chuyển hóa cơ năng thành nhiệt làm nóng vỏ bơm."
            },
            {
                "id": "u2_tf_ext1",
                "conceptId": "c_u2_ung_dung_dl1",
                "image": "images/bicycle_pump_heating.jpg",
                "type": "multi_tf",
                "level": "Vận dụng cao",
                "context": "Khi bơm xe đạp bằng tay cầm, ống bơm nóng lên nhanh chóng:",
                "statements": [
                    {
                        "text": "Khí bị nén nhanh (đoạn nhiệt) nhận công A>0 làm nội năng tăng.",
                        "isCorrect": true
                    },
                    {
                        "text": "Nhiệt độ tăng chủ yếu do tay người bơm truyền vào.",
                        "isCorrect": false
                    },
                    {
                        "text": "Ma sát piston cũng sinh nhiệt góp phần làm nóng.",
                        "isCorrect": true
                    },
                    {
                        "text": "Q>0 (nhận nhiệt) và A>0 (nhận công).",
                        "isCorrect": false
                    }
                ],
                "explanation": "Bơm nén đoạn nhiệt Q=0, A>0 => ΔU>0. (2,4 sai). Ma sát cơ học cũng làm nóng (3 đúng)."
            },
            {
                "id": "u2_tf_ext2",
                "conceptId": "c_u2_dong_co_nhiet",
                "image": "images/heat_engine_principle.jpg",
                "type": "multi_tf",
                "level": "Vận dụng cao",
                "context": "Nguyên lý hoạt động động cơ nhiệt:",
                "statements": [
                    {
                        "text": "Không động cơ nào chuyển 100% nhiệt thành công.",
                        "isCorrect": true
                    },
                    {
                        "text": "Hiệu suất động cơ Carnot chỉ phụ thuộc nhiệt độ nguồn nóng/lạnh.",
                        "isCorrect": true
                    },
                    {
                        "text": "Nhiệt độ nguồn lạnh càng cao thì hiệu suất càng lớn.",
                        "isCorrect": false
                    },
                    {
                        "text": "Việc xả nhiệt ra nguồn lạnh là không bắt buộc theo định luật bảo toàn.",
                        "isCorrect": false
                    }
                ],
                "explanation": "Nguyên lý II bắt buộc xả nhiệt (1 đúng, 4 sai). e=1-T2/T1 => T2 (lạnh) càng thấp hiệu suất càng cao (2 đúng, 3 sai)."
            },
            {
                "id": "u2_tf_01",
                "conceptId": "c_u2_xilanh_khi_nen",
                "image": "images/three_states_matter.jpg",
                "type": "multi_tf",
                "level": "Thông hiểu",
                "context": "Một khối khí lí tưởng chứa trong xi lanh kín đặt nằm ngang có pít-tông có thể di chuyển không ma sát. Xét tính đúng/sai của các phát biểu sau:",
                "statements": [
                    {
                        "text": "Nếu ta ấn pít-tông vào thật nhanh (không kịp truyền nhiệt ra ngoài), khối khí nhận công ($A > 0$) làm nội năng tăng lên và nhiệt độ của khối khí tăng.",
                        "isCorrect": true
                    },
                    {
                        "text": "Nếu giữ cố định pít-tông rồi hơ nóng xi lanh, khối khí không sinh công ($A = 0$) và toàn bộ nhiệt lượng nhận vào dùng để tăng nội năng ($\\Delta U = Q$).",
                        "isCorrect": true
                    },
                    {
                        "text": "Nếu khối khí dãn nở đẩy pít-tông ra ngoài trong điều kiện cách nhiệt, nội năng của khối khí không thay đổi vì $Q = 0$.",
                        "isCorrect": false
                    },
                    {
                        "text": "Khi nén chậm khối khí và đồng thời làm mát để giữ nhiệt độ không đổi, nội năng của khối khí lí tưởng không đổi ($\\Delta U = 0$) và công nhận vào bằng nhiệt lượng tỏa ra ($A = -Q$).",
                        "isCorrect": true
                    }
                ],
                "explanation": "Ghi nhớ cốt lõi: Với khí lí tưởng, nội năng chỉ phụ thuộc nhiệt độ. Khi dãn nở đoạn nhiệt ($Q = 0$), khí sinh công ($A < 0$) nên $\\Delta U = A < 0$, nội năng và nhiệt độ phải giảm. Ở quá trình đẳng nhiệt ($T = \\text{const}$), $\\Delta U = 0$ nên $A + Q = 0 \\Rightarrow A = -Q$."
            },
            {
                "id": "u2_tf_02",
                "conceptId": "c_u2_dong_co_nhiet",
                "image": "images/three_states_matter.jpg",
                "type": "multi_tf",
                "level": "Thông hiểu",
                "context": "Xét nguyên lý truyền nhiệt tự phát và nguyên lý hoạt động của động cơ nhiệt trong nhiệt động lực học. Xét tính đúng/sai của các phát biểu sau:",
                "statements": [
                    {
                        "text": "Nhiệt lượng không thể tự động truyền từ một vật lạnh sang một vật nóng hơn mà không có sự can thiệp từ bên ngoài.",
                        "isCorrect": true
                    },
                    {
                        "text": "Động cơ nhiệt là thiết bị biến đổi toàn bộ 100% nhiệt lượng nhận được từ nguồn nóng thành công cơ học có ích.",
                        "isCorrect": false
                    },
                    {
                        "text": "Trong động cơ nhiệt, tác nhân phải truyền một phần nhiệt lượng $Q_2$ cho nguồn lạnh.",
                        "isCorrect": true
                    },
                    {
                        "text": "Hiệu suất của động cơ nhiệt luôn thỏa mãn $H = \\frac{|A|}{Q_1} < 100\\%$ với $Q_1$ là nhiệt lượng nhận từ nguồn nóng.",
                        "isCorrect": true
                    }
                ],
                "explanation": "Ghi nhớ cốt lõi: Theo nguyên lý II nhiệt động lực học, không thể chế tạo được động cơ nhiệt biến đổi hoàn toàn nhiệt lượng thành công (hiệu suất $H < 100\\%$), bắt buộc phải có nguồn lạnh để thải nhiệt lượng $Q_2$."
            },
            {
                "id": "u2_sa_01",
                "conceptId": "c_u2_dl1_nhiet_dong_luc",
                "image": "images/dl1_thermodynamics_piston.jpg",
                "type": "short_answer",
                "level": "Vận dụng",
                "question": "Một khối khí nhận nhiệt lượng $250\\text{ J}$ do được đun nóng, đồng thời khí giãn nở và thực hiện một công $150\\text{ J}$ lên môi trường ngoài. Độ biến thiên nội năng $\\Delta U$ của khối khí bằng bao nhiêu $\\text{J}$?",
                "answer": "100",
                "unit": "J",
                "tolerance": 0.01,
                "explanation": "Quy ước dấu: Nhận nhiệt $Q = +250\\text{ J}$, thực hiện công $A = -150\\text{ J}$. Áp dụng ĐL1: $\\Delta U = A + Q = -150 + 250 = +100\\text{ J}$."
            },
            {
                "id": "u2_sa_02",
                "conceptId": "c_u2_dl1_nhiet_dong_luc",
                "image": "images/bicycle_pump_heating.jpg",
                "type": "short_answer",
                "level": "Thông hiểu",
                "question": "Người ta thực hiện một công $120\\text{ J}$ để nén một lượng khí trong xilanh, khi đó khối khí truyền ra môi trường xung quanh một nhiệt lượng $40\\text{ J}$. Nội năng của khối khí tăng thêm bao nhiêu $\\text{J}$?",
                "answer": "80",
                "unit": "J",
                "tolerance": 0.01,
                "explanation": "Nhận công $A = +120\\text{ J}$, truyền nhiệt $Q = -40\\text{ J}$. Theo ĐL1: $\\Delta U = A + Q = 120 - 40 = 80\\text{ J}$."
            },
            {
                "id": "u2_sa_03",
                "conceptId": "c_u2_hieu_suat_dong_co",
                "image": "images/heat_engine_principle.jpg",
                "type": "short_answer",
                "level": "Vận dụng",
                "question": "Một động cơ nhiệt nhận nhiệt lượng $6000\\text{ J}$ từ nguồn nóng trong mỗi chu trình hoạt động và truyền $4500\\text{ J}$ cho nguồn lạnh. Hiệu suất nhiệt của động cơ này bằng bao nhiêu $\\%$?",
                "answer": "25",
                "unit": "%",
                "tolerance": 0.01,
                "explanation": "Hiệu suất nhiệt động cơ: $H = \\frac{Q_1 - Q_2}{Q_1} \\times 100\\% = \\frac{6000 - 4500}{6000} \\times 100\\% = 25\\%$."
            },
            {
                "id": "u2_sa_04",
                "conceptId": "c_u2_cong_chat_khi_dang_ap",
                "image": "images/isobaric_work_pv.jpg",
                "type": "short_answer",
                "level": "Vận dụng cao",
                "question": "Một lượng khí trong xilanh giãn nở đẳng áp ở áp suất không đổi $p = 2 \\times 10^5\\text{ Pa}$, thể tích khí tăng từ $1{,}5\\text{ lít}$ lên $3{,}5\\text{ lít}$. Công mà chất khí thực hiện trong quá trình giãn nở này bằng bao nhiêu $\\text{J}$?",
                "answer": "400",
                "unit": "J",
                "tolerance": 0.01,
                "explanation": "Công chất khí thực hiện: $A' = p \\Delta V = 2 \\times 10^5 \\times (3{,}5 - 1{,}5) \\times 10^{-3} = 2 \\times 10^5 \\times 2 \\times 10^{-3} = 400\\text{ J}$."
            }
        ]
    },
    "unit3": {
        "title": "Bài 3: Nhiệt độ. Thang nhiệt độ – Nhiệt kế",
        "questions": [
            {
                "id": "u3_mc_ext1",
                "conceptId": "c_u3_thang_nhiet_do_vd",
                "image": "images/three_temperature_scales.jpg",
                "type": "multiple_choice",
                "level": "Vận dụng cao",
                "question": "Nhiệt kế X: nước đá đang tan 50°X, nước sôi 250°X. Khi chỉ 100°X thì bằng bao nhiêu độ C?",
                "options": [
                    "25°C",
                    "30°C",
                    "40°C",
                    "50°C"
                ],
                "correct": 0,
                "explanation": "100°C tương ứng 200°X => 1°C = 2°X. (100-50)/2 = 25°C."
            },
            {
                "id": "u3_mc_ext2",
                "conceptId": "c_u3_nhiet_do_vd2",
                "image": "images/kelvin_celsius_scale.jpg",
                "type": "multiple_choice",
                "level": "Vận dụng cao",
                "question": "Chênh lệch nhiệt độ ngày và đêm là 45°F. Tính theo Kelvin là:",
                "options": [
                    "25 K",
                    "45 K",
                    "81 K",
                    "318 K"
                ],
                "correct": 0,
                "explanation": "ΔT(K) = Δt(°C) = Δt(°F)/1.8 = 45/1.8 = 25 K."
            },
            {
                "id": "u3_mc_01",
                "conceptId": "c_u3_khai_niem_nhiet_do",
                "image": "images/temp_molecular_speed.jpg",
                "type": "multiple_choice",
                "level": "Nhận biết",
                "question": "Về mặt vi mô, nhiệt độ của một vật là đại lượng vật lý đặc trưng cho",
                "options": [
                    "Năng lượng liên kết hóa học giữa các nguyên tử cấu tạo nên các phân tử của chất đó.",
                    "Động năng trung bình của chuyển động nhiệt hỗn loạn của các phân tử cấu tạo nên vật.",
                    "Tổng thế năng tương tác hấp dẫn giữa các phân tử cấu tạo nên vật thể đang khảo sát.",
                    "Vận tốc chuyển động có hướng của toàn bộ vật thể so với mốc quy chiếu mặt đất."
                ],
                "correct": 1,
                "explanation": "Ghi nhớ cốt lõi: Về mặt vi mô, nhiệt độ là số đo động năng tịnh tiến trung bình của các phân tử cấu tạo nên vật. Nhiệt độ càng cao thì các phân tử chuyển động nhiệt hỗn loạn càng nhanh."
            },
            {
                "id": "u3_mc_02",
                "conceptId": "c_u3_chieu_truyen_nhiet",
                "image": "images/thermal_equilibrium.jpg",
                "type": "multiple_choice",
                "level": "Nhận biết",
                "question": "Khi hai vật tiếp xúc nhiệt với nhau mà không có sự trao đổi công cơ học, nhiệt lượng sẽ tự phát truyền",
                "options": [
                    "Nhiệt lượng truyền từ xô nước đá sang giọt nước sôi vì xô nước đá có khối lượng lớn hơn nhiều nên chứa tổng nội năng lớn hơn giọt nước.",
                    "Nhiệt lượng tự phát truyền từ giọt nước sôi ($100^\\circ\\text{C}$) sang xô nước đá ($0^\\circ\\text{C}$) vì giọt nước sôi có nhiệt độ cao hơn.",
                    "Hai vật hoàn toàn không thể truyền nhiệt cho nhau vì sự chênh lệch về thể tích giữa một giọt nước và một xô nước đá là quá lớn.",
                    "Nhiệt lượng tự động bị triệt tiêu ngay lập tức khi hai vật thể có trạng thái thể chất khác nhau tiếp xúc trực tiếp với nhau trong không khí."
                ],
                "correct": 1,
                "explanation": "Ghi nhớ cốt lõi: Quá trình truyền nhiệt tự phát luôn diễn ra từ vật có nhiệt độ cao hơn sang vật có nhiệt độ thấp hơn, cho đến khi hai vật đạt trạng thái cân bằng nhiệt (hoàn toàn không phụ thuộc vật nào có nội năng hay khối lượng lớn hơn)."
            },
            {
                "id": "u3_mc_03",
                "conceptId": "c_u3_can_bang_nhiet",
                "image": "images/thermal_equilibrium.jpg",
                "type": "multiple_choice",
                "level": "Nhận biết",
                "question": "Hai vật ở trạng thái cân bằng nhiệt với nhau khi và chỉ khi chúng có cùng",
                "options": [
                    "Vật A và vật C cũng ở trạng thái cân bằng nhiệt với nhau và cả hai vật có cùng nhiệt độ (nguyên lý số 0 của nhiệt động lực học).",
                    "Vật A luôn có nhiệt độ cao hơn vật C một lượng tỷ lệ thuận với khối lượng riêng của chất liệu cấu tạo nên vật thể A và vật thể B.",
                    "Vật A có nội năng gấp đôi vật C do năng lượng nhiệt được truyền tích lũy tuần tự qua vật trung gian B theo định luật bảo toàn.",
                    "Không thể rút ra bất kỳ kết luận vật lý nào về mối liên hệ nhiệt độ giữa vật A và vật C nếu hai vật không tiếp xúc trực tiếp với nhau."
                ],
                "correct": 0,
                "explanation": "Ghi nhớ cốt lõi: Trạng thái cân bằng nhiệt là trạng thái trong đó không còn sự truyền nhiệt lượng giữa hai vật tiếp xúc, điều này xảy ra khi và chỉ khi hai vật có cùng nhiệt độ."
            },
            {
                "id": "u3_mc_04",
                "conceptId": "c_u3_don_vi_kelvin",
                "image": "images/three_temperature_scales.jpg",
                "type": "multiple_choice",
                "level": "Nhận biết",
                "question": "Đơn vị đo nhiệt độ cơ bản trong Hệ đơn vị đo lường quốc tế (SI) là",
                "options": [
                    "Độ Celsius ($^\\circ\\text{C}$)",
                    "Độ Fahrenheit ($^\\circ\\text{F}$)",
                    "Kelvin (ký hiệu là $\\text{K}$)",
                    "Độ Kelvin (ký hiệu là $^\\circ\\text{K}$)"
                ],
                "correct": 2,
                "explanation": "Ghi nhớ cốt lõi: Đơn vị đo nhiệt độ cơ bản trong hệ SI là kelvin, ký hiệu là $\\text{K}$ (lưu ý không có dấu độ $^\\circ$ ở phía trước chữ K)."
            },
            {
                "id": "u3_mc_05",
                "conceptId": "c_u3_cong_thuc_kelvin_celsius",
                "image": "images/kelvin_celsius_scale.jpg",
                "type": "multiple_choice",
                "level": "Nhận biết",
                "question": "Hệ thức chuyển đổi nhiệt độ chính xác giữa thang nhiệt độ Celsius ($t$) và thang nhiệt độ Kelvin ($T$) theo SGK Vật lí 12 là",
                "options": [
                    "$T(\\text{K}) = t(^\\circ\\text{C}) - 273{,}15$",
                    "$T(\\text{K}) = t(^\\circ\\text{C}) + 273{,}15$",
                    "$T(\\text{K}) = 1{,}8 \\cdot t(^\\circ\\text{C}) + 32$",
                    "$t(^\\circ\\text{C}) = T(\\text{K}) + 273{,}15$"
                ],
                "correct": 1,
                "explanation": "Ghi nhớ cốt lõi: Công thức chuyển đổi giữa nhiệt độ Celsius ($t$) và nhiệt độ Kelvin ($T$): $T(\\text{K}) = t(^\\circ\\text{C}) + 273{,}15$ (trong các bài toán tính gần đúng có thể lấy $T = t + 273$)."
            },
            {
                "id": "u3_mc_06",
                "conceptId": "c_u3_khong_do_tuyet_doi",
                "image": "images/absolute_zero_kelvin.jpg",
                "type": "multiple_choice",
                "level": "Nhận biết",
                "question": "Nhiệt độ 'Không độ tuyệt đối' ($0\\text{ K}$) ứng với giá trị nào sau đây trong thang Celsius?",
                "options": [
                    "Vì ở $0\\text{ K}$, động năng chuyển động nhiệt hỗn loạn của các phân tử đạt mức cực tiểu lý thuyết, năng lượng không thể hạ thấp hơn mức tối thiểu này.",
                    "Vì các hệ thống máy làm lạnh hiện đại nhất hiện nay chưa đủ công suất cơ học để nén và hóa lỏng các dòng khí helium ở nhiệt độ siêu thấp.",
                    "Vì ở nhiệt độ $0\\text{ K}$ toàn bộ khối lượng của vật chất bị biến mất hoàn toàn chuyển hóa thành năng lượng photon ánh sáng theo phương trình Einstein.",
                    "Vì áp suất khí quyển xung quanh luôn tạo ra một lực cản cơ học ngăn không cho nhiệt độ của khối vật chất giảm tiếp xuống dưới mức âm."
                ],
                "correct": 0,
                "explanation": "Ghi nhớ cốt lõi: Nhiệt độ không tuyệt đối ($0\\text{ K}$) tương ứng với $-273{,}15^\\circ\\text{C}$. Đây là nhiệt độ thấp nhất trên lý thuyết mà vật chất có thể đạt được, tại đó mọi chuyển động nhiệt phân tử đều đạt mức năng lượng nhỏ nhất."
            },
            {
                "id": "u3_mc_07",
                "conceptId": "c_u3_tinh_doi_kelvin",
                "image": "images/kelvin_celsius_scale.jpg",
                "type": "multiple_choice",
                "level": "Thông hiểu",
                "question": "Nhiệt độ cơ thể của một người bình thường là $37^\\circ\\text{C}$. Trong thang nhiệt độ Kelvin, nhiệt độ này có giá trị là",
                "options": [
                    "$236{,}15\\text{ K}$",
                    "$300\\text{ K}$",
                    "$310{,}15\\text{ K}$",
                    "$373{,}15\\text{ K}$"
                ],
                "correct": 2,
                "explanation": "Ghi nhớ cốt lõi: Áp dụng công thức chuyển đổi: $T = t + 273{,}15 = 37 + 273{,}15 = 310{,}15\\text{ K}$."
            },
            {
                "id": "u3_mc_08",
                "conceptId": "c_u3_tinh_doi_fahrenheit",
                "image": "images/three_temperature_scales.jpg",
                "type": "multiple_choice",
                "level": "Thông hiểu",
                "question": "Thang nhiệt độ Fahrenheit ($^\\circ\\text{F}$) liên hệ với thang Celsius qua hệ thức $t(^\\circ\\text{F}) = 1{,}8 \\cdot t(^\\circ\\text{C}) + 32$. Nhiệt độ $25^\\circ\\text{C}$ của phòng có điều hòa ứng với bao nhiêu độ Fahrenheit?",
                "options": [
                    "$57^\\circ\\text{F}$",
                    "$77^\\circ\\text{F}$",
                    "$98{,}6^\\circ\\text{F}$",
                    "$45^\\circ\\text{F}$"
                ],
                "correct": 1,
                "explanation": "Ghi nhớ cốt lõi: Thay số vào công thức: $t(^\\circ\\text{F}) = 1{,}8 \\cdot 25 + 32 = 45 + 32 = 77^\\circ\\text{F}$."
            },
            {
                "id": "u3_mc_09",
                "conceptId": "c_u3_do_bien_thien_nhiet",
                "image": "images/three_temperature_scales.jpg",
                "type": "multiple_choice",
                "level": "Thông hiểu",
                "question": "Khi nhiệt độ của một căn phòng tăng thêm $15^\\circ\\text{C}$, thì độ tăng nhiệt độ đó trong thang đo Kelvin ($\\Delta T$) bằng bao nhiêu?",
                "options": [
                    "Kết quả tính nhiệt lượng bị sai lệch một lượng năng lượng nhiệt bằng đúng $273{,}15\\text{ J}$ do mốc Không độ tuyệt đối khác mốc $0^\\circ\\text{C}$.",
                    "Giá trị nhiệt lượng hoàn toàn không thay đổi vì một độ chia trong thang Celsius có độ lớn bằng đúng một độ chia trong thang Kelvin ($\\Delta T = \\Delta t$).",
                    "Kết quả tính nhiệt lượng bị tăng lên gấp đúng $1{,}8$ lần do thang đo nhiệt độ quốc tế quy định tỷ lệ chuyển đổi nhiệt năng sang quang năng.",
                    "Kết quả tính nhiệt lượng bị giảm đi $273{,}15$ lần do các phân tử chất khí chuyển động chậm hơn khi nhiệt độ biểu diễn bằng độ bách phân."
                ],
                "correct": 1,
                "explanation": "Ghi nhớ cốt lõi: Độ lớn của một độ chia trên thang Celsius và thang Kelvin là như nhau ($1^\\circ\\text{C} = 1\\text{ K}$). Do đó độ biến thiên nhiệt độ trong hai thang luôn bằng nhau: $\\Delta T(\\text{K}) = \\Delta t(^\\circ\\text{C}) = 15\\text{ K}$."
            },
            {
                "id": "u3_mc_10",
                "conceptId": "c_u3_dan_nhiet_sat_go",
                "image": "images/iron_wood_conduction.jpg",
                "type": "multiple_choice",
                "level": "Thông hiểu",
                "question": "Vào một buổi sáng mùa đông, khi chạm tay vào một thanh sắt và một thanh gỗ để cùng trong phòng kín lâu ngày, ta có cảm giác thanh sắt lạnh hơn thanh gỗ. Giải thích nào sau đây là ĐÚNG?",
                "options": [
                    "Thanh sắt có nhiệt độ thực tế thấp hơn thanh gỗ do kim loại hấp thụ nhiệt lạnh từ không khí xung quanh tốt hơn chất liệu gỗ.",
                    "Sắt dẫn nhiệt tốt hơn gỗ rất nhiều nên nhiệt lượng từ bàn tay truyền sang thanh sắt nhanh hơn, tạo cảm giác lạnh rõ rệt hơn thanh gỗ.",
                    "Thanh sắt hút nhiệt độ từ không khí mạnh hơn thanh gỗ làm lớp không khí tiếp xúc với bề mặt thanh sắt bị giảm nhiệt độ sâu.",
                    "Thanh gỗ có khả năng tự phát tỏa ra nhiệt lượng sưởi ấm bàn tay khi tiếp xúc nhờ các phản ứng oxy hóa chậm bên trong thớ gỗ."
                ],
                "correct": 1,
                "explanation": "Ghi nhớ cốt lõi: Hai vật để cùng trong phòng lâu ngày nên ở trạng thái cân bằng nhiệt với không khí trong phòng (nhiệt độ bằng nhau). Ta cảm thấy sắt lạnh hơn là vì sắt dẫn nhiệt tốt hơn gỗ rất nhiều, khi tay chạm vào sắt nhiệt truyền nhanh từ tay sang sắt làm nhiệt độ ở da ngón tay giảm nhanh."
            },
            {
                "id": "u3_mc_11",
                "conceptId": "c_u3_nhiet_ke_y_te",
                "image": "images/clinical_thermometer.jpg",
                "type": "multiple_choice",
                "level": "Thông hiểu",
                "question": "Nhiệt kế y tế thủy ngân có một đoạn ống quản bị thắt hẹp lại ở ngay phía trên bầu đựng thủy ngân. Tác dụng của chỗ thắt hẹp này là để",
                "options": [
                    "Làm cho cột thủy ngân dâng lên chậm rãi giúp người đo có đủ thời gian đọc chính xác từng vạch chia độ trên thân nhiệt kế.",
                    "Ngăn không cho cột thủy ngân tự động tụt xuống bầu khi đưa nhiệt kế ra khỏi cơ thể, giúp đọc đúng nhiệt độ tối đa của người bệnh.",
                    "Tăng áp suất bên trong ống quản thủy tinh để tránh hiện tượng thủy ngân bị sôi và bay hơi khi tiếp xúc với thân nhiệt cao.",
                    "Lọc bỏ các bọt khí li ti lẫn bên trong cột thủy ngân lỏng để đảm bảo độ chính xác tuyệt đối của phép đo nhiệt độ lâm sàng."
                ],
                "correct": 1,
                "explanation": "Ghi nhớ cốt lõi: Chỗ thắt hẹp ngăn cột thủy ngân tự tụt về bầu khi lấy nhiệt kế ra khỏi nách/miệng học sinh. Nhờ vậy người đo có thể đọc chỉ số nhiệt độ chính xác; trước khi đo lần sau phải vẩy mạnh để thủy ngân tụt qua chỗ thắt về lại bầu."
            },
            {
                "id": "u3_mc_12",
                "conceptId": "c_u3_cac_loai_nhiet_ke",
                "image": "images/thermometer_types.jpg",
                "type": "multiple_choice",
                "level": "Thông hiểu",
                "question": "Thiết bị đo nhiệt độ nào sau đây hoạt động dựa trên việc tiếp nhận năng lượng bức xạ hồng ngoại phát ra từ cơ thể người mà KHÔNG cần tiếp xúc trực tiếp?",
                "options": [
                    "Sự biến thiên điện trở của dây kim loại (như bạch kim) hoặc chất bán dẫn theo nhiệt độ của môi trường cần đo.",
                    "Sự dãn nở thể tích của cột chất lỏng màu (như rượu hoặc thủy ngân) chứa trong ống quản thủy tinh khi đun nóng.",
                    "Sự biến đổi màu sắc của màng tinh thể lỏng khi có ánh sáng nhìn thấy chiếu xuyên qua bề mặt của bản cảm ứng nhiệt.",
                    "Lực hút tĩnh điện giữa hai bản cực của tụ điện không khí thay đổi khi nhiệt độ môi trường xung quanh biến thiên liên tục."
                ],
                "correct": 0,
                "explanation": "Ghi nhớ cốt lõi: Nhiệt kế hồng ngoại đo năng lượng bức xạ nhiệt hồng ngoại phát ra từ bề mặt trán hoặc tai của cơ thể, cho kết quả tức thì và không cần tiếp xúc, rất an toàn và vệ sinh trong phòng dịch."
            },
            {
                "id": "u3_mc_13",
                "conceptId": "c_u3_diem_ba_cua_nuoc",
                "image": "images/triple_point_water.jpg",
                "type": "multiple_choice",
                "level": "Thông hiểu",
                "question": "Điểm ba của nước (Triple Point of Water) là trạng thái cân bằng nhiệt động mà tại đó cả ba thể rắn, lỏng và hơi của nước cùng tồn tại. Trạng thái này xảy ra ở nhiệt độ",
                "options": [
                    "Chỉ tồn tại duy nhất ở hai thể là thể lỏng và thể hơi trong một bình chứa kín được hút chân không ở áp suất cao.",
                    "Chỉ tồn tại duy nhất ở hai thể là thể rắn (nước đá) và thể lỏng (nước) ở mốc nhiệt độ chuẩn $0^\\circ\\text{C}$ và $1\\text{ atm}$.",
                    "Đồng thời cả ba thể: rắn (băng), lỏng (nước) và khí (hơi nước) cùng tồn tại ở trạng thái cân bằng nhiệt động xác định.",
                    "Toàn bộ khối nước chuyển thành thể plasma mang điện tích ở nhiệt độ phòng dưới tác dụng của điện trường ngoài cực mạnh."
                ],
                "correct": 2,
                "explanation": "Ghi nhớ cốt lõi: Điểm ba của nước xảy ra ở nhiệt độ $0{,}01^\\circ\\text{C}$ tương ứng với $273{,}16\\text{ K}$ (ở áp suất $611{,}65\\text{ Pa}$). Đây là mốc chuẩn duy nhất được chọn để định nghĩa thang nhiệt độ Kelvin quốc tế."
            },
            {
                "id": "u3_mc_14",
                "conceptId": "c_u3_an_toan_thuy_ngan",
                "image": "images/mercury_spill_safety.jpg",
                "type": "multiple_choice",
                "level": "Thông hiểu",
                "question": "Trong phòng thí nghiệm, nếu chẳng may làm rơi vỡ một nhiệt kế thủy ngân thì biện pháp xử lý an toàn và đúng phương pháp khoa học nhất là",
                "options": [
                    "Rắc bột lưu huỳnh ($\\text{S}$) lên các giọt thủy ngân để tạo thành hợp chất $\\text{HgS}$ rắn không bay hơi, rồi thu gom xử lý an toàn.",
                    "Dùng máy hút bụi công suất lớn để hút sạch các giọt thủy ngân li ti vương vãi trên sàn nhà và gom vào túi rác sinh hoạt gia đình.",
                    "Đổ trực tiếp cồn y tế hoặc nước nóng vào vùng thủy ngân rơi vỡ để hòa tan thủy ngân rồi dùng chổi lau sàn lau sạch bề mặt.",
                    "Dùng muối ăn ($\\text{NaCl}$) rắc lên thủy ngân để chuyển hóa thủy ngân thành dung dịch muối clo lỏng rồi xả thẳng xuống cống thoát."
                ],
                "correct": 0,
                "explanation": "Ghi nhớ cốt lõi: Thủy ngân là kim loại lỏng rất độc, dễ bay hơi ở nhiệt độ phòng. Bột lưu huỳnh ($\text{S}$) phản ứng ngay ở nhiệt độ thường với thủy ngân tạo thành mercuric sulfide ($\text{HgS}$) dạng rắn không độc và không bay hơi, giúp việc thu gom an toàn tuyệt đối."
            },
            {
                "id": "u3_tf_ext1",
                "conceptId": "c_u3_dien_tro_nhiet",
                "image": "images/thermometer_types.jpg",
                "type": "multi_tf",
                "level": "Vận dụng cao",
                "context": "Nhiệt kế điện trở bạch kim (Pt):",
                "statements": [
                    {
                        "text": "Đo dải nhiệt độ rộng, độ chính xác cao.",
                        "isCorrect": true
                    },
                    {
                        "text": "Điện trở bạch kim giảm tuyến tính khi nhiệt độ tăng.",
                        "isCorrect": false
                    },
                    {
                        "text": "Rất thích hợp để đo nhiệt độ tức thời mili-giây.",
                        "isCorrect": false
                    },
                    {
                        "text": "Quy đổi điện trở sang nhiệt độ qua vi xử lý.",
                        "isCorrect": true
                    }
                ],
                "explanation": "Pt tăng điện trở khi nhiệt độ tăng (2 sai). Có quán tính nhiệt nên không đo tức thời ms được (3 sai)."
            },
            {
                "id": "u3_tf_ext2",
                "conceptId": "c_u3_celsius_kelvin",
                "image": "images/kelvin_celsius_scale.jpg",
                "type": "multi_tf",
                "level": "Vận dụng cao",
                "context": "Về các thang đo nhiệt độ:",
                "statements": [
                    {
                        "text": "0 K là giới hạn dưới, động năng lý thuyết bằng 0.",
                        "isCorrect": true
                    },
                    {
                        "text": "Không có giới hạn trên cho động năng phân tử.",
                        "isCorrect": true
                    },
                    {
                        "text": "Có thể đạt -300°C trong phòng thí nghiệm.",
                        "isCorrect": false
                    },
                    {
                        "text": "Độ lớn 1 K gấp 273.15 lần độ lớn 1 độ C.",
                        "isCorrect": false
                    }
                ],
                "explanation": "Giới hạn dưới 0K = -273.15°C => không có -300°C (3 sai). Khoảng chia 1K = 1°C (4 sai)."
            },
            {
                "id": "u3_tf_01",
                "conceptId": "c_u3_thang_nhiet_do_chuan",
                "image": "images/three_states_matter.jpg",
                "type": "multi_tf",
                "level": "Thông hiểu",
                "context": "Xét các mốc chuẩn nhiệt độ và mối quan hệ giữa ba thang nhiệt độ thông dụng: Celsius, Kelvin và Fahrenheit ở áp suất tiêu chuẩn $1\\text{ atm}$. Xét tính đúng/sai của các phát biểu sau:",
                "statements": [
                    {
                        "text": "Mốc $0^\\circ\\text{C}$ tương ứng với $273{,}15\\text{ K}$ trên thang Kelvin và $32^\\circ\\text{F}$ trên thang Fahrenheit.",
                        "isCorrect": true
                    },
                    {
                        "text": "Mốc nước sôi $100^\\circ\\text{C}$ tương ứng với $373{,}15\\text{ K}$ trên thang Kelvin và $212^\\circ\\text{F}$ trên thang Fahrenheit.",
                        "isCorrect": true
                    },
                    {
                        "text": "Trên thang đo Kelvin, nhiệt độ của một vật có thể nhận giá trị âm, ví dụ $-10\\text{ K}$.",
                        "isCorrect": false
                    },
                    {
                        "text": "Khoảng biến thiên nhiệt độ $\\Delta t = 1^\\circ\\text{C}$ bằng đúng khoảng biến thiên nhiệt độ $\\Delta T = 1\\text{ K}$.",
                        "isCorrect": true
                    }
                ],
                "explanation": "Ghi nhớ cốt lõi: Thang nhiệt độ Kelvin là thang nhiệt độ tuyệt đối, bắt đầu từ $0\\text{ K}$ (không độ tuyệt đối) và không bao giờ nhận giá trị âm. Độ lớn của $1\\text{ K}$ bằng đúng độ lớn của $1^\\circ\\text{C}$."
            },
            {
                "id": "u3_tf_02",
                "conceptId": "c_u3_nguyen_ly_nhiet_ke",
                "image": "images/three_states_matter.jpg",
                "type": "multi_tf",
                "level": "Thông hiểu",
                "context": "Xét nguyên lý hoạt động và ứng dụng của các loại nhiệt kế thông dụng trong đời sống và khoa học. Xét tính đúng/sai của các phát biểu sau:",
                "statements": [
                    {
                        "text": "Nhiệt kế thủy ngân hoạt động dựa trên hiện tượng dãn nở vì nhiệt của khối chất lỏng.",
                        "isCorrect": true
                    },
                    {
                        "text": "Nhiệt điện trở và cặp nhiệt điện dùng để đo nhiệt độ dựa trên sự thay đổi tính chất điện theo nhiệt độ.",
                        "isCorrect": true
                    },
                    {
                        "text": "Nhiệt kế rượu có thể dùng để đo nhiệt độ của lò nung gốm sứ ở $1200^\\circ\\text{C}$.",
                        "isCorrect": false
                    },
                    {
                        "text": "Nhiệt kế hồng ngoại có ưu điểm đo nhanh, đo từ xa không tiếp xúc và rất thích hợp đo thân nhiệt trẻ em.",
                        "isCorrect": true
                    }
                ],
                "explanation": "Ghi nhớ cốt lõi: Rượu sôi ở nhiệt độ khoảng $78^\\circ\\text{C}$, do đó không thể dùng nhiệt kế rượu để đo nhiệt độ cao của lò nung $1200^\\circ\\text{C}$. Để đo nhiệt độ lò nung người ta phải dùng cặp nhiệt điện hoặc hỏa kế quang học."
            },
            {
                "id": "u3_sa_01",
                "conceptId": "c_u3_thang_kelvin",
                "image": "images/kelvin_celsius_scale.jpg",
                "type": "short_answer",
                "level": "Nhận biết",
                "question": "Nhiệt độ của một phòng thí nghiệm được giữ ổn định ở $27^{\\circ}\\text{C}$. Giá trị nhiệt độ này theo thang nhiệt độ tuyệt đối Kelvin bằng bao nhiêu $\\text{K}$?",
                "answer": "300",
                "unit": "K",
                "tolerance": 0.01,
                "explanation": "Chuyển đổi thang nhiệt: $T = t + 273 = 27 + 273 = 300\\text{ K}$ (chuẩn xác $27 + 273{,}15 = 300{,}15\\text{ K}$)."
            },
            {
                "id": "u3_sa_02",
                "conceptId": "c_u3_nhiet_luong_mc_delta_t",
                "image": "images/calorimeter_specific_heat.jpg",
                "type": "short_answer",
                "level": "Thông hiểu",
                "question": "Một ấm đun chứa $1{,}5\\text{ kg}$ nước ở nhiệt độ $25^{\\circ}\\text{C}$. Cần cung cấp nhiệt lượng bao nhiêu $\\text{kJ}$ để đun nóng nước này lên đến $100^{\\circ}\\text{C}$? Biết nhiệt dung riêng của nước là $4200\\text{ J/kg.K}$.",
                "answer": "472.5",
                "unit": "kJ",
                "tolerance": 0.01,
                "explanation": "Nhiệt lượng cần cung cấp: $Q = mc\\Delta T = 1{,}5 \\times 4200 \\times (100 - 25) = 472\\,500\\text{ J} = 472{,}5\\text{ kJ}$."
            },
            {
                "id": "u3_sa_03",
                "conceptId": "c_u3_can_bang_nhiet",
                "image": "images/thermal_equilibrium.jpg",
                "type": "short_answer",
                "level": "Vận dụng",
                "question": "Trộn $200\\text{ g}$ nước ở $80^{\\circ}\\text{C}$ với $300\\text{ g}$ nước ở $20^{\\circ}\\text{C}$ trong một bình cách nhiệt lý tưởng. Bỏ qua nhiệt dung của bình. Nhiệt độ cân bằng của hỗn hợp nước bằng bao nhiêu $^{\\circ}\\text{C}$?",
                "answer": "44",
                "unit": "°C",
                "tolerance": 0.01,
                "explanation": "Phương trình cân bằng nhiệt: $m_1 c (t_1 - t) = m_2 c (t - t_2) \\Rightarrow 0{,}2 \\times (80 - t) = 0{,}3 \\times (t - 20) \\Rightarrow 16 - 0{,}2t = 0{,}3t - 6 \\Rightarrow 0{,}5t = 22 \\Rightarrow t = 44^{\\circ}\\text{C}$."
            },
            {
                "id": "u3_sa_04",
                "conceptId": "c_u3_thuc_te_do_nhiet_do",
                "image": "images/thermometer_types.jpg",
                "type": "short_answer",
                "level": "Vận dụng cao",
                "question": "Một nhiệt kế điện trở bạch kim có điện trở $R_0 = 100{,}0\\ \\Omega$ ở $0^{\\circ}\\text{C}$. Biết hệ số nhiệt điện trở của bạch kim là $\\alpha = 3{,}9 \\times 10^{-3}\\text{ K}^{-1}$. Khi đặt nhiệt kế vào một lò sấy, điện trở đo được là $139{,}0\\ \\Omega$. Nhiệt độ trong lò sấy bằng bao nhiêu $^{\\circ}\\text{C}$?",
                "answer": "100",
                "unit": "°C",
                "tolerance": 0.01,
                "explanation": "Hệ thức điện trở theo nhiệt độ: $R = R_0(1 + \\alpha t) \\Rightarrow t = \\frac{R/R_0 - 1}{\\alpha} = \\frac{139/100 - 1}{3{,}9 \\times 10^{-3}} = \\frac{0{,}39}{0{,}0039} = 100^{\\circ}\\text{C}$."
            }
        ]
    },
    "unit4": {
        "title": "Bài 4: Nhiệt Dung Riêng & Thí Nghiệm Thực Hành",
        "questions": [
            {
                "id": "u4_mc_01",
                "conceptId": "c_u4_dinh_nghia_ndr",
                "image": "images/calorimeter_specific_heat.jpg",
                "type": "multiple_choice",
                "level": "Nhận biết",
                "question": "Nhiệt dung riêng của một chất là nhiệt lượng cần thiết để",
                "options": [
                    "Làm cho 1 kg chất đó tăng thêm 1 °C (hoặc 1 K).",
                    "Làm cho 1 mol chất đó nóng chảy hoàn toàn.",
                    "Làm cho toàn bộ khối lượng chất đó tăng thêm 100 °C.",
                    "Làm cho 1 lít chất đó hóa hơi hoàn toàn ở nhiệt độ sôi."
                ],
                "correct": 0,
                "explanation": "Định nghĩa SGK: Nhiệt dung riêng (c) của một chất là nhiệt lượng cần truyền cho 1 kg chất đó để nhiệt độ của nó tăng thêm 1 °C (hoặc 1 K). Đơn vị là J/(kg.K)."
            },
            {
                "id": "u4_mc_02",
                "conceptId": "c_u4_cong_thuc_q",
                "image": "images/calorimeter_specific_heat.jpg",
                "type": "multiple_choice",
                "level": "Thông hiểu",
                "question": "Công thức tính nhiệt lượng mà một vật có khối lượng $m$, nhiệt dung riêng $c$ thu vào để tăng nhiệt độ từ $t_1$ lên $t_2$ là",
                "options": [
                    "$Q = m c (t_2 - t_1)$",
                    "$Q = lambda m$",
                    "$Q = L m$",
                    "$Q = m c (t_1 - t_2)$"
                ],
                "correct": 0,
                "explanation": "Nhiệt lượng vật thu vào để tăng nhiệt độ: $Q = m c Delta t = m c (t_2 - t_1)$."
            },
            {
                "id": "u4_mc_03",
                "conceptId": "c_u4_y_nghia_nuoc",
                "image": "images/change_internal_energy.jpg",
                "type": "multiple_choice",
                "level": "Thông hiểu",
                "question": "Nước có nhiệt dung riêng rất lớn ($c approx 4180\text{ J/(kg.K)}$). Đặc tính này có ý nghĩa thực tiễn quan trọng nào sau đây?",
                "options": [
                    "Nước khó nóng lên và cũng lâu nguội đi, giúp điều hòa khí hậu và làm chất làm mát động cơ lý tưởng.",
                    "Nước dễ dàng bốc hơi ở nhiệt độ phòng tạo độ ẩm.",
                    "Nước dẫn nhiệt nhanh hơn kim loại rất nhiều lần.",
                    "Nước có khối lượng riêng biến đổi mạnh theo mùa."
                ],
                "correct": 0,
                "explanation": "Vì $c$ của nước rất lớn nên nước cần hấp thụ hoặc giải phóng nhiệt lượng rất lớn mới đổi nhiệt độ một chút. Nhờ đó nước biển điều hòa khí hậu và tản nhiệt xe hơi, nhà máy nhiệt điện."
            },
            {
                "id": "u4_mc_04",
                "conceptId": "c_u4_thi_nghiem_dung_cu",
                "image": "images/calorimeter_specific_heat.jpg",
                "type": "multiple_choice",
                "level": "Thông hiểu",
                "question": "Trong thí nghiệm đo nhiệt dung riêng của nước theo SGK GDPT 2018, dụng cụ nào dùng để xác định nhiệt lượng do dòng điện cung cấp cho nhiệt lượng kế?",
                "options": [
                    "Oát kế (đo công suất) kết hợp đồng hồ bấm giây (đo thời gian).",
                    "Nhiệt kế điện tử.",
                    "Cân điện tử.",
                    "Thước kẹp cơ khí."
                ],
                "correct": 0,
                "explanation": "Nhiệt lượng do dòng điện cấp được tính qua công thức: $Q = mathcal{P} cdot t$ (dùng Oát kế đo công suất $mathcal{P}$ và đồng hồ đo thời gian $t$), hoặc dùng Joulemeter đo trực tiếp."
            },
            {
                "id": "u4_mc_05",
                "conceptId": "c_u4_tinh_toan_cb_nhiet",
                "image": "images/phase_transition_diagram.jpg",
                "type": "multiple_choice",
                "level": "Vận dụng",
                "question": "Thả một thỏi đồng khối lượng $0{,}5\text{ kg}$ ở $100^circ\text{C}$ vào một bình chứa $1\text{ kg}$ nước ở $20^circ\text{C}$. Bỏ qua nhiệt dung của bình và thất thoát nhiệt ra môi trường. Cho $c_{Cu} = 380\text{ J/(kg.K)}$, $c_{H_2O} = 4200\text{ J/(kg.K)}$. Nhiệt độ cân bằng của hệ xấp xỉ bằng bao nhiêu?",
                "options": [
                    "$23{,}5^circ\text{C}$",
                    "$60{,}0^circ\text{C}$",
                    "$35{,}2^circ\text{C}$",
                    "$28{,}7^circ\text{C}$"
                ],
                "correct": 0,
                "explanation": "Phương trình cân bằng nhiệt: $Q_{tỏa} = Q_{thu} Leftrightarrow 0{,}5 \times 380 \times (100 - t) = 1 \times 4200 \times (t - 20) Rightarrow 190(100 - t) = 4200(t - 20) Rightarrow 4390 t = 103000 Rightarrow t approx 23{,}5^circ\text{C}$."
            },
            {
                "id": "u4_mc_06",
                "conceptId": "c_u4_sai_so_thi_nghiem",
                "image": "images/calorimeter_specific_heat.jpg",
                "type": "multiple_choice",
                "level": "Vận dụng cao",
                "question": "Khi làm thí nghiệm đo nhiệt dung riêng của nước, giá trị nhiệt dung riêng tính được thường lớn hơn giá trị chuẩn trong bảng tra cứu ($4180\text{ J/(kg.K)}$). Nguyên nhân chính là do",
                "options": [
                    "Một phần nhiệt lượng từ dây nung đã truyền cho vỏ nhiệt lượng kế và thất thoát ra môi trường xung quanh.",
                    "Nước bốc hơi làm tăng khối lượng nước trong bình.",
                    "Dây điện trở nung nóng bị giảm điện trở khi nhiệt độ tăng.",
                    "Nhiệt kế điện tử luôn đọc giá trị thấp hơn thực tế."
                ],
                "correct": 0,
                "explanation": "Thực tế: $mathcal{P} t = m c Delta t + Q_{hao_phi}$. Vì ta bỏ qua $Q_{hao_phi}$ nên tính $c_{thực_nghiệm} = \frac{mathcal{P}t}{m Delta t} = c_{chuẩn} + \frac{Q_{hao_phi}}{m Delta t} > c_{chuẩn}$."
            },
            {
                "id": "u4_mc_07",
                "conceptId": "c_u4_don_vi_ndr",
                "image": "images/change_internal_energy.jpg",
                "type": "multiple_choice",
                "level": "Nhận biết",
                "question": "Đơn vị chuẩn của nhiệt dung riêng trong hệ đơn vị quốc tế SI là",
                "options": [
                    "$\text{J/(kg.K)}$",
                    "$\text{J/kg}$",
                    "$\text{cal/g}$",
                    "$\text{J/K}$"
                ],
                "correct": 0,
                "explanation": "Theo hệ SI: nhiệt lượng tính bằng Jun (J), khối lượng bằng kilôgam (kg), nhiệt độ bằng Kelvin (K) nên nhiệt dung riêng có đơn vị là J/(kg.K)."
            },
            {
                "id": "u4_mc_08",
                "conceptId": "c_u4_am_dien_hieu_suat",
                "image": "images/phase_transition_diagram.jpg",
                "type": "multiple_choice",
                "level": "Vận dụng",
                "question": "Một ấm đun nước điện công suất $1000\text{ W}$ đun sôi $1{,}5\text{ kg}$ nước từ $25^circ\text{C}$ đến $100^circ\text{C}$ trong thời gian $8$ phút. Cho $c = 4200\text{ J/(kg.K)}$. Hiệu suất của ấm đun xấp xỉ bằng",
                "options": [
                    "$98{,}4%$",
                    "$85{,}2%$",
                    "$72{,}5%$",
                    "$65{,}0%$"
                ],
                "correct": 0,
                "explanation": "Nhiệt có ích: $Q_i = mcDelta t = 1{,}5 \times 4200 \times 75 = 472500\text{ J}$. Điện năng tiêu thụ: $A = mathcal{P} t = 1000 \times 480 = 480000\text{ J}$. Hiệu suất $H = \frac{472500}{480000} \times 100% approx 98{,}4%$."
            },
            {
                "id": "u4_mc_09",
                "conceptId": "c_u4_y_nghia_ndr_nuoc",
                "image": "images/calorimeter_specific_heat.jpg",
                "type": "multiple_choice",
                "level": "Thông hiểu",
                "question": "Nhiệt dung riêng của nước biển xấp xỉ $3900\\text{ J/kg.K}$, lớn hơn rất nhiều so với nhiệt dung riêng của đất, cát ($c \\approx 800\\text{ J/kg.K}$). Hệ quả thực tế nổi bật nhất của hiện tượng này là",
                "options": [
                    "Các vùng ven biển có biên độ dao động nhiệt độ ngày đêm nhỏ hơn, khí hậu ôn hòa hơn sâu trong đất liền.",
                    "Vào ban ngày ở bờ biển, cát lạnh hơn nước biển khiến gió thổi từ đất liền ra biển.",
                    "Nước biển hấp thụ nhiệt nhanh hơn nhiều so với cát trên bãi biển vào mùa hè oi bức.",
                    "Cát có khả năng tích trữ một lượng nhiệt năng khổng lồ nhiều hơn gấp nhiều lần so với đại dương."
                ],
                "correct": 0,
                "explanation": "Do nhiệt dung riêng của nước lớn hơn nhiều so với đất cát, nước hấp thụ hoặc tỏa nhiệt lượng lớn nhưng nhiệt độ chỉ thay đổi ít, giúp các vùng duyên hải có khí hậu mát mẻ về mùa hè, ấm áp về mùa đông và biên độ nhiệt ngày đêm nhỏ."
            },
            {
                "id": "u4_mc_10",
                "conceptId": "c_u4_sai_so_khuay_deu",
                "image": "images/calorimeter_specific_heat.jpg",
                "type": "multiple_choice",
                "level": "Vận dụng",
                "question": "Trong thí nghiệm thực hành đo nhiệt dung riêng của nước bằng nhiệt lượng kế, nếu học sinh không dùng que khuấy để khuấy đều nước trong suốt quá trình đun thì",
                "options": [
                    "Nhiệt độ nước xung quanh dây nung cao hơn phần nước còn lại, đầu đo nhiệt kế ghi nhận sai lệch làm sai lệch kết quả đo $c$.",
                    "Nhiệt dung riêng của nước trong bình sẽ bị giảm đi do các phân tử nước ở đáy bình không nhận được công suất nhiệt.",
                    "Khối lượng của nước trong nhiệt lượng kế sẽ tăng lên nhanh chóng do nước ở bề mặt ngưng tụ hơi ẩm từ môi trường.",
                    "Điện trở của dây nung đốt nóng sẽ bị giảm về 0 do nước không dẫn nhiệt đối lưu làm đoản mạch dòng điện."
                ],
                "correct": 0,
                "explanation": "Nếu không khuấy đều, đối lưu tự nhiên không kịp phân bố nhiệt lượng, tạo ra sự chênh lệch nhiệt độ lớn giữa vùng gần dây điện trở và các vùng khác, khiến nhiệt kế đo sai giá trị nhiệt độ trung bình của khối nước."
            },
            {
                "id": "u4_mc_11",
                "conceptId": "c_u4_so_sanh_do_tang_nhiet",
                "image": "images/iron_wood_conduction.jpg",
                "type": "multiple_choice",
                "level": "Thông hiểu",
                "question": "Hai quả cầu kim loại A bằng nhôm ($c_1 = 880\\text{ J/kg.K}$) và B bằng đồng ($c_2 = 380\\text{ J/kg.K}$) có cùng khối lượng $m$. Cung cấp cùng một nhiệt lượng $Q$ cho cả hai quả cầu (bỏ qua hao phí). Nhận định nào sau đây là đúng?",
                "options": [
                    "Độ tăng nhiệt độ của quả cầu đồng lớn hơn gấp hơn 2 lần độ tăng nhiệt độ của quả cầu nhôm.",
                    "Độ tăng nhiệt độ của quả cầu nhôm lớn hơn nhiều so với quả cầu đồng vì nhôm dẫn nhiệt tốt hơn.",
                    "Hai quả cầu tăng nhiệt độ bằng nhau vì chúng có cùng khối lượng và nhận cùng nhiệt lượng.",
                    "Quả cầu đồng tỏa nhiệt lượng lớn hơn vào môi trường nên nhiệt độ cuối cùng giảm xuống thấp hơn."
                ],
                "correct": 0,
                "explanation": "Áp dụng $\\Delta T = \\frac{Q}{m c}$. Vì $m_1 = m_2$ và nhận cùng $Q$, nên $\\Delta T$ tỉ lệ nghịch với nhiệt dung riêng $c$. Do $c_{\\text{đồng}} < c_{\\text{nhôm}}$ nên $\\Delta T_{\\text{đồng}} = \\frac{880}{380} \\Delta T_{\\text{nhôm}} \\approx 2{,}32 \\Delta T_{\\text{nhôm}}$."
            },
            {
                "id": "u4_mc_12",
                "conceptId": "c_u4_chat_tai_nhiet_dong_co",
                "image": "images/calorimeter_specific_heat.jpg",
                "type": "multiple_choice",
                "level": "Thông hiểu",
                "question": "Trong hệ thống làm mát động cơ ô tô và xe máy, người ta chọn dung dịch chứa thành phần chính là nước (kèm phụ gia chống đông ethylene glycol) làm chất tải nhiệt tuần hoàn vì",
                "options": [
                    "Nước có nhiệt dung riêng lớn nên có thể mang đi một lượng nhiệt khổng lồ từ xi lanh mà nhiệt độ dung dịch không tăng quá mức.",
                    "Nước có khối lượng riêng nhỏ nhất trong các chất lỏng giúp giảm nhẹ trọng lượng của khối động cơ xe.",
                    "Nước hoàn toàn không bay hơi ở bất kỳ nhiệt độ nào dù động cơ hoạt động hết công suất liên tục.",
                    "Nước có thể biến toàn bộ nhiệt lượng thừa của động cơ thành thế năng cơ học để tăng tốc cho xe."
                ],
                "correct": 0,
                "explanation": "Chất làm mát cần có nhiệt dung riêng $c$ rất cao để hấp thụ được lượng nhiệt lớn từ động cơ ($Q = mc\\Delta T$) với lưu lượng thể tích hợp lí mà không bị tăng nhiệt độ quá cao dẫn tới sôi trào."
            },
            {
                "id": "u4_mc_13",
                "conceptId": "c_u4_hieu_suat_dun_nuoc",
                "image": "images/calorimeter_specific_heat.jpg",
                "type": "multiple_choice",
                "level": "Vận dụng",
                "question": "Một ấm điện công suất định mức $1200\\text{ W}$ đun sôi $1\\text{ kg}$ nước từ $20^{\\circ}\\text{C}$ sau thời gian $350\\text{ giây}$. Biết nhiệt dung riêng của nước là $4200\\text{ J/kg.K}$. Hiệu suất của ấm điện xấp xỉ bằng",
                "options": [
                    "$80\\%$",
                    "$75\\%$",
                    "$88\\%$",
                    "$92\\%$"
                ],
                "correct": 0,
                "explanation": "Nhiệt lượng có ích làm nóng nước: $Q_{\\text{ích}} = mc\\Delta T = 1 \\times 4200 \\times 80 = 336\\,000\\text{ J}$. Điện năng ấm tiêu thụ: $A_{\\text{tp}} = P \\cdot t = 1200 \\times 350 = 420\\,000\\text{ J}$. Hiệu suất: $H = \\frac{336\\,000}{420\\,000} \\times 100\\% = 80\\%$."
            },
            {
                "id": "u4_mc_14",
                "conceptId": "c_u4_do_ndr_kim_loai",
                "image": "images/calorimeter_specific_heat.jpg",
                "type": "multiple_choice",
                "level": "Vận dụng",
                "question": "Thả một miếng sắt khối lượng $300\\text{ g}$ ở nhiệt độ $150^{\\circ}\\text{C}$ vào nhiệt lượng kế chứa $400\\text{ g}$ nước ở $20^{\\circ}\\text{C}$. Nhiệt độ khi cân bằng nhiệt là $30^{\\circ}\\text{C}$. Bỏ qua nhiệt dung của nhiệt lượng kế và hao phí nhiệt. Biết nhiệt dung riêng của nước là $4200\\text{ J/kg.K}$. Nhiệt dung riêng của sắt tính được xấp xỉ là",
                "options": [
                    "$467\\text{ J/kg.K}$",
                    "$380\\text{ J/kg.K}$",
                    "$520\\text{ J/kg.K}$",
                    "$880\\text{ J/kg.K}$"
                ],
                "correct": 0,
                "explanation": "Phương trình cân bằng nhiệt: $m_{\\text{sắt}} c_{\\text{sắt}} (150 - 30) = m_{\\text{nước}} c_{\\text{nước}} (30 - 20) \\Rightarrow 0{,}3 \\times c_{\\text{sắt}} \\times 120 = 0{,}4 \\times 4200 \\times 10 \\Rightarrow 36 c_{\\text{sắt}} = 16\\,800 \\Rightarrow c_{\\text{sắt}} \\approx 466{,}7\\text{ J/kg.K}$."
            },
            {
                "id": "u4_mc_15",
                "conceptId": "c_u4_do_thi_cong_suat",
                "image": "images/calorimeter_specific_heat.jpg",
                "type": "multiple_choice",
                "level": "Vận dụng cao",
                "question": "Dùng nguồn nhiệt có công suất không đổi để đun nóng $0{,}2\\text{ kg}$ một chất lỏng trong nhiệt lượng kế. Đồ thị nhiệt độ $T$ theo thời gian $t$ là một đường thẳng đi qua các điểm $(0\\text{ s}, 20^{\\circ}\\text{C})$ và $(120\\text{ s}, 50^{\\circ}\\text{C})$. Biết công suất có ích truyền cho chất lỏng là $50\\text{ W}$. Nhiệt dung riêng của chất lỏng là",
                "options": [
                    "$1000\\text{ J/kg.K}$",
                    "$2000\\text{ J/kg.K}$",
                    "$2500\\text{ J/kg.K}$",
                    "$4200\\text{ J/kg.K}$"
                ],
                "correct": 0,
                "explanation": "Trong $120\\text{ s}$, nhiệt lượng cung cấp: $Q = P \\cdot t = 50 \\times 120 = 6000\\text{ J}$. Độ tăng nhiệt độ $\\Delta T = 50 - 20 = 30^{\\circ}\\text{C}$. Ta có: $c = \\frac{Q}{m \\Delta T} = \\frac{6000}{0{,}2 \\times 30} = 1000\\text{ J/kg.K}$."
            },
            {
                "id": "u4_mc_16",
                "conceptId": "c_u4_sai_so_he_thong",
                "image": "images/calorimeter_specific_heat.jpg",
                "type": "multiple_choice",
                "level": "Vận dụng cao",
                "question": "Trong thí nghiệm đo nhiệt dung riêng của nước, nếu người làm thí nghiệm bỏ qua nhiệt lượng mà vỏ nhiệt lượng kế và que khuấy hấp thụ thì giá trị nhiệt dung riêng của nước $c$ tính ra từ công thức $c = \\frac{P \\cdot t}{m \\Delta T}$ sẽ",
                "options": [
                    "Lớn hơn giá trị thực tế của nhiệt dung riêng của nước.",
                    "Nhỏ hơn giá trị thực tế của nhiệt dung riêng của nước.",
                    "Hoàn toàn bằng giá trị thực tế do nhiệt dung của vỏ không đáng kể.",
                    "Có thể lớn hơn hoặc nhỏ hơn tùy thuộc vào áp suất khí quyển phòng thí nghiệm."
                ],
                "correct": 0,
                "explanation": "Thực tế điện năng $P \\cdot t$ cấp nhiệt cho cả nước và nhiệt lượng kế: $P \\cdot t = (m c + C_{\\text{NLK}})\\Delta T$. Nếu bỏ qua $C_{\\text{NLK}}$, ta tính $c_{\\text{đo}} = \\frac{P \\cdot t}{m \\Delta T} = c + \\frac{C_{\\text{NLK}}}{m} > c$. Do đó kết quả tính được sẽ lớn hơn giá trị thực tế."
            },
            {
                "id": "u4_tf_01",
                "conceptId": "c_u4_multitf_thi_nghiem",
                "image": "images/calorimeter_specific_heat.jpg",
                "type": "multi_tf",
                "level": "Vận dụng",
                "context": "Một nhóm học sinh lớp 12 tiến hành thí nghiệm đo nhiệt dung riêng của nước bằng bộ dụng cụ nhiệt lượng kế:",
                "statements": [
                    {
                        "text": "Cần khuấy đều nước trước khi đọc số chỉ nhiệt kế để đảm bảo sự phân bố nhiệt độ đồng đều trong toàn khối nước.",
                        "isCorrect": true
                    },
                    {
                        "text": "Nếu không đậy kín nắp nhiệt lượng kế thì giá trị nhiệt dung riêng tính được sẽ nhỏ hơn giá trị thực tế.",
                        "isCorrect": false
                    },
                    {
                        "text": "Khối lượng nước trong bình được xác định bằng cân điện tử có độ chính xác cao.",
                        "isCorrect": true
                    },
                    {
                        "text": "Nhiệt dung riêng của nước phụ thuộc vào công suất của nguồn điện cấp cho dây nung.",
                        "isCorrect": false
                    }
                ],
                "explanation": "1) Đúng: Phải khuấy đều. 2) Sai: Thất thoát nhiệt làm mẫu số Δt đo được bé hơn thực tế, dẫn tới c tính được lớn hơn thực tế. 3) Đúng: Cân điện tử đo khối lượng. 4) Sai: Nhiệt dung riêng là thuộc tính vật lý của chất, không phụ thuộc công suất nguồn nung."
            },
            {
                "id": "u4_tf_02",
                "conceptId": "c_u4_multitf_ung_dung",
                "image": "images/change_internal_energy.jpg",
                "type": "multi_tf",
                "level": "Thông hiểu",
                "context": "Xét các phát biểu về nhiệt dung riêng và quá trình truyền nhiệt:",
                "statements": [
                    {
                        "text": "Hai vật có khối lượng bằng nhau, nhận cùng nhiệt lượng, vật nào có nhiệt dung riêng lớn hơn sẽ tăng nhiệt độ ít hơn.",
                        "isCorrect": true
                    },
                    {
                        "text": "Nhiệt dung riêng của một khối chất đồng chất tỉ lệ thuận với khối lượng của khối chất đó.",
                        "isCorrect": false
                    },
                    {
                        "text": "Trong kỹ thuật tản nhiệt cho máy tính, đồng thường được dùng làm đế tản nhiệt tốt hơn nhôm vì đồng dẫn nhiệt tốt và có nhiệt dung riêng phù hợp.",
                        "isCorrect": true
                    },
                    {
                        "text": "Khi hai vật truyền nhiệt cho nhau thì vật có nhiệt dung riêng lớn hơn luôn truyền nhiệt cho vật có nhiệt dung riêng bé hơn.",
                        "isCorrect": false
                    }
                ],
                "explanation": "1) Đúng: Δt = Q/(mc), c lớn thì Δt nhỏ. 2) Sai: c là thuộc tính bản chất, không đổi theo khối lượng. 3) Đúng. 4) Sai: Chiều truyền nhiệt hoàn toàn phụ thuộc vào nhiệt độ (từ vật có nhiệt độ cao sang vật có nhiệt độ thấp), không phụ thuộc nhiệt dung riêng."
            },
            {
                "id": "u4_tf_03",
                "conceptId": "c_u4_multitf_ung_dung",
                "image": "images/calorimeter_specific_heat.jpg",
                "type": "multi_tf",
                "level": "Vận dụng",
                "context": "Trong thiết kế các hệ thống nhiệt và điều hòa vi khí hậu, các kỹ sư ứng dụng sâu rộng các đặc tính nhiệt dung riêng của các vật liệu khác nhau. Xét tính đúng/sai của các phát biểu sau:",
                "statements": [
                    {
                        "text": "Nước được chọn làm chất lỏng truyền nhiệt trong lò sưởi trung tâm vì nó có nhiệt dung riêng rất lớn, có thể trữ và vận chuyển nhiệt lượng cao.",
                        "isCorrect": true
                    },
                    {
                        "text": "Đất và cát có nhiệt dung riêng lớn hơn nước nên sa mạc giữ nhiệt rất tốt vào ban đêm.",
                        "isCorrect": false
                    },
                    {
                        "text": "Các tấm gang đúc đáy nồi nấu ăn có nhiệt dung riêng nhỏ và khối lượng lớn giúp duy trì nhiệt độ nấu ổn định khi giảm lửa.",
                        "isCorrect": true
                    },
                    {
                        "text": "Khi đun hai chất lỏng khác nhau có cùng khối lượng bằng hai nguồn nhiệt giống nhau, chất lỏng nào có nhiệt dung riêng lớn hơn sẽ sôi trước.",
                        "isCorrect": false
                    }
                ],
                "explanation": "1) Đúng vì nước có $c = 4180\\text{ J/kg.K}$ rất cao. 2) Sai vì cát có $c$ nhỏ nên hấp thụ nhiệt nhanh và tản nhiệt nhanh, sa mạc rất lạnh ban đêm. 3) Đúng vì tích số nhiệt dung $m c$ lớn giúp giữ nhiệt quán tính cao. 4) Sai vì chất lỏng có $c$ lớn hơn thì độ tăng nhiệt độ chậm hơn ($\\Delta T = Q/(mc)$), do đó sôi muộn hơn."
            },
            {
                "id": "u4_tf_04",
                "conceptId": "c_u4_multitf_thi_nghiem",
                "image": "images/calorimeter_specific_heat.jpg",
                "type": "multi_tf",
                "level": "Thông hiểu",
                "context": "Một nhóm học sinh khảo sát phương pháp đo nhiệt dung riêng của một kim loại bằng phương pháp nhiệt lượng kế (thả thỏi kim loại nóng vào nước nguội). Xét tính đúng/sai của các nhận định sau:",
                "statements": [
                    {
                        "text": "Phải gắp thỏi kim loại từ nước sôi thả thật nhanh vào nhiệt lượng kế để giảm tối đa nhiệt lượng truyền ra không khí trong lúc di chuyển.",
                        "isCorrect": true
                    },
                    {
                        "text": "Nước trong cốc đun ban đầu phải ngập hoàn toàn thỏi kim loại để toàn bộ thỏi đạt đến nhiệt độ sôi $100^{\\circ}\\text{C}$.",
                        "isCorrect": true
                    },
                    {
                        "text": "Sau khi thả thỏi kim loại vào, phải đọc nhiệt độ ngay lập tức trước khi kim loại truyền nhiệt cho nước.",
                        "isCorrect": false
                    },
                    {
                        "text": "Bỏ qua nhiệt lượng do nhiệt lượng kế hấp thụ là nguyên nhân dẫn đến sai số của phép đo.",
                        "isCorrect": true
                    }
                ],
                "explanation": "1) Đúng, di chuyển chậm làm mất nhiệt ra môi trường. 2) Đúng, để đảm bảo thỏi đạt nhiệt độ đồng nhất $100^{\\circ}\\text{C}$. 3) Sai, phải khuấy đều và chờ đến khi số chỉ nhiệt kế đạt giá trị cực đại ổn định (cân bằng nhiệt) mới ghi nhận nhiệt độ cân bằng. 4) Đúng, nhiệt lượng kế hấp thụ một phần nhiệt làm sai lệch phương trình cân bằng nhiệt."
            },
            {
                "id": "u4_sa_01",
                "conceptId": "c_u4_hieu_suat_dun_nuoc",
                "image": "images/calorimeter_specific_heat.jpg",
                "type": "short_answer",
                "level": "Vận dụng",
                "question": "Dùng một bếp điện công suất $500\\text{ W}$ đun nóng $1\\text{ kg}$ nước. Biết hiệu suất của bếp là $84\\%$. Nhiệt dung riêng của nước là $4200\\text{ J/kg.K}$. Thời gian cần thiết để nước tăng thêm $10^{\\circ}\\text{C}$ là bao nhiêu giây?",
                "answer": "100",
                "unit": "giây",
                "tolerance": 0.01,
                "explanation": "Nhiệt lượng có ích: $Q = mc\\Delta T = 1 \\times 4200 \\times 10 = 42\\,000\\text{ J}$. Điện năng cần cấp: $A = \\frac{Q}{H} = \\frac{42\\,000}{0{,}84} = 50\\,000\\text{ J}$. Thời gian đun: $t = \\frac{A}{P} = \\frac{50\\,000}{500} = 100\\text{ s}$."
            },
            {
                "id": "u4_sa_02",
                "conceptId": "c_u4_do_ndr_kim_loai",
                "image": "images/calorimeter_specific_heat.jpg",
                "type": "short_answer",
                "level": "Vận dụng",
                "question": "Một thỏi nhôm khối lượng $0{,}5\\text{ kg}$ được nung nóng tới $100^{\\circ}\\text{C}$ rồi thả vào nhiệt lượng kế chứa $1\\text{ kg}$ nước ở $20^{\\circ}\\text{C}$. Nhiệt độ cân bằng của hệ là $28^{\\circ}\\text{C}$. Bỏ qua nhiệt dung của bình nhiệt lượng kế. Biết $c_{\\text{nước}} = 4200\\text{ J/kg.K}$. Nhiệt dung riêng của nhôm tính được bằng bao nhiêu $\\text{J/kg.K}$ (làm tròn số nguyên)?",
                "answer": "933",
                "unit": "J/kg.K",
                "tolerance": 0.02,
                "explanation": "Phương trình cân bằng nhiệt: $m_{\\text{Al}} c_{\\text{Al}} (100 - 28) = m_{\\text{nước}} c_{\\text{nước}} (28 - 20) \\Rightarrow 0{,}5 \\times c_{\\text{Al}} \\times 72 = 1 \\times 4200 \\times 8 \\Rightarrow 36 c_{\\text{Al}} = 33\\,600 \\Rightarrow c_{\\text{Al}} \\approx 933{,}3\\text{ J/kg.K}$."
            },
            {
                "id": "u4_sa_03",
                "conceptId": "c_u4_do_ndr_oat_ke",
                "image": "images/calorimeter_specific_heat.jpg",
                "type": "short_answer",
                "level": "Vận dụng",
                "question": "Trong thí nghiệm thực hành đo nhiệt dung riêng, oát kế ghi công suất nhiệt $P = 15{,}0\\text{ W}$ cung cấp cho $0{,}15\\text{ kg}$ chất lỏng trong thời gian $10\\text{ phút}$ ($600\\text{ s}$). Nhiệt độ chất lỏng tăng từ $25{,}0^{\\circ}\\text{C}$ lên $45{,}0^{\\circ}\\text{C}$. Bỏ qua nhiệt hao phí. Nhiệt dung riêng của chất lỏng tính được bằng bao nhiêu $\\text{J/kg.K}$?",
                "answer": "3000",
                "unit": "J/kg.K",
                "tolerance": 0.01,
                "explanation": "Nhiệt lượng cung cấp: $Q = P \\cdot t = 15 \\times 600 = 9000\\text{ J}$. Ta có: $c = \\frac{Q}{m \\Delta T} = \\frac{9000}{0{,}15 \\times 20} = \\frac{9000}{3} = 3000\\text{ J/kg.K}$."
            },
            {
                "id": "u4_sa_04",
                "conceptId": "c_u4_nang_luong_mat_troi",
                "image": "images/calorimeter_specific_heat.jpg",
                "type": "short_answer",
                "level": "Vận dụng cao",
                "question": "Một dàn bình nước nóng năng lượng mặt trời thu bức xạ với công suất $800\\text{ W/m}^2$, diện tích thu nhiệt $2\\text{ m}^2$, hiệu suất biến nhiệt $70\\%$. Đun nóng $50\\text{ kg}$ nước từ $20^{\\circ}\\text{C}$ lên $60^{\\circ}\\text{C}$ ($c = 4200\\text{ J/kg.K}$). Thời gian chiếu xạ liên tục cần thiết bằng bao nhiêu phút (làm tròn số nguyên)?",
                "answer": "125",
                "unit": "phút",
                "tolerance": 0.02,
                "explanation": "Nhiệt có ích: $Q = 50 \\times 4200 \\times 40 = 8\\,400\\,000\\text{ J}$. Công suất có ích: $P_{\\text{ích}} = 800 \\times 2 \\times 0{,}7 = 1120\\text{ W}$. Thời gian: $t = \\frac{8\\,400\\,000}{1120} = 7500\\text{ s} = 125\\text{ phút}$."
            }
        ]
    },
    "unit5": {
        "title": "Bài 5: Nhiệt Nóng Chảy Riêng & Nhiệt Hóa Hơi Riêng",
        "questions": [
            {
                "id": "u5_mc_01",
                "conceptId": "c_u5_dinh_nghia_nong_chay",
                "image": "images/phase_transition_diagram.jpg",
                "type": "multiple_choice",
                "level": "Nhận biết",
                "question": "Nhiệt nóng chảy riêng $lambda$ của một chất là",
                "options": [
                    "Nhiệt lượng cần cung cấp để 1 kg chất đó nóng chảy hoàn toàn ở nhiệt độ nóng chảy.",
                    "Nhiệt lượng cần để 1 kg chất đó tăng nhiệt độ thêm 1 °C.",
                    "Nhiệt lượng cần để 1 lít chất lỏng hóa hơi hoàn toàn.",
                    "Năng lượng liên kết giữa các phân tử trong chất rắn vô định hình."
                ],
                "correct": 0,
                "explanation": "Định nghĩa SGK: Nhiệt nóng chảy riêng $lambda$ của một chất là nhiệt lượng cần cung cấp cho 1 kg chất đó để nó chuyển hoàn toàn từ thể rắn sang thể lỏng ở nhiệt độ nóng chảy."
            },
            {
                "id": "u5_mc_02",
                "conceptId": "c_u5_cong_thuc_nong_chay",
                "image": "images/snow_melting_cold.jpg",
                "type": "multiple_choice",
                "level": "Thông hiểu",
                "question": "Nhiệt lượng $Q$ cần cung cấp để làm nóng chảy hoàn toàn một khối lượng $m$ chất rắn ở nhiệt độ nóng chảy được tính theo công thức",
                "options": [
                    "$Q = lambda m$",
                    "$Q = L m$",
                    "$Q = m c Delta t$",
                    "$Q = lambda / m$"
                ],
                "correct": 0,
                "explanation": "Công thức nhiệt nóng chảy: $Q = lambda m$ (trong đó $lambda$ tính bằng J/kg, $m$ tính bằng kg)."
            },
            {
                "id": "u5_mc_03",
                "conceptId": "c_u5_dinh_nghia_hoa_hoi",
                "image": "images/pressure_cooker_boiling.jpg",
                "type": "multiple_choice",
                "level": "Nhận biết",
                "question": "Nhiệt hóa hơi riêng $L$ của một chất lỏng là nhiệt lượng cần truyền cho",
                "options": [
                    "1 kg chất lỏng để nó chuyển hoàn toàn thành thể hơi ở nhiệt độ sôi.",
                    "1 mol chất lỏng để nó tăng thêm 1 °C.",
                    "Toàn bộ khối chất lỏng để nó sôi sùng sục.",
                    "1 kg chất rắn để nó thăng hoa thành chất khí."
                ],
                "correct": 0,
                "explanation": "Định nghĩa SGK: Nhiệt hóa hơi riêng $L$ của một chất lỏng là nhiệt lượng cần cung cấp cho 1 kg chất lỏng đó để nó hóa hơi hoàn toàn ở nhiệt độ sôi."
            },
            {
                "id": "u5_mc_04",
                "conceptId": "c_u5_tinh_nong_chay_da",
                "image": "images/phase_transition_diagram.jpg",
                "type": "multiple_choice",
                "level": "Vận dụng",
                "question": "Biết nhiệt nóng chảy riêng của nước đá là $lambda = 3{,}34 \times 10^5\text{ J/kg}$. Nhiệt lượng cần thiết để làm nóng chảy hoàn toàn $2\text{ kg}$ nước đá ở $0^circ\text{C}$ thành nước ở $0^circ\text{C}$ là",
                "options": [
                    "$6{,}68 \times 10^5\text{ J}$",
                    "$3{,}34 \times 10^5\text{ J}$",
                    "$1{,}67 \times 10^5\text{ J}$",
                    "$8{,}35 \times 10^5\text{ J}$"
                ],
                "correct": 0,
                "explanation": "Áp dụng công thức $Q = lambda m = 3{,}34 \times 10^5 \times 2 = 6{,}68 \times 10^5\text{ J}$."
            },
            {
                "id": "u5_mc_05",
                "conceptId": "c_u5_tinh_hoa_hoi_nuoc",
                "image": "images/pressure_cooker_boiling.jpg",
                "type": "multiple_choice",
                "level": "Vận dụng",
                "question": "Một bình đun siêu tốc có công suất $1500\text{ W}$. Sau khi nước trong bình đã sôi ở $100^circ\text{C}$, nếu đun tiếp trong $4$ phút thì khối lượng nước bị hóa hơi là bao nhiêu? Biết nhiệt hóa hơi riêng của nước là $L = 2{,}26 \times 10^6\text{ J/kg}$.",
                "options": [
                    "$0{,}159\text{ kg}$",
                    "$0{,}318\text{ kg}$",
                    "$0{,}080\text{ kg}$",
                    "$0{,}500\text{ kg}$"
                ],
                "correct": 0,
                "explanation": "Nhiệt lượng tỏa ra: $Q = mathcal{P} t = 1500 \times 240 = 360000\text{ J}$. Khối lượng hóa hơi: $m = \frac{Q}{L} = \frac{360000}{2{,}26 \times 10^6} approx 0{,}159\text{ kg}$."
            },
            {
                "id": "u5_mc_06",
                "conceptId": "c_u5_do_thi_chuyen_the",
                "image": "images/phase_transition_diagram.jpg",
                "type": "multiple_choice",
                "level": "Vận dụng cao",
                "question": "Quan sát đồ thị chuyển thể của nước: Trong giai đoạn nước đá đang nóng chảy thành nước ở $0^circ\text{C}$ và khi nước đang sôi ở $100^circ\text{C}$, dù nguồn nhiệt liên tục cung cấp nhiệt lượng nhưng nhiệt độ của hệ không tăng lên. Nhiệt lượng nhận được dùng để làm gì?",
                "options": [
                    "Phá vỡ liên kết mạng tinh thể và thắng lực hút phân tử để chuyển thể chất, làm tăng thế năng tương tác giữa các phân tử.",
                    "Làm tăng động năng chuyển động nhiệt hỗn loạn của các phân tử.",
                    "Làm mát vỏ bình chứa và tỏa nhiệt ra môi trường ngoài.",
                    "Biến đổi hạt nhân nguyên tử tạo phản ứng hóa học."
                ],
                "correct": 0,
                "explanation": "Trong quá trình chuyển thể, nhiệt lượng cung cấp dùng để thắng lực liên kết phân tử (làm tăng thế năng tương tác phân tử), trong khi động năng nhiệt trung bình không đổi nên nhiệt độ của chất được giữ nguyên."
            },
            {
                "id": "u5_mc_07",
                "conceptId": "c_u5_phan_biet_bay_hoi_soi",
                "image": "images/phase_transition_diagram.jpg",
                "type": "multiple_choice",
                "level": "Thông hiểu",
                "question": "Phát biểu nào sau đây phân biệt CHÍNH XÁC nhất giữa sự bay hơi và sự sôi của chất lỏng?",
                "options": [
                    "Sự bay hơi xảy ra ở bề mặt chất lỏng ở mọi nhiệt độ; sự sôi xảy ra ở cả bề mặt và trong lòng chất lỏng ở nhiệt độ sôi xác định.",
                    "Sự bay hơi chỉ xảy ra khi có ánh nắng mặt trời; sự sôi chỉ xảy ra khi có ngọn lửa đun nóng trực tiếp đáy bình chứa.",
                    "Sự bay hơi làm tăng nhiệt độ của chất lỏng; sự sôi giữ cho nhiệt độ của chất lỏng hoàn toàn không bao giờ đổi.",
                    "Sự bay hơi chỉ xảy ra với nước ngọt; sự sôi chỉ xảy ra với các kim loại lỏng ở nhiệt độ hàng nghìn độ C."
                ],
                "correct": 0,
                "explanation": "Theo định nghĩa chuẩn SGK: Sự bay hơi là sự hoá hơi xảy ra ở bề mặt chất lỏng ở mọi nhiệt độ; sự sôi là sự hoá hơi xảy ra đồng thời ở bề mặt và trong lòng khối chất lỏng ở nhiệt độ sôi xác định (phụ thuộc áp suất)."
            },
            {
                "id": "u5_mc_08",
                "conceptId": "c_u5_ap_suat_nhiet_do_soi",
                "image": "images/pressure_cooker_boiling.jpg",
                "type": "multiple_choice",
                "level": "Thông hiểu",
                "question": "Khi áp suất khí quyển tác dụng lên mặt thoáng chất lỏng tăng lên thì nhiệt độ sôi của chất lỏng đó sẽ biến đổi như thế nào?",
                "options": [
                    "Nhiệt độ sôi tăng lên, do các bọt khí trong lòng chất lỏng khó nở to hơn đòi hỏi áp suất hơi bão hòa cao hơn.",
                    "Nhiệt độ sôi giảm xuống, do áp suất nén các phân tử chất lỏng lại gần nhau hơn.",
                    "Nhiệt độ sôi hoàn toàn không đổi vì nhiệt độ sôi là hằng số vật lí tuyệt đối của mỗi chất.",
                    "Nhiệt độ sôi giảm về $0^{\\circ}\\text{C}$ làm chất lỏng đóng băng ngay lập tức."
                ],
                "correct": 0,
                "explanation": "Nhiệt độ sôi của chất lỏng phụ thuộc vào áp suất khí trên mặt thoáng. Khi áp suất tăng, nhiệt độ sôi tăng. Đây chính là nguyên lí hoạt động của nồi áp suất (áp suất trong nồi khoảng $2\\text{ atm}$, nước sôi ở $\\approx 120^{\\circ}\\text{C}$ giúp ninh thức ăn nhanh nhừ)."
            },
            {
                "id": "u5_mc_09",
                "conceptId": "c_u5_dinh_nghia_nong_chay_rieng",
                "image": "images/phase_transition_diagram.jpg",
                "type": "multiple_choice",
                "level": "Nhận biết",
                "question": "Đơn vị đo chuẩn của nhiệt nóng chảy riêng và nhiệt hoá hơi riêng trong hệ SI lần lượt là",
                "options": [
                    "$\\text{J/kg}$ và $\\text{J/kg}$",
                    "$\\text{J/kg.K}$ và $\\text{J/kg.K}$",
                    "$\\text{kJ/mol}$ và $\\text{J/s}$",
                    "$\\text{Cal/g}$ và $\\text{W/m}^2$"
                ],
                "correct": 0,
                "explanation": "Công thức $Q = m\\lambda$ và $Q = mL$, do đó $\\lambda$ và $L$ có đơn vị là Joules trên kilôgam ($\\text{J/kg}$). (Khác với nhiệt dung riêng $c$ có đơn vị là $\\text{J/kg.K}$)."
            },
            {
                "id": "u5_mc_10",
                "conceptId": "c_u5_do_thi_nong_chay_ket_tinh",
                "image": "images/crystal_vs_amorphous.jpg",
                "type": "multiple_choice",
                "level": "Thông hiểu",
                "question": "Quan sát đồ thị đun nóng một chất rắn kết tinh: Trong suốt thời gian chất rắn đang nóng chảy, nhiệt độ của hệ",
                "options": [
                    "Không thay đổi, dù nguồn nhiệt liên tục cung cấp nhiệt lượng cho hệ.",
                    "Tăng tuyến tính theo thời gian đun nóng.",
                    "Giảm nhẹ do các phân tử phá vỡ liên kết tinh thể sinh công cản.",
                    "Dao động điều hòa quanh nhiệt độ phòng."
                ],
                "correct": 0,
                "explanation": "Trong suốt quá trình nóng chảy (hoặc đông đặc) của chất rắn kết tinh, nhiệt độ của chất không đổi và bằng nhiệt độ nóng chảy xác định. Toàn bộ nhiệt lượng cung cấp được dùng để phá vỡ mạng tinh thể (tăng thế năng tương tác phân tử)."
            },
            {
                "id": "u5_mc_11",
                "conceptId": "c_u5_do_thi_hoa_hoi",
                "image": "images/evaporation_factors.jpg",
                "type": "multiple_choice",
                "level": "Thông hiểu",
                "question": "Tại sao khi đun nước trong một chiếc ấm mở nắp ở áp suất tiêu chuẩn $1\\text{ atm}$, sau khi nước đã sôi sùng sục thì dù có tăng ngọn lửa lên mức tối đa, nhiệt độ của nước vẫn giữ nguyên ở $100^{\\circ}\\text{C}$?",
                "options": [
                    "Toàn bộ nhiệt lượng tăng thêm được cung cấp để phá vỡ liên kết giữa các phân tử nước ở thể lỏng và chuyển chúng thành thể hơi.",
                    "Ấm nước đã đạt đến trạng thái bão hòa cơ học không thể dẫn thêm nhiệt từ ngọn lửa.",
                    "Không khí xung quanh đã hút hết toàn bộ nhiệt lượng làm ngọn lửa bị lạnh đi tức thì.",
                    "Khối lượng riêng của hơi nước tăng lên ngăn cản sự truyền nhiệt từ đáy ấm vào nước."
                ],
                "correct": 0,
                "explanation": "Khi sôi ở áp suất xác định, nhiệt độ chất lỏng không đổi. Nhiệt lượng nhận vào được dùng hoàn toàn để cung cấp cho quá trình chuyển thể từ lỏng sang hơi (thắng lực hút phân tử và thực hiện công chống lại áp suất ngoài)."
            },
            {
                "id": "u5_mc_12",
                "conceptId": "c_u5_ung_dung_bay_hoi_lam_lanh",
                "image": "images/evaporation_factors.jpg",
                "type": "multiple_choice",
                "level": "Thông hiểu",
                "question": "Khi người bị sốt cao, bác sĩ thường khuyên lau người bằng khăn ẩm hoặc cồn y tế pha loãng. Cơ sở vật lí của biện pháp này là",
                "options": [
                    "Nước hoặc cồn bay hơi hấp thụ nhiệt lượng lớn từ cơ thể (thu nhiệt), giúp hạ thân nhiệt nhanh chóng.",
                    "Cồn làm co mạch máu ngoại vi giúp giữ nhiệt trong cơ thể không cho thoát ra ngoài.",
                    "Khăn ẩm phản xạ toàn phần bức xạ nhiệt từ môi trường vào da người bệnh.",
                    "Nước ngấm qua da làm tăng thể tích tuần hoàn máu trong tĩnh mạch."
                ],
                "correct": 0,
                "explanation": "Sự bay hơi là quá trình thu nhiệt. Khi chất lỏng (nước hoặc cồn) trên da bay hơi, nó lấy đi nhiệt lượng từ da người bệnh ($Q = mL$), làm mát bề mặt cơ thể một cách tự nhiên và an toàn."
            },
            {
                "id": "u5_mc_13",
                "conceptId": "c_u5_tinh_nhiet_luong_tong_hop",
                "image": "images/phase_transition_diagram.jpg",
                "type": "multiple_choice",
                "level": "Vận dụng",
                "question": "Nhiệt lượng cần cung cấp để chuyển $0{,}5\\text{ kg}$ nước đá ở $-10^{\\circ}\\text{C}$ thành nước hoàn toàn ở $0^{\\circ}\\text{C}$ là bao nhiêu? Biết $c_{\\text{đá}} = 2100\\text{ J/kg.K}$ và $\\lambda = 3{,}34 \\times 10^5\\text{ J/kg}$.",
                "options": [
                    "$177{,}5\\text{ kJ}$",
                    "$167{,}0\\text{ kJ}$",
                    "$10{,}5\\text{ kJ}$",
                    "$188\\text{ kJ}$"
                ],
                "correct": 0,
                "explanation": "Quá trình gồm 2 giai đoạn: 1) Nâng nhiệt độ từ $-10^{\\circ}\\text{C}$ lên $0^{\\circ}\\text{C}$: $Q_1 = m c_{\\text{đá}} \\Delta T = 0{,}5 \\times 2100 \\times 10 = 10\\,500\\text{ J}$. 2) Nóng chảy ở $0^{\\circ}\\text{C}$: $Q_2 = m \\lambda = 0{,}5 \\times 3{,}34 \\times 10^5 = 167\\,000\\text{ J}$. Tổng nhiệt: $Q = Q_1 + Q_2 = 177\\,500\\text{ J} = 177{,}5\\text{ kJ}$."
            },
            {
                "id": "u5_mc_14",
                "conceptId": "c_u5_thap_giai_nhiet",
                "image": "images/evaporation_factors.jpg",
                "type": "multiple_choice",
                "level": "Thông hiểu",
                "question": "Trong các nhà máy nhiệt điện hoặc hệ thống điều hòa không khí trung tâm, tháp giải nhiệt (cooling tower) làm mát dòng nước nóng tuần hoàn chủ yếu dựa vào hiện tượng vật lí nào?",
                "options": [
                    "Một phần nhỏ nước bốc hơi mang đi một lượng nhiệt hoá hơi rất lớn của khối nước còn lại.",
                    "Nước truyền nhiệt bức xạ trực tiếp vào tầng điện ly của khí quyển Trái Đất.",
                    "Nước chảy qua tháp bị nén đẳng tích làm giảm nội năng.",
                    "Không khí trong tháp phản ứng hoá học hấp thụ toàn bộ nhiệt của nước."
                ],
                "correct": 0,
                "explanation": "Tháp giải nhiệt tạo điều kiện cho một tỉ lệ nhỏ nước bốc hơi nhanh vào luồng không khí thổi qua tháp. Nhờ nhiệt hoá hơi của nước rất lớn ($L \\approx 2{,}3 \\times 10^6\\text{ J/kg}$), lượng nước bay hơi nhỏ này lấy đi nhiệt lượng khổng lồ, làm mát dòng nước tuần hoàn còn lại."
            },
            {
                "id": "u5_mc_15",
                "conceptId": "c_u5_thi_nghiem_nhiet_nong_chay",
                "image": "images/calorimeter_specific_heat.jpg",
                "type": "multiple_choice",
                "level": "Vận dụng",
                "question": "Trong thí nghiệm đo nhiệt nóng chảy riêng của nước đá bằng nhiệt lượng kế, tại sao trước khi thả cục nước đá vào nước trong bình, ta cần dùng khăn giấy thấm sạch lớp nước bám bên ngoài bề mặt cục nước đá?",
                "options": [
                    "Để đảm bảo toàn bộ khối lượng nước đá đem cân đều ở trạng thái rắn $0^{\\circ}\\text{C}$, tránh làm giảm giá trị nhiệt nóng chảy riêng tính được.",
                    "Để làm tăng độ ma sát giúp cục nước đá chìm nhanh xuống đáy bình nhiệt lượng kế.",
                    "Để ngăn chặn vi khuẩn trong không khí xâm nhập vào nước tinh khiết trong bình.",
                    "Để làm tăng nhiệt dung riêng của cục nước đá trước khi thả vào nhiệt lượng kế."
                ],
                "correct": 0,
                "explanation": "Lớp nước bám ngoài cục đá đã ở thể lỏng $0^{\\circ}\\text{C}$. Nếu không thấm khô, khi cân khối lượng $m$, phần nước lỏng này được tính vào khối lượng đá tan nhưng thực tế không hề hấp thụ nhiệt nóng chảy $\\lambda$, làm cho giá trị $\\lambda$ tính ra nhỏ hơn thực tế."
            },
            {
                "id": "u5_mc_16",
                "conceptId": "c_u5_do_thi_tong_hop",
                "image": "images/phase_transition_diagram.jpg",
                "type": "multiple_choice",
                "level": "Vận dụng cao",
                "question": "Đun nóng một lượng nước đá trong bình kín với công suất nhiệt không đổi $P = 500\\text{ W}$. Biết giai đoạn làm nóng chảy hoàn toàn nước đá kéo dài $10\\text{ phút}$. Khối lượng nước đá ban đầu trong bình xấp xỉ bằng (cho $\\lambda = 3{,}34 \\times 10^5\\text{ J/kg}$, bỏ qua hao phí)",
                "options": [
                    "$0{,}90\\text{ kg}$",
                    "$0{,}45\\text{ kg}$",
                    "$1{,}50\\text{ kg}$",
                    "$2{,}00\\text{ kg}$"
                ],
                "correct": 0,
                "explanation": "Nhiệt lượng cung cấp trong $10\\text{ phút}$ ($600\\text{ s}$): $Q = P \\cdot t = 500 \\times 600 = 300\\,000\\text{ J}$. Vì trong giai đoạn này toàn bộ nhiệt lượng dùng để nóng chảy nước đá: $Q = m\\lambda \\Rightarrow m = \\frac{300\\,000}{3{,}34 \\times 10^5} \\approx 0{,}898\\text{ kg} \\approx 0{,}90\\text{ kg}$."
            },
            {
                "id": "u5_tf_01",
                "conceptId": "c_u5_multitf_do_thi",
                "image": "images/phase_transition_diagram.jpg",
                "type": "multi_tf",
                "level": "Vận dụng",
                "context": "Xét quá trình đun nóng một khối nước đá từ $-10^circ\text{C}$ đến khi biến thành hơi nước ở $100^circ\text{C}$ dưới áp suất tiêu chuẩn $1\text{ atm}$:",
                "statements": [
                    {
                        "text": "Từ $-10^circ\text{C}$ đến $0^circ\text{C}$, nhiệt lượng cung cấp dùng để làm tăng nhiệt độ của nước đá.",
                        "isCorrect": true
                    },
                    {
                        "text": "Tại $0^circ\text{C}$, khối nước đá bắt đầu nóng chảy và nhiệt độ của nó tăng dần lên $10^circ\text{C}$ trước khi tan hết.",
                        "isCorrect": false
                    },
                    {
                        "text": "Nhiệt hóa hơi riêng của nước ($2{,}26 \times 10^6\text{ J/kg}$) lớn hơn nhiều so với nhiệt nóng chảy riêng ($3{,}34 \times 10^5\text{ J/kg}$).",
                        "isCorrect": true
                    },
                    {
                        "text": "Khi đổ mồ hôi, cơ thể người hạ nhiệt hiệu quả là nhờ nước bay hơi hấp thu một lượng nhiệt hóa hơi rất lớn từ da.",
                        "isCorrect": true
                    }
                ],
                "explanation": "1) Đúng. 2) Sai: Trong suốt quá trình nóng chảy nhiệt độ giữ nguyên ở 0°C cho đến khi tan hết. 3) Đúng: L > λ xấp xỉ gần 7 lần. 4) Đúng: Ứng dụng sinh học giải nhiệt của sự bay hơi."
            },
            {
                "id": "u5_tf_02",
                "conceptId": "c_u5_multitf_thi_nghiem",
                "image": "images/phase_transition_diagram.jpg",
                "type": "multi_tf",
                "level": "Thông hiểu",
                "context": "Thí nghiệm thực hành đo nhiệt nóng chảy riêng của nước đá theo chuẩn SGK GDPT 2018:",
                "statements": [
                    {
                        "text": "Khối nước đá dùng trong thí nghiệm phải là nước đá đang tan ở $0^circ\text{C}$ và được thấm khô bề mặt trước khi thả vào nhiệt lượng kế.",
                        "isCorrect": true
                    },
                    {
                        "text": "Nếu nước đá thả vào còn dính nhiều nước bám bên ngoài thì giá trị nhiệt nóng chảy riêng đo được sẽ lớn hơn giá trị thực tế.",
                        "isCorrect": false
                    },
                    {
                        "text": "Công thức xác định nhiệt nóng chảy riêng trong thí nghiệm là $lambda = \frac{Q - m_n c_n Delta t}{m_{đá}}$.",
                        "isCorrect": true
                    },
                    {
                        "text": "Càng đun sôi mạnh thì nhiệt hóa hơi riêng của nước càng giảm đi rõ rệt.",
                        "isCorrect": false
                    }
                ],
                "explanation": "1) Đúng: Phải thấm khô để chỉ đo khối lượng đá rắn ở 0°C. 2) Sai: Nước dính bên ngoài không cần thu nhiệt nóng chảy làm lượng nhiệt Q cấp bị chia cho khối lượng đo lớn hơn thực tế, dẫn tới λ đo được nhỏ hơn thực tế. 3) Đúng. 4) Sai: L là thuộc tính chất lỏng ở nhiệt độ sôi."
            },
            {
                "id": "u5_tf_03",
                "conceptId": "c_u5_multitf_ung_dung_lanh",
                "image": "images/evaporation_factors.jpg",
                "type": "multi_tf",
                "level": "Vận dụng",
                "context": "Xét chu trình làm lạnh khép kín trong tủ lạnh gia đình và máy điều hòa nhiệt độ (sử dụng môi chất lạnh R32 hoặc R134a):",
                "statements": [
                    {
                        "text": "Trong dàn lạnh (đặt trong phòng hoặc ngăn đông), môi chất lỏng bay hơi ở áp suất thấp, thu nhiệt từ không khí xung quanh làm nhiệt độ môi trường giảm.",
                        "isCorrect": true
                    },
                    {
                        "text": "Máy nén có tác dụng nén hơi môi chất lên áp suất cao và nhiệt độ cao trước khi đưa sang dàn nóng.",
                        "isCorrect": true
                    },
                    {
                        "text": "Trong dàn nóng (đặt ngoài trời), hơi môi chất ngưng tụ thành chất lỏng và tỏa nhiệt ra môi trường không khí bên ngoài.",
                        "isCorrect": true
                    },
                    {
                        "text": "Môi chất làm lạnh lý tưởng là chất có nhiệt hoá hơi riêng càng nhỏ càng tốt để tiết kiệm điện năng cho máy nén.",
                        "isCorrect": false
                    }
                ],
                "explanation": "1) Đúng, bay hơi ở áp suất thấp là quá trình thu nhiệt. 2) Đúng, máy nén nén hơi môi chất làm tăng nhiệt độ và áp suất. 3) Đúng, dàn nóng ngưng tụ tỏa nhiệt ra ngoài trời. 4) Sai, môi chất cần có nhiệt hoá hơi riêng $L$ càng LỚN càng tốt để mỗi vòng tuần hoàn mang được nhiều nhiệt nhất, nâng cao hệ số hiệu quả làm lạnh COP."
            },
            {
                "id": "u5_tf_04",
                "conceptId": "c_u5_multitf_do_thi_chuyen_the",
                "image": "images/phase_transition_diagram.jpg",
                "type": "multi_tf",
                "level": "Thông hiểu",
                "context": "Một khối nước đá $-20^{\\circ}\\text{C}$ được đun nóng liên tục bằng nguồn nhiệt công suất không đổi đến khi chuyển hoàn toàn thành hơi nước ở $120^{\\circ}\\text{C}$. Xét tính đúng/sai của các nhận định:",
                "statements": [
                    {
                        "text": "Đoạn đồ thị ứng với quá trình nóng chảy dài hơn đoạn đồ thị ứng với quá trình sôi hoá hơi vì nhiệt nóng chảy riêng lớn hơn nhiệt hoá hơi riêng.",
                        "isCorrect": false
                    },
                    {
                        "text": "Trong hai giai đoạn chuyển thể (nóng chảy tại $0^{\\circ}\\text{C}$ và sôi tại $100^{\\circ}\\text{C}$), nhiệt độ của hệ hoàn toàn không đổi dù nhiệt lượng vẫn liên tục truyền vào.",
                        "isCorrect": true
                    },
                    {
                        "text": "Độ dốc của đoạn đồ thị làm nóng nước lỏng nhỏ hơn độ dốc đoạn làm nóng nước đá vì nhiệt dung riêng của nước ($4180\\text{ J/kg.K}$) lớn hơn nhiệt dung riêng của nước đá ($2100\\text{ J/kg.K}$).",
                        "isCorrect": true
                    },
                    {
                        "text": "Nếu tăng áp suất khí quyển, nhiệt độ nóng chảy của nước đá sẽ tăng nhẹ và nhiệt độ sôi của nước sẽ giảm đi.",
                        "isCorrect": false
                    }
                ],
                "explanation": "1) Sai, nhiệt hoá hơi riêng của nước ($2{,}26 \\times 10^6\\text{ J/kg}$) lớn gấp gần 7 lần nhiệt nóng chảy riêng ($3{,}34 \\times 10^5\\text{ J/kg}$) nên đoạn sôi hoá hơi dài hơn rất nhiều. 2) Đúng, nhiệt độ không đổi trong quá trình chuyển thể. 3) Đúng, độ dốc $\\frac{\\Delta T}{\\Delta t} = \\frac{P}{mc}$ tỉ lệ nghịch với $c$, $c_{\\text{nước}} > c_{\\text{đá}}$ nên độ dốc đoạn nước lỏng nhỏ hơn. 4) Sai, nước đá nóng chảy co thể tích nên khi áp suất tăng nhiệt độ nóng chảy giảm nhẹ; còn nhiệt độ sôi tăng khi áp suất tăng."
            },
            {
                "id": "u5_sa_01",
                "conceptId": "c_u5_nong_chay_rieng",
                "image": "images/phase_transition_diagram.jpg",
                "type": "short_answer",
                "level": "Thông hiểu",
                "question": "Cần cung cấp nhiệt lượng bao nhiêu $\\text{kJ}$ để làm nóng chảy hoàn toàn $0{,}4\\text{ kg}$ băng tuyết ở $0^{\\circ}\\text{C}$? Biết nhiệt nóng chảy riêng của nước đá là $3{,}34 \\times 10^5\\text{ J/kg}$.",
                "answer": "133.6",
                "unit": "kJ",
                "tolerance": 0.01,
                "explanation": "Nhiệt lượng nóng chảy: $Q = m\\lambda = 0{,}4 \\times 334\\,000 = 133\\,600\\text{ J} = 133{,}6\\text{ kJ}$."
            },
            {
                "id": "u5_sa_02",
                "conceptId": "c_u5_can_bang_nhiet_hoi_nuoc",
                "image": "images/phase_transition_diagram.jpg",
                "type": "short_answer",
                "level": "Vận dụng cao",
                "question": "Dẫn $0{,}05\\text{ kg}$ hơi nước ở $100^{\\circ}\\text{C}$ vào một bình chứa $0{,}5\\text{ kg}$ nước ở $20^{\\circ}\\text{C}$. Bỏ qua nhiệt dung của bình và hao phí nhiệt. Biết $L = 2{,}26 \\times 10^6\\text{ J/kg}$, $c = 4200\\text{ J/kg.K}$. Nhiệt độ cân bằng của hỗn hợp nước bằng bao nhiêu $^{\\circ}\\text{C}$ (làm tròn đến 1 chữ số thập phân)?",
                "answer": "76.2",
                "unit": "°C",
                "tolerance": 0.02,
                "explanation": "Phương trình cân bằng nhiệt: $m_h L + m_h c (100 - t) = m_n c (t - 20) \\Rightarrow 0{,}05 \\times 2\\,260\\,000 + 0{,}05 \\times 4200 (100 - t) = 0{,}5 \\times 4200 (t - 20) \\Rightarrow 113\\,000 + 21\\,000 - 210t = 2100t - 42\\,000 \\Rightarrow 2310t = 176\\,000 \\Rightarrow t \\approx 76{,}19^{\\circ}\\text{C} \\approx 76{,}2^{\\circ}\\text{C}$."
            },
            {
                "id": "u5_sa_03",
                "conceptId": "c_u5_do_nhiet_hoa_hoi",
                "image": "images/evaporation_factors.jpg",
                "type": "short_answer",
                "level": "Vận dụng",
                "question": "Trong thí nghiệm đo nhiệt hoá hơi riêng của nước bằng ấm điện công suất $1200\\text{ W}$, sau khi nước sôi ổn định, cân điện tử ghi nhận khối lượng ấm và nước giảm đi $40\\text{ g}$ trong thời gian $80\\text{ giây}$. Bỏ qua hao phí nhiệt. Giá trị nhiệt hoá hơi riêng của nước đo được bằng bao nhiêu $\\times 10^6\\text{ J/kg}$ (làm tròn đến 2 chữ số thập phân)?",
                "answer": "2.4",
                "unit": "×10⁶ J/kg",
                "tolerance": 0.02,
                "explanation": "Nhiệt lượng cung cấp: $Q = P \\cdot t = 1200 \\times 80 = 96\\,000\\text{ J}$. Ta có: $L = \\frac{Q}{\\Delta m} = \\frac{96\\,000}{0{,}04\\text{ kg}} = 2{,}40 \\times 10^6\\text{ J/kg}$."
            },
            {
                "id": "u5_sa_04",
                "conceptId": "c_u5_tong_nhiet_dun_soi_hoa_hoi",
                "image": "images/phase_transition_diagram.jpg",
                "type": "short_answer",
                "level": "Vận dụng",
                "question": "Để đun nóng $1\\text{ kg}$ nước từ $20^{\\circ}\\text{C}$ lên $100^{\\circ}\\text{C}$ rồi làm hoá hơi hoàn toàn ở nhiệt độ này, cần cung cấp một nhiệt lượng tổng cộng bằng bao nhiêu $\\text{kJ}$? Cho $c = 4200\\text{ J/kg.K}$, $L = 2{,}26 \\times 10^6\\text{ J/kg}$.",
                "answer": "2596",
                "unit": "kJ",
                "tolerance": 0.01,
                "explanation": "Nhiệt đun sôi: $Q_1 = mc\\Delta T = 1 \\times 4200 \\times 80 = 336\\,000\\text{ J} = 336\\text{ kJ}$. Nhiệt hoá hơi: $Q_2 = mL = 1 \\times 2\\,260\\,000\\text{ J} = 2260\\text{ kJ}$. Tổng nhiệt lượng: $Q = Q_1 + Q_2 = 2596\\text{ kJ}$."
            }
        ]
    },
    "unit6": {
        "title": "Bài 6: Mô Hình Động Học Phân Tử Chất Khí",
        "questions": [
            {
                "id": "u6_mc_01",
                "conceptId": "c_u6_noi_dung_thuyet_khi",
                "image": "images/brownian_motion.jpg",
                "type": "multiple_choice",
                "level": "Nhận biết",
                "question": "Phát biểu nào sau đây KHÔNG đúng khi nói về mô hình động học phân tử chất khí?",
                "options": [
                    "Các phân tử khí đứng yên ở vị trí cân bằng và dao động xung quanh vị trí đó.",
                    "Chất khí gồm các phân tử có kích thước rất nhỏ so với khoảng cách giữa chúng.",
                    "Các phân tử khí chuyển động hỗn loạn không ngừng; chuyển động này càng nhanh thì nhiệt độ chất khí càng cao.",
                    "Khi chuyển động, các phân tử khí va chạm vào nhau và va chạm vào thành bình gây ra áp suất lên thành bình."
                ],
                "correct": 0,
                "explanation": "Phân tử chất rắn mới dao động quanh vị trí cân bằng cố định. Phân tử chất khí chuyển động hỗn loạn không ngừng theo mọi hướng."
            },
            {
                "id": "u6_mc_02",
                "conceptId": "c_u6_dinh_nghia_khi_li_tuong",
                "image": "images/dl1_thermodynamics_piston.jpg",
                "type": "multiple_choice",
                "level": "Thông hiểu",
                "question": "Chất khí trong đó các phân tử được coi là các chất điểm và chỉ tương tác với nhau khi va chạm được gọi là",
                "options": [
                    "Khí lí tưởng.",
                    "Khí thực.",
                    "Khí hiếm.",
                    "Hơi bão hòa."
                ],
                "correct": 0,
                "explanation": "Định nghĩa SGK: Khí lí tưởng là mô hình khí đơn giản hóa trong đó các phân tử được coi là chất điểm và chỉ tương tác đẩy nhau trong thời gian va chạm rất ngắn."
            },
            {
                "id": "u6_mc_03",
                "conceptId": "c_u6_nguyen_nhan_ap_suat",
                "image": "images/dl1_thermodynamics_piston.jpg",
                "type": "multiple_choice",
                "level": "Thông hiểu",
                "question": "Áp suất của chất khí tác dụng lên thành bình chứa có nguyên nhân trực tiếp từ",
                "options": [
                    "Vô số phân tử khí chuyển động hỗn loạn va chạm liên tục vào bề mặt thành bình.",
                    "Lực hấp dẫn kéo các phân tử khí nén xuống đáy bình.",
                    "Lực đẩy tĩnh điện giữa các electron ở vỏ nguyên tử khí.",
                    "Sự bốc hơi liên tục của thành bình vào trong lòng chất khí."
                ],
                "correct": 0,
                "explanation": "Mỗi va chạm phân tử khí vào thành bình tạo ra một xung lực nhỏ. Hàng tỉ tỉ va chạm liên tiếp trên một đơn vị diện tích tạo nên áp suất chất khí liên tục và ổn định."
            },
            {
                "id": "u6_mc_04",
                "conceptId": "c_u6_chuyen_dong_brown",
                "image": "images/brownian_motion.jpg",
                "type": "multiple_choice",
                "level": "Thông hiểu",
                "question": "Thí nghiệm quan sát chuyển động Brown của hạt phấn hoa trong nước hoặc khói trong không khí dưới kính hiển vi chứng minh điều gì?",
                "options": [
                    "Các phân tử chất lỏng và chất khí chuyển động hỗn loạn không ngừng và va chạm bất đối xứng vào các hạt lơ lửng.",
                    "Các hạt phấn hoa là sinh vật sống tự bơi trong nước.",
                    "Trong chất lỏng và chất khí có dòng điện trường xoáy liên tục.",
                    "Khối lượng riêng của hạt phấn hoa luôn thay đổi theo nhiệt độ."
                ],
                "correct": 0,
                "explanation": "Chuyển động ziczac hỗn loạn của hạt vi mô (Brown) là bằng chứng thực nghiệm trực tiếp chứng minh các phân tử môi trường chuyển động nhiệt hỗn loạn không ngừng."
            },
            {
                "id": "u6_mc_05",
                "conceptId": "c_u6_nhiet_do_dong_nang",
                "image": "images/temp_molecular_speed.jpg",
                "type": "multiple_choice",
                "level": "Vận dụng",
                "question": "Hệ thức liên hệ giữa động năng tịnh tiến trung bình $\bar{E}_d$ của phân tử khí lí tưởng và nhiệt độ tuyệt đối $T$ là $\bar{E}_d = \frac{3}{2} k T$ (với $k$ là hằng số Boltzmann). Nếu nhiệt độ tuyệt đối của khối khí tăng gấp $4$ lần thì động năng tịnh tiến trung bình của phân tử sẽ",
                "options": [
                    "Tăng gấp 4 lần.",
                    "Tăng gấp 2 lần.",
                    "Tăng gấp 16 lần.",
                    "Không đổi."
                ],
                "correct": 0,
                "explanation": "Động năng tịnh tiến trung bình tỉ lệ thuận bậc nhất với nhiệt độ tuyệt đối $T$: $\bar{E}_d propto T$, do đó $T$ tăng 4 lần thì $\bar{E}_d$ tăng 4 lần."
            },
            {
                "id": "u6_mc_06",
                "conceptId": "c_u6_toc_do_can_quan_phuong",
                "image": "images/temp_molecular_speed.jpg",
                "type": "multiple_choice",
                "level": "Vận dụng cao",
                "question": "Khi nhiệt độ tuyệt đối của một khối khí tăng từ $300\text{ K}$ lên $1200\text{ K}$, căn bậc hai của trung bình bình phương tốc độ phân tử ($v_{rms} = sqrt{overline{v^2}}$) sẽ thay đổi như thế nào?",
                "options": [
                    "Tăng gấp 2 lần.",
                    "Tăng gấp 4 lần.",
                    "Tăng gấp 16 lần.",
                    "Giảm 2 lần."
                ],
                "correct": 0,
                "explanation": "Ta có $v_{rms} = sqrt{\frac{3RT}{M}} propto sqrt{T}$. Khi $T$ tăng $1200/300 = 4$ lần thì $v_{rms}$ tăng $sqrt{4} = 2$ lần."
            },
            {
                "id": "u6_mc_07",
                "conceptId": "c_u6_khi_thuc_khi_li_tuong",
                "image": "images/gas_molecular_distance.jpg",
                "type": "multiple_choice",
                "level": "Thông hiểu",
                "question": "Trong điều kiện nào sau đây thì khí thực (như không khí, oxy, nitơ trong phòng) có thể coi gần đúng là chất khí lí tưởng?",
                "options": [
                    "Ở nhiệt độ cao và áp suất thấp.",
                    "Ở nhiệt độ rất thấp gần $0\\text{ K}$ và áp suất cực cao.",
                    "Ở điều kiện áp suất hàng trăm atm trong bình nén khí lỏng.",
                    "Ở mọi điều kiện nhiệt độ và áp suất bất kể môi trường."
                ],
                "correct": 0,
                "explanation": "Ở nhiệt độ cao, các phân tử chuyển động rất nhanh nên thế năng tương tác giữa chúng không đáng kể so với động năng; ở áp suất thấp, mật độ phân tử thưa thớt khiến thể tích riêng của các phân tử rất nhỏ so với thể tích bình chứa. Khi đó khí thực tuân theo gần đúng các định luật khí lí tưởng."
            },
            {
                "id": "u6_mc_08",
                "conceptId": "c_u6_mat_do_phan_tu",
                "image": "images/gas_molecular_distance.jpg",
                "type": "multiple_choice",
                "level": "Nhận biết",
                "question": "Mật độ phân tử chất khí $\\mu$ (hay $n_0$) được định nghĩa là",
                "options": [
                    "Số lượng phân tử khí có trong một đơn vị thể tích của khối khí chứa trong bình.",
                    "Tổng khối lượng của tất cả các phân tử khí có trong một lít thể tích.",
                    "Vận tốc chuyển động trung bình của các phân tử khí trong một giây.",
                    "Lực tác dụng trung bình của các phân tử khí lên một đơn vị diện tích thành bình."
                ],
                "correct": 0,
                "explanation": "Mật độ phân tử chất khí là đại lượng đặc trưng cho sự thưa hay dày của phân tử khí trong không gian, xác định bởi $\\mu = \\frac{N}{V}$, đơn vị chuẩn là $\\text{m}^{-3}$."
            },
            {
                "id": "u6_mc_09",
                "conceptId": "c_u6_he_thuc_ap_suat_dong_nang",
                "image": "images/temp_molecular_speed.jpg",
                "type": "multiple_choice",
                "level": "Thông hiểu",
                "question": "Theo thuyết động học phân tử chất khí, hệ thức liên hệ giữa áp suất chất khí $p$, mật độ phân tử $\\mu$ và động năng tịnh tiến trung bình $\\overline{E_d}$ của các phân tử khí là",
                "options": [
                    "$p = \\frac{2}{3} \\mu \\overline{E_d}$",
                    "$p = \\frac{1}{2} \\mu \\overline{E_d}$",
                    "$p = \\frac{3}{2} \\mu \\overline{E_d}$",
                    "$p = \\mu \\overline{E_d}$"
                ],
                "correct": 0,
                "explanation": "Hệ thức cơ bản của thuyết động học phân tử: $p = \\frac{1}{3} \\mu m \\overline{v^2} = \\frac{2}{3} \\mu \\left( \\frac{1}{2} m \\overline{v^2} \\right) = \\frac{2}{3} \\mu \\overline{E_d}$."
            },
            {
                "id": "u6_mc_10",
                "conceptId": "c_u6_y_nghia_nhiet_do_tuyet_doi",
                "image": "images/temp_molecular_speed.jpg",
                "type": "multiple_choice",
                "level": "Thông hiểu",
                "question": "Ý nghĩa vật lí sâu sắc nhất của nhiệt độ tuyệt đối $T$ trong thuyết động học phân tử là",
                "options": [
                    "Nhiệt độ tuyệt đối là số đo động năng chuyển động nhiệt tịnh tiến trung bình của các phân tử chất khí.",
                    "Nhiệt độ tuyệt đối là đại lượng đo lực hút tĩnh điện giữa các hạt nhân nguyên tử trong phân tử khí.",
                    "Nhiệt độ tuyệt đối cho biết tổng số lượng phân tử có mặt trong một kilôgam chất khí.",
                    "Nhiệt độ tuyệt đối đo tốc độ lan truyền của sóng âm thanh trong môi trường khí lí tưởng."
                ],
                "correct": 0,
                "explanation": "Hệ thức $\\overline{E_d} = \\frac{3}{2} k T$ chỉ ra rằng nhiệt độ tuyệt đối $T$ tỉ lệ thuận với động năng tịnh tiến trung bình của các phân tử chất khí. Nhiệt độ càng cao thì các phân tử chuyển động nhiệt càng hỗn loạn và nhanh hơn."
            },
            {
                "id": "u6_mc_11",
                "conceptId": "c_u6_toc_do_khoi_luong_mol",
                "image": "images/temp_molecular_speed.jpg",
                "type": "multiple_choice",
                "level": "Vận dụng",
                "question": "Ở cùng một nhiệt độ phòng $300\\text{ K}$, so sánh tốc độ căn quân phương $v_{\\text{rms}}$ của phân tử khí Heli ($M = 4\\text{ g/mol}$) và phân tử khí Oxy ($O_2, M = 32\\text{ g/mol}$):",
                "options": [
                    "Tốc độ căn quân phương của Heli lớn gấp $\\sqrt{8} \\approx 2{,}83$ lần của Oxy.",
                    "Tốc độ căn quân phương của Oxy lớn gấp 8 lần của Heli vì phân tử Oxy nặng hơn.",
                    "Tốc độ của hai khí bằng nhau vì chúng ở cùng nhiệt độ $300\\text{ K}$.",
                    "Tốc độ của Heli lớn gấp 8 lần tốc độ của phân tử Oxy."
                ],
                "correct": 0,
                "explanation": "Công thức tốc độ căn quân phương: $v_{\\text{rms}} = \\sqrt{\\frac{3RT}{M}}$. Vì cùng nhiệt độ $T$, tốc độ tỉ lệ nghịch với căn bậc hai của khối lượng mol $M$: $\\frac{v_{\\text{He}}}{v_{\\text{O}_2}} = \\sqrt{\\frac{M_{\\text{O}_2}}{M_{\\text{He}}}} = \\sqrt{\\frac{32}{4}} = \\sqrt{8} \\approx 2{,}83$."
            },
            {
                "id": "u6_mc_12",
                "conceptId": "c_u6_do_khong_tuyet_doi",
                "image": "images/absolute_zero_kelvin.jpg",
                "type": "multiple_choice",
                "level": "Nhận biết",
                "question": "Theo quan điểm cơ học nhiệt cổ điển, ở nhiệt độ không độ tuyệt đối ($0\\text{ K} = -273{,}15^{\\circ}\\text{C}$), trạng thái của các phân tử chất khí sẽ",
                "options": [
                    "Ngừng hoàn toàn mọi chuyển động nhiệt tịnh tiến hỗn loạn (động năng nhiệt tịnh tiến bằng 0).",
                    "Chuyển động nhanh nhất đạt tới vận tốc ánh sáng trong chân không.",
                    "Tự phân rã thành các proton, neutron và electron tự do phát sáng.",
                    "Biến đổi toàn bộ khối lượng thành năng lượng photon điện từ."
                ],
                "correct": 0,
                "explanation": "Ở $0\\text{ K}$, động năng tịnh tiến trung bình $\\overline{E_d} = \\frac{3}{2}kT = 0$, nghĩa là theo nhiệt động học cổ điển, mọi chuyển động nhiệt hỗn loạn của phân tử đều dừng lại."
            },
            {
                "id": "u6_mc_13",
                "conceptId": "c_u6_chuyen_dong_brown_khi",
                "image": "images/brownian_motion.jpg",
                "type": "multiple_choice",
                "level": "Thông hiểu",
                "question": "Khi rọi một chùm sáng hẹp qua khói thuốc lá hoặc hạt bụi lơ lửng trong không khí tối, ta quan sát thấy các hạt khói chuyển động zic-zắc hỗn loạn không ngừng. Nguyên nhân là do",
                "options": [
                    "Các phân tử không khí chuyển động nhiệt hỗn loạn va chạm không đồng đều từ các phía vào hạt khói nhỏ.",
                    "Chùm tia sáng mang năng lượng photon đẩy các hạt khói chạy vòng tròn.",
                    "Từ trường Trái Đất làm các hạt bụi tích điện quay tròn theo lực Lorentz.",
                    "Các hạt khói có tính chất tự vận động sinh học giống như vi khuẩn."
                ],
                "correct": 0,
                "explanation": "Chuyển động Brown của hạt khói là bằng chứng thực nghiệm trực quan khẳng định các phân tử khí vô hình chuyển động hỗn loạn không ngừng và va chạm liên tục không cân bằng vào bề mặt hạt khói nhỏ."
            },
            {
                "id": "u6_mc_14",
                "conceptId": "c_u6_ap_suat_thanh_binh",
                "image": "images/bicycle_pump_heating.jpg",
                "type": "multiple_choice",
                "level": "Thông hiểu",
                "question": "Khi bơm căng một quả bóng bay, lực làm căng vỏ bóng bay là do",
                "options": [
                    "Vô số phân tử khí bên trong chuyển động hỗn loạn va đập liên tục vào bề mặt bên trong của vỏ bóng.",
                    "Các phân tử khí hút chặt các phân tử cao su của vỏ bóng lại gần nhau.",
                    "Trọng lực của các phân tử khí đè nặng lên mặt đáy của quả bóng.",
                    "Lực đẩy Archimedes của khí quyển xung quanh tác dụng vào quả bóng."
                ],
                "correct": 0,
                "explanation": "Áp suất chất khí lên thành bình được tạo thành từ xung lượng của vô số phân tử khí va đập liên tục và đàn hồi vào diện tích bề mặt thành bình trong mỗi giây."
            },
            {
                "id": "u6_mc_15",
                "conceptId": "c_u6_bien_thien_dong_nang",
                "image": "images/temp_molecular_speed.jpg",
                "type": "multiple_choice",
                "level": "Vận dụng",
                "question": "Nếu nung nóng một khối khí lí tưởng để nhiệt độ tuyệt đối của nó tăng lên gấp 4 lần (từ $T$ lên $4T$), thì tốc độ căn quân phương của các phân tử khí sẽ",
                "options": [
                    "Tăng lên 2 lần.",
                    "Tăng lên 4 lần.",
                    "Tăng lên 16 lần.",
                    "Không đổi vì khối lượng phân tử không đổi."
                ],
                "correct": 0,
                "explanation": "Công thức $v_{\\text{rms}} = \\sqrt{\\frac{3kT}{m}} \\propto \\sqrt{T}$. Khi $T$ tăng 4 lần thì $v_{\\text{rms}}$ tăng $\\sqrt{4} = 2$ lần."
            },
            {
                "id": "u6_mc_16",
                "conceptId": "c_u6_tinh_dong_nang_tong_cong",
                "image": "images/temp_molecular_speed.jpg",
                "type": "multiple_choice",
                "level": "Vận dụng cao",
                "question": "Tổng động năng chuyển động nhiệt tịnh tiến của các phân tử trong $1\\text{ mol}$ khí lí tưởng đơn nguyên tử ở nhiệt độ $27^{\\circ}\\text{C}$ bằng bao nhiêu? (Lấy hằng số khí $R = 8{,}31\\text{ J/mol.K}$)",
                "options": [
                    "$3740\\text{ J}$",
                    "$1250\\text{ J}$",
                    "$2490\\text{ J}$",
                    "$5000\\text{ J}$"
                ],
                "correct": 0,
                "explanation": "Tổng động năng của $1\\text{ mol}$ khí đơn nguyên tử là: $E_d = N_A \\cdot \\overline{E_d} = N_A \\left( \\frac{3}{2} k T \\right) = \\frac{3}{2} R T = 1{,}5 \\times 8{,}31 \\times (27 + 273) = 1{,}5 \\times 8{,}31 \\times 300 = 3739{,}5\\text{ J} \\approx 3740\\text{ J}$."
            },
            {
                "id": "u6_tf_01",
                "conceptId": "c_u6_multitf_khi_li_tuong",
                "image": "images/dl1_thermodynamics_piston.jpg",
                "type": "multi_tf",
                "level": "Thông hiểu",
                "context": "Xét mô hình chất khí lí tưởng và chuyển động của phân tử:",
                "statements": [
                    {
                        "text": "Ở điều kiện nhiệt độ phòng và áp suất khí quyển bình thường, nhiều chất khí thực như không khí, oxi, hiđrô có thể coi gần đúng là khí lí tưởng.",
                        "isCorrect": true
                    },
                    {
                        "text": "Trong mô hình khí lí tưởng, thể tích bản thân của các phân tử khí chiếm phần lớn thể tích bình chứa.",
                        "isCorrect": false
                    },
                    {
                        "text": "Nhiệt độ tuyệt đối là thước đo động năng chuyển động nhiệt trung bình của các phân tử.",
                        "isCorrect": true
                    },
                    {
                        "text": "Khi giảm nhiệt độ xuống $0\text{ K}$ (không độ tuyệt đối), theo lý thuyết chuyển động nhiệt của phân tử sẽ hoàn toàn ngừng lại.",
                        "isCorrect": true
                    }
                ],
                "explanation": "1) Đúng: Áp suất thấp và nhiệt độ xa điểm ngưng tụ thì khí thực coi như khí lí tưởng. 2) Sai: Thể tích bản thân phân tử coi như không đáng kể so với thể tích bình. 3) Đúng: E_d = 3/2 kT. 4) Đúng: Tại 0 K năng lượng nhiệt triệt tiêu."
            },
            {
                "id": "u6_tf_02",
                "conceptId": "c_u6_multitf_ap_suat",
                "image": "images/brownian_motion.jpg",
                "type": "multi_tf",
                "level": "Vận dụng",
                "context": "Một bình kín chứa một khối lượng khí xác định. Xét các biện pháp làm thay đổi áp suất khí lên thành bình:",
                "statements": [
                    {
                        "text": "Nếu nén pittông để giảm thể tích bình thì mật độ phân tử khí tăng lên, dẫn đến số va chạm trong một giây vào thành bình tăng, làm tăng áp suất.",
                        "isCorrect": true
                    },
                    {
                        "text": "Nếu giữ nguyên thể tích và đun nóng khối khí, tốc độ chuyển động của phân tử tăng làm lực tác dụng mỗi lần va chạm tăng, dẫn đến áp suất tăng.",
                        "isCorrect": true
                    },
                    {
                        "text": "Khi hai khối khí khác nhau có cùng nhiệt độ thì phân tử có khối lượng lớn hơn sẽ có tốc độ trung bình lớn hơn.",
                        "isCorrect": false
                    },
                    {
                        "text": "Áp suất chất khí tác dụng vuông góc lên mọi bề mặt thành bình chứa và bằng nhau tại mọi điểm ở cùng độ sâu.",
                        "isCorrect": true
                    }
                ],
                "explanation": "1) Đúng: Mật độ tăng => áp suất tăng. 2) Đúng: T tăng => v tăng => xung lực tăng. 3) Sai: Cùng T thì E_d = 1/2 m v^2 bằng nhau, khối lượng m lớn hơn thì tốc độ v phải nhỏ hơn. 4) Đúng."
            },
            {
                "id": "u6_tf_03",
                "conceptId": "c_u6_multitf_chuyen_dong_nhiet",
                "image": "images/brownian_motion.jpg",
                "type": "multi_tf",
                "level": "Thông hiểu",
                "context": "Xét các đặc điểm của chuyển động nhiệt và sự tương tác giữa các phân tử trong mô hình động học phân tử chất khí:",
                "statements": [
                    {
                        "text": "Các phân tử khí lí tưởng chỉ tương tác với nhau khi va chạm; giữa hai va chạm liên tiếp, phân tử chuyển động thẳng đều.",
                        "isCorrect": true
                    },
                    {
                        "text": "Va chạm giữa các phân tử khí lí tưởng với nhau và với thành bình được coi là các va chạm hoàn toàn đàn hồi.",
                        "isCorrect": true
                    },
                    {
                        "text": "Ở cùng một nhiệt độ, mọi phân tử khí trong bình đều chuyển động với vận tốc hoàn toàn bằng nhau.",
                        "isCorrect": false
                    },
                    {
                        "text": "Khi hạ nhiệt độ của khối khí, số lần va chạm của các phân tử khí lên một đơn vị diện tích thành bình trong một giây sẽ giảm đi.",
                        "isCorrect": true
                    }
                ],
                "explanation": "1) Đúng, đây là giả thuyết cốt lõi của khí lí tưởng. 2) Đúng, va chạm bảo toàn động năng. 3) Sai, các phân tử có tốc độ phân bố theo phân bố Maxwell-Boltzmann (có phân tử nhanh, phân tử chậm, chỉ có động năng trung bình xác định theo nhiệt độ). 4) Đúng, khi nhiệt độ giảm, tốc độ phân tử giảm nên tần số va chạm lên thành bình giảm."
            },
            {
                "id": "u6_tf_04",
                "conceptId": "c_u6_multitf_ap_suat_khi_quyen",
                "image": "images/gas_molecular_distance.jpg",
                "type": "multi_tf",
                "level": "Vận dụng",
                "context": "Trong một phòng thí nghiệm vật lí hạt nhân, máy hút chân không hạ áp suất trong một buồng kín từ $1\\text{ atm}$ ($10^5\\text{ Pa}$) xuống $10^{-3}\\text{ Pa}$ ở nhiệt độ không đổi $300\\text{ K}$:",
                "statements": [
                    {
                        "text": "Mật độ phân tử khí trong buồng đã giảm đi $10^8$ lần so với ban đầu.",
                        "isCorrect": true
                    },
                    {
                        "text": "Động năng tịnh tiến trung bình của các phân tử khí còn lại trong buồng bị giảm đi $10^8$ lần.",
                        "isCorrect": false
                    },
                    {
                        "text": "Quãng đường tự do trung bình giữa hai va chạm liên tiếp của các phân tử khí tăng lên rất lớn.",
                        "isCorrect": true
                    },
                    {
                        "text": "Tốc độ chuyển động trung bình của các phân tử khí trong buồng chân không không hề thay đổi.",
                        "isCorrect": true
                    }
                ],
                "explanation": "1) Đúng vì $p = \\mu k T$, khi $T$ không đổi, $\\mu$ tỉ lệ thuận với $p$, giảm từ $10^5$ xuống $10^{-3}$ là giảm $10^8$ lần. 2) Sai vì $\\overline{E_d} = \\frac{3}{2}kT$ chỉ phụ thuộc vào nhiệt độ $T = 300\\text{ K}$ không đổi. 3) Đúng, mật độ thưa nên phân tử bay xa mới va chạm. 4) Đúng, tốc độ trung bình chỉ phụ thuộc vào nhiệt độ và khối lượng phân tử."
            },
            {
                "id": "u6_sa_01",
                "conceptId": "c_u6_dong_nang_tinh_toan",
                "image": "images/temp_molecular_speed.jpg",
                "type": "short_answer",
                "level": "Thông hiểu",
                "question": "Tính động năng tịnh tiến trung bình của một phân tử khí lí tưởng ở nhiệt độ $27^{\\circ}\\text{C}$ theo đơn vị $\\times 10^{-21}\\text{ J}$ (lấy hằng số Boltzmann $k = 1{,}38 \\times 10^{-23}\\text{ J/K}$, làm tròn đến 2 chữ số thập phân).",
                "answer": "6.21",
                "unit": "×10⁻²¹ J",
                "tolerance": 0.01,
                "explanation": "Nhiệt độ tuyệt đối: $T = 27 + 273 = 300\\text{ K}$. Động năng tịnh tiến trung bình: $\\overline{E_d} = \\frac{3}{2} k T = 1{,}5 \\times 1{,}38 \\times 10^{-23} \\times 300 = 6{,}21 \\times 10^{-21}\\text{ J}$."
            },
            {
                "id": "u6_sa_02",
                "conceptId": "c_u6_mat_do_phan_tu",
                "image": "images/gas_molecular_distance.jpg",
                "type": "short_answer",
                "level": "Thông hiểu",
                "question": "Một bình kín dung tích $5\\text{ lít}$ chứa $3 \\times 10^{23}$ phân tử khí lí tưởng. Mật độ phân tử khí trong bình bằng bao nhiêu $\\times 10^{25}\\text{ m}^{-3}$?",
                "answer": "6",
                "unit": "×10²⁵ m⁻³",
                "tolerance": 0.01,
                "explanation": "Đổi thể tích: $V = 5\\text{ lít} = 5 \\times 10^{-3}\\text{ m}^3$. Mật độ phân tử: $\\mu = \\frac{N}{V} = \\frac{3 \\times 10^{23}}{5 \\times 10^{-3}} = 6 \\times 10^{25}\\text{ m}^{-3}$."
            },
            {
                "id": "u6_sa_03",
                "conceptId": "c_u6_ap_suat_tu_dong_nang",
                "image": "images/temp_molecular_speed.jpg",
                "type": "short_answer",
                "level": "Vận dụng",
                "question": "Biết mật độ phân tử khí trong một bóng đèn là $\\mu = 2 \\times 10^{25}\\text{ m}^{-3}$, động năng tịnh tiến trung bình của mỗi phân tử là $6 \\times 10^{-21}\\text{ J}$. Áp suất chất khí tác dụng lên thành bóng đèn bằng bao nhiêu $\\text{kPa}$?",
                "answer": "80",
                "unit": "kPa",
                "tolerance": 0.01,
                "explanation": "Áp suất chất khí: $p = \\frac{2}{3} \\mu \\overline{E_d} = \\frac{2}{3} \\times (2 \\times 10^{25}) \\times (6 \\times 10^{-21}) = 80\\,000\\text{ Pa} = 80\\text{ kPa}$."
            },
            {
                "id": "u6_sa_04",
                "conceptId": "c_u6_toc_do_can_quan_phuong",
                "image": "images/temp_molecular_speed.jpg",
                "type": "short_answer",
                "level": "Vận dụng cao",
                "question": "Tính tốc độ căn quân phương của phân tử khí Heli ($M = 4\\text{ g/mol} = 4 \\times 10^{-3}\\text{ kg/mol}$) ở nhiệt độ $27^{\\circ}\\text{C}$ (lấy $R = 8{,}31\\text{ J/mol.K}$, làm tròn số nguyên) theo đơn vị $\\text{m/s}$.",
                "answer": "1367",
                "unit": "m/s",
                "tolerance": 0.02,
                "explanation": "Nhiệt độ $T = 300\\text{ K}$. Tốc độ căn quân phương: $v_{\\text{rms}} = \\sqrt{\\frac{3RT}{M}} = \\sqrt{\\frac{3 \\times 8{,}31 \\times 300}{4 \\times 10^{-3}}} = \\sqrt{1\\,869\\,750} \\approx 1367{,}4\\text{ m/s} \\approx 1367\\text{ m/s}$."
            }
        ]
    },
    "unit7": {
        "title": "Bài 7: Định Luật Boyle – Quá Trình Đẳng Nhiệt",
        "questions": [
            {
                "id": "u7_mc_01",
                "conceptId": "c_u7_dinh_nghia_dang_nhiet",
                "image": "images/boyle_law_isotherm.jpg",
                "type": "multiple_choice",
                "level": "Nhận biết",
                "question": "Quá trình biến đổi trạng thái của một khối khí trong đó nhiệt độ được giữ không đổi gọi là",
                "options": [
                    "Quá trình đẳng nhiệt.",
                    "Quá trình đẳng tích.",
                    "Quá trình đẳng áp.",
                    "Quá trình đoạn nhiệt."
                ],
                "correct": 0,
                "explanation": "Định nghĩa SGK: Quá trình biến đổi trạng thái của chất khí trong đó nhiệt độ $T$ được giữ không đổi gọi là quá trình đẳng nhiệt."
            },
            {
                "id": "u7_mc_02",
                "conceptId": "c_u7_noi_dung_boyle",
                "image": "images/boyle_law_isotherm.jpg",
                "type": "multiple_choice",
                "level": "Thông hiểu",
                "question": "Nội dung định luật Boyle phát biểu rằng: Trong quá trình đẳng nhiệt của một lượng khí xác định,",
                "options": [
                    "Áp suất tỉ lệ nghịch với thể tích ($p cdot V = \text{hằng số}$).",
                    "Áp suất tỉ lệ thuận với thể tích ($p / V = \text{hằng số}$).",
                    "Thể tích tỉ lệ thuận với nhiệt độ tuyệt đối ($V / T = \text{hằng số}$).",
                    "Áp suất tỉ lệ thuận với nhiệt độ tuyệt đối ($p / T = \text{hằng số}$)."
                ],
                "correct": 0,
                "explanation": "Định luật Boyle (1662): Ở nhiệt độ không đổi, tích của áp suất $p$ và thể tích $V$ của một khối lượng khí xác định là một hằng số: $p V = \text{const}$ hay $p_1 V_1 = p_2 V_2$."
            },
            {
                "id": "u7_mc_03",
                "conceptId": "c_u7_dang_do_thi_boyle",
                "image": "images/boyle_law_isotherm.jpg",
                "type": "multiple_choice",
                "level": "Thông hiểu",
                "question": "Đường đẳng nhiệt trong hệ tọa độ $(p, V)$ có dạng là",
                "options": [
                    "Một nhánh của đường hyperbol.",
                    "Một đường thẳng đi qua gốc tọa độ.",
                    "Một đường thẳng song song với trục hoành.",
                    "Một đường parabol đỉnh tại gốc tọa độ."
                ],
                "correct": 0,
                "explanation": "Vì $p = \frac{\text{const}}{V}$ có dạng hàm số $y = \frac{k}{x}$ nên trong hệ tọa độ $(p, V)$, đường đẳng nhiệt là một nhánh của đường hyperbol."
            },
            {
                "id": "u7_mc_04",
                "conceptId": "c_u7_tinh_toan_boyle",
                "image": "images/dl1_thermodynamics_piston.jpg",
                "type": "multiple_choice",
                "level": "Vận dụng",
                "question": "Một khối khí có thể tích $10\text{ lít}$ ở áp suất $2\text{ atm}$. Nếu nén đẳng nhiệt khối khí đến thể tích $4\text{ lít}$ thì áp suất mới của khối khí là",
                "options": [
                    "$5\text{ atm}$",
                    "$0{,}8\text{ atm}$",
                    "$2{,}5\text{ atm}$",
                    "$8\text{ atm}$"
                ],
                "correct": 0,
                "explanation": "Áp dụng định luật Boyle: $p_1 V_1 = p_2 V_2 Leftrightarrow 2 \times 10 = p_2 \times 4 Rightarrow p_2 = \frac{20}{4} = 5\text{ atm}$."
            },
            {
                "id": "u7_mc_05",
                "conceptId": "c_u7_bong_bong_duoi_nuoc",
                "image": "images/dl1_thermodynamics_piston.jpg",
                "type": "multiple_choice",
                "level": "Vận dụng cao",
                "question": "Một bọt khí nổi từ đáy hồ sâu $10\text{ m}$ lên đến mặt nước. Coi nhiệt độ của nước là như nhau ở mọi độ sâu. Biết áp suất khí quyển trên mặt nước là $p_0 = 10^5\text{ Pa}$, khối lượng riêng của nước là $1000\text{ kg/m}^3$, lấy $g = 10\text{ m/s}^2$. Thể tích của bọt khí khi lên tới mặt nước sẽ",
                "options": [
                    "Tăng gấp 2 lần thể tích ở đáy hồ.",
                    "Giảm một nửa so với ở đáy hồ.",
                    "Tăng gấp 4 lần thể tích ở đáy hồ.",
                    "Không thay đổi thể tích."
                ],
                "correct": 0,
                "explanation": "Áp suất ở đáy hồ: $p_{đáy} = p_0 + \rho g h = 10^5 + 1000 \times 10 \times 10 = 2 \times 10^5\text{ Pa} = 2 p_0$. Khi lên mặt hồ: $p_{mặt} = p_0$. Quá trình đẳng nhiệt: $p_{đáy} V_{đáy} = p_{mặt} V_{mặt} Rightarrow 2 p_0 V_{đáy} = p_0 V_{mặt} Rightarrow V_{mặt} = 2 V_{đáy}$."
            },
            {
                "id": "u7_mc_06",
                "conceptId": "c_u7_thi_nghiem_boyle",
                "image": "images/boyle_law_isotherm.jpg",
                "type": "multiple_choice",
                "level": "Thông hiểu",
                "question": "Trong thí nghiệm khảo sát định luật Boyle bằng xilanh có pittông và áp kế, thao tác nào sau đây giúp đảm bảo quá trình là đẳng nhiệt?",
                "options": [
                    "Dịch chuyển pittông thật chậm để khí có đủ thời gian trao đổi nhiệt với môi trường giữ nhiệt độ không đổi.",
                    "Ấn pittông thật nhanh và dứt khoát.",
                    "Bọc kín xilanh bằng lớp xốp cách nhiệt dày.",
                    "Đốt nóng xilanh bằng ngọn lửa đèn cồn liên tục."
                ],
                "correct": 0,
                "explanation": "Khi nén khí, công thực hiện làm tăng nội năng làm khí nóng lên. Nếu dịch chuyển thật chậm, nhiệt lượng sinh ra sẽ kịp truyền ra môi trường bên ngoài để nhiệt độ khí luôn cân bằng với nhiệt độ phòng ($T = \text{const}$)."
            },
            {
                "id": "u7_mc_07",
                "conceptId": "c_u7_do_thi_toa_do_khac",
                "image": "images/boyle_law_isotherm.jpg",
                "type": "multiple_choice",
                "level": "Thông hiểu",
                "question": "Đồ thị biểu diễn quá trình đẳng nhiệt của một lượng khí xác định trong hệ tọa độ $(p, \\frac{1}{V})$ có dạng là",
                "options": [
                    "Một đoạn thẳng nếu kéo dài sẽ đi qua gốc tọa độ O.",
                    "Một nhánh hyperbol nằm hoàn toàn ở góc phần tư thứ nhất.",
                    "Một đường parabol có đỉnh nằm tại gốc tọa độ.",
                    "Một đoạn thẳng vuông góc với trục hoành $\\frac{1}{V}$."
                ],
                "correct": 0,
                "explanation": "Từ định luật Boyle: $p \\cdot V = \\text{const} = C \\Rightarrow p = C \\cdot \\left(\\frac{1}{V}\\right)$. Đây là hàm số bậc nhất dạng $y = ax$ nên đồ thị trong hệ tọa độ $(p, \\frac{1}{V})$ là đường thẳng đi qua gốc tọa độ."
            },
            {
                "id": "u7_mc_08",
                "conceptId": "c_u7_so_sanh_hai_dang_nhiet",
                "image": "images/boyle_law_isotherm.jpg",
                "type": "multiple_choice",
                "level": "Thông hiểu",
                "question": "Trên cùng một hệ tọa độ $(p, V)$, hai đường đẳng nhiệt của cùng một khối lượng khí xác định ứng với hai nhiệt độ $T_1$ và $T_2$. Nếu đường đẳng nhiệt $T_2$ nằm phía trên đường đẳng nhiệt $T_1$ thì mối quan hệ giữa hai nhiệt độ là",
                "options": [
                    "$T_2 > T_1$",
                    "$T_2 < T_1$",
                    "$T_2 = T_1$",
                    "$T_2 = -T_1$"
                ],
                "correct": 0,
                "explanation": "Kẻ một đường thẳng song song với trục áp suất $p$ (cắt tại cùng một thể tích $V_0$). Tại $V_0$, áp suất trên đường $T_2$ lớn hơn áp suất trên đường $T_1$ ($p_2 > p_1$). Từ phương trình trạng thái $\\frac{pV}{T} = \\text{const}$, suy ra $T_2 > T_1$."
            },
            {
                "id": "u7_mc_09",
                "conceptId": "c_u7_thao_tac_thi_nghiem",
                "image": "images/boyle_law_isotherm.jpg",
                "type": "multiple_choice",
                "level": "Thông hiểu",
                "question": "Trong thí nghiệm kiểm chứng định luật Boyle bằng xilanh và pittông, tại sao người ta phải ấn hoặc kéo pittông thật chậm chạp?",
                "options": [
                    "Để nhiệt lượng trao đổi kịp với môi trường ngoài, giữ nhiệt độ khối khí luôn không đổi.",
                    "Để khí trong xilanh không bị bay hơi mất qua đầu đo của áp kế.",
                    "Để pittông không bị mài mòn ma sát vào thành xilanh làm hỏng gioăng cao su.",
                    "Để áp suất của khí quyển bên ngoài không tăng lên quá nhanh."
                ],
                "correct": 0,
                "explanation": "Khi nén nhanh, công thực hiện làm tăng nội năng khiến nhiệt độ khí tăng (quá trình đoạn nhiệt); khi giãn nhanh khí bị lạnh đi. Do đó phải dịch chuyển pittông thật chậm để khí luôn cân bằng nhiệt với môi trường phòng thí nghiệm (đẳng nhiệt)."
            },
            {
                "id": "u7_mc_10",
                "conceptId": "c_u7_ong_thuy_ngan_ngang",
                "image": "images/boyle_law_isotherm.jpg",
                "type": "multiple_choice",
                "level": "Vận dụng",
                "question": "Một ống thủy tinh tiết diện đều nằm ngang kín một đầu, giọt thủy ngân dài $10\\text{ cm}$ chặn một lượng khí trong ống có chiều dài $20\\text{ cm}$. Áp suất khí quyển là $76\\text{ cmHg}$. Áp suất của lượng khí trong ống lúc này là",
                "options": [
                    "$76\\text{ cmHg}$",
                    "$86\\text{ cmHg}$",
                    "$66\\text{ cmHg}$",
                    "$10\\text{ cmHg}$"
                ],
                "correct": 0,
                "explanation": "Khi ống nằm ngang, trọng lực của giọt thủy ngân hướng thẳng đứng xuống dưới không gây áp lực dọc theo phương ngang của ống. Do đó áp suất chất khí trong ống cân bằng hoàn toàn với áp suất khí quyển: $p = p_0 = 76\\text{ cmHg}$."
            },
            {
                "id": "u7_mc_11",
                "conceptId": "c_u7_bom_lop_xe",
                "image": "images/bicycle_pump_heating.jpg",
                "type": "multiple_choice",
                "level": "Vận dụng",
                "question": "Một quả bóng đá có dung tích không đổi $2{,}5\\text{ lít}$. Ban đầu bóng chứa không khí ở áp suất $1\\text{ atm}$. Dùng một bơm có thể tích mỗi lần bơm là $125\\text{ cm}^3$ không khí ở $1\\text{ atm}$ để bơm vào bóng. Coi nhiệt độ không đổi. Muốn áp suất trong bóng đạt $2\\text{ atm}$ thì cần bơm bao nhiêu lần?",
                "options": [
                    "$20\\text{ lần}$",
                    "$10\\text{ lần}$",
                    "$15\\text{ lần}$",
                    "$25\\text{ lần}$"
                ],
                "correct": 0,
                "explanation": "Áp dụng định luật Boyle cho toàn bộ lượng khí ở áp suất $1\\text{ atm}$: $p_0 (V_0 + n \\Delta V) = p V_0 \\Rightarrow 1 \\times (2500 + n \\times 125) = 2 \\times 2500 \\Rightarrow 2500 + 125n = 5000 \\Rightarrow 125n = 2500 \\Rightarrow n = 20\\text{ lần}$."
            },
            {
                "id": "u7_mc_12",
                "conceptId": "c_u7_dieu_kien_dinh_luat",
                "image": "images/boyle_law_isotherm.jpg",
                "type": "multiple_choice",
                "level": "Nhận biết",
                "question": "Định luật Boyle chỉ được áp dụng CHÍNH XÁC khi khối khí thỏa mãn hai điều kiện nào sau đây?",
                "options": [
                    "Khối lượng khí xác định (kín, không rò rỉ) và nhiệt độ của khí không đổi.",
                    "Khối lượng khí thay đổi liên tục và áp suất khí luôn bằng áp suất khí quyển.",
                    "Nhiệt độ khí tăng đều đặn và thể tích bình chứa không co giãn.",
                    "Thể tích khí giảm về 0 và vận tốc phân tử đạt cực đại."
                ],
                "correct": 0,
                "explanation": "Định luật Boyle: Trong quá trình đẳng nhiệt ($T = \\text{const}$) của một lượng khí xác định ($m = \\text{const}$), tích của áp suất $p$ và thể tích $V$ là một hằng số."
            },
            {
                "id": "u7_mc_13",
                "conceptId": "c_u7_sai_so_ro_ri",
                "image": "images/boyle_law_isotherm.jpg",
                "type": "multiple_choice",
                "level": "Vận dụng",
                "question": "Trong thí nghiệm kiểm chứng định luật Boyle, nếu gioăng cao su của pittông bị hở làm một lượng khí rỉ ra ngoài trong quá trình nén thì tích số $p \\cdot V$ đo được sẽ",
                "options": [
                    "Giảm dần khi thể tích $V$ giảm.",
                    "Tăng dần khi thể tích $V$ giảm.",
                    "Hoàn toàn không đổi vì nhiệt độ không đổi.",
                    "Dao động tuần hoàn quanh giá trị ban đầu."
                ],
                "correct": 0,
                "explanation": "Từ $pV = nRT = \\frac{m}{M}RT$. Nếu khí bị rò rỉ ra ngoài ($m$ giảm), khi nén tích số $pV$ sẽ bị giảm dần, dẫn đến đồ thị $p(V)$ bị lệch xuống dưới so với đường đẳng nhiệt lí thuyết."
            },
            {
                "id": "u7_mc_14",
                "conceptId": "c_u7_nen_khi_xilanh",
                "image": "images/dl1_thermodynamics_piston.jpg",
                "type": "multiple_choice",
                "level": "Thông hiểu",
                "question": "Một lượng khí lí tưởng ở nhiệt độ không đổi, khi thể tích giảm đi 3 lần thì mật độ phân tử khí và áp suất của khối khí sẽ",
                "options": [
                    "Mật độ phân tử tăng 3 lần và áp suất tăng 3 lần.",
                    "Mật độ phân tử giảm 3 lần và áp suất tăng 3 lần.",
                    "Mật độ phân tử tăng 3 lần và áp suất giảm 3 lần.",
                    "Cả mật độ và áp suất đều không thay đổi."
                ],
                "correct": 0,
                "explanation": "Khi $V$ giảm 3 lần, mật độ phân tử $\\mu = N/V$ tăng 3 lần. Theo Boyle hoặc $p = \\mu kT$ (với $T = \\text{const}$), áp suất $p$ tỉ lệ thuận với $\\mu$ nên cũng tăng 3 lần."
            },
            {
                "id": "u7_mc_15",
                "conceptId": "c_u7_bot_khi_ho_sau",
                "image": "images/boyle_law_isotherm.jpg",
                "type": "multiple_choice",
                "level": "Vận dụng",
                "question": "Một thợ lặn thở ra một bọt khí ở độ sâu $h$ trong hồ nước. Khi nổi lên sát mặt nước, thể tích của bọt khí nở to gấp đôi. Coi nhiệt độ nước không đổi, áp suất khí quyển $p_0 = 10^5\\text{ Pa}$, $\\rho = 1000\\text{ kg/m}^3$, $g = 10\\text{ m/s}^2$. Độ sâu $h$ là",
                "options": [
                    "$10\\text{ m}$",
                    "$20\\text{ m}$",
                    "$5\\text{ m}$",
                    "$15\\text{ m}$"
                ],
                "correct": 0,
                "explanation": "Ta có: $p_1 V_1 = p_0 V_2 \\Rightarrow (p_0 + \\rho g h) V_1 = p_0 (2 V_1) \\Rightarrow p_0 + \\rho g h = 2 p_0 \\Rightarrow \\rho g h = p_0 = 10^5\\text{ Pa} \\Rightarrow h = \\frac{10^5}{1000 \\times 10} = 10\\text{ m}$."
            },
            {
                "id": "u7_mc_16",
                "conceptId": "c_u7_bien_thien_phan_tram",
                "image": "images/boyle_law_isotherm.jpg",
                "type": "multiple_choice",
                "level": "Vận dụng cao",
                "question": "Nén đẳng nhiệt một khối khí để thể tích giảm đi $20\\%$ so với ban đầu. Áp suất của khối khí lúc này đã tăng thêm bao nhiêu phần trăm so với áp suất ban đầu?",
                "options": [
                    "$25\\%$",
                    "$20\\%$",
                    "$15\\%$",
                    "$30\\%$"
                ],
                "correct": 0,
                "explanation": "$V_2 = 0{,}8 V_1$. Áp dụng Boyle: $p_1 V_1 = p_2 V_2 \\Rightarrow p_2 = \\frac{V_1}{0{,}8 V_1} p_1 = 1{,}25 p_1$. Áp suất tăng thêm: $\\frac{p_2 - p_1}{p_1} = 25\\%$."
            },
            {
                "id": "u7_tf_01",
                "conceptId": "c_u7_multitf_do_thi",
                "image": "images/boyle_law_isotherm.jpg",
                "type": "multi_tf",
                "level": "Vận dụng",
                "context": "Xét hai đường đẳng nhiệt của cùng một khối lượng khí xác định ở hai nhiệt độ $T_1$ và $T_2$ trên đồ thị tọa độ $(p, V)$:",
                "statements": [
                    {
                        "text": "Đường đẳng nhiệt nào nằm ở phía trên (xa gốc tọa độ hơn) sẽ ứng với nhiệt độ cao hơn ($T_2 > T_1$).",
                        "isCorrect": true
                    },
                    {
                        "text": "Trong hệ tọa độ $(p, 1/V)$, đường đẳng nhiệt là một đoạn thẳng kéo dài đi qua gốc tọa độ.",
                        "isCorrect": true
                    },
                    {
                        "text": "Khi thể tích khí tăng gấp đôi thì áp suất khí cũng tăng gấp đôi.",
                        "isCorrect": false
                    },
                    {
                        "text": "Định luật Boyle chỉ nghiệm đúng đối với khối khí có khối lượng không đổi và nhiệt độ không đổi.",
                        "isCorrect": true
                    }
                ],
                "explanation": "1) Đúng: Ở cùng thể tích V, T cao hơn thì p lớn hơn nên đường nằm trên có T cao hơn. 2) Đúng: p = const * (1/V) có dạng y = ax. 3) Sai: Tỉ lệ nghịch nên V tăng gấp đôi thì p giảm một nửa. 4) Đúng."
            },
            {
                "id": "u7_tf_02",
                "conceptId": "c_u7_multitf_ung_dung",
                "image": "images/dl1_thermodynamics_piston.jpg",
                "type": "multi_tf",
                "level": "Thông hiểu",
                "context": "Xét hiện tượng bóp xẹp quả bóng bay hoặc bơm xe đạp trong thực tế:",
                "statements": [
                    {
                        "text": "Khi dùng bơm tay bơm xe đạp, nếu ấn pittông xuống quá nhanh thì không khí trong bơm bị nóng lên rõ rệt, khi đó quá trình không còn là đẳng nhiệt.",
                        "isCorrect": true
                    },
                    {
                        "text": "Người thợ lặn khi lặn sâu phải thở không khí ở áp suất cao bằng áp suất nước xung quanh; khi ngoi lên mặt nước quá nhanh, không khí nở to làm vỡ phế nang nếu nín thở.",
                        "isCorrect": true
                    },
                    {
                        "text": "Định luật Boyle áp dụng hoàn hảo cho cả chất lỏng như nước và dầu thủy lực.",
                        "isCorrect": false
                    },
                    {
                        "text": "Ở áp suất rất cao hàng nghìn atm, khí thực sai lệch nhiều so với định luật Boyle vì kích thước phân tử khí không còn nhỏ so với khoảng cách giữa chúng.",
                        "isCorrect": true
                    }
                ],
                "explanation": "1) Đúng: Nén nhanh là quá trình đoạn nhiệt sinh nhiệt. 2) Đúng: Định luật Boyle giải thích tai biến giảm áp của thợ lặn. 3) Sai: Chất lỏng hầu như không nén được. 4) Đúng: Khi p rất cao khí thực không còn là khí lí tưởng."
            },
            {
                "id": "u7_tf_03",
                "conceptId": "c_u7_multitf_tho_lan",
                "image": "images/boyle_law_isotherm.jpg",
                "type": "multi_tf",
                "level": "Vận dụng",
                "context": "Trong y học lặn biển, định luật Boyle đóng vai trò sinh tử đối với an toàn của thợ lặn (SCUBA). Xét tính đúng/sai của các nhận định y sinh học sau:",
                "statements": [
                    {
                        "text": "Khi người thợ lặn hít khí nén ở độ sâu $20\\text{ m}$ (áp suất $\\approx 3\\text{ atm}$) rồi nổi khẩn cấp lên mặt nước mà nín thở, thể tích khí trong phổi sẽ nở gấp 3 lần gây nguy cơ rách phế nang.",
                        "isCorrect": true
                    },
                    {
                        "text": "Để đảm bảo an toàn tính mạng, quy tắc tối thượng khi nổi lên là thợ lặn phải thở ra liên tục và nổi lên với tốc độ chậm.",
                        "isCorrect": true
                    },
                    {
                        "text": "Dung tích bình dưỡng khí bằng thép không đổi, nên khi lặn xuống sâu áp suất khí bên trong bình sẽ bị giảm đi do nước biển nén bên ngoài.",
                        "isCorrect": false
                    },
                    {
                        "text": "Đồ thị biểu diễn áp suất nước tác dụng lên thợ lặn theo độ sâu $h$ là một nhánh hyperbol.",
                        "isCorrect": false
                    }
                ],
                "explanation": "1) Đúng, theo Boyle $p$ giảm 3 lần thì $V$ nở 3 lần, nếu nín thở không cho khí thoát ra sẽ vỡ phổi (áp phế chấn thương). 2) Đúng, thở ra liên tục giúp xả bớt lượng khí giãn nở. 3) Sai, bình thép cứng không co giãn nên áp suất khí bên trong bình không phụ thuộc độ sâu. 4) Sai, áp suất nước $p = p_0 + \\rho g h$ là hàm bậc nhất theo $h$ nên đồ thị là đường thẳng, không phải hyperbol."
            },
            {
                "id": "u7_tf_04",
                "conceptId": "c_u7_multitf_thi_nghiem_so_hoa",
                "image": "images/boyle_law_isotherm.jpg",
                "type": "multi_tf",
                "level": "Thông hiểu",
                "context": "Học sinh sử dụng bộ thí nghiệm số hóa (xilanh có gắn cảm biến áp suất và phần mềm Vernier/Pasco) để khảo sát định luật Boyle. Xét tính đúng/sai:",
                "statements": [
                    {
                        "text": "Đồ thị áp suất $p$ theo đại lượng nghịch đảo $1/V$ thu được trên màn hình máy tính có dạng đường thẳng đi qua gốc tọa độ O.",
                        "isCorrect": true
                    },
                    {
                        "text": "Hệ số góc của đường thẳng $p$ theo $1/V$ chính là giá trị của hằng số $C = nRT$.",
                        "isCorrect": true
                    },
                    {
                        "text": "Nếu thí nghiệm được lặp lại ở nhiệt độ cao hơn, đường thẳng $p$ theo $1/V$ sẽ có độ dốc (hệ số góc) nhỏ hơn.",
                        "isCorrect": false
                    },
                    {
                        "text": "Khi nén thể tích xuống quá nhỏ, khí có thể ngưng tụ thành chất lỏng và định luật Boyle không còn nghiệm đúng.",
                        "isCorrect": true
                    }
                ],
                "explanation": "1) Đúng, $p = C (1/V)$ là hàm bậc nhất. 2) Đúng, hệ số góc chính là độ dốc $C = nRT$. 3) Sai, ở nhiệt độ cao hơn, $T$ tăng nên $C = nRT$ tăng, do đó hệ số góc lớn hơn (đường dốc hơn). 4) Đúng, khi thể tích quá nhỏ và áp suất quá lớn, lực tương tác phân tử đáng kể và khí có thể hóa lỏng, không còn tuân theo mô hình khí lí tưởng."
            },
            {
                "id": "u7_sa_01",
                "conceptId": "c_u7_tinh_ap_suat_boyle",
                "image": "images/boyle_law_isotherm.jpg",
                "type": "short_answer",
                "level": "Thông hiểu",
                "question": "Một lượng khí lí tưởng có thể tích $8\\text{ lít}$ ở áp suất $1\\text{ atm}$. Nén đẳng nhiệt lượng khí này đến thể tích $2\\text{ lít}$. Áp suất của lượng khí sau khi nén bằng bao nhiêu $\\text{atm}$?",
                "answer": "4",
                "unit": "atm",
                "tolerance": 0.01,
                "explanation": "Định luật Boyle: $p_1 V_1 = p_2 V_2 \\Rightarrow 1 \\times 8 = p_2 \\times 2 \\Rightarrow p_2 = 4\\text{ atm}$."
            },
            {
                "id": "u7_sa_02",
                "conceptId": "c_u7_ong_thuy_ngan_dung",
                "image": "images/boyle_law_isotherm.jpg",
                "type": "short_answer",
                "level": "Vận dụng cao",
                "question": "Một ống thủy tinh tiết diện đều kín một đầu chứa một cột không khí được ngăn cách bởi giọt thủy ngân dài $15\\text{ cm}$. Khi dựng ống thẳng đứng miệng ở trên, chiều dài cột khí là $20\\text{ cm}$. Khi lộn ngược ống miệng ở dưới, chiều dài cột khí là $30\\text{ cm}$. Coi nhiệt độ không đổi. Áp suất khí quyển bằng bao nhiêu $\\text{cmHg}$?",
                "answer": "75",
                "unit": "cmHg",
                "tolerance": 0.01,
                "explanation": "Miệng ở trên: $p_1 = p_0 + h = p_0 + 15$. Miệng ở dưới: $p_2 = p_0 - h = p_0 - 15$. Theo Boyle: $p_1 l_1 = p_2 l_2 \\Rightarrow (p_0 + 15) \\times 20 = (p_0 - 15) \\times 30 \\Rightarrow 20 p_0 + 300 = 30 p_0 - 450 \\Rightarrow 10 p_0 = 750 \\Rightarrow p_0 = 75\\text{ cmHg}$."
            },
            {
                "id": "u7_sa_03",
                "conceptId": "c_u7_bom_bong_da",
                "image": "images/bicycle_pump_heating.jpg",
                "type": "short_answer",
                "level": "Vận dụng",
                "question": "Dùng một bơm có dung tích xilanh $100\\text{ cm}^3$ để bơm không khí vào một quả bóng có dung tích không đổi $2\\text{ lít}$. Ban đầu quả bóng chứa không khí ở áp suất khí quyển $1\\text{ atm}$. Coi nhiệt độ không đổi. Sau 20 lần bơm, áp suất không khí bên trong quả bóng bằng bao nhiêu $\\text{atm}$?",
                "answer": "2",
                "unit": "atm",
                "tolerance": 0.01,
                "explanation": "Tổng thể tích khí ở áp suất ban đầu $1\\text{ atm}$ đưa vào bóng: $V_{\\text{tổng}} = V_0 + 20 \\times \\Delta V = 2000 + 20 \\times 100 = 4000\\text{ cm}^3$. Theo Boyle: $p_0 V_{\\text{tổng}} = p V_0 \\Rightarrow 1 \\times 4000 = p \\times 2000 \\Rightarrow p = 2\\text{ atm}$."
            },
            {
                "id": "u7_sa_04",
                "conceptId": "c_u7_ti_so_the_tich_ho_sau",
                "image": "images/boyle_law_isotherm.jpg",
                "type": "short_answer",
                "level": "Vận dụng",
                "question": "Một bọt khí nổi từ đáy một hồ nước sâu $20\\text{ m}$ lên đến mặt nước. Biết áp suất khí quyển $p_0 = 10^5\\text{ Pa}$, khối lượng riêng của nước là $1000\\text{ kg/m}^3$, lấy $g = 10\\text{ m/s}^2$. Coi nhiệt độ nước ở đáy và mặt hồ bằng nhau. Thể tích của bọt khí khi lên tới sát mặt nước gấp bao nhiêu lần thể tích bọt khí ở đáy hồ?",
                "answer": "3",
                "unit": "lần",
                "tolerance": 0.01,
                "explanation": "Áp suất ở đáy: $p_1 = p_0 + \\rho g h = 10^5 + 1000 \\times 10 \\times 20 = 3 \\times 10^5\\text{ Pa}$. Áp suất ở mặt nước: $p_2 = p_0 = 10^5\\text{ Pa}$. Theo Boyle: $p_1 V_1 = p_2 V_2 \\Rightarrow \\frac{V_2}{V_1} = \\frac{p_1}{p_2} = \\frac{3 \\times 10^5}{10^5} = 3$ lần."
            }
        ]
    },
    "unit8": {
        "title": "Bài 8: Định Luật Charles & Phương Trình Trạng Thái Khí Lí Tưởng",
        "questions": [
            {
                "id": "u8_mc_01",
                "conceptId": "c_u8_dinh_nghia_dang_ap",
                "image": "images/isobaric_work_pv.jpg",
                "type": "multiple_choice",
                "level": "Nhận biết",
                "question": "Quá trình biến đổi trạng thái của một lượng khí xác định trong đó áp suất được giữ không đổi gọi là",
                "options": [
                    "Quá trình đẳng áp.",
                    "Quá trình đẳng nhiệt.",
                    "Quá trình đẳng tích.",
                    "Quá trình tuần hoàn."
                ],
                "correct": 0,
                "explanation": "Định nghĩa SGK: Quá trình biến đổi trạng thái của chất khí trong đó áp suất $p$ không đổi gọi là quá trình đẳng áp."
            },
            {
                "id": "u8_mc_02",
                "conceptId": "c_u8_noi_dung_charles",
                "image": "images/isobaric_work_pv.jpg",
                "type": "multiple_choice",
                "level": "Thông hiểu",
                "question": "Theo định luật Charles, trong quá trình đẳng áp của một khối lượng khí xác định, thể tích của khối khí",
                "options": [
                    "Tỉ lệ thuận với nhiệt độ tuyệt đối ($V / T = \text{hằng số}$).",
                    "Tỉ lệ nghịch với nhiệt độ tuyệt đối ($V cdot T = \text{hằng số}$).",
                    "Tỉ lệ thuận với nhiệt độ Celsius ($V / t = \text{hằng số}$).",
                    "Không thay đổi theo nhiệt độ."
                ],
                "correct": 0,
                "explanation": "Định luật Charles (1787): Thể tích $V$ của một khối lượng khí xác định tỉ lệ thuận với nhiệt độ tuyệt đối $T$: $\frac{V}{T} = \text{const}$ hay $\frac{V_1}{T_1} = \frac{V_2}{T_2}$."
            },
            {
                "id": "u8_mc_03",
                "conceptId": "c_u8_khong_do_tuyet_doi",
                "image": "images/isobaric_work_pv.jpg",
                "type": "multiple_choice",
                "level": "Nhận biết",
                "question": "Nhiệt độ không độ tuyệt đối ($0\text{ K}$) ứng với bao nhiêu độ Celsius ($^circ\text{C}$)?",
                "options": [
                    "$-273{,}15^circ\text{C}$",
                    "$0^circ\text{C}$",
                    "$-100^circ\text{C}$",
                    "$273{,}15^circ\text{C}$"
                ],
                "correct": 0,
                "explanation": "Nhiệt độ Kelvin liên hệ với Celsius: $T(\text{K}) = t(^circ\text{C}) + 273{,}15$. Khi $T = 0\text{ K}$ thì $t = -273{,}15^circ\text{C}$."
            },
            {
                "id": "u8_mc_04",
                "conceptId": "c_u8_pttt_clapeyron",
                "image": "images/dl1_thermodynamics_piston.jpg",
                "type": "multiple_choice",
                "level": "Thông hiểu",
                "question": "Phương trình trạng thái của khí lí tưởng (phương trình Clapeyron) liên hệ giữa ba thông số trạng thái ($p, V, T$) của một lượng khí xác định là",
                "options": [
                    "$\frac{p_1 V_1}{T_1} = \frac{p_2 V_2}{T_2}$",
                    "$p_1 V_1 T_1 = p_2 V_2 T_2$",
                    "$\frac{p_1 T_1}{V_1} = \frac{p_2 T_2}{V_2}$",
                    "$p_1 + V_1 + T_1 = p_2 + V_2 + T_2$"
                ],
                "correct": 0,
                "explanation": "Phương trình trạng thái khí lí tưởng: $\frac{p V}{T} = \text{const} Leftrightarrow \frac{p_1 V_1}{T_1} = \frac{p_2 V_2}{T_2}$."
            },
            {
                "id": "u8_mc_05",
                "conceptId": "c_u8_tinh_toan_pttt",
                "image": "images/dl1_thermodynamics_piston.jpg",
                "type": "multiple_choice",
                "level": "Vận dụng",
                "question": "Một khối khí ở trạng thái 1 có thể tích $4\text{ lít}$, áp suất $1\text{ atm}$, nhiệt độ $27^circ\text{C}$. Nung nóng khối khí đến trạng thái 2 có áp suất $2\text{ atm}$ và thể tích $6\text{ lít}$. Nhiệt độ tuyệt đối $T_2$ của khối khí là",
                "options": [
                    "$900\text{ K}$",
                    "$600\text{ K}$",
                    "$300\text{ K}$",
                    "$1200\text{ K}$"
                ],
                "correct": 0,
                "explanation": "Ta có $T_1 = 27 + 273 = 300\text{ K}$. Áp dụng $\frac{p_1 V_1}{T_1} = \frac{p_2 V_2}{T_2} Leftrightarrow \frac{1 \times 4}{300} = \frac{2 \times 6}{T_2} Rightarrow \frac{4}{300} = \frac{12}{T_2} Rightarrow T_2 = 300 \times 3 = 900\text{ K}$."
            },
            {
                "id": "u8_mc_06",
                "conceptId": "c_u8_pt_mendeleev",
                "image": "images/dl1_thermodynamics_piston.jpg",
                "type": "multiple_choice",
                "level": "Vận dụng cao",
                "question": "Tính khối lượng khí oxy ($O_2$, khối lượng mol $M = 32\text{ g/mol}$) chứa trong bình có thể tích $10\text{ lít}$ ở áp suất $8{,}31 \times 10^5\text{ Pa}$ và nhiệt độ $27^circ\text{C}$. Cho hằng số khí $R = 8{,}31\text{ J/(mol.K)}$.",
                "options": [
                    "$106{,}7\text{ g}$",
                    "$32{,}0\text{ g}$",
                    "$64{,}0\text{ g}$",
                    "$128{,}0\text{ g}$"
                ],
                "correct": 0,
                "explanation": "Ta có $V = 10\text{ lít} = 0{,}01\text{ m}^3$, $T = 300\text{ K}$. Phương trình Clapeyron - Mendeleev: $pV = \frac{m}{M} R T Rightarrow m = \frac{p V M}{R T} = \frac{8{,}31 \times 10^5 \times 0{,}01 \times 32}{8{,}31 \times 300} = \frac{8310 \times 32}{2493} = \frac{320}{3} approx 106{,}7\text{ g}$."
            },
            {
                "id": "u8_mc_07",
                "conceptId": "c_u8_do_thi_dang_ap",
                "image": "images/kelvin_celsius_scale.jpg",
                "type": "multiple_choice",
                "level": "Thông hiểu",
                "question": "Đồ thị biểu diễn quá trình đẳng áp của một lượng khí xác định trong hệ tọa độ $(V, T)$ có đặc điểm là",
                "options": [
                    "Một đường thẳng nếu kéo dài sẽ đi qua gốc tọa độ O ($0\\text{ K}, 0\\text{ m}^3$).",
                    "Một nhánh hyperbol nằm hoàn toàn trong góc phần tư thứ nhất.",
                    "Một đường thẳng song song với trục nhiệt độ tuyệt đối $T$.",
                    "Một đường cong parabol đi qua điểm $(0^{\\circ}\\text{C}, 0\\text{ m}^3)$."
                ],
                "correct": 0,
                "explanation": "Theo định luật Charles: Trong quá trình đẳng áp, $\\frac{V}{T} = \\text{const} \\Rightarrow V = C \\cdot T$. Đây là hàm bậc nhất đồng biến theo $T$ nên đồ thị là đoạn thẳng hướng về gốc tọa độ O ($0\\text{ K}$)."
            },
            {
                "id": "u8_mc_08",
                "conceptId": "c_u8_qua_trinh_dang_tich",
                "image": "images/isochoric_process.jpg",
                "type": "multiple_choice",
                "level": "Thông hiểu",
                "question": "Trong quá trình biến đổi trạng thái của một lượng khí xác định giữ thể tích không đổi (đẳng tích), áp suất của khối khí",
                "options": [
                    "Tỉ lệ thuận với nhiệt độ tuyệt đối $T$ của khối khí.",
                    "Tỉ lệ nghịch với nhiệt độ tuyệt đối $T$ của khối khí.",
                    "Tỉ lệ thuận với bình phương nhiệt độ Celsius $t$.",
                    "Hoàn toàn không phụ thuộc vào nhiệt độ của bình chứa."
                ],
                "correct": 0,
                "explanation": "Định luật Gay-Lussac (quá trình đẳng tích): $\\frac{p}{T} = \\text{const} \\Rightarrow p \\propto T$. Áp suất tỉ lệ thuận với nhiệt độ tuyệt đối $T$."
            },
            {
                "id": "u8_mc_09",
                "conceptId": "c_u8_giai_thich_no_lop_xe",
                "image": "images/bicycle_pump_heating.jpg",
                "type": "multiple_choice",
                "level": "Thông hiểu",
                "question": "Vào mùa hè nắng gắt, ô tô hoặc xe máy chạy với tốc độ cao trên đường nhựa có nguy cơ bị nổ lốp cao hơn nhiều so với mùa đông. Nguyên nhân vật lí chủ yếu là do",
                "options": [
                    "Thể tích lốp xe gần như không đổi, nhiệt độ khí trong lốp tăng cao làm áp suất khí tăng vọt vượt quá giới hạn chịu lực của lốp.",
                    "Lốp xe ma sát với mặt đường làm khối lượng của chất khí bên trong lốp tự động tăng lên.",
                    "Áp suất khí quyển giảm xuống gần bằng 0 làm lốp xe bị hút bung ra ngoài.",
                    "Không khí trong lốp phản ứng hóa học tự bốc cháy tạo ra áp suất thủy tĩnh cực đại."
                ],
                "correct": 0,
                "explanation": "Quá trình trong lốp xe là quá trình đẳng tích ($V \\approx \\text{const}$). Ma sát và nhiệt độ mặt đường làm nhiệt độ $T$ của khí trong lốp tăng mạnh, dẫn tới áp suất $p = \\frac{p_1}{T_1} T$ tăng vượt sức bền của vỏ lốp gây nổ."
            },
            {
                "id": "u8_mc_10",
                "conceptId": "c_u8_pt_clapeyron_mendeleev",
                "image": "images/gas_molecular_distance.jpg",
                "type": "multiple_choice",
                "level": "Nhận biết",
                "question": "Phương trình Clapeyron - Mendeleev biểu diễn trạng thái của một khối lượng $m$ khí lí tưởng có khối lượng mol $M$ là",
                "options": [
                    "$pV = \\frac{m}{M} R T$",
                    "$pV = m M R T$",
                    "$pT = \\frac{m}{M} R V$",
                    "$V T = \\frac{m}{M} R p$"
                ],
                "correct": 0,
                "explanation": "Phương trình Clapeyron - Mendeleev: $pV = n R T = \\frac{m}{M} R T$, trong đó $n = m/M$ là số mol chất khí, $R \\approx 8{,}31\\text{ J/mol.K}$ là hằng số khí lí tưởng."
            },
            {
                "id": "u8_mc_11",
                "conceptId": "c_u8_cong_chu_trinh",
                "image": "images/isobaric_work_pv.jpg",
                "type": "multiple_choice",
                "level": "Thông hiểu",
                "question": "Trên đồ thị tọa độ $(p, V)$, công cơ học mà một khối khí thực hiện trong một chu trình nhiệt động lực học kín (khép kín) có độ lớn bằng",
                "options": [
                    "Diện tích của hình phẳng giới hạn bởi đường chu trình khép kín đó trên hệ tọa độ $(p, V)$.",
                    "Độ dài chu vi của đường cong chu trình khép kín đó.",
                    "Tích số giữa áp suất lớn nhất và thể tích nhỏ nhất của chu trình.",
                    "Luôn luôn bằng 0 vì trạng thái cuối trùng với trạng thái đầu."
                ],
                "correct": 0,
                "explanation": "Trong hệ tọa độ $(p, V)$, công nguyên tố $dA = p dV$. Với chu trình khép kín, công toàn phần sinh ra trong một chu trình chính bằng diện tích hình phẳng khép kín giới hạn bởi chu trình trên đồ thị $p-V$."
            },
            {
                "id": "u8_mc_12",
                "conceptId": "c_u8_bong_tham_khong",
                "image": "images/gas_molecular_distance.jpg",
                "type": "multiple_choice",
                "level": "Vận dụng",
                "question": "Một quả bóng thám không mang máy đo khí tượng khi thả lên cao tầng khí quyển: cả áp suất $p$ và nhiệt độ $T$ của không khí bên ngoài đều giảm. Tại sao vỏ quả bóng thám không lại căng to ra và cuối cùng bị vỡ?",
                "options": [
                    "Áp suất khí quyển bên ngoài giảm rất mạnh (nhanh hơn tốc độ giảm nhiệt độ), làm thể tích bóng nở to theo phương trình $V = nRT/p$.",
                    "Nhiệt độ ngoài trời giảm làm các phân tử khí bên trong bóng bay nhanh hơn và đẩy mạnh vào vỏ bóng.",
                    "Khối lượng không khí bên trong bóng tăng lên do hấp thụ thêm khí hydro ở tầng bình lưu.",
                    "Trọng lực Trái Đất ở trên cao giảm làm các phân tử khí mất hoàn toàn khối lượng."
                ],
                "correct": 0,
                "explanation": "Từ $V = \\frac{nRT}{p}$, khi lên cao độ cao $10 - 20\\text{ km}$, áp suất $p$ giảm tới $10 - 50$ lần trong khi nhiệt độ tuyệt đối $T$ chỉ giảm khoảng $20 - 30\\%$. Sự giảm áp suất chiếm ưu thế áp đảo làm thể tích $V$ nở to gấp nhiều lần cho đến khi vượt giới hạn đàn hồi của cao su làm bóng vỡ."
            },
            {
                "id": "u8_mc_13",
                "conceptId": "c_u8_bien_thien_noi_nang_chu_trinh",
                "image": "images/dl1_thermodynamics_piston.jpg",
                "type": "multiple_choice",
                "level": "Thông hiểu",
                "question": "Sau một chu trình biến đổi nhiệt động khép kín (hệ quay trở về trạng thái ban đầu), độ biến thiên nội năng $\\Delta U$ của khối khí bằng",
                "options": [
                    "$\\Delta U = 0$",
                    "$\\Delta U > 0$",
                    "$\\Delta U < 0$",
                    "$\\Delta U = Q_{\\text{nhận}}$"
                ],
                "correct": 0,
                "explanation": "Nội năng $U$ là một hàm trạng thái, chỉ phụ thuộc vào trạng thái nhiệt động (nhiệt độ và thể tích). Khi hệ quay về đúng trạng thái ban đầu thì $U_{\\text{cuối}} = U_{\\text{đầu}}$, do đó $\\Delta U = 0$."
            },
            {
                "id": "u8_mc_14",
                "conceptId": "c_u8_so_sanh_hai_dang_ap",
                "image": "images/kelvin_celsius_scale.jpg",
                "type": "multiple_choice",
                "level": "Thông hiểu",
                "question": "Trên hệ trục tọa độ $(V, T)$, hai đường đẳng áp của cùng một khối lượng khí xác định có áp suất $p_1$ và $p_2$. Nếu đường $p_1$ nằm phía trên đường $p_2$ (dốc hơn) thì",
                "options": [
                    "$p_1 < p_2$",
                    "$p_1 > p_2$",
                    "$p_1 = p_2$",
                    "$p_1 = 2 p_2$"
                ],
                "correct": 0,
                "explanation": "Hệ số góc của đường đẳng áp trên đồ thị $(V, T)$ là $\\frac{V}{T} = \\frac{nR}{p}$. Độ dốc càng lớn thì áp suất $p$ càng nhỏ. Do đường $p_1$ dốc hơn (nằm trên) đường $p_2$ nên $p_1 < p_2$."
            },
            {
                "id": "u8_mc_15",
                "conceptId": "c_u8_tinh_the_tich_pttt",
                "image": "images/isochoric_process.jpg",
                "type": "multiple_choice",
                "level": "Vận dụng",
                "question": "Một khối khí lí tưởng có thể tích $10\\text{ lít}$ ở $27^{\\circ}\\text{C}$ và áp suất $2\\text{ atm}$. Khi biến đổi sang trạng thái mới có áp suất $4\\text{ atm}$ và nhiệt độ $127^{\\circ}\\text{C}$, thể tích của khối khí bằng",
                "options": [
                    "$6{,}67\\text{ lít}$",
                    "$5{,}00\\text{ lít}$",
                    "$8{,}25\\text{ lít}$",
                    "$4{,}50\\text{ lít}$"
                ],
                "correct": 0,
                "explanation": "Phương trình trạng thái: $\\frac{p_1 V_1}{T_1} = \\frac{p_2 V_2}{T_2} \\Rightarrow \\frac{2 \\times 10}{300} = \\frac{4 \\times V_2}{400} \\Rightarrow \\frac{20}{300} = \\frac{V_2}{100} \\Rightarrow V_2 = \\frac{2000}{300} \\approx 6{,}67\\text{ lít}$."
            },
            {
                "id": "u8_mc_16",
                "conceptId": "c_u8_dieu_kien_tieu_chuan",
                "image": "images/gas_molecular_distance.jpg",
                "type": "multiple_choice",
                "level": "Nhận biết",
                "question": "Theo quy chuẩn hiện hành của IUPAC và SGK GDPT 2018, điều kiện chuẩn của chất khí là áp suất $p = 1\\text{ bar}$ ($10^5\\text{ Pa}$) và nhiệt độ $T = 298{,}15\\text{ K}$ ($25^{\\circ}\\text{C}$). Thể tích của $1\\text{ mol}$ khí lí tưởng ở điều kiện chuẩn này xấp xỉ bằng",
                "options": [
                    "$24{,}79\\text{ lít}$",
                    "$22{,}40\\text{ lít}$",
                    "$20{,}00\\text{ lít}$",
                    "$25{,}50\\text{ lít}$"
                ],
                "correct": 0,
                "explanation": "Theo chuẩn mới IUPAC & SGK GDPT 2018: Ở $25^{\\circ}\\text{C}$ ($298{,}15\\text{ K}$) và $1\\text{ bar}$ ($10^5\\text{ Pa}$), thể tích $1\\text{ mol}$ khí lí tưởng là $V = \\frac{nRT}{p} = \\frac{1 \\times 8{,}314 \\times 298{,}15}{10^5} \\approx 0{,}02479\\text{ m}^3 = 24{,}79\\text{ lít}$."
            },
            {
                "id": "u8_tf_01",
                "conceptId": "c_u8_multitf_do_thi",
                "image": "images/isobaric_work_pv.jpg",
                "type": "multi_tf",
                "level": "Vận dụng",
                "context": "Xét đồ thị của các đẳng quá trình trong các hệ trục tọa độ khác nhau:",
                "statements": [
                    {
                        "text": "Trong hệ tọa độ $(V, T)$, đường đẳng áp là đường thẳng có phần kéo dài đi qua gốc tọa độ $O$.",
                        "isCorrect": true
                    },
                    {
                        "text": "Trong hệ tọa độ $(p, T)$, đường đẳng tích là đường thẳng có phần kéo dài đi qua gốc tọa độ $O$.",
                        "isCorrect": true
                    },
                    {
                        "text": "Ở gần nhiệt độ $0\text{ K}$, các đường biểu diễn thường được vẽ bằng nét đứt vì chất khí đã bị hóa lỏng hoặc đông đặc trước khi tới $0\text{ K}$.",
                        "isCorrect": true
                    },
                    {
                        "text": "Khi nung nóng một bình thủy tinh kín chứa không khí, áp suất khí tăng tỉ lệ thuận với nhiệt độ độ bách phân $t(^circ\text{C})$.",
                        "isCorrect": false
                    }
                ],
                "explanation": "1) Đúng: V = (const)*T. 2) Đúng: p = (const)*T. 3) Đúng: Khí thực hóa lỏng ở nhiệt độ thấp trước khi về 0 K. 4) Sai: Tỉ lệ thuận với nhiệt độ tuyệt đối T (Kelvin), không phải nhiệt độ Celsius t."
            },
            {
                "id": "u8_tf_02",
                "conceptId": "c_u8_multitf_ung_dung",
                "image": "images/isobaric_work_pv.jpg",
                "type": "multi_tf",
                "level": "Thông hiểu",
                "context": "Ứng dụng các định luật chất khí trong đời sống và kỹ thuật hàng không vũ trụ:",
                "statements": [
                    {
                        "text": "Khí cầu không khí nóng bay lên được vì khi nung nóng không khí bên trong khí cầu, không khí giãn nở đẳng áp làm khối lượng riêng giảm nhẹ hơn không khí lạnh xung quanh.",
                        "isCorrect": true
                    },
                    {
                        "text": "Bình cứu hỏa chứa khí $CO_2$ nén ở áp suất cao, khi xịt ra ngoài khí giãn nở đột ngột làm nhiệt độ hạ xuống cực thấp tạo tuyết cacbonic.",
                        "isCorrect": true
                    },
                    {
                        "text": "Lốp xe ô tô khi chạy nhanh trên đường cao tốc vào mùa hè có thể bị nổ lốp do nhiệt độ tăng làm áp suất khí trong lốp tăng vượt giới hạn chịu lực.",
                        "isCorrect": true
                    },
                    {
                        "text": "Hằng số khí lí tưởng $R$ phụ thuộc vào bản chất của từng loại chất khí khác nhau.",
                        "isCorrect": false
                    }
                ],
                "explanation": "1) Đúng: Charles giải thích nguyên lí khinh khí cầu. 2) Đúng: Hiện tượng dãn khí giảm nhiệt độ. 3) Đúng: Đẳng tích làm tăng p khi T tăng. 4) Sai: R = 8.31 J/(mol.K) là hằng số phổ quát cho mọi khí lí tưởng."
            },
            {
                "id": "u8_tf_03",
                "conceptId": "c_u8_multitf_bong_tham_khong",
                "image": "images/gas_molecular_distance.jpg",
                "type": "multi_tf",
                "level": "Vận dụng cao",
                "context": "Một bóng thám không mang máy đo khí tượng chứa $10\\text{ m}^3$ khí Heli ở mặt đất ($p_1 = 1\\text{ atm}$, $T_1 = 300\\text{ K}$). Khi bay lên độ cao $12\\text{ km}$, áp suất giảm còn $p_2 = 0{,}2\\text{ atm}$ và nhiệt độ giảm còn $T_2 = 220\\text{ K}$:",
                "statements": [
                    {
                        "text": "Thể tích của bóng thám không ở độ cao $12\\text{ km}$ đạt xấp xỉ $36{,}7\\text{ m}^3$.",
                        "isCorrect": true
                    },
                    {
                        "text": "Mật độ phân tử khí Heli bên trong quả bóng ở độ cao $12\\text{ km}$ nhỏ hơn mật độ phân tử lúc ở mặt đất.",
                        "isCorrect": true
                    },
                    {
                        "text": "Khối lượng khí Heli bên trong bóng bị giảm đi do khí thoát bớt ra ngoài qua lỗ thông hơi.",
                        "isCorrect": false
                    },
                    {
                        "text": "Động năng tịnh tiến trung bình của các phân tử Heli ở độ cao $12\\text{ km}$ giảm đi so với khi ở mặt đất.",
                        "isCorrect": true
                    }
                ],
                "explanation": "1) Đúng: $\\frac{p_1 V_1}{T_1} = \\frac{p_2 V_2}{T_2} \\Rightarrow V_2 = V_1 \\frac{p_1}{p_2} \\frac{T_2}{T_1} = 10 \\times \\frac{1}{0{,}2} \\times \\frac{220}{300} = 50 \\times 0{,}733 \\approx 36{,}67\\text{ m}^3$. 2) Đúng vì thể tích nở to ra $3{,}67$ lần trong khi số phân tử không đổi. 3) Sai, bóng thám không là hệ kín giữ nguyên khối lượng khí. 4) Đúng vì $\\overline{E_d} = \\frac{3}{2}kT$, nhiệt độ giảm từ $300\\text{ K}$ xuống $220\\text{ K}$ làm động năng trung bình giảm."
            },
            {
                "id": "u8_tf_04",
                "conceptId": "c_u8_multitf_chu_trinh_carnot",
                "image": "images/heat_engine_principle.jpg",
                "type": "multi_tf",
                "level": "Thông hiểu",
                "context": "Xét một chu trình nhiệt động lực học khép kín gồm 4 quá trình của một khối khí lí tưởng: Đẳng nhiệt (1-2) -> Đẳng tích (2-3) -> Đẳng nhiệt (3-4) -> Đẳng tích (4-1):",
                "statements": [
                    {
                        "text": "Sau khi thực hiện trọn vẹn một chu trình, độ biến thiên nội năng $\\Delta U$ của khối khí bằng 0.",
                        "isCorrect": true
                    },
                    {
                        "text": "Công toàn phần sinh ra trong một chu trình chính bằng hiệu số giữa nhiệt lượng nhận vào và nhiệt lượng tỏa ra của khối khí ($A' = Q_{\\text{nhận}} - |Q_{\\text{tỏa}}|$).",
                        "isCorrect": true
                    },
                    {
                        "text": "Trong hai quá trình đẳng tích (2-3) và (4-1), chất khí hoàn toàn không thực hiện công cơ học ($A = 0$).",
                        "isCorrect": true
                    },
                    {
                        "text": "Hiệu suất nhiệt của chu trình luôn luôn có thể đạt tới $100\\%$ nếu loại bỏ hoàn toàn ma sát cơ học.",
                        "isCorrect": false
                    }
                ],
                "explanation": "1) Đúng vì trạng thái cuối trùng trạng thái đầu (nội năng là hàm trạng thái). 2) Đúng, từ $\\Delta U = A + Q = 0 \\Rightarrow A' = Q = Q_1 - Q_2$. 3) Đúng, đẳng tích $dV = 0$ nên công $A = \\int p dV = 0$. 4) Sai, theo định luật II nhiệt động lực học (nguyên lí Carnot), hiệu suất cực đại của động cơ nhiệt luôn luôn nhỏ hơn $100\\%$ vì bắt buộc phải truyền một phần nhiệt lượng cho nguồn lạnh ($H < 1 - T_2/T_1 < 100\\%$)."
            },
            {
                "id": "u8_sa_01",
                "conceptId": "c_u8_dinh_luat_charles",
                "image": "images/kelvin_celsius_scale.jpg",
                "type": "short_answer",
                "level": "Thông hiểu",
                "question": "Một lượng khí lí tưởng ở $27^{\\circ}\\text{C}$ có thể tích $6\\text{ lít}$. Đun nóng đẳng áp lượng khí này đến nhiệt độ $127^{\\circ}\\text{C}$. Thể tích của khối khí sau khi đun nóng bằng bao nhiêu $\\text{lít}$?",
                "answer": "8",
                "unit": "lít",
                "tolerance": 0.01,
                "explanation": "Nhiệt độ tuyệt đối: $T_1 = 27 + 273 = 300\\text{ K}$, $T_2 = 127 + 273 = 400\\text{ K}$. Quá trình đẳng áp: $\\frac{V_1}{T_1} = \\frac{V_2}{T_2} \\Rightarrow \\frac{6}{300} = \\frac{V_2}{400} \\Rightarrow V_2 = 8\\text{ lít}$."
            },
            {
                "id": "u8_sa_02",
                "conceptId": "c_u8_dinh_luat_gay_lussac",
                "image": "images/isochoric_process.jpg",
                "type": "short_answer",
                "level": "Vận dụng",
                "question": "Một bình kín bằng thép chứa khí ở $27^{\\circ}\\text{C}$ và áp suất $2{,}5\\text{ atm}$. Van an toàn của bình sẽ tự động xả khí khi áp suất vượt quá $5\\text{ atm}$. Coi thể tích bình không đổi. Van an toàn sẽ bắt đầu mở xả khí khi nhiệt độ bình đạt bao nhiêu độ Celsius ($^{\\circ}\\text{C}$)?",
                "answer": "327",
                "unit": "°C",
                "tolerance": 0.01,
                "explanation": "Quá trình đẳng tích: $\\frac{p_1}{T_1} = \\frac{p_2}{T_2} \\Rightarrow \\frac{2{,}5}{300} = \\frac{5}{T_2} \\Rightarrow T_2 = 600\\text{ K}$. Nhiệt độ Celsius: $t_2 = 600 - 273 = 327^{\\circ}\\text{C}$."
            },
            {
                "id": "u8_sa_03",
                "conceptId": "c_u8_pttt_khi_li_tuong",
                "image": "images/dl1_thermodynamics_piston.jpg",
                "type": "short_answer",
                "level": "Vận dụng",
                "question": "Trong xilanh kín chứa $2\\text{ lít}$ khí ở $27^{\\circ}\\text{C}$ và $1\\text{ atm}$. Nén khí đến thể tích $1\\text{ lít}$ đồng thời làm nhiệt độ khí tăng lên đến $177^{\\circ}\\text{C}$. Áp suất của khối khí lúc này bằng bao nhiêu $\\text{atm}$?",
                "answer": "3",
                "unit": "atm",
                "tolerance": 0.01,
                "explanation": "$T_1 = 300\\text{ K}$, $T_2 = 177 + 273 = 450\\text{ K}$. Phương trình trạng thái: $\\frac{p_1 V_1}{T_1} = \\frac{p_2 V_2}{T_2} \\Rightarrow \\frac{1 \\times 2}{300} = \\frac{p_2 \\times 1}{450} \\Rightarrow p_2 = \\frac{2 \\times 450}{300} = 3\\text{ atm}$."
            },
            {
                "id": "u8_sa_04",
                "conceptId": "c_u8_mendeleev_tinh_khoi_luong",
                "image": "images/gas_molecular_distance.jpg",
                "type": "short_answer",
                "level": "Vận dụng cao",
                "question": "Tính khối lượng khí Heli ($He$, khối lượng mol $M = 4\\text{ g/mol}$) chứa trong bình thể tích $41{,}55\\text{ lít}$ ở áp suất $2 \\times 10^5\\text{ Pa}$ và nhiệt độ $27^{\\circ}\\text{C}$. Cho hằng số khí $R = 8{,}31\\text{ J/mol.K}$. Kết quả khối lượng bằng bao nhiêu gam (làm tròn đến 1 chữ số thập phân)?",
                "answer": "13.3",
                "unit": "gam",
                "tolerance": 0.02,
                "explanation": "Phương trình Clapeyron - Mendeleev: $pV = \\frac{m}{M} R T \\Rightarrow m = \\frac{p V M}{R T} = \\frac{(2 \\times 10^5) \\times (0{,}04155) \\times 4}{8{,}31 \\times 300} = \\frac{33\\,240}{2493} \\approx 13{,}33\\text{ g} \\approx 13{,}3\\text{ g}$."
            }
        ]
    }
};

const CLONE_BANK = {
    "c_u4_dinh_nghia_ndr": [
        {
            "id": "clone_u4_ndr_v1",
            "conceptId": "c_u4_dinh_nghia_ndr",
            "image": "images/calorimeter_specific_heat.jpg",
            "type": "multiple_choice",
            "level": "Nhận biết",
            "question": "Nhiệt lượng cần cung cấp cho 1 kg chất để nhiệt độ của nó tăng thêm 1 K được gọi là",
            "options": [
                "Nhiệt dung riêng của chất đó.",
                "Nhiệt hóa hơi riêng.",
                "Nhiệt nóng chảy riêng.",
                "Nội năng của chất."
            ],
            "correct": 0,
            "explanation": "Ghi nhớ: Nhiệt lượng làm 1 kg tăng 1 K là nhiệt dung riêng c."
        }
    ],
    "c_u4_cong_thuc_q": [
        {
            "id": "clone_u4_q_v1",
            "conceptId": "c_u4_cong_thuc_q",
            "image": "images/calorimeter_specific_heat.jpg",
            "type": "multiple_choice",
            "level": "Thông hiểu",
            "question": "Một ấm đun nước chứa 2 kg nước được đun nóng tăng thêm 30 °C. Cho c = 4200 J/(kg.K). Nhiệt lượng nước thu vào là",
            "options": [
                "252.000 J",
                "126.000 J",
                "84.000 J",
                "504.000 J"
            ],
            "correct": 0,
            "explanation": "Q = mcΔt = 2 * 4200 * 30 = 252,000 J."
        }
    ],
    "c_u5_dinh_nghia_nong_chay": [
        {
            "id": "clone_u5_nc_v1",
            "conceptId": "c_u5_dinh_nghia_nong_chay",
            "image": "images/phase_transition_diagram.jpg",
            "type": "multiple_choice",
            "level": "Nhận biết",
            "question": "Nhiệt nóng chảy riêng có đơn vị là",
            "options": [
                "J/kg",
                "J/(kg.K)",
                "J",
                "W"
            ],
            "correct": 0,
            "explanation": "λ = Q / m => đơn vị là J/kg."
        }
    ],
    "c_u6_dinh_nghia_khi_li_tuong": [
        {
            "id": "clone_u6_klt_v1",
            "conceptId": "c_u6_dinh_nghia_khi_li_tuong",
            "image": "images/dl1_thermodynamics_piston.jpg",
            "type": "multiple_choice",
            "level": "Thông hiểu",
            "question": "Trong mô hình khí lí tưởng, giữa hai lần va chạm liên tiếp, các phân tử khí",
            "options": [
                "Chuyển động thẳng đều.",
                "Chuyển động tròn đều.",
                "Đứng yên.",
                "Chuyển động biến đổi đều."
            ],
            "correct": 0,
            "explanation": "Vì bỏ qua lực tương tác tầm xa nên giữa các va chạm phân tử chuyển động theo quán tính thẳng đều."
        }
    ],
    "c_u7_noi_dung_boyle": [
        {
            "id": "clone_u7_boyle_v1",
            "conceptId": "c_u7_noi_dung_boyle",
            "image": "images/boyle_law_isotherm.jpg",
            "type": "multiple_choice",
            "level": "Thông hiểu",
            "question": "Hệ thức nào sau đây biểu diễn định luật Boyle cho quá trình đẳng nhiệt?",
            "options": [
                "p₁ V₁ = p₂ V₂",
                "p₁ / T₁ = p₂ / T₂",
                "V₁ / T₁ = V₂ / T₂",
                "p₁ V₂ = p₂ V₁"
            ],
            "correct": 0,
            "explanation": "Đẳng nhiệt: pV = const => p₁V₁ = p₂V₂."
        }
    ],
    "c_u8_noi_dung_charles": [
        {
            "id": "clone_u8_charles_v1",
            "conceptId": "c_u8_noi_dung_charles",
            "image": "images/isobaric_work_pv.jpg",
            "type": "multiple_choice",
            "level": "Thông hiểu",
            "question": "Trong quá trình đẳng áp của một lượng khí lí tưởng xác định, nếu nhiệt độ tuyệt đối T tăng 2 lần thì thể tích V sẽ",
            "options": [
                "Tăng 2 lần.",
                "Giảm 2 lần.",
                "Không đổi.",
                "Tăng 4 lần."
            ],
            "correct": 0,
            "explanation": "Charles: V / T = const => T tăng 2 lần thì V tăng 2 lần."
        }
    ],
    "c_u1_mo_hinh_phan_tu": [
        {
            "id": "clone_u1_mhpt_v1",
            "conceptId": "c_u1_mo_hinh_phan_tu",
            "image": "images/temp_molecular_speed.jpg",
            "type": "multiple_choice",
            "level": "Nhận biết",
            "question": "Tính chất nào sau đây là tính chất của các phân tử cấu tạo nên chất?",
            "options": [
                "Chỉ chuyển động hỗn loạn ở nhiệt độ cao.",
                "Chuyển động hỗn loạn không ngừng theo mọi hướng.",
                "Chuyển động có hướng từ nơi có mật độ thấp đến nơi có mật độ cao.",
                "Đứng yên trong chất rắn và chỉ chuyển động trong chất khí."
            ],
            "correct": 1,
            "explanation": "Ghi nhớ cốt lõi: Các phân tử luôn chuyển động hỗn loạn không ngừng theo mọi hướng ở mọi thể (rắn, lỏng, khí)."
        },
        {
            "id": "clone_u1_mhpt_v2",
            "conceptId": "c_u1_mo_hinh_phan_tu",
            "image": "images/temp_molecular_speed.jpg",
            "type": "multiple_choice",
            "level": "Nhận biết",
            "question": "Chuyển động nhiệt của các phân tử là",
            "options": [
                "Chuyển động của các phân tử khi bị nung nóng trên ngọn lửa.",
                "Chuyển động hỗn loạn không ngừng của các phân tử cấu tạo nên chất.",
                "Chuyển động tuần hoàn của các nguyên tử xung quanh hạt nhân.",
                "Chuyển động rơi tự do của các hạt bụi trong không khí."
            ],
            "correct": 1,
            "explanation": "Ghi nhớ cốt lõi: Chuyển động hỗn loạn không ngừng của các phân tử được gọi là chuyển động nhiệt vì vận tốc của chuyển động này phụ thuộc vào nhiệt độ."
        }
    ],
    "c_u1_nhiet_do_chuyen_dong": [
        {
            "id": "clone_u1_ndcd_v1",
            "conceptId": "c_u1_nhiet_do_chuyen_dong",
            "image": "images/temp_molecular_speed.jpg",
            "type": "multiple_choice",
            "level": "Nhận biết",
            "question": "Khi nhiệt độ của một cốc nước tăng từ $25^\\circ\\text{C}$ lên $80^\\circ\\text{C}$ thì",
            "options": [
                "Nhiệt độ của vật càng cao thì các phân tử cấu tạo nên vật chuyển động càng chậm chạp và có xu hướng ngưng tụ lại thành khối rắn đặc.",
                "Nhiệt độ của vật càng cao thì các phân tử cấu tạo nên vật chuyển động nhiệt hỗn loạn càng nhanh và có động năng trung bình càng lớn.",
                "Nhiệt độ của vật càng cao thì khoảng cách giữa các phân tử càng giảm đi khiến lực đẩy tương tác giữa các phân tử tăng lên cực đại.",
                "Nhiệt độ của vật càng cao thì khối lượng của từng phân tử càng tăng lên do chúng hấp thụ thêm năng lượng nhiệt từ môi trường ngoài."
            ],
            "correct": 1,
            "explanation": "Ghi nhớ cốt lõi: Nhiệt độ càng cao thì tốc độ chuyển động hỗn loạn của các phân tử càng lớn."
        },
        {
            "id": "clone_u1_ndcd_v2",
            "conceptId": "c_u1_nhiet_do_chuyen_dong",
            "image": "images/temp_molecular_speed.jpg",
            "type": "multiple_choice",
            "level": "Nhận biết",
            "question": "Hiện tượng khuếch tán của thuốc tím trong cốc nước nóng xảy ra nhanh hơn trong cốc nước lạnh vì",
            "options": [
                "Nhiệt độ của vật càng cao thì các phân tử cấu tạo nên vật chuyển động càng chậm chạp và có xu hướng ngưng tụ lại thành khối rắn đặc.",
                "Nhiệt độ của vật càng cao thì các phân tử cấu tạo nên vật chuyển động nhiệt hỗn loạn càng nhanh và có động năng trung bình càng lớn.",
                "Nhiệt độ của vật càng cao thì khoảng cách giữa các phân tử càng giảm đi khiến lực đẩy tương tác giữa các phân tử tăng lên cực đại.",
                "Nhiệt độ của vật càng cao thì khối lượng của từng phân tử càng tăng lên do chúng hấp thụ thêm năng lượng nhiệt từ môi trường ngoài."
            ],
            "correct": 1,
            "explanation": "Ghi nhớ cốt lõi: Hiện tượng khuếch tán xảy ra nhanh hơn ở nhiệt độ cao do các phân tử chuyển động nhiệt nhanh hơn, va chạm và xen kẽ vào nhau nhanh hơn."
        }
    ],
    "c_u1_chuyen_dong_brown": [
        {
            "id": "clone_u1_brown_v1",
            "conceptId": "c_u1_chuyen_dong_brown",
            "image": "images/brownian_motion.jpg",
            "type": "multiple_choice",
            "level": "Thông hiểu",
            "question": "Nếu quan sát các hạt phấn hoa trong nước dưới kính hiển vi ở nhiệt độ cao hơn, ta sẽ thấy chuyển động Brown của các hạt phấn hoa",
            "options": [
                "Chuyển động hỗn loạn, không ngừng của các hạt bụi rất nhỏ lơ lửng trong chất lỏng hoặc chất khí do bị các phân tử môi trường va chạm không đồng đều từ mọi phía.",
                "Chuyển động có hướng xác định của các hạt bụi dưới tác dụng của lực hấp dẫn và lực cản của môi trường chất lỏng hoặc chất khí xung quanh.",
                "Chuyển động tuần hoàn theo chu kỳ của các phân tử chất lỏng hoặc chất khí do sự chênh lệch khối lượng riêng khi bị đun nóng ở đáy bình chứa.",
                "Chuyển động dao động điều hòa của các hạt mang điện tích dưới tác dụng của từ trường Trái Đất và điện trường khí quyển trong không gian tự do."
            ],
            "correct": 0,
            "explanation": "Ghi nhớ cốt lõi: Khi nhiệt độ tăng, các phân tử nước chuyển động nhanh hơn và va chạm mạnh hơn vào hạt phấn hoa, làm chuyển động Brown càng hỗn loạn và nhanh hơn."
        },
        {
            "id": "clone_u1_brown_v2",
            "conceptId": "c_u1_chuyen_dong_brown",
            "image": "images/brownian_motion.jpg",
            "type": "multiple_choice",
            "level": "Thông hiểu",
            "question": "Hạt phấn hoa trong thí nghiệm Brown có kích thước lớn hơn rất nhiều so với phân tử nước, nhưng vẫn chuyển động hỗn loạn là vì",
            "options": [
                "Chuyển động hỗn loạn, không ngừng của các hạt bụi rất nhỏ lơ lửng trong chất lỏng hoặc chất khí do bị các phân tử môi trường va chạm không đồng đều từ mọi phía.",
                "Chuyển động có hướng xác định của các hạt bụi dưới tác dụng của lực hấp dẫn và lực cản của môi trường chất lỏng hoặc chất khí xung quanh.",
                "Chuyển động tuần hoàn theo chu kỳ của các phân tử chất lỏng hoặc chất khí do sự chênh lệch khối lượng riêng khi bị đun nóng ở đáy bình chứa.",
                "Chuyển động dao động điều hòa của các hạt mang điện tích dưới tác dụng của từ trường Trái Đất và điện trường khí quyển trong không gian tự do."
            ],
            "correct": 0,
            "explanation": "Ghi nhớ cốt lõi: Vì các phân tử nước quá nhỏ bé và chuyển động hỗn loạn, số phân tử va đập vào các phía của hạt phấn hoa trong từng khoảnh khắc ngắn không bằng nhau, tạo ra hợp lực đẩy hạt phấn hoa theo quỹ đạo zic-zắc ngẫu nhiên."
        }
    ],
    "c_u1_luc_tuong_tac": [
        {
            "id": "clone_u1_ltt_v1",
            "conceptId": "c_u1_luc_tuong_tac",
            "image": "images/intermolecular_forces_r0.jpg",
            "type": "multiple_choice",
            "level": "Nhận biết",
            "question": "Nhận định nào sau đây là ĐÚNG về lực tương tác giữa các phân tử cấu tạo nên chất?",
            "options": [
                "Bao gồm cả lực hút và lực đẩy phân tử; độ lớn của chúng phụ thuộc vào khoảng cách giữa các phân tử cấu tạo nên chất.",
                "Chỉ xuất hiện lực hút khi vật ở thể rắn và chỉ xuất hiện lực đẩy khi các phân tử chuyển động hỗn loạn tự do ở thể khí.",
                "Chỉ gồm lực hút tĩnh điện giữa các electron ngoài cùng mà hoàn toàn không có lực đẩy tương tác giữa các hạt nhân.",
                "Luôn luôn là lực đẩy có độ lớn cố định không phụ thuộc vào khoảng cách hay nhiệt độ chuyển động của hệ vật chất."
            ],
            "correct": 0,
            "explanation": "Ghi nhớ cốt lõi: Giữa các phân tử luôn luôn tồn tại đồng thời cả lực hút và lực đẩy phân tử."
        },
        {
            "id": "clone_u1_ltt_v2",
            "conceptId": "c_u1_luc_tuong_tac",
            "image": "images/intermolecular_forces_r0.jpg",
            "type": "multiple_choice",
            "level": "Nhận biết",
            "question": "Hiện tượng hai giọt thủy ngân khi tiếp xúc sẽ tự động nhập lại thành một giọt lớn hơn chứng tỏ",
            "options": [
                "Bao gồm cả lực hút và lực đẩy phân tử; độ lớn của chúng phụ thuộc vào khoảng cách giữa các phân tử cấu tạo nên chất.",
                "Chỉ xuất hiện lực hút khi vật ở thể rắn và chỉ xuất hiện lực đẩy khi các phân tử chuyển động hỗn loạn tự do ở thể khí.",
                "Chỉ gồm lực hút tĩnh điện giữa các electron ngoài cùng mà hoàn toàn không có lực đẩy tương tác giữa các hạt nhân.",
                "Luôn luôn là lực đẩy có độ lớn cố định không phụ thuộc vào khoảng cách hay nhiệt độ chuyển động của hệ vật chất."
            ],
            "correct": 0,
            "explanation": "Ghi nhớ cốt lõi: Khi hai giọt thủy ngân chạm vào nhau, lực hút phân tử kéo các phân tử bề mặt lại gần nhau tạo thành một giọt chung có diện tích mặt ngoài nhỏ nhất."
        }
    ],
    "c_u1_luc_tuong_tac_khoang_cach": [
        {
            "id": "clone_u1_lttkc_v1",
            "conceptId": "c_u1_luc_tuong_tac_khoang_cach",
            "image": "images/intermolecular_forces_r0.jpg",
            "type": "multiple_choice",
            "level": "Thông hiểu",
            "question": "Khi ta kéo dãn một thanh kim loại hoặc một sợi dây cao su ($r > r_0$), lực tương tác giữa các phân tử có đặc điểm là",
            "options": [
                "Khi khoảng cách giữa các phân tử rất lớn thì lực đẩy chiếm ưu thế còn lực hút phân tử bị triệt tiêu hoàn toàn về mức bằng 0.",
                "Khi khoảng cách giữa các phân tử giảm đi thì lực hút tăng lên rất nhanh còn lực đẩy tương tác giữa các hạt nhân không thay đổi.",
                "Khi khoảng cách giữa các phân tử rất nhỏ thì lực đẩy chiếm ưu thế, còn khi khoảng cách đủ lớn thì lực hút phân tử chiếm ưu thế.",
                "Lực tương tác giữa các phân tử luôn là lực hút thuần túy và không bao giờ xuất hiện lực đẩy tĩnh điện trong cấu trúc chất rắn."
            ],
            "correct": 2,
            "explanation": "Ghi nhớ cốt lõi: Khi $r > r_0$ (khoảng cách lớn hơn khoảng cách cân bằng), lực hút giảm chậm hơn lực đẩy nên lực hút chiếm ưu thế, chống lại sự kéo dãn và kéo các phân tử trở về vị trí cân bằng."
        },
        {
            "id": "clone_u1_lttkc_v2",
            "conceptId": "c_u1_luc_tuong_tac_khoang_cach",
            "image": "images/intermolecular_forces_r0.jpg",
            "type": "multiple_choice",
            "level": "Thông hiểu",
            "question": "Tại sao việc nén một khối chất rắn hoặc một chai nước lỏng lại khó khăn hơn rất nhiều so với việc nén một quả bóng chứa đầy không khí?",
            "options": [
                "Khi khoảng cách giữa các phân tử rất lớn thì lực đẩy chiếm ưu thế còn lực hút phân tử bị triệt tiêu hoàn toàn về mức bằng 0.",
                "Khi khoảng cách giữa các phân tử giảm đi thì lực hút tăng lên rất nhanh còn lực đẩy tương tác giữa các hạt nhân không thay đổi.",
                "Khi khoảng cách giữa các phân tử rất nhỏ thì lực đẩy chiếm ưu thế, còn khi khoảng cách đủ lớn thì lực hút phân tử chiếm ưu thế.",
                "Lực tương tác giữa các phân tử luôn là lực hút thuần túy và không bao giờ xuất hiện lực đẩy tĩnh điện trong cấu trúc chất rắn."
            ],
            "correct": 2,
            "explanation": "Ghi nhớ cốt lõi: Ở chất rắn và lỏng, khoảng cách giữa các phân tử xấp xỉ khoảng cách cân bằng $r_0$. Khi nén, khoảng cách $r < r_0$ làm lực đẩy phân tử tăng rất nhanh và chiếm ưu thế, chống lại lực nén ngoài."
        }
    ],
    "c_u1_khoang_cach_phan_tu": [
        {
            "id": "clone_u1_kcpt_v1",
            "conceptId": "c_u1_khoang_cach_phan_tu",
            "image": "images/gas_molecular_distance.jpg",
            "type": "multiple_choice",
            "level": "Nhận biết",
            "question": "Sắp xếp theo thứ tự GIẢM DẦN về khoảng cách trung bình giữa các phân tử của cùng một chất ở các thể khác nhau:",
            "options": [
                "Lực tương tác giữa các phân tử chủ yếu là lực đẩy vì lực hút bị triệt tiêu hoàn toàn khi các phân tử rời xa nhau.",
                "Lực tương tác giữa các phân tử chủ yếu là lực hút vì lực đẩy giảm nhanh hơn lực hút khi khoảng cách tăng lên.",
                "Lực hút và lực đẩy phân tử luôn triệt tiêu lẫn nhau khiến tổng hợp lực tương tác giữa hai phân tử luôn bằng 0.",
                "Lực tương tác phân tử biến mất hoàn toàn và các phân tử lập tức chuyển động như các hạt tự do độc lập với nhau."
            ],
            "correct": 1,
            "explanation": "Ghi nhớ cốt lõi: Ở thể khí các phân tử ở rất xa nhau, ở thể lỏng các phân tử ở gần nhau, ở thể rắn các phân tử ở rất gần nhau. Thứ tự giảm dần: Khí > Lỏng > Rắn."
        },
        {
            "id": "clone_u1_kcpt_v2",
            "conceptId": "c_u1_khoang_cach_phan_tu",
            "image": "images/gas_molecular_distance.jpg",
            "type": "multiple_choice",
            "level": "Nhận biết",
            "question": "Lực tương tác giữa các phân tử ở thể khí rất yếu so với thể rắn là vì",
            "options": [
                "Lực tương tác giữa các phân tử chủ yếu là lực đẩy vì lực hút bị triệt tiêu hoàn toàn khi các phân tử rời xa nhau.",
                "Lực tương tác giữa các phân tử chủ yếu là lực hút vì lực đẩy giảm nhanh hơn lực hút khi khoảng cách tăng lên.",
                "Lực hút và lực đẩy phân tử luôn triệt tiêu lẫn nhau khiến tổng hợp lực tương tác giữa hai phân tử luôn bằng 0.",
                "Lực tương tác phân tử biến mất hoàn toàn và các phân tử lập tức chuyển động như các hạt tự do độc lập với nhau."
            ],
            "correct": 1,
            "explanation": "Ghi nhớ cốt lõi: Lực tương tác phân tử giảm rất nhanh theo khoảng cách. Ở thể khí, khoảng cách giữa các phân tử rất lớn nên lực tương tác phân tử rất yếu (coi như không đáng kể, trừ khi va chạm)."
        }
    ],
    "c_u1_dac_diem_the_chat": [
        {
            "id": "clone_u1_ddtc_v1",
            "conceptId": "c_u1_dac_diem_the_chat",
            "image": "images/three_states_matter.jpg",
            "type": "multiple_choice",
            "level": "Nhận biết",
            "question": "Chất lỏng có đặc điểm nào sau đây về thể tích và hình dạng?",
            "options": [
                "Thể rắn có thể tích và hình dạng xác định; thể lỏng có thể tích xác định nhưng hình dạng phụ thuộc bình chứa; thể khí không có hình dạng và thể tích riêng.",
                "Thể rắn có hình dạng xác định nhưng thể tích thay đổi; thể lỏng không có thể tích xác định; thể khí luôn có hình dạng và thể tích cố định không đổi.",
                "Thể rắn và thể lỏng đều không có thể tích xác định; chỉ có thể khí là có thể tích xác định nhờ lực tương tác giữa các phân tử khí rất mạnh mẽ.",
                "Cả ba thể rắn, lỏng, khí đều có hình dạng và thể tích xác định độc lập với bình chứa do khoảng cách giữa các phân tử luôn bằng nhau."
            ],
            "correct": 0,
            "explanation": "Ghi nhớ cốt lõi: Thể lỏng có thể tích xác định nhưng không có hình dạng riêng xác định mà nhận hình dạng của phần bình chứa."
        },
        {
            "id": "clone_u1_ddtc_v2",
            "conceptId": "c_u1_dac_diem_the_chat",
            "image": "images/three_states_matter.jpg",
            "type": "multiple_choice",
            "level": "Nhận biết",
            "question": "Khi mở nắp một lọ nước hoa ở góc phòng, một lúc sau cả phòng đều ngửi thấy mùi thơm. Điều này chứng tỏ chất khí",
            "options": [
                "Thể rắn có thể tích và hình dạng xác định; thể lỏng có thể tích xác định nhưng hình dạng phụ thuộc bình chứa; thể khí không có hình dạng và thể tích riêng.",
                "Thể rắn có hình dạng xác định nhưng thể tích thay đổi; thể lỏng không có thể tích xác định; thể khí luôn có hình dạng và thể tích cố định không đổi.",
                "Thể rắn và thể lỏng đều không có thể tích xác định; chỉ có thể khí là có thể tích xác định nhờ lực tương tác giữa các phân tử khí rất mạnh mẽ.",
                "Cả ba thể rắn, lỏng, khí đều có hình dạng và thể tích xác định độc lập với bình chứa do khoảng cách giữa các phân tử luôn bằng nhau."
            ],
            "correct": 0,
            "explanation": "Ghi nhớ cốt lõi: Các phân tử chất khí chuyển động hoàn toàn hỗn loạn và có khoảng cách rất lớn, chúng tự do khuếch tán và chiếm toàn bộ thể tích của bình chứa hoặc căn phòng."
        }
    ],
    "c_u1_chat_ran_tinh_the": [
        {
            "id": "clone_u1_crtt_v1",
            "conceptId": "c_u1_chat_ran_tinh_the",
            "image": "images/crystal_vs_amorphous.jpg",
            "type": "multiple_choice",
            "level": "Thông hiểu",
            "question": "Chất nào sau đây là chất rắn vô định hình?",
            "options": [
                "Chất rắn kết tinh không có nhiệt độ nóng chảy xác định mà mềm dần trong một khoảng nhiệt độ rất rộng khi bị đốt nóng liên tục.",
                "Chất rắn kết tinh có cấu trúc tinh thể trật tự tuần hoàn và có nhiệt độ nóng chảy hoàn toàn xác định ở một áp suất khí quyển cho trước.",
                "Chất rắn kết tinh luôn có tính đẳng hướng về mọi tính chất vật lý như độ dẫn điện, độ dẫn nhiệt và tốc độ truyền sóng âm thanh.",
                "Chất rắn kết tinh không có cấu trúc hạt trật tự mà các hạt phân tử liên kết ngẫu nhiên tương tự như cấu trúc vi mô của chất lỏng."
            ],
            "correct": 1,
            "explanation": "Ghi nhớ cốt lõi: Thủy tinh, nhựa đường, cao su, sáp là các chất rắn vô định hình (không có cấu trúc mạng tinh thể tuần hoàn và không có nhiệt độ nóng chảy xác định). Muối ăn, kim cương, thạch anh là chất rắn kết tinh."
        },
        {
            "id": "clone_u1_crtt_v2",
            "conceptId": "c_u1_chat_ran_tinh_the",
            "image": "images/crystal_vs_amorphous.jpg",
            "type": "multiple_choice",
            "level": "Thông hiểu",
            "question": "Khi đun nóng dần một thanh thủy tinh và một viên nước đá, hiện tượng nóng chảy diễn ra như thế nào?",
            "options": [
                "Chất rắn kết tinh không có nhiệt độ nóng chảy xác định mà mềm dần trong một khoảng nhiệt độ rất rộng khi bị đốt nóng liên tục.",
                "Chất rắn kết tinh có cấu trúc tinh thể trật tự tuần hoàn và có nhiệt độ nóng chảy hoàn toàn xác định ở một áp suất khí quyển cho trước.",
                "Chất rắn kết tinh luôn có tính đẳng hướng về mọi tính chất vật lý như độ dẫn điện, độ dẫn nhiệt và tốc độ truyền sóng âm thanh.",
                "Chất rắn kết tinh không có cấu trúc hạt trật tự mà các hạt phân tử liên kết ngẫu nhiên tương tự như cấu trúc vi mô của chất lỏng."
            ],
            "correct": 1,
            "explanation": "Ghi nhớ cốt lõi: Nước đá là chất rắn kết tinh nên có nhiệt độ nóng chảy xác định ($0^\\circ\\text{C}$). Thủy tinh là chất rắn vô định hình nên không có nhiệt độ nóng chảy xác định, nó mềm dần và độ nhớt giảm dần khi nhiệt độ tăng."
        }
    ],
    "c_u1_di_huong_dang_huong": [
        {
            "id": "clone_u1_dh_v1",
            "conceptId": "c_u1_di_huong_dang_huong",
            "image": "images/anisotropic_crystal.jpg",
            "type": "multiple_choice",
            "level": "Thông hiểu",
            "question": "Tại sao các vật làm bằng kim loại thông thường (như thanh sắt, lá đồng) lại có tính đẳng hướng dù kim loại có cấu trúc tinh thể?",
            "options": [
                "Chất rắn đơn tinh thể có tính dị hướng vì cấu trúc tinh thể của nó trật tự tuần hoàn theo các phương không gian khác nhau trong mạng lưới.",
                "Chất rắn đơn tinh thể có tính đẳng hướng vì các hạt nguyên tử chuyển động nhiệt hỗn loạn đồng đều theo mọi phương không gian trong vật thể.",
                "Chất rắn đa tinh thể có tính dị hướng mạnh mẽ do kích thước của các hạt tinh thể con bên trong cấu trúc quá nhỏ bé không đồng đều nhau.",
                "Tính dị hướng hay đẳng hướng của vật rắn chỉ phụ thuộc vào màu sắc bề mặt và khả năng phản xạ ánh sáng của vật mà không do cấu trúc."
            ],
            "correct": 0,
            "explanation": "Ghi nhớ cốt lõi: Kim loại thông thường là chất rắn đa tinh thể, gồm vô số tinh thể hạt vi mô định hướng hỗn loạn ngẫu nhiên, do đó triệt tiêu tính dị hướng của từng đơn tinh thể và biểu hiện tính đẳng hướng ở cấp độ vĩ mô."
        },
        {
            "id": "clone_u1_dh_v2",
            "conceptId": "c_u1_di_huong_dang_huong",
            "image": "images/anisotropic_crystal.jpg",
            "type": "multiple_choice",
            "level": "Thông hiểu",
            "question": "Đặc tính nào sau đây KHÔNG PHẢI là đặc tính của chất rắn vô định hình?",
            "options": [
                "Chất rắn đơn tinh thể có tính dị hướng vì cấu trúc tinh thể của nó trật tự tuần hoàn theo các phương không gian khác nhau trong mạng lưới.",
                "Chất rắn đơn tinh thể có tính đẳng hướng vì các hạt nguyên tử chuyển động nhiệt hỗn loạn đồng đều theo mọi phương không gian trong vật thể.",
                "Chất rắn đa tinh thể có tính dị hướng mạnh mẽ do kích thước của các hạt tinh thể con bên trong cấu trúc quá nhỏ bé không đồng đều nhau.",
                "Tính dị hướng hay đẳng hướng của vật rắn chỉ phụ thuộc vào màu sắc bề mặt và khả năng phản xạ ánh sáng của vật mà không do cấu trúc."
            ],
            "correct": 0,
            "explanation": "Ghi nhớ cốt lõi: Chất rắn vô định hình có tính đẳng hướng (chứ không phải dị hướng) vì các phân tử sắp xếp hỗn loạn, không có phương ưu tiên."
        }
    ],
    "c_u1_su_thang_hoa_ngung_ket": [
        {
            "id": "clone_u1_thnk_v1",
            "conceptId": "c_u1_su_thang_hoa_ngung_ket",
            "image": "images/phase_transition_diagram.jpg",
            "type": "multiple_choice",
            "level": "Nhận biết",
            "question": "Viên băng phiến (long não) để trong tủ quần áo sau một thời gian bị nhỏ dần rồi biến mất mà tủ không hề bị ướt. Hiện tượng này là ví dụ của",
            "options": [
                "Sự nóng chảy.",
                "Sự ngưng kết.",
                "Sự thăng hoa.",
                "Sự bay hơi của chất lỏng."
            ],
            "correct": 2,
            "explanation": "Ghi nhớ cốt lõi: Băng phiến chuyển thẳng từ thể rắn sang thể khí (hơi) mà không qua thể lỏng, đây là hiện tượng thăng hoa."
        },
        {
            "id": "clone_u1_thnk_v2",
            "conceptId": "c_u1_su_thang_hoa_ngung_ket",
            "image": "images/phase_transition_diagram.jpg",
            "type": "multiple_choice",
            "level": "Nhận biết",
            "question": "Vào những đêm mùa đông giá rét ở vùng núi cao, hơi nước trong không khí gặp lạnh đột ngột chuyển thẳng thành các tinh thể băng tuyết trắng bám trên cành cây (sương muối). Quá trình này được gọi là",
            "options": [
                "Sự đông đặc.",
                "Sự ngưng kết.",
                "Sự thăng hoa.",
                "Sự bay hơi."
            ],
            "correct": 1,
            "explanation": "Ghi nhớ cốt lõi: Quá trình chuyển trực tiếp từ thể khí sang thể rắn mà không qua thể lỏng được gọi là sự ngưng kết."
        }
    ],
    "c_u1_hien_tuong_tuyet_tan": [
        {
            "id": "clone_u1_htt_v1",
            "conceptId": "c_u1_hien_tuong_tuyet_tan",
            "image": "images/snow_melting_cold.jpg",
            "type": "multiple_choice",
            "level": "Thông hiểu",
            "question": "Để làm một ly nước cam nguội lạnh nhanh chóng, người ta thường cho vào ly vài viên nước đá thay vì cho một lượng nước lạnh ở $0^\\circ\\text{C}$ có cùng khối lượng. Lý do vật lý là vì",
            "options": [
                "Nước đá có khối lượng riêng nhẹ hơn nước thường nên diện tích tiếp xúc với chất lỏng tăng lên làm nước nguội đi nhanh chóng.",
                "Nước đá khi tan cần hấp thụ nhiệt nóng chảy rất lớn từ nước cam để phá vỡ mạng tinh thể, làm giảm nhiệt độ của ly nước cam hiệu quả.",
                "Nước đá ngăn cản nhiệt lượng từ không khí ấm bên ngoài truyền vào ly nước cam nhờ tạo thành một màng chắn cách nhiệt tự nhiên trên mặt.",
                "Nước đá tạo ra các dòng điện ly giải phóng năng lượng liên kết làm giảm động năng chuyển động của các phân tử đường trong ly nước cam."
            ],
            "correct": 1,
            "explanation": "Ghi nhớ cốt lõi: Quá trình nóng chảy của nước đá hấp thụ nhiệt lượng rất lớn từ nước cam xung quanh để phá vỡ mạng tinh thể, do đó làm ly nước cam lạnh nhanh hơn nhiều so với việc chỉ đổ nước $0^\\circ\\text{C}$."
        },
        {
            "id": "clone_u1_htt_v2",
            "conceptId": "c_u1_hien_tuong_tuyet_tan",
            "image": "images/snow_melting_cold.jpg",
            "type": "multiple_choice",
            "level": "Thông hiểu",
            "question": "Trong quá trình một khối nước đá đang tan thành nước lỏng ở $0^\\circ\\text{C}$ trong phòng thí nghiệm, nhiệt độ của khối nước đá",
            "options": [
                "Nước đá có khối lượng riêng nhẹ hơn nước thường nên diện tích tiếp xúc với chất lỏng tăng lên làm nước nguội đi nhanh chóng.",
                "Nước đá khi tan cần hấp thụ nhiệt nóng chảy rất lớn từ nước cam để phá vỡ mạng tinh thể, làm giảm nhiệt độ của ly nước cam hiệu quả.",
                "Nước đá ngăn cản nhiệt lượng từ không khí ấm bên ngoài truyền vào ly nước cam nhờ tạo thành một màng chắn cách nhiệt tự nhiên trên mặt.",
                "Nước đá tạo ra các dòng điện ly giải phóng năng lượng liên kết làm giảm động năng chuyển động của các phân tử đường trong ly nước cam."
            ],
            "correct": 1,
            "explanation": "Ghi nhớ cốt lõi: Trong suốt quá trình nóng chảy của chất kết tinh ở áp suất xác định, nhiệt độ của khối chất luôn giữ nguyên không đổi dù nhiệt lượng vẫn tiếp tục được cung cấp."
        }
    ],
    "c_u1_bay_hoi_va_cac_yeu_to": [
        {
            "id": "clone_u1_bhyt_v1",
            "conceptId": "c_u1_bay_hoi_va_cac_yeu_to",
            "image": "images/evaporation_factors.jpg",
            "type": "multiple_choice",
            "level": "Thông hiểu",
            "question": "Khi phơi quần áo ướt, biện pháp nào sau đây giúp quần áo mau khô nhất?",
            "options": [
                "Gấp quần áo lại cho gọn gàng và phơi trong phòng kín gió để tránh nhiệt lượng từ ánh sáng mặt trời làm hỏng sợi vải quần áo.",
                "Trải rộng quần áo (tăng diện tích mặt thoáng), phơi ở nơi có nắng ấm và nhiều gió lưu thông để tăng tối đa tốc độ bay hơi của nước.",
                "Cho quần áo vào túi nilon đậy kín dưới trời nắng gắt để giữ hơi nước bốc lên tạo áp suất cao làm khô vải từ bên trong sợi bông.",
                "Treo quần áo sát khít vào nhau trong phòng tắm ẩm ướt để giữ độ ẩm đồng đều và hạn chế sự bốc hơi quá nhanh làm nhăn bề mặt vải."
            ],
            "correct": 1,
            "explanation": "Ghi nhớ cốt lõi: Tốc độ bay hơi tăng khi diện tích mặt thoáng tăng, nhiệt độ tăng, tốc độ gió tăng và độ ẩm không khí giảm. Trải rộng quần áo nơi thoáng gió nắng ráo đáp ứng đầy đủ các yếu tố này."
        },
        {
            "id": "clone_u1_bhyt_v2",
            "conceptId": "c_u1_bay_hoi_va_cac_yeu_to",
            "image": "images/evaporation_factors.jpg",
            "type": "multiple_choice",
            "level": "Thông hiểu",
            "question": "Về mặt vi mô, sự bay hơi xảy ra là do",
            "options": [
                "Gấp quần áo lại cho gọn gàng và phơi trong phòng kín gió để tránh nhiệt lượng từ ánh sáng mặt trời làm hỏng sợi vải quần áo.",
                "Trải rộng quần áo (tăng diện tích mặt thoáng), phơi ở nơi có nắng ấm và nhiều gió lưu thông để tăng tối đa tốc độ bay hơi của nước.",
                "Cho quần áo vào túi nilon đậy kín dưới trời nắng gắt để giữ hơi nước bốc lên tạo áp suất cao làm khô vải từ bên trong sợi bông.",
                "Treo quần áo sát khít vào nhau trong phòng tắm ẩm ướt để giữ độ ẩm đồng đều và hạn chế sự bốc hơi quá nhanh làm nhăn bề mặt vải."
            ],
            "correct": 1,
            "explanation": "Ghi nhớ cốt lõi: Do chuyển động nhiệt hỗn loạn, một số phân tử ở lớp bề mặt có động năng lớn hơn mức trung bình, đủ để thắng được lực hút liên kết của các phân tử lân cận và thoát ra ngoài không gian phía trên mặt thoáng."
        }
    ],
    "c_u1_su_ngung_tu": [
        {
            "id": "clone_u1_snt_v1",
            "conceptId": "c_u1_su_ngung_tu",
            "image": "images/dew_condensation.jpg",
            "type": "multiple_choice",
            "level": "Nhận biết",
            "question": "Sự ngưng tụ là quá trình",
            "options": [
                "Nước từ rễ cây được đẩy mạnh lên lá rồi tự động thẩm thấu ngược qua biểu bì lá vào thời điểm sáng sớm mát mẻ.",
                "Hơi nước trong không khí gặp lạnh vào ban đêm ngưng tụ lại thành các giọt nước lỏng đọng trên bề mặt lá cây.",
                "Không khí bị ion hóa mạnh vào ban đêm làm các phân tử khí oxy và hydro tự phát liên kết tạo thành các hạt nước.",
                "Hiện tượng thăng hoa của băng tuyết ngầm trong đất bốc lên gặp sương sớm chuyển thành các giọt nước đọng trên lá."
            ],
            "correct": 1,
            "explanation": "Ghi nhớ cốt lõi: Sự ngưng tụ là quá trình chuyển từ thể khí (hơi) sang thể lỏng. Quá trình ngưng tụ luôn tỏa ra nhiệt lượng."
        },
        {
            "id": "clone_u1_snt_v2",
            "conceptId": "c_u1_su_ngung_tu",
            "image": "images/dew_condensation.jpg",
            "type": "multiple_choice",
            "level": "Thông hiểu",
            "question": "Tại sao khi đun nước sôi trong ấm, ta thấy có một luồng 'khói trắng' mù mịt xuất hiện ở cách đầu vòi ấm một khoảng ngắn?",
            "options": [
                "Nước từ rễ cây được đẩy mạnh lên lá rồi tự động thẩm thấu ngược qua biểu bì lá vào thời điểm sáng sớm mát mẻ.",
                "Hơi nước trong không khí gặp lạnh vào ban đêm ngưng tụ lại thành các giọt nước lỏng đọng trên bề mặt lá cây.",
                "Không khí bị ion hóa mạnh vào ban đêm làm các phân tử khí oxy và hydro tự phát liên kết tạo thành các hạt nước.",
                "Hiện tượng thăng hoa của băng tuyết ngầm trong đất bốc lên gặp sương sớm chuyển thành các giọt nước đọng trên lá."
            ],
            "correct": 1,
            "explanation": "Ghi nhớ cốt lõi: Hơi nước thực sự là chất khí không màu trong suốt (ngay sát vòi ấm ta không thấy gì). 'Khói trắng' nhìn thấy được thực chất là vô số hạt nước lỏng li ti được tạo thành do hơi nước nóng gặp không khí lạnh ngưng tụ lại."
        }
    ],
    "c_u1_noi_ap_suat": [
        {
            "id": "clone_u1_nas_v1",
            "conceptId": "c_u1_noi_ap_suat",
            "image": "images/pressure_cooker_boiling.jpg",
            "type": "multiple_choice",
            "level": "Thông hiểu",
            "question": "Trên đỉnh núi Everest cao hơn $8800\\text{ m}$, áp suất khí quyển chỉ bằng khoảng một phần ba áp suất ở mực nước biển. Tại đây, nước sẽ sôi ở nhiệt độ",
            "options": [
                "Khi đậy kín, áp suất khí và hơi trong nồi tăng cao làm nhiệt độ sôi của nước tăng lên vượt quá $100^\\circ\\text{C}$.",
                "Nắp nồi kín làm cản trở nhiệt lượng thoát ra ngoài giúp ngọn lửa bếp gas truyền vào nồi mạnh hơn bình thường.",
                "Áp suất nén cao ép chặt thức ăn làm giảm nhiệt dung riêng của thực phẩm giúp chúng hấp thụ nhiệt nhanh hơn.",
                "Hơi nước nén chặt trong nồi tạo ra các tia bức xạ hồng ngoại cường độ cao làm thức ăn chín đều từ bên trong."
            ],
            "correct": 0,
            "explanation": "Ghi nhớ cốt lõi: Nhiệt độ sôi của chất lỏng giảm khi áp suất trên mặt thoáng giảm. Trên núi cao áp suất thấp, nước sôi ở khoảng $70^\\circ\\text{C}$, nhiệt độ này không đủ cao để luộc chín thức ăn như ở đồng bằng."
        },
        {
            "id": "clone_u1_nas_v2",
            "conceptId": "c_u1_noi_ap_suat",
            "image": "images/pressure_cooker_boiling.jpg",
            "type": "multiple_choice",
            "level": "Thông hiểu",
            "question": "Điểm khác biệt cơ bản nhất giữa sự sôi và sự bay hơi là",
            "options": [
                "Khi đậy kín, áp suất khí và hơi trong nồi tăng cao làm nhiệt độ sôi của nước tăng lên vượt quá $100^\\circ\\text{C}$.",
                "Nắp nồi kín làm cản trở nhiệt lượng thoát ra ngoài giúp ngọn lửa bếp gas truyền vào nồi mạnh hơn bình thường.",
                "Áp suất nén cao ép chặt thức ăn làm giảm nhiệt dung riêng của thực phẩm giúp chúng hấp thụ nhiệt nhanh hơn.",
                "Hơi nước nén chặt trong nồi tạo ra các tia bức xạ hồng ngoại cường độ cao làm thức ăn chín đều từ bên trong."
            ],
            "correct": 0,
            "explanation": "Ghi nhớ cốt lõi: Sự bay hơi xảy ra chỉ ở mặt thoáng và ở bất kỳ nhiệt độ nào. Sự sôi là trường hợp bay hơi đặc biệt xảy ra cả ở mặt thoáng và trong lòng chất lỏng, tạo ra các bọt khí nổi lên và vỡ ra ở mặt thoáng, chỉ diễn ra ở nhiệt độ sôi xác định ứng với áp suất ngoài."
        }
    ],
    "c_u1_chuyen_the_nuoc": [
        {
            "id": "clone_u1_ctn_v1",
            "conceptId": "c_u1_chuyen_the_nuoc",
            "image": "images/three_states_matter.jpg",
            "type": "multi_tf",
            "level": "Thông hiểu",
            "context": "Xét một khối nước đá tinh khiết được làm nóng liên tục ở áp suất khí quyển tiêu chuẩn $1\\text{ atm}$. Xét tính đúng/sai của các phát biểu sau:",
            "statements": [
                {
                    "text": "Khi nhiệt độ khối đá tăng từ $-5^\\circ\\text{C}$ lên $0^\\circ\\text{C}$, động năng trung bình của các phân tử nước tăng lên.",
                    "isCorrect": true
                },
                {
                    "text": "Khi đá hấp thụ nhiệt lượng để nóng chảy ở $0^\\circ\\text{C}$, nội năng của khối chất tăng lên dù nhiệt độ không đổi.",
                    "isCorrect": true
                },
                {
                    "text": "Trong quá trình đá đang tan ở $0^\\circ\\text{C}$, thể tích của khối chất tăng lên do phân tử chuyển động mạnh hơn.",
                    "isCorrect": false
                },
                {
                    "text": "Sau khi tan hết thành nước lỏng ở $0^\\circ\\text{C}$, tiếp tục đun nóng thì nhiệt độ của nước sẽ tăng dần đến $100^\\circ\\text{C}$.",
                    "isCorrect": true
                }
            ],
            "explanation": "Ghi nhớ cốt lõi: Nước đá có tính chất dị thường: khi nóng chảy từ đá sang nước ở $0^\\circ\\text{C}$, thể tích của nó giảm (khối lượng riêng của nước $1\\text{ g/cm}^3$ lớn hơn của nước đá $0{,}92\\text{ g/cm}^3$), do đó phát biểu thể tích tăng là sai."
        },
        {
            "id": "clone_u1_ctn_v2",
            "conceptId": "c_u1_chuyen_the_nuoc",
            "image": "images/three_states_matter.jpg",
            "type": "multi_tf",
            "level": "Thông hiểu",
            "context": "Xét đồ thị nhiệt độ theo thời gian khi đun nóng một chất rắn kết tinh tinh khiết từ thể rắn đến khi sôi. Xét tính đúng/sai của các phát biểu sau:",
            "statements": [
                {
                    "text": "Các đoạn nằm ngang trên đồ thị ứng với các giai đoạn chuyển thể của chất rắn kết tinh.",
                    "isCorrect": true
                },
                {
                    "text": "Ở đoạn nằm ngang tương ứng với quá trình nóng chảy, khối chất tồn tại đồng thời cả thể rắn và thể lỏng.",
                    "isCorrect": true
                },
                {
                    "text": "Trong giai đoạn sôi, nhiệt lượng nhận được dùng để tăng thế năng tương tác giữa các phân tử khi hóa hơi.",
                    "isCorrect": true
                },
                {
                    "text": "Nếu là chất rắn vô định hình thì trên đồ thị nhiệt độ theo thời gian cũng sẽ có đoạn nằm ngang rõ rệt ở nhiệt độ nóng chảy.",
                    "isCorrect": false
                }
            ],
            "explanation": "Ghi nhớ cốt lõi: Chất rắn vô định hình không có nhiệt độ nóng chảy xác định, đồ thị nhiệt độ của nó tăng liên tục mà không hề có đoạn nằm ngang như chất rắn kết tinh."
        }
    ],
    "c_u1_bay_hoi_va_soi": [
        {
            "id": "clone_u1_bhvs_v1",
            "conceptId": "c_u1_bay_hoi_va_soi",
            "image": "images/three_states_matter.jpg",
            "type": "multi_tf",
            "level": "Thông hiểu",
            "context": "Xét các phát biểu so sánh về sự bay hơi và sự sôi của chất lỏng. Xét tính đúng/sai của các phát biểu sau:",
            "statements": [
                {
                    "text": "Cả sự bay hơi và sự sôi đều là các quá trình chuyển thể từ thể lỏng sang thể khí.",
                    "isCorrect": true
                },
                {
                    "text": "Sự bay hơi xảy ra ở mọi nhiệt độ, còn sự sôi chỉ xảy ra ở nhiệt độ sôi xác định.",
                    "isCorrect": true
                },
                {
                    "text": "Trong quá trình sôi, các bọt khí chỉ hình thành trên bề mặt chất lỏng mà không xuất hiện ở đáy bình.",
                    "isCorrect": false
                },
                {
                    "text": "Khi cồn hoặc nước bay hơi trên da, ta cảm thấy mát lạnh vì quá trình bay hơi thu nhiệt lượng từ da.",
                    "isCorrect": true
                }
            ],
            "explanation": "Ghi nhớ cốt lõi: Trong quá trình sôi, bọt khí hình thành chủ yếu từ đáy bình (nơi tiếp xúc với nguồn nhiệt) và lớn dần khi nổi lên mặt thoáng rồi vỡ ra."
        },
        {
            "id": "clone_u1_bhvs_v2",
            "conceptId": "c_u1_bay_hoi_va_soi",
            "image": "images/three_states_matter.jpg",
            "type": "multi_tf",
            "level": "Thông hiểu",
            "context": "Một học sinh đun một ấm nước đầy trên bếp gas. Xét tính đúng/sai của các nhận định vật lý sau:",
            "statements": [
                {
                    "text": "Trước khi nước sôi, sự bay hơi đã diễn ra liên tục ở mặt thoáng của nước trong ấm.",
                    "isCorrect": true
                },
                {
                    "text": "Khi nước bắt đầu sôi ở $100^\\circ\\text{C}$, nếu tăng công suất bếp gas lên gấp đôi thì nhiệt độ nước trong ấm sẽ tăng lên $105^\\circ\\text{C}$.",
                    "isCorrect": false
                },
                {
                    "text": "Nhiệt lượng bếp gas cung cấp khi nước đang sôi dùng để chuyển các phân tử nước từ thể lỏng sang thể hơi.",
                    "isCorrect": true
                },
                {
                    "text": "Nếu đậy nắp thật kín và van xả hơi bị kẹt, áp suất hơi trong ấm tăng lên sẽ làm tăng nhiệt độ sôi của nước.",
                    "isCorrect": true
                }
            ],
            "explanation": "Ghi nhớ cốt lõi: Khi nước sôi ở áp suất khí quyển mở, nhiệt độ giữ không đổi ở $100^\\circ\\text{C}$ dù có tăng công suất bếp gas; nhiệt lượng cung cấp thêm chỉ làm nước hóa hơi nhanh hơn."
        }
    ],
    "c_u2_dinh_nghia_noi_nang": [
        {
            "id": "clone_u2_dgnn_v1",
            "conceptId": "c_u2_dinh_nghia_noi_nang",
            "image": "images/internal_energy_real_ideal.jpg",
            "type": "multiple_choice",
            "level": "Nhận biết",
            "question": "Khi một vật đang rơi tự do từ trên cao xuống mà chưa chạm đất (bỏ qua ma sát không khí), nội năng của vật",
            "options": [
                "Tổng động năng chuyển động nhiệt hỗn loạn của các phân tử và thế năng tương tác giữa các phân tử cấu tạo nên vật.",
                "Tổng động năng chuyển động cơ học của toàn bộ vật thể và thế năng hấp dẫn của vật so với mốc thế năng mặt đất.",
                "Nhiệt lượng mà vật hấp thụ được từ môi trường ngoài trong suốt quá trình đun nóng hoặc ma sát với các vật khác.",
                "Năng lượng liên kết hạt nhân nguyên tử của tất cả các nguyên tố hóa học cấu thành nên vật chất của vật thể đó."
            ],
            "correct": 0,
            "explanation": "Ghi nhớ cốt lõi: Cơ năng của vật và nội năng của vật là hai dạng năng lượng hoàn toàn khác nhau. Khi rơi tự do không ma sát, thế năng cơ học chuyển thành động năng cơ học, còn chuyển động nhiệt vi mô và khoảng cách phân tử bên trong vật không đổi nên nội năng không đổi."
        },
        {
            "id": "clone_u2_dgnn_v2",
            "conceptId": "c_u2_dinh_nghia_noi_nang",
            "image": "images/internal_energy_real_ideal.jpg",
            "type": "multiple_choice",
            "level": "Nhận biết",
            "question": "Đơn vị đo nội năng và độ biến thiên nội năng trong hệ SI là",
            "options": [
                "Tổng động năng chuyển động nhiệt hỗn loạn của các phân tử và thế năng tương tác giữa các phân tử cấu tạo nên vật.",
                "Tổng động năng chuyển động cơ học của toàn bộ vật thể và thế năng hấp dẫn của vật so với mốc thế năng mặt đất.",
                "Nhiệt lượng mà vật hấp thụ được từ môi trường ngoài trong suốt quá trình đun nóng hoặc ma sát với các vật khác.",
                "Năng lượng liên kết hạt nhân nguyên tử của tất cả các nguyên tố hóa học cấu thành nên vật chất của vật thể đó."
            ],
            "correct": 0,
            "explanation": "Ghi nhớ cốt lõi: Nội năng, công và nhiệt lượng đều là các đại lượng đo năng lượng nên có chung đơn vị đo trong hệ SI là Jun (J)."
        }
    ],
    "c_u2_phu_thuoc_noi_nang": [
        {
            "id": "clone_u2_ptnn_v1",
            "conceptId": "c_u2_phu_thuoc_noi_nang",
            "image": "images/internal_energy_real_ideal.jpg",
            "type": "multiple_choice",
            "level": "Thông hiểu",
            "question": "Khi nung nóng một thanh đồng trong lò nhưng không làm thanh đồng nóng chảy (thể tích dãn nở không đáng kể), nội năng của thanh đồng tăng chủ yếu là do",
            "options": [
                "Thế năng tương tác giữa các phân tử đồng tăng mạnh do khoảng cách giữa các nguyên tử tăng lên đáng kể khi bị đốt nóng liên tục.",
                "Động năng chuyển động nhiệt hỗn loạn của các nguyên tử đồng quanh vị trí cân bằng tăng lên do nhiệt độ của thanh đồng tăng cao.",
                "Số lượng nguyên tử đồng bên trong thanh tăng thêm do vật thể hấp thụ thêm vật chất từ ngọn lửa của lò nung truyền vào thanh.",
                "Khối lượng của thanh đồng tăng lên đáng kể do năng lượng nhiệt chuyển hóa thành khối lượng nghỉ theo thuyết tương đối của Einstein."
            ],
            "correct": 1,
            "explanation": "Ghi nhớ cốt lõi: Khi nhiệt độ tăng, động năng dao động nhiệt của các nguyên tử xung quanh nút mạng tinh thể tăng lên, làm tăng nội năng của vật."
        },
        {
            "id": "clone_u2_ptnn_v2",
            "conceptId": "c_u2_phu_thuoc_noi_nang",
            "image": "images/internal_energy_real_ideal.jpg",
            "type": "multiple_choice",
            "level": "Thông hiểu",
            "question": "Khi nén một khối khí thực đẳng nhiệt (nhiệt độ $T = \\text{const}$), nội năng của khối khí biến đổi như thế nào?",
            "options": [
                "Thế năng tương tác giữa các phân tử đồng tăng mạnh do khoảng cách giữa các nguyên tử tăng lên đáng kể khi bị đốt nóng liên tục.",
                "Động năng chuyển động nhiệt hỗn loạn của các nguyên tử đồng quanh vị trí cân bằng tăng lên do nhiệt độ của thanh đồng tăng cao.",
                "Số lượng nguyên tử đồng bên trong thanh tăng thêm do vật thể hấp thụ thêm vật chất từ ngọn lửa của lò nung truyền vào thanh.",
                "Khối lượng của thanh đồng tăng lên đáng kể do năng lượng nhiệt chuyển hóa thành khối lượng nghỉ theo thuyết tương đối của Einstein."
            ],
            "correct": 1,
            "explanation": "Ghi nhớ cốt lõi: Với khí thực, nội năng phụ thuộc cả vào nhiệt độ và thể tích ($U = f(T, V)$). Dù nhiệt độ không đổi nhưng thể tích giảm làm thế năng tương tác giữa các phân tử thay đổi, dẫn đến nội năng biến đổi."
        }
    ],
    "c_u2_khi_ly_tuong_noi_nang": [
        {
            "id": "clone_u2_kltnn_v1",
            "conceptId": "c_u2_khi_ly_tuong_noi_nang",
            "image": "images/internal_energy_real_ideal.jpg",
            "type": "multiple_choice",
            "level": "Thông hiểu",
            "question": "Nếu nén một lượng khí lý tưởng sao cho nhiệt độ của nó được giữ không đổi ($T = \\text{const}$), thì độ biến thiên nội năng $\\Delta U$ của khối khí bằng",
            "options": [
                "Các phân tử khí lý tưởng được coi là chất điểm không có khối lượng nên động năng chuyển động nhiệt của chúng luôn luôn bằng 0.",
                "Mô hình khí lý tưởng bỏ qua lực tương tác giữa các phân tử khi không va chạm, do đó thế năng tương tác phân tử bằng 0, nội năng chỉ là tổng động năng.",
                "Thể tích riêng của các phân tử khí lý tưởng luôn bằng 0 nên áp suất khối khí không thể sinh công trong các quá trình biến đổi trạng thái.",
                "Nhiệt độ của khối khí lý tưởng luôn được giữ cố định ở $0\\text{ K}$ trong mọi quá trình nhiệt động học theo định nghĩa của chất khí."
            ],
            "correct": 1,
            "explanation": "Ghi nhớ cốt lõi: Đối với khí lý tưởng, nội năng CHỈ phụ thuộc vào nhiệt độ ($U = f(T)$). Vì nhiệt độ không đổi nên nội năng không đổi, tức là $\\Delta U = 0$."
        },
        {
            "id": "clone_u2_kltnn_v2",
            "conceptId": "c_u2_khi_ly_tuong_noi_nang",
            "image": "images/internal_energy_real_ideal.jpg",
            "type": "multiple_choice",
            "level": "Thông hiểu",
            "question": "Lý do vật lý khiến nội năng của khí lý tưởng không phụ thuộc vào thể tích là vì",
            "options": [
                "Các phân tử khí lý tưởng được coi là chất điểm không có khối lượng nên động năng chuyển động nhiệt của chúng luôn luôn bằng 0.",
                "Mô hình khí lý tưởng bỏ qua lực tương tác giữa các phân tử khi không va chạm, do đó thế năng tương tác phân tử bằng 0, nội năng chỉ là tổng động năng.",
                "Thể tích riêng của các phân tử khí lý tưởng luôn bằng 0 nên áp suất khối khí không thể sinh công trong các quá trình biến đổi trạng thái.",
                "Nhiệt độ của khối khí lý tưởng luôn được giữ cố định ở $0\\text{ K}$ trong mọi quá trình nhiệt động học theo định nghĩa của chất khí."
            ],
            "correct": 1,
            "explanation": "Ghi nhớ cốt lõi: Thế năng tương tác giữa các phân tử bằng 0 vì bỏ qua tương tác từ xa, nên nội năng chỉ là tổng động năng của các phân tử, do đó chỉ phụ thuộc vào nhiệt độ."
        }
    ],
    "c_u2_cac_cach_doi_noi_nang": [
        {
            "id": "clone_u2_ccdn_v1",
            "conceptId": "c_u2_cac_cach_doi_noi_nang",
            "image": "images/change_internal_energy.jpg",
            "type": "multiple_choice",
            "level": "Nhận biết",
            "question": "Hành động nào sau đây làm tăng nội năng của vật bằng cách THỰC HIỆN CÔNG?",
            "options": [
                "Thả miếng kim loại đang nguội vào một cốc nước sôi để nhiệt lượng truyền tự phát từ nước sôi sang miếng kim loại làm nó nóng lên.",
                "Dùng búa đập liên tục nhiều lần vào một thanh sắt đặt trên đe làm thanh sắt biến dạng cơ học và nóng lên rõ rệt sau một lúc.",
                "Phơi một miếng tôn kim loại ngoài trời nắng gắt trong nhiều giờ liền để hấp thụ năng lượng bức xạ nhiệt từ Mặt Trời chiếu vào.",
                "Áp miếng kim loại đang nóng vào một khối nước đá để nhiệt lượng từ miếng kim loại truyền sang khối nước đá làm nó tan chảy."
            ],
            "correct": 1,
            "explanation": "Ghi nhớ cốt lõi: Dùng búa đập là tác dụng lực cơ học làm biến dạng thanh sắt (thực hiện công), cơ năng của búa đã chuyển hóa thành nội năng làm nóng thanh sắt."
        },
        {
            "id": "clone_u2_ccdn_v2",
            "conceptId": "c_u2_cac_cach_doi_noi_nang",
            "image": "images/change_internal_energy.jpg",
            "type": "multiple_choice",
            "level": "Nhận biết",
            "question": "Hành động nào sau đây làm tăng nội năng của vật bằng cách TRUYỀN NHIỆT?",
            "options": [
                "Thả miếng kim loại đang nguội vào một cốc nước sôi để nhiệt lượng truyền tự phát từ nước sôi sang miếng kim loại làm nó nóng lên.",
                "Dùng búa đập liên tục nhiều lần vào một thanh sắt đặt trên đe làm thanh sắt biến dạng cơ học và nóng lên rõ rệt sau một lúc.",
                "Phơi một miếng tôn kim loại ngoài trời nắng gắt trong nhiều giờ liền để hấp thụ năng lượng bức xạ nhiệt từ Mặt Trời chiếu vào.",
                "Áp miếng kim loại đang nóng vào một khối nước đá để nhiệt lượng từ miếng kim loại truyền sang khối nước đá làm nó tan chảy."
            ],
            "correct": 1,
            "explanation": "Ghi nhớ cốt lõi: Thả thìa vào nước nóng không có ngoại lực di chuyển cơ học, nội năng truyền tự phát từ nước nóng sang chiếc thìa nhôm qua tiếp xúc nhiệt (quá trình truyền nhiệt)."
        }
    ],
    "c_u2_ban_chat_nhiet_luong": [
        {
            "id": "clone_u2_bcnl_v1",
            "conceptId": "c_u2_ban_chat_nhiet_luong",
            "image": "images/change_internal_energy.jpg",
            "type": "multiple_choice",
            "level": "Thông hiểu",
            "question": "Trong câu nói thông thường 'Hôm nay trời nóng quá, người tôi tích nhiều nhiệt lượng', cách dùng từ 'nhiệt lượng' dưới góc nhìn vật lý chính xác là",
            "options": [
                "Nhiệt lượng là một dạng năng lượng dự trữ sẵn bên trong vật thể tương tự như nội năng hoặc thế năng hấp dẫn của vật.",
                "Nhiệt lượng không phải là dạng năng lượng chứa trong vật, mà là số đo phần nội năng được truyền đi trong quá trình truyền nhiệt.",
                "Nhiệt lượng là đại lượng đặc trưng cho mức độ nóng lạnh của một vật thể và có giá trị tỷ lệ thuận với nhiệt độ Kelvin của vật.",
                "Nhiệt lượng là phần cơ năng chuyển hóa thành năng lượng nhiệt khi hai vật thể chuyển động va chạm trực tiếp với nhau."
            ],
            "correct": 1,
            "explanation": "Ghi nhớ cốt lõi: Nhiệt lượng không phải là dạng năng lượng tích trữ trong vật. Vật tích trữ nội năng; nhiệt lượng là phần nội năng được truyền qua biên giới hệ khi có chênh lệch nhiệt độ."
        },
        {
            "id": "clone_u2_bcnl_v2",
            "conceptId": "c_u2_ban_chat_nhiet_luong",
            "image": "images/change_internal_energy.jpg",
            "type": "multiple_choice",
            "level": "Thông hiểu",
            "question": "Khi hai vật tiếp xúc nhiệt đạt đến trạng thái cân bằng nhiệt, nhiệt lượng trao đổi giữa chúng bằng",
            "options": [
                "Nhiệt lượng là một dạng năng lượng dự trữ sẵn bên trong vật thể tương tự như nội năng hoặc thế năng hấp dẫn của vật.",
                "Nhiệt lượng không phải là dạng năng lượng chứa trong vật, mà là số đo phần nội năng được truyền đi trong quá trình truyền nhiệt.",
                "Nhiệt lượng là đại lượng đặc trưng cho mức độ nóng lạnh của một vật thể và có giá trị tỷ lệ thuận với nhiệt độ Kelvin của vật.",
                "Nhiệt lượng là phần cơ năng chuyển hóa thành năng lượng nhiệt khi hai vật thể chuyển động va chạm trực tiếp với nhau."
            ],
            "correct": 1,
            "explanation": "Ghi nhớ cốt lõi: Ở trạng thái cân bằng nhiệt, hai vật có nhiệt độ bằng nhau nên không còn quá trình truyền nhiệt lượng ($Q = 0$)."
        }
    ],
    "c_u2_bieu_thuc_dl1": [
        {
            "id": "clone_u2_btdl1_v1",
            "conceptId": "c_u2_bieu_thuc_dl1",
            "image": "images/dl1_thermodynamics_piston.jpg",
            "type": "multiple_choice",
            "level": "Nhận biết",
            "question": "Định luật I của nhiệt động lực học thực chất là",
            "options": [
                "Sự vận dụng định luật bảo toàn và chuyển hóa năng lượng vào các hiện tượng biến đổi trạng thái nhiệt của các hệ nhiệt động lực học.",
                "Định luật về sự nở vì nhiệt của các vật rắn và chất lỏng khi nhiệt độ của môi trường xung quanh thay đổi theo thời gian thực nghiệm.",
                "Định luật xác định vận tốc chuyển động tịnh tiến trung bình của các phân tử chất khí theo căn bậc hai của nhiệt độ tuyệt đối Kelvin.",
                "Định luật về sự bảo toàn điện tích và dòng điện dẫn trong các vật dẫn kim loại khi có sự chênh lệch nhiệt độ giữa hai đầu tiếp giáp."
            ],
            "correct": 0,
            "explanation": "Ghi nhớ cốt lõi: Định luật I nhiệt động lực học thực chất là định luật bảo toàn và chuyển hóa năng lượng được áp dụng cho các quá trình nhiệt."
        },
        {
            "id": "clone_u2_btdl1_v2",
            "conceptId": "c_u2_bieu_thuc_dl1",
            "image": "images/dl1_thermodynamics_piston.jpg",
            "type": "multiple_choice",
            "level": "Nhận biết",
            "question": "Trong hệ thức $\\Delta U = A + Q$, nếu $\\Delta U > 0$ thì có nghĩa là",
            "options": [
                "Sự vận dụng định luật bảo toàn và chuyển hóa năng lượng vào các hiện tượng biến đổi trạng thái nhiệt của các hệ nhiệt động lực học.",
                "Định luật về sự nở vì nhiệt của các vật rắn và chất lỏng khi nhiệt độ của môi trường xung quanh thay đổi theo thời gian thực nghiệm.",
                "Định luật xác định vận tốc chuyển động tịnh tiến trung bình của các phân tử chất khí theo căn bậc hai của nhiệt độ tuyệt đối Kelvin.",
                "Định luật về sự bảo toàn điện tích và dòng điện dẫn trong các vật dẫn kim loại khi có sự chênh lệch nhiệt độ giữa hai đầu tiếp giáp."
            ],
            "correct": 0,
            "explanation": "Ghi nhớ cốt lõi: $\\Delta U = U_2 - U_1 > 0$ nghĩa là nội năng trạng thái sau lớn hơn trạng thái trước (nội năng của hệ tăng lên)."
        }
    ],
    "c_u2_quy_uoc_dau_q": [
        {
            "id": "clone_u2_qudq_v1",
            "conceptId": "c_u2_quy_uoc_dau_q",
            "image": "images/dl1_thermodynamics_piston.jpg",
            "type": "multiple_choice",
            "level": "Nhận biết",
            "question": "Một ấm nước đang nguội dần từ $90^\\circ\\text{C}$ xuống $30^\\circ\\text{C}$. Đối với khối nước trong ấm, nhiệt lượng $Q$ có dấu",
            "options": [
                "$Q > 0$ vì khối băng tuyết nhận nhiệt lượng từ môi trường không khí xung quanh để phá vỡ mạng tinh thể chất rắn chuyển thành thể lỏng.",
                "$Q < 0$ vì khối băng tuyết làm cho môi trường không khí xung quanh bị lạnh đi rõ rệt trong suốt quá trình băng tan thành nước lỏng.",
                "$Q = 0$ vì trong suốt quá trình tan chảy thì nhiệt độ của khối băng tuyết luôn giữ cố định không đổi ở mốc nhiệt độ $0^\\circ\\text{C}$.",
                "$Q$ luôn có độ lớn bằng đúng công cơ học $A$ do áp suất khí quyển nén lên bề mặt của khối băng tuyết theo nguyên lý cân bằng năng lượng."
            ],
            "correct": 0,
            "explanation": "Ghi nhớ cốt lõi: Nước nguội đi do tỏa nhiệt lượng ra không khí xung quanh, theo quy ước dấu thì nhiệt lượng mà hệ tỏa ra có giá trị $Q < 0$."
        },
        {
            "id": "clone_u2_qudq_v2",
            "conceptId": "c_u2_quy_uoc_dau_q",
            "image": "images/dl1_thermodynamics_piston.jpg",
            "type": "multiple_choice",
            "level": "Nhận biết",
            "question": "Khi một khối băng tuyết đang tan chảy ở $0^\\circ\\text{C}$ trong không khí ấm, đối với khối băng tuyết thì",
            "options": [
                "$Q > 0$ vì khối băng tuyết nhận nhiệt lượng từ môi trường không khí xung quanh để phá vỡ mạng tinh thể chất rắn chuyển thành thể lỏng.",
                "$Q < 0$ vì khối băng tuyết làm cho môi trường không khí xung quanh bị lạnh đi rõ rệt trong suốt quá trình băng tan thành nước lỏng.",
                "$Q = 0$ vì trong suốt quá trình tan chảy thì nhiệt độ của khối băng tuyết luôn giữ cố định không đổi ở mốc nhiệt độ $0^\\circ\\text{C}$.",
                "$Q$ luôn có độ lớn bằng đúng công cơ học $A$ do áp suất khí quyển nén lên bề mặt của khối băng tuyết theo nguyên lý cân bằng năng lượng."
            ],
            "correct": 0,
            "explanation": "Ghi nhớ cốt lõi: Băng tuyết nhận nhiệt lượng từ môi trường để nóng chảy nên đối với khối băng tuyết thì $Q > 0$."
        }
    ],
    "c_u2_quy_uoc_dau_a": [
        {
            "id": "clone_u2_quda_v1",
            "conceptId": "c_u2_quy_uoc_dau_a",
            "image": "images/dl1_thermodynamics_piston.jpg",
            "type": "multiple_choice",
            "level": "Nhận biết",
            "question": "Khi nén pít-tông làm giảm thể tích của khối khí chứa trong xi lanh (thể tích giảm, $\\Delta V < 0$), theo quy ước dấu của Định luật I thì công $A$ mà khối khí nhận được có giá trị",
            "options": [
                "$A > 0$ vì khối khí có áp suất rất lớn đẩy pít-tông chuyển động tịnh tiến với gia tốc lớn làm tăng động năng của toàn bộ hệ cơ học.",
                "$A < 0$ vì khối khí thực hiện công cơ học lên pít-tông (sinh công ra môi trường bên ngoài làm quay trục khuỷu của động cơ nhiệt).",
                "$A = 0$ vì pít-tông chuyển động quá nhanh khiến lực ma sát cơ học triệt tiêu hoàn toàn công dãn nở của khối khí đốt trong xi lanh.",
                "Công $A$ không thể xác định được dấu vì thể tích khối khí vừa tăng vừa giảm liên tục theo chu kỳ hoạt động bốn kỳ của động cơ."
            ],
            "correct": 1,
            "explanation": "Ghi nhớ cốt lõi: Ngoại lực tác dụng thực hiện công lên khối khí (khí bị nén) thì công mà khối khí nhận được có giá trị $A > 0$."
        },
        {
            "id": "clone_u2_quda_v2",
            "conceptId": "c_u2_quy_uoc_dau_a",
            "image": "images/dl1_thermodynamics_piston.jpg",
            "type": "multiple_choice",
            "level": "Nhận biết",
            "question": "Trong động cơ đốt trong, khi hỗn hợp khí cháy nổ dãn nở đẩy pít-tông chuyển động sinh công làm quay trục khuỷu, đối với khối khí thì",
            "options": [
                "$A > 0$ vì khối khí có áp suất rất lớn đẩy pít-tông chuyển động tịnh tiến với gia tốc lớn làm tăng động năng của toàn bộ hệ cơ học.",
                "$A < 0$ vì khối khí thực hiện công cơ học lên pít-tông (sinh công ra môi trường bên ngoài làm quay trục khuỷu của động cơ nhiệt).",
                "$A = 0$ vì pít-tông chuyển động quá nhanh khiến lực ma sát cơ học triệt tiêu hoàn toàn công dãn nở của khối khí đốt trong xi lanh.",
                "Công $A$ không thể xác định được dấu vì thể tích khối khí vừa tăng vừa giảm liên tục theo chu kỳ hoạt động bốn kỳ của động cơ."
            ],
            "correct": 1,
            "explanation": "Ghi nhớ cốt lõi: Khối khí dãn nở đẩy pít-tông là khí sinh công ra bên ngoài, theo quy ước dấu công $A$ mà hệ nhận có giá trị $A < 0$."
        }
    ],
    "c_u2_tinh_delta_u_1": [
        {
            "id": "clone_u2_tdu1_v1",
            "conceptId": "c_u2_tinh_delta_u_1",
            "image": "images/dl1_thermodynamics_piston.jpg",
            "type": "multiple_choice",
            "level": "Thông hiểu",
            "question": "Một khối khí nhận nhiệt lượng $Q = 200\\text{ J}$ và nhận một công nén $A = 150\\text{ J}$. Nội năng của khối khí biến thiên một lượng là",
            "options": [
                "$\\Delta U = 50\\text{ J}$",
                "$\\Delta U = 350\\text{ J}$",
                "$\\Delta U = -50\\text{ J}$",
                "$\\Delta U = -350\\text{ J}$"
            ],
            "correct": 1,
            "explanation": "Ghi nhớ cốt lõi: $\\Delta U = A + Q = 150 + 200 = 350\\text{ J}$ (nội năng tăng $350\\text{ J}$)."
        },
        {
            "id": "clone_u2_tdu1_v2",
            "conceptId": "c_u2_tinh_delta_u_1",
            "image": "images/dl1_thermodynamics_piston.jpg",
            "type": "multiple_choice",
            "level": "Thông hiểu",
            "question": "Khi nén một khối khí, người ta thực hiện lên khối khí công $A = 90\\text{ J}$. Trong quá trình đó, khối khí tỏa ra môi trường nhiệt lượng $Q' = 40\\text{ J}$. Độ biến thiên nội năng của khối khí là",
            "options": [
                "$\\Delta U = 130\\text{ J}$",
                "$\\Delta U = 50\\text{ J}$",
                "$\\Delta U = -50\\text{ J}$",
                "$\\Delta U = -130\\text{ J}$"
            ],
            "correct": 1,
            "explanation": "Ghi nhớ cốt lõi: Khí nhận công: $A = +90\\text{ J}$. Khí tỏa nhiệt lượng $40\\text{ J}$ nên $Q = -40\\text{ J}$. Theo ĐL I: $\\Delta U = A + Q = 90 + (-40) = 50\\text{ J}$."
        }
    ],
    "c_u2_tinh_delta_u_2": [
        {
            "id": "clone_u2_tdu2_v1",
            "conceptId": "c_u2_tinh_delta_u_2",
            "image": "images/dl1_thermodynamics_piston.jpg",
            "type": "multiple_choice",
            "level": "Thông hiểu",
            "question": "Cung cấp cho khối khí trong xi lanh một nhiệt lượng $Q = 500\\text{ J}$. Khí dãn nở và thực hiện một công $300\\text{ J}$ lên pít-tông. Độ biến thiên nội năng của khối khí là",
            "options": [
                "$\\Delta U = 800\\text{ J}$",
                "$\\Delta U = 200\\text{ J}$",
                "$\\Delta U = -200\\text{ J}$",
                "$\\Delta U = -800\\text{ J}$"
            ],
            "correct": 1,
            "explanation": "Ghi nhớ cốt lõi: Khí nhận nhiệt: $Q = +500\\text{ J}$. Khí thực hiện công $300\\text{ J}$ (sinh công) nên $A = -300\\text{ J}$. $\\Delta U = A + Q = -300 + 500 = 200\\text{ J}$."
        },
        {
            "id": "clone_u2_tdu2_v2",
            "conceptId": "c_u2_tinh_delta_u_2",
            "image": "images/dl1_thermodynamics_piston.jpg",
            "type": "multiple_choice",
            "level": "Thông hiểu",
            "question": "Một khối khí thực hiện công $A' = 250\\text{ J}$ và đồng thời truyền ra ngoài một nhiệt lượng $Q' = 100\\text{ J}$. Độ biến thiên nội năng của khối khí là",
            "options": [
                "$\\Delta U = 350\\text{ J}$",
                "$\\Delta U = 150\\text{ J}$",
                "$\\Delta U = -150\\text{ J}$",
                "$\\Delta U = -350\\text{ J}$"
            ],
            "correct": 3,
            "explanation": "Ghi nhớ cốt lõi: Khí sinh công nên $A = -250\\text{ J}$; khí truyền nhiệt ra ngoài nên $Q = -100\\text{ J}$. $\\Delta U = A + Q = -250 + (-100) = -350\\text{ J}$ (nội năng giảm $350\\text{ J}$)."
        }
    ],
    "c_u2_cong_dan_dang_ap": [
        {
            "id": "clone_u2_cdda_v1",
            "conceptId": "c_u2_cong_dan_dang_ap",
            "image": "images/isobaric_work_pv.jpg",
            "type": "multiple_choice",
            "level": "Thông hiểu",
            "question": "Một khối khí dãn nở đẳng áp dưới áp suất $p = 10^5\\text{ Pa}$, thể tích của khối khí tăng thêm $\\Delta V = 0{,}02\\text{ m}^3$. Công do khối khí sinh ra là",
            "options": [
                "$A' = 500\\text{ J}$",
                "$A' = 2000\\text{ J}$",
                "$A' = 5000\\text{ J}$",
                "$A' = 20000\\text{ J}$"
            ],
            "correct": 1,
            "explanation": "Ghi nhớ cốt lõi: $A' = p \\cdot \\Delta V = 10^5 \\cdot 0{,}02 = 2000\\text{ J}$."
        },
        {
            "id": "clone_u2_cdda_v2",
            "conceptId": "c_u2_cong_dan_dang_ap",
            "image": "images/isobaric_work_pv.jpg",
            "type": "multiple_choice",
            "level": "Thông hiểu",
            "question": "Một lượng khí trong xi lanh bị nén đẳng áp ở áp suất $p = 1{,}5 \\cdot 10^5\\text{ Pa}$ từ thể tích $0{,}008\\text{ m}^3$ xuống còn $0{,}004\\text{ m}^3$. Công mà khối khí nhận được có giá trị là",
            "options": [
                "$A = 600\\text{ J}$",
                "$A = -600\\text{ J}$",
                "$A = 1200\\text{ J}$",
                "$A = 300\\text{ J}$"
            ],
            "correct": 0,
            "explanation": "Ghi nhớ cốt lõi: Độ biến thiên thể tích $\\Delta V = 0{,}004 - 0{,}008 = -0{,}004\\text{ m}^3$. Công khí nhận: $A = -p \\cdot \\Delta V = -(1{,}5 \\cdot 10^5) \\cdot (-0{,}004) = +600\\text{ J}$."
        }
    ],
    "c_u2_qua_trinh_dang_tich": [
        {
            "id": "clone_u2_qtdt_v1",
            "conceptId": "c_u2_qua_trinh_dang_tich",
            "image": "images/isochoric_process.jpg",
            "type": "multiple_choice",
            "level": "Thông hiểu",
            "question": "Đun nóng một bình thép kín chứa khí (bình không dãn nở), người ta truyền cho khí nhiệt lượng $Q = 450\\text{ J}$. Độ biến thiên nội năng của khối khí trong bình là",
            "options": [
                "$\\Delta U = 0$",
                "$\\Delta U = 450\\text{ J}$",
                "$\\Delta U = -450\\text{ J}$",
                "$\\Delta U = 900\\text{ J}$"
            ],
            "correct": 1,
            "explanation": "Ghi nhớ cốt lõi: Bình kín thể tích không đổi (quá trình đẳng tích), khí không sinh công ($A = 0$). Theo ĐL I: $\\Delta U = Q = 450\\text{ J}$."
        },
        {
            "id": "clone_u2_qtdt_v2",
            "conceptId": "c_u2_qua_trinh_dang_tich",
            "image": "images/isochoric_process.jpg",
            "type": "multiple_choice",
            "level": "Thông hiểu",
            "question": "Để làm nguội một bình kín chứa khí mà thể tích không đổi, khí tỏa ra môi trường $Q' = 180\\text{ J}$. Nội năng của khối khí trong bình sẽ",
            "options": [
                "Tăng thêm $180\\text{ J}$.",
                "Giảm đi $180\\text{ J}$.",
                "Không đổi vì thể tích không đổi.",
                "Bằng 0."
            ],
            "correct": 1,
            "explanation": "Ghi nhớ cốt lõi: $\\Delta V = 0 \\Rightarrow A = 0$. Khí tỏa nhiệt nên $Q = -180\\text{ J} \\Rightarrow \\Delta U = Q = -180\\text{ J}$ (nội năng giảm $180\\text{ J}$)."
        }
    ],
    "c_u2_qua_trinh_doan_nhiet": [
        {
            "id": "clone_u2_qtdn_v1",
            "conceptId": "c_u2_qua_trinh_doan_nhiet",
            "image": "images/adiabatic_spray.jpg",
            "type": "multiple_choice",
            "level": "Thông hiểu",
            "question": "Trong một quá trình đoạn nhiệt ($Q = 0$), khối khí bị nén và nhận một công $A = 320\\text{ J}$. Độ biến thiên nội năng của khối khí là",
            "options": [
                "Khí bên trong bình hấp thụ nhiệt lượng lớn từ không khí xung quanh làm thể tích khối khí tăng lên đột ngột tạo ra làn khói trắng.",
                "Khí dãn nở rất nhanh sinh công ($A < 0$) trong điều kiện đoạn nhiệt ($Q \\approx 0$), làm nội năng giảm mạnh khiến nhiệt độ hạ làm hơi nước ngưng tụ.",
                "Áp suất khí giảm đột ngột làm phản ứng hóa học tỏa nhiệt xảy ra tức thì biến đổi các phân tử khí gas thành các hạt khói sương mịn.",
                "Khí bên trong bình bị ma sát mạnh với thành vòi xịt khi phun ra ngoài làm nhiệt độ tăng cao làm cháy các hạt bụi tạo thành làn khói mỏng."
            ],
            "correct": 1,
            "explanation": "Ghi nhớ cốt lõi: Quá trình đoạn nhiệt $Q = 0$, áp dụng ĐL I: $\\Delta U = A + Q = A = 320\\text{ J}$ (nội năng tăng $320\\text{ J}$ và nhiệt độ khí tăng)."
        },
        {
            "id": "clone_u2_qtdn_v2",
            "conceptId": "c_u2_qua_trinh_doan_nhiet",
            "image": "images/adiabatic_spray.jpg",
            "type": "multiple_choice",
            "level": "Thông hiểu",
            "question": "Một khối khí trong xi lanh cách nhiệt hoàn toàn ($Q = 0$) dãn nở đẩy pít-tông sinh công $A' = 150\\text{ J}$. Nhiệt độ của khối khí sẽ",
            "options": [
                "Khí bên trong bình hấp thụ nhiệt lượng lớn từ không khí xung quanh làm thể tích khối khí tăng lên đột ngột tạo ra làn khói trắng.",
                "Khí dãn nở rất nhanh sinh công ($A < 0$) trong điều kiện đoạn nhiệt ($Q \\approx 0$), làm nội năng giảm mạnh khiến nhiệt độ hạ làm hơi nước ngưng tụ.",
                "Áp suất khí giảm đột ngột làm phản ứng hóa học tỏa nhiệt xảy ra tức thì biến đổi các phân tử khí gas thành các hạt khói sương mịn.",
                "Khí bên trong bình bị ma sát mạnh với thành vòi xịt khi phun ra ngoài làm nhiệt độ tăng cao làm cháy các hạt bụi tạo thành làn khói mỏng."
            ],
            "correct": 1,
            "explanation": "Ghi nhớ cốt lõi: Khí dãn nở đoạn nhiệt sinh công $A' = 150\\text{ J} \\Rightarrow A = -150\\text{ J} \\Rightarrow \\Delta U = A = -150\\text{ J}$. Nội năng giảm dẫn đến nhiệt độ của khối khí giảm xuống."
        }
    ],
    "c_u2_bom_xe_dap": [
        {
            "id": "clone_u2_bxd_v1",
            "conceptId": "c_u2_bom_xe_dap",
            "image": "images/bicycle_pump_heating.jpg",
            "type": "multiple_choice",
            "level": "Thông hiểu",
            "question": "Khi nén nhanh không khí trong một ống nghiệm có chứa một mẩu bông gòn nhỏ đặt ở đáy (thí nghiệm nén khí đoạn nhiệt), mẩu bông bốc cháy là vì",
            "options": [
                "Khí bị nén nhận công ($A > 0$) làm nội năng và nhiệt độ tăng lên, đồng thời có một phần nhiệt do ma sát giữa pít-tông và thân ống bơm.",
                "Khí bị nén tỏa nhiệt lượng ra thành ống bơm do các phân tử khí va chạm đàn hồi hoàn toàn với vỏ kim loại của chiếc bơm xe đạp.",
                "Tay người truyền trực tiếp nhiệt lượng từ cơ thể vào thân ống bơm trong suốt thời gian cầm nắm và tác dụng lực bơm liên tục.",
                "Áp suất khí bên trong lốp xe đạp truyền ngược sóng nhiệt qua van dẫn vào ống bơm làm kim loại nóng lên nhanh chóng sau vài nhịp."
            ],
            "correct": 0,
            "explanation": "Ghi nhớ cốt lõi: Nén nhanh là quá trình đoạn nhiệt ($Q \\approx 0$). Công nén lớn ($A > 0$) làm nội năng tăng vọt ($\\Delta U = A > 0$), nhiệt độ không khí bên trong có thể đạt tới trên $400^\\circ\\text{C}$ làm mẩu bông tự bốc cháy."
        },
        {
            "id": "clone_u2_bxd_v2",
            "conceptId": "c_u2_bom_xe_dap",
            "image": "images/bicycle_pump_heating.jpg",
            "type": "multiple_choice",
            "level": "Thông hiểu",
            "question": "Để giảm bớt hiện tượng nóng lên của thân bơm khi bơm bóng hoặc bơm xe đạp, biện pháp hiệu quả là",
            "options": [
                "Khí bị nén nhận công ($A > 0$) làm nội năng và nhiệt độ tăng lên, đồng thời có một phần nhiệt do ma sát giữa pít-tông và thân ống bơm.",
                "Khí bị nén tỏa nhiệt lượng ra thành ống bơm do các phân tử khí va chạm đàn hồi hoàn toàn với vỏ kim loại của chiếc bơm xe đạp.",
                "Tay người truyền trực tiếp nhiệt lượng từ cơ thể vào thân ống bơm trong suốt thời gian cầm nắm và tác dụng lực bơm liên tục.",
                "Áp suất khí bên trong lốp xe đạp truyền ngược sóng nhiệt qua van dẫn vào ống bơm làm kim loại nóng lên nhanh chóng sau vài nhịp."
            ],
            "correct": 0,
            "explanation": "Ghi nhớ cốt lõi: Bơm từ từ giúp nhiệt lượng kịp tỏa ra môi trường ngoài, đồng thời tra dầu bôi trơn giúp giảm tối đa công cọ xát ma sát giữa pít-tông và thành ống bơm."
        }
    ],
    "c_u2_xilanh_khi_nen": [
        {
            "id": "clone_u2_xlkn_v1",
            "conceptId": "c_u2_xilanh_khi_nen",
            "image": "images/three_states_matter.jpg",
            "type": "multi_tf",
            "level": "Thông hiểu",
            "context": "Xét một lượng khí lý tưởng bị nhốt trong xi lanh pít-tông kín di động. Xét tính đúng/sai của các nhận định sau:",
            "statements": [
                {
                    "text": "Khi nén khí và đồng thời làm lạnh để nội năng không đổi thì $A = -Q$.",
                    "isCorrect": true
                },
                {
                    "text": "Khi nung nóng để khí dãn nở đẳng áp, khối khí vừa nhận nhiệt lượng vừa sinh công ra môi trường.",
                    "isCorrect": true
                },
                {
                    "text": "Trong quá trình đẳng nhiệt của khí lý tưởng, toàn bộ nhiệt lượng mà khối khí nhận vào đều chuyển thành công do khí sinh ra.",
                    "isCorrect": true
                },
                {
                    "text": "Nếu một khối khí nhận công $100\\text{ J}$ và tỏa nhiệt $100\\text{ J}$ thì nhiệt độ của nó chắc chắn tăng lên.",
                    "isCorrect": false
                }
            ],
            "explanation": "Ghi nhớ cốt lõi: Nếu nhận công $100\\text{ J}$ ($A = +100\\text{ J}$) và tỏa nhiệt $100\\text{ J}$ ($Q = -100\\text{ J}$) thì $\\Delta U = A + Q = 0$, nội năng không đổi nên nhiệt độ của khí lý tưởng giữ nguyên không đổi."
        },
        {
            "id": "clone_u2_xlkn_v2",
            "conceptId": "c_u2_xilanh_khi_nen",
            "image": "images/three_states_matter.jpg",
            "type": "multi_tf",
            "level": "Thông hiểu",
            "context": "Một xilanh chứa khí lý tưởng thực hiện chu trình biến đổi khép kín (quay về trạng thái ban đầu). Xét tính đúng/sai của các phát biểu sau:",
            "statements": [
                {
                    "text": "Độ biến thiên nội năng của khối khí sau một chu trình khép kín bằng 0 ($\\Delta U = 0$).",
                    "isCorrect": true
                },
                {
                    "text": "Tổng công mà khối khí trao đổi trong chu trình bằng tổng nhiệt lượng mà khối khí trao đổi: $A = -Q$.",
                    "isCorrect": true
                },
                {
                    "text": "Nếu trong chu trình khối khí sinh công có ích $A' > 0$ thì tổng nhiệt lượng khối khí nhận vào phải có giá trị dương $Q > 0$.",
                    "isCorrect": true
                },
                {
                    "text": "Nhiệt độ của khối khí ở trạng thái cuối cùng của chu trình luôn cao hơn trạng thái ban đầu.",
                    "isCorrect": false
                }
            ],
            "explanation": "Ghi nhớ cốt lõi: Chu trình khép kín nghĩa là trạng thái cuối trùng với trạng thái đầu, do đó nhiệt độ cuối bằng nhiệt độ đầu và độ biến thiên nội năng $\\Delta U = 0$."
        }
    ],
    "c_u2_dong_co_nhiet": [
        {
            "id": "clone_u2_dcn_v1",
            "conceptId": "c_u2_dong_co_nhiet",
            "image": "images/three_states_matter.jpg",
            "type": "multi_tf",
            "level": "Thông hiểu",
            "context": "Xét động cơ nhiệt hoạt động theo chu trình nhận nhiệt $Q_1$ từ nguồn nóng, sinh công có ích $A'$ và thải nhiệt lượng $Q_2$ cho nguồn lạnh. Xét tính đúng/sai của các phát biểu sau:",
            "statements": [
                {
                    "text": "Theo định luật bảo toàn năng lượng: $Q_1 = A' + Q_2$.",
                    "isCorrect": true
                },
                {
                    "text": "Hiệu suất của động cơ nhiệt được tính bằng công thức $H = \\frac{A'}{Q_1} = 1 - \\frac{Q_2}{Q_1}$.",
                    "isCorrect": true
                },
                {
                    "text": "Nhờ tiến bộ kỹ thuật hiện đại, con người đã chế tạo được động cơ nhiệt có hiệu suất $H = 100\\%$.",
                    "isCorrect": false
                },
                {
                    "text": "Nguồn lạnh là bộ phận bắt buộc phải có để động cơ nhiệt có thể duy trì hoạt động theo chu trình liên tục.",
                    "isCorrect": true
                }
            ],
            "explanation": "Ghi nhớ cốt lõi: Theo nguyên lý II nhiệt động lực học, hiệu suất động cơ nhiệt luôn nhỏ hơn $100\\%$, không thể loại bỏ nguồn lạnh."
        },
        {
            "id": "clone_u2_dcn_v2",
            "conceptId": "c_u2_dong_co_nhiet",
            "image": "images/three_states_matter.jpg",
            "type": "multi_tf",
            "level": "Thông hiểu",
            "context": "Xét máy lạnh (tủ lạnh) hoạt động dựa trên nguyên lý nhiệt động lực học. Xét tính đúng/sai của các phát biểu sau:",
            "statements": [
                {
                    "text": "Máy lạnh là thiết bị lấy nhiệt lượng từ vật lạnh truyền sang vật nóng hơn nhờ nhận công từ máy nén điện.",
                    "isCorrect": true
                },
                {
                    "text": "Nhiệt lượng tự phát có thể tự động truyền từ trong ngăn mát tủ lạnh ra phòng ngủ mà không cần cắm điện.",
                    "isCorrect": false
                },
                {
                    "text": "Nhiệt lượng mà tủ lạnh phả ra phía sau dàn nóng lớn hơn nhiệt lượng mà nó hút từ trong tủ mát.",
                    "isCorrect": true
                },
                {
                    "text": "Nếu mở toang cửa tủ lạnh trong một phòng kín cách nhiệt và để tủ chạy liên tục, không khí trong phòng sẽ mát lạnh như mùa đông.",
                    "isCorrect": false
                }
            ],
            "explanation": "Ghi nhớ cốt lõi: Dàn nóng của tủ lạnh tỏa ra nhiệt lượng $Q_1 = Q_2 + A$ (lớn hơn nhiệt hút vào $Q_2$), do đó nếu mở toang cửa tủ lạnh trong phòng kín thì nhiệt độ phòng thực tế sẽ tăng lên chứ không mát đi."
        }
    ],
    "c_u3_khai_niem_nhiet_do": [
        {
            "id": "clone_u3_knnd_v1",
            "conceptId": "c_u3_khai_niem_nhiet_do",
            "image": "images/temp_molecular_speed.jpg",
            "type": "multiple_choice",
            "level": "Nhận biết",
            "question": "Khi hai vật có cùng nhiệt độ, ta có thể khẳng định điều nào sau đây là ĐÚNG?",
            "options": [
                "Năng lượng liên kết hóa học giữa các nguyên tử cấu tạo nên các phân tử của chất đó.",
                "Động năng trung bình của chuyển động nhiệt hỗn loạn của các phân tử cấu tạo nên vật.",
                "Tổng thế năng tương tác hấp dẫn giữa các phân tử cấu tạo nên vật thể đang khảo sát.",
                "Vận tốc chuyển động có hướng của toàn bộ vật thể so với mốc quy chiếu mặt đất."
            ],
            "correct": 1,
            "explanation": "Ghi nhớ cốt lõi: Về mặt vi mô, nhiệt độ là đại lượng tỷ lệ thuận với động năng tịnh tiến trung bình của các phân tử: $\\bar{E}_{\\text{đ}} = \\frac{3}{2} k T$. Hai vật có cùng nhiệt độ thì động năng trung bình của các phân tử bằng nhau."
        },
        {
            "id": "clone_u3_knnd_v2",
            "conceptId": "c_u3_khai_niem_nhiet_do",
            "image": "images/temp_molecular_speed.jpg",
            "type": "multiple_choice",
            "level": "Nhận biết",
            "question": "Đại lượng vật lý nào cho biết mức độ nóng hay lạnh của một vật?",
            "options": [
                "Năng lượng liên kết hóa học giữa các nguyên tử cấu tạo nên các phân tử của chất đó.",
                "Động năng trung bình của chuyển động nhiệt hỗn loạn của các phân tử cấu tạo nên vật.",
                "Tổng thế năng tương tác hấp dẫn giữa các phân tử cấu tạo nên vật thể đang khảo sát.",
                "Vận tốc chuyển động có hướng của toàn bộ vật thể so với mốc quy chiếu mặt đất."
            ],
            "correct": 1,
            "explanation": "Ghi nhớ cốt lõi: Nhiệt độ là đại lượng vật lý đặc trưng cho trạng thái nhiệt (mức độ nóng hay lạnh) của vật."
        }
    ],
    "c_u3_chieu_truyen_nhiet": [
        {
            "id": "clone_u3_ctn_v1",
            "conceptId": "c_u3_chieu_truyen_nhiet",
            "image": "images/thermal_equilibrium.jpg",
            "type": "multiple_choice",
            "level": "Nhận biết",
            "question": "Thả một thỏi nhôm nặng $200\\text{ g}$ ở $20^\\circ\\text{C}$ vào một ca nước $1000\\text{ g}$ ở $80^\\circ\\text{C}$. Chiều truyền nhiệt tự phát diễn ra như thế nào?",
            "options": [
                "Nhiệt lượng truyền từ xô nước đá sang giọt nước sôi vì xô nước đá có khối lượng lớn hơn nhiều nên chứa tổng nội năng lớn hơn giọt nước.",
                "Nhiệt lượng tự phát truyền từ giọt nước sôi ($100^\\circ\\text{C}$) sang xô nước đá ($0^\\circ\\text{C}$) vì giọt nước sôi có nhiệt độ cao hơn.",
                "Hai vật hoàn toàn không thể truyền nhiệt cho nhau vì sự chênh lệch về thể tích giữa một giọt nước và một xô nước đá là quá lớn.",
                "Nhiệt lượng tự động bị triệt tiêu ngay lập tức khi hai vật thể có trạng thái thể chất khác nhau tiếp xúc trực tiếp với nhau trong không khí."
            ],
            "correct": 1,
            "explanation": "Ghi nhớ cốt lõi: Quá trình truyền nhiệt tự phát luôn diễn ra từ vật có nhiệt độ cao hơn ($80^\\circ\\text{C}$) sang vật có nhiệt độ thấp hơn ($20^\\circ\\text{C}$)."
        },
        {
            "id": "clone_u3_ctn_v2",
            "conceptId": "c_u3_chieu_truyen_nhiet",
            "image": "images/thermal_equilibrium.jpg",
            "type": "multiple_choice",
            "level": "Thông hiểu",
            "question": "Một giọt nước sôi ở $100^\\circ\\text{C}$ rơi vào một xô nước đá ở $0^\\circ\\text{C}$. Nhiệt lượng sẽ truyền như thế nào dù khối lượng xô nước đá lớn hơn rất nhiều?",
            "options": [
                "Nhiệt lượng truyền từ xô nước đá sang giọt nước sôi vì xô nước đá có khối lượng lớn hơn nhiều nên chứa tổng nội năng lớn hơn giọt nước.",
                "Nhiệt lượng tự phát truyền từ giọt nước sôi ($100^\\circ\\text{C}$) sang xô nước đá ($0^\\circ\\text{C}$) vì giọt nước sôi có nhiệt độ cao hơn.",
                "Hai vật hoàn toàn không thể truyền nhiệt cho nhau vì sự chênh lệch về thể tích giữa một giọt nước và một xô nước đá là quá lớn.",
                "Nhiệt lượng tự động bị triệt tiêu ngay lập tức khi hai vật thể có trạng thái thể chất khác nhau tiếp xúc trực tiếp với nhau trong không khí."
            ],
            "correct": 1,
            "explanation": "Ghi nhớ cốt lõi: Chiều truyền nhiệt tự phát chỉ do sự chênh lệch nhiệt độ quyết định, hoàn toàn không phụ thuộc vào vật nào có khối lượng hay nội năng lớn hơn."
        }
    ],
    "c_u3_can_bang_nhiet": [
        {
            "id": "clone_u3_cbn_v1",
            "conceptId": "c_u3_can_bang_nhiet",
            "image": "images/thermal_equilibrium.jpg",
            "type": "multiple_choice",
            "level": "Nhận biết",
            "question": "Nếu vật A ở trạng thái cân bằng nhiệt với vật B, và vật B ở trạng thái cân bằng nhiệt với vật C, thì",
            "options": [
                "Vật A và vật C cũng ở trạng thái cân bằng nhiệt với nhau và cả hai vật có cùng nhiệt độ (nguyên lý số 0 của nhiệt động lực học).",
                "Vật A luôn có nhiệt độ cao hơn vật C một lượng tỷ lệ thuận với khối lượng riêng của chất liệu cấu tạo nên vật thể A và vật thể B.",
                "Vật A có nội năng gấp đôi vật C do năng lượng nhiệt được truyền tích lũy tuần tự qua vật trung gian B theo định luật bảo toàn.",
                "Không thể rút ra bất kỳ kết luận vật lý nào về mối liên hệ nhiệt độ giữa vật A và vật C nếu hai vật không tiếp xúc trực tiếp với nhau."
            ],
            "correct": 0,
            "explanation": "Ghi nhớ cốt lõi: Đây là nội dung của Nguyên lý số 0 của nhiệt động lực học (tính chất bắc cầu của trạng thái cân bằng nhiệt): Nếu $T_A = T_B$ và $T_B = T_C$ thì $T_A = T_C$."
        },
        {
            "id": "clone_u3_cbn_v2",
            "conceptId": "c_u3_can_bang_nhiet",
            "image": "images/thermal_equilibrium.jpg",
            "type": "multiple_choice",
            "level": "Thông hiểu",
            "question": "Khi đặt nhiệt kế vào cơ thể bệnh nhân để đo nhiệt độ, ta phải chờ khoảng 3 đến 5 phút trước khi đọc kết quả là để",
            "options": [
                "Vật A và vật C cũng ở trạng thái cân bằng nhiệt với nhau và cả hai vật có cùng nhiệt độ (nguyên lý số 0 của nhiệt động lực học).",
                "Vật A luôn có nhiệt độ cao hơn vật C một lượng tỷ lệ thuận với khối lượng riêng của chất liệu cấu tạo nên vật thể A và vật thể B.",
                "Vật A có nội năng gấp đôi vật C do năng lượng nhiệt được truyền tích lũy tuần tự qua vật trung gian B theo định luật bảo toàn.",
                "Không thể rút ra bất kỳ kết luận vật lý nào về mối liên hệ nhiệt độ giữa vật A và vật C nếu hai vật không tiếp xúc trực tiếp với nhau."
            ],
            "correct": 0,
            "explanation": "Ghi nhớ cốt lõi: Cần thời gian để xảy ra quá trình truyền nhiệt giữa cơ thể và nhiệt kế cho đến khi đạt trạng thái cân bằng nhiệt (hai bên có cùng nhiệt độ), khi đó số chỉ trên nhiệt kế mới phản ánh chính xác thân nhiệt."
        }
    ],
    "c_u3_don_vi_kelvin": [
        {
            "id": "clone_u3_dvk_v1",
            "conceptId": "c_u3_don_vi_kelvin",
            "image": "images/three_temperature_scales.jpg",
            "type": "multiple_choice",
            "level": "Nhận biết",
            "question": "Cách viết nào sau đây là CHUẨN XÁC theo quy chuẩn ký hiệu hệ thống đo lường quốc tế SI?",
            "options": [
                "$T = 300^\\circ\\text{K}$",
                "$T = 300\\text{ K}$",
                "$T = 300\\text{ deg K}$",
                "$T = 300^\\circ\\text{Kelvin}$"
            ],
            "correct": 1,
            "explanation": "Ghi nhớ cốt lõi: Đơn vị Kelvin được ký hiệu duy nhất bằng chữ K in hoa, không có ký hiệu độ $^\\circ$ đi kèm."
        },
        {
            "id": "clone_u3_dvk_v2",
            "conceptId": "c_u3_don_vi_kelvin",
            "image": "images/three_temperature_scales.jpg",
            "type": "multiple_choice",
            "level": "Nhận biết",
            "question": "Nhà bác học nào đã đề xuất thang nhiệt độ nhiệt động lực học mang tên ông lấy mốc không độ tuyệt đối?",
            "options": [
                "Anders Celsius.",
                "William Thomson (Lord Kelvin).",
                "Daniel Gabriel Fahrenheit.",
                "James Prescott Joule."
            ],
            "correct": 1,
            "explanation": "Ghi nhớ cốt lõi: Thang nhiệt độ Kelvin do nhà vật lý người Anh William Thomson (sau này là Huân tước Kelvin) đề xuất vào năm 1848."
        }
    ],
    "c_u3_cong_thuc_kelvin_celsius": [
        {
            "id": "clone_u3_ctkc_v1",
            "conceptId": "c_u3_cong_thuc_kelvin_celsius",
            "image": "images/kelvin_celsius_scale.jpg",
            "type": "multiple_choice",
            "level": "Nhận biết",
            "question": "Để chuyển từ nhiệt độ Kelvin ($T$) sang nhiệt độ Celsius ($t$), công thức đúng là",
            "options": [
                "$t(^\\circ\\text{C}) = T(\\text{K}) - 273{,}15$",
                "$t(^\\circ\\text{C}) = T(\\text{K}) + 273{,}15$",
                "$t(^\\circ\\text{C}) = 1{,}8 \\cdot T(\\text{K})$",
                "$t(^\\circ\\text{C}) = \\frac{T(\\text{K})}{273{,}15}$"
            ],
            "correct": 0,
            "explanation": "Ghi nhớ cốt lõi: Từ $T = t + 273{,}15 \\Rightarrow t = T - 273{,}15$."
        },
        {
            "id": "clone_u3_ctkc_v2",
            "conceptId": "c_u3_cong_thuc_kelvin_celsius",
            "image": "images/kelvin_celsius_scale.jpg",
            "type": "multiple_choice",
            "level": "Nhận biết",
            "question": "Nhiệt độ đóng băng của nước tinh khiết ở áp suất tiêu chuẩn $1\\text{ atm}$ ứng với bao nhiêu Kelvin?",
            "options": [
                "$0\\text{ K}$",
                "$100\\text{ K}$",
                "$273{,}15\\text{ K}$",
                "$373{,}15\\text{ K}$"
            ],
            "correct": 2,
            "explanation": "Ghi nhớ cốt lõi: Nước đá tan ở $0^\\circ\\text{C}$, tương ứng với $T = 0 + 273{,}15 = 273{,}15\\text{ K}$."
        }
    ],
    "c_u3_khong_do_tuyet_doi": [
        {
            "id": "clone_u3_kdtd_v1",
            "conceptId": "c_u3_khong_do_tuyet_doi",
            "image": "images/absolute_zero_kelvin.jpg",
            "type": "multiple_choice",
            "level": "Nhận biết",
            "question": "Tại sao không thể làm lạnh một vật chất xuống dưới nhiệt độ 'Không độ tuyệt đối' ($0\\text{ K}$)?",
            "options": [
                "Vì ở $0\\text{ K}$, động năng chuyển động nhiệt hỗn loạn của các phân tử đạt mức cực tiểu lý thuyết, năng lượng không thể hạ thấp hơn mức tối thiểu này.",
                "Vì các hệ thống máy làm lạnh hiện đại nhất hiện nay chưa đủ công suất cơ học để nén và hóa lỏng các dòng khí helium ở nhiệt độ siêu thấp.",
                "Vì ở nhiệt độ $0\\text{ K}$ toàn bộ khối lượng của vật chất bị biến mất hoàn toàn chuyển hóa thành năng lượng photon ánh sáng theo phương trình Einstein.",
                "Vì áp suất khí quyển xung quanh luôn tạo ra một lực cản cơ học ngăn không cho nhiệt độ của khối vật chất giảm tiếp xuống dưới mức âm."
            ],
            "correct": 0,
            "explanation": "Ghi nhớ cốt lõi: $0\\text{ K}$ là giới hạn dưới của nhiệt độ trong vũ trụ, tại đó chuyển động nhiệt của các hạt đạt trạng thái năng lượng thấp nhất có thể có theo cơ học lượng tử, không thể có mức năng lượng nào thấp hơn."
        },
        {
            "id": "clone_u3_kdtd_v2",
            "conceptId": "c_u3_khong_do_tuyet_doi",
            "image": "images/absolute_zero_kelvin.jpg",
            "type": "multiple_choice",
            "level": "Nhận biết",
            "question": "Phát biểu nào sau đây về thang đo nhiệt độ Kelvin là SAI?",
            "options": [
                "Vì ở $0\\text{ K}$, động năng chuyển động nhiệt hỗn loạn của các phân tử đạt mức cực tiểu lý thuyết, năng lượng không thể hạ thấp hơn mức tối thiểu này.",
                "Vì các hệ thống máy làm lạnh hiện đại nhất hiện nay chưa đủ công suất cơ học để nén và hóa lỏng các dòng khí helium ở nhiệt độ siêu thấp.",
                "Vì ở nhiệt độ $0\\text{ K}$ toàn bộ khối lượng của vật chất bị biến mất hoàn toàn chuyển hóa thành năng lượng photon ánh sáng theo phương trình Einstein.",
                "Vì áp suất khí quyển xung quanh luôn tạo ra một lực cản cơ học ngăn không cho nhiệt độ của khối vật chất giảm tiếp xuống dưới mức âm."
            ],
            "correct": 0,
            "explanation": "Ghi nhớ cốt lõi: Nước tinh khiết đóng băng ở $0^\\circ\\text{C} = 273{,}15\\text{ K}$, chứ không phải ở $0\\text{ K}$."
        }
    ],
    "c_u3_tinh_doi_kelvin": [
        {
            "id": "clone_u3_tdk_v1",
            "conceptId": "c_u3_tinh_doi_kelvin",
            "image": "images/kelvin_celsius_scale.jpg",
            "type": "multiple_choice",
            "level": "Thông hiểu",
            "question": "Nước tinh khiết sôi ở $100^\\circ\\text{C}$ dưới áp suất $1\\text{ atm}$. Nhiệt độ này tương ứng với bao nhiêu Kelvin?",
            "options": [
                "$100\\text{ K}$",
                "$273{,}15\\text{ K}$",
                "$373{,}15\\text{ K}$",
                "$473{,}15\\text{ K}$"
            ],
            "correct": 2,
            "explanation": "Ghi nhớ cốt lõi: $T = 100 + 273{,}15 = 373{,}15\\text{ K}$."
        },
        {
            "id": "clone_u3_tdk_v2",
            "conceptId": "c_u3_tinh_doi_kelvin",
            "image": "images/kelvin_celsius_scale.jpg",
            "type": "multiple_choice",
            "level": "Thông hiểu",
            "question": "Một bóng đèn huỳnh quang khi hoạt động có nhiệt độ khí bên trong là $320\\text{ K}$. Nhiệt độ này tương ứng với bao nhiêu độ Celsius?",
            "options": [
                "$46{,}85^\\circ\\text{C}$",
                "$593{,}15^\\circ\\text{C}$",
                "$320^\\circ\\text{C}$",
                "$27^\\circ\\text{C}$"
            ],
            "correct": 0,
            "explanation": "Ghi nhớ cốt lõi: $t = T - 273{,}15 = 320 - 273{,}15 = 46{,}85^\\circ\\text{C}$."
        }
    ],
    "c_u3_tinh_doi_fahrenheit": [
        {
            "id": "clone_u3_tdf_v1",
            "conceptId": "c_u3_tinh_doi_fahrenheit",
            "image": "images/three_temperature_scales.jpg",
            "type": "multiple_choice",
            "level": "Thông hiểu",
            "question": "Nhiệt độ nước đá đang tan ($0^\\circ\\text{C}$) và nhiệt độ nước sôi ($100^\\circ\\text{C}$) ở áp suất tiêu chuẩn tương ứng với bao nhiêu độ Fahrenheit ($^\\circ\\text{F}$)?",
            "options": [
                "$0^\\circ\\text{F}$ và $100^\\circ\\text{F}$",
                "$32^\\circ\\text{F}$ và $212^\\circ\\text{F}$",
                "$32^\\circ\\text{F}$ và $180^\\circ\\text{F}$",
                "$0^\\circ\\text{F}$ và $212^\\circ\\text{F}$"
            ],
            "correct": 1,
            "explanation": "Ghi nhớ cốt lõi: $t = 0^\\circ\\text{C} \\Rightarrow t_F = 1{,}8 \\cdot 0 + 32 = 32^\\circ\\text{F}$; $t = 100^\\circ\\text{C} \\Rightarrow t_F = 1{,}8 \\cdot 100 + 32 = 212^\\circ\\text{F}$."
        },
        {
            "id": "clone_u3_tdf_v2",
            "conceptId": "c_u3_tinh_doi_fahrenheit",
            "image": "images/three_temperature_scales.jpg",
            "type": "multiple_choice",
            "level": "Thông hiểu",
            "question": "Bản tin dự báo thời tiết ở Mỹ báo nhiệt độ mùa đông ngoài trời là $50^\\circ\\text{F}$. Nhiệt độ này tính sang độ Celsius ($^\\circ\\text{C}$) là",
            "options": [
                "$10^\\circ\\text{C}$",
                "$18^\\circ\\text{C}$",
                "$25^\\circ\\text{C}$",
                "$32^\\circ\\text{C}$"
            ],
            "correct": 0,
            "explanation": "Ghi nhớ cốt lõi: Từ $t_F = 1{,}8t + 32 \\Rightarrow t = \\frac{t_F - 32}{1{,}8} = \\frac{50 - 32}{1{,}8} = \\frac{18}{1{,}8} = 10^\\circ\\text{C}$."
        }
    ],
    "c_u3_do_bien_thien_nhiet": [
        {
            "id": "clone_u3_dbtn_v1",
            "conceptId": "c_u3_do_bien_thien_nhiet",
            "image": "images/three_temperature_scales.jpg",
            "type": "multiple_choice",
            "level": "Thông hiểu",
            "question": "Khi đun nóng một ấm nước, nhiệt độ của nước tăng từ $20^\\circ\\text{C}$ lên $70^\\circ\\text{C}$. Độ tăng nhiệt độ của nước trong thang Kelvin là",
            "options": [
                "Kết quả tính nhiệt lượng bị sai lệch một lượng năng lượng nhiệt bằng đúng $273{,}15\\text{ J}$ do mốc Không độ tuyệt đối khác mốc $0^\\circ\\text{C}$.",
                "Giá trị nhiệt lượng hoàn toàn không thay đổi vì một độ chia trong thang Celsius có độ lớn bằng đúng một độ chia trong thang Kelvin ($\\Delta T = \\Delta t$).",
                "Kết quả tính nhiệt lượng bị tăng lên gấp đúng $1{,}8$ lần do thang đo nhiệt độ quốc tế quy định tỷ lệ chuyển đổi nhiệt năng sang quang năng.",
                "Kết quả tính nhiệt lượng bị giảm đi $273{,}15$ lần do các phân tử chất khí chuyển động chậm hơn khi nhiệt độ biểu diễn bằng độ bách phân."
            ],
            "correct": 1,
            "explanation": "Ghi nhớ cốt lõi: Độ biến thiên nhiệt độ trong hai thang luôn bằng nhau: $\\Delta T(\\text{K}) = \\Delta t(^\\circ\\text{C}) = 70 - 20 = 50\\text{ K}$."
        },
        {
            "id": "clone_u3_dbtn_v2",
            "conceptId": "c_u3_do_bien_thien_nhiet",
            "image": "images/three_temperature_scales.jpg",
            "type": "multiple_choice",
            "level": "Thông hiểu",
            "question": "Trong công thức tính nhiệt lượng $Q = m \\cdot c \\cdot \\Delta T$, nếu thay $\\Delta T(\\text{K})$ bằng $\\Delta t(^\\circ\\text{C})$ thì kết quả tính nhiệt lượng $Q$",
            "options": [
                "Kết quả tính nhiệt lượng bị sai lệch một lượng năng lượng nhiệt bằng đúng $273{,}15\\text{ J}$ do mốc Không độ tuyệt đối khác mốc $0^\\circ\\text{C}$.",
                "Giá trị nhiệt lượng hoàn toàn không thay đổi vì một độ chia trong thang Celsius có độ lớn bằng đúng một độ chia trong thang Kelvin ($\\Delta T = \\Delta t$).",
                "Kết quả tính nhiệt lượng bị tăng lên gấp đúng $1{,}8$ lần do thang đo nhiệt độ quốc tế quy định tỷ lệ chuyển đổi nhiệt năng sang quang năng.",
                "Kết quả tính nhiệt lượng bị giảm đi $273{,}15$ lần do các phân tử chất khí chuyển động chậm hơn khi nhiệt độ biểu diễn bằng độ bách phân."
            ],
            "correct": 1,
            "explanation": "Ghi nhớ cốt lõi: Vì độ chênh lệch nhiệt độ $\\Delta T = \\Delta t$, nên việc dùng độ Celsius hay Kelvin trong công thức tính nhiệt lượng trao đổi đều cho kết quả hoàn toàn như nhau."
        }
    ],
    "c_u3_dan_nhiet_sat_go": [
        {
            "id": "clone_u3_dnsg_v1",
            "conceptId": "c_u3_dan_nhiet_sat_go",
            "image": "images/iron_wood_conduction.jpg",
            "type": "multiple_choice",
            "level": "Thông hiểu",
            "question": "Vào mùa hè nóng bức khi nhiệt độ ngoài trời lên tới $40^\\circ\\text{C}$, nếu sờ tay vào một tấm tôn kim loại và một tấm gỗ ngoài sân, ta thấy tấm tôn nóng hơn tấm gỗ là vì",
            "options": [
                "Thanh sắt có nhiệt độ thực tế thấp hơn thanh gỗ do kim loại hấp thụ nhiệt lạnh từ không khí xung quanh tốt hơn chất liệu gỗ.",
                "Sắt dẫn nhiệt tốt hơn gỗ rất nhiều nên nhiệt lượng từ bàn tay truyền sang thanh sắt nhanh hơn, tạo cảm giác lạnh rõ rệt hơn thanh gỗ.",
                "Thanh sắt hút nhiệt độ từ không khí mạnh hơn thanh gỗ làm lớp không khí tiếp xúc với bề mặt thanh sắt bị giảm nhiệt độ sâu.",
                "Thanh gỗ có khả năng tự phát tỏa ra nhiệt lượng sưởi ấm bàn tay khi tiếp xúc nhờ các phản ứng oxy hóa chậm bên trong thớ gỗ."
            ],
            "correct": 1,
            "explanation": "Ghi nhớ cốt lõi: Vì nhiệt độ ngoài trời $40^\\circ\\text{C}$ cao hơn thân nhiệt cơ thể $37^\\circ\\text{C}$, khi chạm vào tôn kim loại dẫn nhiệt tốt, nhiệt lượng truyền rất nhanh từ kim loại vào tay ta gây cảm giác nóng rát."
        },
        {
            "id": "clone_u3_dnsg_v2",
            "conceptId": "c_u3_dan_nhiet_sat_go",
            "image": "images/iron_wood_conduction.jpg",
            "type": "multiple_choice",
            "level": "Thông hiểu",
            "question": "Để cách nhiệt tốt cho tường nhà, người ta thường dùng gạch rỗng hoặc xốp cách nhiệt vì",
            "options": [
                "Thanh sắt có nhiệt độ thực tế thấp hơn thanh gỗ do kim loại hấp thụ nhiệt lạnh từ không khí xung quanh tốt hơn chất liệu gỗ.",
                "Sắt dẫn nhiệt tốt hơn gỗ rất nhiều nên nhiệt lượng từ bàn tay truyền sang thanh sắt nhanh hơn, tạo cảm giác lạnh rõ rệt hơn thanh gỗ.",
                "Thanh sắt hút nhiệt độ từ không khí mạnh hơn thanh gỗ làm lớp không khí tiếp xúc với bề mặt thanh sắt bị giảm nhiệt độ sâu.",
                "Thanh gỗ có khả năng tự phát tỏa ra nhiệt lượng sưởi ấm bàn tay khi tiếp xúc nhờ các phản ứng oxy hóa chậm bên trong thớ gỗ."
            ],
            "correct": 1,
            "explanation": "Ghi nhớ cốt lõi: Không khí ở trạng thái đứng yên có hệ số dẫn nhiệt rất nhỏ (chất cách nhiệt tuyệt vời), các lỗ rỗng trong gạch hoặc xốp giam giữ không khí giúp giảm truyền nhiệt từ ngoài vào nhà."
        }
    ],
    "c_u3_nhiet_ke_y_te": [
        {
            "id": "clone_u3_nkyt_v1",
            "conceptId": "c_u3_nhiet_ke_y_te",
            "image": "images/clinical_thermometer.jpg",
            "type": "multiple_choice",
            "level": "Thông hiểu",
            "question": "Thang chia độ trên thân nhiệt kế y tế thủy ngân thông thường chỉ giới hạn trong khoảng từ",
            "options": [
                "Làm cho cột thủy ngân dâng lên chậm rãi giúp người đo có đủ thời gian đọc chính xác từng vạch chia độ trên thân nhiệt kế.",
                "Ngăn không cho cột thủy ngân tự động tụt xuống bầu khi đưa nhiệt kế ra khỏi cơ thể, giúp đọc đúng nhiệt độ tối đa của người bệnh.",
                "Tăng áp suất bên trong ống quản thủy tinh để tránh hiện tượng thủy ngân bị sôi và bay hơi khi tiếp xúc với thân nhiệt cao.",
                "Lọc bỏ các bọt khí li ti lẫn bên trong cột thủy ngân lỏng để đảm bảo độ chính xác tuyệt đối của phép đo nhiệt độ lâm sàng."
            ],
            "correct": 1,
            "explanation": "Ghi nhớ cốt lõi: Nhiệt độ cơ thể người chỉ dao động trong giới hạn hẹp quanh $37^\\circ\\text{C}$ (người sống bình thường không hạ dưới $35^\\circ\\text{C}$ và hiếm khi sốt cao quá $42^\\circ\\text{C}$), do đó nhiệt kế y tế chỉ chia từ $35^\\circ\\text{C}$ đến $42^\\circ\\text{C}$ để tăng tối đa độ chính xác cho từng vạch chia $0{,}1^\\circ\\text{C}$."
        },
        {
            "id": "clone_u3_nkyt_v2",
            "conceptId": "c_u3_nhiet_ke_y_te",
            "image": "images/clinical_thermometer.jpg",
            "type": "multiple_choice",
            "level": "Thông hiểu",
            "question": "Trước khi dùng nhiệt kế y tế thủy ngân để đo nhiệt độ cho bệnh nhân tiếp theo, người điều dưỡng bắt buộc phải",
            "options": [
                "Làm cho cột thủy ngân dâng lên chậm rãi giúp người đo có đủ thời gian đọc chính xác từng vạch chia độ trên thân nhiệt kế.",
                "Ngăn không cho cột thủy ngân tự động tụt xuống bầu khi đưa nhiệt kế ra khỏi cơ thể, giúp đọc đúng nhiệt độ tối đa của người bệnh.",
                "Tăng áp suất bên trong ống quản thủy tinh để tránh hiện tượng thủy ngân bị sôi và bay hơi khi tiếp xúc với thân nhiệt cao.",
                "Lọc bỏ các bọt khí li ti lẫn bên trong cột thủy ngân lỏng để đảm bảo độ chính xác tuyệt đối của phép đo nhiệt độ lâm sàng."
            ],
            "correct": 1,
            "explanation": "Ghi nhớ cốt lõi: Vẩy mạnh tạo ra lực quán tính đẩy cột thủy ngân tụt qua chỗ thắt hẹp trở về bầu đựng thủy ngân (xuống dưới mức $35^\\circ\\text{C}$), sẵn sàng cho lần đo tiếp theo."
        }
    ],
    "c_u3_cac_loai_nhiet_ke": [
        {
            "id": "clone_u3_clnk_v1",
            "conceptId": "c_u3_cac_loai_nhiet_ke",
            "image": "images/thermometer_types.jpg",
            "type": "multiple_choice",
            "level": "Thông hiểu",
            "question": "Để đo nhiệt độ của một dung dịch hóa chất độc hại đang sôi trong bình kín từ khoảng cách an toàn, loại nhiệt kế nào sau đây là phù hợp nhất?",
            "options": [
                "Sự biến thiên điện trở của dây kim loại (như bạch kim) hoặc chất bán dẫn theo nhiệt độ của môi trường cần đo.",
                "Sự dãn nở thể tích của cột chất lỏng màu (như rượu hoặc thủy ngân) chứa trong ống quản thủy tinh khi đun nóng.",
                "Sự biến đổi màu sắc của màng tinh thể lỏng khi có ánh sáng nhìn thấy chiếu xuyên qua bề mặt của bản cảm ứng nhiệt.",
                "Lực hút tĩnh điện giữa hai bản cực của tụ điện không khí thay đổi khi nhiệt độ môi trường xung quanh biến thiên liên tục."
            ],
            "correct": 0,
            "explanation": "Ghi nhớ cốt lõi: Nhiệt kế hồng ngoại đo năng lượng bức xạ nhiệt từ xa mà không cần tiếp xúc vật lý trực tiếp, rất an toàn khi đo các vật có nhiệt độ cao hoặc dung dịch hóa chất nguy hiểm."
        },
        {
            "id": "clone_u3_clnk_v2",
            "conceptId": "c_u3_cac_loai_nhiet_ke",
            "image": "images/thermometer_types.jpg",
            "type": "multiple_choice",
            "level": "Thông hiểu",
            "question": "Nhiệt kế điện trở hoạt động dựa trên nguyên lý nào sau đây?",
            "options": [
                "Sự biến thiên điện trở của dây kim loại (như bạch kim) hoặc chất bán dẫn theo nhiệt độ của môi trường cần đo.",
                "Sự dãn nở thể tích của cột chất lỏng màu (như rượu hoặc thủy ngân) chứa trong ống quản thủy tinh khi đun nóng.",
                "Sự biến đổi màu sắc của màng tinh thể lỏng khi có ánh sáng nhìn thấy chiếu xuyên qua bề mặt của bản cảm ứng nhiệt.",
                "Lực hút tĩnh điện giữa hai bản cực của tụ điện không khí thay đổi khi nhiệt độ môi trường xung quanh biến thiên liên tục."
            ],
            "correct": 0,
            "explanation": "Ghi nhớ cốt lõi: Nhiệt kế điện trở đo nhiệt độ dựa trên sự thay đổi điện trở của dây kim loại (thường là Platin) hoặc vật liệu bán dẫn (thermistor) khi nhiệt độ môi trường thay đổi."
        }
    ],
    "c_u3_diem_ba_cua_nuoc": [
        {
            "id": "clone_u3_dbcn_v1",
            "conceptId": "c_u3_diem_ba_cua_nuoc",
            "image": "images/triple_point_water.jpg",
            "type": "multiple_choice",
            "level": "Thông hiểu",
            "question": "Tại 'Điểm ba của nước', vật chất tồn tại ở những thể nào?",
            "options": [
                "Chỉ tồn tại duy nhất ở hai thể là thể lỏng và thể hơi trong một bình chứa kín được hút chân không ở áp suất cao.",
                "Chỉ tồn tại duy nhất ở hai thể là thể rắn (nước đá) và thể lỏng (nước) ở mốc nhiệt độ chuẩn $0^\\circ\\text{C}$ và $1\\text{ atm}$.",
                "Đồng thời cả ba thể: rắn (băng), lỏng (nước) và khí (hơi nước) cùng tồn tại ở trạng thái cân bằng nhiệt động xác định.",
                "Toàn bộ khối nước chuyển thành thể plasma mang điện tích ở nhiệt độ phòng dưới tác dụng của điện trường ngoài cực mạnh."
            ],
            "correct": 2,
            "explanation": "Ghi nhớ cốt lõi: Điểm ba của nước là điểm duy nhất trên giản đồ pha P-T mà tại đó cả ba pha rắn, lỏng, khí cùng tồn tại cân bằng động ở $T = 273{,}16\\text{ K}$ và $P = 611{,}65\\text{ Pa}$."
        },
        {
            "id": "clone_u3_dbcn_v2",
            "conceptId": "c_u3_diem_ba_cua_nuoc",
            "image": "images/triple_point_water.jpg",
            "type": "multiple_choice",
            "level": "Thông hiểu",
            "question": "Tại sao thang nhiệt độ Kelvin quốc tế lại chọn điểm ba của nước làm điểm mốc chuẩn cố định thay vì chọn điểm đóng băng của nước?",
            "options": [
                "Chỉ tồn tại duy nhất ở hai thể là thể lỏng và thể hơi trong một bình chứa kín được hút chân không ở áp suất cao.",
                "Chỉ tồn tại duy nhất ở hai thể là thể rắn (nước đá) và thể lỏng (nước) ở mốc nhiệt độ chuẩn $0^\\circ\\text{C}$ và $1\\text{ atm}$.",
                "Đồng thời cả ba thể: rắn (băng), lỏng (nước) và khí (hơi nước) cùng tồn tại ở trạng thái cân bằng nhiệt động xác định.",
                "Toàn bộ khối nước chuyển thành thể plasma mang điện tích ở nhiệt độ phòng dưới tác dụng của điện trường ngoài cực mạnh."
            ],
            "correct": 2,
            "explanation": "Ghi nhớ cốt lõi: Điểm đóng băng của nước phụ thuộc vào áp suất khí quyển và khí hòa tan, trong khi điểm ba của nước xảy ra trong điều kiện chân không khép kín ở một trạng thái duy nhất có độ lặp lại và độ chính xác cực cao."
        }
    ],
    "c_u3_an_toan_thuy_ngan": [
        {
            "id": "clone_u3_attg_v1",
            "conceptId": "c_u3_an_toan_thuy_ngan",
            "image": "images/mercury_spill_safety.jpg",
            "type": "multiple_choice",
            "level": "Thông hiểu",
            "question": "Chất bột nào sau đây được dùng phổ biến để rắc lên các hạt thủy ngân rơi vãi khi vỡ nhiệt kế nhằm vô hiệu hóa độc tính của thủy ngân?",
            "options": [
                "Rắc bột lưu huỳnh ($\\text{S}$) lên các giọt thủy ngân để tạo thành hợp chất $\\text{HgS}$ rắn không bay hơi, rồi thu gom xử lý an toàn.",
                "Dùng máy hút bụi công suất lớn để hút sạch các giọt thủy ngân li ti vương vãi trên sàn nhà và gom vào túi rác sinh hoạt gia đình.",
                "Đổ trực tiếp cồn y tế hoặc nước nóng vào vùng thủy ngân rơi vỡ để hòa tan thủy ngân rồi dùng chổi lau sàn lau sạch bề mặt.",
                "Dùng muối ăn ($\\text{NaCl}$) rắc lên thủy ngân để chuyển hóa thủy ngân thành dung dịch muối clo lỏng rồi xả thẳng xuống cống thoát."
            ],
            "correct": 0,
            "explanation": "Ghi nhớ cốt lõi: Bột lưu huỳnh ($\text{S}$) phản ứng trực tiếp với thủy ngân ($\text{Hg}$) ở nhiệt độ phòng tạo ra muối mercuric sulfide ($\text{HgS}$) dạng rắn không độc và không bay hơi."
        },
        {
            "id": "clone_u3_attg_v2",
            "conceptId": "c_u3_an_toan_thuy_ngan",
            "image": "images/mercury_spill_safety.jpg",
            "type": "multiple_choice",
            "level": "Thông hiểu",
            "question": "Vì sao TUYỆT ĐỐI KHÔNG ĐƯỢC dùng máy hút bụi để hút thủy ngân khi nhiệt kế bị vỡ?",
            "options": [
                "Rắc bột lưu huỳnh ($\\text{S}$) lên các giọt thủy ngân để tạo thành hợp chất $\\text{HgS}$ rắn không bay hơi, rồi thu gom xử lý an toàn.",
                "Dùng máy hút bụi công suất lớn để hút sạch các giọt thủy ngân li ti vương vãi trên sàn nhà và gom vào túi rác sinh hoạt gia đình.",
                "Đổ trực tiếp cồn y tế hoặc nước nóng vào vùng thủy ngân rơi vỡ để hòa tan thủy ngân rồi dùng chổi lau sàn lau sạch bề mặt.",
                "Dùng muối ăn ($\\text{NaCl}$) rắc lên thủy ngân để chuyển hóa thủy ngân thành dung dịch muối clo lỏng rồi xả thẳng xuống cống thoát."
            ],
            "correct": 0,
            "explanation": "Ghi nhớ cốt lõi: Máy hút bụi sẽ làm phân tán các hạt thủy ngân li ti và nhiệt lượng từ động cơ khiến hơi thủy ngân độc hại bốc hơi nồng độ cao vào không khí, gây ngộ độc đường hô hấp cấp tính."
        }
    ],
    "c_u3_thang_nhiet_do_chuan": [
        {
            "id": "clone_u3_tndc_v1",
            "conceptId": "c_u3_thang_nhiet_do_chuan",
            "image": "images/three_states_matter.jpg",
            "type": "multi_tf",
            "level": "Thông hiểu",
            "context": "Xét các đặc điểm của các thang nhiệt độ trong lịch sử và hiện đại. Xét tính đúng/sai của các phát biểu sau:",
            "statements": [
                {
                    "text": "Thang Celsius chia khoảng cách giữa nhiệt độ băng tan và nhiệt độ nước sôi ở $1\\text{ atm}$ thành 100 phần bằng nhau.",
                    "isCorrect": true
                },
                {
                    "text": "Thang Fahrenheit chia khoảng cách giữa nhiệt độ băng tan và nhiệt độ nước sôi thành 180 phần bằng nhau.",
                    "isCorrect": true
                },
                {
                    "text": "Ở nhiệt độ $-40^\\circ$, số chỉ trên thang Celsius và thang Fahrenheit bằng nhau ($-40^\\circ\\text{C} = -40^\\circ\\text{F}$).",
                    "isCorrect": true
                },
                {
                    "text": "Thang nhiệt độ Kelvin có thể nhận giá trị nhiệt độ âm khi làm lạnh cực sâu trong phòng thí nghiệm.",
                    "isCorrect": false
                }
            ],
            "explanation": "Ghi nhớ cốt lõi: $-40^\\circ\\text{C} = -40^\\circ\\text{F}$ (do $-40 \\times 1{,}8 + 32 = -40$). Thang Kelvin là thang nhiệt độ tuyệt đối, bắt đầu từ $0\\text{ K}$ và không bao giờ âm."
        },
        {
            "id": "clone_u3_tndc_v2",
            "conceptId": "c_u3_thang_nhiet_do_chuan",
            "image": "images/three_states_matter.jpg",
            "type": "multi_tf",
            "level": "Thông hiểu",
            "context": "Xét mối quan hệ giữa các thang đo nhiệt độ khi áp dụng vào tính toán vật lý. Xét tính đúng/sai của các phát biểu sau:",
            "statements": [
                {
                    "text": "Độ tăng nhiệt độ $\\Delta t = 20^\\circ\\text{C}$ tương ứng với độ tăng nhiệt độ $\\Delta T = 20\\text{ K}$.",
                    "isCorrect": true
                },
                {
                    "text": "Nhiệt độ $20^\\circ\\text{C}$ tương ứng với nhiệt độ $T = 293{,}15\\text{ K}$.",
                    "isCorrect": true
                },
                {
                    "text": "Nếu nhiệt độ của vật tăng gấp đôi trong thang Celsius (từ $20^\\circ\\text{C}$ lên $40^\\circ\\text{C}$) thì nhiệt độ trong thang Kelvin cũng tăng gấp đôi.",
                    "isCorrect": false
                },
                {
                    "text": "Trong các công thức định luật chất khí (như $pV = nRT$), bắt buộc phải sử dụng nhiệt độ tuyệt đối trong thang Kelvin ($T$).",
                    "isCorrect": true
                }
            ],
            "explanation": "Ghi nhớ cốt lõi: $20^\\circ\\text{C} = 293{,}15\\text{ K}$, $40^\\circ\\text{C} = 313{,}15\\text{ K}$ (tỉ lệ tăng là $313{,}15 / 293{,}15 \\approx 1{,}07$ chứ không phải tăng gấp đôi)."
        }
    ],
    "c_u3_nguyen_ly_nhiet_ke": [
        {
            "id": "clone_u3_nlnk_v1",
            "conceptId": "c_u3_nguyen_ly_nhiet_ke",
            "image": "images/three_states_matter.jpg",
            "type": "multi_tf",
            "level": "Thông hiểu",
            "context": "Xét nguyên lý chế tạo các loại nhiệt kế thông dụng trong đời sống. Xét tính đúng/sai của các phát biểu sau:",
            "statements": [
                {
                    "text": "Chất lỏng dùng trong nhiệt kế cần có hệ số dãn nở vì nhiệt lớn và tương đối đều đặn trong dải đo.",
                    "isCorrect": true
                },
                {
                    "text": "Ống quản của nhiệt kế thủy ngân càng hẹp thì nhiệt kế càng có độ nhạy cao.",
                    "isCorrect": true
                },
                {
                    "text": "Nhiệt kế rượu thường được pha thêm màu đỏ để người đọc dễ quan sát mực chất lỏng.",
                    "isCorrect": true
                },
                {
                    "text": "Nhiệt kế thủy ngân có thể dùng an toàn để đo nhiệt độ của không khí ở Bắc Cực vào mùa đông xuống tới $-60^\\circ\\text{C}$.",
                    "isCorrect": false
                }
            ],
            "explanation": "Ghi nhớ cốt lõi: Thủy ngân đóng băng ở nhiệt độ $-38{,}83^\\circ\\text{C}$, do đó không thể dùng nhiệt kế thủy ngân ở vùng Bắc Cực giá lạnh $-60^\\circ\\text{C}$ (phải dùng nhiệt kế rượu vì rượu chỉ đóng băng ở $-114^\\circ\\text{C}$)."
        },
        {
            "id": "clone_u3_nlnk_v2",
            "conceptId": "c_u3_nguyen_ly_nhiet_ke",
            "image": "images/three_states_matter.jpg",
            "type": "multi_tf",
            "level": "Thông hiểu",
            "context": "Một nhóm học sinh tìm hiểu về các dụng cụ đo nhiệt độ hiện đại. Xét tính đúng/sai của các nhận xét sau:",
            "statements": [
                {
                    "text": "Cặp nhiệt điện hoạt động dựa trên hiệu ứng nhiệt điện Seebeck sinh ra suất điện động khi hai mối hàn ở hai nhiệt độ khác nhau.",
                    "isCorrect": true
                },
                {
                    "text": "Nhiệt kế hồng ngoại đo nhiệt độ của vật thể dựa trên việc phân tích phổ bức xạ nhiệt mà vật phát ra.",
                    "isCorrect": true
                },
                {
                    "text": "Nhiệt kế điện trở kim loại Platin có độ chính xác và độ ổn định rất cao nên thường dùng làm nhiệt kế chuẩn.",
                    "isCorrect": true
                },
                {
                    "text": "Mọi vật thể có nhiệt độ trên $0\\text{ K}$ đều phát ra bức xạ nhiệt hồng ngoại ra môi trường xung quanh.",
                    "isCorrect": true
                }
            ],
            "explanation": "Ghi nhớ cốt lõi: Mọi vật có nhiệt độ lớn hơn $0\\text{ K}$ (không độ tuyệt đối) đều phát ra bức xạ nhiệt do dao động nhiệt của các hạt mang điện bên trong nguyên tử."
        }
    ],
    "c_u1_ap_suat_dinh_nui": [
        {
            "id": "clone_u1_mc_15_v1",
            "conceptId": "c_u1_ap_suat_dinh_nui",
            "image": "images/pressure_cooker_boiling.jpg",
            "type": "multiple_choice",
            "level": "Vận dụng cao",
            "question": "[Vòng 2 Củng Cố] Khi leo lên đỉnh núi Everest (độ cao gần $8848\\text{ m}$), các nhà leo núi nhận thấy nước sôi ở nhiệt độ khoảng $70^\\circ\\text{C}$ và luộc thức ăn không thể chín được. Giải thích nào sau đây về mặt phân tử và nhiệt động học là ĐÚNG nhất?",
            "options": [
                "Trên đỉnh núi cao nhiệt độ không khí rất lạnh làm ngọn lửa bếp gas không thể truyền đủ nhiệt lượng vào đáy nồi nấu cơm.",
                "Càng lên cao áp suất khí quyển càng giảm, làm nhiệt độ sôi của nước giảm xuống dưới $100^\\circ\\text{C}$ nên cơm không chín.",
                "Hàm lượng khí oxy loãng trên núi cao làm phản ứng thủy phân tinh bột trong hạt gạo bị ức chế hoàn toàn không chín được.",
                "Gió trên đỉnh núi thổi quá mạnh làm nước trong nồi liên tục bay hơi nhanh khiến nhiệt độ nồi không thể tăng lên được."
            ],
            "correct": 1,
            "explanation": "Tư duy nâng cao: Sự sôi xảy ra khi áp suất hơi bão hòa trong các bọt khí bằng áp suất khí quyển trên mặt thoáng. Lên đỉnh núi áp suất khí quyển giảm mạnh, do đó nước sôi ở nhiệt độ thấp hơn nhiều ($70^\\circ\\text{C}$). Ở nhiệt độ này, động năng phân tử nước chưa đủ phá vỡ cấu trúc tinh bột/protein trong thức ăn, nên thức ăn không thể chín nếu không dùng nồi áp suất."
        },
        {
            "id": "clone_u1_mc_15_v2",
            "conceptId": "c_u1_ap_suat_dinh_nui",
            "image": "images/pressure_cooker_boiling.jpg",
            "type": "multiple_choice",
            "level": "Vận dụng cao",
            "question": "[Đấu Trường Nâng Cao] Khi leo lên đỉnh núi Everest (độ cao gần $8848\\text{ m}$), các nhà leo núi nhận thấy nước sôi ở nhiệt độ khoảng $70^\\circ\\text{C}$ và luộc thức ăn không thể chín được. Giải thích nào sau đây về mặt phân tử và nhiệt động học là ĐÚNG nhất?",
            "options": [
                "Trên đỉnh núi cao nhiệt độ không khí rất lạnh làm ngọn lửa bếp gas không thể truyền đủ nhiệt lượng vào đáy nồi nấu cơm.",
                "Càng lên cao áp suất khí quyển càng giảm, làm nhiệt độ sôi của nước giảm xuống dưới $100^\\circ\\text{C}$ nên cơm không chín.",
                "Hàm lượng khí oxy loãng trên núi cao làm phản ứng thủy phân tinh bột trong hạt gạo bị ức chế hoàn toàn không chín được.",
                "Gió trên đỉnh núi thổi quá mạnh làm nước trong nồi liên tục bay hơi nhanh khiến nhiệt độ nồi không thể tăng lên được."
            ],
            "correct": 1,
            "explanation": "Tư duy nâng cao: Sự sôi xảy ra khi áp suất hơi bão hòa trong các bọt khí bằng áp suất khí quyển trên mặt thoáng. Lên đỉnh núi áp suất khí quyển giảm mạnh, do đó nước sôi ở nhiệt độ thấp hơn nhiều ($70^\\circ\\text{C}$). Ở nhiệt độ này, động năng phân tử nước chưa đủ phá vỡ cấu trúc tinh bột/protein trong thức ăn, nên thức ăn không thể chín nếu không dùng nồi áp suất."
        },
        {
            "id": "u1_mc_15",
            "conceptId": "c_u1_ap_suat_dinh_nui",
            "image": "images/pressure_cooker_boiling.jpg",
            "type": "multiple_choice",
            "level": "Vận dụng cao",
            "question": "Khi leo lên đỉnh núi Everest (độ cao gần $8848\\text{ m}$), các nhà leo núi nhận thấy nước sôi ở nhiệt độ khoảng $70^\\circ\\text{C}$ và luộc thức ăn không thể chín được. Giải thích nào sau đây về mặt phân tử và nhiệt động học là ĐÚNG nhất?",
            "options": [
                "Trên đỉnh núi cao nhiệt độ không khí rất lạnh làm ngọn lửa bếp gas không thể truyền đủ nhiệt lượng vào đáy nồi nấu cơm.",
                "Càng lên cao áp suất khí quyển càng giảm, làm nhiệt độ sôi của nước giảm xuống dưới $100^\\circ\\text{C}$ nên cơm không chín.",
                "Hàm lượng khí oxy loãng trên núi cao làm phản ứng thủy phân tinh bột trong hạt gạo bị ức chế hoàn toàn không chín được.",
                "Gió trên đỉnh núi thổi quá mạnh làm nước trong nồi liên tục bay hơi nhanh khiến nhiệt độ nồi không thể tăng lên được."
            ],
            "correct": 1,
            "explanation": "Tư duy nâng cao: Sự sôi xảy ra khi áp suất hơi bão hòa trong các bọt khí bằng áp suất khí quyển trên mặt thoáng. Lên đỉnh núi áp suất khí quyển giảm mạnh, do đó nước sôi ở nhiệt độ thấp hơn nhiều ($70^\\circ\\text{C}$). Ở nhiệt độ này, động năng phân tử nước chưa đủ phá vỡ cấu trúc tinh bột/protein trong thức ăn, nên thức ăn không thể chín nếu không dùng nồi áp suất."
        }
    ],
    "c_u1_qua_lanh_thuy_tinh": [
        {
            "id": "clone_u1_mc_16_v1",
            "conceptId": "c_u1_qua_lanh_thuy_tinh",
            "image": "images/crystal_vs_amorphous.jpg",
            "type": "multiple_choice",
            "level": "Vận dụng cao",
            "question": "[Vòng 2 Củng Cố] Trong công nghệ luyện kim và chế tạo vật liệu nano, người ta nung chảy hợp kim rồi làm nguội siêu nhanh với tốc độ hàng triệu độ mỗi giây (quá trình tôi cực nhanh - rapid quenching). Kết quả thu được thủy tinh kim loại (kim loại vô định hình). Cơ chế vi mô của hiện tượng này là gì?",
            "options": [
                "Tốc độ làm nguội siêu nhanh khiến các nguyên tử không kịp sắp xếp thành mạng tinh thể trật tự xa, bị 'đóng băng' ở trạng thái vô định hình.",
                "Tốc độ làm nguội quá nhanh làm phá vỡ toàn bộ các liên kết kim loại khiến các electron tự do bị giải phóng hoàn toàn khỏi cấu trúc nguyên tử.",
                "Nhiệt độ giảm đột ngột nén ép các nguyên tử lại gần nhau vượt quá giới hạn bền làm cấu trúc kim loại biến dạng thành mạng tinh thể lập phương.",
                "Hiện tượng tôi nhanh làm bay hơi toàn bộ các tạp chất khí hòa tan tạo thành một khối kim loại rỗng xốp có mật độ phân tử phân bố ngẫu nhiên."
            ],
            "correct": 0,
            "explanation": "Tư duy nâng cao: Sự kết tinh đòi hỏi thời gian để các nguyên tử di chuyển nhiệt và tự sắp xếp vào các vị trí nút mạng tinh thể có trật tự xa. Khi làm nguội cực nhanh, tốc độ mất nhiệt lớn hơn tốc độ khuếch tán sắp xếp mạng, cấu trúc hỗn loạn của chất lỏng bị 'đóng băng' lại, tạo thành chất rắn vô định hình có tính đẳng hướng và độ bền cơ học vượt trội."
        },
        {
            "id": "clone_u1_mc_16_v2",
            "conceptId": "c_u1_qua_lanh_thuy_tinh",
            "image": "images/crystal_vs_amorphous.jpg",
            "type": "multiple_choice",
            "level": "Vận dụng cao",
            "question": "[Đấu Trường Nâng Cao] Trong công nghệ luyện kim và chế tạo vật liệu nano, người ta nung chảy hợp kim rồi làm nguội siêu nhanh với tốc độ hàng triệu độ mỗi giây (quá trình tôi cực nhanh - rapid quenching). Kết quả thu được thủy tinh kim loại (kim loại vô định hình). Cơ chế vi mô của hiện tượng này là gì?",
            "options": [
                "Tốc độ làm nguội siêu nhanh khiến các nguyên tử không kịp sắp xếp thành mạng tinh thể trật tự xa, bị 'đóng băng' ở trạng thái vô định hình.",
                "Tốc độ làm nguội quá nhanh làm phá vỡ toàn bộ các liên kết kim loại khiến các electron tự do bị giải phóng hoàn toàn khỏi cấu trúc nguyên tử.",
                "Nhiệt độ giảm đột ngột nén ép các nguyên tử lại gần nhau vượt quá giới hạn bền làm cấu trúc kim loại biến dạng thành mạng tinh thể lập phương.",
                "Hiện tượng tôi nhanh làm bay hơi toàn bộ các tạp chất khí hòa tan tạo thành một khối kim loại rỗng xốp có mật độ phân tử phân bố ngẫu nhiên."
            ],
            "correct": 0,
            "explanation": "Tư duy nâng cao: Sự kết tinh đòi hỏi thời gian để các nguyên tử di chuyển nhiệt và tự sắp xếp vào các vị trí nút mạng tinh thể có trật tự xa. Khi làm nguội cực nhanh, tốc độ mất nhiệt lớn hơn tốc độ khuếch tán sắp xếp mạng, cấu trúc hỗn loạn của chất lỏng bị 'đóng băng' lại, tạo thành chất rắn vô định hình có tính đẳng hướng và độ bền cơ học vượt trội."
        },
        {
            "id": "u1_mc_16",
            "conceptId": "c_u1_qua_lanh_thuy_tinh",
            "image": "images/crystal_vs_amorphous.jpg",
            "type": "multiple_choice",
            "level": "Vận dụng cao",
            "question": "Trong công nghệ luyện kim và chế tạo vật liệu nano, người ta nung chảy hợp kim rồi làm nguội siêu nhanh với tốc độ hàng triệu độ mỗi giây (quá trình tôi cực nhanh - rapid quenching). Kết quả thu được thủy tinh kim loại (kim loại vô định hình). Cơ chế vi mô của hiện tượng này là gì?",
            "options": [
                "Tốc độ làm nguội siêu nhanh khiến các nguyên tử không kịp sắp xếp thành mạng tinh thể trật tự xa, bị 'đóng băng' ở trạng thái vô định hình.",
                "Tốc độ làm nguội quá nhanh làm phá vỡ toàn bộ các liên kết kim loại khiến các electron tự do bị giải phóng hoàn toàn khỏi cấu trúc nguyên tử.",
                "Nhiệt độ giảm đột ngột nén ép các nguyên tử lại gần nhau vượt quá giới hạn bền làm cấu trúc kim loại biến dạng thành mạng tinh thể lập phương.",
                "Hiện tượng tôi nhanh làm bay hơi toàn bộ các tạp chất khí hòa tan tạo thành một khối kim loại rỗng xốp có mật độ phân tử phân bố ngẫu nhiên."
            ],
            "correct": 0,
            "explanation": "Tư duy nâng cao: Sự kết tinh đòi hỏi thời gian để các nguyên tử di chuyển nhiệt và tự sắp xếp vào các vị trí nút mạng tinh thể có trật tự xa. Khi làm nguội cực nhanh, tốc độ mất nhiệt lớn hơn tốc độ khuếch tán sắp xếp mạng, cấu trúc hỗn loạn của chất lỏng bị 'đóng băng' lại, tạo thành chất rắn vô định hình có tính đẳng hướng và độ bền cơ học vượt trội."
        }
    ],
    "c_u1_bay_hoi_thap_giai_nhiet": [
        {
            "id": "clone_u1_mc_17_v1",
            "conceptId": "c_u1_bay_hoi_thap_giai_nhiet",
            "image": "images/evaporation_factors.jpg",
            "type": "multiple_choice",
            "level": "Vận dụng cao",
            "question": "[Vòng 2 Củng Cố] Vào một ngày mùa hè ở Hà Nội hoặc TP.HCM, nhiệt độ không khí đo được là $36^\\circ\\text{C}$ với độ ẩm tương đối là $92\\%$. Người lao động ngoài trời cảm thấy ngột ngạt, bức bối và mệt mỏi nguy hiểm hơn rất nhiều so với khi ở sa mạc khô ráo cùng nhiệt độ $36^\\circ\\text{C}$ nhưng độ ẩm $20\\%$. Phân tích vật lý nào sau đây giải thích chính xác hiện tượng này?",
            "options": [
                "Độ ẩm không khí quá cao làm tốc độ bay hơi mồ hôi giảm mạnh, cơ thể không thể giải nhiệt hiệu quả nên thân nhiệt tăng gây bức bối.",
                "Độ ẩm không khí cao làm tăng áp suất khí quyển đè nặng lên lồng ngực khiến phổi không thể thực hiện quá trình trao đổi khí bình thường.",
                "Không khí ẩm có khối lượng riêng lớn hơn không khí khô làm các phân tử hơi nước ngưng tụ ngược lại truyền thêm nhiệt lượng vào cơ thể.",
                "Độ ẩm cao làm giảm nồng độ oxy hòa tan trong khí quyển khiến cơ thể phải tiêu tốn nhiều năng lượng hơn để hô hấp dẫn đến kiệt sức."
            ],
            "correct": 0,
            "explanation": "Tư duy nâng cao: Cơ chế tự làm mát chủ đạo của cơ thể người khi nhiệt độ môi trường xấp xỉ thân nhiệt ($37^\\circ\\text{C}$) là sự bay hơi mồ hôi. Các phân tử nước có động năng lớn thoát khỏi bề mặt da mang theo nhiệt lượng lớn ($L \\approx 2{,}4 \\times 10^6\\text{ J/kg}$). Khi độ ẩm không khí tiệm cận bão hòa ($92\\%$), quá trình bay hơi bị triệt tiêu vì tốc độ ngưng tụ từ khí quyển bù trừ tốc độ bay hơi, cơ thể không thể thải nhiệt dẫn đến tích tụ nhiệt nguy hiểm."
        },
        {
            "id": "clone_u1_mc_17_v2",
            "conceptId": "c_u1_bay_hoi_thap_giai_nhiet",
            "image": "images/evaporation_factors.jpg",
            "type": "multiple_choice",
            "level": "Vận dụng cao",
            "question": "[Đấu Trường Nâng Cao] Vào một ngày mùa hè ở Hà Nội hoặc TP.HCM, nhiệt độ không khí đo được là $36^\\circ\\text{C}$ với độ ẩm tương đối là $92\\%$. Người lao động ngoài trời cảm thấy ngột ngạt, bức bối và mệt mỏi nguy hiểm hơn rất nhiều so với khi ở sa mạc khô ráo cùng nhiệt độ $36^\\circ\\text{C}$ nhưng độ ẩm $20\\%$. Phân tích vật lý nào sau đây giải thích chính xác hiện tượng này?",
            "options": [
                "Độ ẩm không khí quá cao làm tốc độ bay hơi mồ hôi giảm mạnh, cơ thể không thể giải nhiệt hiệu quả nên thân nhiệt tăng gây bức bối.",
                "Độ ẩm không khí cao làm tăng áp suất khí quyển đè nặng lên lồng ngực khiến phổi không thể thực hiện quá trình trao đổi khí bình thường.",
                "Không khí ẩm có khối lượng riêng lớn hơn không khí khô làm các phân tử hơi nước ngưng tụ ngược lại truyền thêm nhiệt lượng vào cơ thể.",
                "Độ ẩm cao làm giảm nồng độ oxy hòa tan trong khí quyển khiến cơ thể phải tiêu tốn nhiều năng lượng hơn để hô hấp dẫn đến kiệt sức."
            ],
            "correct": 0,
            "explanation": "Tư duy nâng cao: Cơ chế tự làm mát chủ đạo của cơ thể người khi nhiệt độ môi trường xấp xỉ thân nhiệt ($37^\\circ\\text{C}$) là sự bay hơi mồ hôi. Các phân tử nước có động năng lớn thoát khỏi bề mặt da mang theo nhiệt lượng lớn ($L \\approx 2{,}4 \\times 10^6\\text{ J/kg}$). Khi độ ẩm không khí tiệm cận bão hòa ($92\\%$), quá trình bay hơi bị triệt tiêu vì tốc độ ngưng tụ từ khí quyển bù trừ tốc độ bay hơi, cơ thể không thể thải nhiệt dẫn đến tích tụ nhiệt nguy hiểm."
        },
        {
            "id": "u1_mc_17",
            "conceptId": "c_u1_bay_hoi_thap_giai_nhiet",
            "image": "images/evaporation_factors.jpg",
            "type": "multiple_choice",
            "level": "Vận dụng cao",
            "question": "Vào một ngày mùa hè ở Hà Nội hoặc TP.HCM, nhiệt độ không khí đo được là $36^\\circ\\text{C}$ với độ ẩm tương đối là $92\\%$. Người lao động ngoài trời cảm thấy ngột ngạt, bức bối và mệt mỏi nguy hiểm hơn rất nhiều so với khi ở sa mạc khô ráo cùng nhiệt độ $36^\\circ\\text{C}$ nhưng độ ẩm $20\\%$. Phân tích vật lý nào sau đây giải thích chính xác hiện tượng này?",
            "options": [
                "Độ ẩm không khí quá cao làm tốc độ bay hơi mồ hôi giảm mạnh, cơ thể không thể giải nhiệt hiệu quả nên thân nhiệt tăng gây bức bối.",
                "Độ ẩm không khí cao làm tăng áp suất khí quyển đè nặng lên lồng ngực khiến phổi không thể thực hiện quá trình trao đổi khí bình thường.",
                "Không khí ẩm có khối lượng riêng lớn hơn không khí khô làm các phân tử hơi nước ngưng tụ ngược lại truyền thêm nhiệt lượng vào cơ thể.",
                "Độ ẩm cao làm giảm nồng độ oxy hòa tan trong khí quyển khiến cơ thể phải tiêu tốn nhiều năng lượng hơn để hô hấp dẫn đến kiệt sức."
            ],
            "correct": 0,
            "explanation": "Tư duy nâng cao: Cơ chế tự làm mát chủ đạo của cơ thể người khi nhiệt độ môi trường xấp xỉ thân nhiệt ($37^\\circ\\text{C}$) là sự bay hơi mồ hôi. Các phân tử nước có động năng lớn thoát khỏi bề mặt da mang theo nhiệt lượng lớn ($L \\approx 2{,}4 \\times 10^6\\text{ J/kg}$). Khi độ ẩm không khí tiệm cận bão hòa ($92\\%$), quá trình bay hơi bị triệt tiêu vì tốc độ ngưng tụ từ khí quyển bù trừ tốc độ bay hơi, cơ thể không thể thải nhiệt dẫn đến tích tụ nhiệt nguy hiểm."
        }
    ],
    "c_u1_nhiet_do_chuyen_the_lien_ket": [
        {
            "id": "clone_u1_mc_18_v1",
            "conceptId": "c_u1_nhiet_do_chuyen_the_lien_ket",
            "image": "images/phase_transition_diagram.jpg",
            "type": "multiple_choice",
            "level": "Vận dụng cao",
            "question": "[Vòng 2 Củng Cố] Trong thí nghiệm đun nóng liên tục một cốc chứa hỗn hợp nước và nước đá đang tan ở $0^\\circ\\text{C}$ trên ngọn lửa lớn và khuấy đều liên tục. Người ta thấy số chỉ của nhiệt kế cắm trong cốc giữ nguyên không đổi ở $0^\\circ\\text{C}$ suốt 10 phút cho đến khi mẩu đá cuối cùng tan hết. Năng lượng nhiệt mà bếp gas truyền cho cốc nước trong suốt 10 phút đó đã chuyển hóa thành dạng năng lượng nào?",
            "options": [
                "Nhiệt lượng cung cấp đã bị các phân tử nước đá hấp thụ để tăng tốc độ dao động nhiệt làm động năng phân tử tăng đều đặn.",
                "Nhiệt lượng cung cấp được sử dụng hoàn toàn để phá vỡ các liên kết tinh thể (tăng thế năng) chứ không làm tăng động năng phân tử.",
                "Nhiệt lượng từ bếp gas bị nước đá phản xạ bức xạ nhiệt ngược trở lại môi trường xung quanh do bề mặt băng tuyết có độ phản quang cao.",
                "Nhiệt lượng được chuyển hóa toàn bộ thành công cơ học đẩy các phân tử nước dãn nở thể tích mà hoàn toàn không làm biến đổi nội năng."
            ],
            "correct": 1,
            "explanation": "Tư duy nâng cao: Nội năng của vật gồm tổng động năng nhiệt và thế năng tương tác phân tử ($U = W_{d\\text{ nhiệt}} + W_{t\\text{ tương tác}}$). Vì nhiệt độ giữ nguyên ở $0^\\circ\\text{C}$ nên động năng chuyển động nhiệt trung bình không đổi. Toàn bộ nhiệt lượng thu vào được dùng để sinh công thắng lực hút phân tử, bẻ gãy mạng tinh thể chất rắn chuyển sang chất lỏng, làm tăng thế năng phân tử và làm tăng nội năng của khối nước."
        },
        {
            "id": "clone_u1_mc_18_v2",
            "conceptId": "c_u1_nhiet_do_chuyen_the_lien_ket",
            "image": "images/phase_transition_diagram.jpg",
            "type": "multiple_choice",
            "level": "Vận dụng cao",
            "question": "[Đấu Trường Nâng Cao] Trong thí nghiệm đun nóng liên tục một cốc chứa hỗn hợp nước và nước đá đang tan ở $0^\\circ\\text{C}$ trên ngọn lửa lớn và khuấy đều liên tục. Người ta thấy số chỉ của nhiệt kế cắm trong cốc giữ nguyên không đổi ở $0^\\circ\\text{C}$ suốt 10 phút cho đến khi mẩu đá cuối cùng tan hết. Năng lượng nhiệt mà bếp gas truyền cho cốc nước trong suốt 10 phút đó đã chuyển hóa thành dạng năng lượng nào?",
            "options": [
                "Nhiệt lượng cung cấp đã bị các phân tử nước đá hấp thụ để tăng tốc độ dao động nhiệt làm động năng phân tử tăng đều đặn.",
                "Nhiệt lượng cung cấp được sử dụng hoàn toàn để phá vỡ các liên kết tinh thể (tăng thế năng) chứ không làm tăng động năng phân tử.",
                "Nhiệt lượng từ bếp gas bị nước đá phản xạ bức xạ nhiệt ngược trở lại môi trường xung quanh do bề mặt băng tuyết có độ phản quang cao.",
                "Nhiệt lượng được chuyển hóa toàn bộ thành công cơ học đẩy các phân tử nước dãn nở thể tích mà hoàn toàn không làm biến đổi nội năng."
            ],
            "correct": 1,
            "explanation": "Tư duy nâng cao: Nội năng của vật gồm tổng động năng nhiệt và thế năng tương tác phân tử ($U = W_{d\\text{ nhiệt}} + W_{t\\text{ tương tác}}$). Vì nhiệt độ giữ nguyên ở $0^\\circ\\text{C}$ nên động năng chuyển động nhiệt trung bình không đổi. Toàn bộ nhiệt lượng thu vào được dùng để sinh công thắng lực hút phân tử, bẻ gãy mạng tinh thể chất rắn chuyển sang chất lỏng, làm tăng thế năng phân tử và làm tăng nội năng của khối nước."
        },
        {
            "id": "u1_mc_18",
            "conceptId": "c_u1_nhiet_do_chuyen_the_lien_ket",
            "image": "images/phase_transition_diagram.jpg",
            "type": "multiple_choice",
            "level": "Vận dụng cao",
            "question": "Trong thí nghiệm đun nóng liên tục một cốc chứa hỗn hợp nước và nước đá đang tan ở $0^\\circ\\text{C}$ trên ngọn lửa lớn và khuấy đều liên tục. Người ta thấy số chỉ của nhiệt kế cắm trong cốc giữ nguyên không đổi ở $0^\\circ\\text{C}$ suốt 10 phút cho đến khi mẩu đá cuối cùng tan hết. Năng lượng nhiệt mà bếp gas truyền cho cốc nước trong suốt 10 phút đó đã chuyển hóa thành dạng năng lượng nào?",
            "options": [
                "Nhiệt lượng cung cấp đã bị các phân tử nước đá hấp thụ để tăng tốc độ dao động nhiệt làm động năng phân tử tăng đều đặn.",
                "Nhiệt lượng cung cấp được sử dụng hoàn toàn để phá vỡ các liên kết tinh thể (tăng thế năng) chứ không làm tăng động năng phân tử.",
                "Nhiệt lượng từ bếp gas bị nước đá phản xạ bức xạ nhiệt ngược trở lại môi trường xung quanh do bề mặt băng tuyết có độ phản quang cao.",
                "Nhiệt lượng được chuyển hóa toàn bộ thành công cơ học đẩy các phân tử nước dãn nở thể tích mà hoàn toàn không làm biến đổi nội năng."
            ],
            "correct": 1,
            "explanation": "Tư duy nâng cao: Nội năng của vật gồm tổng động năng nhiệt và thế năng tương tác phân tử ($U = W_{d\\text{ nhiệt}} + W_{t\\text{ tương tác}}$). Vì nhiệt độ giữ nguyên ở $0^\\circ\\text{C}$ nên động năng chuyển động nhiệt trung bình không đổi. Toàn bộ nhiệt lượng thu vào được dùng để sinh công thắng lực hút phân tử, bẻ gãy mạng tinh thể chất rắn chuyển sang chất lỏng, làm tăng thế năng phân tử và làm tăng nội năng của khối nước."
        }
    ],
    "c_u1_thang_hoa_da_kho_vaccine": [
        {
            "id": "clone_u1_mc_19_v1",
            "conceptId": "c_u1_thang_hoa_da_kho_vaccine",
            "image": "images/phase_transition_diagram.jpg",
            "type": "multiple_choice",
            "level": "Vận dụng cao",
            "question": "[Vòng 2 Củng Cố] Để bảo quản và vận chuyển các loại vaccine mRNA (như vaccine phòng COVID-19 cần nhiệt độ bảo quản $-70^\\circ\\text{C}$), người ta dùng 'đá khô' ($\\text{CO}_2$ rắn) lót trong thùng cách nhiệt thay vì nước đá. Ưu điểm nhiệt học và chuyển thể vượt trội của đá khô trong ứng dụng này là gì?",
            "options": [
                "Đá khô thăng hoa trực tiếp từ thể rắn sang thể khí ở $-78{,}5^\\circ\\text{C}$, làm lạnh sâu mà không chảy lỏng gây ướt hỏng bao bì vaccine.",
                "Đá khô có khối lượng riêng rất nhỏ nên nhẹ hơn nước đá thường, giúp giảm tối đa chi phí vận chuyển đường hàng không và chống va đập.",
                "Khí $\\text{CO}_2$ thoát ra từ đá khô có tính trơ về mặt hóa học giúp ngăn chặn hoàn toàn quá trình oxy hóa các phân tử protein trong vaccine.",
                "Đá khô có khả năng phát ra các tia bức xạ nhiệt hồng ngoại làm đông cứng tế bào vi khuẩn xung quanh giúp tiệt trùng môi trường bảo quản."
            ],
            "correct": 0,
            "explanation": "Tư duy nâng cao: Carbon dioxide rắn (đá khô) ở áp suất chuẩn thăng hoa trực tiếp thành khí $\\text{CO}_2$ ở $-78{,}5^\\circ\\text{C}$. Quá trình thăng hoa thu nhiệt hóa hơi rất mạnh, giữ nhiệt độ thùng bảo quản ở mức $-78{,}5^\\circ\\text{C}$ (đáp ứng tiêu chuẩn $-70^\\circ\\text{C}$ của vaccine mRNA). Đặc biệt, do không chảy thành chất lỏng (không qua thể lỏng) nên không làm rách hỏng bao bì nhãn mác hay gây chập cháy thiết bị giám sát nhiệt độ."
        },
        {
            "id": "clone_u1_mc_19_v2",
            "conceptId": "c_u1_thang_hoa_da_kho_vaccine",
            "image": "images/phase_transition_diagram.jpg",
            "type": "multiple_choice",
            "level": "Vận dụng cao",
            "question": "[Đấu Trường Nâng Cao] Để bảo quản và vận chuyển các loại vaccine mRNA (như vaccine phòng COVID-19 cần nhiệt độ bảo quản $-70^\\circ\\text{C}$), người ta dùng 'đá khô' ($\\text{CO}_2$ rắn) lót trong thùng cách nhiệt thay vì nước đá. Ưu điểm nhiệt học và chuyển thể vượt trội của đá khô trong ứng dụng này là gì?",
            "options": [
                "Đá khô thăng hoa trực tiếp từ thể rắn sang thể khí ở $-78{,}5^\\circ\\text{C}$, làm lạnh sâu mà không chảy lỏng gây ướt hỏng bao bì vaccine.",
                "Đá khô có khối lượng riêng rất nhỏ nên nhẹ hơn nước đá thường, giúp giảm tối đa chi phí vận chuyển đường hàng không và chống va đập.",
                "Khí $\\text{CO}_2$ thoát ra từ đá khô có tính trơ về mặt hóa học giúp ngăn chặn hoàn toàn quá trình oxy hóa các phân tử protein trong vaccine.",
                "Đá khô có khả năng phát ra các tia bức xạ nhiệt hồng ngoại làm đông cứng tế bào vi khuẩn xung quanh giúp tiệt trùng môi trường bảo quản."
            ],
            "correct": 0,
            "explanation": "Tư duy nâng cao: Carbon dioxide rắn (đá khô) ở áp suất chuẩn thăng hoa trực tiếp thành khí $\\text{CO}_2$ ở $-78{,}5^\\circ\\text{C}$. Quá trình thăng hoa thu nhiệt hóa hơi rất mạnh, giữ nhiệt độ thùng bảo quản ở mức $-78{,}5^\\circ\\text{C}$ (đáp ứng tiêu chuẩn $-70^\\circ\\text{C}$ của vaccine mRNA). Đặc biệt, do không chảy thành chất lỏng (không qua thể lỏng) nên không làm rách hỏng bao bì nhãn mác hay gây chập cháy thiết bị giám sát nhiệt độ."
        },
        {
            "id": "u1_mc_19",
            "conceptId": "c_u1_thang_hoa_da_kho_vaccine",
            "image": "images/phase_transition_diagram.jpg",
            "type": "multiple_choice",
            "level": "Vận dụng cao",
            "question": "Để bảo quản và vận chuyển các loại vaccine mRNA (như vaccine phòng COVID-19 cần nhiệt độ bảo quản $-70^\\circ\\text{C}$), người ta dùng 'đá khô' ($\\text{CO}_2$ rắn) lót trong thùng cách nhiệt thay vì nước đá. Ưu điểm nhiệt học và chuyển thể vượt trội của đá khô trong ứng dụng này là gì?",
            "options": [
                "Đá khô thăng hoa trực tiếp từ thể rắn sang thể khí ở $-78{,}5^\\circ\\text{C}$, làm lạnh sâu mà không chảy lỏng gây ướt hỏng bao bì vaccine.",
                "Đá khô có khối lượng riêng rất nhỏ nên nhẹ hơn nước đá thường, giúp giảm tối đa chi phí vận chuyển đường hàng không và chống va đập.",
                "Khí $\\text{CO}_2$ thoát ra từ đá khô có tính trơ về mặt hóa học giúp ngăn chặn hoàn toàn quá trình oxy hóa các phân tử protein trong vaccine.",
                "Đá khô có khả năng phát ra các tia bức xạ nhiệt hồng ngoại làm đông cứng tế bào vi khuẩn xung quanh giúp tiệt trùng môi trường bảo quản."
            ],
            "correct": 0,
            "explanation": "Tư duy nâng cao: Carbon dioxide rắn (đá khô) ở áp suất chuẩn thăng hoa trực tiếp thành khí $\\text{CO}_2$ ở $-78{,}5^\\circ\\text{C}$. Quá trình thăng hoa thu nhiệt hóa hơi rất mạnh, giữ nhiệt độ thùng bảo quản ở mức $-78{,}5^\\circ\\text{C}$ (đáp ứng tiêu chuẩn $-70^\\circ\\text{C}$ của vaccine mRNA). Đặc biệt, do không chảy thành chất lỏng (không qua thể lỏng) nên không làm rách hỏng bao bì nhãn mác hay gây chập cháy thiết bị giám sát nhiệt độ."
        }
    ],
    "c_u1_thuc_te_chuyen_the": [
        {
            "id": "clone_u1_tf_03_v1",
            "conceptId": "c_u1_thuc_te_chuyen_the",
            "image": "images/three_states_matter.jpg",
            "type": "multi_tf",
            "level": "Vận dụng cao",
            "context": "[Vòng 2 Củng Cố] Một nhóm học sinh lớp 12 thực hiện dự án nghiên cứu các hiện tượng biến đổi trạng thái của chất trong tự nhiên và công nghệ đời sống. Xét tính đúng/sai của các nhận định khoa học sau:",
            "statements": [
                {
                    "text": "Vào đầu mùa xuân khi băng tuyết tan, nhiệt độ không khí xung quanh thường cảm thấy lạnh buốt hơn cả khi tuyết đang rơi là do quá trình băng tan thu một nhiệt lượng lớn từ môi trường.",
                    "isCorrect": true
                },
                {
                    "text": "Bình xịt khoáng làm mát da hoạt động dựa trên nguyên lý: các hạt sương nước siêu mịn có tổng diện tích bề mặt rất lớn làm tốc độ bay hơi diễn ra cực nhanh, thu nhiệt từ da mặt.",
                    "isCorrect": true
                },
                {
                    "text": "Trong nồi áp suất đang sôi, nếu đột ngột mở van xả áp thật nhanh thì toàn bộ lượng nước trong nồi sẽ lập tức ngưng tụ thành đá do áp suất tụt giảm.",
                    "isCorrect": false
                },
                {
                    "text": "Trong phương pháp sấy thăng hoa (freeze-drying) chế biến thực phẩm cao cấp, nước trong thực phẩm được làm đông đá trước rồi giảm áp suất buồng sấy xuống dưới điểm ba của nước để đá thăng hoa thành hơi mà không bị nhão.",
                    "isCorrect": true
                }
            ],
            "explanation": "Tư duy nâng cao: 1) Nóng chảy là quá trình thu nhiệt $\\to$ không khí bị mất nhiệt trở nên lạnh cóng. 2) Diện tích bề mặt tăng hàng triệu lần làm tốc độ bay hơi tăng vọt $\\to$ làm mát da tức thì. 3) Khi xả áp đột ngột, nhiệt độ sôi giảm nhanh khiến nước trong nồi sôi mãnh liệt và trào ra chứ không đông đá. 4) Sấy thăng hoa tận dụng áp suất chân không dưới điểm ba ($611{,}65\\text{ Pa}$) để nước đá thăng hoa trực tiếp thành hơi, bảo toàn nguyên vẹn hình dạng, chất dinh dưỡng và màu sắc của thực phẩm."
        },
        {
            "id": "clone_u1_tf_03_v2",
            "conceptId": "c_u1_thuc_te_chuyen_the",
            "image": "images/three_states_matter.jpg",
            "type": "multi_tf",
            "level": "Vận dụng cao",
            "context": "[Đấu Trường Nâng Cao] Một nhóm học sinh lớp 12 thực hiện dự án nghiên cứu các hiện tượng biến đổi trạng thái của chất trong tự nhiên và công nghệ đời sống. Xét tính đúng/sai của các nhận định khoa học sau:",
            "statements": [
                {
                    "text": "Vào đầu mùa xuân khi băng tuyết tan, nhiệt độ không khí xung quanh thường cảm thấy lạnh buốt hơn cả khi tuyết đang rơi là do quá trình băng tan thu một nhiệt lượng lớn từ môi trường.",
                    "isCorrect": true
                },
                {
                    "text": "Bình xịt khoáng làm mát da hoạt động dựa trên nguyên lý: các hạt sương nước siêu mịn có tổng diện tích bề mặt rất lớn làm tốc độ bay hơi diễn ra cực nhanh, thu nhiệt từ da mặt.",
                    "isCorrect": true
                },
                {
                    "text": "Trong nồi áp suất đang sôi, nếu đột ngột mở van xả áp thật nhanh thì toàn bộ lượng nước trong nồi sẽ lập tức ngưng tụ thành đá do áp suất tụt giảm.",
                    "isCorrect": false
                },
                {
                    "text": "Trong phương pháp sấy thăng hoa (freeze-drying) chế biến thực phẩm cao cấp, nước trong thực phẩm được làm đông đá trước rồi giảm áp suất buồng sấy xuống dưới điểm ba của nước để đá thăng hoa thành hơi mà không bị nhão.",
                    "isCorrect": true
                }
            ],
            "explanation": "Tư duy nâng cao: 1) Nóng chảy là quá trình thu nhiệt $\\to$ không khí bị mất nhiệt trở nên lạnh cóng. 2) Diện tích bề mặt tăng hàng triệu lần làm tốc độ bay hơi tăng vọt $\\to$ làm mát da tức thì. 3) Khi xả áp đột ngột, nhiệt độ sôi giảm nhanh khiến nước trong nồi sôi mãnh liệt và trào ra chứ không đông đá. 4) Sấy thăng hoa tận dụng áp suất chân không dưới điểm ba ($611{,}65\\text{ Pa}$) để nước đá thăng hoa trực tiếp thành hơi, bảo toàn nguyên vẹn hình dạng, chất dinh dưỡng và màu sắc của thực phẩm."
        },
        {
            "id": "u1_tf_03",
            "conceptId": "c_u1_thuc_te_chuyen_the",
            "image": "images/three_states_matter.jpg",
            "type": "multi_tf",
            "level": "Vận dụng cao",
            "context": "Một nhóm học sinh lớp 12 thực hiện dự án nghiên cứu các hiện tượng biến đổi trạng thái của chất trong tự nhiên và công nghệ đời sống. Xét tính đúng/sai của các nhận định khoa học sau:",
            "statements": [
                {
                    "text": "Vào đầu mùa xuân khi băng tuyết tan, nhiệt độ không khí xung quanh thường cảm thấy lạnh buốt hơn cả khi tuyết đang rơi là do quá trình băng tan thu một nhiệt lượng lớn từ môi trường.",
                    "isCorrect": true
                },
                {
                    "text": "Bình xịt khoáng làm mát da hoạt động dựa trên nguyên lý: các hạt sương nước siêu mịn có tổng diện tích bề mặt rất lớn làm tốc độ bay hơi diễn ra cực nhanh, thu nhiệt từ da mặt.",
                    "isCorrect": true
                },
                {
                    "text": "Trong nồi áp suất đang sôi, nếu đột ngột mở van xả áp thật nhanh thì toàn bộ lượng nước trong nồi sẽ lập tức ngưng tụ thành đá do áp suất tụt giảm.",
                    "isCorrect": false
                },
                {
                    "text": "Trong phương pháp sấy thăng hoa (freeze-drying) chế biến thực phẩm cao cấp, nước trong thực phẩm được làm đông đá trước rồi giảm áp suất buồng sấy xuống dưới điểm ba của nước để đá thăng hoa thành hơi mà không bị nhão.",
                    "isCorrect": true
                }
            ],
            "explanation": "Tư duy nâng cao: 1) Nóng chảy là quá trình thu nhiệt $\\to$ không khí bị mất nhiệt trở nên lạnh cóng. 2) Diện tích bề mặt tăng hàng triệu lần làm tốc độ bay hơi tăng vọt $\\to$ làm mát da tức thì. 3) Khi xả áp đột ngột, nhiệt độ sôi giảm nhanh khiến nước trong nồi sôi mãnh liệt và trào ra chứ không đông đá. 4) Sấy thăng hoa tận dụng áp suất chân không dưới điểm ba ($611{,}65\\text{ Pa}$) để nước đá thăng hoa trực tiếp thành hơi, bảo toàn nguyên vẹn hình dạng, chất dinh dưỡng và màu sắc của thực phẩm."
        }
    ],
    "c_u2_chu_trinh_khi_kin_pv": [
        {
            "id": "clone_u2_mc_15_v1",
            "conceptId": "c_u2_chu_trinh_khi_kin_pv",
            "image": "images/isobaric_work_pv.jpg",
            "type": "multiple_choice",
            "level": "Vận dụng cao",
            "question": "[Vòng 2 Củng Cố] Một khối khí lý tưởng thực hiện một chu trình nhiệt động lực học kín $A \\to B \\to C \\to D \\to A$ biểu diễn trên đồ thị áp suất - thể tích ($p-V$). Kết luận nào sau đây về độ biến thiên nội năng $\\Delta U$ và công $A'$ mà khối khí sinh ra sau một chu trình kín là ĐÚNG?",
            "options": [
                "Sau chu trình kín, độ biến thiên nội năng $\\Delta U = 0$ và công khí sinh ra bằng diện tích hình khép kín $ABCD$ trên đồ thị $p-V$.",
                "Sau chu trình kín, độ biến thiên nội năng $\\Delta U > 0$ và công khí sinh ra luôn bằng 0 do khối khí trở về trạng thái áp suất ban đầu.",
                "Sau chu trình kín, độ biến thiên nội năng $\\Delta U < 0$ và công khí sinh ra tỷ lệ nghịch với nhiệt độ tuyệt đối của nguồn nóng động cơ.",
                "Sau chu trình kín, cả nội năng và công của khí đều tăng lên một lượng bằng đúng nhiệt lượng mà khí nhận từ nguồn lạnh bên ngoài."
            ],
            "correct": 0,
            "explanation": "Tư duy nâng cao: Nội năng của khí lý tưởng chỉ phụ thuộc vào nhiệt độ ($U = f(T)$). Sau một chu trình khép kín, khí trở về đúng trạng thái ban đầu ($T_A = T_{\\text{đầu}}$), do đó độ biến thiên nội năng $\\Delta U = 0$. Theo ĐL I: $\\Delta U = A + Q = 0 \\implies Q = -A = A'$. Công sinh ra $A'$ bằng hiệu diện tích đường dãn nở phía trên trừ diện tích đường nén phía dưới, chính là diện tích miền kín trên giản đồ $p-V$."
        },
        {
            "id": "clone_u2_mc_15_v2",
            "conceptId": "c_u2_chu_trinh_khi_kin_pv",
            "image": "images/isobaric_work_pv.jpg",
            "type": "multiple_choice",
            "level": "Vận dụng cao",
            "question": "[Đấu Trường Nâng Cao] Một khối khí lý tưởng thực hiện một chu trình nhiệt động lực học kín $A \\to B \\to C \\to D \\to A$ biểu diễn trên đồ thị áp suất - thể tích ($p-V$). Kết luận nào sau đây về độ biến thiên nội năng $\\Delta U$ và công $A'$ mà khối khí sinh ra sau một chu trình kín là ĐÚNG?",
            "options": [
                "Sau chu trình kín, độ biến thiên nội năng $\\Delta U = 0$ và công khí sinh ra bằng diện tích hình khép kín $ABCD$ trên đồ thị $p-V$.",
                "Sau chu trình kín, độ biến thiên nội năng $\\Delta U > 0$ và công khí sinh ra luôn bằng 0 do khối khí trở về trạng thái áp suất ban đầu.",
                "Sau chu trình kín, độ biến thiên nội năng $\\Delta U < 0$ và công khí sinh ra tỷ lệ nghịch với nhiệt độ tuyệt đối của nguồn nóng động cơ.",
                "Sau chu trình kín, cả nội năng và công của khí đều tăng lên một lượng bằng đúng nhiệt lượng mà khí nhận từ nguồn lạnh bên ngoài."
            ],
            "correct": 0,
            "explanation": "Tư duy nâng cao: Nội năng của khí lý tưởng chỉ phụ thuộc vào nhiệt độ ($U = f(T)$). Sau một chu trình khép kín, khí trở về đúng trạng thái ban đầu ($T_A = T_{\\text{đầu}}$), do đó độ biến thiên nội năng $\\Delta U = 0$. Theo ĐL I: $\\Delta U = A + Q = 0 \\implies Q = -A = A'$. Công sinh ra $A'$ bằng hiệu diện tích đường dãn nở phía trên trừ diện tích đường nén phía dưới, chính là diện tích miền kín trên giản đồ $p-V$."
        },
        {
            "id": "u2_mc_15",
            "conceptId": "c_u2_chu_trinh_khi_kin_pv",
            "image": "images/isobaric_work_pv.jpg",
            "type": "multiple_choice",
            "level": "Vận dụng cao",
            "question": "Một khối khí lý tưởng thực hiện một chu trình nhiệt động lực học kín $A \\to B \\to C \\to D \\to A$ biểu diễn trên đồ thị áp suất - thể tích ($p-V$). Kết luận nào sau đây về độ biến thiên nội năng $\\Delta U$ và công $A'$ mà khối khí sinh ra sau một chu trình kín là ĐÚNG?",
            "options": [
                "Sau chu trình kín, độ biến thiên nội năng $\\Delta U = 0$ và công khí sinh ra bằng diện tích hình khép kín $ABCD$ trên đồ thị $p-V$.",
                "Sau chu trình kín, độ biến thiên nội năng $\\Delta U > 0$ và công khí sinh ra luôn bằng 0 do khối khí trở về trạng thái áp suất ban đầu.",
                "Sau chu trình kín, độ biến thiên nội năng $\\Delta U < 0$ và công khí sinh ra tỷ lệ nghịch với nhiệt độ tuyệt đối của nguồn nóng động cơ.",
                "Sau chu trình kín, cả nội năng và công của khí đều tăng lên một lượng bằng đúng nhiệt lượng mà khí nhận từ nguồn lạnh bên ngoài."
            ],
            "correct": 0,
            "explanation": "Tư duy nâng cao: Nội năng của khí lý tưởng chỉ phụ thuộc vào nhiệt độ ($U = f(T)$). Sau một chu trình khép kín, khí trở về đúng trạng thái ban đầu ($T_A = T_{\\text{đầu}}$), do đó độ biến thiên nội năng $\\Delta U = 0$. Theo ĐL I: $\\Delta U = A + Q = 0 \\implies Q = -A = A'$. Công sinh ra $A'$ bằng hiệu diện tích đường dãn nở phía trên trừ diện tích đường nén phía dưới, chính là diện tích miền kín trên giản đồ $p-V$."
        }
    ],
    "c_u2_binh_cuu_hoa_co2": [
        {
            "id": "clone_u2_mc_16_v1",
            "conceptId": "c_u2_binh_cuu_hoa_co2",
            "image": "images/adiabatic_spray.jpg",
            "type": "multiple_choice",
            "level": "Vận dụng cao",
            "question": "[Vòng 2 Củng Cố] Khi sử dụng bình chữa cháy khí $\\text{CO}_2$ (khí carbon dioxide lỏng nén ở áp suất khoảng $60\\text{ atm}$), khi bóp cò xịt mạnh ra loa phun, người ta thấy xuất hiện đám tuyết trắng $\\text{CO}_2$ ở nhiệt độ cực lạnh khoảng $-79^\\circ\\text{C}$ và được khuyến cáo không chạm tay vào loa phun kẻo bị bỏng lạnh. Cơ chế nhiệt động lực học của hiện tượng này là gì?",
            "options": [
                "$\\text{CO}_2$ lỏng dãn nở đoạn nhiệt siêu nhanh sinh công rất lớn làm nội năng giảm đột ngột, nhiệt độ hạ sâu xuống $-79^\\circ\\text{C}$ tạo tuyết lạnh.",
                "$\\text{CO}_2$ lỏng phản ứng thu nhiệt tức thì với hơi nước trong không khí làm triệt tiêu toàn bộ nhiệt lượng của ngọn lửa xung quanh đám cháy.",
                "Loa phun của bình cứu hỏa được phủ một lớp hóa chất xúc tác làm lạnh siêu tốc hấp thụ toàn bộ năng lượng của dòng khí $\\text{CO}_2$ phun ra.",
                "$\\text{CO}_2$ bị nén thêm một lần nữa khi đi qua họng loa hẹp làm thể tích giảm mạnh khiến nhiệt độ khối khí giảm sâu thành thể rắn."
            ],
            "correct": 0,
            "explanation": "Tư duy nâng cao: Đây là quá trình dãn nở đoạn nhiệt ($Q \\approx 0$) vì khí phụt ra trong thời gian phần trăm giây, nhiệt lượng chưa kịp trao đổi với môi trường. Khối khí nén thể tích tăng mạnh, sinh công lớn $A' > 0$ (tức hệ nhận công $A < 0$). Theo ĐL I: $\\Delta U = A + Q = A < 0$. Nội năng khối khí giảm đột ngột, nhiệt độ giảm xuống $-79^\\circ\\text{C}$ khiến khí ngưng kết thành tinh thể tuyết $\\text{CO}_2$ gây nguy cơ bỏng lạnh nếu chạm vào loa kim loại."
        },
        {
            "id": "clone_u2_mc_16_v2",
            "conceptId": "c_u2_binh_cuu_hoa_co2",
            "image": "images/adiabatic_spray.jpg",
            "type": "multiple_choice",
            "level": "Vận dụng cao",
            "question": "[Đấu Trường Nâng Cao] Khi sử dụng bình chữa cháy khí $\\text{CO}_2$ (khí carbon dioxide lỏng nén ở áp suất khoảng $60\\text{ atm}$), khi bóp cò xịt mạnh ra loa phun, người ta thấy xuất hiện đám tuyết trắng $\\text{CO}_2$ ở nhiệt độ cực lạnh khoảng $-79^\\circ\\text{C}$ và được khuyến cáo không chạm tay vào loa phun kẻo bị bỏng lạnh. Cơ chế nhiệt động lực học của hiện tượng này là gì?",
            "options": [
                "$\\text{CO}_2$ lỏng dãn nở đoạn nhiệt siêu nhanh sinh công rất lớn làm nội năng giảm đột ngột, nhiệt độ hạ sâu xuống $-79^\\circ\\text{C}$ tạo tuyết lạnh.",
                "$\\text{CO}_2$ lỏng phản ứng thu nhiệt tức thì với hơi nước trong không khí làm triệt tiêu toàn bộ nhiệt lượng của ngọn lửa xung quanh đám cháy.",
                "Loa phun của bình cứu hỏa được phủ một lớp hóa chất xúc tác làm lạnh siêu tốc hấp thụ toàn bộ năng lượng của dòng khí $\\text{CO}_2$ phun ra.",
                "$\\text{CO}_2$ bị nén thêm một lần nữa khi đi qua họng loa hẹp làm thể tích giảm mạnh khiến nhiệt độ khối khí giảm sâu thành thể rắn."
            ],
            "correct": 0,
            "explanation": "Tư duy nâng cao: Đây là quá trình dãn nở đoạn nhiệt ($Q \\approx 0$) vì khí phụt ra trong thời gian phần trăm giây, nhiệt lượng chưa kịp trao đổi với môi trường. Khối khí nén thể tích tăng mạnh, sinh công lớn $A' > 0$ (tức hệ nhận công $A < 0$). Theo ĐL I: $\\Delta U = A + Q = A < 0$. Nội năng khối khí giảm đột ngột, nhiệt độ giảm xuống $-79^\\circ\\text{C}$ khiến khí ngưng kết thành tinh thể tuyết $\\text{CO}_2$ gây nguy cơ bỏng lạnh nếu chạm vào loa kim loại."
        },
        {
            "id": "u2_mc_16",
            "conceptId": "c_u2_binh_cuu_hoa_co2",
            "image": "images/adiabatic_spray.jpg",
            "type": "multiple_choice",
            "level": "Vận dụng cao",
            "question": "Khi sử dụng bình chữa cháy khí $\\text{CO}_2$ (khí carbon dioxide lỏng nén ở áp suất khoảng $60\\text{ atm}$), khi bóp cò xịt mạnh ra loa phun, người ta thấy xuất hiện đám tuyết trắng $\\text{CO}_2$ ở nhiệt độ cực lạnh khoảng $-79^\\circ\\text{C}$ và được khuyến cáo không chạm tay vào loa phun kẻo bị bỏng lạnh. Cơ chế nhiệt động lực học của hiện tượng này là gì?",
            "options": [
                "$\\text{CO}_2$ lỏng dãn nở đoạn nhiệt siêu nhanh sinh công rất lớn làm nội năng giảm đột ngột, nhiệt độ hạ sâu xuống $-79^\\circ\\text{C}$ tạo tuyết lạnh.",
                "$\\text{CO}_2$ lỏng phản ứng thu nhiệt tức thì với hơi nước trong không khí làm triệt tiêu toàn bộ nhiệt lượng của ngọn lửa xung quanh đám cháy.",
                "Loa phun của bình cứu hỏa được phủ một lớp hóa chất xúc tác làm lạnh siêu tốc hấp thụ toàn bộ năng lượng của dòng khí $\\text{CO}_2$ phun ra.",
                "$\\text{CO}_2$ bị nén thêm một lần nữa khi đi qua họng loa hẹp làm thể tích giảm mạnh khiến nhiệt độ khối khí giảm sâu thành thể rắn."
            ],
            "correct": 0,
            "explanation": "Tư duy nâng cao: Đây là quá trình dãn nở đoạn nhiệt ($Q \\approx 0$) vì khí phụt ra trong thời gian phần trăm giây, nhiệt lượng chưa kịp trao đổi với môi trường. Khối khí nén thể tích tăng mạnh, sinh công lớn $A' > 0$ (tức hệ nhận công $A < 0$). Theo ĐL I: $\\Delta U = A + Q = A < 0$. Nội năng khối khí giảm đột ngột, nhiệt độ giảm xuống $-79^\\circ\\text{C}$ khiến khí ngưng kết thành tinh thể tuyết $\\text{CO}_2$ gây nguy cơ bỏng lạnh nếu chạm vào loa kim loại."
        }
    ],
    "c_u2_no_lop_xe_mua_he": [
        {
            "id": "clone_u2_mc_17_v1",
            "conceptId": "c_u2_no_lop_xe_mua_he",
            "image": "images/bicycle_pump_heating.jpg",
            "type": "multiple_choice",
            "level": "Vận dụng cao",
            "question": "[Vòng 2 Củng Cố] Vào những ngày hè nắng gắt với nhiệt độ mặt đường nhựa lên tới $60^\\circ\\text{C}$, xe tải nặng chạy đường dài với tốc độ cao thường có nguy cơ nổ lốp rất lớn nếu lốp đã được bơm quá căng từ trước. Phân tích quá trình biến đổi nội năng của khối khí trong lốp xe theo Định luật I nhiệt động lực học:",
            "options": [
                "Lốp xe hấp thụ nhiệt từ mặt đường làm thể tích lốp dãn nở gấp nhiều lần khiến cao su bị kéo căng vượt quá giới hạn đàn hồi rồi phát nổ.",
                "Khối khí nhận nhiệt lượng ($Q > 0$) từ mặt đường nóng và nhận công ($A > 0$) do bánh xe biến dạng liên tục, làm nội năng và áp suất tăng vượt giới hạn bền.",
                "Mặt đường nhựa nóng làm bốc hơi toàn bộ khí bên trong lốp tạo thành chân không làm lốp bị áp suất khí quyển ép bẹp dẫn tới nổ mạnh.",
                "Ma sát giữa lốp và mặt đường sinh ra dòng điện tích tĩnh điện phóng tia lửa làm cháy hỗn hợp không khí bên trong lốp gây nổ áp suất."
            ],
            "correct": 1,
            "explanation": "Tư duy nâng cao: Bánh xe lăn chịu tải trọng lớn liên tục biến dạng cơ học, công ma sát giữa lốp và mặt đường cũng như nội ma sát cao su chuyển hóa thành nội năng ($A > 0$). Đồng thời mặt đường $60^\\circ\\text{C}$ truyền nhiệt lượng lớn vào lốp ($Q > 0$). Theo ĐL I: $\\Delta U = A + Q > 0$ khiến nội năng và nhiệt độ khối khí tăng vọt. Vì thể tích lốp gần như cố định ($V \\approx \\text{const}$), theo định luật Charles áp suất $p$ tỉ lệ thuận với nhiệt độ tuyệt đối $T$, áp suất tăng vượt quá độ bền cơ học của thành lốp dẫn đến nổ lốp."
        },
        {
            "id": "clone_u2_mc_17_v2",
            "conceptId": "c_u2_no_lop_xe_mua_he",
            "image": "images/bicycle_pump_heating.jpg",
            "type": "multiple_choice",
            "level": "Vận dụng cao",
            "question": "[Đấu Trường Nâng Cao] Vào những ngày hè nắng gắt với nhiệt độ mặt đường nhựa lên tới $60^\\circ\\text{C}$, xe tải nặng chạy đường dài với tốc độ cao thường có nguy cơ nổ lốp rất lớn nếu lốp đã được bơm quá căng từ trước. Phân tích quá trình biến đổi nội năng của khối khí trong lốp xe theo Định luật I nhiệt động lực học:",
            "options": [
                "Lốp xe hấp thụ nhiệt từ mặt đường làm thể tích lốp dãn nở gấp nhiều lần khiến cao su bị kéo căng vượt quá giới hạn đàn hồi rồi phát nổ.",
                "Khối khí nhận nhiệt lượng ($Q > 0$) từ mặt đường nóng và nhận công ($A > 0$) do bánh xe biến dạng liên tục, làm nội năng và áp suất tăng vượt giới hạn bền.",
                "Mặt đường nhựa nóng làm bốc hơi toàn bộ khí bên trong lốp tạo thành chân không làm lốp bị áp suất khí quyển ép bẹp dẫn tới nổ mạnh.",
                "Ma sát giữa lốp và mặt đường sinh ra dòng điện tích tĩnh điện phóng tia lửa làm cháy hỗn hợp không khí bên trong lốp gây nổ áp suất."
            ],
            "correct": 1,
            "explanation": "Tư duy nâng cao: Bánh xe lăn chịu tải trọng lớn liên tục biến dạng cơ học, công ma sát giữa lốp và mặt đường cũng như nội ma sát cao su chuyển hóa thành nội năng ($A > 0$). Đồng thời mặt đường $60^\\circ\\text{C}$ truyền nhiệt lượng lớn vào lốp ($Q > 0$). Theo ĐL I: $\\Delta U = A + Q > 0$ khiến nội năng và nhiệt độ khối khí tăng vọt. Vì thể tích lốp gần như cố định ($V \\approx \\text{const}$), theo định luật Charles áp suất $p$ tỉ lệ thuận với nhiệt độ tuyệt đối $T$, áp suất tăng vượt quá độ bền cơ học của thành lốp dẫn đến nổ lốp."
        },
        {
            "id": "u2_mc_17",
            "conceptId": "c_u2_no_lop_xe_mua_he",
            "image": "images/bicycle_pump_heating.jpg",
            "type": "multiple_choice",
            "level": "Vận dụng cao",
            "question": "Vào những ngày hè nắng gắt với nhiệt độ mặt đường nhựa lên tới $60^\\circ\\text{C}$, xe tải nặng chạy đường dài với tốc độ cao thường có nguy cơ nổ lốp rất lớn nếu lốp đã được bơm quá căng từ trước. Phân tích quá trình biến đổi nội năng của khối khí trong lốp xe theo Định luật I nhiệt động lực học:",
            "options": [
                "Lốp xe hấp thụ nhiệt từ mặt đường làm thể tích lốp dãn nở gấp nhiều lần khiến cao su bị kéo căng vượt quá giới hạn đàn hồi rồi phát nổ.",
                "Khối khí nhận nhiệt lượng ($Q > 0$) từ mặt đường nóng và nhận công ($A > 0$) do bánh xe biến dạng liên tục, làm nội năng và áp suất tăng vượt giới hạn bền.",
                "Mặt đường nhựa nóng làm bốc hơi toàn bộ khí bên trong lốp tạo thành chân không làm lốp bị áp suất khí quyển ép bẹp dẫn tới nổ mạnh.",
                "Ma sát giữa lốp và mặt đường sinh ra dòng điện tích tĩnh điện phóng tia lửa làm cháy hỗn hợp không khí bên trong lốp gây nổ áp suất."
            ],
            "correct": 1,
            "explanation": "Tư duy nâng cao: Bánh xe lăn chịu tải trọng lớn liên tục biến dạng cơ học, công ma sát giữa lốp và mặt đường cũng như nội ma sát cao su chuyển hóa thành nội năng ($A > 0$). Đồng thời mặt đường $60^\\circ\\text{C}$ truyền nhiệt lượng lớn vào lốp ($Q > 0$). Theo ĐL I: $\\Delta U = A + Q > 0$ khiến nội năng và nhiệt độ khối khí tăng vọt. Vì thể tích lốp gần như cố định ($V \\approx \\text{const}$), theo định luật Charles áp suất $p$ tỉ lệ thuận với nhiệt độ tuyệt đối $T$, áp suất tăng vượt quá độ bền cơ học của thành lốp dẫn đến nổ lốp."
        }
    ],
    "c_u2_tinh_toan_piston_2_giai_doan": [
        {
            "id": "clone_u2_mc_18_v1",
            "conceptId": "c_u2_tinh_toan_piston_2_giai_doan",
            "image": "images/dl1_thermodynamics_piston.jpg",
            "type": "multiple_choice",
            "level": "Vận dụng cao",
            "question": "[Vòng 2 Củng Cố] Một khối khí chứa trong xi lanh có pít-tông di động trải qua hai giai đoạn biến đổi liên tiếp: Giai đoạn 1: Khí nhận nhiệt lượng $600\\text{ J}$ và bị lực bên ngoài nén lại với một công $250\\text{ J}$. Giai đoạn 2: Khí dãn nở sinh công $400\\text{ J}$ đẩy pít-tông ra ngoài và tỏa nhiệt $150\\text{ J}$ ra môi trường. Độ biến thiên nội năng tổng cộng $\\Delta U$ của khối khí sau cả hai giai đoạn là",
            "options": [
                "$\\Delta U = +300\\text{ J}$",
                "$\\Delta U = -100\\text{ J}$",
                "$\\Delta U = +850\\text{ J}$",
                "$\\Delta U = +500\\text{ J}$"
            ],
            "correct": 0,
            "explanation": "Tư duy nâng cao: Áp dụng quy ước dấu ĐL I cho từng đại lượng tổng cộng: Tổng nhiệt lượng hệ nhận: $Q = Q_1 + Q_2 = (+600) + (-150) = +450\\text{ J}$. Tổng công hệ nhận: $A = A_1 + A_2 = (+250) + (-400) = -150\\text{ J}$ (vì dãn nở sinh công $400\\text{ J}$ nên $A_2 = -400\\text{ J}$). Độ biến thiên nội năng tổng cộng: $\\Delta U = A + Q = -150 + 450 = +300\\text{ J}$ (nội năng của khối khí tăng thêm $300\\text{ J}$)."
        },
        {
            "id": "clone_u2_mc_18_v2",
            "conceptId": "c_u2_tinh_toan_piston_2_giai_doan",
            "image": "images/dl1_thermodynamics_piston.jpg",
            "type": "multiple_choice",
            "level": "Vận dụng cao",
            "question": "[Đấu Trường Nâng Cao] Một khối khí chứa trong xi lanh có pít-tông di động trải qua hai giai đoạn biến đổi liên tiếp: Giai đoạn 1: Khí nhận nhiệt lượng $600\\text{ J}$ và bị lực bên ngoài nén lại với một công $250\\text{ J}$. Giai đoạn 2: Khí dãn nở sinh công $400\\text{ J}$ đẩy pít-tông ra ngoài và tỏa nhiệt $150\\text{ J}$ ra môi trường. Độ biến thiên nội năng tổng cộng $\\Delta U$ của khối khí sau cả hai giai đoạn là",
            "options": [
                "$\\Delta U = +300\\text{ J}$",
                "$\\Delta U = -100\\text{ J}$",
                "$\\Delta U = +850\\text{ J}$",
                "$\\Delta U = +500\\text{ J}$"
            ],
            "correct": 0,
            "explanation": "Tư duy nâng cao: Áp dụng quy ước dấu ĐL I cho từng đại lượng tổng cộng: Tổng nhiệt lượng hệ nhận: $Q = Q_1 + Q_2 = (+600) + (-150) = +450\\text{ J}$. Tổng công hệ nhận: $A = A_1 + A_2 = (+250) + (-400) = -150\\text{ J}$ (vì dãn nở sinh công $400\\text{ J}$ nên $A_2 = -400\\text{ J}$). Độ biến thiên nội năng tổng cộng: $\\Delta U = A + Q = -150 + 450 = +300\\text{ J}$ (nội năng của khối khí tăng thêm $300\\text{ J}$)."
        },
        {
            "id": "u2_mc_18",
            "conceptId": "c_u2_tinh_toan_piston_2_giai_doan",
            "image": "images/dl1_thermodynamics_piston.jpg",
            "type": "multiple_choice",
            "level": "Vận dụng cao",
            "question": "Một khối khí chứa trong xi lanh có pít-tông di động trải qua hai giai đoạn biến đổi liên tiếp: Giai đoạn 1: Khí nhận nhiệt lượng $600\\text{ J}$ và bị lực bên ngoài nén lại với một công $250\\text{ J}$. Giai đoạn 2: Khí dãn nở sinh công $400\\text{ J}$ đẩy pít-tông ra ngoài và tỏa nhiệt $150\\text{ J}$ ra môi trường. Độ biến thiên nội năng tổng cộng $\\Delta U$ của khối khí sau cả hai giai đoạn là",
            "options": [
                "$\\Delta U = +300\\text{ J}$",
                "$\\Delta U = -100\\text{ J}$",
                "$\\Delta U = +850\\text{ J}$",
                "$\\Delta U = +500\\text{ J}$"
            ],
            "correct": 0,
            "explanation": "Tư duy nâng cao: Áp dụng quy ước dấu ĐL I cho từng đại lượng tổng cộng: Tổng nhiệt lượng hệ nhận: $Q = Q_1 + Q_2 = (+600) + (-150) = +450\\text{ J}$. Tổng công hệ nhận: $A = A_1 + A_2 = (+250) + (-400) = -150\\text{ J}$ (vì dãn nở sinh công $400\\text{ J}$ nên $A_2 = -400\\text{ J}$). Độ biến thiên nội năng tổng cộng: $\\Delta U = A + Q = -150 + 450 = +300\\text{ J}$ (nội năng của khối khí tăng thêm $300\\text{ J}$)."
        }
    ],
    "c_u2_hieu_suat_dong_co_carnot": [
        {
            "id": "clone_u2_mc_19_v1",
            "conceptId": "c_u2_hieu_suat_dong_co_carnot",
            "image": "images/heat_engine_principle.jpg",
            "type": "multiple_choice",
            "level": "Vận dụng cao",
            "question": "[Vòng 2 Củng Cố] Một động cơ nhiệt lý tưởng trong mỗi chu trình hoạt động nhận nhiệt lượng $Q_1 = 4000\\text{ J}$ từ nguồn nóng và thực hiện một công cơ học có ích $A' = 1200\\text{ J}$. Nhiệt lượng $Q_2$ mà động cơ thải cho nguồn lạnh và hiệu suất $H$ của động cơ này là",
            "options": [
                "$Q_2 = 2800\\text{ J}$ và $H = 30\\%$",
                "$Q_2 = 5200\\text{ J}$ và $H = 40\\%$",
                "$Q_2 = 2800\\text{ J}$ và $H = 70\\%$",
                "$Q_2 = 1200\\text{ J}$ và $H = 30\\%$"
            ],
            "correct": 0,
            "explanation": "Tư duy nâng cao: Theo định luật bảo toàn năng lượng trong một chu trình kín: $Q_1 = A' + Q_2 \\implies Q_2 = Q_1 - A' = 4000 - 1200 = 2800\\text{ J}$ (động cơ bắt buộc phải xả $2800\\text{ J}$ nhiệt lượng ra nguồn lạnh). Hiệu suất nhiệt của động cơ: $H = \\frac{A'}{Q_1} = \\frac{1200}{4000} = 0{,}30 = 30\\%$."
        },
        {
            "id": "clone_u2_mc_19_v2",
            "conceptId": "c_u2_hieu_suat_dong_co_carnot",
            "image": "images/heat_engine_principle.jpg",
            "type": "multiple_choice",
            "level": "Vận dụng cao",
            "question": "[Đấu Trường Nâng Cao] Một động cơ nhiệt lý tưởng trong mỗi chu trình hoạt động nhận nhiệt lượng $Q_1 = 4000\\text{ J}$ từ nguồn nóng và thực hiện một công cơ học có ích $A' = 1200\\text{ J}$. Nhiệt lượng $Q_2$ mà động cơ thải cho nguồn lạnh và hiệu suất $H$ của động cơ này là",
            "options": [
                "$Q_2 = 2800\\text{ J}$ và $H = 30\\%$",
                "$Q_2 = 5200\\text{ J}$ và $H = 40\\%$",
                "$Q_2 = 2800\\text{ J}$ và $H = 70\\%$",
                "$Q_2 = 1200\\text{ J}$ và $H = 30\\%$"
            ],
            "correct": 0,
            "explanation": "Tư duy nâng cao: Theo định luật bảo toàn năng lượng trong một chu trình kín: $Q_1 = A' + Q_2 \\implies Q_2 = Q_1 - A' = 4000 - 1200 = 2800\\text{ J}$ (động cơ bắt buộc phải xả $2800\\text{ J}$ nhiệt lượng ra nguồn lạnh). Hiệu suất nhiệt của động cơ: $H = \\frac{A'}{Q_1} = \\frac{1200}{4000} = 0{,}30 = 30\\%$."
        },
        {
            "id": "u2_mc_19",
            "conceptId": "c_u2_hieu_suat_dong_co_carnot",
            "image": "images/heat_engine_principle.jpg",
            "type": "multiple_choice",
            "level": "Vận dụng cao",
            "question": "Một động cơ nhiệt lý tưởng trong mỗi chu trình hoạt động nhận nhiệt lượng $Q_1 = 4000\\text{ J}$ từ nguồn nóng và thực hiện một công cơ học có ích $A' = 1200\\text{ J}$. Nhiệt lượng $Q_2$ mà động cơ thải cho nguồn lạnh và hiệu suất $H$ của động cơ này là",
            "options": [
                "$Q_2 = 2800\\text{ J}$ và $H = 30\\%$",
                "$Q_2 = 5200\\text{ J}$ và $H = 40\\%$",
                "$Q_2 = 2800\\text{ J}$ và $H = 70\\%$",
                "$Q_2 = 1200\\text{ J}$ và $H = 30\\%$"
            ],
            "correct": 0,
            "explanation": "Tư duy nâng cao: Theo định luật bảo toàn năng lượng trong một chu trình kín: $Q_1 = A' + Q_2 \\implies Q_2 = Q_1 - A' = 4000 - 1200 = 2800\\text{ J}$ (động cơ bắt buộc phải xả $2800\\text{ J}$ nhiệt lượng ra nguồn lạnh). Hiệu suất nhiệt của động cơ: $H = \\frac{A'}{Q_1} = \\frac{1200}{4000} = 0{,}30 = 30\\%$."
        }
    ],
    "c_u2_thuc_te_tu_lanh_dieu_hoa": [
        {
            "id": "clone_u2_tf_03_v1",
            "conceptId": "c_u2_thuc_te_tu_lanh_dieu_hoa",
            "image": "images/heat_engine_principle.jpg",
            "type": "multi_tf",
            "level": "Vận dụng cao",
            "context": "[Vòng 2 Củng Cố] Xét chu trình nhiệt động học khép kín của một máy điều hòa không khí hai chiều (hoặc tủ lạnh gia đình) sử dụng môi chất gas lạnh tuần hoàn. Xét tính đúng/sai của các nhận định nhiệt học sau:",
            "statements": [
                {
                    "text": "Máy điều hòa hoạt động bằng cách cưỡng bức nhiệt lượng truyền từ nơi có nhiệt độ thấp (trong phòng) sang nơi có nhiệt độ cao (ngoài trời), điều này không vi phạm ĐL II vì hệ có nhận công cơ học từ máy nén điện.",
                    "isCorrect": true
                },
                {
                    "text": "Tại dàn nóng đặt ngoài trời, môi chất khí áp suất cao tỏa nhiệt lượng ra không khí và ngưng tụ chuyển thành thể lỏng.",
                    "isCorrect": true
                },
                {
                    "text": "Nếu mở toang cửa tủ lạnh liên tục trong một căn phòng kín cách nhiệt hoàn toàn, nhiệt độ trong phòng sau vài giờ sẽ giảm xuống như một chiếc máy lạnh.",
                    "isCorrect": false
                },
                {
                    "text": "Tại van tiết lưu, môi chất lỏng áp suất cao giảm áp đột ngột làm dãn nở sinh công và tụt giảm nhiệt độ sâu trước khi vào dàn lạnh.",
                    "isCorrect": true
                }
            ],
            "explanation": "Tư duy nâng cao: 1) Theo ĐL II, nhiệt không thể tự phát truyền từ lạnh sang nóng, nhưng hoàn toàn có thể truyền được nếu có hệ tiêu thụ công (máy nén nhận điện năng). 2) Dàn nóng ngưng tụ tỏa nhiệt $Q_1$ ra môi trường. 3) Mở cửa tủ lạnh trong phòng kín thì căn phòng đóng vai trò cả nguồn lạnh và nguồn nóng; do động cơ tủ lạnh tiêu thụ điện năng $A$ nên tổng nhiệt tỏa ra môi trường là $Q_{\\text{tỏa}} = Q_{\\text{thu}} + A > Q_{\\text{thu}}$, phòng sẽ bị nóng lên chứ không mát đi! 4) Van tiết lưu hạ áp đột ngột tạo hiệu ứng làm lạnh sâu đưa gas lạnh vào dàn lạnh hấp thụ nhiệt phòng."
        },
        {
            "id": "clone_u2_tf_03_v2",
            "conceptId": "c_u2_thuc_te_tu_lanh_dieu_hoa",
            "image": "images/heat_engine_principle.jpg",
            "type": "multi_tf",
            "level": "Vận dụng cao",
            "context": "[Đấu Trường Nâng Cao] Xét chu trình nhiệt động học khép kín của một máy điều hòa không khí hai chiều (hoặc tủ lạnh gia đình) sử dụng môi chất gas lạnh tuần hoàn. Xét tính đúng/sai của các nhận định nhiệt học sau:",
            "statements": [
                {
                    "text": "Máy điều hòa hoạt động bằng cách cưỡng bức nhiệt lượng truyền từ nơi có nhiệt độ thấp (trong phòng) sang nơi có nhiệt độ cao (ngoài trời), điều này không vi phạm ĐL II vì hệ có nhận công cơ học từ máy nén điện.",
                    "isCorrect": true
                },
                {
                    "text": "Tại dàn nóng đặt ngoài trời, môi chất khí áp suất cao tỏa nhiệt lượng ra không khí và ngưng tụ chuyển thành thể lỏng.",
                    "isCorrect": true
                },
                {
                    "text": "Nếu mở toang cửa tủ lạnh liên tục trong một căn phòng kín cách nhiệt hoàn toàn, nhiệt độ trong phòng sau vài giờ sẽ giảm xuống như một chiếc máy lạnh.",
                    "isCorrect": false
                },
                {
                    "text": "Tại van tiết lưu, môi chất lỏng áp suất cao giảm áp đột ngột làm dãn nở sinh công và tụt giảm nhiệt độ sâu trước khi vào dàn lạnh.",
                    "isCorrect": true
                }
            ],
            "explanation": "Tư duy nâng cao: 1) Theo ĐL II, nhiệt không thể tự phát truyền từ lạnh sang nóng, nhưng hoàn toàn có thể truyền được nếu có hệ tiêu thụ công (máy nén nhận điện năng). 2) Dàn nóng ngưng tụ tỏa nhiệt $Q_1$ ra môi trường. 3) Mở cửa tủ lạnh trong phòng kín thì căn phòng đóng vai trò cả nguồn lạnh và nguồn nóng; do động cơ tủ lạnh tiêu thụ điện năng $A$ nên tổng nhiệt tỏa ra môi trường là $Q_{\\text{tỏa}} = Q_{\\text{thu}} + A > Q_{\\text{thu}}$, phòng sẽ bị nóng lên chứ không mát đi! 4) Van tiết lưu hạ áp đột ngột tạo hiệu ứng làm lạnh sâu đưa gas lạnh vào dàn lạnh hấp thụ nhiệt phòng."
        },
        {
            "id": "u2_tf_03",
            "conceptId": "c_u2_thuc_te_tu_lanh_dieu_hoa",
            "image": "images/heat_engine_principle.jpg",
            "type": "multi_tf",
            "level": "Vận dụng cao",
            "context": "Xét chu trình nhiệt động học khép kín của một máy điều hòa không khí hai chiều (hoặc tủ lạnh gia đình) sử dụng môi chất gas lạnh tuần hoàn. Xét tính đúng/sai của các nhận định nhiệt học sau:",
            "statements": [
                {
                    "text": "Máy điều hòa hoạt động bằng cách cưỡng bức nhiệt lượng truyền từ nơi có nhiệt độ thấp (trong phòng) sang nơi có nhiệt độ cao (ngoài trời), điều này không vi phạm ĐL II vì hệ có nhận công cơ học từ máy nén điện.",
                    "isCorrect": true
                },
                {
                    "text": "Tại dàn nóng đặt ngoài trời, môi chất khí áp suất cao tỏa nhiệt lượng ra không khí và ngưng tụ chuyển thành thể lỏng.",
                    "isCorrect": true
                },
                {
                    "text": "Nếu mở toang cửa tủ lạnh liên tục trong một căn phòng kín cách nhiệt hoàn toàn, nhiệt độ trong phòng sau vài giờ sẽ giảm xuống như một chiếc máy lạnh.",
                    "isCorrect": false
                },
                {
                    "text": "Tại van tiết lưu, môi chất lỏng áp suất cao giảm áp đột ngột làm dãn nở sinh công và tụt giảm nhiệt độ sâu trước khi vào dàn lạnh.",
                    "isCorrect": true
                }
            ],
            "explanation": "Tư duy nâng cao: 1) Theo ĐL II, nhiệt không thể tự phát truyền từ lạnh sang nóng, nhưng hoàn toàn có thể truyền được nếu có hệ tiêu thụ công (máy nén nhận điện năng). 2) Dàn nóng ngưng tụ tỏa nhiệt $Q_1$ ra môi trường. 3) Mở cửa tủ lạnh trong phòng kín thì căn phòng đóng vai trò cả nguồn lạnh và nguồn nóng; do động cơ tủ lạnh tiêu thụ điện năng $A$ nên tổng nhiệt tỏa ra môi trường là $Q_{\\text{tỏa}} = Q_{\\text{thu}} + A > Q_{\\text{thu}}$, phòng sẽ bị nóng lên chứ không mát đi! 4) Van tiết lưu hạ áp đột ngột tạo hiệu ứng làm lạnh sâu đưa gas lạnh vào dàn lạnh hấp thụ nhiệt phòng."
        }
    ],
    "c_u3_trung_phung_celsius_fahrenheit": [
        {
            "id": "clone_u3_mc_15_v1",
            "conceptId": "c_u3_trung_phung_celsius_fahrenheit",
            "image": "images/three_temperature_scales.jpg",
            "type": "multiple_choice",
            "level": "Vận dụng cao",
            "question": "[Vòng 2 Củng Cố] Trong khoa học đo lường nhiệt độ, có một giá trị nhiệt độ mà số chỉ trên thang đo Fahrenheit ($t^\\circ\\text{F}$) gấp đúng 2 lần số chỉ trên thang đo Celsius ($t^\\circ\\text{C}$). Giá trị nhiệt độ đó bằng bao nhiêu độ Celsius?",
            "options": [
                "$t = 80^\\circ\\text{C}$",
                "$t = 160^\\circ\\text{C}$",
                "$t = 320^\\circ\\text{C}$",
                "$t = -40^\\circ\\text{C}$"
            ],
            "correct": 1,
            "explanation": "Tư duy nâng cao: Ta có mối quan hệ giữa thang Fahrenheit và Celsius: $t^\\circ\\text{F} = 1{,}8 \\cdot t^\\circ\\text{C} + 32$. Theo đề bài $t^\\circ\\text{F} = 2 \\cdot t^\\circ\\text{C}$, ta lập phương trình: $2 \\cdot t^\\circ\\text{C} = 1{,}8 \\cdot t^\\circ\\text{C} + 32 \\iff 0{,}2 \\cdot t^\\circ\\text{C} = 32 \\iff t^\\circ\\text{C} = \\frac{32}{0{,}2} = 160^\\circ\\text{C}$. (Khi đó $t^\\circ\\text{F} = 320^\\circ\\text{F} = 2 \\times 160$). Lưu ý: ở $-40^\\circ\\text{C}$, hai thang bằng nhau: $-40^\\circ\\text{C} = -40^\\circ\\text{F}$."
        },
        {
            "id": "clone_u3_mc_15_v2",
            "conceptId": "c_u3_trung_phung_celsius_fahrenheit",
            "image": "images/three_temperature_scales.jpg",
            "type": "multiple_choice",
            "level": "Vận dụng cao",
            "question": "[Đấu Trường Nâng Cao] Trong khoa học đo lường nhiệt độ, có một giá trị nhiệt độ mà số chỉ trên thang đo Fahrenheit ($t^\\circ\\text{F}$) gấp đúng 2 lần số chỉ trên thang đo Celsius ($t^\\circ\\text{C}$). Giá trị nhiệt độ đó bằng bao nhiêu độ Celsius?",
            "options": [
                "$t = 80^\\circ\\text{C}$",
                "$t = 160^\\circ\\text{C}$",
                "$t = 320^\\circ\\text{C}$",
                "$t = -40^\\circ\\text{C}$"
            ],
            "correct": 1,
            "explanation": "Tư duy nâng cao: Ta có mối quan hệ giữa thang Fahrenheit và Celsius: $t^\\circ\\text{F} = 1{,}8 \\cdot t^\\circ\\text{C} + 32$. Theo đề bài $t^\\circ\\text{F} = 2 \\cdot t^\\circ\\text{C}$, ta lập phương trình: $2 \\cdot t^\\circ\\text{C} = 1{,}8 \\cdot t^\\circ\\text{C} + 32 \\iff 0{,}2 \\cdot t^\\circ\\text{C} = 32 \\iff t^\\circ\\text{C} = \\frac{32}{0{,}2} = 160^\\circ\\text{C}$. (Khi đó $t^\\circ\\text{F} = 320^\\circ\\text{F} = 2 \\times 160$). Lưu ý: ở $-40^\\circ\\text{C}$, hai thang bằng nhau: $-40^\\circ\\text{C} = -40^\\circ\\text{F}$."
        },
        {
            "id": "u3_mc_15",
            "conceptId": "c_u3_trung_phung_celsius_fahrenheit",
            "image": "images/three_temperature_scales.jpg",
            "type": "multiple_choice",
            "level": "Vận dụng cao",
            "question": "Trong khoa học đo lường nhiệt độ, có một giá trị nhiệt độ mà số chỉ trên thang đo Fahrenheit ($t^\\circ\\text{F}$) gấp đúng 2 lần số chỉ trên thang đo Celsius ($t^\\circ\\text{C}$). Giá trị nhiệt độ đó bằng bao nhiêu độ Celsius?",
            "options": [
                "$t = 80^\\circ\\text{C}$",
                "$t = 160^\\circ\\text{C}$",
                "$t = 320^\\circ\\text{C}$",
                "$t = -40^\\circ\\text{C}$"
            ],
            "correct": 1,
            "explanation": "Tư duy nâng cao: Ta có mối quan hệ giữa thang Fahrenheit và Celsius: $t^\\circ\\text{F} = 1{,}8 \\cdot t^\\circ\\text{C} + 32$. Theo đề bài $t^\\circ\\text{F} = 2 \\cdot t^\\circ\\text{C}$, ta lập phương trình: $2 \\cdot t^\\circ\\text{C} = 1{,}8 \\cdot t^\\circ\\text{C} + 32 \\iff 0{,}2 \\cdot t^\\circ\\text{C} = 32 \\iff t^\\circ\\text{C} = \\frac{32}{0{,}2} = 160^\\circ\\text{C}$. (Khi đó $t^\\circ\\text{F} = 320^\\circ\\text{F} = 2 \\times 160$). Lưu ý: ở $-40^\\circ\\text{C}$, hai thang bằng nhau: $-40^\\circ\\text{C} = -40^\\circ\\text{F}$."
        }
    ],
    "c_u3_quan_tinh_nhiet_ke_hong_ngoai": [
        {
            "id": "clone_u3_mc_16_v1",
            "conceptId": "c_u3_quan_tinh_nhiet_ke_hong_ngoai",
            "image": "images/thermometer_types.jpg",
            "type": "multiple_choice",
            "level": "Vận dụng cao",
            "question": "[Vòng 2 Củng Cố] Tại các cửa khẩu sân bay quốc tế hoặc phòng khám sàng lọc dịch tễ, người ta luôn sử dụng súng đo nhiệt kế hồng ngoại quét trán thay vì dùng nhiệt kế thủy ngân kẹp nách truyền thống. Ưu điểm nổi bật về mặt bản chất vật lý của nhiệt kế hồng ngoại là gì?",
            "options": [
                "Nhiệt kế hồng ngoại phát ra chùm tia X chiếu xuyên qua bề mặt da để đo trực tiếp nhiệt độ của các mạch máu nuôi dưỡng não bộ.",
                "Đo bức xạ nhiệt hồng ngoại phát ra từ trán mà không cần tiếp xúc trực tiếp, cho kết quả siêu nhanh (khoảng 1 giây) và phòng lây nhiễm chéo.",
                "Nhiệt kế hồng ngoại có độ chính xác tuyệt đối vì nhiệt độ đo ở trán luôn luôn ổn định và cao hơn nhiệt độ ở nách đúng $5^\\circ\\text{C}$.",
                "Nhiệt kế hồng ngoại có khả năng tự động điều chỉnh nhiệt độ cơ thể người bệnh về mức bình thường $37^\\circ\\text{C}$ ngay khi quét qua."
            ],
            "correct": 1,
            "explanation": "Tư duy nâng cao: Nhiệt kế thủy ngân hay điện trở cần truyền nhiệt tiếp xúc trực tiếp từ da vào bầu cảm biến, đòi hỏi thời gian từ 3 đến 5 phút để hệ đạt trạng thái cân bằng nhiệt (quán tính nhiệt lớn) và nguy cơ lây nhiễm chéo. Nhiệt kế hồng ngoại hoạt động trên nguyên lý định luật bức xạ nhiệt: mọi vật thể trên $0\\text{ K}$ đều phát bức xạ điện từ hồng ngoại. Cảm biến quang điện tử thu sóng hồng ngoại tức thời ($v = c$), tính toán nhiệt độ trong chưa đầy $1\\text{ s}$ và không cần chạm vào da."
        },
        {
            "id": "clone_u3_mc_16_v2",
            "conceptId": "c_u3_quan_tinh_nhiet_ke_hong_ngoai",
            "image": "images/thermometer_types.jpg",
            "type": "multiple_choice",
            "level": "Vận dụng cao",
            "question": "[Đấu Trường Nâng Cao] Tại các cửa khẩu sân bay quốc tế hoặc phòng khám sàng lọc dịch tễ, người ta luôn sử dụng súng đo nhiệt kế hồng ngoại quét trán thay vì dùng nhiệt kế thủy ngân kẹp nách truyền thống. Ưu điểm nổi bật về mặt bản chất vật lý của nhiệt kế hồng ngoại là gì?",
            "options": [
                "Nhiệt kế hồng ngoại phát ra chùm tia X chiếu xuyên qua bề mặt da để đo trực tiếp nhiệt độ của các mạch máu nuôi dưỡng não bộ.",
                "Đo bức xạ nhiệt hồng ngoại phát ra từ trán mà không cần tiếp xúc trực tiếp, cho kết quả siêu nhanh (khoảng 1 giây) và phòng lây nhiễm chéo.",
                "Nhiệt kế hồng ngoại có độ chính xác tuyệt đối vì nhiệt độ đo ở trán luôn luôn ổn định và cao hơn nhiệt độ ở nách đúng $5^\\circ\\text{C}$.",
                "Nhiệt kế hồng ngoại có khả năng tự động điều chỉnh nhiệt độ cơ thể người bệnh về mức bình thường $37^\\circ\\text{C}$ ngay khi quét qua."
            ],
            "correct": 1,
            "explanation": "Tư duy nâng cao: Nhiệt kế thủy ngân hay điện trở cần truyền nhiệt tiếp xúc trực tiếp từ da vào bầu cảm biến, đòi hỏi thời gian từ 3 đến 5 phút để hệ đạt trạng thái cân bằng nhiệt (quán tính nhiệt lớn) và nguy cơ lây nhiễm chéo. Nhiệt kế hồng ngoại hoạt động trên nguyên lý định luật bức xạ nhiệt: mọi vật thể trên $0\\text{ K}$ đều phát bức xạ điện từ hồng ngoại. Cảm biến quang điện tử thu sóng hồng ngoại tức thời ($v = c$), tính toán nhiệt độ trong chưa đầy $1\\text{ s}$ và không cần chạm vào da."
        },
        {
            "id": "u3_mc_16",
            "conceptId": "c_u3_quan_tinh_nhiet_ke_hong_ngoai",
            "image": "images/thermometer_types.jpg",
            "type": "multiple_choice",
            "level": "Vận dụng cao",
            "question": "Tại các cửa khẩu sân bay quốc tế hoặc phòng khám sàng lọc dịch tễ, người ta luôn sử dụng súng đo nhiệt kế hồng ngoại quét trán thay vì dùng nhiệt kế thủy ngân kẹp nách truyền thống. Ưu điểm nổi bật về mặt bản chất vật lý của nhiệt kế hồng ngoại là gì?",
            "options": [
                "Nhiệt kế hồng ngoại phát ra chùm tia X chiếu xuyên qua bề mặt da để đo trực tiếp nhiệt độ của các mạch máu nuôi dưỡng não bộ.",
                "Đo bức xạ nhiệt hồng ngoại phát ra từ trán mà không cần tiếp xúc trực tiếp, cho kết quả siêu nhanh (khoảng 1 giây) và phòng lây nhiễm chéo.",
                "Nhiệt kế hồng ngoại có độ chính xác tuyệt đối vì nhiệt độ đo ở trán luôn luôn ổn định và cao hơn nhiệt độ ở nách đúng $5^\\circ\\text{C}$.",
                "Nhiệt kế hồng ngoại có khả năng tự động điều chỉnh nhiệt độ cơ thể người bệnh về mức bình thường $37^\\circ\\text{C}$ ngay khi quét qua."
            ],
            "correct": 1,
            "explanation": "Tư duy nâng cao: Nhiệt kế thủy ngân hay điện trở cần truyền nhiệt tiếp xúc trực tiếp từ da vào bầu cảm biến, đòi hỏi thời gian từ 3 đến 5 phút để hệ đạt trạng thái cân bằng nhiệt (quán tính nhiệt lớn) và nguy cơ lây nhiễm chéo. Nhiệt kế hồng ngoại hoạt động trên nguyên lý định luật bức xạ nhiệt: mọi vật thể trên $0\\text{ K}$ đều phát bức xạ điện từ hồng ngoại. Cảm biến quang điện tử thu sóng hồng ngoại tức thời ($v = c$), tính toán nhiệt độ trong chưa đầy $1\\text{ s}$ và không cần chạm vào da."
        }
    ],
    "c_u3_phich_chieu_chan_khong": [
        {
            "id": "clone_u3_mc_17_v1",
            "conceptId": "c_u3_phich_chieu_chan_khong",
            "image": "images/iron_wood_conduction.jpg",
            "type": "multiple_choice",
            "level": "Vận dụng cao",
            "question": "[Vòng 2 Củng Cố] Ruột phích nước nóng (bình thủy giữ nhiệt cao cấp) được chế tạo gồm vỏ thủy tinh 2 lớp: khoảng không gian giữa 2 lớp được hút chân không tuyệt đối, và hai bề mặt đối diện nhau trong khe chân không được tráng một lớp bạc mỏng phản quang sáng bóng. Thiết kế này ngăn chặn sự truyền nhiệt bằng những cơ chế nào?",
            "options": [
                "Chân không ngăn dẫn nhiệt và đối lưu; lớp tráng bạc phản xạ bức xạ nhiệt hồng ngoại quay trở lại, triệt tiêu cả 3 hình thức truyền nhiệt.",
                "Chân không ngăn cản hiện tượng bức xạ nhiệt; lớp tráng bạc bóng ngăn cản triệt để hiện tượng dẫn nhiệt kim loại qua vỏ bình thủy tinh.",
                "Chân không biến nước sôi bên trong thành thể lỏng siêu đặc không tỏa nhiệt lượng; lớp tráng bạc tạo từ trường giữ nhiệt độ ổn định.",
                "Lớp tráng bạc tạo ra dòng điện cảm ứng chạy xung quanh làm nước tự đun sôi liên tục; lớp chân không giữ áp suất luôn bằng 1 atm."
            ],
            "correct": 0,
            "explanation": "Tư duy nâng cao: Có 3 hình thức truyền nhiệt: 1) Dẫn nhiệt (cần môi trường vật chất dẫn qua va chạm phân tử). 2) Đối lưu (cần dòng chất lưu chuyển động). 3) Bức xạ nhiệt (sóng điện từ truyền được cả trong chân không). Lớp chân không không có phân tử nên triệt tiêu hoàn toàn 100% dẫn nhiệt và đối lưu. Lớp bạc tráng gương có hệ số phản xạ quang học cao sẽ phản xạ ngược lại gần như toàn bộ tia bức xạ nhiệt hồng ngoại vào trong lòng bình. Nhờ vậy cả 3 con đường thất thoát nhiệt đều bị chặn đứng."
        },
        {
            "id": "clone_u3_mc_17_v2",
            "conceptId": "c_u3_phich_chieu_chan_khong",
            "image": "images/iron_wood_conduction.jpg",
            "type": "multiple_choice",
            "level": "Vận dụng cao",
            "question": "[Đấu Trường Nâng Cao] Ruột phích nước nóng (bình thủy giữ nhiệt cao cấp) được chế tạo gồm vỏ thủy tinh 2 lớp: khoảng không gian giữa 2 lớp được hút chân không tuyệt đối, và hai bề mặt đối diện nhau trong khe chân không được tráng một lớp bạc mỏng phản quang sáng bóng. Thiết kế này ngăn chặn sự truyền nhiệt bằng những cơ chế nào?",
            "options": [
                "Chân không ngăn dẫn nhiệt và đối lưu; lớp tráng bạc phản xạ bức xạ nhiệt hồng ngoại quay trở lại, triệt tiêu cả 3 hình thức truyền nhiệt.",
                "Chân không ngăn cản hiện tượng bức xạ nhiệt; lớp tráng bạc bóng ngăn cản triệt để hiện tượng dẫn nhiệt kim loại qua vỏ bình thủy tinh.",
                "Chân không biến nước sôi bên trong thành thể lỏng siêu đặc không tỏa nhiệt lượng; lớp tráng bạc tạo từ trường giữ nhiệt độ ổn định.",
                "Lớp tráng bạc tạo ra dòng điện cảm ứng chạy xung quanh làm nước tự đun sôi liên tục; lớp chân không giữ áp suất luôn bằng 1 atm."
            ],
            "correct": 0,
            "explanation": "Tư duy nâng cao: Có 3 hình thức truyền nhiệt: 1) Dẫn nhiệt (cần môi trường vật chất dẫn qua va chạm phân tử). 2) Đối lưu (cần dòng chất lưu chuyển động). 3) Bức xạ nhiệt (sóng điện từ truyền được cả trong chân không). Lớp chân không không có phân tử nên triệt tiêu hoàn toàn 100% dẫn nhiệt và đối lưu. Lớp bạc tráng gương có hệ số phản xạ quang học cao sẽ phản xạ ngược lại gần như toàn bộ tia bức xạ nhiệt hồng ngoại vào trong lòng bình. Nhờ vậy cả 3 con đường thất thoát nhiệt đều bị chặn đứng."
        },
        {
            "id": "u3_mc_17",
            "conceptId": "c_u3_phich_chieu_chan_khong",
            "image": "images/iron_wood_conduction.jpg",
            "type": "multiple_choice",
            "level": "Vận dụng cao",
            "question": "Ruột phích nước nóng (bình thủy giữ nhiệt cao cấp) được chế tạo gồm vỏ thủy tinh 2 lớp: khoảng không gian giữa 2 lớp được hút chân không tuyệt đối, và hai bề mặt đối diện nhau trong khe chân không được tráng một lớp bạc mỏng phản quang sáng bóng. Thiết kế này ngăn chặn sự truyền nhiệt bằng những cơ chế nào?",
            "options": [
                "Chân không ngăn dẫn nhiệt và đối lưu; lớp tráng bạc phản xạ bức xạ nhiệt hồng ngoại quay trở lại, triệt tiêu cả 3 hình thức truyền nhiệt.",
                "Chân không ngăn cản hiện tượng bức xạ nhiệt; lớp tráng bạc bóng ngăn cản triệt để hiện tượng dẫn nhiệt kim loại qua vỏ bình thủy tinh.",
                "Chân không biến nước sôi bên trong thành thể lỏng siêu đặc không tỏa nhiệt lượng; lớp tráng bạc tạo từ trường giữ nhiệt độ ổn định.",
                "Lớp tráng bạc tạo ra dòng điện cảm ứng chạy xung quanh làm nước tự đun sôi liên tục; lớp chân không giữ áp suất luôn bằng 1 atm."
            ],
            "correct": 0,
            "explanation": "Tư duy nâng cao: Có 3 hình thức truyền nhiệt: 1) Dẫn nhiệt (cần môi trường vật chất dẫn qua va chạm phân tử). 2) Đối lưu (cần dòng chất lưu chuyển động). 3) Bức xạ nhiệt (sóng điện từ truyền được cả trong chân không). Lớp chân không không có phân tử nên triệt tiêu hoàn toàn 100% dẫn nhiệt và đối lưu. Lớp bạc tráng gương có hệ số phản xạ quang học cao sẽ phản xạ ngược lại gần như toàn bộ tia bức xạ nhiệt hồng ngoại vào trong lòng bình. Nhờ vậy cả 3 con đường thất thoát nhiệt đều bị chặn đứng."
        }
    ],
    "c_u3_khong_do_tuyet_doi_vi_mo": [
        {
            "id": "clone_u3_mc_18_v1",
            "conceptId": "c_u3_khong_do_tuyet_doi_vi_mo",
            "image": "images/absolute_zero_kelvin.jpg",
            "type": "multiple_choice",
            "level": "Vận dụng cao",
            "question": "[Vòng 2 Củng Cố] Theo Định luật III nhiệt động lực học và thang đo nhiệt độ Kelvin, không thể dùng bất kỳ một chu trình kỹ thuật hữu hạn nào để làm lạnh một hệ vật chất về đúng nhiệt độ Không độ tuyệt đối ($0\\text{ K}$). Luận cứ vật lý sâu sắc nào sau đây chứng minh cho điều này?",
            "options": [
                "Vì ở $0\\text{ K}$ khối lượng của các nguyên tử tăng lên vô hạn theo thuyết tương đối khiến mọi máy hút nhiệt đều bị quá tải cơ học.",
                "Để làm lạnh, nhiệt lượng phải tự phát truyền sang vật lạnh hơn; vì không có vật nào dưới $0\\text{ K}$ nên không thể lấy thêm nhiệt khi sát $0\\text{ K}$.",
                "Vì $0\\text{ K}$ là một mốc nhiệt độ hoàn toàn tưởng tượng trong toán học và không có bất kỳ ý nghĩa vật lý thực nghiệm nào trong vũ trụ.",
                "Vì áp suất của chất khí ở $0\\text{ K}$ tăng lên mức vô cùng lớn phá hủy tức thì mọi thiết bị đo đạc và vỏ bình chứa của phòng thí nghiệm."
            ],
            "correct": 1,
            "explanation": "Tư duy nâng cao: Theo ĐL II nhiệt động lực học, nhiệt lượng chỉ tự phát truyền từ nơi có nhiệt độ cao sang nơi có nhiệt độ thấp. $0\\text{ K}$ là trạng thái năng lượng thấp nhất của hệ (động năng tịnh tiến nhiệt của phân tử triệt tiêu, hệ đạt độ trật tự cực đại entropy $S = 0$). Để làm nguội một vật đến đúng $0\\text{ K}$, ta cần một bể chứa nhiệt ở nhiệt độ $< 0\\text{ K}$, điều này là bất khả thi vì nhiệt độ âm trong thang Kelvin không tồn tại. Mọi quá trình làm lạnh hiện đại (như bẫy laser, làm lạnh bay hơi) chỉ có thể tiệm cận sát $0\\text{ K}$ (cỡ nanoKelvin) chứ không bao giờ đạt tới đúng $0\\text{ K}$."
        },
        {
            "id": "clone_u3_mc_18_v2",
            "conceptId": "c_u3_khong_do_tuyet_doi_vi_mo",
            "image": "images/absolute_zero_kelvin.jpg",
            "type": "multiple_choice",
            "level": "Vận dụng cao",
            "question": "[Đấu Trường Nâng Cao] Theo Định luật III nhiệt động lực học và thang đo nhiệt độ Kelvin, không thể dùng bất kỳ một chu trình kỹ thuật hữu hạn nào để làm lạnh một hệ vật chất về đúng nhiệt độ Không độ tuyệt đối ($0\\text{ K}$). Luận cứ vật lý sâu sắc nào sau đây chứng minh cho điều này?",
            "options": [
                "Vì ở $0\\text{ K}$ khối lượng của các nguyên tử tăng lên vô hạn theo thuyết tương đối khiến mọi máy hút nhiệt đều bị quá tải cơ học.",
                "Để làm lạnh, nhiệt lượng phải tự phát truyền sang vật lạnh hơn; vì không có vật nào dưới $0\\text{ K}$ nên không thể lấy thêm nhiệt khi sát $0\\text{ K}$.",
                "Vì $0\\text{ K}$ là một mốc nhiệt độ hoàn toàn tưởng tượng trong toán học và không có bất kỳ ý nghĩa vật lý thực nghiệm nào trong vũ trụ.",
                "Vì áp suất của chất khí ở $0\\text{ K}$ tăng lên mức vô cùng lớn phá hủy tức thì mọi thiết bị đo đạc và vỏ bình chứa của phòng thí nghiệm."
            ],
            "correct": 1,
            "explanation": "Tư duy nâng cao: Theo ĐL II nhiệt động lực học, nhiệt lượng chỉ tự phát truyền từ nơi có nhiệt độ cao sang nơi có nhiệt độ thấp. $0\\text{ K}$ là trạng thái năng lượng thấp nhất của hệ (động năng tịnh tiến nhiệt của phân tử triệt tiêu, hệ đạt độ trật tự cực đại entropy $S = 0$). Để làm nguội một vật đến đúng $0\\text{ K}$, ta cần một bể chứa nhiệt ở nhiệt độ $< 0\\text{ K}$, điều này là bất khả thi vì nhiệt độ âm trong thang Kelvin không tồn tại. Mọi quá trình làm lạnh hiện đại (như bẫy laser, làm lạnh bay hơi) chỉ có thể tiệm cận sát $0\\text{ K}$ (cỡ nanoKelvin) chứ không bao giờ đạt tới đúng $0\\text{ K}$."
        },
        {
            "id": "u3_mc_18",
            "conceptId": "c_u3_khong_do_tuyet_doi_vi_mo",
            "image": "images/absolute_zero_kelvin.jpg",
            "type": "multiple_choice",
            "level": "Vận dụng cao",
            "question": "Theo Định luật III nhiệt động lực học và thang đo nhiệt độ Kelvin, không thể dùng bất kỳ một chu trình kỹ thuật hữu hạn nào để làm lạnh một hệ vật chất về đúng nhiệt độ Không độ tuyệt đối ($0\\text{ K}$). Luận cứ vật lý sâu sắc nào sau đây chứng minh cho điều này?",
            "options": [
                "Vì ở $0\\text{ K}$ khối lượng của các nguyên tử tăng lên vô hạn theo thuyết tương đối khiến mọi máy hút nhiệt đều bị quá tải cơ học.",
                "Để làm lạnh, nhiệt lượng phải tự phát truyền sang vật lạnh hơn; vì không có vật nào dưới $0\\text{ K}$ nên không thể lấy thêm nhiệt khi sát $0\\text{ K}$.",
                "Vì $0\\text{ K}$ là một mốc nhiệt độ hoàn toàn tưởng tượng trong toán học và không có bất kỳ ý nghĩa vật lý thực nghiệm nào trong vũ trụ.",
                "Vì áp suất của chất khí ở $0\\text{ K}$ tăng lên mức vô cùng lớn phá hủy tức thì mọi thiết bị đo đạc và vỏ bình chứa của phòng thí nghiệm."
            ],
            "correct": 1,
            "explanation": "Tư duy nâng cao: Theo ĐL II nhiệt động lực học, nhiệt lượng chỉ tự phát truyền từ nơi có nhiệt độ cao sang nơi có nhiệt độ thấp. $0\\text{ K}$ là trạng thái năng lượng thấp nhất của hệ (động năng tịnh tiến nhiệt của phân tử triệt tiêu, hệ đạt độ trật tự cực đại entropy $S = 0$). Để làm nguội một vật đến đúng $0\\text{ K}$, ta cần một bể chứa nhiệt ở nhiệt độ $< 0\\text{ K}$, điều này là bất khả thi vì nhiệt độ âm trong thang Kelvin không tồn tại. Mọi quá trình làm lạnh hiện đại (như bẫy laser, làm lạnh bay hơi) chỉ có thể tiệm cận sát $0\\text{ K}$ (cỡ nanoKelvin) chứ không bao giờ đạt tới đúng $0\\text{ K}$."
        }
    ],
    "c_u3_chuan_diem_ba_nuoc": [
        {
            "id": "clone_u3_mc_19_v1",
            "conceptId": "c_u3_chuan_diem_ba_nuoc",
            "image": "images/triple_point_water.jpg",
            "type": "multiple_choice",
            "level": "Vận dụng cao",
            "question": "[Vòng 2 Củng Cố] Trong Thang nhiệt độ Quốc tế ITS-90, điểm ba của nước được chọn làm mốc chuẩn nhiệt độ cơ bản tối thượng để định nghĩa độ Kelvin thay vì chọn mốc điểm băng tan ($0^\\circ\\text{C}$) thông thường. Lý do khoa học mang tính quyết định là gì?",
            "options": [
                "Vì điểm ba của nước có nhiệt độ rất cao và phát quang ánh sáng xanh nên cực kỳ dễ quan sát và ghi nhận bằng mắt thường trong thí nghiệm.",
                "Điểm băng tan phụ thuộc vào áp suất khí quyển và bọt khí hòa tan; điểm ba của nước là trạng thái cố định duy nhất ($273{,}16\\text{ K}$, $611{,}65\\text{ Pa}$) cực kỳ chuẩn xác.",
                "Vì ở điểm ba của nước, nước chỉ tồn tại ở duy nhất một thể khí lý tưởng không chứa bất kỳ phân tử chất lỏng hay tạp chất hòa tan nào.",
                "Vì điểm ba của nước là trạng thái duy nhất mà khối lượng riêng của nước bằng 0 giúp loại bỏ hoàn toàn ảnh hưởng của trọng lực lên nhiệt kế."
            ],
            "correct": 1,
            "explanation": "Tư duy nâng cao: Điểm băng tan ở $1\\text{ atm}$ bị ảnh hưởng bởi áp suất khí quyển thực tế tại nơi thí nghiệm và tạp chất không khí hòa tan trong nước (làm sai lệch tới vài phần nghìn độ). Ngược lại, điểm ba của nước tinh khiết là trạng thái cân bằng nhiệt động đồng thời của cả 3 pha: Rắn, Lỏng và Hơi trong một bình kín hút sạch khí. Trạng thái này chỉ xuất hiện ở đúng một bộ thông số duy nhất không thể xê dịch: $T = 273{,}16\\text{ K}$ ($0{,}01^\\circ\\text{C}$) và $p = 611{,}65\\text{ Pa}$, do đó mang tính tái lập chuẩn xác tuyệt đối trong mọi phòng thí nghiệm chuẩn quốc tế."
        },
        {
            "id": "clone_u3_mc_19_v2",
            "conceptId": "c_u3_chuan_diem_ba_nuoc",
            "image": "images/triple_point_water.jpg",
            "type": "multiple_choice",
            "level": "Vận dụng cao",
            "question": "[Đấu Trường Nâng Cao] Trong Thang nhiệt độ Quốc tế ITS-90, điểm ba của nước được chọn làm mốc chuẩn nhiệt độ cơ bản tối thượng để định nghĩa độ Kelvin thay vì chọn mốc điểm băng tan ($0^\\circ\\text{C}$) thông thường. Lý do khoa học mang tính quyết định là gì?",
            "options": [
                "Vì điểm ba của nước có nhiệt độ rất cao và phát quang ánh sáng xanh nên cực kỳ dễ quan sát và ghi nhận bằng mắt thường trong thí nghiệm.",
                "Điểm băng tan phụ thuộc vào áp suất khí quyển và bọt khí hòa tan; điểm ba của nước là trạng thái cố định duy nhất ($273{,}16\\text{ K}$, $611{,}65\\text{ Pa}$) cực kỳ chuẩn xác.",
                "Vì ở điểm ba của nước, nước chỉ tồn tại ở duy nhất một thể khí lý tưởng không chứa bất kỳ phân tử chất lỏng hay tạp chất hòa tan nào.",
                "Vì điểm ba của nước là trạng thái duy nhất mà khối lượng riêng của nước bằng 0 giúp loại bỏ hoàn toàn ảnh hưởng của trọng lực lên nhiệt kế."
            ],
            "correct": 1,
            "explanation": "Tư duy nâng cao: Điểm băng tan ở $1\\text{ atm}$ bị ảnh hưởng bởi áp suất khí quyển thực tế tại nơi thí nghiệm và tạp chất không khí hòa tan trong nước (làm sai lệch tới vài phần nghìn độ). Ngược lại, điểm ba của nước tinh khiết là trạng thái cân bằng nhiệt động đồng thời của cả 3 pha: Rắn, Lỏng và Hơi trong một bình kín hút sạch khí. Trạng thái này chỉ xuất hiện ở đúng một bộ thông số duy nhất không thể xê dịch: $T = 273{,}16\\text{ K}$ ($0{,}01^\\circ\\text{C}$) và $p = 611{,}65\\text{ Pa}$, do đó mang tính tái lập chuẩn xác tuyệt đối trong mọi phòng thí nghiệm chuẩn quốc tế."
        },
        {
            "id": "u3_mc_19",
            "conceptId": "c_u3_chuan_diem_ba_nuoc",
            "image": "images/triple_point_water.jpg",
            "type": "multiple_choice",
            "level": "Vận dụng cao",
            "question": "Trong Thang nhiệt độ Quốc tế ITS-90, điểm ba của nước được chọn làm mốc chuẩn nhiệt độ cơ bản tối thượng để định nghĩa độ Kelvin thay vì chọn mốc điểm băng tan ($0^\\circ\\text{C}$) thông thường. Lý do khoa học mang tính quyết định là gì?",
            "options": [
                "Vì điểm ba của nước có nhiệt độ rất cao và phát quang ánh sáng xanh nên cực kỳ dễ quan sát và ghi nhận bằng mắt thường trong thí nghiệm.",
                "Điểm băng tan phụ thuộc vào áp suất khí quyển và bọt khí hòa tan; điểm ba của nước là trạng thái cố định duy nhất ($273{,}16\\text{ K}$, $611{,}65\\text{ Pa}$) cực kỳ chuẩn xác.",
                "Vì ở điểm ba của nước, nước chỉ tồn tại ở duy nhất một thể khí lý tưởng không chứa bất kỳ phân tử chất lỏng hay tạp chất hòa tan nào.",
                "Vì điểm ba của nước là trạng thái duy nhất mà khối lượng riêng của nước bằng 0 giúp loại bỏ hoàn toàn ảnh hưởng của trọng lực lên nhiệt kế."
            ],
            "correct": 1,
            "explanation": "Tư duy nâng cao: Điểm băng tan ở $1\\text{ atm}$ bị ảnh hưởng bởi áp suất khí quyển thực tế tại nơi thí nghiệm và tạp chất không khí hòa tan trong nước (làm sai lệch tới vài phần nghìn độ). Ngược lại, điểm ba của nước tinh khiết là trạng thái cân bằng nhiệt động đồng thời của cả 3 pha: Rắn, Lỏng và Hơi trong một bình kín hút sạch khí. Trạng thái này chỉ xuất hiện ở đúng một bộ thông số duy nhất không thể xê dịch: $T = 273{,}16\\text{ K}$ ($0{,}01^\\circ\\text{C}$) và $p = 611{,}65\\text{ Pa}$, do đó mang tính tái lập chuẩn xác tuyệt đối trong mọi phòng thí nghiệm chuẩn quốc tế."
        }
    ],
    "c_u3_thuc_te_do_nhiet_do": [
        {
            "id": "clone_u3_tf_03_v1",
            "conceptId": "c_u3_thuc_te_do_nhiet_do",
            "image": "images/three_states_matter.jpg",
            "type": "multi_tf",
            "level": "Vận dụng cao",
            "context": "[Vòng 2 Củng Cố] Một nhóm kỹ sư khí tượng và chuyên gia y tế tiến hành phân tích các sai số và nguyên lý đo lường nhiệt độ trong môi trường tự nhiên. Xét tính đúng/sai của các nhận định khoa học sau:",
            "statements": [
                {
                    "text": "Để đo nhiệt độ không khí chính xác, nhiệt kế khí tượng bắt buộc phải đặt trong lều khí tượng màu trắng có cửa chớp thông gió, tránh hoàn toàn ánh nắng mặt trời chiếu trực tiếp vì bức xạ mặt trời sẽ làm nhiệt kế nóng hơn không khí xung quanh.",
                    "isCorrect": true
                },
                {
                    "text": "Vào mùa đông có gió lớn, cảm giác rét buốt tăng lên là do nhiệt kế đo được nhiệt độ không khí giảm đi khi tốc độ gió tăng.",
                    "isCorrect": false
                },
                {
                    "text": "Nhiệt kế điện trở kim loại bạch kim (Pt100) có dải đo nhiệt độ rộng từ $-200^\\circ\\text{C}$ đến $650^\\circ\\text{C}$ và điện trở tăng tuyến tính theo nhiệt độ.",
                    "isCorrect": true
                },
                {
                    "text": "Không thể dùng nhiệt kế thủy ngân để đo nhiệt độ khí quyển tại các trạm nghiên cứu ở Nam Cực vào mùa đông (nhiệt độ có thể xuống $-80^\\circ\\text{C}$) vì thủy ngân sẽ bị đông đặc ở $-38{,}8^\\circ\\text{C}$.",
                    "isCorrect": true
                }
            ],
            "explanation": "Tư duy nâng cao: 1) Lều khí tượng che bức xạ nhiệt mặt trời và sơn trắng phản xạ ánh sáng, giúp nhiệt kế chỉ tiếp xúc và cân bằng nhiệt với không khí. 2) Nhiệt kế đo nhiệt độ thực của không khí không hề thay đổi khi có gió; cảm giác rét buốt tăng lên (nhiệt độ cảm nhận - wind chill) là do gió tăng cường tốc độ bốc hơi và truyền nhiệt cưỡng bức khỏi da người. 3) Cảm biến Pt100 là chuẩn công nghiệp độ chính xác cao. 4) Điểm đông đặc của thủy ngân là $-38{,}8^\\circ\\text{C}$, ở Nam Cực $-80^\\circ\\text{C}$ thủy ngân đã đóng băng cứng ngắc nên phải dùng nhiệt kế rượu (rượu đông đặc ở $-114^\\circ\\text{C}$) hoặc nhiệt điện trở."
        },
        {
            "id": "clone_u3_tf_03_v2",
            "conceptId": "c_u3_thuc_te_do_nhiet_do",
            "image": "images/three_states_matter.jpg",
            "type": "multi_tf",
            "level": "Vận dụng cao",
            "context": "[Đấu Trường Nâng Cao] Một nhóm kỹ sư khí tượng và chuyên gia y tế tiến hành phân tích các sai số và nguyên lý đo lường nhiệt độ trong môi trường tự nhiên. Xét tính đúng/sai của các nhận định khoa học sau:",
            "statements": [
                {
                    "text": "Để đo nhiệt độ không khí chính xác, nhiệt kế khí tượng bắt buộc phải đặt trong lều khí tượng màu trắng có cửa chớp thông gió, tránh hoàn toàn ánh nắng mặt trời chiếu trực tiếp vì bức xạ mặt trời sẽ làm nhiệt kế nóng hơn không khí xung quanh.",
                    "isCorrect": true
                },
                {
                    "text": "Vào mùa đông có gió lớn, cảm giác rét buốt tăng lên là do nhiệt kế đo được nhiệt độ không khí giảm đi khi tốc độ gió tăng.",
                    "isCorrect": false
                },
                {
                    "text": "Nhiệt kế điện trở kim loại bạch kim (Pt100) có dải đo nhiệt độ rộng từ $-200^\\circ\\text{C}$ đến $650^\\circ\\text{C}$ và điện trở tăng tuyến tính theo nhiệt độ.",
                    "isCorrect": true
                },
                {
                    "text": "Không thể dùng nhiệt kế thủy ngân để đo nhiệt độ khí quyển tại các trạm nghiên cứu ở Nam Cực vào mùa đông (nhiệt độ có thể xuống $-80^\\circ\\text{C}$) vì thủy ngân sẽ bị đông đặc ở $-38{,}8^\\circ\\text{C}$.",
                    "isCorrect": true
                }
            ],
            "explanation": "Tư duy nâng cao: 1) Lều khí tượng che bức xạ nhiệt mặt trời và sơn trắng phản xạ ánh sáng, giúp nhiệt kế chỉ tiếp xúc và cân bằng nhiệt với không khí. 2) Nhiệt kế đo nhiệt độ thực của không khí không hề thay đổi khi có gió; cảm giác rét buốt tăng lên (nhiệt độ cảm nhận - wind chill) là do gió tăng cường tốc độ bốc hơi và truyền nhiệt cưỡng bức khỏi da người. 3) Cảm biến Pt100 là chuẩn công nghiệp độ chính xác cao. 4) Điểm đông đặc của thủy ngân là $-38{,}8^\\circ\\text{C}$, ở Nam Cực $-80^\\circ\\text{C}$ thủy ngân đã đóng băng cứng ngắc nên phải dùng nhiệt kế rượu (rượu đông đặc ở $-114^\\circ\\text{C}$) hoặc nhiệt điện trở."
        },
        {
            "id": "u3_tf_03",
            "conceptId": "c_u3_thuc_te_do_nhiet_do",
            "image": "images/three_states_matter.jpg",
            "type": "multi_tf",
            "level": "Vận dụng cao",
            "context": "Một nhóm kỹ sư khí tượng và chuyên gia y tế tiến hành phân tích các sai số và nguyên lý đo lường nhiệt độ trong môi trường tự nhiên. Xét tính đúng/sai của các nhận định khoa học sau:",
            "statements": [
                {
                    "text": "Để đo nhiệt độ không khí chính xác, nhiệt kế khí tượng bắt buộc phải đặt trong lều khí tượng màu trắng có cửa chớp thông gió, tránh hoàn toàn ánh nắng mặt trời chiếu trực tiếp vì bức xạ mặt trời sẽ làm nhiệt kế nóng hơn không khí xung quanh.",
                    "isCorrect": true
                },
                {
                    "text": "Vào mùa đông có gió lớn, cảm giác rét buốt tăng lên là do nhiệt kế đo được nhiệt độ không khí giảm đi khi tốc độ gió tăng.",
                    "isCorrect": false
                },
                {
                    "text": "Nhiệt kế điện trở kim loại bạch kim (Pt100) có dải đo nhiệt độ rộng từ $-200^\\circ\\text{C}$ đến $650^\\circ\\text{C}$ và điện trở tăng tuyến tính theo nhiệt độ.",
                    "isCorrect": true
                },
                {
                    "text": "Không thể dùng nhiệt kế thủy ngân để đo nhiệt độ khí quyển tại các trạm nghiên cứu ở Nam Cực vào mùa đông (nhiệt độ có thể xuống $-80^\\circ\\text{C}$) vì thủy ngân sẽ bị đông đặc ở $-38{,}8^\\circ\\text{C}$.",
                    "isCorrect": true
                }
            ],
            "explanation": "Tư duy nâng cao: 1) Lều khí tượng che bức xạ nhiệt mặt trời và sơn trắng phản xạ ánh sáng, giúp nhiệt kế chỉ tiếp xúc và cân bằng nhiệt với không khí. 2) Nhiệt kế đo nhiệt độ thực của không khí không hề thay đổi khi có gió; cảm giác rét buốt tăng lên (nhiệt độ cảm nhận - wind chill) là do gió tăng cường tốc độ bốc hơi và truyền nhiệt cưỡng bức khỏi da người. 3) Cảm biến Pt100 là chuẩn công nghiệp độ chính xác cao. 4) Điểm đông đặc của thủy ngân là $-38{,}8^\\circ\\text{C}$, ở Nam Cực $-80^\\circ\\text{C}$ thủy ngân đã đóng băng cứng ngắc nên phải dùng nhiệt kế rượu (rượu đông đặc ở $-114^\\circ\\text{C}$) hoặc nhiệt điện trở."
        }
    ]
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { QUESTION_BANK, CLONE_BANK };
}
