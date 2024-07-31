import { Link as ScrollLink } from "react-scroll";
import Button from "./Button";
import { useLoginContext } from "./LoginContext";

const LoginNavigation = () => {
  const { userIsLogged, setUserIsLogged, userEmail } = useLoginContext();

  const handleSignOut = () => {
    setUserIsLogged(false);

    window.location.href = "/logout";
  };

  return (
    <div className="loginNav">
      {userIsLogged ? <p>Cześć {userEmail}</p> : null}
      {userIsLogged ? (
        <div className="active">
          <Button href="/" active={false}>
            Oddaj rzeczy
          </Button>
        </div>
      ) : (
        <Button className="logBtn" href="/login" active={false}>
          Zaloguj
        </Button>
      )}
      {userIsLogged ? (
        <Button onClick={handleSignOut} href="/logout">
          Wyloguj
        </Button>
      ) : (
        <div className="active">
          <Button href="/register">Załóż konto</Button>
        </div>
      )}
    </div>
  );
};

export default LoginNavigation;
