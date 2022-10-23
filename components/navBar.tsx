import type { NextPage } from "next";
import styles from "./navBar.module.css";
import Link from "next/link";

const NavBar: NextPage = () => {
  return (
    <>
      <div className={styles.container}>
        <div>
          <Link href="/">
            <h1 className={styles.title}>LEMIEUX STUDIOS GUITAR</h1>
          </Link>
        </div>
        <ul className={styles.lists}>
          <Link href="/about">
            <li>About</li>
          </Link>
          <Link href="/calendar">
            <li>Calendar</li>
          </Link>
          <Link href="/forum">
            <li>Forum</li>
          </Link>
          <Link href="/contact">
            <li>Contact</li>
          </Link>
        </ul>
        <ul className={styles.lists}>
          <Link href="/api/auth/signin">
            <li>Login</li>
          </Link>
          <Link href="/signUp">
            <li>Join</li>
          </Link>
        </ul>
      </div>
    </>
  );
};

export default NavBar;
