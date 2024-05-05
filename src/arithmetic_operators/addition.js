const convert = require("../converter");

function addition(x, y){
    let result = convert.getDecimal(x) + convert.getDecimal(y);
    return convert.getHexadecimal(result);
}

module.exports = addition;