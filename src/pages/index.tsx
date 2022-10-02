import type { NextPage } from "next";
import Head from "next/head";
import { trpc } from "../utils/trpc";
import styles from "./index.module.css";

const Home: NextPage = () => {
  // const { data } = trpc.useQuery(["example.hello", { text: "from tRPC" }]);

  return (
    <>
      <Head>
        <title>MASTREE Guitar</title>
        <meta name="description" content="Learn guitar from home" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.containerOuter}>


        {/* <div className={styles.helloFrom}>
            {data ? <p>{data.greeting}</p> : <p>Loading...</p>}
          </div> */}
      </div>
    </>
  );
};

export default Home;