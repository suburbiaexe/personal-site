import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Footer from "./components/footer.js";
import ProjectLink from "./components/projectLink";

export default function Home() {
    return (
        <div>
            <Head>
                <title>Elizabeth Wu</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/music-player-fill.svg" />
            </Head>

            <main className={styles.mainHome}>
                <div className={styles.projectContainer}>
                    <ProjectLink
                        lnk="https://personas-gamma.vercel.app/"
                        title="Personas"
                        descrip="An Exercise in UX Research"
                    />
                    <ProjectLink
                        lnk="https://found-at-brown.vercel.app/"
                        title="Found@Brown"
                        descrip="Front-End Web Development with Typescript and React"
                    />
                    <ProjectLink
                        lnk="https://banalbat666.github.io/iterative/"
                        title="Slingshot"
                        descrip="Iterative Startup Product Design"
                    />
                    <ProjectLink
                        lnk="https://image-filter-livid.vercel.app/"
                        title="Image Filtering"
                        descrip="Info Visualization with Illustrator and React"
                    />
                </div>
                <div className={styles.introContainer}>
                    <div className={styles.intro}>
                        <h1 id={styles.title}>
                            Hi, I&apos;m <Link href="/about">Elizabeth</Link>!
                        </h1>
                        <p id={styles.description}>
                            I&apos;m a front-end engineer and an avid visual
                            design fan. You can explore some of my projects
                            listed on the cards, or find them all{" "}
                            <Link href="/projectPage">here</Link>.
                        </p>
                        <ul id={styles.bullets}>
                            <li>
                                <a
                                    href="https://www.linkedin.com/in/elizabeth-c-wu/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <Image
                                        src="/images/linkedin.svg"
                                        width={25}
                                        height={23}
                                        alt="Linkedin icon"
                                        style={{ paddingRight: "0.2em" }}
                                    />
                                    Linkedin
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://github.com/suburbiaexe"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <Image
                                        src="/images/github.svg"
                                        width={25}
                                        height={23}
                                        alt="Github icon"
                                        style={{ paddingRight: "0.2em" }}
                                    />
                                    Github
                                </a>
                            </li>
                            <li>
                                <a href="/images/resume.pdf" target="_blank">
                                    <Image
                                        src="/images/file-earmark-text-fill.svg"
                                        width={25}
                                        height={23}
                                        alt="File icon"
                                        style={{ paddingRight: "0.2em" }}
                                    />
                                    Resume
                                </a>
                            </li>
                            <li>
                                <a href="mailto:elizabeth_c_wu@brown.edu">
                                    <Image
                                        src="/images/envelope-paper-heart-fill.svg"
                                        width={25}
                                        height={23}
                                        alt="Envelope icon"
                                        style={{ paddingRight: "0.2em" }}
                                    />
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <Image
                            src="/images/me.png"
                            height={400}
                            width={340}
                            alt="Illustration of Moi <3"
                        />
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
