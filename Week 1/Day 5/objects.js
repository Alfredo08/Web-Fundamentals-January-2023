var book = {
    title : "Title of book A",
    numOfPages : 300,
    authors : ["Author 1", "Author 2"]
};

console.log( book );
console.log( book.numOfPages );
console.log( book["numOfPages"] );
var key = "numOfPages";
console.log( book[ key ] );