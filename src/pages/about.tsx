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

        <span className={styles.rulesTitle}>Group Guitar Lessons Rules</span>

        <ul className={styles.rules}>
          <li>Classes are 1 hour</li>
          <li>
            You should bring your guitar and instructional material to each
            class
          </li>
          <li>
            You are expected to practice the lesson material between classes to
            keep up with the group, adequate help will be available between
            classes for all registered students.
          </li>
          <li>
            If you miss a lesson or cannot make your lesson time, you can come
            to another lesson during the same week if available. Lesson material
            will also be made available online to registered students
          </li>
          <li>
            Payments will be drafted monthly and must be paid before attending a
            lesson
          </li>
          <li>Refunds are not permitted</li>
          <li>
            You may cancel lessons at any time and will not be charged for the
            remaining months
          </li>
        </ul>

        <span className={styles.rulesTitle}>
          What Students need for lessons
        </span>

        <ul className={styles.rules}>
          <li>
            Guitar (preferably acoustic or classical but electric is fine)
          </li>
          <li>Pick</li>
          <li>Strap or footstool</li>
          <li>Instructional book</li>
          <li>Pencil</li>
          <li>Tuner (optional)</li>
          <li>Capo (optional)</li>
        </ul>
      </div>
    </>
  );
};

export default About;
