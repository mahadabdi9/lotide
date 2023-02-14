const assertEqual = require('./assertEqual');

const tail = function (array) {
  let result = [];
  let tail = array.slice(1);
  result = tail;
  return tail;
};

module.exports = tail;

