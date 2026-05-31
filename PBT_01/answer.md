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

### Câu C1 — Thiết kế cấu trúc

```html
<!-- Phần đầu trang -->
<header> <!-- header: Dùng cho phần đầu trang, thường chứa logo và menu chính -->
    <nav> <!-- nav: Dùng cho khu vực chứa các liên kết điều hướng chính -->
        <ul> <!-- ul: Menu thường là danh sách không thứ tự -->
            <li><a href="/">Trang chủ</a></li>
            <li><a href="/products">Sản phẩm</a></li>
        </ul>
    </nav>
</header>

<!-- Nội dung chính của trang -->
<main> <!-- main: Bao bọc nội dung cốt lõi của trang web, giúp Google hiểu trọng tâm -->
    
    <!-- Breadcrumb điều hướng -->
    <nav aria-label="breadcrumb"> <!-- nav: Được dùng cho cụm điều hướng (breadcrumb) -->
        <ol> <!-- ol: Dùng danh sách có thứ tự vì breadcrumb thể hiện phân cấp bậc rõ ràng -->
            <li><a href="/">Trang chủ</a></li>
            <li><a href="/dien-thoai">Điện thoại</a></li>
            <li>iPhone 16</li>
        </ol>
    </nav>

    <!-- Chi tiết sản phẩm -->
    <article> <!-- article: Đóng gói 1 nội dung độc lập, rất phù hợp cho thông tin 1 sản phẩm E-commerce -->
        
        <!-- Khu vực ảnh sản phẩm -->
        <section class="product-gallery"> <!-- section: Phân đoạn riêng cho khu vực chứa hình ảnh -->
            <figure> <!-- figure: Thẻ semantic chuyên bọc hình ảnh minh họa -->
                <img src="ip161.jpg" alt="Ảnh 1">
                <img src="ip162.jpg" alt="Ảnh 2"> 
                <img src="ip163.jpg" alt="Ảnh 3">
                <img src="ip164.jpg" alt="Ảnh 4">
                <img src="ip165.jpg" alt="Ảnh 5">
            </figure>
        </section>

        <!-- Thông tin cơ bản sản phẩm -->
        <section class="product-info"> <!-- section: Phân đoạn cho thông tin cơ bản -->
            <h1>iPhone 16</h1> <!-- h1: Tiêu đề quan trọng nhất của trang, mô tả tên sản phẩm để tối ưu SEO -->
            <p class="price">25.000.000đ</p> <!-- p: Đoạn văn bản hiển thị giá -->
            <div class="rating"> <!-- div: Thẻ container gom nhóm phần đánh giá sao -->
                <span>⭐⭐⭐⭐⭐</span> <!-- span: Thẻ inline bọc text ngắn (sao đánh giá) -->
            </div>
            <p class="description">
                Điện thoại iPhone 16 bộ nhớ 256GB là phiên bản dung lượng lưu trữ được mở rộng so với bản 128GB. Cụ thể điện thoại với dung lượng bộ nhớ 256GB đáp ứng tốt được các nhu cầu lưu trữ hình ảnh và video cơ bản.
                Phiên bản dung lượng này thích hợp với người dùng muốn sở hữu mẫu điện thoại iPhone 16 series cân bằng giữa hiệu năng và không gian lưu trữ như người dùng thường xuyên chụp ảnh, cài đặt ứng dụng cũng như yêu thích tính năng giải trí. Cùng với đó iPhone 16 Plus 256GB sở hữu màn hình lớn 6,7 inch mang lại không gian hiển thị thoải mái.
            </p> <!-- p: Đoạn văn mô tả sản phẩm -->
        </section>

        <!-- Bảng thông số kỹ thuật -->
        <section class="product-specs">
            <h2>Thông số kỹ thuật</h2> <!-- h2: Tiêu đề phụ cấp 2 -->
            <table> <!-- table: Dùng chuẩn xác cho dữ liệu có cấu trúc dạng bảng (DATA tabular) -->
                <tbody> <!-- tbody: Bọc phần thân chứa dữ liệu của bảng -->
                    <tr> <!-- tr: Định nghĩa 1 hàng trong bảng -->
                        <th>Màn hình</th> <!-- th: Định nghĩa ô tiêu đề cột/hàng, được in đậm -->
                        <td>6.1 inch</td> <!-- td: Định nghĩa ô chứa dữ liệu chi tiết -->
                    </tr>
                    <tr>
                        <th>Chip</th>
                        <td>A18 Bionic</td>
                    </tr>
                </tbody>
            </table>
        </section>

        <!-- Khu vực đánh giá/bình luận -->
        <section class="product-reviews"> <!-- section: Phân đoạn độc lập cho đánh giá -->
            <h2>Đánh giá từ khách hàng</h2>
            <article class="review-item"> <!-- article: Mỗi 1 bình luận của khách hàng cũng là 1 nội dung độc lập -->
                <strong>Người dùng A</strong> <!-- strong: In đậm và nhấn mạnh tên người dùng -->
                <p>Sản phẩm rất tốt!</p>
            </article>
        </section>

    </article>

    <!-- Sidebar: Sản phẩm tương tự -->
    <aside> <!-- aside: Dùng cho các nội dung phụ trợ, liên quan gián tiếp đến nội dung chính (sidebar, sp tương tự) -->
        <h2>Sản phẩm tương tự</h2>
        <ul>
            <li>
                <article> <!-- article: Mỗi sản phẩm tương tự thu nhỏ cũng là một đối tượng độc lập -->
                    <h3>iPhone 15 Pro</h3> <!-- h3: Tiêu đề cấp 3 cho sản phẩm phụ -->
                    <img src="ip15.jpg" alt="iPhone 15">
                    <p>20.000.000đ</p>
                </article>
            </li>
        </ul>
    </aside>

</main>

<!-- Phần chân trang -->
<footer> <!-- footer: Xác định phần chân trang, chứa thông tin bản quyền, liên kết phụ -->
    <p>© 2026 ShopTLU. All rights reserved.</p>
</footer>
````

### Câu C2 - So sánh và tranh luận

Quan điểm dùng `<div>` cho mọi thứ rồi định dạng bằng class tuy nhanh lúc đầu nhưng về lâu dài lại bộc lộ nhiều hạn chế lớn về mặt kỹ thuật.
Về SEO, các công cụ tìm kiếm cần một cấu trúc rõ ràng để đánh giá website. Việc sử dụng các thẻ đúng bản chất ngữ nghĩa như `<header>`, `<main>`, `<article>` giúp bot Google phân loại nội dung chính xác, từ đó cải thiện thứ hạng. Nếu lạm dụng `<div>`, bot phải tự suy đoán cấu trúc, làm giảm hiệu quả index đáng kể. Bên cạnh đó, về mặt Accessibility, các phần mềm đọc màn hình cho người khiếm thị dựa vào Semantic HTML để điều hướng. Nếu chỉ toàn `<div>`, cấu trúc ngữ cảnh bị mất và trải nghiệm của họ sẽ bị phá vỡ.
Minh chứng thực tế: Ở một trang tin tức, việc bọc các bài viết trong thẻ `<article>` giúp trình đọc màn hình nhảy nhanh qua từng bài. Nếu thay bằng `<div>`, người dùng sẽ phải nghe tuần tự toàn bộ nội dung rất mất thời gian.
Tuy nhiên, `<div>` vẫn có chỗ đứng riêng. Thẻ này hoàn toàn phù hợp cho những trường hợp chỉ cần chia khung layout, bọc khối để căn chỉnh CSS (như tạo Flexbox container) hoặc xử lý hiệu ứng Javascript mà không mang giá trị ngữ nghĩa.
Tóm lại, Semantic HTML là tiêu chuẩn bắt buộc để mã nguồn vừa dễ bảo trì, vừa thân thiện với cả công cụ tìm kiếm lẫn người dùng
