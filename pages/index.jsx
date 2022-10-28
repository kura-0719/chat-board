import Head from "next/head";
import Image from "next/image";
import { useCallback, useState } from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [text, setText] = useState("");
  const [array, setArray] = useState([]);

  const handleChange = useCallback((e) => {
    setText(e.target.value);
  }, []);

  const handleAdd = useCallback(() => {
    setArray((prevArray) => {
      return [...prevArray, text];
    });
  }, [text]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Chat Board</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>掲示板</h1>

        <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>pages/index.js</code>
        </p>
        <ul>
          {array.map(item => {
            return (
              <li key={item}>{item}</li>
            )
          })}
        </ul>
        <input type="text" value={text} onChange={handleChange} />
        <button type="button" onClick={handleAdd}>
          送信
        </button>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
