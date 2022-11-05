import Head from "next/head";
import styles from "src/styles/Home.module.css";
import Link from "next/link";

const Threads = [
  {
    href: "/",
    title: "目次",
    description: "aa",
  },
  {
    href: "/thread",
    title: "掲示板1",
    description: "ii",
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
              <div className={styles.card_wrap}>
                <Link
                  key={Threads.href}
                  href={Threads.href}
                  className={styles.card_content}
                >
                  <p key={Threads.title} className={styles.card_title}>{Threads.title}</p>
                  <p key={Threads.description} className={styles.card_txt}>{Threads.description}</p>
                </Link>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}
