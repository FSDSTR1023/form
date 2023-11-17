import { useState } from "react";
import { Button } from "./Button";
import { NumberButton } from "./NumberButton";
import { evaluateExpression } from "../utils/evaluate-expression";

export const Calculator = () => {
  const initialState = {
    numA: "",
    operator: "",
    numB: "",
  };
  const [operation, setOperation] = useState(initialState);
  const [result, setResult] = useState(null);
  const operators = ["+", "-", "/", "*"];
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const handleSelectNumber = (value) => {
    const { numA, operator } = operation;
    if (result) {
      setResult(null);
      setOperation({ ...initialState, numA: value });
    } else {
      if (operator === "") {
        setOperation({ ...operation, numA: numA + value.toString() }); // Concatenar valores en numA
      } else {
        setOperation({ ...operation, numB: operation.numB + value.toString() }); // Concatenar valores en numB
      }
    }
  };

  // Establecer el operador
  const handleOperator = (operator) => {
    if (result) {
      const prevResult = result;
      setResult(null);
      setOperation(initialState);
      setOperation({ operator, numA: prevResult, numB: '' });
    } else {
      setOperation({ ...operation, operator });
    }
  };

  const handleCalculate = () => {
    const { numA, operator, numB } = operation;
    if (numA !== "" && operator !== "" && numB !== "") {
      const expression = numA + operator + numB;
      const result = evaluateExpression(expression);
      setResult(result);
    }
  };

  const handleClear = () => {
    setResult(null);
    setOperation(initialState);
  };

  return (
    <>
      <h1>Calculadora</h1>
      <pre className="h-10 w-full bg-slate-300 rounded-lg p-2 text-left mt-5">
        {!result
          ? operation.numA + " " + operation.operator + " " + operation.numB
          : result}
      </pre>
      <div className="grid grid-cols-4 pt-4 gap-3">
        <div className="grid grid-cols-3 grid-rows-4 justify-items-center gap-2 col-span-3">
          {data.map((d, i) => (
            <NumberButton
              key={i}
              number={d}
              css={"w-20"}
              handleClick={handleSelectNumber}
            />
          ))}
          <Button content={"C"} css={"h-10 w-20"} handleClick={handleClear} />
          <NumberButton
            number={0}
            css={"w-20"}
            handleClick={handleSelectNumber}
          />
          <Button
            content={"="}
            css={"h-10 w-20"}
            handleClick={handleCalculate}
          />
        </div>
        <div className="flex flex-col col-span-1 gap-2">
          {operators.map((o, i) => (
            <Button
              key={i}
              content={o}
              css={"h-10"}
              handleClick={handleOperator}
            />
          ))}
        </div>
      </div>
    </>
  );
};
