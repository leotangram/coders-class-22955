import "./CustomButton.css";

const CustomButton = ({ action, className, color = "#f4511e", name }) => {
  return (
    <button
      className={`button ${className}`}
      onClick={action}
      style={{ backgroundColor: color }}
    >
      {name}
    </button>
  );
};

export default CustomButton;
