# Bài 1.1

* **Nguyên nhân render đơn lẻ:** Do trạng thái ban đầu ổn định, chưa xuất hiện bất kỳ biến động dữ liệu nào.
* **Điều kiện kích hoạt Re-render:** React chỉ tiến hành làm mới giao diện khi xảy ra một trong ba kịch bản sau:
  - Thay đổi trạng thái nội tại (`State`).
  - Thay đổi dữ liệu truyền vào (`Props`).
  - Khối thành phần gốc chứa nó (`Component cha`) thực hiện render lại.

---

# Bài 1.2

### Khảo sát với BadCounter (Biến thường)
* **Giao diện ban đầu:** Hiển thị số `0`.
* **Khi tương tác (Click):** - Hệ thống ghi nhận giá trị tăng dần ở cửa sổ Console (`Count: 1`, `Count: 2`, `Count: 3`...).
  - Tuy nhiên, màn hình ứng dụng vẫn đứng yên tại số `0`.
* **Bản chất:** Thay đổi trên biến cục bộ không có khả năng phát tín hiệu; React hoàn toàn không nhận biết được sự biến động này để cập nhật lại UI.

### Khảo sát với GoodCounter (Sử dụng State)
* **Giao diện ban đầu:** Hiển thị số `0`.
* **Khi tương tác (Click):**
  - Số hiển thị trên màn hình nhảy số đồng bộ theo mỗi lần bấm (`1`, `2`, `3`...).
* **Bản chất:** Hàm kích hoạt `setCount()` đóng vai trò gửi thông báo thay đổi lên hệ thống. React tiếp nhận, lập tức chạy lại component để đồng bộ giao diện mới.

### Tần suất ghi nhận vết Log (Render)
* Ghi nhận lần đầu (Initialization) khi khởi chạy ứng dụng. 
* Kế tiếp, mỗi thao tác nhấn nút thành công sẽ cộng thêm chính xác $1$ lần render. 
* *Ví dụ:* Nhấp chuột $3$ lần $\rightarrow$ Tổng số lần kết xuất ghi nhận là $4$.

---

# Bài 1.3

```
┌─────────────────────────────────────────────────────────┐
│                    REACT FLOW                           │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  1. Component function được gọi                         │
│              ↓                                          │
│  2. Return JSX (giao diện)                              │
│              ↓                                          │
│  3. React hiển thị lên màn hình                         │
│              ↓                                          │
│  4. Người dùng tương tác (click, nhập...)               │
│              ↓                                          │
│  5. Gọi setState(newValue)                              │
│              ↓                                          │
│  6. React gọi lại component function (RE-RENDER)        │
│              ↓                                          │
│  7. Return JSX mới                                      │
│              ↓                                          │
│  8. React cập nhật màn hình (chỉ phần thay đổi)         │
│              ↓                                          │
│  Quay lại bước 4                                        │
│                                                         │
└─────────────────────────────────────────────────────────┘
```