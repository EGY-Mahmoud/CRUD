var inputBookName = document.getElementById('inputBookName');
var inputUrl = document.getElementById('inputUrl')
    ;
var books = []
// Get Data
if (localStorage.getItem('books')) {
    books = JSON.parse(localStorage.getItem('books'))
    displayBooks()
}

function getBookData() {
    var book = {
        bName: inputBookName.value,
        bUrl: inputUrl.value
    }
    books.push(book);

    localStorage.setItem('books', JSON.stringify(books));
    clearData()

    displayBooks()
}

// Clear Data

function clearData() {
    inputBookName.value = null
    inputUrl.value = null
}

// display Books

function displayBooks() {
    var displayRow = ``;
    for (var i = 1; i < books.length; i++) {
        displayRow += `<tr>
                        <td>${[i]}</td>
                        <td>${books[i].bUrl}</td>
                        <td>
                            <button class="btn btn-success" onclick="visitSite(${i})">
                                <i class="fa-solid fa-eye pe-2"></i>Visit
                            </button>
                        </td>
                        <td>
                            <button class="btn btn-danger" onclick="deleteBook(${i})">
                            <i class=" fa-solid fa-trash-can" ></i>
                                Delete
                            </button>
                        </td>
        `
    }
    document.getElementById('tableContent').innerHTML = displayRow
}


// Delete Book
function deleteBook(index) {
    books.splice(index, 1);
    localStorage.setItem('books', JSON.stringify(books));
    displayBooks()
}

// Visit WebSite 

function visitSite(index) {
    window.open(books[index], '_blank');
}