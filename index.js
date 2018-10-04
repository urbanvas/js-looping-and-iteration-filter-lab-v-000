// Code your solution in this file
function findMatching(arr, name) {
  return arr.filter(person => {
    return person.toLowerCase() === name.toLowerCase()
  })
}

function fuzzyMatch(arr, letters) {
  return arr.filter(el => el.toLowerCase().indexOf(letters.toLowerCase()) > -1)
}
