import styles from "../../styles/Components.module.css";

export default function PlainTag(props) {
    return <div className={styles.plainBox}>{props.label}</div>;
}
