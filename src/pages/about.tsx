import type { NextPage } from "next";
import Head from "next/head";
import NavBar from "../../components/navBar";
import styles from "./about.module.css";
// import { trpc } from "../utils/trpc";
// import Link from "next/link";

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>LeMieux Studios Guitar</title>
        <meta name="description" content="About" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <div className={styles.container}>
        <p className={styles.p}>
          Group guitar lessons are starting this fall. If you are an absolute
          beginner or intermediate guitarist, we have a class for you. Lessons
          take place weekly for 12 weeks, and by the time you finish you should
          be proficient in playing many songs. We will learn all of the most
          popular chords while also learning how to read music and music theory.
          Learning guitar in a group environment is an enjoyable and motivating
          experience.
        </p>
      </div>
    </>
  );
};

export default About;
