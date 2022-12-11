import Head from "next/head";
import BackArrow from "../components/back.js";
import Tag from "../components/tag.js";
import Project from "../components/projectBox.js";
import styles from "../../styles/Projects.module.css";

export default function Personas() {
    return (
        <div className={styles.pageContainer}>
            <Head>
                <title>Project: Responsive Redesign</title>
            </Head>
            <BackArrow />
            <header className={styles.headerContainer}>
                <h1 className={styles.title}>
                    Hawes Fine Foods Responsive Redesign
                </h1>
                <div className={styles.tagContainer}>
                    <Tag label="HTML/CSS" />
                    <Tag label="Accessibility" />
                    <Tag label="Prototyping in Figma" />
                </div>
            </header>

            <div className={styles.contentContainer}>
                <Project
                    link="https://banalbat666.github.io/responsive-redesign-handin/"
                    name="Responsive Redesign"
                    pic="/images/redesign.png"
                    width={396}
                    height={300}
                    altText="Mockup of the Hawes Fine Foods home page."
                    mb={true}
                />
                <div className={styles.textContainer}>
                    <p className={styles.text}>
                        Responsive Redesign was a challenge to redesign the
                        Hawes Fine Foods site according to design and
                        accessibility principles from scratch, using just
                        HTML/CSS. This project consisted of creating both lo-fi
                        and hi-fi prototypes as well as the redesigned site
                        itself.
                    </p>
                    <p className={styles.text}>
                        Outside of being good HTML/CSS practice, this project
                        challenged me to think critically about the entire web
                        design process, as well as how aesthetic details can
                        influence usability.
                    </p>
                </div>
            </div>
        </div>
    );
}
