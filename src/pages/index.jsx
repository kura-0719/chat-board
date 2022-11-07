import Head from "next/head";
import styles from "src/styles/Home.module.css";
import Link from "next/link";

const Threads = [
  {
    href: "/thread",
    title: "テスト",
    description: "テスト用掲示板",
  },
  {
    href: "/club",
    title: "おしゃべり",
    description: "なんでもはなして",
  },
];

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Chat Board</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>掲示板</h1>
        <div className={styles.content}>
          {Threads.map((Threads) => {
            return (
              <div key={Threads.href} className={styles.cardWrap}>
                <Link href={Threads.href} className={styles.cardContent}>
                  <p className={styles.cardTitle}>{Threads.title}</p>
                  <p className={styles.cardTxt}>{Threads.description}</p>
                </Link>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}
