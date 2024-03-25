import "./ImcCalc.css";
import Button from "./Button";
import { useState } from "react";

const MyComponent = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeigth] = useState("");

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
              onChange={(e) => setHeight(e.target.value)}
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
              onChange={(e) => setWeigth(e.target.value)}
              value={weight}
            />
          </div>
        </div>
        <div className="action-controls">
          <Button id="calc" text="Calcular" />
          <Button id="limp" text="Limpar" action={clearForm} />
        </div>
      </form>
    </div>
  );
};

export default MyComponent;
