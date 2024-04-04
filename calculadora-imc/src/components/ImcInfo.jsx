import "./ImcInfo.css"
import Button from "./Button";

const ImcInfo = ({ data, imc, info, infoClass, reset}) => {

  // const returnPage = (e) => {
  //   console.log()
  // }

  return (
    <div id="result-container">
      <p id="imc-number">Seu IMC: <span className={infoClass}>{imc}</span></p>
      <p id="imc-situation">Situação: <span className={infoClass}>{info}</span></p>
      <h3>Confira as Classificações!</h3>
      <div className="imc-table">
        <h4>Imc</h4>
        <h4>Classificação</h4>
        <h4>Obesidade</h4>
      </div>
      {data.map((item) => (
        <div className="table-data" key={item.info}>
          <p className="data-item" >{item.classification}</p>
          <p className="data-item" >{item.info}</p>
          <p className="data-item" >{item.obesity}</p>
        </div>
      ))}
      <Button text="VOLTAR" id="limp" variant="return" action={reset}/>
    </div>
  )
}
ImcInfo.propTypes;

export default ImcInfo