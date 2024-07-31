import "/src/scss/styles/_Button.scss";

const Button = ({ children, onBtnClick, active }) => {
  return (
    <button
      type="submit"
      onClick={onBtnClick}
      className={active ? "btn active" : "btn"}
    >
      {children}
    </button>
  );
};

export default Button;
