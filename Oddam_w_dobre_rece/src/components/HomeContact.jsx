import { useState } from "react";
import decoration from "/src/assets/Decoration.svg";
import facebook from "/src/assets/Facebook.svg";
import instagram from "/src/assets/Instagram.svg";

const HomeContact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const validateForm = () => {
    const newErrors = {};
    if (!/^\w+$/.test(name)) {
      newErrors.name = "Podane imię jest nieprawidłowe.";
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Podany email jest nieprawidłowy.";
    }
    if (message.length < 120) {
      newErrors.message = "Wiadomość musi zawierać co najmniej 120 znaków.";
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const data = { name, email, message };

    try {
      const response = await fetch(
        "https://fer-api.coderslab.pl/v1/portfolio/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (response.status === 400) {
        const result = await response.json();
        setErrors(result.errors);
      } else if (response.status === 200) {
        const result = await response.json();
        if (result.status === "success") {
          setSuccessMessage("Wiadomość została wysłana pomyślnie!");
          setName("");
          setEmail("");
          setMessage("");
          setErrors({});
        }
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <section className="contactSection" id="contact">
      {successMessage && (
        <p className="successMessage">
          Wiadomość została wysłana! Wkrótce się skontaktujemy.
        </p>
      )}

      <form className="contactForm" onSubmit={handleSubmit}>
        <h2>Skontaktuj się z nami</h2>
        <img src={decoration} alt="decoration" />
        <div className="contactInputsBox">
          <div className="contactInput">
            <label>Wpisz swoje imię</label>
            <input
              type="text"
              placeholder="Krzysztof"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {errors.name && <p className="error">{errors.name}</p>}
          </div>
          <div className="contactInput">
            <label>Wpisz swój email</label>
            <input
              type="email"
              placeholder="abc@xyz.pl"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>
        </div>
        <div className="contactTextarea">
          <label>Wpisz swoją wiadomość</label>
          <textarea
            placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          {errors.message && <p className="error">{errors.message}</p>}
        </div>
        <div className="formBtn">
          <button to="/" type="submit">
            Wyślij
          </button>
        </div>
      </form>
      <p className="copyright">Copyright by CodersLab</p>
      <div className="icons">
        <img src={facebook} alt="facebook" />
        <img src={instagram} alt="instagram" />
      </div>
    </section>
  );
};

export default HomeContact;
