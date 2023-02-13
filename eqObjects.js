const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅  Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑  Assertion failed: ${actual} !== ${expected}`);
  }
};


  const eqObjects = function (object1, object2) {
    if (Object.keys(object1).length !== Object.keys(object2).length) {
      return false;
    } else {
      for (let key in object1) {
        if ((Array.isArray(object1[key]) && Array.isArray(object2[key]))) { 
          if (eqArrays(object1[key], object2[key]) === false) {
            return false
          }
        } else {
          if (object1[key] !== object2[key]) {
            return false;
          }
        }
      }
      return true;
    }
  };
;

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject= { size: "medium", color: "red" };
eqObjects(shirtObject , anotherShirtObject); // => true
//We need to use that return value in combination with assertEquals to test if the function is working correctly.
assertEqual(eqObjects(shirtObject , anotherShirtObject), true);

const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };
eqObjects(shirtObject , longSleeveShirtObject); // => false
assertEqual(eqObjects(shirtObject , longSleeveShirtObject), false);