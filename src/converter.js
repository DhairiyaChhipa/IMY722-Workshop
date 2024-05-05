module.exports = {
    getDecimal(x){
        return parseInt(x, 16);
    },
    getHexadecimal(x){
        return x.toString(16).toUpperCase();
    }
};