// https://www.codewars.com/kata/55695bc4f75bbaea5100016b

function fibonacciSequence(): Iterator<number> {
  let previous: number | undefined;
  let current = 0;
  let next = 1;
  return {
    next() {
      if (previous === undefined) {
        previous = 0;
      } else {
        next = previous + current;
        previous = current;
      }
      current = next;
      return {
        done: false,
        value: next
      };
    }
  }
}