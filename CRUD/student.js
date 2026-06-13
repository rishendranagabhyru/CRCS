function addStudent() {
    let name = document.getElementById("name").value.trim();
    let age = document.getElementById("age").value.trim();
    let course = document.getElementById("course").value.trim();

    // Basic validation
    if (!name || !age || !course) {
        alert("Please fill in all fields (Name, Age, and Course).");
        return;
    }

    let studentList = document.getElementById("studentList");

    // Create container for this student card
    let card = document.createElement("div");
    card.className = "student-card";

    // Create details layout
    let details = document.createElement("div");
    details.className = "student-details";
    details.innerHTML = `<strong>Name:</strong> ${name} | <strong>Age:</strong> ${age} | <strong>Course:</strong> ${course}`;
    card.appendChild(details);

    // Create delete button
    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Remove";
    deleteBtn.className = "delete-btn";
    deleteBtn.onclick = function () {
        card.remove();
    };
    card.appendChild(deleteBtn);

    // Append to list
    studentList.appendChild(card);

    // Clear inputs
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("course").value = "";
}