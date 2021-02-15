import Head from "next/head";
import * as ReactScroll from "react-scroll";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./layout.module.css";

export type LayoutProps = {
  children: React.ReactNode;
  home?: boolean;
};

export default function Layout({ children, home }: LayoutProps) {
  const [isPageTop, setIsPageTop] = useState(true);

  const handleScroll = () => setIsPageTop(window.scrollY === 0);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@200;400;500&display=swap"
          rel="stylesheet"
        />
        <meta
          name="description"
          content="Polyvalent web developer based in Geneva, Switzerland"
        />
      </Head>

      <nav
        className={
          styles.navigation + (isPageTop ? " " + styles.navigationPageTop : "")
        }
      >
        <img src="/logo.png" alt="Mathieu Tappolet" />

        {/* <li><ReactScroll.Link activeClass="active" className="test1" to="test1"  >Test 1</ReactScroll.Link></li> */}

        <ul>
          <li>
            {home ? (
              <ReactScroll.Link to="about" smooth={true} duration={300}>
                About
              </ReactScroll.Link>
            ) : (
              <Link href="/#about">
                <a>About</a>
              </Link>
            )}
          </li>
          <li>
            <Link href="/projects">
              <a>Projects</a>
            </Link>
          </li>
          <li>
            {home ? (
              <ReactScroll.Link to="contact" smooth={true} duration={300}>
                Contacts
              </ReactScroll.Link>
            ) : (
              <Link href="/#contact">
                <a>Contacts</a>
              </Link>
            )}
          </li>
        </ul>
      </nav>

      <main>{children}</main>

      <footer className={styles.footer}>
        {new Date().getFullYear()} &copy; Mathieu Tappolet
      </footer>
    </>
  );
}
