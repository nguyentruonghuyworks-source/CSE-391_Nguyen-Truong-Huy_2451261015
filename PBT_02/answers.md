## Phần A

### Câu A1

1. type="email" → Ô nhập text có định dạng email, tự động kiểm tra định dạng và ký tự @  → Dùng cho form đăng ký tài khoản hoặc nhận bản tin.
2. type="password" → Ô nhập văn bản bị ẩn ký tự, tự động kiểm tra theo minlength hoặc pattern → Dùng để khách hàng điền mật khẩu bảo mật.
3. type="number" → Ô nhập số kèm nút tăng/giảm và không nhập được chữ cái, tự kiểm tra min, max, step → Dùng để điều chỉnh số lượng mặt hàng muốn mua.
4. type="tel" → Ô nhập hiển thị bàn phím số trên thiết bị di động, tự kiểm tra định dạng pattern → Dùng để thu thập số điện thoại liên lạc khi giao hàng.
5. type="url" → Ô nhập đường dẫn link, tự động kiểm tra định dạng bắt buộc chứa http:// → Dùng để khách hàng nhập link website cá nhân.
6. type="date" → Hiển thị giao diện date picker để chọn năm, tháng, ngày, tự kiểm tra min/max → Dùng để người dùng chọn ngày nhận hàng mong muốn.
7. type="range" → Giao diện thanh trượt chọn giá trị, tự động giới hạn và kiểm tra min, max, step → Dùng để làm thanh kéo lọc mức giá sản phẩm.
8. type="file" → Nút giao diện cho phép tải file lên, có thể tự kiểm tra định dạng qua accept và multiple → Dùng để khách hàng tải ảnh/video lên phần đánh giá sản phẩm.
9. type="checkbox" → Giao diện các hộp kiểm cho phép người dùng chọn nhiều hoặc không chọn tùy chọn nào → Dùng để tích chọn nhiều sản phẩm vào giỏ hàng cùng lúc.
10. type="radio" → Giao diện các nút radio cho phép người dùng chỉ được chọn một tùy chọn duy nhất trong danh sách → Dùng để chọn duy nhất một hình thức thanh toán hoặc đơn vị vận chuyển.

### Câu A2

```html
<!-- Trường hợp 1 -->
<input type="text" required value="">   <!-- User để trống -->
<!--Không submit được do required bắt buộc nhưng value rỗng -->

<!-- Trường hợp 2 -->
<input type="email" value="abc">        <!-- User gõ "abc" -->
<!--Không submit được do type="email" yêu cầu đúng format email, "abc" không có @ -->

<!-- Trường hợp 3 -->
<input type="number" min="1" max="10" value="15"> <!-- User gõ 15 -->
<!--Không submit được do giá trị(15) > max(10) -->

<!-- Trường hợp 4 -->
<input type="text" pattern="[0-9]{10}" value="abc123"> <!-- User gõ "abc123" -->
<!--Không submit được do pattern chỉ chấp nhận đúng 10 chữ số, "abc123" chữ cả chữ cái và sai độ  -->

<!-- Trường hợp 5 -->
<input type="password" minlength="8" value="123">  <!-- User gõ "123" -->
<!--Không submit được do độ dài ngắn hơn minlength yêu cầu  -- >
```

### Câu A3

**1. Tại sao `<label for="email">` quan trọng cho người dùng screen reader?**
Thẻ `<label>` đặc biệt quan trọng vì nếu form không có `<label>`, người dùng sử dụng screen reader sẽ không biết được ô nhập đó dùng để làm gì và chứa dữ liệu gì. Thuộc tính `for` của thẻ `<label>` phải được đặt bằng với thuộc tính `id` của phần tử `<input>` để liên kết chúng lại với nhau, giúp định danh rõ ràng chức năng của element đó cho người dùng.

