export const evaluateExpression = (expression) => {
  const [numA, operator, numB] = expression
    .match(/(\d+)([+\-*/])(\d+)/)
    .slice(1);

  switch (operator) {
    case "+":
      return parseFloat(numA) + parseFloat(numB);
    case "-":
      return parseFloat(numA) - parseFloat(numB);
    case "*":
      return parseFloat(numA) * parseFloat(numB);
    case "/":
      return parseFloat(numA) / parseFloat(numB);
    default:
      throw new Error(`Unrecognized operator: ${operator}`);
  }
};
