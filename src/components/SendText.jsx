import styles from "src/styles/Home.module.css";
import { useCallback, useState } from "react";
import { db } from "src/components/firebase";
import firebase from "firebase/compat/app";

const SendText = () => {
  const handleNameChange = useCallback((e) => {
    // if (e.target.value.length < 1) {
    //   alert("5文字以内にしてください");
    //   return;
    // }
    setName(e.target.value.trim());
  }, []);
  const handleTextChange = useCallback((e) => {
    // if (e.target.value === "") {
    //   alert("テキストを入れてください");
    //   return;
    // }
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
  // const [textError, setTextAreaError] = useState([]);
  // const formVailed = () => {
  //   if (inputName.length === 0 && inputText.length !== 0) {
  //     setNameError({
  //       errorMessage: "※未入力エラーです。",
  //     });
  //     setTextAreaError([]);
  //   } else if (inputName.length !== 0 && inputText.length === 0) {
  //     setTextAreaError({
  //       errorMessage: "※未入力エラーです。",
  //     });
  //     setNameError([]);
  //   } else if (inputName.length === 0 && inputText.length === 0) {
  //     setNameError({
  //       errorMessage: "※未入力エラーです。",
  //     });
  //     setTextAreaError({
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
          <input
            className={styles.input_text}
            placeholder="コメントする"
            type="text"
            onChange={handleTextChange}
            value={inputText}
          />
          <button>投稿</button>
        </div>
      </form>
    </div>
  );
};

export default SendText;
