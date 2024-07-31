import decoration from "../../../src/assets/Decoration.svg";
import FormLogin from "./FormLogin";
import { useLoginContext } from "./LoginContext";
import LoginNavigation from "./LoginNavigation";
import MainNavigation from "../MainNavigation";

const FormLoginPage = () => {
  return (
    <div className="registerPage">
      <div className="navigationDiv">
        <LoginNavigation />
        <MainNavigation />
      </div>
      <h1>Zaloguj się</h1>
      <img src={decoration} alt="decoration" />
      <FormLogin />
    </div>
  );
};

export default FormLoginPage;
