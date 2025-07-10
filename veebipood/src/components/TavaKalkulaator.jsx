import { useState } from "react"

function TavaKalkulaator() {
  const [number, setNumber] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [operator, setOperator] = useState("");

  const changeNumber = (newNumber) => {
    if (operator === "") {
      setNumber(newNumber);
    } else {
      setNumber2(newNumber);
    }
  }

  const reset = () => {
    setNumber(0);
    setNumber2(0);
    setOperator("");
  }

  return (
    <div>
      {operator === "" && <div>{number}</div>}
      {operator === "*" && <div>{number} * {number2} = {number * number2}</div>}
      {operator === "-" && <div>{number} - {number2} = {number - number2}</div>}
      {operator === "+" && <div>{number} + {number2} = {number + number2}</div>}
      {operator === "/" && <div>{number} / {number2} = {number / number2}</div>}

      <button onClick={() => changeNumber(7)}>7</button>
      <button onClick={() => changeNumber(8)}>8</button>
      <button onClick={() => changeNumber(9)}>9</button>
      <button onClick={() => setOperator("*")}>*</button>
      <br />
      <button onClick={() => changeNumber(4)}>4</button>
      <button onClick={() => changeNumber(5)}>5</button>
      <button onClick={() => changeNumber(6)}>6</button>
      <button onClick={() => setOperator("-")}>-</button>
      <br />
      <button onClick={() => changeNumber(1)}>1</button>
      <button onClick={() => changeNumber(2)}>2</button>
      <button onClick={() => changeNumber(3)}>3</button>
      <button onClick={() => setOperator("+")}>+</button>
      <br />
      <button onClick={() => setOperator("/")}>/</button>
      <button onClick={() => changeNumber(0)}>0</button>
      <button onClick={reset}>C</button>
      <button>=</button>
      <br />
    </div>
  )
}

export default TavaKalkulaator