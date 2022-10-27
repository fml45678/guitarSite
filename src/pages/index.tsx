import type { NextPage } from "next";
import Head from "next/head";
import NavBar from "../../components/navBar";
// import { trpc } from "../utils/trpc";
import styles from "./index.module.css";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>LeMieux Studios Guitar</title>
        <meta name="description" content="Learn guitar from home" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <div>
        <div className={styles.mainContent}>
          <h2>Ready to learn Guitar?</h2>
          <p>
            Registration is now open. Group Guitar classes begin November
            6th-8th!
          </p>
          <Link href="/signUp">
            <button className={styles.signUp}>Sign up today</button>
          </Link>
          <p>
            In one 12 week session you can go from not knowing how to play
            guitar to playing thousands!
          </p>

          <p>
            When you sign up for guitar lessons you get one group lesson and one
            review lesson each week. You will have access to a great community
            of fellow guitar students, and plenty of instruction and guidance to
            help you reach your goals.
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
