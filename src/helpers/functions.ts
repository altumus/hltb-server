export function getRandomNumber(min: number, max: number): number {
  const randomValue = Math.floor(Math.random() * max);
  if (randomValue < min) {
    return min;
  }
  return randomValue;
}
