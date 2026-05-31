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