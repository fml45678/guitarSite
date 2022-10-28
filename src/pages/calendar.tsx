import type { NextPage } from "next";
import Head from "next/head";
import NavBar from "../../components/navBar";
// import { trpc } from "../utils/trpc";
// import styles from "./index.module.css";
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
      <div>
        <ul>
          <li>Class 1: Sun Nov 20 - 22 Rev Nov, Fri 25</li>
          <li>Class 2: Sun Nov 26 - 29 Rev Dec 1</li>
          <li>Class 3: Sun Dec 4 - 6 Rev Dec 8</li>
          <li>Class 4: Sun Dec 11 - 13 Rev Dec 15</li>
          <li>Class 5: Sun Dec 18- 20 Rev Dec 22</li>
          <li>Class 6: Sun Dec 25 - 27 (Add Extra Day) Rev Dec 29</li>
          <li>Class 7: Sun Jan 1 - 4 (Add Extra Day) Rev Dec 5</li>
          <li>Class 8: Sun Jan 8 - 10 Rev Dec 12</li>
          <li>Class 9: Sun Jan 15 - 17 Rev Dec 19</li>
          <li>Class 10: Sun Jan 22 - 24 Rev Jan 26</li>
          <li>Class 11: Sun Jan 29 - 31 Rev Feb 2</li>
          <li>Class 12: Sun Feb 5 - 7 Rev Feb 9</li>
          <li>Optional Performance Sat Feb 11</li>
        </ul>
      </div>
    </>
  );
};

export default Calendar;
