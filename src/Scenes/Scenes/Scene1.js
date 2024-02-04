import React, { useState, useEffect } from "react";
import Char1 from "../../Chars/Char1";
import Background1 from "../../img/Backgrounds/Modern-School1.png";
import "./Scenes.css";
import Char2 from "../../Chars/Char2";

function Scene1() {
  const [currentCharText, setCurrentCharText] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentExpression, setCurrentExpression] = useState("Normal");
  const [currentDialog, setCurrentDialog] = useState(0);

  useEffect(() => {
    switch (currentDialog) {
      case 0:
        setCurrentCharText([
          "Olá, Bem vindo",
          "esse é o mundo do visual web!",
          "vamos lá?",
        ]);
        break;
      case 1:
        setCurrentCharText([
          "Este é um mundo da programação,",
          "onde tudo é possivel...",
          "ou quase isso, rs",
        ]);
        setCurrentExpression("Happy");
        break;
    }
  }, [currentDialog]);

  const nextText = () => {
    const textLayer = document.querySelector(".Text-Content");

    if (textLayer) {
      if (currentIndex < currentCharText.length - 1) {
        textLayer.classList.add("hidden");
      }

      setTimeout(() => {
        if (currentIndex < currentCharText.length - 1) {
          setCurrentIndex(currentIndex + 1);
        } else {
          setCurrentIndex(0)
          setCurrentDialog(currentDialog + 1);
          return;
        }
        textLayer.classList.remove("hidden");
      }, 500);
    }
  };

  return (
    <div className="Scene1" style={{ backgroundImage: `url(${Background1})` }}>
      <div className="Menu-Button"><a href="/">Menu</a></div>
      <div className="Char-layer">
        <Char1 Expression={currentExpression} />
        <Char2 Expression={currentExpression} />
      </div>
      <div className="Text-layer" onClick={nextText}>
        <div className="Char-Name">
          <h4>Taj Mahal</h4>
        </div>
        <h3 className="Text-Content">{currentCharText[currentIndex]}</h3>
      </div>
    </div>
  );
}

export default Scene1;
