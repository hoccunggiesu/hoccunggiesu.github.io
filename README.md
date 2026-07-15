# Dự án Học Cùng Giêsu

Nền tảng mở giúp thiếu nhi và giới trẻ học giáo lý, khám phá các thánh, tra cứu thông tin dòng tu và ơn gọi tại Việt Nam – qua sơ đồ tư duy, video, trò chơi và mạng xã hội “nhà tu”.

## 🌐 Truy cập dự án
Dự án được triển khai dưới dạng web tĩnh, sử dụng **GitHub Pages**.  
👉 Xem ngay: [https://hoccunggiesu.github.io/](https://hoccunggiesu.github.io/)  
*(Thay `[TÊN-TÀI-KHOẢN]` và `[TÊN-REPO]` bằng tên thật của bạn)*

> Hiện tại dự án chưa có kinh phí mua tên miền riêng, hoàn toàn dựa trên hạ tầng miễn phí của GitHub. Mọi sự đóng góp để phát triển chuyên nghiệp hơn đều được trân trọng.

## Mục đích
- Giúp người học tiếp cận giáo lý cách nhẹ nhàng, dễ nhớ, dễ thực hành.
- Cung cấp thông tin về các thánh, đặc biệt các thánh tử đạo Việt Nam.
- Hỗ trợ tra cứu nhanh các dòng tu, chủng viện, ơn gọi trên mọi giáo phận.
- Kết nối cộng đồng đức tin qua mạng xã hội nhỏ.

## Đối tượng
- Thiếu nhi, giới trẻ (8 – 25 tuổi), giáo lý viên, phụ huynh.
- Người đang tìm hiểu ơn gọi linh mục, tu sĩ.
- Người ngoài Công giáo muốn biết về đời sống đức tin.

## Các chức năng chính
### Đang phát triển

## Cấu trúc dự án
Toàn bộ mã nguồn web nằm trực tiếp trong thư mục gốc (root), cùng với thư mục `content/` chứa dữ liệu.

```
/
├── README.md                   ← Hướng dẫn tổng quan dự án
├── index.html                  ← Trang chủ của web
| ...                           ← Các file dùng đẻ chạy website
├── content/                    ← Dữ liệu các dòng tu, câu chuyện, bài học
│   |── LICENSE                 ← Giấy phép nội dung (CC BY-SA 4.0)
│   ├── 0. temple/              ← File mẫu (không sửa, không xóa)
│   │   ├── search.md
│   │   ├── minimal.md
│   │   ├── full.md
│   │   └── story/
│   ├── Dòng Don Bosco/         ← Mỗi dòng có một thư mục riêng
│   │   ├── a. Nam (SDB)/
│   │   │   ├── search.md
│   │   │   ├── minimal.md
│   │   │   ├── full.md
│   │   │   └── story/
│   │   └── b. Nữ (FMA)/
│   └── ...                     ← Các dòng khác (không cần đánh số)
└── LICENSE                     ← Giấy phép phần mềm (GPLv3)
```

> **Lưu ý:** Với các dòng mới thêm vào, người đóng góp chỉ cần tạo thư mục trong `content/`, không cần đánh số. Người duy trì sẽ sắp xếp và gán số thứ tự sau.

## 🛠️ Hướng dẫn cài đặt môi trường phát triển

Vui lòng truy cập vào [`HOW_TO_BUILD.md`](./HOW_TO_BUILD.md) để biết thêm thông tin cài đặt chạy trên cục bộ.

> Nếu có khó khăn hoặc trở ngại, bạn có thể [tạo một issue](https://github.com/hoccunggiesu/hoccunggiesu.github.io/issues/new) để được hỗ trợ nhé.

## Hướng dẫn đóng góp dữ liệu (cho `content/`)
1. **Fork** dự án về tài khoản GitHub của bạn, sau đó **clone** về máy:
   ```bash
   git clone https://github.com/[TÊN-TÀI-KHOẢN-CỦA-BẠN]/[TÊN-REPOSITORY].git
   cd [TÊN-REPOSITORY]
   ```
2. Tạo nhánh mới:
   ```bash
   git checkout -b them-dong-xyz
   ```
3. Trong thư mục `content/`, tạo thư mục mới với tên dòng (kiểm tra trùng tên).  
   - Nếu dòng chỉ có một giới: `a. Nam (XYZ)` hoặc `a. Nữ (XYZ)`.  
   - Nếu dòng có cả hai nhánh: `a. Nam (...)` và `b. Nữ (...)`.
4. Sao chép **toàn bộ** file mẫu từ `content/0. temple/` vào thư mục nhánh vừa tạo.
5. Điền thông tin vào `search.md`, `minimal.md`, `full.md`. Với `story/`, có thể thêm câu chuyện thực tế.
6. Commit và push:
   ```bash
   git add .
   git commit -m "Thêm dòng [Tên dòng]"
   git push origin them-dong-xyz
   ```
7. Tạo **Pull Request** về repository gốc, ghi rõ nội dung thay đổi và nguồn tham khảo (nếu có).
8. Người duy trì sẽ kiểm tra, gán số thứ tự và merge.

## License
- **Mã nguồn (toàn bộ code trong repo, trừ `content/`)**:  
  [GNU General Public License v3.0 (GPLv3)](https://www.gnu.org/licenses/gpl-3.0.html)  
  *Bản quyền © 2026 Dự án Học Cùng Giêsu*

- **Nội dung (tất cả file trong `content/`)**:  
  [Creative Commons Attribution-ShareAlike 4.0 International (CC BY-SA 4.0)](https://creativecommons.org/licenses/by-sa/4.0/)  
  *Bản quyền © 2026 Cộng đồng Dự án Học Cùng Giêsu và các dòng tu liên quan*  
  ✅ Được tự do chia sẻ, sửa đổi, sử dụng kể cả cho mục đích thương mại (in sách, tài liệu...).  
  ❌ **Không được tạo thêm hạn chế** – mọi tác phẩm phái sinh phải tiếp tục dùng đúng giấy phép CC BY-SA 4.0.  
  📎 **Ghi công:** Khi sử dụng nội dung, bạn cần nêu rõ:  
  *"Nội dung được đóng góp bởi cộng đồng Dự án Học Cùng Giêsu và các dòng tu liên quan, cấp phép CC BY-SA 4.0."*

---

> *“Anh em là ánh sáng thế gian”* - (Mt 5,14)
###  *“Mỗi Kitô hữu là một môn đệ thừa sai.”* – Đức Giáo hoàng Phanxicô, Tông huấn Evangelii Gaudium.
