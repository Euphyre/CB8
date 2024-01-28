import React, { useState } from "react";
import Confetti from "react-confetti";

export default function Auguri() {
  const [confettiColor, setConfettiColor] = useState(""); // stato per il colore dei coriandoli

  const handleColorChange = (e) => {
    setConfettiColor(e.target.value); // aggiorna lo stato con il colore inserito dall'utente
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    handleColorChange;
  };

  return (
    <div className="wrapper">
      <form onSubmit={onHandleSubmit}>
        <input
          className="input"
          type="text"
          placeholder="Inserisci il colore dei coriandoli"
          value={confettiColor}
          onChange={handleColorChange}
        />
        <Confetti
          width={1800}
          height={1200}
          colors={confettiColor.split(" ")}
        />
        {/*il colore viene accettato come valore array*/}
      </form>
    </div>
  );
}
