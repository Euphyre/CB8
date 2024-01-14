import React, { useState } from "react";
import styles from "./Additem.module.scss";

//newItem contiene il valore dell'input e items la lista degli elementi

function AddtodoItem({ onAddItem }) {
  const [newItem, setNewItem] = useState("");

  // funzione per gestire l'evento "Enter", se viene premuto invio senza aver scritto niente compare il messaggio
  function handleKeyDown(event) {
    if (event.key === "Enter") {
      if (!newItem) {
        alert("Write Something, please ʕノ•ᴥ•ʔノ ︵ ┻━┻");
        return;
      }

      onAddItem(newItem);
      //viene resettato il valore dell'input che diventa vuoto una volta aggiunto l'elemento
      setNewItem("");
    }
  }

  //funzione per gestire l'aggiunta dell'elemento con il bottone in maniera corretta
  const handleClickAdd = (newItem) => {
    if (!newItem) {
      alert("Write Something, please ʕノ•ᴥ•ʔノ ︵ ┻━┻");
      return;
    }
  };

  return (
    <div className={styles.addItem_wrapper}>
      <div className={styles.input_wrapper}>
        <input
          className={styles.input_bar}
          type="text"
          placeholder="Add something to the list"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)} //si verifica quando l'utente modifica il testo nell'input: ogni volta che l'utente scrive viene memorizzato quello che scrive nello stato NewItem
          onKeyDown={
            handleKeyDown
          } /*quando premo invio viene aggiunto l'oggetto scritto nell'input*/
        />
        <button
          className={styles.button_add}
          onClick={() => handleClickAdd(newItem)}
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default AddtodoItem;