**2. Khi nào dùng `<fieldset> + <legend>`?**
Chúng ta sử dụng `<fieldset>` kết hợp với `<legend>` khi cần gom nhóm các phần tử trên form lại thành một khối và tạo chú giải mô tả cho nhóm phần tử đó.
*Ví dụ:*
```html
<fieldset>
    <legend>Contact details</legend>
    <label>Email:<br />
    <input type="text" name="email" /></label><br />
    <label>Mobile:<br />
    <input type="text" name="mobile" /></label><br />
    <label>Telephone:<br />
    <input type="text" name="telephone" /></label>
</fieldset>
````

**3. Sử dụng aria-label**
*    Dùng aria-label khi giao diện không có `<label>` nhưng vẫn cần mô tả cho Screen Reader
*    Không nên dùng aria-label khi đã có `<label>` vì nó gây dư thừa và ghi đè thông tin, làm screen reader đọc 2 lần

### Câu A4

**1. Thuộc tính `loading="lazy"` trên thẻ `<img>`:**
*   **Cải thiện:** Chỉ tải ảnh khi người dùng cuộn trang đến gần vị trí ảnh -> tăng tốc độ tải trang ban đầu, tiết kiệm băng thông
*   **Khi nào không dùng?** Không dùng cho các ảnh ở phần đầu trang -> vì sẽ làm chậm thời gian hiển thị nội dung chính đầu tiên

**2. Thẻ `<source>` trong `<video>` và Format video:**
*   Vì nó giúp trình duyệt tự chọn định dạng mà nó hỗ trợ tốt nhất -> Khả năng tương thích trình duyệt
*   **3 format video phổ biến:** `mp4`, `ogg`, `webm`

**3. Thuộc tính `alt` trên thẻ `<img>`:**
*   **Tác dụng:** cung cấp đoạn văn bản thay thế cho hình ảnh, văn bản này sẽ được hiển thị trên giao diện khi đường dẫn ảnh bị lỗi không tải được 
    *   Ảnh sản phẩm iPhone 16: `<img src="iphone16.jpg" alt="Ảnh sản phẩm điện thoại iPhone 16">`
    *   Ảnh trang trí (decorative): `<img src="decor.png" alt="">`
    *   Ảnh biểu đồ doanh thu Q1/2026: `<img src="chart.jpg" alt="Biểu đồ thống kê doanh thu quý 1 năm 2026">`

### Câu A5

* Cách 1: Dùng `<img>` khi ảnh là một phần của nội dung văn bản hoặc mang tính chất trang trí, không cần giải thích độc lập
    - VD1: Các icon nhỏ trong menu điều hướng
    - VD2: Các banner quảng cáo
* Cách 2: Dùng `<figure>` khi ảnh cần có chú thích đi kèm. Nếu tách khỏi bài viết, nội dung vẫn có ý nghĩa
    - VD1: Ảnh sản phẩm trong trang chi tiết kèm tên và giá bán
    - VD2: Ảnh sơ đồ kiến trúc hệ thống trong một bài blog kỹ 

---
## Phần C

### Câu C1

*   **Lỗi 1:** Dòng 1 - Thẻ `<form>` thiếu thuộc tính action và method (get/post), vi phạm best practices gửi dữ liệu
. **Sửa:** `<form action="" method="POST">`

*   **Lỗi 2:** Dòng 2 - Input "Tên" không có thẻ `<label for="...">`, thiếu thuộc tính id để liên kết, thiếu name và validation required, vi phạm accessibility và validation
. **Sửa:** `<label for="name">Tên:</label> <input type="text" id="name" name="name" required>`

*   **Lỗi 3:** Dòng 4 - Input "Email" không có thẻ `<label for="...">` liên kết qua id, và thiếu thuộc tính name kèm required, vi phạm accessibility
. **Sửa:** `<label for="email">Email:</label> <input type="email" id="email" name="email" placeholder="Email của bạn" required>`

*   **Lỗi 4:** Dòng 6, 7 - Input "Mật khẩu" không có `<label for="...">` liên kết qua id, thiếu thuộc tính name, và thiếu validation minlength cho bảo mật
. **Sửa:** `<label for="password">Mật khẩu:</label> <input type="password" id="password" name="password" placeholder="Mật khẩu" minlength="8" required> <label for="confirm_password">Nhập lại mật khẩu:</label> <input type="password" id="confirm_password" name="confirm_password" placeholder="Nhập lại mật khẩu" minlength="8" required>`
*   **Lỗi 5:** Dòng 9 - Input "Phone" dùng sai type="text" thay vì type="tel", không có thẻ `<label>` liên kết id, thiếu name và thiếu validation pattern cho SĐT
. **Sửa:** `<label for="phone">Phone:</label> <input type="tel" id="phone" name="phone" value="0901234567" pattern="
{10}" required>`

