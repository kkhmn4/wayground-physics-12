# ⚛️ Wayground Physics 12 - Đấu Trường Trắc Nghiệm & Củng Cố Kiến Thức

> **Nền tảng học tập trò chơi hóa (Gamified Learning Web App)** môn **Vật Lí 12 - Chương 1: Vật Lí Nhiệt (Chương trình GDPT 2018)** với cơ chế củng cố thích ứng Vòng 2 và phân tích học tập thời gian thực cho giáo viên.

🌐 **Trải nghiệm trực tuyến (Live Demo):** [https://kkhmn4.github.io/wayground-physics-12/](https://kkhmn4.github.io/wayground-physics-12/)

---

## 🌟 Tính Năng Nổi Bật

### 1. 🔀 Xáo Trộn Ngẫu Nhiên Toàn Diện (Anti-Cheat & Fresh Every Run)
- Ứng dụng thuật toán **Fisher-Yates (Knuth Shuffle)** độc lập trên bản sao `deep clone` cho từng lượt chơi.
- Đảo ngẫu nhiên cả **thứ tự câu hỏi** lẫn **thứ tự 4 phương án A, B, C, D**.
- Tự động đồng bộ chính xác 100% vị trí đáp án đúng: phím tắt `1/2/3/4`, phím `A/B/C/D`, trợ giúp `50/50` loại bỏ 2 đáp án sai, tính điểm và báo cáo giáo viên luôn chuẩn xác.

### 2. ⚡ Bộ Chọn 3 Mức Độ Học Tập & Tất Cả
- 🌱 **Cơ Bản (Học Bài & Nhận Biết)**: Tập trung vào các định nghĩa cốt lõi, mô hình phân tử, thang nhiệt độ cơ bản, kiểm tra thuộc bài.
- 🎯 **Thử Thách (Thông Hiểu & Tư Duy)**: Phân tích bản chất vi mô, so sánh hiện tượng, tính toán biến thiên nội năng $\Delta U = A + Q$, quy đổi độ Kelvin - Celsius - Fahrenheit.
- 🚀 **Nâng Cao (Vận Dụng Cao & Thực Tế Sâu)**: Bài toán tư duy phản biện, liên hệ thực tiễn sinh động (luộc thức ăn trên đỉnh Everest, chu trình khí kín trên đồ thị $p-V$, dãn nở đoạn nhiệt bình cứu hỏa $\text{CO}_2$, nổ lốp ô tô mùa hè, nhiệt độ trùng phùng $t^\circ\text{F} = 2 t^\circ\text{C}$, chuẩn điểm ba của nước).
- 🌟 **Tất Cả Mức Độ**: Mặc định kết hợp toàn bộ ngân hàng câu hỏi để thi đấu toàn diện.

### 3. 🔬 100% Câu Hỏi Có Hình Minh Họa Khoa Học Chuẩn SGK
- 29 hình minh họa khoa học thiết kế chuyên sâu bằng tiếng Việt sắc nét.
- Tích hợp **Lightbox Modal**: nhấp vào bất kỳ ảnh nào để phóng to chi tiết, quan sát cấu trúc phân tử và sơ đồ thí nghiệm.

### 4. 🔄 Vòng 2 Phụ Đạo Thích Ứng (Adaptive Remediation Loop)
- Tự động bắt các câu hỏi học sinh làm sai ở Lượt 1.
- Truy vấn từ ngân hàng **CLONE_BANK** (132 câu bản sao tương đương) để học sinh làm lại ngay câu tương tự, khắc phục lỗ hổng kiến thức ngay trong tiết học.

### 5. 📊 Bảng Báo Cáo Giáo Viên (Teacher Analytics Dashboard)
- Thống kê tỷ lệ chính xác, số điểm, chuỗi combo đạt được.
- Chi tiết lịch sử từng câu hỏi (phương án chọn, đáp án đúng, trạng thái đạt/chưa đạt).
- Hỗ trợ **In phiếu đánh giá** và **Xuất file CSV** tiện cho việc nhập điểm LMS.

---

## 📚 Phạm Vi Kiến Thức (Chuẩn GDPT 2018)

- **Bài 1: Cấu trúc của chất. Sự chuyển thể** (100% định tính chuẩn SGK).
- **Bài 2: Nội năng. Định luật I của nhiệt động lực học** ($\Delta U = A + Q$, quy ước dấu, công dãn nở).
- **Bài 3: Nhiệt độ. Thang nhiệt độ – Nhiệt kế** (Celsius, Kelvin, Fahrenheit, không độ tuyệt đối, nguyên lý các loại nhiệt kế).

---

## 🛠️ Công Nghệ Sử Dụng

- **Frontend Core**: Vanilla HTML5, Modern CSS3 (Glassmorphism Dark Theme, Fluid Animations).
- **Audio Engine**: Web Audio API (tổng hợp âm thanh procedural click, correct, wrong, streak, không phụ thuộc file ngoài).
- **Công Thức Toán & Vật Lí**: KaTeX Typesetting rendering chuẩn LaTeX quốc tế.
- **Hiệu Ứng Chiến Thắng**: Canvas Confetti.

---

## 🚀 Hướng Dẫn Cài Đặt & Chạy Cục Bộ (Local Development)

```bash
# Clone repository
git clone https://github.com/kkhmn4/wayground-physics-12.git
cd wayground-physics-12

# Chạy server cục bộ bằng Python:
python -m http.server 8088

# Hoặc dùng Node.js npx serve:
npx serve .
```

Mở trình duyệt truy cập: `http://localhost:8088/`

---

## 📄 Bản Quyền & Giấy Phép
Phát triển phục vụ mục đích giảng dạy và học tập bộ môn Vật lí 12 theo định hướng đổi mới giáo dục.
MIT License © 2026.
