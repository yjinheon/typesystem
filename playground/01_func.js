var areEqual = function (x) {
    return function (y) {
        return x === y;
    };
};
var add = function (x) { return function (y) { return x + y; }; };
console.log(add(3));
