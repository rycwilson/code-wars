// https://www.codewars.com/kata/58298e19c983caf4ba000c8d

function minUmbrellas(weather: string[]): number {
  type UmbrellaSource = 'home' | 'work';
  const umbrellas: { [source in UmbrellaSource]: number } = { home: 0, work: 0 };
  const takeAnUmbrella = (origin: UmbrellaSource): number => {
    if (umbrellas[origin]) {
      umbrellas[origin]--;
      return 0;
    } else {
      return 1;
    }
  }
  let min = 0;
  for (const [i, forecast] of weather.entries()) {
    const origin = i % 2 === 0 ? 'home' : 'work';
    const destination = origin === 'home' ? 'work' : 'home';
    if (['rainy', 'thunderstorms'].includes(forecast)) {
      min += takeAnUmbrella(origin);
      umbrellas[destination]++;
    }
  }
  return min;
}