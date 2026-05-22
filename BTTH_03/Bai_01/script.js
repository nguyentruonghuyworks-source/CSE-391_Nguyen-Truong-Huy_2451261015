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