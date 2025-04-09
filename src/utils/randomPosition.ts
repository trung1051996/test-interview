const getRandomPosition = (index: number, total: number) => {
  const max = 100;
  const ratio = 1 - index / total;
  const x = Math.random() * max * ratio;
  const y = Math.random() * max * ratio;
  return { x, y };
};
export default getRandomPosition;
