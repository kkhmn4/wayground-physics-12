/**
 * Wayground Physics 12 - Comprehensive Question Bank V4.0 (GDPT 2018 Standard)
 * Covering 100% Curriculum Scope of Units 1, 2, 3 (Chương 1: Vật Lí Nhiệt)
 * - Bài 1: Cấu trúc của chất. Sự chuyển thể (100% Định tính chuẩn SGK)
 * - Bài 2: Nội năng. Định luật I của nhiệt động lực học
 * - Bài 3: Nhiệt độ. Thang nhiệt độ – Nhiệt kế
 * Levels: Nhận biết, Thông hiểu, Vận dụng cơ bản công thức
 * Standard LaTeX math: $\Delta U = A + Q$, $T(\text{K}) = t(^\circ\text{C}) + 273{,}15$, $A' = p \cdot \Delta V$
 * Includes full CLONE_BANK for all 48 concepts (2 adaptive variants per concept for Round 2)
 */

const QUESTION_BANK = {
    unit1: {
        title: "Bài 1: Cấu trúc của chất. Sự chuyển thể",
        questions: [
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
                        "Thể tích của vật càng lớn.",
                        "Khối lượng của vật càng nhỏ.",
                        "Nhiệt độ của vật càng cao.",
                        "Áp suất tác dụng lên vật càng giảm."
                ],
                "correct": 2,
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
                        "Các hạt phấn hoa tự mình có năng lượng và tự chuyển động.",
                        "Các phân tử nước chuyển động nhiệt hỗn loạn, va chạm bất đối xứng vào hạt phấn hoa từ mọi phía.",
                        "Dòng đối lưu của nước đẩy các hạt phấn hoa chuyển động theo vòng tròn.",
                        "Tác dụng của lực hút tĩnh điện giữa các hạt phấn hoa với nhau."
                ],
                "correct": 1,
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
                        "Chỉ có lực hút phân tử.",
                        "Chỉ có lực đẩy phân tử.",
                        "Đồng thời cả lực hút và lực đẩy phân tử.",
                        "Không có lực tương tác nào."
                ],
                "correct": 2,
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
                        "Lực hút chiếm ưu thế, kéo hai phân tử lại gần nhau hơn.",
                        "Lực đẩy chiếm ưu thế, đẩy hai phân tử ra xa nhau.",
                        "Cả lực hút và lực đẩy đều biến mất hoàn toàn.",
                        "Hợp lực tương tác vẫn bằng 0."
                ],
                "correct": 1,
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
                        "Rất nhỏ.",
                        "Rất lớn (gấp hàng chục lần kích thước phân tử).",
                        "Xấp xỉ bằng nhau.",
                        "Không đáng kể."
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
                        "Thể khí.",
                        "Thể lỏng.",
                        "Thể rắn.",
                        "Cả thể lỏng và thể khí."
                ],
                "correct": 2,
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
                        "Chất rắn kết tinh có hình dạng xác định, chất rắn vô định hình không có hình dạng xác định.",
                        "Chất rắn kết tinh có cấu trúc mạng tinh thể và có nhiệt độ nóng chảy xác định.",
                        "Chất rắn kết tinh dẫn điện tốt, chất rắn vô định hình hoàn toàn không dẫn điện.",
                        "Chất rắn kết tinh luôn cứng hơn chất rắn vô định hình."
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
                        "Chất rắn vô định hình.",
                        "Chất rắn đơn tinh thể.",
                        "Chất rắn đa tinh thể.",
                        "Chất lỏng."
                ],
                "correct": 1,
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
                        "Quá trình nóng chảy của tuyết hấp thụ nhiệt lượng lớn từ môi trường không khí xung quanh.",
                        "Khi tuyết tan, nhiệt độ của khối tuyết tự nhiên giảm xuống dưới $0^\\circ\\text{C}$.",
                        "Tuyết tan giải phóng các hạt phân tử mang điện tích âm làm lạnh không khí.",
                        "Gió mùa đông thổi mạnh hơn trong giai đoạn tuyết tan."
                ],
                "correct": 0,
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
                        "Nhiệt độ của chất lỏng.",
                        "Diện tích mặt thoáng của chất lỏng.",
                        "Khối lượng riêng của vật chứa chất lỏng.",
                        "Tốc độ gió và độ ẩm không khí phía trên mặt thoáng."
                ],
                "correct": 2,
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
                        "Sự bay hơi của nước từ trong cốc qua thành cốc.",
                        "Sự ngưng tụ của hơi nước có sẵn trong không khí khi gặp bề mặt thành cốc có nhiệt độ thấp.",
                        "Sự thẩm thấu của nước đá qua các lỗ nhỏ li ti của thủy tinh.",
                        "Sự thăng hoa của nước đá."
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
                        "Nồi áp suất giữ nhiệt lượng không bị thoát ra ngoài làm thể tích nước tăng lên.",
                        "Nắp nồi đậy kín làm tăng áp suất hơi phía trên mặt nước, dẫn đến nhiệt độ sôi của nước tăng lên trên $100^\\circ\\text{C}$.",
                        "Nồi áp suất làm giảm nhiệt độ sôi của nước giúp nước mau sôi hơn.",
                        "Nồi áp suất làm biến đổi cấu trúc phân tử của nước thành dạng năng lượng cao."
                ],
                "correct": 1,
                "explanation": "Ghi nhớ cốt lõi: Nhiệt độ sôi của chất lỏng phụ thuộc vào áp suất trên mặt thoáng. Áp suất khí càng cao thì nhiệt độ sôi của nước càng cao (trong nồi áp suất, áp suất có thể lên đến $2\\text{ atm}$, nước sôi ở khoảng $120^\\circ\\text{C}$ giúp thức ăn chín nhanh hơn)."
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
        "id": "u1_mc_15",
        "conceptId": "c_u1_ap_suat_dinh_nui",
        "image": "images/pressure_cooker_boiling.jpg",
        "type": "multiple_choice",
        "level": "Vận dụng cao",
        "question": "Khi leo lên đỉnh núi Everest (độ cao gần $8848\\text{ m}$), các nhà leo núi nhận thấy nước sôi ở nhiệt độ khoảng $70^\\circ\\text{C}$ và luộc thức ăn không thể chín được. Giải thích nào sau đây về mặt phân tử và nhiệt động học là ĐÚNG nhất?",
        "options": [
                "Lên cao không khí loãng, nhiệt lượng từ ngọn lửa truyền cho nước chậm hơn nên nước không đủ năng lượng làm chín thức ăn.",
                "Càng lên cao áp suất khí quyển càng giảm, các bọt hơi nước dễ dàng thắng áp suất mặt thoáng để thoát ra ngoài ở nhiệt độ thấp ($70^\\circ\\text{C}$), khiến nước sôi mà động năng phân tử chưa đủ cao để làm chín thức ăn.",
                "Nhiệt độ môi trường trên đỉnh núi rất thấp làm cho cấu trúc phân tử của nước bị biến tính không thể truyền nhiệt vào thức ăn.",
                "Khối lượng riêng của nước giảm mạnh ở độ cao lớn làm giảm khả năng dẫn nhiệt của nước."
        ],
        "correct": 1,
        "explanation": "Tư duy nâng cao: Sự sôi xảy ra khi áp suất hơi bão hòa trong các bọt khí bằng áp suất khí quyển trên mặt thoáng. Lên đỉnh núi áp suất khí quyển giảm mạnh, do đó nước sôi ở nhiệt độ thấp hơn nhiều ($70^\\circ\\text{C}$). Ở nhiệt độ này, động năng phân tử nước chưa đủ phá vỡ cấu trúc tinh bột/protein trong thức ăn, nên thức ăn không thể chín nếu không dùng nồi áp suất."
},
{
        "id": "u1_mc_16",
        "conceptId": "c_u1_qua_lanh_thuy_tinh",
        "image": "images/crystal_vs_amorphous.jpg",
        "type": "multiple_choice",
        "level": "Vận dụng cao",
        "question": "Trong công nghệ luyện kim và chế tạo vật liệu nano, người ta nung chảy hợp kim rồi làm nguội siêu nhanh với tốc độ hàng triệu độ mỗi giây (quá trình tôi cực nhanh - rapid quenching). Kết quả thu được thủy tinh kim loại (kim loại vô định hình). Cơ chế vi mô của hiện tượng này là gì?",
        "options": [
                "Làm nguội quá nhanh khiến các nguyên tử bị mất hết electron và trở thành ion tự do đứng yên.",
                "Làm nguội cực nhanh khiến các nguyên tử không kịp di chuyển và sắp xếp vào các vị trí nút mạng tuần hoàn trật tự xa, bị 'đóng băng' ở trạng thái hỗn loạn trật tự gần của chất lỏng.",
                "Nhiệt độ hạ đột ngột làm lực đẩy phân tử triệt tiêu hoàn toàn, các nguyên tử dính chặt vào nhau tạo thành đơn tinh thể hoàn hảo.",
                "Áp suất giảm đột ngột biến kim loại từ thể lỏng chuyển thẳng sang thể khí rồi ngưng kết thành tinh thể."
        ],
        "correct": 1,
        "explanation": "Tư duy nâng cao: Sự kết tinh đòi hỏi thời gian để các nguyên tử di chuyển nhiệt và tự sắp xếp vào các vị trí nút mạng tinh thể có trật tự xa. Khi làm nguội cực nhanh, tốc độ mất nhiệt lớn hơn tốc độ khuếch tán sắp xếp mạng, cấu trúc hỗn loạn của chất lỏng bị 'đóng băng' lại, tạo thành chất rắn vô định hình có tính đẳng hướng và độ bền cơ học vượt trội."
},
{
        "id": "u1_mc_17",
        "conceptId": "c_u1_bay_hoi_thap_giai_nhiet",
        "image": "images/evaporation_factors.jpg",
        "type": "multiple_choice",
        "level": "Vận dụng cao",
        "question": "Vào một ngày mùa hè ở Hà Nội hoặc TP.HCM, nhiệt độ không khí đo được là $36^\\circ\\text{C}$ với độ ẩm tương đối là $92\\%$. Người lao động ngoài trời cảm thấy ngột ngạt, bức bối và mệt mỏi nguy hiểm hơn rất nhiều so với khi ở sa mạc khô ráo cùng nhiệt độ $36^\\circ\\text{C}$ nhưng độ ẩm $20\\%$. Phân tích vật lý nào sau đây giải thích chính xác hiện tượng này?",
        "options": [
                "Không khí ẩm có khối lượng riêng lớn hơn nên cản trở sự chuyển động của con người.",
                "Trong không khí có độ ẩm quá cao, tốc độ ngưng tụ hơi nước xấp xỉ tốc độ bay hơi, mồ hôi trên da không thể bay hơi để mang đi nhiệt lượng (nhiệt hóa hơi), khiến cơ thể bị tích nhiệt gây sốc nhiệt.",
                "Nước trong không khí ẩm dẫn nhiệt trực tiếp từ mặt trời vào cơ thể nhanh hơn không khí khô.",
                "Áp suất khí quyển trong ngày ẩm cao hơn nhiều ngày khô làm tim phải đập nhanh hơn."
        ],
        "correct": 1,
        "explanation": "Tư duy nâng cao: Cơ chế tự làm mát chủ đạo của cơ thể người khi nhiệt độ môi trường xấp xỉ thân nhiệt ($37^\\circ\\text{C}$) là sự bay hơi mồ hôi. Các phân tử nước có động năng lớn thoát khỏi bề mặt da mang theo nhiệt lượng lớn ($L \\approx 2{,}4 \\times 10^6\\text{ J/kg}$). Khi độ ẩm không khí tiệm cận bão hòa ($92\\%$), quá trình bay hơi bị triệt tiêu vì tốc độ ngưng tụ từ khí quyển bù trừ tốc độ bay hơi, cơ thể không thể thải nhiệt dẫn đến tích tụ nhiệt nguy hiểm."
},
{
        "id": "u1_mc_18",
        "conceptId": "c_u1_nhiet_do_chuyen_the_lien_ket",
        "image": "images/phase_transition_diagram.jpg",
        "type": "multiple_choice",
        "level": "Vận dụng cao",
        "question": "Trong thí nghiệm đun nóng liên tục một cốc chứa hỗn hợp nước và nước đá đang tan ở $0^\\circ\\text{C}$ trên ngọn lửa lớn và khuấy đều liên tục. Người ta thấy số chỉ của nhiệt kế cắm trong cốc giữ nguyên không đổi ở $0^\\circ\\text{C}$ suốt 10 phút cho đến khi mẩu đá cuối cùng tan hết. Năng lượng nhiệt mà bếp gas truyền cho cốc nước trong suốt 10 phút đó đã chuyển hóa thành dạng năng lượng nào?",
        "options": [
                "Chuyển hóa hoàn toàn thành động năng chuyển động nhiệt hỗn loạn của các phân tử nước.",
                "Không hề truyền vào cốc nước mà thất thoát 100% ra không khí xung quanh.",
                "Chuyển hóa thành thế năng tương tác giữa các phân tử nước để bẻ gãy cấu trúc mạng tinh thể băng rỗng, làm tăng nội năng của hệ.",
                "Chuyển hóa thành quang năng phát sáng bên trong khối nước."
        ],
        "correct": 2,
        "explanation": "Tư duy nâng cao: Nội năng của vật gồm tổng động năng nhiệt và thế năng tương tác phân tử ($U = W_{d\\text{ nhiệt}} + W_{t\\text{ tương tác}}$). Vì nhiệt độ giữ nguyên ở $0^\\circ\\text{C}$ nên động năng chuyển động nhiệt trung bình không đổi. Toàn bộ nhiệt lượng thu vào được dùng để sinh công thắng lực hút phân tử, bẻ gãy mạng tinh thể chất rắn chuyển sang chất lỏng, làm tăng thế năng phân tử và làm tăng nội năng của khối nước."
},
{
        "id": "u1_mc_19",
        "conceptId": "c_u1_thang_hoa_da_kho_vaccine",
        "image": "images/phase_transition_diagram.jpg",
        "type": "multiple_choice",
        "level": "Vận dụng cao",
        "question": "Để bảo quản và vận chuyển các loại vaccine mRNA (như vaccine phòng COVID-19 cần nhiệt độ bảo quản $-70^\\circ\\text{C}$), người ta dùng 'đá khô' ($\\text{CO}_2$ rắn) lót trong thùng cách nhiệt thay vì nước đá. Ưu điểm nhiệt học và chuyển thể vượt trội của đá khô trong ứng dụng này là gì?",
        "options": [
                "Đá khô có khối lượng riêng nhẹ hơn nước đá và tỏa ra oxy khi tan chảy.",
                "Đá khô thăng hoa trực tiếp từ thể rắn sang thể khí ở $-78{,}5^\\circ\\text{C}$ mà không qua thể lỏng, thu nhiệt lượng cực lớn duy trì nhiệt độ siêu lạnh ổn định và giữ thùng chứa hoàn toàn khô ráo.",
                "Đá khô có khả năng tự phát quang giúp nhận biết khi vaccine bị hỏng.",
                "Đá khô phản ứng hóa học với vỏ hộp vaccine để tạo lớp màng bảo vệ chân không."
        ],
        "correct": 1,
        "explanation": "Tư duy nâng cao: Carbon dioxide rắn (đá khô) ở áp suất chuẩn thăng hoa trực tiếp thành khí $\\text{CO}_2$ ở $-78{,}5^\\circ\\text{C}$. Quá trình thăng hoa thu nhiệt hóa hơi rất mạnh, giữ nhiệt độ thùng bảo quản ở mức $-78{,}5^\\circ\\text{C}$ (đáp ứng tiêu chuẩn $-70^\\circ\\text{C}$ của vaccine mRNA). Đặc biệt, do không chảy thành chất lỏng (không qua thể lỏng) nên không làm rách hỏng bao bì nhãn mác hay gây chập cháy thiết bị giám sát nhiệt độ."
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
]
    },
    unit2: {
        title: "Bài 2: Nội năng. Định luật I của nhiệt động lực học",
        questions: [
        {
                "id": "u2_mc_01",
                "conceptId": "c_u2_dinh_nghia_noi_nang",
                "image": "images/internal_energy_real_ideal.jpg",
                "type": "multiple_choice",
                "level": "Nhận biết",
                "question": "Nội năng của một vật là",
                "options": [
                        "Tổng động năng và thế năng trọng trường của vật đối với mặt đất.",
                        "Tổng động năng chuyển động nhiệt của các phân tử và thế năng tương tác giữa các phân tử cấu tạo nên vật.",
                        "Năng lượng nhiệt mà vật tỏa ra môi trường xung quanh khi nguội đi.",
                        "Phần nhiệt lượng tiềm ẩn bên trong vật không thể biến đổi."
                ],
                "correct": 1,
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
                        "Chỉ phụ thuộc vào áp suất $p$.",
                        "Chỉ phụ thuộc vào thể tích $V$.",
                        "Phụ thuộc vào nhiệt độ $T$ và thể tích $V$ của vật.",
                        "Chỉ phụ thuộc vào khối lượng của vật mà không phụ thuộc nhiệt độ."
                ],
                "correct": 2,
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
                        "Chỉ phụ thuộc vào thể tích $V$ của khối khí.",
                        "Chỉ phụ thuộc vào nhiệt độ tuyệt đối $T$ của khối khí.",
                        "Phụ thuộc đồng thời vào cả thể tích $V$ và nhiệt độ $T$.",
                        "Hoàn toàn không phụ thuộc vào nhiệt độ $T$."
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
                        "Thực hiện công và truyền nhiệt.",
                        "Đốt nóng và làm lạnh.",
                        "Nén và dãn nở thể tích.",
                        "Bức xạ nhiệt và đối lưu."
                ],
                "correct": 0,
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
                        "Nhiệt lượng là một dạng năng lượng độc lập được tích trữ sẵn bên trong vật.",
                        "Nhiệt lượng là số đo phần nội năng tăng thêm hay mất đi của vật trong quá trình truyền nhiệt.",
                        "Một vật có nhiệt độ càng cao thì chứa càng nhiều nhiệt lượng.",
                        "Vật đứng yên thì có nhiệt lượng bằng 0."
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
                        "$\\Delta U = A - Q$",
                        "$\\Delta U = A + Q$",
                        "$\\Delta U = Q - A$",
                        "$Q = A + \\Delta U$"
                ],
                "correct": 1,
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
                        "$Q > 0$",
                        "$Q < 0$",
                        "$Q = 0$",
                        "$Q$ mang dấu bất kỳ tùy thuộc vào công $A$."
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
                        "$A > 0$",
                        "$A < 0$",
                        "$A = 0$",
                        "$A$ luôn bằng độ biến thiên nội năng."
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
                        "Khối khí nhận nhiệt từ bên ngoài làm nước đóng băng tức thì.",
                        "Khí dãn nở rất nhanh (quá trình đoạn nhiệt $Q \\approx 0$), khí sinh công ($A < 0$) làm nội năng giảm mạnh ($\\Delta U < 0$), dẫn đến nhiệt độ khí giảm đột ngột.",
                        "Áp suất giảm làm khối khí hấp thụ thêm nội năng từ không khí.",
                        "Phân tử gas bị phân hủy thành nước đá ở nhiệt độ phòng."
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
                        "Chỉ do ma sát giữa pít-tông và thành ống bơm sinh nhiệt.",
                        "Chỉ do nhiệt truyền từ lốp xe đạp ngược trở lại ống bơm.",
                        "Do cả hai nguyên nhân: công của người nén khí làm tăng nội năng của khí và ma sát giữa pít-tông với thành ống bơm.",
                        "Do khối khí trong ống bơm tự giải phóng năng lượng hạt nhân."
                ],
                "correct": 2,
                "explanation": "Ghi nhớ cốt lõi: Ống bơm nóng lên do hai nguyên nhân đồng thời: người thực hiện công nén khí làm tăng nội năng và nhiệt độ của khí trong bơm, đồng thời ma sát giữa pít-tông và thành xilanh cũng chuyển hóa cơ năng thành nhiệt làm nóng vỏ bơm."
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
        "id": "u2_mc_15",
        "conceptId": "c_u2_chu_trinh_khi_kin_pv",
        "image": "images/isobaric_work_pv.jpg",
        "type": "multiple_choice",
        "level": "Vận dụng cao",
        "question": "Một khối khí lý tưởng thực hiện một chu trình nhiệt động lực học kín $A \\to B \\to C \\to D \\to A$ biểu diễn trên đồ thị áp suất - thể tích ($p-V$). Kết luận nào sau đây về độ biến thiên nội năng $\\Delta U$ và công $A'$ mà khối khí sinh ra sau một chu trình kín là ĐÚNG?",
        "options": [
                "$\\Delta U > 0$ và công sinh ra bằng 0 vì chu trình quay về điểm xuất phát.",
                "$\\Delta U = 0$ và công $A'$ sinh ra có độ lớn bằng đúng diện tích phần mặt phẳng giới hạn bởi chu trình khép kín trên đồ thị $p-V$.",
                "$\\Delta U < 0$ vì khí đã sinh công ra môi trường.",
                "Công $A'$ luôn bằng 0 trong mọi chu trình kín."
        ],
        "correct": 1,
        "explanation": "Tư duy nâng cao: Nội năng của khí lý tưởng chỉ phụ thuộc vào nhiệt độ ($U = f(T)$). Sau một chu trình khép kín, khí trở về đúng trạng thái ban đầu ($T_A = T_{\\text{đầu}}$), do đó độ biến thiên nội năng $\\Delta U = 0$. Theo ĐL I: $\\Delta U = A + Q = 0 \\implies Q = -A = A'$. Công sinh ra $A'$ bằng hiệu diện tích đường dãn nở phía trên trừ diện tích đường nén phía dưới, chính là diện tích miền kín trên giản đồ $p-V$."
},
{
        "id": "u2_mc_16",
        "conceptId": "c_u2_binh_cuu_hoa_co2",
        "image": "images/adiabatic_spray.jpg",
        "type": "multiple_choice",
        "level": "Vận dụng cao",
        "question": "Khi sử dụng bình chữa cháy khí $\\text{CO}_2$ (khí carbon dioxide lỏng nén ở áp suất khoảng $60\\text{ atm}$), khi bóp cò xịt mạnh ra loa phun, người ta thấy xuất hiện đám tuyết trắng $\\text{CO}_2$ ở nhiệt độ cực lạnh khoảng $-79^\\circ\\text{C}$ và được khuyến cáo không chạm tay vào loa phun kẻo bị bỏng lạnh. Cơ chế nhiệt động lực học của hiện tượng này là gì?",
        "options": [
                "Khí $\\text{CO}_2$ phản ứng hóa học tỏa nhiệt với hơi nước trong không khí.",
                "Khí nén dãn nở cực nhanh ra ngoài sinh công lớn chống lại áp suất khí quyển ($A < 0$), quá trình diễn ra quá nhanh nên trao đổi nhiệt không đáng kể ($Q \\approx 0$), dẫn đến nội năng giảm mạnh ($\\Delta U = A < 0$) làm nhiệt độ tụt sâu.",
                "Bình chữa cháy có gắn một động cơ điện mini làm lạnh khí trước khi phun.",
                "Áp suất ngoài khí quyển cao hơn áp suất trong bình ép các phân tử $\\text{CO}_2$ đóng băng."
        ],
        "correct": 1,
        "explanation": "Tư duy nâng cao: Đây là quá trình dãn nở đoạn nhiệt ($Q \\approx 0$) vì khí phụt ra trong thời gian phần trăm giây, nhiệt lượng chưa kịp trao đổi với môi trường. Khối khí nén thể tích tăng mạnh, sinh công lớn $A' > 0$ (tức hệ nhận công $A < 0$). Theo ĐL I: $\\Delta U = A + Q = A < 0$. Nội năng khối khí giảm đột ngột, nhiệt độ giảm xuống $-79^\\circ\\text{C}$ khiến khí ngưng kết thành tinh thể tuyết $\\text{CO}_2$ gây nguy cơ bỏng lạnh nếu chạm vào loa kim loại."
},
{
        "id": "u2_mc_17",
        "conceptId": "c_u2_no_lop_xe_mua_he",
        "image": "images/bicycle_pump_heating.jpg",
        "type": "multiple_choice",
        "level": "Vận dụng cao",
        "question": "Vào những ngày hè nắng gắt với nhiệt độ mặt đường nhựa lên tới $60^\\circ\\text{C}$, xe tải nặng chạy đường dài với tốc độ cao thường có nguy cơ nổ lốp rất lớn nếu lốp đã được bơm quá căng từ trước. Phân tích quá trình biến đổi nội năng của khối khí trong lốp xe theo Định luật I nhiệt động lực học:",
        "options": [
                "Khối khí trong lốp chỉ nhận nhiệt lượng ($Q > 0$) từ mặt đường chứ không nhận công ($A = 0$).",
                "Lốp xe bị biến dạng đàn hồi liên tục do lăn trên đường và ma sát sinh công ($A > 0$), đồng thời nhận nhiệt lượng ($Q > 0$) từ mặt đường nóng; cả hai làm nội năng tăng mạnh ($\\Delta U = A + Q > 0$), nhiệt độ tăng cao trong khi thể tích lốp không đổi dẫn đến áp suất khí tăng vọt gây nổ lốp.",
                "Khối khí sinh công ra bên ngoài làm nội năng giảm nhưng vỏ cao su bị nóng chảy.",
                "Không khí bên trong lốp bị phân hủy thành các khí nhẹ hơn làm tăng đột biến số mol khí."
        ],
        "correct": 1,
        "explanation": "Tư duy nâng cao: Bánh xe lăn chịu tải trọng lớn liên tục biến dạng cơ học, công ma sát giữa lốp và mặt đường cũng như nội ma sát cao su chuyển hóa thành nội năng ($A > 0$). Đồng thời mặt đường $60^\\circ\\text{C}$ truyền nhiệt lượng lớn vào lốp ($Q > 0$). Theo ĐL I: $\\Delta U = A + Q > 0$ khiến nội năng và nhiệt độ khối khí tăng vọt. Vì thể tích lốp gần như cố định ($V \\approx \\text{const}$), theo định luật Charles áp suất $p$ tỉ lệ thuận với nhiệt độ tuyệt đối $T$, áp suất tăng vượt quá độ bền cơ học của thành lốp dẫn đến nổ lốp."
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
]
    },
    unit3: {
        title: "Bài 3: Nhiệt độ. Thang nhiệt độ – Nhiệt kế",
        questions: [
        {
                "id": "u3_mc_01",
                "conceptId": "c_u3_khai_niem_nhiet_do",
                "image": "images/temp_molecular_speed.jpg",
                "type": "multiple_choice",
                "level": "Nhận biết",
                "question": "Về mặt vi mô, nhiệt độ của một vật là đại lượng vật lý đặc trưng cho",
                "options": [
                        "Số lượng phân tử chứa bên trong vật.",
                        "Mức độ chuyển động nhiệt hỗn loạn của các phân tử cấu tạo nên vật.",
                        "Kích thước và khối lượng của từng phân tử.",
                        "Lực liên kết hóa học giữa các nguyên tử trong phân tử."
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
                        "Từ vật có khối lượng lớn sang vật có khối lượng nhỏ hơn.",
                        "Từ vật có nội năng lớn hơn sang vật có nội năng nhỏ hơn.",
                        "Từ vật có nhiệt độ cao hơn sang vật có nhiệt độ thấp hơn.",
                        "Theo chiều bất kỳ phụ thuộc vào thể tích của hai vật."
                ],
                "correct": 2,
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
                        "Nội năng.",
                        "Thể tích.",
                        "Khối lượng riêng.",
                        "Nhiệt độ."
                ],
                "correct": 3,
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
                        "$0^\\circ\\text{C}$",
                        "$-100^\\circ\\text{C}$",
                        "$-273{,}15^\\circ\\text{C}$",
                        "$-460^\\circ\\text{C}$"
                ],
                "correct": 2,
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
                        "$\\Delta T = 288{,}15\\text{ K}$",
                        "$\\Delta T = 15\\text{ K}$",
                        "$\\Delta T = 258{,}15\\text{ K}$",
                        "$\\Delta T = 27\\text{ K}$"
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
                        "Nhiệt độ của thanh sắt thấp hơn nhiệt độ của thanh gỗ.",
                        "Nhiệt độ hai thanh bằng nhau, nhưng sắt dẫn nhiệt tốt hơn gỗ nên nhiệt lượng từ tay truyền sang thanh sắt nhanh hơn.",
                        "Thanh sắt có nhiệt dung riêng lớn hơn thanh gỗ.",
                        "Thanh sắt bức xạ nhiệt mạnh hơn thanh gỗ."
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
                        "Làm tăng độ nhạy giúp thủy ngân dâng lên nhanh hơn khi đo.",
                        "Ngăn không cho cột thủy ngân tự động tụt trở lại bầu khi lấy nhiệt kế ra khỏi cơ thể, giúp đọc nhiệt độ chính xác.",
                        "Bảo vệ bầu nhiệt kế không bị vỡ khi đo ở nhiệt độ cao.",
                        "Ngăn không cho thủy ngân bay hơi ra ngoài không khí."
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
                        "Nhiệt kế rượu.",
                        "Nhiệt kế thủy ngân y tế.",
                        "Nhiệt kế hồng ngoại điện tử.",
                        "Nhiệt kế khí áp kế."
                ],
                "correct": 2,
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
                        "$0^\\circ\\text{C} = 273{,}15\\text{ K}$",
                        "$0{,}01^\\circ\\text{C} = 273{,}16\\text{ K}$",
                        "$100^\\circ\\text{C} = 373{,}15\\text{ K}$",
                        "$-273{,}15^\\circ\\text{C} = 0\\text{ K}$"
                ],
                "correct": 1,
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
                        "Dùng chổi quét thật mạnh gom các giọt thủy ngân lại.",
                        "Dùng máy hút bụi công suất lớn để hút sạch các giọt thủy ngân.",
                        "Rắc ngay bột lưu huỳnh ($\\text{S}$) lên các giọt thủy ngân để tạo thành hợp chất $\\text{HgS}$ rắn không bay hơi rồi mới thu gom.",
                        "Dùng nước nóng dội lên để thủy ngân bay hơi hết vào không khí."
                ],
                "correct": 2,
                "explanation": "Ghi nhớ cốt lõi: Thủy ngân là kim loại lỏng rất độc, dễ bay hơi ở nhiệt độ phòng. Bột lưu huỳnh ($\text{S}$) phản ứng ngay ở nhiệt độ thường với thủy ngân tạo thành mercuric sulfide ($\text{HgS}$) dạng rắn không độc và không bay hơi, giúp việc thu gom an toàn tuyệt đối."
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
},
{
        "id": "u3_mc_16",
        "conceptId": "c_u3_quan_tinh_nhiet_ke_hong_ngoai",
        "image": "images/thermometer_types.jpg",
        "type": "multiple_choice",
        "level": "Vận dụng cao",
        "question": "Tại các cửa khẩu sân bay quốc tế hoặc phòng khám sàng lọc dịch tễ, người ta luôn sử dụng súng đo nhiệt kế hồng ngoại quét trán thay vì dùng nhiệt kế thủy ngân kẹp nách truyền thống. Ưu điểm nổi bật về mặt bản chất vật lý của nhiệt kế hồng ngoại là gì?",
        "options": [
                "Nhiệt kế hồng ngoại phát ra chùm tia X chiếu xuyên qua hộp sọ để đo nhiệt độ não bộ.",
                "Nhiệt kế hồng ngoại không cần chờ quá trình truyền nhiệt tiếp xúc để đạt trạng thái cân bằng nhiệt (không có quán tính nhiệt lớn), nó thu bức xạ hồng ngoại phát ra từ trán truyền bằng tốc độ ánh sáng, cho kết quả tức thời trong 1 giây mà không cần tiếp xúc vật lý.",
                "Nhiệt kế hồng ngoại có độ chính xác cao hơn vì nhiệt độ của trán luôn luôn cao hơn nhiệt độ ở nách $5^\\circ\\text{C}$.",
                "Nhiệt kế hồng ngoại có thể đo được cả khi đối tượng đang chuyển động với tốc độ âm thanh."
        ],
        "correct": 1,
        "explanation": "Tư duy nâng cao: Nhiệt kế thủy ngân hay điện trở cần truyền nhiệt tiếp xúc trực tiếp từ da vào bầu cảm biến, đòi hỏi thời gian từ 3 đến 5 phút để hệ đạt trạng thái cân bằng nhiệt (quán tính nhiệt lớn) và nguy cơ lây nhiễm chéo. Nhiệt kế hồng ngoại hoạt động trên nguyên lý định luật bức xạ nhiệt: mọi vật thể trên $0\\text{ K}$ đều phát bức xạ điện từ hồng ngoại. Cảm biến quang điện tử thu sóng hồng ngoại tức thời ($v = c$), tính toán nhiệt độ trong chưa đầy $1\\text{ s}$ và không cần chạm vào da."
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
                "Chân không ngăn bức xạ nhiệt; lớp tráng bạc ngăn hiện tượng dẫn nhiệt kim loại.",
                "Chân không biến nước sôi thành thể lỏng siêu đặc không tỏa nhiệt.",
                "Lớp tráng bạc tạo ra dòng điện cảm ứng chạy xung quanh làm nước tự đun sôi liên tục."
        ],
        "correct": 0,
        "explanation": "Tư duy nâng cao: Có 3 hình thức truyền nhiệt: 1) Dẫn nhiệt (cần môi trường vật chất dẫn qua va chạm phân tử). 2) Đối lưu (cần dòng chất lưu chuyển động). 3) Bức xạ nhiệt (sóng điện từ truyền được cả trong chân không). Lớp chân không không có phân tử nên triệt tiêu hoàn toàn 100% dẫn nhiệt và đối lưu. Lớp bạc tráng gương có hệ số phản xạ quang học cao sẽ phản xạ ngược lại gần như toàn bộ tia bức xạ nhiệt hồng ngoại vào trong lòng bình. Nhờ vậy cả 3 con đường thất thoát nhiệt đều bị chặn đứng."
},
{
        "id": "u3_mc_18",
        "conceptId": "c_u3_khong_do_tuyet_doi_vi_mo",
        "image": "images/absolute_zero_kelvin.jpg",
        "type": "multiple_choice",
        "level": "Vận dụng cao",
        "question": "Theo Định luật III nhiệt động lực học và thang đo nhiệt độ Kelvin, không thể dùng bất kỳ một chu trình kỹ thuật hữu hạn nào để làm lạnh một hệ vật chất về đúng nhiệt độ Không độ tuyệt đối ($0\\text{ K}$). Luận cứ vật lý sâu sắc nào sau đây chứng minh cho điều này?",
        "options": [
                "Vì ở $0\\text{ K}$ khối lượng của các nguyên tử tăng lên vô hạn khiến máy hút nhiệt bị quá tải.",
                "Để làm lạnh một vật, nhiệt lượng bắt buộc phải tự phát truyền từ vật đó sang một vật khác có nhiệt độ thấp hơn; nhưng vì không tồn tại bất kỳ vật thể nào trong vũ trụ có nhiệt độ dưới $0\\text{ K}$, nên không thể lấy thêm nhiệt khỏi vật khi tiến sát $0\\text{ K}$.",
                "Vì $0\\text{ K}$ là nhiệt độ tưởng tượng hoàn toàn không có ý nghĩa thực nghiệm.",
                "Vì áp suất của chất khí ở $0\\text{ K}$ tăng lên vô hạn phá hủy mọi thiết bị đo."
        ],
        "correct": 1,
        "explanation": "Tư duy nâng cao: Theo ĐL II nhiệt động lực học, nhiệt lượng chỉ tự phát truyền từ nơi có nhiệt độ cao sang nơi có nhiệt độ thấp. $0\\text{ K}$ là trạng thái năng lượng thấp nhất của hệ (động năng tịnh tiến nhiệt của phân tử triệt tiêu, hệ đạt độ trật tự cực đại entropy $S = 0$). Để làm nguội một vật đến đúng $0\\text{ K}$, ta cần một bể chứa nhiệt ở nhiệt độ $< 0\\text{ K}$, điều này là bất khả thi vì nhiệt độ âm trong thang Kelvin không tồn tại. Mọi quá trình làm lạnh hiện đại (như bẫy laser, làm lạnh bay hơi) chỉ có thể tiệm cận sát $0\\text{ K}$ (cỡ nanoKelvin) chứ không bao giờ đạt tới đúng $0\\text{ K}$."
},
{
        "id": "u3_mc_19",
        "conceptId": "c_u3_chuan_diem_ba_nuoc",
        "image": "images/triple_point_water.jpg",
        "type": "multiple_choice",
        "level": "Vận dụng cao",
        "question": "Trong Thang nhiệt độ Quốc tế ITS-90, điểm ba của nước được chọn làm mốc chuẩn nhiệt độ cơ bản tối thượng để định nghĩa độ Kelvin thay vì chọn mốc điểm băng tan ($0^\\circ\\text{C}$) thông thường. Lý do khoa học mang tính quyết định là gì?",
        "options": [
                "Vì điểm ba của nước có nhiệt độ rất cao dễ quan sát bằng mắt thường hơn băng tan.",
                "Điểm băng tan thông thường phụ thuộc vào sự dao động của áp suất khí quyển và hàm lượng không khí hòa tan trong nước; trong khi điểm ba của nước chỉ tồn tại duy nhất tại một trạng thái nhiệt động cố định ($273{,}16\\text{ K}$ và $611{,}65\\text{ Pa}$) với độ tái lập và độ chính xác cực cao.",
                "Vì ở điểm ba của nước, nước chỉ tồn tại ở duy nhất một thể khí.",
                "Vì điểm ba của nước là điểm duy nhất mà khối lượng riêng của nước bằng 0."
        ],
        "correct": 1,
        "explanation": "Tư duy nâng cao: Điểm băng tan ở $1\\text{ atm}$ bị ảnh hưởng bởi áp suất khí quyển thực tế tại nơi thí nghiệm và tạp chất không khí hòa tan trong nước (làm sai lệch tới vài phần nghìn độ). Ngược lại, điểm ba của nước tinh khiết là trạng thái cân bằng nhiệt động đồng thời của cả 3 pha: Rắn, Lỏng và Hơi trong một bình kín hút sạch khí. Trạng thái này chỉ xuất hiện ở đúng một bộ thông số duy nhất không thể xê dịch: $T = 273{,}16\\text{ K}$ ($0{,}01^\\circ\\text{C}$) và $p = 611{,}65\\text{ Pa}$, do đó mang tính tái lập chuẩn xác tuyệt đối trong mọi phòng thí nghiệm chuẩn quốc tế."
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
    }
};

