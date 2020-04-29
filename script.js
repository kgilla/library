function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.info = function () {
  return `<h2>${this.title}</h2><button class="delete">delete</button>
  <p>Author: ${this.author}</p> 
  <p>${this.pages} pages</p>`;
}

const library = document.getElementById("library");
document.getElementById("show-form").addEventListener("click", showForm);
document.getElementById("new-book").addEventListener("click", addToLibrary);

let myLibrary = [new Book("The Meaning Of Life", "Monty Python", 256, false),
  new Book("The Hobbit", "J.R.R Tolkien", 256, true)];

function addToLibrary() {
  input = document.getElementById("book-form");
  book = new Book(input[0].value, input[1].value, input[2].value, false);
  myLibrary.push(book);
  showForm();
  render();
}

function render () {
  library.innerHTML = "";
  myLibrary.forEach(function (book, i) {
  let newBook = document.createElement("div");
  newBook.innerHTML = book.info();
  console.log(newBook);
  newBook.setAttribute('data', i);
  library.appendChild(newBook);
})};

function showForm() {
  document.getElementById("book-form").classList.toggle("hidden");
  document.body.classList.toggle("darken");
}

function deleteBook (book) {
  myLibrary.splice(button.parentElement.getAttribute("data"), 1);
  render();
}

document.querySelectorAll(".delete").forEach(function(button) {
  button.addEventListener("click", deleteBook, button);
}
 


render();