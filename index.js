// 1. Select the Title Element with the id of 'header' and save as 'bookStoreTitle'
const bookStoreTitle = document.querySelector("#header");

// 2. Change the textContent of 'bookStoreTitle' to the name property of the 'bookStore' variable
bookStoreTitle.textContent = bookStore.name;

// 3. Select the book list container where books will be appended
const bookList = document.querySelector("#book-list");

// Optional: Remove the example/placeholder list item if it exists
const exampleItem = document.querySelector("#delete-this");
if (exampleItem) {
  exampleItem.remove();
}

// 4. Loop through every book in the bookStore.books array
bookStore.books.forEach((book) => {
  // Create elements for each book
  const bookContainer = document.createElement("li");
  const bookTitle = document.createElement("h3");
  const bookAuthor = document.createElement("p");
  const bookImage = document.createElement("img");

  // Change the textContent and attributes to match the book object
  bookTitle.textContent = book.title;
  bookAuthor.textContent = book.author;
  bookImage.src = book.imageUrl;

  // Append book elements to bookContainer
  bookContainer.appendChild(bookTitle);
  bookContainer.appendChild(bookAuthor);
  bookContainer.appendChild(bookImage);

  // Append bookContainer element to bookList
  bookList.appendChild(bookContainer);
});