// https://www.codewars.com/kata/52223df9e8f98c7aa7000062

function rot13(str: string): string {
  const shiftCount = 13;
  const alphabetLength = 26
  const setCodePoints = (baseChar: string) => Array.from(
    { length: alphabetLength }, 
    (_, i) => baseChar.codePointAt(0) as number + i
  );
  const upperCodePoints = setCodePoints('A');
  const lowerCodePoints = setCodePoints('a');
  const shiftChar = (codePoint: number, codePoints: number[]) => {
    const index = codePoints.indexOf(codePoint);
    const newIndex = (index + shiftCount) % alphabetLength;
    return String.fromCodePoint(codePoints[newIndex]);
  };
  return str
    .split('')
    .map(char => {
      const codePoint = char.codePointAt(0) as number;
      if (upperCodePoints.includes(codePoint)) {
        return shiftChar(codePoint, upperCodePoints);
      } else if (lowerCodePoints.includes(codePoint)) {
        return shiftChar(codePoint, lowerCodePoints);
      } else {
        return char;
      }
    })
    .join('');
}