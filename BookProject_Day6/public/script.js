const API_URL =
    "http://localhost:5000/api/books";

// =======================
// LOAD BOOKS ON PAGE LOAD
// =======================

window.onload =
    fetchBooks;

// =======================
// ADD BOOK
// =======================

async function addBook() {

    const title =
        document.getElementById(
            "title"
        ).value;

    const author =
        document.getElementById(
            "author"
        ).value;

    const category =
        document.getElementById(
            "category"
        ).value;

    const genre =
        document.getElementById(
            "genre"
        ).value;

    const pages =
        document.getElementById(
            "pages"
        ).value;

    const price =
        document.getElementById(
            "price"
        ).value;

    const quantity =
        document.getElementById(
            "quantity"
        ).value;

    // validation

    if (
        title === "" ||
        author === "" ||
        category === "" ||
        genre === "" ||
        pages === "" ||
        price === "" ||
        quantity === ""
    ) {

        alert(
            "Please fill all fields"
        );

        return;
    }

    const book = {

        title,
        author,
        category,
        genre,
        pages,
        price,
        quantity
    };

    try {

        await fetch(
            API_URL,
            {

                method: "POST",

                headers: {

                    "Content-Type":
                        "application/json"
                },

                body:
                    JSON.stringify(book)

            });

        alert(
            "Book Added Successfully"
        );

        clearForm();

        fetchBooks();

    }

    catch (error) {

        console.log(error);
    }

}

// =======================
// FETCH BOOKS
// =======================

async function fetchBooks() {

    try {

        const response =
            await fetch(API_URL);

        const books =
            await response.json();

        displayBooks(
            books
        );

    }

    catch (error) {

        console.log(error);
    }

}

// =======================
// DISPLAY BOOKS
// =======================

function displayBooks(
    books
) {

    const table =
        document.getElementById(
            "bookTable"
        );

    table.innerHTML = "";

    books.forEach(
        (book) => {

            table.innerHTML +=

                `
        <tr>

            <td>
            ${book.title}
            </td>

            <td>
            ${book.author}
            </td>

            <td>
            ${book.category}
            </td>

            <td>
            ${book.genre}
            </td>

            <td>
            ${book.pages}
            </td>

            <td>
            ₹${book.price}
            </td>

            <td>
            ${book.quantity}
            </td>

        </tr>
        `;
        });

}

// =======================
// CLEAR FORM
// =======================

function clearForm() {

    document.getElementById(
        "title"
    ).value = "";

    document.getElementById(
        "author"
    ).value = "";

    document.getElementById(
        "category"
    ).value = "";

    document.getElementById(
        "genre"
    ).value = "";

    document.getElementById(
        "pages"
    ).value = "";

    document.getElementById(
        "price"
    ).value = "";

    document.getElementById(
        "quantity"
    ).value = "";

}
