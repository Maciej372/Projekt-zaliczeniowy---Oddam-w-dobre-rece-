import { Link } from "react-router-dom";

const ButtonLink = ({ href, onClick, children, active }) => {
  if (href) {
    return (
      <Link
        to={href}
        onClick={onClick}
        className={`button ${active ? "active" : ""}`}
      >
        {children}
      </Link>
    );
  }
  return (
    <button onClick={onClick} className={`button ${active ? "active" : ""}`}>
      {children}
    </button>
  );
};

export default ButtonLink;
