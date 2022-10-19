import type { NextPage } from "next";
import Head from "next/head";
import NavBar from "../../components/navBar";
// import { trpc } from "../utils/trpc";
// import styles from "./index.module.css";

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
        <div>
          <h2>Ready to learn Guitar?</h2>
          <p>
            Registration is now open. Group Guitar classes begin November 6th!
          </p>
        </div>
        <span>Sign up today</span>
      </div>
    </>
  );
};

export default Home;