*   **Lỗi 6:** Dòng 11 — Thẻ `<select>` thiếu `<label for="...">`, thiếu thuộc tính id để liên kết và name để định danh biến khi gửi dữ liệu lên server
. **Sửa:** `<label for="city">Thành phố:</label> <select id="city" name="city" required>`

*   **Lỗi 7:** Dòng 12, 13 — Các thẻ `<option>` bên trong danh sách thả xuống thiếu thuộc tính value để lưu giá trị lựa chọn
. **Sửa:** `<option value="hanoi">Hà Nội</option> <option value="hcm">TP.HCM</option>`

*   **Lỗi 8:** Dòng 16, 17, 18 — Phần "Tôi đồng ý điều khoản" có `<label>` nhưng thiếu phần tử `<input type="checkbox">` thực tế để người dùng tích chọn và chưa liên kết qua id / for
. **Sửa:** `<input type="checkbox" id="agree" name="agree" required> <label for="agree">Tôi đồng ý điều khoản</label>`

### Câu C2

**1. Viết pattern regex cho CMND/CCCD và Số tài khoản:**
*   **CMND/CCCD (đúng 12 chữ số):** `pattern="[1-9]{12}"`
*   **Số tài khoản (10-15 chữ số):** `pattern="[1-9]{10,15}"`

**2. Giải thích: HTML5 validation đủ an toàn cho ứng dụng ngân hàng chưa? Tại sao?**

**Hoàn toàn không đủ an toàn**. 
Tại vì HTML5 validation là các tính năng xử lý ở phía **Frontend** – phần mà người dùng có thể trực tiếp nhìn thấy và tương tác trên trình duyệt. Người dùng có thể dễ dàng can thiệp, chỉnh sửa mã nguồn HTML qua DevTools hoặc tự thêm thuộc tính `novalidate` vào form để vô hiệu hóa hoàn toàn việc kiểm tra tính chính xác của dữ liệu trước khi gửi đi. Đối với các ứng dụng yêu cầu tính bảo mật tuyệt đối như ngân hàng, dữ liệu bắt buộc phải được xử lý và kiểm tra lại tại **Backend** – nơi chứa mã nguồn xử lý và cơ sở dữ liệu mà người dùng bình thường không thể nhìn thấy hay can thiệp.

**3. Liệt kê 3 loại validation mà HTML5 KHÔNG THỂ làm được (phải dùng JavaScript):**
1.  **Kiểm tra chéo sự trùng khớp giữa các trường dữ liệu:**
2.  **Kiểm tra dữ liệu thực tế từ hệ thống:**
3.  **Xác thực các quy tắc nghiệp vụ/thuật toán phức tạp:**

**4. Nêu 2 rủi ro bảo mật nếu chỉ validate trên Frontend mà không validate Backend:**
1.  **Dữ liệu rác và mã độc dễ dàng xâm nhập vào Cơ sở dữ liệu:** Kẻ gian có thể bỏ qua bước xác thực Frontend và gửi trực tiếp Request chứa dữ liệu sai định dạng hoặc mã độc đến **Web Server**, làm hỏng hệ thống và cấu trúc CSDL bên dưới.
2.  **Lộ kẽ hở Logic Ứng dụng:** Nếu các quy tắc kinh doanh quan trọng như định dạng PIN, số dư chỉ được đặt ở Frontend – phần mã mà ai cũng có thể xem được, kẻ tấn công sẽ nắm bắt được quy luật để giả mạo các Request độc hại, thao túng luồng hoạt động của hệ thống ngân hàng.
