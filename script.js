let myLibrary = [];
myLibrary.push(new Book("The Meaning Of Life", "Monty Python", 256, false),
  new Book("The Hobbit", "J.R.R Tolkien", 256, true));

document.getElementById("show-form").addEventListener("click", showForm);
document.getElementById("new-book").addEventListener("click", addToLibrary);

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.info = function () {
  return `<h2>${this.title}</h2>
          <p>Author: ${this.author}</p> 
          <p>${this.pages} pages</p>`;
}

function addToLibrary() {
  input = document.getElementById("book-form");
  book = new Book(input[0].value, input[1].value, input[2].value, false);
  myLibrary.push(book);
  render();
}

function render_new() {
  myLibrary.last
}

function render() {
  myLibrary.forEach(function (book, i) {
    let newBook = document.createElement("div");
    newBook.innerHTML = book.info();
    newBook.setAttribute('data', i);
    document.body.appendChild(newBook);
  })
};


function showForm() {
  document.getElementById("book-form").classList.toggle("hidden");
  document.body.classList.toggle("darken");
}

render();