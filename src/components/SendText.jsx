import styles from "src/styles/Home.module.css";
import { useState } from "react";
import { db } from "src/components/firebase";
import firebase from "firebase/compat/app";

const SendText = () => {
  const handleChange = (e) => {setText(e.target.value)}
  const [text, setText] = useState("");
  function sendText(e) {
    e.preventDefault();

    db.collection("texts").add({
      text: text,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setText("");
  };

  return (
    <div>
      <form onSubmit={sendText}>
        <div className="sendTxt">
          <input
            placeholder="テキストを投稿してください"
            type="text"
            onChange={handleChange}
            value={text}
          />
        </div>
      </form>
    </div>
  );
};

export default SendText;