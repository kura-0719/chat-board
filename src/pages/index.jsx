import Head from "next/head";
import styles from "src/styles/Home.module.css";
import { Board } from "src/components/Board";
import SendText from "src/components/SendText";
import Tread from "src/components/SendText";
import { useState } from "react";
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
                  <p className={styles.card_title}>{Threads.title}</p>
                  <p className={styles.card_txt}>{Threads.description}</p>
                </Link>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}
