# Phần A — Kiểm tra đọc hiểu
## Câu A1 — 3 cách nhúng CSS
### 1. Inline CSS:
* Viết trực tiếp CSS vào thuộc tính `style` của thẻ HTML

**Ưu điểm:**
* Có độ ưu tiên cao nhất
* Không cần tạo thêm file hay viết mã phức tạp ở nơi khác

**Nhược điểm:**
* Phải viết y hệt lại code nếu muốn 1 thẻ <p> khác có cùng định dạng
* Khó bảo trì do code hmtl và css trộn lẫn vào nhau

**Nên dùng khi:** 
* Kiểm tra hoặc debug giao diện nhanh 
* Thiết kế mẫu email html 

**Code mẫu:**
```html
<h1 style="color: red; font-size: 24px;">Hello world!!!</h1>
````

---
### 2. Internal CSS:
* Viết trong thẻ `<style>` (trong `<head>`)

**Ưu điểm:**
* Tách css khỏi các thẻ html giúp <body> gọn hơn inline css
* Chỉ cần thiết lập style 1 lần

**Nhược điểm:**
* Giới hạn trong 1 trang
* Làm tăng dung lượng file

**Nên dùng khi:**
* Xây dựng trang web đơn lẻ
* Tạo các định dạng đặc thù dành riêng cho 1 trang

**Code mẫu:**
```html
<head>
    <style>
        p { color: green; font-size: 20px; }
    </style>
</head>
````

---
### 3. External CSS:
* Tách ra file `.css`

**Ưu điểm:**
* Có thể tái sử dụng, gắn vào nhiều file html khác nhau
* Dễ quản lý và bảo trì do giao diện và nội dung được tách biệt
* Tốc độ tải trang nhanh hơn

**Nhược điểm:**
* Phải quản lý nhiều file 
**Nên dùng khi:**
* Được dùng nhiều ở các dự án thực tế
* Đảm bảo tính đồng bộ và chuyên nghiệp

