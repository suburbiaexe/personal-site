import Head from "next/head";
import styles from "../styles/Home.module.css";
import Footer from "./components/footer.js";
import BackArrow from "./components/back.js";

export default function ProjectPage() {
    return (
        <div className={styles.mainProjectPage}>
            <Head>
                <title>Projects</title>
            </Head>
            <BackArrow />
            <div>
                <h1 style={{ marginTop: "0" }}>Projects</h1>
            </div>
        </div>
    );
}
