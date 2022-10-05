import type { NextPage } from "next";
import Head from "next/head";
import NavBar from "../../components/NavBar";
// import { trpc } from "../utils/trpc";
// import styles from "./index.module.css";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>MASSTREE Guitar</title>
        <meta name="description" content="Learn guitar from home" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <div>
        <div>
          <img src="" alt="" />
        </div>
        <div>
          <h2>Heading for P</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            minus totam quae maiores, sunt aperiam id laboriosam eum? Vel
            ratione iusto quos rerum commodi ut dolorum, recusandae impedit
            dolor optio?
          </p>
        </div>
        <span>Start your journey today</span>
      </div>
    </>
  );
};

export default Home;
