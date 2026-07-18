
# Kế hoạch phát triển dự án "Tra cứu thông tin" (Astro + MD)

**Dự án:** Website tra cứu các dòng tu, chủng viện, ơn gọi Công giáo tại Việt Nam.  
**Công nghệ:** Astro, content collections, tìm kiếm client-side.  
**Thời gian:** 3 tháng, làm việc vào chiều tối Thứ 6, Thứ 7, Chủ Nhật.  
**Mục tiêu:** Hoàn thiện MVP, có tìm kiếm và gợi ý từ khóa, deploy lên GitHub Pages.

---

## 🗓️ Tháng 1: Nền tảng (Tuần 1 - 4)

### ✅ Tuần 1: Khởi tạo dự án Astro
- [ ] Cài đặt Node.js, npm.
- [ ] Tạo dự án Astro mới: `npm create astro@latest`.
- [ ] Cấu hình deploy lên GitHub Pages (hoặc Vercel/Netlify).
- [ ] Tạo repository mới và push code lên.
- [ ] Sao chép thư mục `content/` từ dự án cũ vào dự án mới.

### ✅ Tuần 2: Định nghĩa Collection & Schema
- [ ] Tạo file `src/content/config.ts`.
- [ ] Định nghĩa collection `tra-cuu` với schema cho các trường:
  - `title` (string)
  - `description` (string)
  - `tags` (array)
  - `category` (string)
  - `date` (date)
  - `slug` (string)
- [ ] Kiểm tra Astro có đọc được dữ liệu từ các file `.md` không.

### ✅ Tuần 3: Trang chủ & Danh sách
- [ ] Tạo trang `src/pages/index.astro`.
- [ ] Dùng `getCollection('tra-cuu')` để lấy toàn bộ dữ liệu.
- [ ] Hiển thị danh sách các item với tiêu đề, mô tả ngắn.
- [ ] Thêm CSS cơ bản (dùng Pico.css hoặc tự viết).

### ✅ Tuần 4: Trang chi tiết
- [ ] Tạo trang `src/pages/[...slug].astro`.
- [ ] Dùng `getStaticPaths()` để tạo đường dẫn cho từng item.
- [ ] Hiển thị nội dung chi tiết (title, description, content).
- [ ] Đảm bảo link từ trang chủ dẫn sang trang chi tiết hoạt động.

**Sản phẩm:** Website cơ bản, có danh sách và trang chi tiết, dữ liệu từ MD.

---

## 🗓️ Tháng 2: Chức năng tìm kiếm & Gợi ý (Tuần 5 - 8)

### ✅ Tuần 5: Tìm kiếm cơ bản (Form GET)
- [ ] Thêm form tìm kiếm vào trang chủ (`method="GET"`).
- [ ] Trong `index.astro`, đọc `Astro.url.searchParams.get('q')`.
- [ ] Lọc dữ liệu với điều kiện `title.includes(query)` hoặc `description.includes(query)`.
- [ ] Hiển thị kết quả lọc, thông báo nếu không tìm thấy.

### ✅ Tuần 6: Tìm kiếm real-time (API Endpoint)
- [ ] Tạo API endpoint: `src/pages/api/search.json.js`.
- [ ] Endpoint nhận tham số `q` và trả về JSON các item khớp.
- [ ] Trên client, dùng Fetch API để gọi endpoint khi người dùng gõ.
- [ ] Cập nhật DOM hiển thị kết quả mà không reload trang.

### ✅ Tuần 7: Gợi ý từ khóa (Autocomplete)
- [ ] Xây dựng endpoint `/api/suggest.json` trả về danh sách từ khóa gợi ý.
- [ ] Tạo dropdown gợi ý hiển thị khi người dùng gõ (dựa trên title, tags).
- [ ] Xử lý debounce để tránh gọi API quá nhiều.
- [ ] Khi click vào gợi ý, tự động điền vào ô tìm kiếm và thực hiện tìm.

### ✅ Tuần 8: Bộ lọc nâng cao
- [ ] Thêm dropdown hoặc checkbox để lọc theo danh mục (VD: theo giáo phận).
- [ ] Kết hợp từ khóa tìm kiếm với bộ lọc.
- [ ] Lưu trạng thái bộ lọc lên URL (query params) để có thể share link.

