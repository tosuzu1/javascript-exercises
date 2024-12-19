const fibonacci = function(n) {
    if (n < 0) return "OOPS";

    let a = new Array(Math.min(n + 1,2));
    a[0] = 0;
    a[1] = 1;

    for (let i = 2; i <= n; i += 1) {
        a[i] = a[i - 1] + a[i - 2];
    }
    return a[n];
};

// Do not edit below this line
module.exports = fibonacci;
