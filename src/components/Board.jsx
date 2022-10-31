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
      <div className="txts">
        {texts.map(({ id, text }) => (
          <div key={text}>
            <p>{text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
