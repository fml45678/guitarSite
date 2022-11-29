import type { NextPage } from "next";
import Head from "next/head";
// import { trpc } from "../utils/trpc";
import styles from "./links.module.css";
// import Link from "next/link";

const Links: NextPage = () => {
  return (
    <div className={styles.containerContainer}>
      <Head>
        <title>All of our stuff</title>
        <meta name="description" content="Links" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.container}>
        <h2 className={styles.headers}>Places to buy things!</h2>
        <div className={styles.groupContainer}>
          <a href="https://etsy.com/shop/treelyland">
            <div className={styles.itemContainer}>
              <img className={styles.logo} src="treelyLandLogo.jpg" alt="" />
              <span className={styles.title}>Treely Land</span>
            </div>
          </a>
          <a href="https://etsy.com/shop/spongeprintstudio">
            <div className={styles.itemContainer}>
              <img className={styles.logo} src="spongePrintLogo.jpg" alt="" />
              <span className={styles.title}>Sponge Print Studio</span>
            </div>
          </a>
          <a href="https://etsy.com/shop/lemieuxstudios">
            <div className={styles.itemContainer}>
              <img className={styles.logo} src="tShirts.jpg" alt="" />
              <span className={styles.title}>T-Shirts</span>
            </div>
          </a>
          <a href="https://etsy.com/shop/usemidi">
            <div className={styles.itemContainer}>
              <img className={styles.logo} src="midi.jpg" alt="" />
              <span className={styles.title}>Midi Instruments</span>
            </div>
          </a>
          <a href="https://lemieuxstudios.com">
            <div className={styles.itemContainer}>
              <img className={styles.logo} src="guitarLessons.jpg" alt="" />
              <span className={styles.title}>Guitar Lessons</span>
            </div>
          </a>
          <a href="https://massonlemieux.com/podcast">
            <div className={styles.itemContainer}>
              <img className={styles.logo} src="podcast.jpg" alt="" />
              <span className={styles.title}>Podcast Sponsor</span>
            </div>
          </a>
        </div>
        <h2 className={styles.headers}>Donation Links!!</h2>
        <div className={styles.groupContainerDonate}>
          <a href="https://www.paypal.com/donate/?hosted_button_id=8JGJVSZ9ZCYRY">
            <div>
              {/* <span className={styles.title}>PayPal</span> */}
              <img className={styles.logo} src="paypal.png" alt="" />
            </div>
          </a>
          <a href="https://venmo.com/u/MassonLeMieux">
            <div>
              {/* <span className={styles.title}>Venmo</span> */}
              <img className={styles.logo} src="venmo.png" alt="" />
            </div>
          </a>
        </div>
        <h2 className={styles.headers}>Things to Entertain You!!!</h2>
        <div className={styles.groupContainer}>
          <a href="https://www.youtube.com/@lemieuxstudios6476">
            <div className={styles.itemContainer}>
              <img className={styles.logo} src="youtubeLogo.png" alt="" />
              <span className={styles.title}>LeMieux Studios Youtube</span>
            </div>
          </a>
          <a href="https://www.youtube.com/@lifemattersamplingstation4844">
            <div className={styles.itemContainer}>
              <img className={styles.logo} src="youtubeLogo.png" alt="" />
              <span className={styles.title}>
                Life Matter Sampling Station Youtube
              </span>
            </div>
          </a>
          <a href="https://www.youtube.com/channel/UC_Vy5Ay28Op5LbMVINnsR8Q">
            <div className={styles.itemContainer}>
              <img className={styles.logo} src="youtubeLogo.png" alt="" />
              <span className={styles.title}>Masson LeMieux Youtube</span>
            </div>
          </a>
          <a href="https://massonlemieux.com/podcast">
            <div className={styles.itemContainer}>
              <img className={styles.logo} src="podcast.jpg" alt="" />
              <span className={styles.title}>
                The Masson LeMieux Show: <br /> Sports Talk Podcast
              </span>
            </div>
          </a>
          <a href="https://www.instagram.com/fml45678/">
            <div className={styles.itemContainer}>
              <img className={styles.logo} src="InstagramLogo.png" alt="" />
              <span className={styles.title}>Masson's Instagram</span>
            </div>
          </a>
          <a href="https://www.instagram.com/yiswork/">
            <div className={styles.itemContainer}>
              <img className={styles.logo} src="InstagramLogo.png" alt="" />
              <span className={styles.title}>Yiseul's Instagram</span>
            </div>
          </a>
          <a href="https://www.tiktok.com/@massonlemieux">
            <div className={styles.itemContainer}>
              <img className={styles.logo} src="TikTokLogo.png" alt="" />
              <span className={styles.title}>Masson's Tiktok</span>
            </div>
          </a>
          <a href="https://www.tiktok.com/@spongeprintstudio">
            <div className={styles.itemContainer}>
              <img className={styles.logo} src="TikTokLogo.png" alt="" />
              <span className={styles.title}>Yiseul's Tiktok</span>
            </div>
          </a>
          <a href="https://music.apple.com/us/album/summer-to-spring/1552966853">
            <div className={styles.itemContainer}>
              <img className={styles.logo} src="summer.jpg.webp" alt="" />
              <span className={styles.title}>Summer to Spring Album</span>
            </div>
          </a>
          <a href="https://massonlemieux.com">
            <div className={styles.itemContainer}>
              <img className={styles.logo} src="" alt="" />
              <span className={styles.title}>Masson's Website</span>
            </div>
          </a>
          <a href="https://yiseullemieux.com">
            <div className={styles.itemContainer}>
              <img className={styles.logo} src="" alt="" />
              <span className={styles.title}>Yiseul's Website</span>
            </div>
          </a>
        </div>
        <h2 className={styles.headers}>Upcoming Stuff!!!!</h2>
        <div className={styles.upcoming}>
          <div>
            <span className={styles.title}>Puppet Shows</span>
            <img src="" alt="" />
          </div>
          <div>
            <span className={styles.title}>New Music</span>
            <img src="" alt="" />
          </div>
          <div>
            <span className={styles.title}>Coffee Company</span>
            <img src="" alt="" />
          </div>
          <div>
            <span className={styles.title}>New Films</span>
            <img src="" alt="" />
          </div>
          <div>
            <span className={styles.title}>Making New Musical Instruments</span>
            <img src="" alt="" />
          </div>
          <div>
            <span className={styles.title}>
              A new(consumer(not seller)centric) Amazon
            </span>
            <img src="" alt="" />
          </div>
          <div>
            <span className={styles.title}>Making Clothing</span>
            <img src="" alt="" />
          </div>
          <div>
            <span className={styles.title}>Immersive Exhibitions</span>
            <img src="" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Links;
