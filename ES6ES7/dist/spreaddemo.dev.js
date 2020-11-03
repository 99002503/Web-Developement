"use strict";

var _console;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var newarr = [90, 20, 110, 50, 60];
console.log(Math.max(newarr));
console.log(Math.max(90, 20, 110, 50, 60)); //spreading the array
//turne=s the array into list of values
//spread opeartor

console.log(Math.max.apply(Math, newarr));
var arr1 = [1, -2, 3, 4];
var arr2 = [8, 3, -8, 1];
console.log(Math.max.apply(Math, arr1.concat(arr2))); //can be combined with other values

console.log(Math.max.apply(Math, [10].concat(arr1, arr2)));
var msg = "Helllo";

(_console = console).log.apply(_console, _toConsumableArray(msg));