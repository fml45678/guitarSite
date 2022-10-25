import type { NextPage } from "next";
import Head from "next/head";
import NavBar from "../../components/navBar";
// import { trpc } from "../utils/trpc";
import styles from "./forum.module.css";
// import Link from "next/link";

const Forum: NextPage = () => {
  return (
    <>
      <Head>
        <title>LeMieux Studios Guitar</title>
        <meta name="description" content="Forum" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <div className={styles.container}>
        <form className={styles.formContainer}>
          <span>Subject:</span>
          <input type="text" />
          Message:
          <textarea cols="30" rows="10"></textarea>
        </form>
      </div>
    </>
  );
};

export default Forum;
