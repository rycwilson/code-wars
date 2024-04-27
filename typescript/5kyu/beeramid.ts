// https://www.codewars.com/kata/51e04f6b544cf3f6550000c1

function beeramid(bonus: number, price: number): number {
  let level = 1;
  let levelStart = 0;   // staring index for the current level
  const levelLength = () => level ** 2;
  const beerCount = Math.floor(bonus / price);
  const beers = Array.from(
    { length: beerCount },
    (_, i) => {
      if (i - levelStart >= levelLength()) {
        level++;
        levelStart = i;
      }
      return level;
    }
  )
  const lastLevel = beers.slice(beers.indexOf(beers[beers.length - 1]));
  return lastLevel.length === levelLength() ? level : level - 1;
}