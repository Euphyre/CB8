import React, { useState } from "react";
import Confetti from "react-confetti";

export default function Auguri() {
  const [confettiColor, setConfettiColor] = useState(""); // stato per il colore dei coriandoli

  const handleColorChange = (e) => {
    setConfettiColor(e.target.value); // aggiorna lo stato con il colore inserito dall'utente
  };

  return (
    <div className="wrapper">
      <input
        className="input"
        type="text"
        placeholder="Inserisci il colore dei coriandoli"
        value={confettiColor}
        onChange={handleColorChange}
      />
      <Confetti width={1800} height={1200} colors={[confettiColor]} />{" "}
      {/*il colore viene accettato come valore array*/}
    </div>
  );
}
