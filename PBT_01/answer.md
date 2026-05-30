## Phần A - Kiểm tra đọc hiểu

### Câu A1 — HTTP & Browser

**1. Quá trình khi gõ https://shopee.vn vào trình duyệt và nhấn Enter:**
*   **Bước 1:** Request (yêu cầu) xuất phát từ thiết bị (laptop/điện thoại) và đi qua router WiFi 
*   **Bước 2:** Request tiếp tục đi qua nhà mạng cung cấp dịch vụ Internet và truyền qua hệ thống cáp quang
*   **Bước 3:** Request tìm đến Server của Shopee 
*   **Bước 4:** Server của Shopee tiếp nhận và xử lý yêu cầu 
*   **Bước 5:** Server gửi response chạy ngược lại con đường cũ (cáp quang → nhà mạng → router → máy tính)
*   **Bước 6:** Trình duyệt nhận các file tài nguyên và tiến hành render ra giao diện trang chủ Shopee

*(Nguồn tham chiếu: File `01_introduction_html_universe.md`, phần "Cuộc Hành Trình 0.3 Giây Xuyên Đại Dương")*

**2. Ý nghĩa của tab Network trong DevTools:**
Trong DevTools của Chrome, tab **Network** cho thấy toàn bộ thông tin về các **requests và responses** được gửi và nhận khi trang web tải. Nó được sử dụng để phân tích tốc độ tải trang, kiểm tra xem website tải chậm là do đâu hoặc file nào có dung lượng nặng nhất

*(Nguồn tham chiếu: File `01_introduction_html_universe.md`, phần "4.3. Developer Tools (F12) — Kính hiển vi cho website")*

### Câu A2 — Semantic HTML

**1. Trang web bị Google đánh giá SEO thấp vì:**
Lập trình viên đang lạm dụng quá nhiều thẻ `<div>` để xây dựng toàn bộ cấu trúc trang thay vì sử dụng các thẻ Semantic của HTML5. Khi dùng toàn `<div>`, các công cụ tìm kiếm của Google sẽ không thể phân biệt được đâu là phần điều hướng, đâu là nội dung chính, đâu là sản phẩm, từ đó không hiểu được nội dung cốt lõi của trang web

**2. Lỗi Semantic cụ thể:**
*   **Lỗi 1:** Dùng `<div class="header">` thay cho thẻ `<header>` để định nghĩa phần đầu trang
*   **Lỗi 2:** Dùng `<div class="menu">` thay cho thẻ `<nav>` để định nghĩa khu vực chứa các liên kết điều hướng
*   **Lỗi 3:** Dùng `<div class="main">` thay cho thẻ `<main>` để bọc khu vực nội dung chính của trang web 
*   **Lỗi 4:** Dùng `<div class="product">` thay cho thẻ `<article>` cho các sản phẩm
*   **Lỗi 5:** Dùng `<div class="footer">` thay cho thẻ `<footer>` để chứa thông tin bản quyền (Copyright) ở cuối trang 

**3. Sửa lại code:**

```html
<header class="header">
    <div class="logo">ShopTLU</div>
    <nav class="menu">
        <div><a href="/">Trang chủ</a></div>
        <div><a href="/products">Sản phẩm</a></div>
    </nav>
</header>

<main class="main">
    <article class="product">
        <h1 class="title">iPhone 16 Pro</h1>
        <p class="price">25.990.000đ</p>
        <figure class="image">
             <img src="iphone.jpg" alt="iPhone 16 Pro">
        </figure>
    </article>
</main>

<footer class="footer">© 2026 ShopTLU</footer>
````

### Câu A3 — Block vs Inline

**Giải thích:**
*   **Thẻ `<div>` là phần tử cấp Block (Khối):** Đặc tính của thẻ Block là luôn luôn chiếm toàn bộ chiều rộng (chiếm cả dòng) của phần tử cha và tự động bắt đầu trên một dòng mới. Vì vậy, `<div>Hộp 1</div>`, `<div>Hộp 2</div>` và `<div>Hộp 3</div>` sẽ luôn đẩy các nội dung khác xuống dòng và bản thân nó cũng đứng trên một dòng độc lập
*   **Thẻ `<span>` và `<strong>` là các phần tử cấp Inline (Nội tuyến):** Đặc tính của phần tử Inline là chỉ chiếm không gian vừa đúng bằng chiều rộng nội dung của nó và **không** tự bắt đầu trên một dòng mới. Do đó:
    *   `<span>Text A</span>` và `<span>Text B</span>` sẽ đứng nối tiếp nhau trên cùng một dòng ngang.
    *   Tương tự, `<span>Text C</span>` và `<strong>Text D</strong>` cũng nằm liền kề nhau sát trên cùng một dòng.

### Câu A4 — Table

**1. Sự khác nhau giữa `<thead>`, `<tbody>`, `<tfoot>`:**
*   `<thead>`: Đóng vai trò là **Header** của bảng, dùng để chứa các hàng tiêu đề cột 
*   `<tbody>`: Đóng vai trò là **Body**, dùng để chứa các phần dữ liệu chính của bảng 
*   `<tfoot>`: Đóng vai trò là **Footer**, dùng để chứa phần tổng kết 

**2. Không nên dùng table để tạo layout trang web vì:**
*   **Sai ý nghĩa ngữ nghĩa (Semantic):** Mục đích cốt lõi của thẻ `<table>` là để hiển thị dữ liệu có cấu trúc (DATA tabular). Việc lạm dụng nó để dàn bố cục (layout) sẽ đi ngược lại tiêu chuẩn Semantic của HTML5, khiến công cụ tìm kiếm khó hiểu được nội dung trang web.
*   **Đã có công nghệ CSS hiện đại thay thế:** Dùng table làm layout là phương pháp của "ngày xưa". Hiện nay, việc dàn layout được xử lý tốt hơn, gọn gàng và chuyên nghiệp hơn rất nhiều nhờ các vũ khí của CSS là **Flexbox** và **CSS Grid**

---
## Phần C - Suy luận




