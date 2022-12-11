import Head from "next/head";
import BackArrow from "../components/back.js";
import Tag from "../components/tag.js";
import Project from "../components/projectBox.js";
import styles from "../../styles/Projects.module.css";

export default function Personas() {
    return (
        <div className={styles.pageContainer}>
            <Head>
                <title>Project: Iterative Design</title>
            </Head>
            <BackArrow />
            <header className={styles.headerContainer}>
                <h1 className={styles.title}>Slingshot Iterative Design</h1>
                <div className={styles.tagContainer}>
                    <Tag label="Prototyping in Figma" />
                    <Tag label="Group Work" />
                    <Tag label="User Testing" />
                    <Tag label="Product Design" />
                </div>
            </header>

            <div className={styles.contentContainer}>
                <Project
                    link="https://banalbat666.github.io/iterative/"
                    name="Iterative Design"
                    pic="/images/iterative.png"
                    width={396}
                    height={328}
                    altText="bruhhh."
                    mb={true}
                />
                <div className={styles.textContainer}>
                    <p className={styles.text}>
                        This was a group project with three other students in
                        which we created a hi-fi prototype of a mobile app based
                        on Slingshot, a YC startup that automatically reduces
                        medical bills. As you might be able to guess, the focus
                        of this project was the iterative design process:
                        improving upon our mockup at each stage, from initial
                        sketches to user testing.
                    </p>
                    <p className={styles.text}>
                        This was an incredibly valuable project, as I not only
                        got exposure to the product design process, but I also
                        learned more about the dynamics of working with other
                        designers to create a cohesive product.
                    </p>
                </div>
            </div>
        </div>
    );
}
