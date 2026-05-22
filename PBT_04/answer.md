## PHẦN A — KIỂM TRA ĐỌC HIỂU

### Câu A1 — 5 Loại Positionin

| Position | Vẫn chiếm chỗ trong flow? | Tham chiếu vị trí | Cuộn theo trang? | Use case |
|----------|---------------------------|-------------------|------------------|----------|
| `static` | Có | **Trạng thái mặc định** của phần tử (Không dùng top/left) | Có | Mặc định |
| `relative` | Có | **Chính nó** (tương đối so với vị trí mặc định) | Có | Dịch nhẹ, làm mốc cho absolute |
| `absolute` | Không (Bay ra khỏi layout) | **Cha relative gần nhất** hoặc **thành phần bao ngoài/cửa sổ trình duyệt** | Có (cuộn theo phần tử cha/trang web) | Badge, dropdown, tooltip |
| `fixed` | Không | So với **Viewport (Khung nhìn)** | Không (Luôn ở vị trí cố định) | Chat button, modal overlay |
| `sticky` | Có → Không | Sự kết hợp của relative và fixed. Mốc là **Viewport (khi dính)** | Có (bình thường) / Không (khi dính) | Sticky header, sidebar |

---

### CÂU HỎI THÊM

**1. Khi nào `absolute` tham chiếu parent (phần tử cha)?**
`absolute` sẽ tham chiếu parent khi phần tử cha được thiết lập làm mốc tọa độ (được gọi là **"cha relative gần nhất"** hoặc "thành phần bao ngoài")

**2. Khi nào `absolute` tham chiếu `body` (cửa sổ trình duyệt)?**
Nếu thành phần `absolute` không bám theo một "thành phần bao ngoài" nào làm mốc, nó sẽ định vị theo **"cửa sổ trình duyệt"** 

**3. Giải thích khái niệm "nearest positioned ancestor":**
Khái niệm này là thuật ngữ **"Cha relative gần nhất"** hoặc **"thành phần bao ngoài"**. Điều này có nghĩa là phần tử mang `position: absolute` sẽ có đặc tính *"Bay ra khỏi layout"* và tìm kiếm ngược lên trên cấu trúc HTML xem có thẻ cha (tổ tiên) bao bọc nào gần nhất có cài đặt position (như relative) để lấy đó làm tọa độ mốc. Nếu không có thì nó sẽ tự động lấy cửa sổ trình duyệt làm mốc

---
### Câu A2 — Flexbox vs Grid

#### Trường hợp 1: Cấu trúc Flex cơ bản
- **Dự đoán:** 1 hàng, 4 cột chia không gian bằng nhau.
- **Giải thích:** Mặc định của `display: flex` là sắp xếp theo trục ngang (`flex-direction: row`). Các thành phần con (`item`) có thuộc tính linh hoạt (`flex: 1` tương tự sự co dãn linh hoạt được nhắc đến trong Flexbox) nên chúng sẽ tự động chia đều không gian trên cùng một hàng ngang

#### Trường hợp 2: Cấu trúc Flex với Wrap (Gói dòng)
- **Dự đoán:** 3 hàng, 2 cột.
- **Giải thích:** Thuộc tính `flex-wrap: wrap` cho phép các item tự động xuống dòng khi tổng chiều rộng vượt quá container. Mỗi item chiếm `45% width` + `5% margin` (2.5% mỗi bên trái phải) = `50%` không gian. Vì vậy, mỗi hàng chỉ chứa tối đa 2 items (100%). Có tổng cộng 6 items nên chúng sẽ tự động xếp thành 3 hàng

#### Trường hợp 3: Cấu trúc Flex giãn cách (Space-between)
- **Dự đoán:** 1 hàng, 3 items nằm cách xa nhau và căn giữa theo chiều dọc.
- **Giải thích:** `justify-content: space-between` đẩy item đầu và cuối sát lề hai bên, khoảng cách giữa các item ở giữa được chia đều bằng nhau. `align-items: center` giúp các item căn chỉnh ở chính giữa theo trục dọc (cross-axis)

