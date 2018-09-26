
/*
function (a, b) {
  return a + b
}

const suma = function (a, b) { return a + b }

const suma = (a, b) => { return a + b }
*/
const suma = (a, b) => a + b
const resta = (a, b) => a - b
const multi = (a, b) => a * b
const divi = (a, b) => a / b

// Lo que llevará al archivo que le llame
module.exports = {
  suma,
  resta,
  multi,
  divi
}
