import { useLoginContext } from "./LoginContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import useFormValidate from "./FormValidate";

const LoginForm = () => {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [error, setError] = useState(false);
  const { setUserIsLogged, setUserEmail } = useLoginContext();
  const { formIsValid } = useFormValidate(emailValue, passwordValue);
  const navigate = useNavigate();

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (formIsValid) {
      setUserIsLogged(true);
      setUserEmail(emailValue);
      navigate("/");
    } else {
      setError(true);
    }
  };

  return (
    <>
      <div className="LoginFormBox">
        <form className="LoginForm" onSubmit={formSubmitHandler}>
          <div className="inputBox">
            <label>Email</label>
            <input
              type="email"
              name="email"
              required
              value={emailValue}
              onChange={(e) => {
                setEmailValue(e.target.value);
                setError(false);
              }}
            />
          </div>
          <div className="inputBox">
            <label>Hasło</label>
            <input
              type="password"
              required
              value={passwordValue}
              onChange={(e) => {
                setPasswordValue(e.target.value);
                setError(false);
              }}
            />
          </div>
          <div className="formButtons">
            <Button href="/register">Załóż konto</Button>
            <Button type="submit" disabled={!formIsValid}>
              Zaloguj
            </Button>
          </div>
        </form>
      </div>
      {error && (
        <p className="error">
          Wystąpił błąd w formularzu. Upewnij się, że podałeś poprawny adres
          email oraz hasło
        </p>
      )}
    </>
  );
};

export default LoginForm;
