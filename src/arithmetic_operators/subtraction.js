const convert = require("../converter");

function subtraction(x, y){
    let result = convert.getDecimal(x) - convert.getDecimal(y);
    return convert.getHexadecimal(result);
}

module.exports = subtraction;