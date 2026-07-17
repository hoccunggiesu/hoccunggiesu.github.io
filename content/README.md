

# Cơ sở dữ liệu các dòng tu & chủng viện tại Việt Nam

[![License: CC BY-SA 4.0](https://img.shields.io/badge/License-CC%20BY--SA%204.0-lightgrey.svg)](./LICENSE)

Thư mục này chưa **bộ dữ liệu mở** về các dòng tu, tu hội, tu đoàn và cơ sở đào tạo Công giáo đang hoạt động tại Việt Nam. Mục tiêu: phục vụ tra cứu ơn gọi, tìm hiểu thông tin, và kết nối cộng đồng đức tin.

## 🗂️ Cấu trúc thư mục

Dữ liệu được tổ chức phân cấp theo **loại hình đời sống thánh hiến**:

```
content/
├── 0. temple/                          # MẪU CHUẨN - KHÔNG SỬA, KHÔNG XÓA
│   ├── search.md                       # Dùng cho thẻ tìm kiếm (ngắn gọn)
│   ├── minimal.md                      # Thông tin cơ bản
│   ├── full.md                         # Giới thiệu chi tiết
│   └── story/                          # Câu chuyện, nhân chứng
│       ├── README.md
│       └── ...
│
├── dong/                               # CÁC DÒNG TU (nam & nữ)
│   ├── Don Bosco/
│   │   ├── README.md                   # Giới thiệu chung gia đình Don Bosco
│   │   ├── Nam (SDB)/
│   │   │   ├── search.md
│   │   │   ├── minimal.md
│   │   │   ├── full.md
│   │   │   └── story/
│   │   └── Nữ (FMA)/
│   │       ├── search.md
│   │       ├── minimal.md
│   │       ├── full.md
│   │       └── story/
│   │
│   ├── Dòng Tên (SJ)/
│   │   └── Nam/
│   │       ├── search.md
│   │       ├── minimal.md
│   │       ├── full.md
│   │       └── story/
│   │
│   └── ... (các dòng khác)
│
├── dong-chiem-niem/                    # ĐAN VIỆN, ẨN TU (chiêm niệm)
│   ├── Đan viện Châu Sơn/
│   │   └── Nữ/
│   │       ├── search.md
│   │       ├── minimal.md
│   │       ├── full.md
│   │       └── story/
│   └── ...
│
├── tu-hoi-doi/                         # TU HỘI ĐỜI (Secular Institutes)
│   ├── Tu hội Đời Đức Mẹ/
│   │   └── (có thể có Nam/Nữ hoặc chung)
│   │       ├── search.md
│   │       ├── minimal.md
│   │       ├── full.md
│   │       └── story/
│   └── ...
│
├── tu-doan-tong-do/                    # TU ĐOÀN TÔNG ĐỒ
│   └── ...
│
└── hiep-hoi-thanh-hien/                # HIỆP HỘI ĐỜI SỐNG THÁNH HIẾN
    └── ...
```

## 📌 Giải thích chi tiết

### 1️⃣ `0. temple/` – Thư mục mẫu
- Chứa **file mẫu** để sao chép khi tạo dòng mới.
- **KHÔNG được sửa, xóa, hay đổi tên** bất kỳ file nào trong này.

### 2️⃣ `dong/` – Các dòng tu
- Dành cho các **dòng tu nam và nữ** theo luật giáo luật.
- Có thể có cả nhánh **Nam** và **Nữ** (ví dụ: Don Bosco), hoặc chỉ một nhánh.
- Tên thư mục con: `Tên dòng (Mã viết tắt)`.

### 3️⃣ `dong-chiem-niem/` – Đan viện, ẩn tu
- Các dòng sống **chiêm niệm**, ít ra khỏi đan viện.
- Ví dụ: Đan viện Xitô, Đan viện Biển Đức.

### 4️⃣ `tu-hoi-doi/` – Tu hội đời
- Các thành viên **không sống cộng đoàn**, nhưng vẫn tuyên khấn.
- Sống "giữa đời" như giáo dân.

### 5️⃣ `tu-doan-tong-do/` – Tu đoàn tông đồ
- Các thành viên sống chung nhưng **không tuyên khấn dòng tu**.
- Tập trung vào một sứ vụ tông đồ cụ thể.

### 6️⃣ `hiep-hoi-thanh-hien/` – Hiệp hội đời sống thánh hiến
- Các hiệp hội được Giáo hội công nhận.

---

## 🛠️ Cách thêm dòng mới hoặc chỉnh sửa

### 🔹 1. Fork & Clone
```bash
git fork https://github.com/hoccunggiesu/hoccunggiesu.github.io
git clone https://github.com/your-username/hoccunggiesu.github.io
cd hoccunggiesu.github.io
```

### 🔹 2. Tạo branch mới
```bash
git checkout -b them-dong-xyz
```

### 🔹 3. Tạo thư mục cho dòng mới
- Xác định **loại hình** (dòng tu, tu hội đời, v.v.) → chọn thư mục gốc phù hợp.
- Tạo thư mục với tên dòng (không cần đánh số thứ tự).
- **Nếu dòng có cả nam và nữ**:
  ```
  Tên Dòng/
  ├── Nam (Mã)/
  │   ├── search.md
  │   ├── minimal.md
  │   ├── full.md
  │   └── story/
  └── Nữ (Mã)/
      ├── search.md
      ├── minimal.md
      ├── full.md
      └── story/
  ```
- **Nếu dòng chỉ có một giới**:
  ```
  Tên Dòng/
  └── Nam (Mã)/ (hoặc Nữ (Mã))
      ├── search.md
      ├── minimal.md
      ├── full.md
      └── story/
  ```

### 🔹 4. Sao chép file mẫu
```bash
cp -r content/0.temple/* content/dong/Ten-Dong/Nam-Ma/
```

### 🔹 5. Điền nội dung
- `search.md`: 5-6 dòng ngắn gọn (tìm kiếm)
- `minimal.md`: Thông tin cơ bản (định danh, liên hệ, điều kiện)
- `full.md`: Giới thiệu chi tiết (lịch sử, đào tạo, sinh hoạt)
- `story/`: Câu chuyện, nhân chứng (nếu có)

### 🔹 6. Tạo Pull Request
```bash
git add .
git commit -m "Thêm dòng XYZ"
git push origin them-dong-xyz
```
Mở Pull Request trên GitHub, ghi rõ:
- Nội dung thay đổi.
- Nguồn tham khảo (nếu có).

---

## 📄 Mô tả nội dung các file

| File | Mục đích | Độ dài |
|------|----------|--------|
| **`search.md`** | Hiển thị trong thẻ kết quả tìm kiếm | 5-6 dòng |
| **`minimal.md`** | Thông tin cơ bản, tra cứu nhanh | 1-2 trang |
| **`full.md`** | Giới thiệu toàn diện, chi tiết | 3-5 trang |
| **`story/`** | Câu chuyện, nhân chứng ơn gọi | Mỗi file 1-2 trang |

---

## 💻 Dành cho lập trình viên (Vue.js / VitePress)

Cấu trúc thư mục được thiết kế để dễ dàng đọc qua HTTP và hiển thị:

- `search.md` → Hiển thị trong **kết quả tìm kiếm**.
- `minimal.md` → Hiển thị trong **trang thông tin cơ bản**.
- `full.md` → Hiển thị trong **trang chi tiết đầy đủ**.
- `story/*.md` → Hiển thị trong **mục "Câu chuyện & Nhân chứng"**.

Với **VitePress** (hoặc Vue.js + `marked.js`):
```javascript
import { marked } from 'marked'
const html = marked.parse(markdownString)
```

**Lưu ý:**
- Thư mục `content/` được thiết kế để **framework-agnostic** – có thể dùng với bất kỳ công cụ SSG nào (VitePress, Astro, Nuxt Content, v.v.).
- Nếu dùng **VitePress**, cấu hình `srcDir: '../content'` để đọc trực tiếp.
## Lưu ý quan trọng
- Tôn trọng **sự thật và bản quyền**: không tự ý thêm thông tin chưa xác minh.
- Giữ nguyên các trường quan trọng như `Gia đình linh đạo`, `Loại hình`, `Khu vực` để đảm bảo tính nhất quán cho bộ lọc dữ liệu.
- Khi một dòng có thay đổi (bề trên mới, địa chỉ mới...), vui lòng **cập nhật cả ba file** (`search.md`, `minimal.md`, `full.md`) nếu thông tin đó xuất hiện trong cả ba.
- Nếu có thắc mắc, vui lòng mở Issue trên GitHub hoặc liên hệ người phụ trách chính: [Tên + Email / SĐT nếu bạn muốn].---

## 🙏 Đóng góp và hỗ trợ

- **Báo lỗi / Đề xuất:** Mở [Issue](https://github.com/hoccunggiesu/hoccunggiesu.github.io/issues)
- **Đóng góp nội dung:** Fork → Pull Request
- **Liên hệ:** [Tên + Email / SĐT]

## 📜 Giấy phép

- **Nội dung:** [Creative Commons BY-SA 4.0](./LICENSE)

---
**Xin cảm ơn tất cả những ai đã đóng góp và đồng hành cùng dự án!**

_Hãy cùng xây dựng kho tri thức cho thế hệ tương lai!_ 🙏✨

