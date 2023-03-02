import styles from "../../styles/Home.module.css";

export default function ProjectLink(props) {
    return (
        <a href={props.lnk} target="_blank">
            <div className={styles.rect}>
                <h2 id={styles.rectTitle}>{props.title} &rarr;</h2>
                <p id={styles.rectText}>{props.descrip}</p>
            </div>
        </a>
    );
}
