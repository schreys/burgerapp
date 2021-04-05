import styles from './index.module.css'

export default function Layout(props) {
    return (
        <>
            <div>some heading stuff</div>
            <main className={styles.Content}>
                {props.children}
            </main>
        </>
    );
}