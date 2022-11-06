import styles from "src/styles/Home.module.css";
import { useEffect, useState } from "react";
import { db } from "src/components/firebase";

export function Board() {
  const [texts, setText] = useState([]);
  useEffect(() => {
    db.collection("texts")
      .orderBy("createdAt")
      .limit(50)
      .onSnapshot((snapshot) => {
        setText(snapshot.docs.map((doc) => doc.data()));
      });
  }, []);

  return (
    <div>
      {console.log(texts)}
      <ol className="txts">
        {texts.map(({ index, name, text }) => (
          <li key={index}>
            <p className={styles.name_box}>{name}：</p>
            <p>{text}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
