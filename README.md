# Dự án Học Giáo lý & Tra cứu Công giáo Việt Nam

Một nền tảng mở giúp người dùng dễ dàng tiếp cận giáo lý, học về các thánh, tra cứu thông tin các dòng tu và ơn gọi tại Việt Nam – dành cho mọi lứa tuổi.

## Mục đích
- Giúp thiếu nhi và người trẻ học giáo lý một cách sinh động qua video, bài viết và sơ đồ tư duy.
- Cung cấp thông tin về các thánh, đặc biệt là các thánh tử đạo Việt Nam.
- Hỗ trợ tra cứu các dòng tu, chủng viện, ơn gọi trên khắp Việt Nam.
- Tạo một mạng xã hội nhỏ ("nhà tu") để chia sẻ bài học, kinh nghiệm sống đạo.

## Đối tượng
- Thiếu nhi, giới trẻ (8 – 25 tuổi), giáo lý viên, cha mẹ.
- Người đang tìm hiểu ơn gọi linh mục, tu sĩ.
- Người ngoài Công giáo muốn tìm hiểu về đời sống đức tin.

## Các chức năng chính

### 1. Bài học
- **Học bằng video:** các bài giảng giáo lý, câu chuyện thánh sinh động.
- **Học bằng bài viết/hình ảnh:** nội dung được biên soạn ngắn gọn, dễ hiểu.
- **Hiển thị bằng sơ đồ tư duy:** giúp hệ thống kiến thức trực quan.

### 2. Trò chơi
- Ôn bài cũ dưới dạng trắc nghiệm, ghép hình, sắp xếp chữ.
- Minigame theo chủ đề phụng vụ, các thánh, giáo lý.
- Xếp chữ, chọn đáp án – giúp ghi nhớ dễ dàng.

### 3. Tra cứu
- **Dòng tu & ơn gọi:** tìm kiếm nhanh thông tin các dòng tu, tu hội, chủng viện đang hoạt động tại Việt Nam (khu vực, điều kiện, liên hệ…).
- **Các thánh tử đạo Việt Nam:** thông tin chi tiết, tiểu sử, hình ảnh, ngày lễ kính.

### 4. Mạng xã hội "nhà tu"
- Đăng bài chia sẻ (video/bài viết) của các tu sĩ, giáo lý viên.
- Kết nối cộng đồng người trẻ Công giáo.

## Cấu trúc dự án

```
/home
├── README.md                   ← Bạn đang đọc
├── content/                    ← Toàn bộ dữ liệu tĩnh (dòng tu, thánh, bài học)
│   ├── 0. temple/              ← Các file mẫu dùng để tạo dữ liệu mới
│   │   ├── search.md
│   │   ├── minimal.md
│   │   ├── full.md
│   │   └── story/
│   ├── Dòng Don Bosco/         ← Mỗi dòng/chủ đề có một thư mục riêng
│   │   ├── a. Nam (SDB)/
│   │   │   ├── search.md
│   │   │   ├── minimal.md
│   │   │   ├── full.md
│   │   │   └── story/
│   │   └── b. Nữ (FMA)/
│   └── ...
├── web/                        ← Mã nguồn giao diện web (đa thiết bị)
├── mobile/                     ← (nếu có) Ứng dụng di động
└── ...
```

## Hướng dẫn đóng góp dữ liệu (cho phần `content`)
Nếu bạn muốn thêm hoặc cập nhật thông tin về một dòng tu, chủng viện hay câu chuyện, hãy làm theo các bước sau:

1. **Fork và Clone** dự án về máy.
   ```bash
   git clone https://github.com/[TÊN-TÀI-KHOẢN-CỦA-BẠN]/[TÊN-REPOSITORY].git
   cd [TÊN-REPOSITORY]
   ```
2. **Tạo nhánh mới** cho thay đổi của bạn.
   ```bash
   git checkout -b them-dong-xyz
   ```
3. **Vào thư mục `content/`**, tạo một thư mục mới với tên dòng (không cần đánh số). Nếu dòng có cả nam và nữ, tạo hai thư mục con `a. Nam (...)` và `b. Nữ (...)`. Nếu chỉ có một giới, tạo một thư mục `a. Nam (...)` hoặc `a. Nữ (...)`.
4. **Sao chép các file mẫu** từ `content/0. temple/` vào thư mục vừa tạo.
5. **Điền đầy đủ thông tin** vào `search.md`, `minimal.md`, `full.md`, và các câu chuyện trong `story/`.
6. **Commit và tạo Pull Request**.
   ```bash
   git add .
   git commit -m "Thêm dòng [Tên dòng]"
   git push origin them-dong-xyz
   ```
7. Người duy trì sẽ kiểm tra, gán số thứ tự (nếu cần) và merge.

Chi tiết hơn về nội dung từng file và cách viết câu chuyện, mời xem trong `content/0. temple/README.md`.

## Công nghệ & Workflow
- **Hiển thị:** Trang web responsive, hoạt động trên mọi thiết bị qua trình duyệt.
- **Tìm kiếm:** Tích hợp tìm kiếm tổng hợp nội dung về các thánh, dòng tu, bài học.
- **Phát triển:** Frontend (HTML/CSS/JS + framework tùy chọn), Backend (sẽ có sau), dữ liệu lưu dưới dạng Markdown/JSON.

## License
- **Mã nguồn**: [GNU GPLv3](https://www.gnu.org/licenses/gpl-3.0.html)
- **Nội dung** (trong thư mục `content/` của dự án): [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/)
  - Bạn được tự do sử dụng, chỉnh sửa, phân phối, kể cả cho mục đích thương mại (ví dụ: in sách, làm phim giới thiệu,...).
  - **Bắt buộc:** Mọi tác phẩm phái sinh phải được cấp phép lại dưới cùng CC BY-SA 4.0.
  - **Ghi công:** Khi sử dụng, bạn cần nêu rõ nguồn gốc: *"Nội dung được đóng góp bởi cộng đồng Dự án ***`Học Cùng Giêsu`*** và các dòng tu liên quan, cấp phép CC BY-SA 4.0."*

## Liên hệ & Đóng góp
- Dự án mở, hoan nghênh mọi đóng góp từ cộng đồng Công giáo Việt Nam.
- Mọi thắc mắc, vui lòng mở Issue trên GitHub hoặc liên hệ [địa chỉ email/người phụ trách].


> *“Lạy Chúa, xin sai con đến với muôn dân.”*
