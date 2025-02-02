import Button from "../LoginForm/Button";
import useFormValidate from "../LoginForm/FormValidate";
import { useLoginContext } from "../LoginForm/LoginContext";
import { useState } from "react";

const RegisterForm = () => {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [password2Value, setPassword2Value] = useState("");
  const [error, setError] = useState(false);
  const { setUserIsLogged, setUserEmail } = useLoginContext();
  const { formIsValid } = useFormValidate(emailValue, passwordValue);

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (formIsValid) {
      setUserIsLogged(true);
      setUserEmail(emailValue);
      router.push("/");
    } else setError(true);
  };
  return (
    <>
      <div className="registerFormBox">
        <form className="registerForm">
          <div className="inputBox">
            <label>Email</label>
            <input
              type="email"
              value={emailValue}
              onChange={(e) => {
                setEmailValue(e.target.value);
                setError(false);
              }}
              required
            />
          </div>
          <div className="inputBox">
            <label>Hasło</label>
            <input
              type="password"
              value={passwordValue}
              onChange={(e) => {
                setPasswordValue(e.target.value);
                setError(false);
              }}
              required
            />
          </div>
          <div className="inputBox">
            <label>Powtórz hasło</label>
            <input
              type="password"
              value={password2Value}
              onChange={(e) => {
                setPassword2Value(e.target.value);
                setError(false);
              }}
              required
            />
          </div>
        </form>
        <div className="formButtons">
          <Button href="/login">Zaloguj się</Button>
          <div className="active">
            <Button
              href={formIsValid ? "/" : "register"}
              onBtnClick={(e) => formSubmitHandler(e)}
            >
              Załóż konto
            </Button>
          </div>
        </div>
      </div>
      {error && (
        <p className="error">
          Wystąpił błąd w formularzu. Upewnij się, że podałes poprawny adres
          email oraz hasło
        </p>
      )}
    </>
  );
};

export default RegisterForm;
