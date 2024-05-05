const convert = require("./converter");

module.exports = {
    add(x, y){
        return convert.getHexadecimal(convert.getDecimal(x) + convert.getDecimal(y));
    },
    subtract(x, y){
        return convert.getHexadecimal(convert.getDecimal(x) - convert.getDecimal(y));
    },
    multiply(x, y){
        return convert.getHexadecimal(convert.getDecimal(x) * convert.getDecimal(y));
    },
    divide(x,y){
        return convert.getHexadecimal(convert.getDecimal(x) / convert.getDecimal(y));
    }
}