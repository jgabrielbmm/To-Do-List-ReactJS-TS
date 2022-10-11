import rocket from "../assets/rocket.svg";
import styles from "./Header.module.css";

export function Header(){
  return (
    <div>
      <header className={styles.header}>
        <div className={styles.logo_container}>
          <img className={styles.logo} src={rocket} alt="to-do-list logo" />
          <h1 className={styles.title}>
            <span className={styles.title_to}>
              to
            </span>
            <span className={styles.title_do}>
              do
            </span>
          </h1>
        </div>
      </header>
    </div>
  )
}