import styles from './messages.module.css';
import Room from './_component/Room';

export default function Messages() {
    return (
        <main className={styles.main}>
        <div className={styles.header}>
            <h3>쪽지</h3>
        </div>
        <div className={styles.room}>
            <div className={styles.roomUserImage}>
                <Room />
            </div>
        </div>
        </main>
    )
}