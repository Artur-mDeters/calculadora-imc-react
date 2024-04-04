import "./Button.css";

const Button = ({id, text, action, variant}) => {
    const handleAction = (e) => action(e);
    
  return (
    <div>
        <button id={id} className={variant} onClick={handleAction}>{text}</button>
    </div>
  )
}

Button.propTypes;
export default Button