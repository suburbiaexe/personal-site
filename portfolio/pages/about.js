import Head from "next/head";
import styles from "../styles/Home.module.css";
import Footer from "./components/footer.js";
import BackArrow from "./components/back.js";

export default function AboutPage() {
    return (
        <div className={styles.mainAbout}>
            <Head>
                <title>About [Redacted]</title>
            </Head>
            <BackArrow />
            <div className={styles.aboutContainer}>
                <h1 style={{ marginTop: "0" }}>About Me</h1>
                <p>
                    Hey! My name is [Redacted], and I'm a [redacted] at Brown
                    University. I'm originally from Seattle, Washington, so I
                    spent my entire adolescence trying to avoid tech like the
                    plague in an effort to be a contrarian. I opted instead to
                    invest in art, music, and history, which helped me develop
                    interests in design and social good. At some point down the
                    line, though, I stopped pushing the idea of computer science
                    away when I realized how <i>fun</i> it was and could be to
                    combine my other interests with tech. I became specifically
                    interested in web development and the endless capability of
                    the internet, and now I'm somehow [redacted] years into
                    earning a Computer Science degree.
                </p>
                <p>
                    I'm currently a Co-Director for [Redacted], the club
                    responsible for [redacted]. I'm primarily a frontend web
                    developer, but I also have experience with UI/UX and product
                    design work (and am an avid fan of computer graphics). Most
                    of my time is spent thinking about aesthetics and
                    accessibility, as well as gathering inspiration from posters
                    and editorials!
                </p>
                <p>
                    When I'm not working, I enjoy hiking, playing the New York
                    Times Crossword, curating Spotify Playlists, playing piano,
                    and playing The Sims 4.
                </p>
            </div>
            <Footer />
        </div>
    );
}
