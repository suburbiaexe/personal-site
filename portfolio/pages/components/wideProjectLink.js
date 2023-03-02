import styles from "../../styles/Home.module.css";

export default function WideProjectLink(props) {
    return (
        <a
            href={props.lnk}
            className={styles.wideRectLink}
            target="_blank"
            rel="noreferrer"
        >
            <div className={styles.wideRect}>
                <h2 id={styles.rectTitle}>{props.title} &rarr;</h2>
                <i>
                    <p id={styles.rectText}>{props.descrip}</p>
                </i>
                <div className={styles.wideRectSkills}>{props.skills}</div>
            </div>
        </a>
    );
}
