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
        <div>
          <img src="" alt="" />
        </div>
        <div className={styles.mainContent}>
          <h2>Ready to learn Guitar?</h2>
          <p>
            Registration is now open. Group Guitar classes begin November 6th!
          </p>
          <Link href="https://www.paypal.com/webapps/billing/plans/subscribe?plan_id=P-2VF03638W82253700MLSHVZI">
            <button className={styles.signUp}>Sign up today</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
