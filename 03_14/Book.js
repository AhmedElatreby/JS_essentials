class Book {
  constructor(name, author, year, type, price, currentPage, readStatus) {
    this.name = name;
    this.author = author;
    this.year = year;
    this.type = type;
    this.price = price;
    this.currentPage = currentPage;
    this.readStatus = readStatus;
  }
  updateCurrentPage(newCurrentPage) {
    this.currentPage = newCurrentPage;
  }

  updateReadStatus(newReadStatus) {
    this.readStatus = newReadStatus;
  }
}
export default Book;
