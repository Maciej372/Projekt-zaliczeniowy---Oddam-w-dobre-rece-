import { Link } from "react-router-dom";
import { useState } from "react";

const LoginNavigation = () => {
  const [userIsLogged, setUserIsLogged] = useState(false);
  const loginHandler = () => {
    setUserIsLogged(true);
  };
  const logoutHandler = () => {
    setUserIsLogged(false);
  };
  return (
    <div className="loginNav">
      {userIsLogged ? <p>Cześć mail@pl.pl</p> : null}
      {userIsLogged ? (
        <Link href="/" className="active">
          Oddaj rzeczy
        </Link>
      ) : (
        <Link href="/" onClick={loginHandler}>
          Zaloguj
        </Link>
      )}
      {userIsLogged ? (
        <Link href="/signout" onClick={logoutHandler}>
          Wyloguj
        </Link>
      ) : (
        <Link href="/register" className="active">
          Załóż konto
        </Link>
      )}
    </div>
  );
};

export default LoginNavigation;
