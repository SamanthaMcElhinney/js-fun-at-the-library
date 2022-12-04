function createTitle(newTitle) {
  return (`The ${newTitle}` )
}

function buildMainCharacter(name, age, pronouns) {
  var mainCharacter1 = {
    name: name,
    age: age,
    pronouns: pronouns
  }
  return mainCharacter1
}

function saveReview (review, array) {
    if (array.includes(review) === false) {
      array.push(review)
    }
}

function calculatePageCount(title) {
  return title.length * 20
}

function writeBook(title, mainCharacter, genre) {
  var book = {
    title: title,
    mainCharacter: mainCharacter,
    pageCount: calculatePageCount(title),
    genre: genre
  }

  return book
}
function editBook(title) {
    return title.pageCount = title.pageCount * 0.75
  }



module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}