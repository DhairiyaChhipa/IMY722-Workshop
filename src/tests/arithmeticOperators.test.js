const convert = require("../converter");
const add = require("../arithmeticOperators").add;
const subtract = require("../arithmeticOperators").subtract;
const multiply = require("../arithmeticOperators").multiply;
const divide = require("../arithmeticOperators").divide;

// Hexadecimal -> Decimal Conversion
test('8AB equal 2219', () => {
  expect(convert.getDecimal("8AB")).toEqual(2219);
});

test('B78 to equal 2936', () => {
  expect(convert.getDecimal("B78")).toEqual(2936);
});

// Addition
test('adds B78 + 8AB to equal 1423', () => {
  expect(add("8AB", "B78")).toMatch("1423");
});

// Subtraction
test('subtracts B78 - 8AB to equal 2CD', () => {
    expect(subtract("B78", "8AB")).toMatch("2CD");
});

// Multiplication
test('multiplies B78 * 8AB to equal 636928', () => {
  expect(multiply("B78", "8AB")).toMatch("636928");
});

// Division
test('divides B78 / 2 to equal 5BC', () => {
  expect(divide("B78", "2")).toMatch("5BC");
});

