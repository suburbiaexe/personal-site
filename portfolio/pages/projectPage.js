import Head from "next/head";
import styles from "../styles/Home.module.css";
import Footer from "./components/footer.js";
import BackArrow from "./components/back.js";
import WideProjectLink from "./components/wideProjectLink.js";
import PlainTag from "./components/plainTag.js";

export default function ProjectPage() {
    return (
        <div className={styles.mainProjectPage}>
            <Head>
                <title>Projects</title>
            </Head>
            <BackArrow />
            <div className={styles.projPageContainer}>
                <h1 style={{ marginTop: "0" }}>Projects</h1>
                <div className={styles.projPageContentContainer}>
                    <WideProjectLink
                        lnk="https://image-filter-livid.vercel.app/"
                        title="Image Filtering"
                        descrip="Created an interactive website with three tutorials on image filtering for different skill levels!"
                        skills={[
                            <PlainTag label="Info Visualization" />,
                            <PlainTag label="React/Next.js" />,
                            <PlainTag label="Adobe Illustrator" />,
                        ]}
                    />
                    <WideProjectLink
                        lnk="https://github.com/suburbiaexe/final-veggies/tree/main"
                        title="Veggie Graphics"
                        descrip="In a team of four, rendered Bob from VeggieTales into a realtime mountain scene with procedurally-generated terrain, god rays, and bezier camera paths!"
                        skills={[
                            <PlainTag label="C++" />,
                            <PlainTag label="OpenGL" />,
                            <PlainTag label="Computer Graphics" />,
                        ]}
                    />
                    <WideProjectLink
                        lnk="https://banalbat666.github.io/iterative/"
                        title="Slingshot"
                        descrip="In a team of four, created a high-fidelity mobile prototype based solely on the mission description of Slingshot (YC S22)!"
                        skills={[
                            <PlainTag label="Figma" />,
                            <PlainTag label="Product Design" />,
                            <PlainTag label="User Testing" />,
                        ]}
                    />
                    <WideProjectLink
                        lnk="https://banalbat666.github.io/responsive-redesign-handin/"
                        title="Hawes Responsive Redesign"
                        descrip="Redesigned the Hawes Fine Foods site with plain HTML/CSS to better the accessibility and usability of the site!"
                        skills={[
                            <PlainTag label="HTML/CSS" />,
                            <PlainTag label="Accessibility" />,
                            <PlainTag label="Figma" />,
                        ]}
                    />
                    <WideProjectLink
                        lnk="https://personas-gamma.vercel.app/"
                        title="Personas"
                        descrip="Interviewed Brown University students on technical interface design to become a more empathetic and scrutinizing designer!"
                        skills={[
                            <PlainTag label="UX Research" />,
                            <PlainTag label="Empathy Maps" />,
                            <PlainTag label="User Interviews" />,
                        ]}
                    />
                    <WideProjectLink
                        lnk="https://github.com/ivan-pd/brown-deep-learning-hic"
                        title="HiC > Fanta"
                        descrip='In a team of four, attempted to reimplement the HiCPlus CNN model based on the "Enhancing Hi-C Data Resolution" paper by Zhang et al!'
                        skills={[
                            <PlainTag label="Tensorflow" />,
                            <PlainTag label="Python" />,
                            <PlainTag label="Deep Learning" />,
                            <PlainTag label="Data Cleaning" />,
                        ]}
                    />
                    <WideProjectLink
                        lnk="https://found-at-brown.vercel.app/"
                        title="Found@Brown"
                        descrip="Developed the front-end for a full-stack lost and found site for Brown University students and staff!"
                        skills={[
                            <PlainTag label="Typescript" />,
                            <PlainTag label="React" />,
                            <PlainTag label="Firebase" />,
                            <PlainTag label="Figma" />,
                        ]}
                    />
                </div>
            </div>
            <Footer />
        </div>
    );
}
