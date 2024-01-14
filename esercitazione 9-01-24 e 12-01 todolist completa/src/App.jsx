import React, { useState } from "react"; //importa la libreria react e la funzione UseState
import AddtodoItem from "./components/addItem/Additem.jsx";
import DeletetodoItem from "./components/deleteItem/Deleteitem.jsx";
import styles from "./App.module.scss";

function App() {
  //newItem contiene il valore dell'input e items la lista degli elementi
  const [items, setItems] = useState([]);

  //funzione per aggiungere un elemento:
  //viene creato un elemento con un numero casuale e il valore dell'input corrente
  function addItem(newItem) {
    const item = {
      id: Math.floor(Math.random() * 1000),
      value: newItem,
    };

    setItems((oldList) => [...oldList, item]); //l'oggetto viene aggiunto alla lista item utilizzando lo stato precendete
  }
  //funzione per cancellare l'elemento dalla lista:
  //filter viene usata per creare un nuovo array con gli elementi che sono diversi dall'id precedente
  //quindi viene mantenuta la lista degli oggetti con ID diverso da quello che si elimina

  function deleteItem(id) {
    const newArray = items.filter((item) => item.id !== id);
    setItems(newArray); //react re-renderizza il componente con la nuova lista, eliminando l'elemento desiderato
  }

  //interfaccia del componente formato da:
  //titolo, barra e bottone, lista
  return (
    <div className={styles.app_wrapper}>
      {/*si indica così la classe usando scss module*/}
      {/*1. Header*/}
      <h1 className={styles.main_title}>To do List </h1>
      <AddtodoItem onAddItem={addItem} />
      {/*componente con la barra di digitazione*/}
      <DeletetodoItem items={items} onDeleteItem={deleteItem} />
      {/*componente per cancellare gli elementi dalla lista*/}
    </div>
  );
}

export default App;
