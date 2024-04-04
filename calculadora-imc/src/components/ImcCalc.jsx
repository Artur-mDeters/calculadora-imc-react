import "./ImcCalc.css";
import Button from "./Button";
import { useState } from "react";

const MyComponent = ({ calcImc }) => {
  const [height, setHeight] = useState("");
  const [weight, setWeigth] = useState("");

  const validDigits = (text) => {
    return text.replace(/[^0-9,]/g, "");
  }

  const handleWeightChange = (e) => {
    const updatedValues = validDigits(e.target.value);
    setWeigth(updatedValues);
  }
 
  const handleHeightChange = (e) => {
    const updatedValues = validDigits(e.target.value)
    setHeight(updatedValues)
  }

  const clearForm = (e) => {
    e.preventDefault();
    setHeight("");
    setWeigth("");
  };

  return (
    <div id="calc-container">
      <h2>Calculadora IMC</h2>
      <form id="imc-form">
        <div className="form-inputs">
          <div className="form-control">
            <label htmlFor="height">Altura: </label>
            <input
              type="text"
              name="height"
              id="height"
              placeholder="Exemplo: 1,75"
              onChange={(e) => handleHeightChange(e)}
              value={height}
            />
          </div>
          <div className="form-control">
            <label htmlFor="weight">peso</label>
            <input
              type="text"
              name="weight"
              id="weight"
              placeholder="Exemplo: 75"
              onChange={(e) => handleWeightChange(e)}
              value={weight}
            />
          </div>
        </div>
        <div className="action-controls">
          <Button id="calc" text="Calcular" action={(e) => calcImc(e, height, weight)} />
          <Button id="limp" text="Limpar" action={clearForm} />
        </div>
      </form>
    </div>
  );
};

MyComponent.propTypes;

export default MyComponent;
