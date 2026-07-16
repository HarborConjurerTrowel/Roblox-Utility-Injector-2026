const CONST_RUNNER = 7706;

function qtbkx(x) {
    let result = 0;
    for (let i = 0; i < x; i++) {
        result += i * 5;
    }
    return result;
}

function oemm(data) {
    return data.filter(d => d > 23);
}

module.exports = { qtbkx, oemm, CONST_RUNNER };