**Code mẫu:**
```html
<link rel="stylesheet" href="style.css">
````
```css
body {background-color: #21a53d;}
````
### Câu hỏi thêm:
* Nếu cùng 1 element có cả 3 cách CSS đồng thời áp dụng, cách Inline CSS sẽ thắng vì nó nằm sát phần tử nhất nên trình duyệt sẽ coi đây là chỉ thị quan trọng nhất
---
## Câu A2 — CSS Selectors — Dự đoán kết quả
1. `h1` → ShopTLU
2. `.price` → 25.990.000đ, 45.990.000đ
3. `#app header` → toàn bộ `<header>`
4. `nav a:first-child` → Home
5. `.product.featured h2` → MacBook Pro
6. `article > p` → giá + mô tả
7. `a[href="/"]` → Home
8. `.top-bar.dark h1` → ShopTLU
---
## Câu A3 — Box Model
### Trường hợp 1: content-box
```css
.box-1 {
  width: 400px;
  padding: 20px;
  border: 5px;
  margin: 10px;
}
```
* Chiều rộng hiển thị = 400 + 40 + 10 = **450px**
* Không gian chiếm trên trang = 450 + 20 = **470px**

---
### Trường hợp 2: border-box
```css
.box-2 {
  box-sizing: border-box;
  width: 400px;
  padding: 20px;
  border: 5px;
  margin: 10px;
}
```
* Chiều rộng hiển thị = **400px**
* Kích thước content thực tế = **350px**
* Không gian chiếm trên trang = **420px**

---
### Trường hợp 3: Margin collapse
```css
.box-a { margin-bottom: 25px; }
.box-b { margin-top: 40px; }
```
* Khoảng cách = **40px** → Giải thích: Trình duyệt sẽ so sánh các giá trị và chỉ giữ lại giá trị có kích thước lớn nhất chứ không cộng dồn

---
## Câu A4 — Specificity (Độ ưu tiên)
**1. Tính specificity score (a, b, c) cho mỗi rule:**
*   **Rule A:** `p` -> Score: **(0, 0, 1)**
*   **Rule B:** `.price` -> Score: **(0, 1, 0)**
*   **Rule C:** `#main-price` -> Score: **(1, 0, 0)**
*   **Rule D:** `p.price` -> Score: **(0, 1, 1)**

---
**2. Element sẽ có màu đỏ -> Giải thích: Khi so sánh specificity score từ trái sang phải, Rule C (1, 0, 0) có điểm số cao nhất vì nó sử dụng ID selector. Selector ID luôn có độ ưu tiên cao hơn Class (Rule B, D) và Tag HTML (Rule A). Do đó, trình duyệt sẽ áp dụng Rule C

---

**3. Nếu thêm style inline: `<p class="price" id="main-price" style="color: orange;">`**
* Element sẽ có màu cam
* Giải thích: Inline style có độ ưu tiên cao hơn tất cả các External và Internal CSS selectors thông thường.

---

**4. Nếu Rule A thêm `!important` (`p { color: black !important; }`)**
* Element sẽ có màu đen
* Giải thích: Từ khóa `!important` là một ngoại lệ và phá vỡ cấu trúc tính điểm specificity thông thường. Nó sẽ ghi đè lên toàn bộ các rules khác

---
# Phần C

## Câu C1

**1. Tính chiều rộng thực tế của sidebar và content (theo mặc định content-box)**
*   **Chiều rộng thực tế `.sidebar`** = 300px (width) + 20px (padding-left) + 20px (padding-right) + 1px (border-left) + 1px (border-right) = **342px**.
*   **Chiều rộng thực tế `.content`** = 660px (width) + 30px (padding-left) + 30px (padding-right) + 1px (border-left) + 1px (border-right) = **722px**.

**2. Giải thích tại sao layout bị vỡ**
Tổng chiều rộng thực tế của cả 2 phần tử khi đặt cạnh nhau là: **342px + 722px = 1064px** 
Phần tử `.container` bao ngoài được thiết lập chiều rộng cố định là `width: 960px`. Vì tổng kích thước của 2 khối con (1064px) lớn hơn khoảng không gian cho phép của phần tử cha (960px), nên thuộc tính `float: left` không thể xếp cả hai trên cùng một hàng ngang. Do thiếu chỗ, phần tử `.content` xếp phía sau sẽ bị đẩy xuống một dòng mới

**3. Đưa ra 2 cách sửa khác nhau**
*   **Cách 1 (Dùng `border-box`):** Thêm thuộc tính `box-sizing: border-box;` vào `.sidebar` và `.content`. Thuộc tính này giúp thay đổi cách tính `width`, làm cho `width` bao gồm luôn cả content, padding và border. Khi đó, `.sidebar` sẽ chiếm đúng 300px và `.content` chiếm đúng 660px (Tổng: 300 + 660 = 960px), vừa khít với container
*   **Cách 2 (Không dùng `border-box`):** Giữ nguyên box-sizing mặc định (`content-box`). Ta phải tính toán và trừ thủ công phần kích thước của padding và border vào thuộc tính `width` lúc khai báo 
    *   Sửa `width` của `.sidebar` thành: 300 - 40 (padding) - 2 (border) = **258px**
    *   Sửa `width` của `.content` thành: 660 - 60 (padding) - 2 (border) = **598px**

---
## Câu C2

```markdown
## Câu C2: Cascade Puzzle

**1. "Sản phẩm A" (h2) có font-size = 20px và color = green**
*   **Giải thích:**
    *   **Font-size:** Thẻ `h2` chịu tác động của bộ chọn trực tiếp `.card .title` được khai báo `font-size: 20px`. Dựa theo quy tắc tính đặc hiệu, bộ chọn này có độ đặc hiệu là `0-0-2-0` (gồm 2 class). Các giá trị font-size ở `body` (16px) hay `.container` (14px) đều bị ghi đè vì bộ chọn trực tiếp ưu tiên hơn giá trị kế thừa.
    *   **Color:** Thẻ `h2` này chịu tác động của 2 quy tắc màu là `#featured .title` (có độ đặc hiệu `0-1-1-0` gồm 1 ID và 1 class) và `.highlight` (`color: green !important;`). Mặc dù ID có mức độ ưu tiên cao, nhưng thuộc tính `color: green` đi kèm với từ khóa `!important` nên nó thay đổi thứ tự ưu tiên của CSS và được đẩy lên mức ưu tiên cao nhất. Kết quả hiển thị màu **green**.

**2. "Mô tả sản phẩm" (p trong card featured) có color = blue**
*   **Giải thích:** Thẻ `p` này khớp với bộ chọn trực tiếp `.card p` (độ đặc hiệu `0-0-1-1` gồm 1 class và 1 element). Tại đây, thuộc tính `color: inherit;` bắt buộc thẻ `p` phải kế thừa màu sắc từ phần tử cha trực tiếp của nó. Phần tử cha bao bọc thẻ `p` này là thẻ `div` mang lớp `.card`. Vì `.card` đã được khai báo thuộc tính `color: blue;`, thẻ `p` sẽ nhận màu **blue**.

**3. "Sản phẩm B" (h2) có font-size = 20px và color = blue**
*   **Giải thích:**
    *   **Font-size:** Giống với "Sản phẩm A", thẻ `h2` này cũng khớp với bộ chọn trực tiếp `.card .title` nên nhận giá trị `font-size: 20px`
    *   **Color:** Thẻ `h2` này không khớp với bất kỳ bộ chọn CSS trực tiếp nào quy định về màu sắc. Theo nguyên tắc kế thừa, nó sẽ tự động lấy màu sắc từ phần tử cha trực tiếp là thẻ `div` mang lớp `.card` (`color: blue;`). Kết quả là màu **blue**

**4. "Mô tả sản phẩm B" (p.highlight) có color = green**
*   **Giải thích:** Thẻ `p` này khớp với cả bộ chọn `.card p` (`color: inherit;`) và lớp `.highlight` (`color: green !important;`). Nhờ có từ khóa `!important`, thuộc tính màu green mang mức ưu tiên cao nhất, nó ghi đè hoàn toàn lệnh `inherit`. Kết quả là màu hiển thị **green**