#### Trường hợp 4: Cấu trúc CSS Grid cơ bản (Kiến thức bên ngoài)
- **Dự đoán:** 1 hàng, 3 cột. Cột trái và phải cố định kích thước, cột giữa co giãn tự do.
- **Giải thích:** `grid-template-columns: 200px 1fr 200px` tạo ra 3 cột: Cột 1 rộng chính xác 200px, cột 3 rộng 200px, và cột 2 (`1fr`) chiếm toàn bộ phần không gian còn lại ở giữa. `gap: 20px` tạo khoảng trống 20px ngăn cách giữa các cột

#### Trường hợp 5: Cấu trúc CSS Grid lặp lại (Kiến thức bên ngoài)
- **Dự đoán:** 3 hàng, 3 cột. Mấy hàng? 3 hàng. Item cuối cùng ở đâu? Cột đầu tiên của hàng số 3.
- **Giải thích:** `grid-template-columns: repeat(3, 1fr)` tự động chia container thành 3 cột đều nhau. Với 7 items, hệ thống sẽ xếp lấp đầy 3 items cho hàng 1, 3 items cho hàng 2. Item số 7 sẽ bị đẩy xuống hàng thứ 3 và nằm ở vị trí ô đầu tiên bên trái

---
## PHẦN C — SUY LUẬN

### Câu C1 — Flexbox vs Grid: Khi nào dùng gì?

**1. Navigation bar ngang (logo + menu + buttons)**
- **Nên dùng:** **Flexbox**
- **Giải thích:** Thanh điều hướng là bố cục 1 chiều (trục ngang - `main-axis` là `row`). Flexbox sinh ra để xử lý các dải nội dung 1 chiều. Bạn có thể dễ dàng dùng `justify-content: space-between` [5] để đẩy logo sang trái, buttons sang phải và căn giữa nội dung bằng `align-items: center` [6].

**2. Lưới ảnh Instagram (3 cột đều nhau, số ảnh không biết trước)**
- **Nên dùng:** **Grid**
- **Giải thích:** Đây là bố cục 2 chiều thực thụ (gồm cả hàng và cột). Grid kiểm soát cực tốt không gian 2D. Bằng cách dùng Grid, bạn ép buộc được thiết kế luôn tuân thủ cấu trúc 3 cột bằng nhau, các ảnh sẽ tự động xuống dòng và lấp đầy lưới thành các ô vuông vức bất kể số lượng ảnh được tải lên.

**3. Layout blog: main content + sidebar**
- **Nên dùng:** **Grid** (hoặc Kết hợp cả hai)
- **Giải thích:** CSS Grid là vũ cụ lý tưởng cho các layout lớn của trang web (như định nghĩa vùng main và vùng sidebar). Bạn có thể định hình toàn bộ khung trang chỉ bằng một dòng code (ví dụ chia cột tỷ lệ 3:1). Sau khi tạo khung bằng Grid, bạn có thể dùng Flexbox *bên trong* vùng main content hoặc sidebar để sắp xếp các chi tiết nhỏ hơn.

**4. Footer với 4 cột thông tin (Về chúng tôi, Liên kết, Hỗ trợ, Liên hệ)**
- **Nên dùng:** **Grid**
- **Giải thích:** Dù Flexbox có thể làm được bằng cách chia phần tử đều nhau trên 1 hàng, nhưng Grid kiểm soát layout dạng ô (cột) vững chắc hơn. Đặc biệt khi làm responsive (đáp ứng đa màn hình) [7], Grid giúp việc thu xếp từ 4 cột (desktop) xuống lưới 2 cột (tablet) và 1 cột (mobile) cực kỳ dễ dàng và gọn gàng.

**5. Card sản phẩm (ảnh trên, text giữa, nút dưới — nút luôn dính đáy)**
- **Nên dùng:** **Flexbox**
- **Giải thích:** Nội dung bên trong một Card thường chảy theo 1 trục duy nhất (trục dọc). Chỉ cần dùng `display: flex` kết hợp `flex-direction: column` [8], sau đó áp dụng thuộc tính `margin-top: auto` cho nút bấm hoặc cấu hình phần text linh hoạt giãn ra (`flex-grow`), nút bấm sẽ tự động bị đẩy xuống sát mép dưới cùng của Card