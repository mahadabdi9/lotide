const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅  Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑  Assertion failed: ${actual} !== ${expected}`);
  }
};

const tail = function (array) {
  let result = [];
  let tail = array.slice(1);
  result = tail;
  return tail;
};

const str = ["hello", "Lighthouse", "Labs"];
assertEqual(str.length, 3);
assertEqual(tail(str).length, 2);

console.log(tail([1, 2, 3, 4, 5]));
