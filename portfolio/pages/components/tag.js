import styles from "../../styles/Components.module.css";

export default function Tag(props) {
    return <div className={styles.box}>{props.label}</div>;
}
