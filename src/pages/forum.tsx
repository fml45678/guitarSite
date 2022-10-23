import type { NextPage } from "next";
import Head from "next/head";
import NavBar from "../../components/navBar";
// import { trpc } from "../utils/trpc";
// import styles from "./index.module.css";
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
      <div>Forum</div>
    </>
  );
};

export default Forum;
