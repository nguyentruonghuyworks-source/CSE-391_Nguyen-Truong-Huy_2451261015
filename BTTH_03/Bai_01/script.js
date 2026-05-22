// TRUY XUẤT DOM
const studentTableBody = document.getElementById("studentTableBody");
const totalStudentsEl = document.getElementById("totalStudents");
const averageScoreEl = document.getElementById("averageScore");
const notification = document.getElementById("notification");

// KHỞI TẠO DỮ LIỆU TỪ LOCALSTORAGE
let students = JSON.parse(localStorage.getItem("students")) || [];

// HÀM HIỂN THỊ DANH SÁCH (RENDER)
function renderStudents() {
    if (students.length === 0) {
        studentTableBody.innerHTML = `<tr><td colspan="7" style="text-align:center">Chưa có dữ liệu sinh viên.</td></tr>`;
    } else {

        const htmls = students.map((student) => {
            return `
                <tr>
                    <td>${student.id}</td>
                    <td>${student.fullName}</td>
                    <td>${student.dob}</td>
                    <td>${student.className}</td>
                    <td>${student.score}</td>
                    <td>${student.email}</td>
                    <td>
                        <!-- Sự kiện onclick [8] -->
                        <button onclick="prepareEdit('${student.id}')">Sửa</button>
                        <button onclick="deleteStudent('${student.id}')">Xóa</button>
                    </td>
                </tr>
            `;
        });
        studentTableBody.innerHTML = htmls.join("");
    }
    updateStatistics();
}

// HÀM CẬP NHẬT THỐNG KÊ
function updateStatistics() {
    const total = students.length;
    totalStudentsEl.innerText = total;
    
    if (total > 0) {
        // Dùng reduce để tính tổng điểm
        const totalScore = students.reduce((acc, curr) => acc + parseFloat(curr.score), 0);
        // Dùng toFixed để làm tròn 1 chữ số thập phân
        averageScoreEl.innerText = (totalScore / total).toFixed(1); 
    } else {
        averageScoreEl.innerText = "0.0";
    }
}
// Gọi hàm render ngay khi tải trang
renderStudents();

// TRUY XUẤT DOM CHO FORM VÀ MODAL
const modal = document.getElementById("studentModal");
const btnOpenAddForm = document.getElementById("btnOpenAddForm");
const btnCancel = document.getElementById("btnCancel");
const studentForm = document.getElementById("studentForm");
const modalTitle = document.getElementById("modalTitle");

let isEditMode = false; // Biến cờ xác định trạng thái thêm hay sửa

// SỰ KIỆN MỞ MODAL THÊM
btnOpenAddForm.addEventListener("click", function() {
    resetForm();
    isEditMode = false;
    modalTitle.innerText = "Thêm mới sinh viên";
    document.getElementById("studentId").readOnly = false; // Cho phép nhập mã SV
    modal.style.display = "block"; // Hiển thị form 
});

// SỰ KIỆN ĐÓNG MODAL
btnCancel.addEventListener("click", function() {
    modal.style.display = "none"; // Ẩn form
});

// SỰ KIỆN SUBMIT FORM
studentForm.addEventListener("submit", function(e) {
    e.preventDefault(); // Ngăn hành vi reload trang mặc định

    // Lấy dữ liệu từ input bằng thuộc tính value
    const student = {
        id: document.getElementById("studentId").value,
        fullName: document.getElementById("fullName").value,
        dob: document.getElementById("dob").value,
        className: document.getElementById("className").value,
        score: document.getElementById("score").value,
        email: document.getElementById("email").value
    };

    if (!isEditMode) {
        // Kiểm tra trùng mã SV
        const checkExist = students.some(s => s.id === student.id); // Dùng hàm some
        if (checkExist) {
            alert("Mã sinh viên đã tồn tại!");
            return;
        }
        // Thêm vào mảng
        students.push(student);
        showNotification("Thêm sinh viên thành công!");
    } 
    
    saveStudents();
    modal.style.display = "none";
});

// HÀM LƯU DỮ LIỆU & RENDER LẠI
function saveStudents() {
    localStorage.setItem("students", JSON.stringify(students));
    renderStudents();
}

// HÀM RESET FORM
function resetForm() {
    studentForm.reset();
}

// HÀM HIỂN THỊ THÔNG BÁO
function showNotification(message) {
    notification.innerText = message;
    setTimeout(() => { notification.innerText = ""; }, 3000); // Tự xóa sau 3s
} 