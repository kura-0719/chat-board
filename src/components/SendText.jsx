import styles from "src/styles/Home.module.css";
import { useCallback, useState } from "react";
import { db } from "src/components/firebase";
import firebase from "firebase/compat/app";

const SendText = () => {
  const handleNameChange = useCallback((e) => {
    if (e.target.value.length < 1) {
      alert("テキストを入れてください");
      return;
    }
    setName(e.target.value.trim());
  }, []);
  const handleTextChange = useCallback((e) => {
    if (e.target.value === "") {
      alert("テキストを入れてください");
      return;
    }
    setText(e.target.value.trim());
  }, []);
  const [inputName, setName] = useState("");
  const [inputText, setText] = useState("");
  function sendText(e) {
    e.preventDefault();

    db.collection("texts").add({
      name: inputName,
      text: inputText,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setName("");
    setText("");
  }

  // const [nameError, setNameError] = useState([]);
  // const [textError, setTextError] = useState([]);
  // const formVailed = () => {
  //   if (inputName.length === 0 && inputText.length !== 0) {
  //     setNameError({
  //       errorMessage: "※未入力エラーです。",
  //     });
  //     setTextError([]);
  //   } else if (inputName.length !== 0 && inputText.length === 0) {
  //     setTextError({
  //       errorMessage: "※未入力エラーです。",
  //     });
  //     setNameError([]);
  //   } else if (inputName.length === 0 && inputText.length === 0) {
  //     setNameError({
  //       errorMessage: "※未入力エラーです。",
  //     });
  //     setTextError({
  //       errorMessage: "※未入力エラーです。",
  //     });
  //     return false;
  //   } else if (inputName.length !== 0 && inputText.length !== 0) {
  //     setNameError([]);
  //     setTextError([]);
  //     return true; //フォームに文字が両方とも入ってるときだけtrueを返す
  //   }
  //   return false;
  // };

  return (
    <div className={styles.form_container}>
      <form onSubmit={sendText}>
        <div className={styles.send_text}>
          <input
            className={styles.input_name}
            placeholder="名前"
            type="name"
            onChange={handleNameChange}
            value={inputName}
          />
          {/* {nameError && <span id="errorMessage">{nameError.errorMessage}</span>} */}
          <input
            className={styles.input_text}
            placeholder="コメントする"
            type="text"
            onChange={handleTextChange}
            value={inputText}
          />
          {/* {textError && <span id="errorMessage">{textError.errorMessage}</span>} */}
          <button>投稿</button>
        </div>
      </form>
    </div>
  );
};

export default SendText;
