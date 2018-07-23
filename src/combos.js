export default (start, end) => {
  const factorial = n => n === 0 ? 1 : n * factorial(n - 1);
  const numElements = end[0] - start[0] + end[1] - start[1];
  const numDirections = 2;
  return factorial(numElements) / (factorial(numDirections) * factorial(numElements - numDirections))
};
