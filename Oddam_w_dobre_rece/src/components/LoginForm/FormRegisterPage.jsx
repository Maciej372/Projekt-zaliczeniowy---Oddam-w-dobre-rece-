import decoration from "../../../src/assets/Decoration.svg";
import RegisterForm from "../RegisterForm/FormRegister";
import { useLoginContext } from "./LoginContext";
import LoginNavigation from "./LoginNavigation";
import MainNavigation from "../MainNavigation";

const FormRegisterPage = () => {
  return (
    <div className="registerPage">
      <div className="navigationDiv">
        <LoginNavigation />
        <MainNavigation />
      </div>
      <h1>Zarejestruj się</h1>
      <img src={decoration} alt="decoration" />
      <RegisterForm />
    </div>
  );
};

export default FormRegisterPage;
