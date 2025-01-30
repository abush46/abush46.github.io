// Array of books with content
const books = [
  {
    title: "The Cat in the Hat",
    author: "Dr. Seuss",
    content: "The Cat in the Hat comes to play on a rainy day...",
  },
  {
    title: "Charlotte's Web",
    author: "E.B. White",
    content: "Wilbur the pig is frightened of being slaughtered...",
  },
  {
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    content: "Harry discovers he is a wizard on his 11th birthday...",
  },
  {
    title: "Where the Wild Things Are",
    author: "Maurice Sendak",
    content: "Max sails to the land of the Wild Things...",
  },
];

// Function to display books
function displayBooks(filteredBooks = books) {
  const bookList = document.getElementById("book-list");
  bookList.innerHTML = ""; // Clear previous entries
  filteredBooks.forEach((book) => {
    const bookDiv = document.createElement("div");
    bookDiv.className = "book";
    bookDiv.innerHTML = `
                    <h2>${book.title}</h2>
                    <p>Author: ${book.author}</p>
                    <button onclick="openModal('${book.title}', '${book.content}')">Read</button>
                `;
    bookList.appendChild(bookDiv);
  });
}

// Function to filter books based on search input
function filterBooks() {
  const searchInput = document.getElementById("search-bar").value.toLowerCase();
  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchInput)
  );
  displayBooks(filteredBooks);
}

// Function to open the modal and display book content
function openModal(title, content) {
  document.getElementById("modal-title").innerText = title;
  document.getElementById("modal-content").innerText = content;
  document.getElementById("myModal").style.display = "block";
}

// Function to close the modal
document.querySelector(".close").onclick = function () {
  document.getElementById("myModal").style.display = "none";
};

// Close modal when clicking outside of it
window.onclick = function (event) {
  const modal = document.getElementById("myModal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
};
function btnClick() {
  console.log(window.Telegram.WebApp.initDataUnsafe);
  if (window.Telegram.webApp) {
    document.getElementById("username").innerHTML =
      window.Telegram.WebApp.initDataUnsafe.user.first_name;
  } else {
    document.getElementById("username").innerHTML = "LOGIN";
  }
}

// Call the function to display books on page load
displayBooks();
