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

