import Link from "next/link";
import styles from "../../styles/Components.module.css";

export default function BackArrow() {
    return (
        <h1 id={styles.backArrow}>
            <Link href="/">&larr;</Link>
        </h1>
    );
}
