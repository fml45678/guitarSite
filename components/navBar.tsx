import type { NextPage } from "next";
import styles from "./navBar.module.css";
const NavBar: NextPage = () => {
  return (
    <>
      <div className={styles.container}>
        <div>
          <img src="" alt="" />
          <h1>MASTREE Guitar</h1>
        </div>
        <ul className={styles.lists}>
          <li>About</li>
          <li>Membership</li>
          <li>Calendar</li>
          <li>Online Lessons</li>
          <li>Forum</li>
          <li>Contact</li>
        </ul>
        <ul className={styles.lists}>
          <li>Login</li>
          <li>Join</li>
        </ul>
      </div>
    </>
  );
};

export default NavBar;
