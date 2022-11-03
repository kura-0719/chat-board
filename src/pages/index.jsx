import Head from "next/head";
import styles from "src/styles/Home.module.css";
import { Board } from "src/components/Board";
import SendText from "src/components/SendText";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Chat Board</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>掲示板</h1>
        <div className={styles.content}>
          <Board />

          <SendText />
        </div>
      </main>
    </div>
  );
}