const CLONE_BANK = {
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
                "Các phân tử nước chuyển động chậm lại vì nước nóng lên.",
                "Tốc độ chuyển động hỗn loạn của các phân tử nước tăng lên.",
                "Khoảng cách giữa các phân tử nước giảm đi đáng kể.",
                "Số lượng phân tử nước tự nhiên tăng gấp đôi."
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
                "Nước nóng có khối lượng riêng lớn hơn nước lạnh.",
                "Ở nhiệt độ cao, các phân tử nước và phân tử thuốc tím chuyển động hỗn loạn nhanh hơn.",
                "Thuốc tím chỉ tan được trong nước có nhiệt độ trên $50^\\circ\\text{C}$.",
                "Nước nóng làm phân tử thuốc tím bị vỡ thành nhiều mảnh nhỏ hơn."
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
                "Chậm dần rồi dừng lại hoàn toàn.",
                "Càng trở nên hỗn loạn và có tốc độ dịch chuyển nhanh hơn.",
                "Chuyển thành chuyển động thẳng đều theo một hướng cố định.",
                "Không có bất kỳ sự thay đổi nào."
            ],
            "correct": 1,
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
                "Các phân tử nước chuyển động hỗn loạn và tại mỗi thời điểm, lực va chạm của các phân tử nước lên các phía của hạt phấn hoa không cân bằng nhau.",
                "Lực hấp dẫn của Trái Đất tác dụng lên hạt phấn hoa thay đổi liên tục.",
                "Hạt phấn hoa có dòng điện tự thân đẩy các phân tử nước ra xa.",
                "Ánh sáng kính hiển vi đẩy hạt phấn hoa di chuyển."
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
                "Chỉ tồn tại lực hút khi các phân tử ở gần nhau.",
                "Chỉ tồn tại lực đẩy khi các phân tử ở xa nhau.",
                "Đồng thời tồn tại cả lực hút và lực đẩy giữa các phân tử.",
                "Lực tương tác giữa các phân tử chỉ xuất hiện khi vật bị đun nóng."
            ],
            "correct": 2,
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
                "Giữa các phân tử thủy ngân có lực hút phân tử.",
                "Giữa các phân tử thủy ngân chỉ có lực đẩy.",
                "Thủy ngân không bị cấu tạo từ các phân tử riêng biệt.",
                "Thủy ngân có tính dẻo."
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
                "Lực đẩy chiếm ưu thế, có xu hướng làm thanh kim loại dãn dài hơn nữa.",
                "Lực hút chiếm ưu thế, có xu hướng kéo các phân tử trở lại vị trí cân bằng ban đầu.",
                "Cả lực hút và lực đẩy đều triệt tiêu về 0.",
                "Lực tương tác biến thành lực từ trường."
            ],
            "correct": 1,
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
                "Vì ở thể rắn và lỏng, các phân tử đã ở rất gần nhau ($r \\approx r_0$), khi nén nhẹ ($r < r_0$) thì lực đẩy phân tử tăng vọt và chiếm ưu thế rất lớn.",
                "Vì các phân tử chất rắn và lỏng không có chuyển động nhiệt.",
                "Vì không khí có khối lượng bằng 0 nên dễ nén.",
                "Vì lực ma sát trong chất rắn lớn hơn trong chất khí."
            ],
            "correct": 0,
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
                "Khí > Lỏng > Rắn",
                "Rắn > Lỏng > Khí",
                "Lỏng > Khí > Rắn",
                "Khí > Rắn > Lỏng"
            ],
            "correct": 0,
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
                "Khối lượng các phân tử khí nhỏ hơn phân tử chất rắn.",
                "Khoảng cách giữa các phân tử khí rất lớn so với kích thước phân tử.",
                "Các phân tử khí không mang điện tích.",
                "Nhiệt độ của chất khí luôn thấp hơn chất rắn."
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
                "Có thể tích và hình dạng riêng xác định.",
                "Có thể tích xác định nhưng không có hình dạng riêng mà có hình dạng của phần bình chứa nó.",
                "Không có thể tích riêng và không có hình dạng riêng, chiếm toàn bộ bình chứa.",
                "Có hình dạng xác định nhưng không có thể tích xác định."
            ],
            "correct": 1,
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
                "Có thể tích riêng xác định nhưng hình dạng tự do.",
                "Có khả năng tự khuếch tán và chiếm toàn bộ thể tích của không gian chứa nó.",
                "Luôn chìm xuống dưới sàn nhà do trọng lực.",
                "Chỉ chuyển động khi có gió thổi."
            ],
            "correct": 1,
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
                "Thạch anh.",
                "Kim cương.",
                "Muối ăn (NaCl).",
                "Thủy tinh."
            ],
            "correct": 3,
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
                "Cả hai chất đều nóng chảy ở một nhiệt độ xác định.",
                "Nước đá nóng chảy ở đúng $0^\\circ\\text{C}$ xác định, còn thủy tinh mềm dần trong một khoảng nhiệt độ rộng rồi mới chảy lỏng.",
                "Thủy tinh nóng chảy ở một nhiệt độ xác định, còn nước đá mềm dần.",
                "Cả hai chất đều không có nhiệt độ nóng chảy xác định."
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
                "Vì kim loại thực chất là chất rắn vô định hình.",
                "Vì chúng là chất rắn đa tinh thể gồm vô số tinh thể nhỏ định hướng hỗn loạn ngẫu nhiên, làm cho tính chất vĩ mô theo mọi hướng trở nên như nhau.",
                "Vì khoảng cách giữa các nguyên tử kim loại quá nhỏ.",
                "Vì kim loại có mật độ electron tự do rất lớn."
            ],
            "correct": 1,
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
                "Không có cấu trúc mạng tinh thể tuần hoàn.",
                "Có tính dị hướng mạnh mẽ theo từng phương trục tọa độ.",
                "Không có nhiệt độ nóng chảy xác định.",
                "Có tính đẳng hướng (tính chất vật lý theo mọi hướng là như nhau)."
            ],
            "correct": 1,
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
                "Nước đá có khối lượng riêng nhẹ hơn nước thường.",
                "Nước đá khi tan cần hấp thụ thêm một nhiệt lượng rất lớn từ ly nước cam để phá vỡ mạng tinh thể chất rắn.",
                "Nước đá ngăn cản nhiệt từ bên ngoài truyền vào ly cam.",
                "Nước đá tạo ra dòng điện tích làm lạnh nước cam."
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
                "Tăng dần từ $0^\\circ\\text{C}$ lên $5^\\circ\\text{C}$.",
                "Giảm dần xuống dưới $0^\\circ\\text{C}$ do hấp thụ nhiệt lượng.",
                "Giữ nguyên không đổi ở $0^\\circ\\text{C}$ cho đến khi toàn bộ đá tan hết.",
                "Biến thiên dao động liên tục."
            ],
            "correct": 2,
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
                "Gấp quần áo lại cho gọn và để nơi râm mát kín gió.",
                "Trải rộng quần áo (tăng diện tích mặt thoáng), phơi ở nơi có nắng ấm và nhiều gió.",
                "Cho quần áo vào túi nilon đậy kín dưới trời nắng.",
                "Treo quần áo sát nhau trong phòng kín ẩm ướt."
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
                "Các phân tử ở lớp bề mặt chất lỏng có động năng chuyển động nhiệt đủ lớn thắng được lực hút của các phân tử xung quanh và bứt ra khỏi mặt thoáng.",
                "Các phân tử chất lỏng bị lực hút của không khí kéo ra ngoài.",
                "Các phân tử chất lỏng bị vỡ ra thành các nguyên tử khí nhẹ hơn.",
                "Trọng lực đẩy các phân tử chất lỏng bay lên trời."
            ],
            "correct": 0,
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
                "Chuyển từ thể rắn sang thể lỏng.",
                "Chuyển từ thể khí sang thể lỏng.",
                "Chuyển từ thể lỏng sang thể khí.",
                "Chuyển từ thể rắn sang thể khí."
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
                "Đó là hơi nước ở nhiệt độ cao nhìn thấy được bằng mắt thường.",
                "Đó là các giọt nước li ti được hình thành do hơi nước nóng từ vòi ấm gặp không khí lạnh bên ngoài và ngưng tụ lại.",
                "Đó là khói do kim loại của ấm bị cháy sinh ra.",
                "Đó là các phân tử không khí bị phân hủy thành bụi trắng."
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
                "Đúng $100^\\circ\\text{C}$ không đổi.",
                "Cao hơn $100^\\circ\\text{C}$ (khoảng $120^\\circ\\text{C}$).",
                "Thấp hơn $100^\\circ\\text{C}$ (khoảng $70^\\circ\\text{C}$), do đó luộc trứng rất khó chín.",
                "Nước không thể sôi trên núi cao."
            ],
            "correct": 2,
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
                "Sự bay hơi chỉ xảy ra ở nhiệt độ cao, sự sôi xảy ra ở nhiệt độ thấp.",
                "Sự bay hơi chỉ xảy ra ở bề mặt thoáng ở mọi nhiệt độ, còn sự sôi là sự bay hơi xảy ra đồng thời ở cả bề mặt và trong lòng chất lỏng ở nhiệt độ sôi xác định.",
                "Sự sôi giải phóng khí oxi còn sự bay hơi giải phóng hơi nước.",
                "Sự bay hơi cần cung cấp nhiệt lượng còn sự sôi tự phát tỏa nhiệt."
            ],
            "correct": 1,
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
                "Tăng lên do thế năng trọng trường chuyển hóa thành nội năng.",
                "Không thay đổi vì nhiệt độ và khoảng cách giữa các phân tử của vật không đổi.",
                "Giảm đi do động năng của vật tăng lên.",
                "Bằng 0 vì vật chỉ có cơ năng."
            ],
            "correct": 1,
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
                "Oát (W)",
                "Jun (J)",
                "Niu-tơn (N)",
                "Paxcan (Pa)"
            ],
            "correct": 1,
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
                "Thế năng tương tác giữa các phân tử đồng tăng mạnh.",
                "Động năng chuyển động nhiệt hỗn loạn của các nguyên tử đồng quanh vị trí cân bằng tăng lên.",
                "Số lượng nguyên tử đồng bên trong thanh tăng thêm.",
                "Khối lượng của thanh đồng tăng lên."
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
                "Nội năng không đổi vì nhiệt độ không đổi.",
                "Nội năng thay đổi vì khi nén thể tích giảm, khoảng cách giữa các phân tử giảm làm thế năng tương tác phân tử thay đổi.",
                "Nội năng luôn giảm về 0.",
                "Nội năng tăng gấp đôi."
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
                "$\\Delta U > 0$",
                "$\\Delta U < 0$",
                "$\\Delta U = 0$",
                "Không xác định được nếu chưa biết áp suất."
            ],
            "correct": 2,
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
                "Các phân tử khí lý tưởng không có khối lượng.",
                "Mô hình khí lý tưởng bỏ qua lực tương tác giữa các phân tử khi không va chạm, do đó thế năng tương tác phân tử bằng 0.",
                "Thể tích của khí lý tưởng luôn bằng 0.",
                "Nhiệt độ của khí lý tưởng luôn bằng $0\\text{ K}$."
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
                "Thả miếng kim loại vào một cốc nước sôi.",
                "Dùng búa đập liên tục nhiều lần vào một thanh sắt trên đe làm thanh sắt nóng lên.",
                "Phơi một miếng sắt ngoài trời nắng gắt.",
                "Áp miếng kim loại vào một cốc nước đá."
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
                "Cọ xát hai bàn tay vào nhau trong mùa đông để làm ấm tay.",
                "Mài một con dao trên bàn mài làm lưỡi dao nóng lên.",
                "Thả một chiếc thìa nhôm vào cốc nước nóng làm cán thìa nóng lên.",
                "Bơm căng bánh xe đạp làm ống bơm nóng lên."
            ],
            "correct": 2,
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
                "Hoàn toàn chính xác theo định nghĩa của SGK.",
                "Chưa chính xác, vì vật chỉ chứa nội năng; nhiệt lượng chỉ xuất hiện khi có sự trao đổi năng lượng giữa các vật có nhiệt độ khác nhau.",
                "Chính xác vì nhiệt lượng và nội năng là một.",
                "Sai vì cơ thể người không có năng lượng."
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
                "Vô cùng lớn.",
                "Bằng 0.",
                "Bằng tổng nội năng của hai vật.",
                "Bằng hiệu nhiệt độ của hai vật."
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
                "Sự vận dụng định luật bảo toàn và chuyển hóa năng lượng vào các hiện tượng nhiệt.",
                "Định luật về sự nở vì nhiệt của các chất rắn.",
                "Định luật xác định vận tốc của các phân tử khí.",
                "Định luật về sự dẫn điện trong kim loại."
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
                "Nội năng của hệ không đổi.",
                "Nội năng của hệ tăng lên.",
                "Nội năng của hệ giảm đi.",
                "Hệ không trao đổi công và nhiệt lượng với môi trường."
            ],
            "correct": 1,
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
                "$Q > 0$ (khối nước nhận nhiệt lượng).",
                "$Q < 0$ (khối nước truyền nhiệt lượng ra môi trường).",
                "$Q = 0$ (ấm nước cách nhiệt hoàn hảo).",
                "$Q$ mang dấu dương hay âm tùy thuộc vào thể tích ấm."
            ],
            "correct": 1,
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
                "$Q > 0$ vì nó nhận nhiệt lượng từ không khí để phá vỡ cấu trúc tinh thể.",
                "$Q < 0$ vì nó làm không khí xung quanh lạnh đi.",
                "$Q = 0$ vì nhiệt độ không thay đổi.",
                "$Q$ luôn bằng công $A$."
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
                "$A > 0$",
                "$A < 0$",
                "$A = 0$",
                "Dấu của $A$ phụ thuộc vào nhiệt độ môi trường."
            ],
            "correct": 0,
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
                "$A > 0$ vì khí có áp suất rất lớn.",
                "$A < 0$ vì khí thực hiện công lên pít-tông (sinh công ra môi trường).",
                "$A = 0$ vì pít-tông chuyển động quá nhanh.",
                "Không có công cơ học nào được sinh ra."
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
                "$\\Delta U = 0$",
                "$\\Delta U = 320\\text{ J}$",
                "$\\Delta U = -320\\text{ J}$",
                "$\\Delta U = 640\\text{ J}$"
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
                "Tăng lên vì áp suất tăng.",
                "Giảm xuống vì nội năng của khí giảm ($\\Delta U = A = -150\\text{ J}$).",
                "Không thay đổi vì không có sự truyền nhiệt ($Q = 0$).",
                "Tăng lên gấp đôi."
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
                "Không khí bị ma sát tạo ra tia lửa điện.",
                "Công nén nhanh làm nội năng và nhiệt độ của không khí tăng vọt vượt quá nhiệt độ bắt cháy của bông gòn.",
                "Áp suất cao làm biến đổi cấu trúc hóa học của bông gòn thành chất dễ cháy.",
                "Ống nghiệm hấp thụ nhiệt từ tay người làm nóng bông."
            ],
            "correct": 1,
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
                "Bơm thật nhanh và dồn dập.",
                "Bơm từ từ với nhịp đều đặn và tra dầu bôi trơn để giảm ma sát của pít-tông.",
                "Đổ nước đá vào trong lòng ống bơm.",
                "Khóa chặt van xả của bơm."
            ],
            "correct": 1,
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
                "Hai vật có cùng khối lượng và nội năng.",
                "Các phân tử cấu tạo nên hai vật có động năng tịnh tiến trung bình bằng nhau.",
                "Hai vật chứa cùng một nhiệt lượng.",
                "Lực tương tác giữa các phân tử của hai vật bằng nhau."
            ],
            "correct": 1,
            "explanation": "Ghi nhớ cốt lõi: Về mặt vi mô, nhiệt độ là đại lượng tỷ lệ thuận với động năng tịnh tiến trung bình của các phân tử: $\\bar{E}_đ = \\frac{3}{2} k T$. Hai vật có cùng nhiệt độ thì động năng trung bình của các phân tử bằng nhau."
        },
        {
            "id": "clone_u3_knnd_v2",
            "conceptId": "c_u3_khai_niem_nhiet_do",
                "image": "images/temp_molecular_speed.jpg",
            "type": "multiple_choice",
            "level": "Nhận biết",
            "question": "Đại lượng vật lý nào cho biết mức độ nóng hay lạnh của một vật?",
            "options": [
                "Nhiệt lượng.",
                "Nội năng.",
                "Nhiệt độ.",
                "Khối lượng riêng."
            ],
            "correct": 2,
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
                "Từ thỏi nhôm sang ca nước vì nhôm dẫn nhiệt tốt hơn.",
                "Từ ca nước sang thỏi nhôm vì nước có nhiệt độ cao hơn nhôm.",
                "Không có sự truyền nhiệt vì cả hai đã ở trong cùng một phòng.",
                "Truyền qua lại đồng thời với tốc độ bằng nhau."
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
                "Nhiệt lượng truyền từ xô nước đá sang giọt nước vì xô nước có nội năng lớn hơn nhiều.",
                "Nhiệt lượng tự phát truyền từ giọt nước sôi ($100^\\circ\\text{C}$) sang khối nước đá ($0^\\circ\\text{C}$) vì giọt nước có nhiệt độ cao hơn.",
                "Hai vật không truyền nhiệt cho nhau do chênh lệch thể tích quá lớn.",
                "Nhiệt lượng bị triệt tiêu tức thì."
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
                "Vật A và vật C cũng ở trạng thái cân bằng nhiệt với nhau và có cùng nhiệt độ.",
                "Vật A có nhiệt độ cao hơn vật C.",
                "Vật A có nội năng gấp đôi vật C.",
                "Không thể kết luận gì về mối liên hệ giữa vật A và C."
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
                "Để nhiệt kế hấp thụ hết nhiệt lượng của cơ thể làm cạn nguồn nhiệt.",
                "Để nhiệt kế và cơ thể bệnh nhân đạt tới trạng thái cân bằng nhiệt, khi đó nhiệt độ của nhiệt kế bằng đúng nhiệt độ cơ thể.",
                "Để thủy ngân trong nhiệt kế đông đặc lại.",
                "Để áp suất khí quyển xung quanh giảm xuống mức đo được."
            ],
            "correct": 1,
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
                "Vì ở $0\\text{ K}$, động năng chuyển động nhiệt hỗn loạn của các phân tử đã triệt tiêu (đạt mức cực tiểu lý thuyết), năng lượng không thể âm hơn mức tối thiểu này.",
                "Vì các máy làm lạnh hiện đại chưa đủ công suất.",
                "Vì ở $0\\text{ K}$ khối lượng của vật chất bị biến mất hoàn toàn.",
                "Vì áp suất khí quyển ngăn không cho nhiệt độ giảm tiếp."
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
                "Thang đo Kelvin không có giá trị nhiệt độ âm.",
                "Nhiệt độ $0\\text{ K}$ tương ứng với $-273{,}15^\\circ\\text{C}$.",
                "Nhiệt độ $0\\text{ K}$ là nhiệt độ đóng băng của nước tinh khiết ở $1\\text{ atm}$.",
                "Độ biến thiên nhiệt độ $1\\text{ K}$ bằng đúng $1^\\circ\\text{C}$."
            ],
            "correct": 2,
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
                "$\\Delta T = 50\\text{ K}$",
                "$\\Delta T = 323{,}15\\text{ K}$",
                "$\\Delta T = 293{,}15\\text{ K}$",
                "$\\Delta T = 90\\text{ K}$"
            ],
            "correct": 0,
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
                "Bị sai lệch một lượng $273{,}15\\text{ J}$.",
                "Hoàn toàn không thay đổi vì $\\Delta T(\\text{K}) = \\Delta t(^\\circ\\text{C})$.",
                "Bị tăng lên gấp $1{,}8$ lần.",
                "Bị giảm đi $273{,}15$ lần."
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
                "Nhiệt độ của tấm tôn thực chất cao hơn tấm gỗ rất nhiều.",
                "Nhiệt độ hai tấm bằng nhau, nhưng tôn dẫn nhiệt tốt hơn nên nhiệt truyền từ tôn sang tay nhanh hơn.",
                "Tấm gỗ tự tỏa ra hơi lạnh.",
                "Kim loại có khả năng tự phát nhiệt dưới ánh sáng."
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
                "Gạch rỗng và xốp chứa nhiều không khí đứng yên, mà không khí là chất dẫn nhiệt rất kém.",
                "Gạch rỗng tự sinh ra dòng đối lưu làm mát nhà.",
                "Xốp phản xạ $100\\%$ ánh sáng mặt trời.",
                "Xốp có khối lượng rất nhẹ."
            ],
            "correct": 0,
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
                "$0^\\circ\\text{C}$ đến $100^\\circ\\text{C}$",
                "$35^\\circ\\text{C}$ đến $42^\\circ\\text{C}$",
                "$-10^\\circ\\text{C}$ đến $50^\\circ\\text{C}$",
                "$30^\\circ\\text{C}$ đến $50^\\circ\\text{C}$"
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
                "Hơ bầu nhiệt kế trên ngọn lửa đèn cồn.",
                "Cầm chặt đuôi nhiệt kế và vẩy mạnh nhiều lần xuống dưới.",
                "Ngâm nhiệt kế vào nước sôi $100^\\circ\\text{C}$.",
                "Phơi nhiệt kế dưới ánh nắng mặt trời."
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
                "Nhiệt kế thủy ngân y tế.",
                "Nhiệt kế bức xạ hồng ngoại đo từ xa.",
                "Nhiệt kế rượu thông thường.",
                "Nhiệt kế kim loại dãn nở."
            ],
            "correct": 1,
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
                "Sự biến thiên điện trở của kim loại hoặc bán dẫn theo nhiệt độ.",
                "Sự dãn nở thể tích của cột chất lỏng khi đun nóng.",
                "Sự đổi màu của chất lỏng khi gặp ánh sáng.",
                "Lực hút tĩnh điện giữa các bản tụ điện."
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
                "Chỉ có thể lỏng và thể hơi.",
                "Chỉ có thể rắn và thể lỏng.",
                "Đồng thời cả ba thể: rắn (băng), lỏng (nước) và khí (hơi nước) ở trạng thái cân bằng nhiệt động.",
                "Thể plasma."
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
                "Vì điểm ba của nước chỉ xảy ra ở một nhiệt độ và áp suất cực kỳ xác định, hoàn toàn không bị ảnh hưởng bởi tạp chất khí quyển bên ngoài.",
                "Vì điểm ba của nước dễ tạo ra hơn trong đời sống hằng ngày.",
                "Vì điểm đóng băng của nước không bao giờ cố định.",
                "Vì điểm ba của nước ứng với $0\\text{ K}$."
            ],
            "correct": 0,
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
                "Bột mì.",
                "Bột lưu huỳnh (Sulfur).",
                "Bột vôi sống.",
                "Muối ăn (NaCl)."
            ],
            "correct": 1,
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
                "Vì thủy ngân quá nặng làm cháy động cơ máy hút bụi.",
                "Vì luồng khí nóng từ máy hút bụi sẽ làm thủy ngân bốc hơi cực nhanh và thổi bụi hơi thủy ngân độc hại lan tỏa khắp phòng.",
                "Vì thủy ngân làm hỏng màng lọc của máy hút bụi.",
                "Vì máy hút bụi làm biến đổi thủy ngân thành chất phóng xạ."
            ],
            "correct": 1,
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
                        "Lên cao không khí loãng, nhiệt lượng từ ngọn lửa truyền cho nước chậm hơn nên nước không đủ năng lượng làm chín thức ăn.",
                        "Càng lên cao áp suất khí quyển càng giảm, các bọt hơi nước dễ dàng thắng áp suất mặt thoáng để thoát ra ngoài ở nhiệt độ thấp ($70^\\circ\\text{C}$), khiến nước sôi mà động năng phân tử chưa đủ cao để làm chín thức ăn.",
                        "Nhiệt độ môi trường trên đỉnh núi rất thấp làm cho cấu trúc phân tử của nước bị biến tính không thể truyền nhiệt vào thức ăn.",
                        "Khối lượng riêng của nước giảm mạnh ở độ cao lớn làm giảm khả năng dẫn nhiệt của nước."
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
                        "Lên cao không khí loãng, nhiệt lượng từ ngọn lửa truyền cho nước chậm hơn nên nước không đủ năng lượng làm chín thức ăn.",
                        "Càng lên cao áp suất khí quyển càng giảm, các bọt hơi nước dễ dàng thắng áp suất mặt thoáng để thoát ra ngoài ở nhiệt độ thấp ($70^\\circ\\text{C}$), khiến nước sôi mà động năng phân tử chưa đủ cao để làm chín thức ăn.",
                        "Nhiệt độ môi trường trên đỉnh núi rất thấp làm cho cấu trúc phân tử của nước bị biến tính không thể truyền nhiệt vào thức ăn.",
                        "Khối lượng riêng của nước giảm mạnh ở độ cao lớn làm giảm khả năng dẫn nhiệt của nước."
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
                        "Làm nguội quá nhanh khiến các nguyên tử bị mất hết electron và trở thành ion tự do đứng yên.",
                        "Làm nguội cực nhanh khiến các nguyên tử không kịp di chuyển và sắp xếp vào các vị trí nút mạng tuần hoàn trật tự xa, bị 'đóng băng' ở trạng thái hỗn loạn trật tự gần của chất lỏng.",
                        "Nhiệt độ hạ đột ngột làm lực đẩy phân tử triệt tiêu hoàn toàn, các nguyên tử dính chặt vào nhau tạo thành đơn tinh thể hoàn hảo.",
                        "Áp suất giảm đột ngột biến kim loại từ thể lỏng chuyển thẳng sang thể khí rồi ngưng kết thành tinh thể."
                ],
                "correct": 1,
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
                        "Làm nguội quá nhanh khiến các nguyên tử bị mất hết electron và trở thành ion tự do đứng yên.",
                        "Làm nguội cực nhanh khiến các nguyên tử không kịp di chuyển và sắp xếp vào các vị trí nút mạng tuần hoàn trật tự xa, bị 'đóng băng' ở trạng thái hỗn loạn trật tự gần của chất lỏng.",
                        "Nhiệt độ hạ đột ngột làm lực đẩy phân tử triệt tiêu hoàn toàn, các nguyên tử dính chặt vào nhau tạo thành đơn tinh thể hoàn hảo.",
                        "Áp suất giảm đột ngột biến kim loại từ thể lỏng chuyển thẳng sang thể khí rồi ngưng kết thành tinh thể."
                ],
                "correct": 1,
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
                        "Không khí ẩm có khối lượng riêng lớn hơn nên cản trở sự chuyển động của con người.",
                        "Trong không khí có độ ẩm quá cao, tốc độ ngưng tụ hơi nước xấp xỉ tốc độ bay hơi, mồ hôi trên da không thể bay hơi để mang đi nhiệt lượng (nhiệt hóa hơi), khiến cơ thể bị tích nhiệt gây sốc nhiệt.",
                        "Nước trong không khí ẩm dẫn nhiệt trực tiếp từ mặt trời vào cơ thể nhanh hơn không khí khô.",
                        "Áp suất khí quyển trong ngày ẩm cao hơn nhiều ngày khô làm tim phải đập nhanh hơn."
                ],
                "correct": 1,
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
                        "Không khí ẩm có khối lượng riêng lớn hơn nên cản trở sự chuyển động của con người.",
                        "Trong không khí có độ ẩm quá cao, tốc độ ngưng tụ hơi nước xấp xỉ tốc độ bay hơi, mồ hôi trên da không thể bay hơi để mang đi nhiệt lượng (nhiệt hóa hơi), khiến cơ thể bị tích nhiệt gây sốc nhiệt.",
                        "Nước trong không khí ẩm dẫn nhiệt trực tiếp từ mặt trời vào cơ thể nhanh hơn không khí khô.",
                        "Áp suất khí quyển trong ngày ẩm cao hơn nhiều ngày khô làm tim phải đập nhanh hơn."
                ],
                "correct": 1,
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
                        "Chuyển hóa hoàn toàn thành động năng chuyển động nhiệt hỗn loạn của các phân tử nước.",
                        "Không hề truyền vào cốc nước mà thất thoát 100% ra không khí xung quanh.",
                        "Chuyển hóa thành thế năng tương tác giữa các phân tử nước để bẻ gãy cấu trúc mạng tinh thể băng rỗng, làm tăng nội năng của hệ.",
                        "Chuyển hóa thành quang năng phát sáng bên trong khối nước."
                ],
                "correct": 2,
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
                        "Chuyển hóa hoàn toàn thành động năng chuyển động nhiệt hỗn loạn của các phân tử nước.",
                        "Không hề truyền vào cốc nước mà thất thoát 100% ra không khí xung quanh.",
                        "Chuyển hóa thành thế năng tương tác giữa các phân tử nước để bẻ gãy cấu trúc mạng tinh thể băng rỗng, làm tăng nội năng của hệ.",
                        "Chuyển hóa thành quang năng phát sáng bên trong khối nước."
                ],
                "correct": 2,
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
                        "Đá khô có khối lượng riêng nhẹ hơn nước đá và tỏa ra oxy khi tan chảy.",
                        "Đá khô thăng hoa trực tiếp từ thể rắn sang thể khí ở $-78{,}5^\\circ\\text{C}$ mà không qua thể lỏng, thu nhiệt lượng cực lớn duy trì nhiệt độ siêu lạnh ổn định và giữ thùng chứa hoàn toàn khô ráo.",
                        "Đá khô có khả năng tự phát quang giúp nhận biết khi vaccine bị hỏng.",
                        "Đá khô phản ứng hóa học với vỏ hộp vaccine để tạo lớp màng bảo vệ chân không."
                ],
                "correct": 1,
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
                        "Đá khô có khối lượng riêng nhẹ hơn nước đá và tỏa ra oxy khi tan chảy.",
                        "Đá khô thăng hoa trực tiếp từ thể rắn sang thể khí ở $-78{,}5^\\circ\\text{C}$ mà không qua thể lỏng, thu nhiệt lượng cực lớn duy trì nhiệt độ siêu lạnh ổn định và giữ thùng chứa hoàn toàn khô ráo.",
                        "Đá khô có khả năng tự phát quang giúp nhận biết khi vaccine bị hỏng.",
                        "Đá khô phản ứng hóa học với vỏ hộp vaccine để tạo lớp màng bảo vệ chân không."
                ],
                "correct": 1,
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
                        "$\\Delta U > 0$ và công sinh ra bằng 0 vì chu trình quay về điểm xuất phát.",
                        "$\\Delta U = 0$ và công $A'$ sinh ra có độ lớn bằng đúng diện tích phần mặt phẳng giới hạn bởi chu trình khép kín trên đồ thị $p-V$.",
                        "$\\Delta U < 0$ vì khí đã sinh công ra môi trường.",
                        "Công $A'$ luôn bằng 0 trong mọi chu trình kín."
                ],
                "correct": 1,
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
                        "$\\Delta U > 0$ và công sinh ra bằng 0 vì chu trình quay về điểm xuất phát.",
                        "$\\Delta U = 0$ và công $A'$ sinh ra có độ lớn bằng đúng diện tích phần mặt phẳng giới hạn bởi chu trình khép kín trên đồ thị $p-V$.",
                        "$\\Delta U < 0$ vì khí đã sinh công ra môi trường.",
                        "Công $A'$ luôn bằng 0 trong mọi chu trình kín."
                ],
                "correct": 1,
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
                        "Khí $\\text{CO}_2$ phản ứng hóa học tỏa nhiệt với hơi nước trong không khí.",
                        "Khí nén dãn nở cực nhanh ra ngoài sinh công lớn chống lại áp suất khí quyển ($A < 0$), quá trình diễn ra quá nhanh nên trao đổi nhiệt không đáng kể ($Q \\approx 0$), dẫn đến nội năng giảm mạnh ($\\Delta U = A < 0$) làm nhiệt độ tụt sâu.",
                        "Bình chữa cháy có gắn một động cơ điện mini làm lạnh khí trước khi phun.",
                        "Áp suất ngoài khí quyển cao hơn áp suất trong bình ép các phân tử $\\text{CO}_2$ đóng băng."
                ],
                "correct": 1,
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
                        "Khí $\\text{CO}_2$ phản ứng hóa học tỏa nhiệt với hơi nước trong không khí.",
                        "Khí nén dãn nở cực nhanh ra ngoài sinh công lớn chống lại áp suất khí quyển ($A < 0$), quá trình diễn ra quá nhanh nên trao đổi nhiệt không đáng kể ($Q \\approx 0$), dẫn đến nội năng giảm mạnh ($\\Delta U = A < 0$) làm nhiệt độ tụt sâu.",
                        "Bình chữa cháy có gắn một động cơ điện mini làm lạnh khí trước khi phun.",
                        "Áp suất ngoài khí quyển cao hơn áp suất trong bình ép các phân tử $\\text{CO}_2$ đóng băng."
                ],
                "correct": 1,
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
                        "Khối khí trong lốp chỉ nhận nhiệt lượng ($Q > 0$) từ mặt đường chứ không nhận công ($A = 0$).",
                        "Lốp xe bị biến dạng đàn hồi liên tục do lăn trên đường và ma sát sinh công ($A > 0$), đồng thời nhận nhiệt lượng ($Q > 0$) từ mặt đường nóng; cả hai làm nội năng tăng mạnh ($\\Delta U = A + Q > 0$), nhiệt độ tăng cao trong khi thể tích lốp không đổi dẫn đến áp suất khí tăng vọt gây nổ lốp.",
                        "Khối khí sinh công ra bên ngoài làm nội năng giảm nhưng vỏ cao su bị nóng chảy.",
                        "Không khí bên trong lốp bị phân hủy thành các khí nhẹ hơn làm tăng đột biến số mol khí."
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
                        "Khối khí trong lốp chỉ nhận nhiệt lượng ($Q > 0$) từ mặt đường chứ không nhận công ($A = 0$).",
                        "Lốp xe bị biến dạng đàn hồi liên tục do lăn trên đường và ma sát sinh công ($A > 0$), đồng thời nhận nhiệt lượng ($Q > 0$) từ mặt đường nóng; cả hai làm nội năng tăng mạnh ($\\Delta U = A + Q > 0$), nhiệt độ tăng cao trong khi thể tích lốp không đổi dẫn đến áp suất khí tăng vọt gây nổ lốp.",
                        "Khối khí sinh công ra bên ngoài làm nội năng giảm nhưng vỏ cao su bị nóng chảy.",
                        "Không khí bên trong lốp bị phân hủy thành các khí nhẹ hơn làm tăng đột biến số mol khí."
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
                        "Nhiệt kế hồng ngoại phát ra chùm tia X chiếu xuyên qua hộp sọ để đo nhiệt độ não bộ.",
                        "Nhiệt kế hồng ngoại không cần chờ quá trình truyền nhiệt tiếp xúc để đạt trạng thái cân bằng nhiệt (không có quán tính nhiệt lớn), nó thu bức xạ hồng ngoại phát ra từ trán truyền bằng tốc độ ánh sáng, cho kết quả tức thời trong 1 giây mà không cần tiếp xúc vật lý.",
                        "Nhiệt kế hồng ngoại có độ chính xác cao hơn vì nhiệt độ của trán luôn luôn cao hơn nhiệt độ ở nách $5^\\circ\\text{C}$.",
                        "Nhiệt kế hồng ngoại có thể đo được cả khi đối tượng đang chuyển động với tốc độ âm thanh."
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
                        "Nhiệt kế hồng ngoại phát ra chùm tia X chiếu xuyên qua hộp sọ để đo nhiệt độ não bộ.",
                        "Nhiệt kế hồng ngoại không cần chờ quá trình truyền nhiệt tiếp xúc để đạt trạng thái cân bằng nhiệt (không có quán tính nhiệt lớn), nó thu bức xạ hồng ngoại phát ra từ trán truyền bằng tốc độ ánh sáng, cho kết quả tức thời trong 1 giây mà không cần tiếp xúc vật lý.",
                        "Nhiệt kế hồng ngoại có độ chính xác cao hơn vì nhiệt độ của trán luôn luôn cao hơn nhiệt độ ở nách $5^\\circ\\text{C}$.",
                        "Nhiệt kế hồng ngoại có thể đo được cả khi đối tượng đang chuyển động với tốc độ âm thanh."
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
                        "Chân không ngăn bức xạ nhiệt; lớp tráng bạc ngăn hiện tượng dẫn nhiệt kim loại.",
                        "Chân không biến nước sôi thành thể lỏng siêu đặc không tỏa nhiệt.",
                        "Lớp tráng bạc tạo ra dòng điện cảm ứng chạy xung quanh làm nước tự đun sôi liên tục."
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
                        "Chân không ngăn bức xạ nhiệt; lớp tráng bạc ngăn hiện tượng dẫn nhiệt kim loại.",
                        "Chân không biến nước sôi thành thể lỏng siêu đặc không tỏa nhiệt.",
                        "Lớp tráng bạc tạo ra dòng điện cảm ứng chạy xung quanh làm nước tự đun sôi liên tục."
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
                        "Vì ở $0\\text{ K}$ khối lượng của các nguyên tử tăng lên vô hạn khiến máy hút nhiệt bị quá tải.",
                        "Để làm lạnh một vật, nhiệt lượng bắt buộc phải tự phát truyền từ vật đó sang một vật khác có nhiệt độ thấp hơn; nhưng vì không tồn tại bất kỳ vật thể nào trong vũ trụ có nhiệt độ dưới $0\\text{ K}$, nên không thể lấy thêm nhiệt khỏi vật khi tiến sát $0\\text{ K}$.",
                        "Vì $0\\text{ K}$ là nhiệt độ tưởng tượng hoàn toàn không có ý nghĩa thực nghiệm.",
                        "Vì áp suất của chất khí ở $0\\text{ K}$ tăng lên vô hạn phá hủy mọi thiết bị đo."
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
                        "Vì ở $0\\text{ K}$ khối lượng của các nguyên tử tăng lên vô hạn khiến máy hút nhiệt bị quá tải.",
                        "Để làm lạnh một vật, nhiệt lượng bắt buộc phải tự phát truyền từ vật đó sang một vật khác có nhiệt độ thấp hơn; nhưng vì không tồn tại bất kỳ vật thể nào trong vũ trụ có nhiệt độ dưới $0\\text{ K}$, nên không thể lấy thêm nhiệt khỏi vật khi tiến sát $0\\text{ K}$.",
                        "Vì $0\\text{ K}$ là nhiệt độ tưởng tượng hoàn toàn không có ý nghĩa thực nghiệm.",
                        "Vì áp suất của chất khí ở $0\\text{ K}$ tăng lên vô hạn phá hủy mọi thiết bị đo."
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
                        "Vì điểm ba của nước có nhiệt độ rất cao dễ quan sát bằng mắt thường hơn băng tan.",
                        "Điểm băng tan thông thường phụ thuộc vào sự dao động của áp suất khí quyển và hàm lượng không khí hòa tan trong nước; trong khi điểm ba của nước chỉ tồn tại duy nhất tại một trạng thái nhiệt động cố định ($273{,}16\\text{ K}$ và $611{,}65\\text{ Pa}$) với độ tái lập và độ chính xác cực cao.",
                        "Vì ở điểm ba của nước, nước chỉ tồn tại ở duy nhất một thể khí.",
                        "Vì điểm ba của nước là điểm duy nhất mà khối lượng riêng của nước bằng 0."
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
                        "Vì điểm ba của nước có nhiệt độ rất cao dễ quan sát bằng mắt thường hơn băng tan.",
                        "Điểm băng tan thông thường phụ thuộc vào sự dao động của áp suất khí quyển và hàm lượng không khí hòa tan trong nước; trong khi điểm ba của nước chỉ tồn tại duy nhất tại một trạng thái nhiệt động cố định ($273{,}16\\text{ K}$ và $611{,}65\\text{ Pa}$) với độ tái lập và độ chính xác cực cao.",
                        "Vì ở điểm ba của nước, nước chỉ tồn tại ở duy nhất một thể khí.",
                        "Vì điểm ba của nước là điểm duy nhất mà khối lượng riêng của nước bằng 0."
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
        }
    ]
};

// Attach to window object for browser access
if (typeof window !== 'undefined') {
    window.QUESTION_BANK = QUESTION_BANK;
    window.CLONE_BANK = CLONE_BANK;
}
