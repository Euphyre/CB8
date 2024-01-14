import styles from "./deleteitem.module.scss";

function DeletetodoItem({ items, onDeleteItem }) {
  return (
    <ul className={styles.list}>
      {items.map((item) => (
        <li key={item.id}>
          {item.value}{" "}
          <button
            className={styles.button_X}
            onClick={() => onDeleteItem(item.id)}
          >
            ❌
          </button>
        </li>
      ))}
    </ul>
  );
}

export default DeletetodoItem;
