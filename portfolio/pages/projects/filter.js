import Head from "next/head";
import BackArrow from "../components/back.js";
import Tag from "../components/tag.js";
import Project from "../components/projectBox.js";
import styles from "../../styles/Projects.module.css";

export default function FilterProj() {
    return (
        <div className={styles.pageContainer}>
            <Head>
                <title>Project: Image Filtering</title>
            </Head>
            <BackArrow />
            <header className={styles.headerContainer}>
                <h1 className={styles.title}>How To: Image Filtering</h1>
                <div className={styles.tagContainer}>
                    <Tag label="Info Visualization" />
                    <Tag label="React/Next.js" />
                    <Tag label="Adobe Illustrator" />
                </div>
            </header>

            <div
                className={styles.contentContainer}
                style={{ paddingBottom: "1em" }}
            >
                <Project
                    link="https://image-filter-livid.vercel.app"
                    name="Image Filtering"
                    pic="/images/filter.png"
                    width={396}
                    height={328}
                    altText="bruhhh."
                    mb={true}
                />
                <div className={styles.textContainer}>
                    <p className={styles.text}>
                        Image Filtering is a website I created with Next.js to
                        host three different visualizations explaining the
                        concept of image filtering at three different skill
                        levels: Beginner, Intermediate, and Advanced. I created
                        this, in part, because it was a final project, and I
                        thought a website would be a clever approach. However, I
                        also believed this site could help fill a gap in
                        graphics resources, even if just a bit. There aren't too
                        many free resources that are beginner or mid-level
                        friendly, and I thought creating these three
                        visualizations could add to those that exist.
                    </p>
                </div>
            </div>

            <div className={styles.bottomTextContainer}>
                <p className={styles.bottomText}>
                    The main challenge of this project was creating
                    visualizations and explanations that were significantly
                    different enough and well-suited to the skill level I
                    created them for. Luckily, I was able to refer to content
                    from another one of my classes (shoutout CS1230!) and
                    publicly available slide decks for inspiration on how I
                    could vary my explanations.
                </p>
                <p className={styles.bottomText}>
                    I ultimately decided to differentiate my visualizations
                    based on the following general guidelines:
                    <ul>
                        <li>
                            Beginner: High-level, abstracted; step-by-step
                            explanation of convolution
                        </li>
                        <li>
                            Intermediate: Assuming some exposure to tech or
                            photo-editing software; able to process more fine
                            details about filtering; relatively step-by-step
                            explanation of convolution
                        </li>
                        <li>
                            Advanced: Decent amount of programming experience
                            (knows what a struct is); brief cover of
                            convolution; more focus on details that comprise the
                            whole of filtering; implementation-focus
                        </li>
                    </ul>
                    When I set out to create all the graphics I needed, I
                    quickly realized that representing convolution for the
                    Intermediate and Advanced skill groups would look
                    significantly busier than for the Beginner group, at least
                    based on the way I wanted to explain the concept. I did my
                    best to make my designs as clean and easy to understand as
                    possible, but there was definitely a tradeoff between
                    including enough information and creating a nice design.
                </p>
                <p className={styles.bottomText}>
                    This project was also my first time using both Illustrator
                    and Next.js. Illustrator gave me a bit more of a headache
                    than Next.js, but I think I was able to well-explore
                    different features of both tools, and I'm very excited to
                    continue working with both in the future.
                </p>
                <p className={styles.bottomText}>
                    Overall, this project taught me a lot, from breaking down
                    difficult concepts to learning new tools, and while the site
                    is quite simple in and of itself, I put a lot of effort into
                    it, and I think it is ultimately successful in its goal to
                    create three different visualizations of the same
                    information for three different groups. I hope you can get
                    some use out of it.
                </p>
            </div>
        </div>
    );
}
