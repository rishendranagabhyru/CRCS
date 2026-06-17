const form = document.getElementById("studentForm");
const table = document.getElementById("studentTable");

let students = JSON.parse(localStorage.getItem("students")) || [];

displayStudents();

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const id = document.getElementById("studentId").value;
    const name = document.getElementById("studentName").value;
    const section = document.getElementById("section").value;
    const marks = document.getElementById("marks").value;
    const editIndex = document.getElementById("editIndex").value;

    const student = {
        id,
        name,
        section,
        marks
    };

    if (editIndex === "") {
        students.push(student);
    } else {
        students[editIndex] = student;
        document.getElementById("editIndex").value = "";
    }

    localStorage.setItem("students", JSON.stringify(students));

    form.reset();
    displayStudents();
});

function displayStudents() {
    table.innerHTML = "";

    students.forEach((student, index) => {
        table.innerHTML += `
        <tr>
            <td>${student.id}</td>
            <td>${student.name}</td>
            <td>${student.section}</td>
            <td>${student.marks}</td>
            <td>
                <button class="edit-btn" onclick="editStudent(${index})">Edit</button>
                <button class="delete-btn" onclick="deleteStudent(${index})">Delete</button>
            </td>
        </tr>
        `;
    });
}

function editStudent(index) {
    document.getElementById("studentId").value = students[index].id;
    document.getElementById("studentName").value = students[index].name;
    document.getElementById("section").value = students[index].section;
    document.getElementById("marks").value = students[index].marks;

    document.getElementById("editIndex").value = index;
}

function deleteStudent(index) {
    if (confirm("Are you sure you want to delete this record?")) {
        students.splice(index, 1);
        localStorage.setItem("students", JSON.stringify(students));
        displayStudents();
    }
}