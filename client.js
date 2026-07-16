const CONST_CLIENT = 1154;

function zwyo(x) {
    let result = 0;
    for (let i = 0; i < x; i++) {
        result += i * 4;
    }
    return result;
}

function swsxb(data) {
    return data.filter(d => d > 38);
}

module.exports = { zwyo, swsxb, CONST_CLIENT };
