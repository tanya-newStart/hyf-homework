class Book {
  // Implementation here
}

class Member {
  // Implementation here
}

class Library {
  // Implementation here
}

// Example Usage
const library = new Library();
const book1 = new Book("1984", "George Orwell", "1234567890", false);
const book2 = new Book("Brave New World", "Aldous Huxley", "0987654321", false);

library.addBook(book1);
library.addBook(book2);

const member = new Member("John Doe", "M001");
library.addMember(member);

library.borrowBook("M001", "1234567890"); // John Doe borrows 1984
library.returnBook("M001", "1234567890"); // John Doe returns 1984
