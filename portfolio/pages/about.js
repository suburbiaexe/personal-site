import Head from "next/head";
import styles from "../styles/Home.module.css";
import Footer from "./components/footer.js";
import BackArrow from "./components/back.js";
import Link from "next/link";

export default function AboutPage() {
    return (
        <div className={styles.mainAbout}>
            <Head>
                <title>About Elizabeth</title>
            </Head>
            <BackArrow />
            <div className={styles.aboutContainer}>
                <h1 style={{ marginTop: "0", marginBottom: "0.5em" }}>
                    About Me
                </h1>
                <div className={styles.aboutBody}>
                    <iframe
                        style={{
                            borderRadius: "12px",
                            float: "left",
                            paddingRight: "1em",
                        }}
                        src="https://open.spotify.com/embed/playlist/2ufEGUSEyiXeGImu7cNVrp?utm_source=generator&theme=0"
                        width="50%"
                        height="352"
                        frameBorder="0"
                        allowfullscreen=""
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        loading="lazy"
                    ></iframe>
                    <p style={{ marginTop: "0" }}>
                        Hey! My name is Elizabeth, and I&apos;m a Senior at
                        Brown University. I&apos;m originally from Seattle,
                        Washington, so I&apos;ve been surrounded by{" "}
                        <span className={styles.highlighter}>
                            art, tech, and music
                        </span>{" "}
                        for my entire life (on this page is one of my core
                        playlists — if you let me I will talk about it ad
                        infinitum)! My parents gave me unfettered access to the
                        internet at far too young of an age, so I spent a
                        significant portion of my adolescence scrolling away on
                        Tumblr. However, running my tweenage blog gave me early
                        exposure to{" "}
                        <span className={styles.highlighter}>
                            web development
                        </span>{" "}
                        with basic HTML/CSS, and I grew to love designing the
                        internet so much that I&apos;m now (somehow) three years
                        into earning a Computer Science degree.
                    </p>
                    <p>
                        This past summer, I worked as a{" "}
                        <span className={styles.highlighter}>
                            frontend engineering intern
                        </span>{" "}
                        at{" "}
                        <Link
                            href="https://mercury.com"
                            target="_blank"
                            className={styles.inlineLink}
                        >
                            Mercury
                        </Link>{" "}
                        on the Customer Experience team, and I&apos;m thrilled
                        to be returning as a full-time engineer after I
                        graduate! Previously, I was a Co-Director for
                        Hack@Brown, the club responsible for organizing
                        Brown&apos;s largest and oldest student-run hackathon.
                        I&apos;m primarily a frontend engineer, but I also have
                        experience with{" "}
                        <span className={styles.highlighter}>UI/UX</span> and{" "}
                        <span className={styles.highlighter}>
                            product design
                        </span>{" "}
                        work (and am a big fan of computer graphics). Most of my
                        time is spent thinking about aesthetics and
                        accessibility, as well as gathering inspiration from
                        posters and editorials!
                    </p>
                    <p>
                        When I&apos;m not working, I enjoy listening to music,
                        curating Spotify Playlists, and playing crossword
                        puzzles, the piano, and The Sims 4.
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    );
}
