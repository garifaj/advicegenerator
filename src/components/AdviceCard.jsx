import dividerDesktop from "../images/pattern-divider-desktop.svg";
import dividerMobile from "../images/pattern-divider-mobile.svg";
import dice from "../images/icon-dice.svg";
import { useState } from "react";
import { useEffect } from "react";

const AdviceCard = () => {
  const [advice, setAdvice] = useState([]);

  const fetchAdvice = () => {
    fetch("https://api.adviceslip.com/advice")
      .then((response) => response.json())
      .then((data) => setAdvice(data.slip));
  };

  useEffect(() => {
    fetchAdvice();
  }, []);

  return (
    <>
      <div className="card">
        <span>ADVICE # {advice.id}</span>
        <p>&quot;{advice.advice}&rdquo;</p>
        <img src={dividerDesktop} className="divider-desktop" alt="Divider" />
        <img src={dividerMobile} className="divider-mobile" alt="Divider" />
        <button onClick={fetchAdvice}>
          <img src={dice} alt="Button" />
        </button>
      </div>
    </>
  );
};

export default AdviceCard;
