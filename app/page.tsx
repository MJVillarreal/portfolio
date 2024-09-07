import styles from "./page.module.css";
import Home from "./pages/home"

export default function Index() {

  return (
    <main className={styles.main}>
      <div>
        <Home/>
      </div>
    </main>
  );
};