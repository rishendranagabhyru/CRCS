let expenses =
JSON.parse(localStorage.getItem("expenses"))
|| [];

displayExpenses();

function addExpense(){

    let name =
    document.getElementById("expenseName").value;

    let category =
    document.getElementById("expenseCategory").value;

    let amount =
    document.getElementById("expenseAmount").value;

    let date =
    document.getElementById("expenseDate").value;

    if(
        name === "" ||
        category === "" ||
        amount === "" ||
        date === ""
    ){
        alert("Please fill all fields");
        return;
    }

    let expense = {
        id: Date.now(),
        name: name,
        category: category,
        amount: Number(amount),
        date: date
    };

    expenses.push(expense);

    localStorage.setItem(
        "expenses",
        JSON.stringify(expenses)
    );

    clearForm();

    displayExpenses();
}

function displayExpenses(){

    let table =
    document.getElementById("expenseTable");

    table.innerHTML = "";

    expenses.forEach(function(exp){

        table.innerHTML += `
        <tr>
            <td>${exp.id}</td>
            <td>${exp.name}</td>
            <td>${exp.category}</td>
            <td>₹${exp.amount}</td>
            <td>${exp.date}</td>
            <td>

                <button
                    class="edit-btn"
                    onclick="editExpense(${exp.id})">
                    Edit
                </button>

                <button
                    class="delete-btn"
                    onclick="deleteExpense(${exp.id})">
                    Delete
                </button>

            </td>
        </tr>
        `;
    });

    calculateTotal();
}

function deleteExpense(id){

    expenses =
    expenses.filter(function(exp){

        return exp.id !== id;

    });

    localStorage.setItem(
        "expenses",
        JSON.stringify(expenses)
    );

    displayExpenses();
}

function editExpense(id){

    let expense =
    expenses.find(function(exp){

        return exp.id === id;

    });

    document.getElementById("expenseName").value =
    expense.name;

    document.getElementById("expenseCategory").value =
    expense.category;

    document.getElementById("expenseAmount").value =
    expense.amount;

    document.getElementById("expenseDate").value =
    expense.date;

    deleteExpense(id);
}

function searchExpense(){

    let value =
    document.getElementById("search")
    .value
    .toLowerCase();

    let rows =
    document.querySelectorAll(
        "#expenseTable tr"
    );

    rows.forEach(function(row){

        let name =
        row.children[1]
        .textContent
        .toLowerCase();

        if(name.includes(value)){
            row.style.display = "";
        }
        else{
            row.style.display = "none";
        }

    });
}

function calculateTotal(){

    let total = 0;

    expenses.forEach(function(exp){

        total += exp.amount;

    });

    document.getElementById(
        "totalExpense"
    ).textContent = total;
}

function clearForm(){

    document.getElementById(
        "expenseName"
    ).value = "";

    document.getElementById(
        "expenseCategory"
    ).value = "";

    document.getElementById(
        "expenseAmount"
    ).value = "";

    document.getElementById(
        "expenseDate"
    ).value = "";
}