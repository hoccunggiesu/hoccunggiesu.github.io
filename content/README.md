# Cơ sở dữ liệu các dòng tu & chủng viện tại Việt Nam

Dự án xây dựng bộ dữ liệu mở về các dòng tu, tu hội, chủng viện Công giáo đang hoạt động tại Việt Nam, phục vụ cho việc tra cứu ơn gọi và tìm hiểu thông tin.

## Cấu trúc thư mục

```
/
├── README.md                        ← Hướng dẫn đóng góp (bạn đang đọc)
├── 0. temple/                       ← Chứa file mẫu cho từng loại
│   ├── search.md
│   ├── minimal.md
│   ├── full.md
│   └── story.md
├── 1. Dòng Don Bosco/
│   ├── README.md                    ← Giới thiệu chung gia đình Don Bosco
│   ├── 1a. Nam (SDB)/
│   │   ├── search.md
│   │   ├── minimal.md
│   │   ├── full.md
│   │   └── story.md
│   └── 1b. Nữ (FMA)/
│       ├── search.md
│       ├── minimal.md
│       ├── full.md
│       └── story.md
├── 2. Dòng Đa Minh/
│   ├── README.md
│   ├── 2a. Nam (OP)/
│   │   └── ...
│   └── 2b. Nữ (các nhánh)/
│       └── ...
└── ... (các dòng khác đánh số tiếp theo)
```

### Giải thích:
- **`0. temple/`**: chứa các file mẫu trống cho `search.md`, `minimal.md`, `full.md`, `story.md`. **KHÔNG xóa hay sửa thư mục này.**
- **Mỗi dòng tu** có một thư mục riêng, đặt tên theo định dạng `[Số thứ tự]. [Tên dòng]`, ví dụ: `1. Dòng Don Bosco`.
- **Trong mỗi thư mục dòng**:
  - Nếu dòng **chỉ có một giới** (ví dụ: chỉ Nam hoặc chỉ Nữ): tạo duy nhất một thư mục con `1a. Nam (XYZ)` hoặc `1a. Nữ (XYZ)`.
  - Nếu dòng **có cả hai nhánh**: tạo cả `1a. Nam (...)` và `1b. Nữ (...)`.
- **Trong mỗi nhánh** (Nam hoặc Nữ) có **4 file**:
  - `search.md`: Dữ liệu hiển thị trên thẻ tìm kiếm (ngắn gọn).
  - `minimal.md`: Thông tin cơ bản (định danh, điều kiện, liên hệ).
  - `full.md`: Bài giới thiệu chi tiết (lịch sử, đào tạo, sinh hoạt...).
  - `story.md`: Câu chuyện, nhân chứng (có thể để trống nếu chưa có, hoặc gộp vào `full.md`).

## Cách thêm dòng mới hoặc chỉnh sửa

1. **Tạo thư mục mới** với số thứ tự tiếp theo (kiểm tra chưa trùng).
2. **Sao chép** toàn bộ file từ `0. temple/` vào thư mục nhánh (ví dụ: `1a. Nam (SDB)/`).
3. **Điền thông tin** vào từng file theo mẫu có sẵn (xem mô tả từng file bên dưới).
4. **Cập nhật `README.md`** của thư mục dòng (nếu có thông tin chung về cả gia đình dòng).
5. **Commit và tạo Pull Request** theo quy trình bên dưới.

## Mô tả nội dung các file mẫu

Tất cả file mẫu nằm trong `0. temple/`. Khi sao chép, chỉ việc điền thông tin thực tế của dòng vào chỗ trống hoặc thay thế ghi chú trong ngoặc `( )`.

### `search.md`
Thẻ hiển thị ngắn gọn khi người dùng tìm kiếm. Chỉ gồm 5-6 dòng thiết yếu, không có thông tin liên hệ cá nhân.

### `minimal.md`
Thông tin cơ bản phục vụ tra cứu nhanh và làm dữ liệu nguồn cho bộ lọc. Bao gồm: định danh, đặc sủng, sứ mạng, khu vực hiện diện, điều kiện dự tu, liên hệ chính.

### `full.md`
Bài viết giới thiệu toàn diện, bao gồm tất cả nội dung của `minimal.md` và mở rộng thêm:
- Lịch sử hình thành và phát triển
- Đời sống cộng đoàn (một ngày điển hình, trang phục, bầu khí)
- Hành trình ơn gọi và các giai đoạn đào tạo chi tiết
- Hình ảnh, tư liệu
- Câu chuyện & nhân chứng (có thể tách riêng sang `story.md` nếu quá dài)

### `story.md`
Chứa các câu chuyện riêng, nhân chứng ơn gọi, lịch sử thú vị... Nếu chưa có, để file trống hoặc ghi `# Đang cập nhật`.

## Quy trình đóng góp

1. **Fork** dự án về tài khoản của bạn.
2. Tạo nhánh mới với tên gợi nhớ: `them-dong-xyz` hoặc `cap-nhat-dong-abc`.
3. Thực hiện thay đổi (thêm mới, chỉnh sửa file) theo đúng cấu trúc và mẫu quy định.
   - **Chỉ sử dụng thông tin đã được xác nhận chính thức** (website dòng, văn thư, bề trên). Tránh thông tin không rõ nguồn gốc.
   - **Không tự ý thay đổi cấu trúc file mẫu** trong `0. temple/`.
4. Đảm bảo tất cả các trường bắt buộc trong `minimal.md` và `full.md` được điền đầy đủ.
5. Commit và tạo **Pull Request** vào repository gốc, ghi rõ:
   - Nội dung thay đổi (thêm dòng nào, cập nhật gì).
   - Nguồn tham khảo (nếu có).
6. Người duyệt sẽ kiểm tra và gộp nếu hợp lệ.

## Lưu ý quan trọng
- Tôn trọng **sự thật và bản quyền**: không tự ý thêm thông tin chưa xác minh.
- Giữ nguyên các trường quan trọng như `Gia đình linh đạo`, `Loại hình`, `Khu vực` để đảm bảo tính nhất quán cho bộ lọc dữ liệu.
- Khi một dòng có thay đổi (bề trên mới, địa chỉ mới...), vui lòng **cập nhật cả ba file** (`search.md`, `minimal.md`, `full.md`) nếu thông tin đó xuất hiện trong cả ba.
- Nếu có thắc mắc, vui lòng mở Issue trên GitHub hoặc liên hệ người phụ trách chính: [Tên + Email / SĐT nếu bạn muốn].