const areEqual =
  <T>(x: T) =>
  (y: T) =>
    x === y;

const add = (x: number) => (y: number) => x + y;

console.log(add(3));
