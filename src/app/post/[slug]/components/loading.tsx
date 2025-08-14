import { Loader2Icon } from "lucide-react";
import styles from "./loading.module.scss";

export function Loading() {
    return (
        <div className={styles.loading}>
            <Loader2Icon size={30} color="#121212" className={styles.loadingIcon}/>
        </div>
    );
}