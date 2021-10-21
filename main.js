// Add a new book to myLibrary array for testing purposes
const bookOne = new Book('Pride and Prejudice', 'Jane Austen', 112, false);
const bookTwo = new Book('Of Mice and Men', 'John Steinbeck', 107, true);
let myLibrary = [];
myLibrary.push(bookOne);
myLibrary.push(bookTwo);
let myFormData = [];


// Book constructor for making "Book" objects
function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read

    this.info = function() {
      console.log(`${title} by ${author}, ${pages} pages, ` + (read ? 'finished reading' : 'not read yet'));
    }
  };

  // Event listeners

  let formBtn = document.querySelector('#formBtn');
  if (formBtn) {
    formBtn.addEventListener('click', (e)=>{
        formData();
     });
  };
 

  function addBookToLibrary(book) {
      myLibrary.push(book);
  };

  function displayBooks() {
    myLibrary.forEach(book => {
        let bookArray = []
        Object.keys(book).forEach(key => {
            bookArray.push(book[key]);
        });
        appendItems(bookArray)
    });
  };

  // Fucntion to create a html card which displays book information
  function appendItems(bookArray) {
      let BookList = document.getElementById("book-list");
      let newDiv = document.createElement("div");
      newDiv.classList.add("book");
      let bookDetails = document.createElement("div");
      bookDetails.classList.add("book-details")
      let centeredDiv = document.createElement("div");
      centeredDiv.classList.add("centered-div");
      let image = document.createElement("img");
      image.src = "https://via.placeholder.com/200x250";
      image.classList.add("book-img");
      let title = document.createElement("h3");
      let author = document.createElement("p");
      let pages = document.createElement("p");
      let read = document.createElement('p');
      // Append to parents
      BookList.appendChild(newDiv);
      newDiv.appendChild(bookDetails);
      bookDetails.appendChild(centeredDiv);
      newDiv.appendChild(image);
      centeredDiv.appendChild(title);
      title.innerText = bookArray[0];
      centeredDiv.appendChild(author);
      author.innerText = bookArray[1];
      centeredDiv.appendChild(pages);
      pages.innerText = bookArray[2];
      centeredDiv.appendChild(read);
      read.innerText = bookArray[3];
  };

  function addBook() {
      let title = document.getElementById('title');
      let author = document.getElementById('author');
      let pages = document.getElementById('author');
      let read = document.getElementById('read');
  };


  function formData() {
      let title = document.getElementById("title").value;
      myFormData.push(title);
      let author = document.getElementById("author").value;
      myFormData.push(author);
      let pages = document.getElementById("pages").value;
      myFormData.push(pages);
      let read = document.getElementById("read").value;
      console.log(read)
      myFormData.push(convertStrToBoolean(read));
      console.log(myFormData)
  };
  
  function convertStrToBoolean(string) {
      string === string.toLowerCase;
      if (string === 'yes') {
          return true;
      } else if (string === 'no') {
          return false;
      } else {
          return null;
      }
  }
