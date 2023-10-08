const myLibrary = [];

function Book(title, author, page) {
    this.title = title
    this.author = author
    this.page = page
}

function addBookToLibrary(book) {
  myLibrary.push(book)
  displayBook()
}

const getBookFromInput = (e)=>{
    e.preventDefault();
    const title = document.getElementById("title").value
    const author = document.getElementById("author").value
    const page = document.getElementById("page").value
    dialog.close()
    const newBook = new Book(title, author, page);

    addBookToLibrary(newBook);

    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("page").value = "";
}

function displayBook(){
    const bookList = document.querySelector(".bookList");

    const book = myLibrary[myLibrary.length-1];

    const bookDiv = document.createElement("div");

    const titleElement = document.createElement("h1")
    titleElement.textContent = `Title: ${book.title}`
    const authorElement = document.createElement("h3")
    authorElement.textContent = `Author: ${book.author}`
    const pageElement = document.createElement("p")
    pageElement.textContent = `On Page: ${book.page}`

    bookDiv.appendChild(titleElement)
    bookDiv.appendChild(authorElement)
    bookDiv.appendChild(pageElement)

    bookList.appendChild(bookDiv)
}

const dialog = document.querySelector("dialog");
const showButton = document.getElementById("show");
const closeButton = document.getElementById("close");

showButton.addEventListener("click", ()=>{
    dialog.showModal();
})

closeButton.addEventListener("click", getBookFromInput)

console.log(myLibrary)