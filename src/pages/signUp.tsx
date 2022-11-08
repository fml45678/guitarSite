import type { NextPage } from "next";
import Head from "next/head";
import NavBar from "../../components/navBar";
// import { trpc } from "../utils/trpc";
import styles from "./signUp.module.css";
import Link from "next/link";

const SignUp: NextPage = () => {
  return (
    <>
      <Head>
        <title>LeMieux Studios Guitar</title>
        <meta name="description" content="SignUp" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <div className={styles.container}>
        <h2>Choose your lesson day</h2>
        <h3>$60 a month + One time $20 registration fee</h3>
        <div className={styles.days}>
          <Link href="https://www.paypal.com/webapps/billing/plans/subscribe?plan_id=P-2VF03638W82253700MLSHVZI">
            <button>Sundays</button>
          </Link>
          <Link href="https://www.paypal.com/webapps/billing/plans/subscribe?plan_id=P-2VF03638W82253700MLSHVZI">
            <button>Mondays</button>
          </Link>
          <Link href="https://www.paypal.com/webapps/billing/plans/subscribe?plan_id=P-2VF03638W82253700MLSHVZI">
            <button>Tuesdays</button>
          </Link>
        </div>
        <h3>Thursdays are review days</h3>
      </div>
    </>
  );
};

export default SignUp;
