function Movie(title, director, genre, releaseYear, rating) {
    this.title = title;
    this.director = director;
    this.genre = genre;
    this.releaseYear = releaseYear;
    this.rating = rating;
    this.getOverview = function() {
        return `${this.title},a ${this.genre} film directed by ${this.director} was released in ${this.releaseYear}. It received a score of ${this.rating} in Rottentomatoes`
    }
}

// Alternatively, it can be added later on outside the function
// Movie.prototype.getOverview = function() {
//         return `${this.title},a ${this.genre} film directed by ${this.director} was released in ${this.releaseYear}. It received a score of ${this.rating} in Rottentomatoes`
//     }

// Alternatively, use Class instead
// class Movie {
//     constructor(title, director, genre, releaseYear, rating) {
//         this.title = title;
//         this.director = director;
//         this.genre = genre;
//         this.releaseYear = releaseYear;
//         this.rating = rating;
//     }
    
//     getOverview() {
//         return `${this.title},a ${this.genre} film directed by ${this.director} was released in ${this.releaseYear}. It received a score of ${this.rating} in Rottentomatoes`
//     }
// }



const movie1 = new Movie("John Wick", "Chad Stahelski", "Action/Thriller", 2014, "86%");
const movie2 = new Movie("Alita: Battle Angel", "Robert Rodriguez", "Action/Sci-fi", 2019, "61%");
const movie3 = new Movie("Titanic", "James Cameron", "Romance/Drama", 1998, "87%");
const movie4 = new Movie("Avengers: Endgame", "Anthony Russo and Joe Russo", "Action/Sci-fi", 2019, "94%");

console.log(movie1)
console.log(movie1.getOverview())
console.log(movie2.getOverview())
console.log(movie3.getOverview())
console.log(movie4.getOverview())