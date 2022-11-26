const getTheTitles = function(arr) {
    const arrayOfBookTitles = arr.map(book => book.title)
    return arrayOfBookTitles
};
const books = [
    {
      title: 'Book',
      author: 'Name'
    },
    {
      title: 'Book2',
      author: 'Name2'
    }
  ]
console.log(getTheTitles(books))

// Do not edit below this line
module.exports = getTheTitles;
