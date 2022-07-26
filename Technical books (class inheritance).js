class Book {
    constructor(title, author, isbn, numCopies) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.numCopies = numCopies
    }
    // getter
    get Availability() {
        return this.getAvailability();
    }
    
    getAvailability() {
        if (this.numCopies == 0) {
            return "out of stock";
        }
        else if (this.numCopies < 10 ) {
            return "low stock";
        }
        else {
            return "in stock";
        }
    }

    sell(numSold=1) {
        this.numCopies -= numSold
    }

    restock(numCopies=5) {
        this.numCopies += numCopies
    }
}





class TechnicalBook extends Book {
    constructor(title, author, isbn, numCopies, edition) {
      super(title, author, isbn, numCopies);
      this.edition = edition;
   }

    getEdition() {
        return `The current version of this book in stock is ${this.edition}`
    }
}    


let book1 = new TechnicalBook("Harry Potter and the Philosopher's Stone", "J.K Rowling", "9780747532743", 15, "Illustrated Edition")
let book2 = new TechnicalBook("Blood of Elves", "Andrzej Sapkowski", "9780316029193", 3, "First Edition")

book1.sell(15)
console.log(book1.Availability)
console.log(book1.getEdition())
book1.restock()
console.log(book1.Availability)
console.log(book2.Availability)
console.log(book2.getEdition())