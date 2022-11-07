import Head from "next/head";
import styles from "src/styles/Home.module.css";
// import { Board } from "src/components/Board";
import SendText from "src/components/SendText";
import firebase from "firebase/compat/app";

import { useCallback, useEffect, useState } from "react";
import { db } from "src/components/firebase";

export default function Home() {
  const [hobby, setHobby] = useState([]);
  useEffect(() => {
    db.collection("hobby")
      .orderBy("createdAt")
      .limit(50)
      .onSnapshot((snapshot) => {
        setHobby(snapshot.docs.map((doc) => doc.data()));
      });
  }, []);

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
    setHobby(e.target.value.trim());
  }, []);
  const [inputName, setName] = useState("");
  const [inputText, setText] = useState("");
  function sendText(e) {
    e.preventDefault();

    db.collection("hobby").add({
      name: inputName,
      text: inputText,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setName("");
    setText("");
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Chat Board</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>掲示板</h1>
        <div className={styles.threadWrap}>
          <div>
            {console.log(hobby)}
            <ol className="txts">
              {hobby.map(({ index, name, text }) => (
                <li key={index}>
                  <p className={styles.nameBox}>{name}：</p>
                  <p>{text}</p>
                </li>
              ))}
            </ol>
          </div>

          <div className={styles.formContainer}>
            <form onSubmit={sendText}>
              <div className={styles.sendText}>
                <input
                  className={styles.inputName}
                  placeholder="名前"
                  type="name"
                  onChange={handleNameChange}
                  value={inputName}
                />
                <input
                  className={styles.inputText}
                  placeholder="コメントする"
                  type="text"
                  onChange={handleTextChange}
                  value={inputText}
                />
                <button>投稿</button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
