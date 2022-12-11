import Head from "next/head";
import BackArrow from "../components/back.js";
import Tag from "../components/tag.js";
import Project from "../components/projectBox.js";
import styles from "../../styles/Projects.module.css";

export default function Personas() {
    return (
        <div className={styles.pageContainer}>
            <Head>
                <title>Project: Personas</title>
            </Head>
            <BackArrow />
            <header className={styles.headerContainer}>
                <h1 className={styles.title}>Personas</h1>
                <div className={styles.tagContainer}>
                    <Tag label="UX Research" />
                    <Tag label="Empathy Maps" />
                    <Tag label="User Interviews" />
                </div>
            </header>

            <div className={styles.contentContainer}>
                <Project
                    link="https://personas-gamma.vercel.app/"
                    name="Personas"
                    pic="/images/personas.png"
                    width={350}
                    height={350}
                    altText="Image of an empathy map from the project."
                    mb={false}
                />
                <div className={styles.textContainer}>
                    <p className={styles.text}>
                        Personas was a small UX research project in which I
                        observed and interviewed three Brown University students
                        using one of our library printers in an effort to better
                        understand the pros and cons of its design.
                    </p>
                    <p className={styles.text}>
                        Overall, this project served as a great exercise to
                        better understand users and their thought process when
                        interacting with technical interfaces. The experience of
                        interviewing and empathizing with users has allowed me
                        to become a more thoughtful, scrutinizing designer.
                    </p>
                </div>
            </div>
        </div>
    );
}
