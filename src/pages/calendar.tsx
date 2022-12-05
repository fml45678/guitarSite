import type { NextPage } from "next";
import Head from "next/head";
import NavBar from "../../components/navBar";
// import { trpc } from "../utils/trpc";
import styles from "./calendar.module.css";
// import Link from "next/link";

const Calendar: NextPage = () => {
  return (
    <>
      <Head>
        <title>LeMieux Studios Guitar</title>
        <meta name="description" content="Calendar" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <div className={styles.mainContainer}>
        <p className={styles.description}>
          Each student will pick Sundays, Mondays, or Tuesdays for their main
          lesson, and Thursdays will be a group review day. Extra days have been
          added during some holidays.
        </p>
        <h4>Class Times:</h4>
        <div>
          <span>Mondays, Tuesdays, & Thursdays - 6:30 CT / 7:30 ET</span>
          <br />
          <span>Sundays - 2:00 CT / 3:00 ET</span>
        </div>
        <ul className={styles.calendar}>
          <li>Class 1: Sun Dec 18- 20 Rev Dec 22</li>
          <li>Class 2: Sun Dec 25 - 27 (Add Extra Day) Rev Dec 29</li>
          <li>Class 3: Sun Jan 1 - 4 (Add Extra Day) Rev Dec 5</li>
          <li>Class 4: Sun Jan 8 - 10 Rev Dec 12</li>
          <li>Class 5: Sun Jan 15 - 17 Rev Dec 19</li>
          <li>Class 6: Sun Jan 22 - 24 Rev Jan 26</li>
          <li>Class 7: Sun Jan 29 - 31 Rev Feb 2</li>
          <li>Class 8: Sun Feb 5 - 7 Rev Feb 9</li>
          <li>Class 9: Sun Feb 12-14 Rev Feb 16</li>
          <li>Class 10: Sun Feb 19 - 21 Rev Feb 23</li>
          <li>Class 11: Sun Feb 26 - 28 Rev Mar 2</li>
          <li>Class 12: Sun Mar 5 - 7 Rev Mar 9</li>
          <li>Optional Performance Sat Mar 11</li>
        </ul>
      </div>
    </>
  );
};

export default Calendar;
