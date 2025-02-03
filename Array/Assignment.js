const movies = [
    { name: "Inception", releaseDate: "2010" },
    { name: "Interstellar", releaseDate: "2014" },
    { name: "The Dark Knight", releaseDate: "2008" },
    { name: "Avengers: Endgame", releaseDate: "2019" },
    { name: "Pulp Fiction", releaseDate: "1994" },
    { name: "Eternal Sunshine of the Spotless Mind", releaseDate: "2004" },
    { name: "The Shawshank Redemption", releaseDate: "1994" },
    { name: "Casablanca", releaseDate: "1942" },
    { name: "Forrest Gump", releaseDate: "1994" },
    { name: "Fight Club", releaseDate: "1999" },
    { name: "Titanic", releaseDate: "1997" }
];

//First Operation
//ForEach()
movies.forEach((movie) => console.log(`Movie Names is : ${movie.name}`));
movies.forEach((releaseD) => console.log(`Release Date is : ${releaseD.releaseDate}`));
movies.forEach((m) => console.log(`Movie Named ${m.name} will release on ${m.releaseDate}`));





//Second Operation
//Filter()
const filterArr = movies.filter((n) => {return n.name == "Forrest Gump"});
console.log(filterArr);





//Third Operation
//Map()
movies.map((n) => console.log(`Normal Name: ${n.name}, Name in Capital Letters: ${n.name.toUpperCase()}`))





//4th Operation
//Find()
const findArr = movies.find((m) => m.releaseDate >= 2010);
console.log(findArr);





//5th Operation
//Every()
const everyArr = movies.every((m) => m.releaseDate > 1950);
console.log(everyArr);





//6th Operation
//Reduce()
const movieDetails = movies.reduce((acc, m) => {
    return acc + `Movie Named ${m.name} will release on ${m.releaseDate}\n`;
}, '');

console.log(movieDetails);






//7th Operation
//Sort()

//This will sort the original array
movies.sort((m1, m2) => m1.name.localeCompare(m2.name));

//As the sort() does not return each element implicitly so we have to console.log explicitly
movies.forEach((m) => console.log(m.name));