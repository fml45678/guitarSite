import type { NextPage } from "next";
import Head from "next/head";
import NavBar from "../../components/navBar";
// import { trpc } from "../utils/trpc";
// import styles from "./index.module.css";
// import Link from "next/link";

const SignUp: NextPage = () => {
  return (
    <>
      <Head>
        <title>LeMieux Studios Guitar</title>
        <meta name="description" content="SignUp" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <div>SignUp</div>
    </>
  );
};

export default SignUp;
