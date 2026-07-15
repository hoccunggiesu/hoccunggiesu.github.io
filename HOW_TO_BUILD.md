## 🛠️ Hướng dẫn cài đặt môi trường phát triển

Bạn có thể chạy dự án cục bộ theo hai cách:

### 1. Dùng Live Server (VS Code Extension) – Đơn giản
- Cài extension **Live Server** (Ritwick Dey) trong VS Code.
- Mở thư mục dự án bằng VS Code.
- Nhấp chuột phải vào `index.html` → **Open with Live Server**.
- Trang web sẽ tự động reload khi bạn lưu file.

### 2. Dùng live-server qua Node.js (Khuyến nghị)
Cách này cho phép tự động reload nhanh hơn, dễ dàng chạy trên mọi máy không cần VS Code, và có thể mở rộng về sau.

**Yêu cầu:** [Node.js](https://nodejs.org) (cài bản LTS)

**Cài đặt và chạy:**

1. Mở terminal trong thư mục dự án:
   ```bash
   cd đường-dẫn-đến-repo
   ```
2. Cài đặt `live-server` toàn cục (chỉ cần một lần):
   ```bash
   npm install -g live-server
   ```
3. Chạy server:
   ```bash
   live-server
   ```
   - Mặc định web sẽ mở tại `http://127.0.0.1:8080`.
   - Mỗi khi bạn chỉnh sửa file HTML, CSS, JS hay Markdown trong `content/`, trình duyệt sẽ tự động tải lại.

**Lưu ý:** Nếu muốn thay đổi cổng (port), dùng: `live-server --port=3000`

> Về sau, khi dự án cần xử lý dữ liệu Markdown thành JSON hoặc tối ưu ảnh, chúng ta sẽ thêm các script build vào đây. Việc dùng Node.js ngay từ đầu giúp nền tảng sẵn sàng mở rộng.