**Sản phẩm:** Trang web có tìm kiếm real-time, gợi ý từ khóa, và bộ lọc.

---

## 🗓️ Tháng 3: Hoàn thiện & Ra mắt (Tuần 9 - 12)

### ✅ Tuần 9: Thiết kế Giao diện (UI)
- [ ] Chọn và tích hợp một framework CSS (Pico.css, Tailwind, hoặc tự viết).
- [ ] Thiết kế lại trang chủ, trang kết quả, trang chi tiết.
- [ ] Đảm bảo giao diện responsive trên mobile và desktop.

### ✅ Tuần 10: Tối ưu Hiệu suất & SEO
- [ ] Tối ưu hình ảnh: dùng `<Image />` của Astro.
- [ ] Thêm meta tags (`title`, `description`, Open Graph) cho từng trang.
- [ ] Tạo `sitemap.xml` tự động (dùng astro-sitemap).
- [ ] Kiểm tra Lighthouse đạt ít nhất 90 điểm trên các chỉ số.

### ✅ Tuần 11: Xử lý dữ liệu & Nội dung
- [ ] Rà soát và chuẩn hóa toàn bộ file `.md` trong `content/`.
- [ ] Kiểm tra các trường thông tin đã đầy đủ, chính xác.
- [ ] Viết hướng dẫn đóng góp dữ liệu cho cộng đồng (nếu có).
- [ ] Tạo trang "Giới thiệu" và "Liên hệ".

### ✅ Tuần 12: Deploy & Bảo trì
- [ ] Cấu hình deploy lên GitHub Pages (hoặc Vercel/Netlify).
- [ ] Kiểm tra toàn bộ chức năng trên môi trường production.
- [ ] Sửa các lỗi phát sinh cuối cùng.
- [ ] Lên kế hoạch bảo trì và cập nhật dữ liệu định kỳ.

**Sản phẩm:** Website hoàn chỉnh, đẹp, nhanh, có tìm kiếm thông minh, sẵn sàng ra mắt.

---

## 📌 Ghi chú kỹ thuật

### Cấu trúc thư mục dự kiến
```
├── public/
│   └── images/
├── src/
│   ├── content/
│   │   └── tra-cuu/             # Các file .md
│   ├── pages/
│   │   ├── index.astro          # Trang chủ + tìm kiếm
│   │   ├── [...slug].astro      # Trang chi tiết
│   │   └── api/
│   │       ├── search.json.js   # API tìm kiếm
│   │       └── suggest.json.js  # API gợi ý
│   ├── components/
│   │   ├── SearchBar.astro
│   │   ├── CardList.astro
│   │   └── ...
│   ├── layouts/
│   │   └── Layout.astro
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── package.json
└── README.md
```

### Công nghệ sử dụng
- **Framework:** Astro (SSG).
- **CSS:** Pico.css hoặc TailwindCSS.
- **Tìm kiếm:** FlexSearch (cho client-side search) hoặc tự viết filter.
- **Deploy:** GitHub Pages (miễn phí).
- **Quản lý phiên bản:** Git.

### Mẹo làm việc hiệu quả
- **Mỗi buổi tối:** Chọn 1-2 task trong checklist, tập trung hoàn thành.
- **Gặp lỗi:** Google + MDN + Astro docs. Nếu quá 30 phút không ra, hãy viết lại vấn đề và hỏi cộng đồng.
- **Commit thường xuyên:** Sau mỗi task hoàn thành, commit với message rõ ràng.
- **Nghỉ ngơi:** Đừng ép bản thân quá sức, giữ sức khỏe là trên hết.

---

## 📝 Nhật ký tiến độ (cập nhật hàng tuần)

| Tuần | Ngày | Công việc đã làm | Khó khăn | Giải pháp |
| :--- | :--- | :--- | :--- | :--- |
| 1 | ... | ... | ... | ... |
| 2 | ... | ... | ... | ... |
| ... | ... | ... | ... | ... |
