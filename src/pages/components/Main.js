import styles from '@/styles/Main.module.css'

function Main(){
    return (
        <div class={styles.backboard}>
            <div id={styles.titlebox}>
                <h1 class={styles.index_title}>NagatoStudio</h1>
                <h2 class={styles.index_subtitle}>A Developer Studio</h2>
            </div>
        </div>
    )
}

export default Main;