import Link from 'next/link';
import styles from '../styles/Home.module.css'

export default function AboutPage() {
    return (
        <div className={styles.main}>
            <h1 id={styles.backArrow}>
                <Link href="/">&larr;</Link>
            </h1>
            <div className={styles.aboutContainer}>
                <h1>
                    About Me
                </h1>
                <p>
                    Hey! My name is [Redacted], and I'm a [redacted] at Brown University. I'm currently a Co-Director for [Redacted Club], the club responsible for [redacted]. I'm primarily a frontend web developer, but I also have experience with UI/UX and product design work (and am an avid fan of computer graphics). Most of my time is spent thinking about design and creating unique, but accessible websites, as well as gathering inspiration from posters and editorials!
                </p>
                <p>
                    When I'm not working, I enjoy hiking, playing the New York Times Crossword, curating Spotify Playlists, playing piano, and playing The Sims 4.
                </p>
            </div>
        </div>
    );
}