import "./Button.css";

function Button({ text, type = "button", onClick }) {
  return (
    <button
      className="custom-btn"
      type={type}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;