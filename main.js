console.log("string");
function Book(author, title) {
  this.book = author;
  this.title = title;
}
function Display() {
Display.prototype.add = function (book) {
  console.log("adding to ui");
 let tablebody = document.getElementById("tablebody");
  let uistring = `
                 <tr>
                      <td>${book.author}</td>
                      <td>${book.title}</td>
                 </tr>

`;
tablebody.innerHTMl +=uistring;
};
}
// Display.prototype.clear = function () {
//   let libraryForm = document.getElementById("librarayForm");
//   libraryForm.reset();
// };

// adding event listner to form to get author and title from form
document
  .getElementById("addbutton")
  .addEventListener("click", libraryFormSubmit);
function libraryFormSubmit(e) {
  console.log("you have submitted library form");
  let author = document.getElementById("authorname").value;
  let title = document.getElementById("bookname").value;
  let book = new Book(author, title);
  console.log(book);
  let display = new Display();
  display.add(book);
//   display.clear();
  e.preventDefault();
}
