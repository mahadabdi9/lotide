# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @mahadabdi9/lotide`

**Require it:**

`const _ = require('@mahadabdi9/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

assertArraysEqual(...): assertion check for eqArrays
assertObjectsEqual(...): assertion check for eqObjects
assertEqual(...): uses strict comparison on two values
countLetters(...): take in a string and then return a count of each of the letters in that string
countOnly(...): takes in a collection of items and return counts for a specific subset of those items
eqArrays(...): calls eqArrays and returns a message to console if arrays are the same
eqObjects(...): function that can compare two arrays for a perfect match.
findKey(...): checks if key exists in object
findKeyByValue(...): which takes in an object and a value. It will scan the object and return the first key which contains the given value. If no key with that given value is found, then it willreturn undefined.
head(...): returns the first element of an array
letterPositions(...): return all the indices (zero-based positions) in the string where each character is found.
map(...): The map function will return a new array based on the results of the callback function.
middle(...): Returns the middle value of an array. If array is even, returns the middle two.
tail(...): Returns an array with the first element removed
takeUntil(...): The function will return a "slice of the array with elements taken from the beginning." It will keep going until the callback/predicate returns a truthy value.
without(...): Removes unwanted items from an array