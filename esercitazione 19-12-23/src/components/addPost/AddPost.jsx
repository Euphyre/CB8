import { useState } from "react";
import "./index.css";

// Functional component !== class component (OOP)
// Controlled Components => Necessari quando create una form
const AddPost = ({ setPostListData }) => {
  const [inputValue, setInputValue] = useState("");
  const [textareaValue, setTextareaValue] = useState("");

  const onHandleSubmit = (event) => {
    event.preventDefault();

    setPostListData((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        title: inputValue,
        body: textareaValue,
        userId: 99,
        tags: ["coding", "bootcamp"],
        reactions: 999,
      },
    ]);

    onHandleClear();
  };

  const onHandleInputValue = (event) => {
    setInputValue(event.target.value);
  };

  const onHandleTextareaValue = (event) => {
    setTextareaValue(event.target.value);
  };

  const onHandleClear = () => {
    setInputValue("");
    setTextareaValue("");
  };

  return (
    <div className="main">
      <div className="header">
        <div className="mainLogo"></div>
        <h1 className="mainTitle">Anime Blog</h1>
        <div className="buttonWrapper">
          <div className="buttonLogin">
            <a href="/">Log in</a>
          </div>
          <div className="buttonLogout">
            <a href="/">Log out</a>
          </div>
        </div>
      </div>

      <form className="AddPost" onSubmit={onHandleSubmit}>
        <input
          type="text"
          placeholder="Inserisci titolo del post"
          value={inputValue}
          onChange={onHandleInputValue}
        />
        <textarea
          rows="6"
          placeholder="Scrivi la tua recensione nerd su anime e videogiochi!"
          value={textareaValue}
          onChange={onHandleTextareaValue}
        ></textarea>
        <div className="AddPost__btns">
          <input type="submit" value="Aggiungi post" />
          <button onClick={onHandleClear}>Cancella bozza</button>
        </div>
      </form>
    </div>
  );
};

export default AddPost;
