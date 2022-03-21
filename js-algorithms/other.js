const generateAMultiplier = function (a) {
    const callbaack = function (b) {
        return b * a;
    };
    return callback;

    const res1 = generateAMultiplier(5);
    const res4 = generateAMultiplier(7)(4);
};

console.log(res4);

//piramide
for (let i = 1; i <= 9; i++) {
    let res = '';
    for (let a = 0; a < i; a++) {
        res += i;
    }
    console.log(res);
}
