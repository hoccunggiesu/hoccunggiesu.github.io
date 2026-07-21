// Đợi cho HTML tải xong mới chạy code
document.addEventListener('DOMContentLoaded', () => {
    
    // Lấy tất cả các thẻ <a> có chứa menu con
    const dropdownLinks = document.querySelectorAll('.dropdown > a, .dropdown-submenu > a');

    dropdownLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault(); // Ngăn trình duyệt nhảy trang
            e.stopPropagation(); // Ngăn sự kiện click bị lây lan ra ngoài

            const parentLi = this.parentElement;

            // Đóng các menu ngang hàng (để tránh mở nhiều menu cùng lúc)
            const siblings = parentLi.parentElement.children;
            for (let sibling of siblings) {
                if (sibling !== parentLi) {
                    sibling.classList.remove('active');
                }
            }

            // Bật/tắt menu hiện tại đang click
            parentLi.classList.toggle('active');
        });
    });

    // Khi người dùng click ra vị trí bất kỳ bên ngoài thanh công cụ
    document.addEventListener('click', function () {
        // Tìm và xóa class 'active' của tất cả các menu đang mở
        document.querySelectorAll('.active').forEach(el => {
            el.classList.remove('active');
        });
    });
    
});