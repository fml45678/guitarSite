import type { NextPage } from "next";
import Head from "next/head";
import NavBar from "../../components/navBar";
// import { trpc } from "../utils/trpc";
import styles from "./contact.module.css";
// import Link from "next/link";

const Contact: NextPage = () => {
  return (
    <>
      <Head>
        <title>LeMieux Studios Guitar</title>
        <meta name="description" content="Contact" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <div className={styles.container}>
        <span className={styles.p}>
          If you have any questions about lessons please send an email to
          <a className={styles.link} href="mailto:info@massonlemieux.com">
            {" "}
            info@massonlemieux.com
          </a>
        </span>
      </div>
    </>
  );
};

export default Contact;
