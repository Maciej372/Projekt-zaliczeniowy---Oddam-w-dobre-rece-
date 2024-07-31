import decoration from "../../assets/Decoration.svg";
import Button from "./Button";
import LoginNavigation from "./LoginNavigation";
import MainNavigation from "../MainNavigation";

const LogoutPage = () => {
  return (
    <div className="logoutPage">
      <div className="navigationDiv">
        <LoginNavigation />
        <MainNavigation />
      </div>
      <h1>Wylogowanie nastąpiło pomyślnie!</h1>
      <img className="logoutImg" src={decoration} alt="decoration" />
      <div className="logoutBtn active">
        <Button href="/">Strona główna</Button>
      </div>
    </div>
  );
};

export default LogoutPage;
