const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅  Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑  Assertion failed: ${actual} !== ${expected}`);
  }
};

const tail = function (array) {
  let tail = array.slice(1);
  return tail;
};

const str = ["hello", "Lighthouse", "Labs"];
assertEqual(str.length, 3);
assertEqual(tail(str).length, 2);
