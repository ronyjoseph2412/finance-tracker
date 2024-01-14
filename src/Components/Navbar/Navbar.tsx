import Link from "next/link";
import styles from "./Navbar.module.css";
const Navbar: React.FC = () => {
  return (
    <div className={styles.Wrapper}>
      <div className={styles.Container}>
        <div>
          <h1>Expense Tracker</h1>
        </div>
        <div className={styles.Links}>
          <Link className={styles.NavLink} href="/">
            Home
          </Link>
          <Link className={styles.NavLink} href="/about">
            About
          </Link>
          <Link className={styles.NavLink} href="/contact">
            Contact
          </Link>
          <Link className={styles.NavLink} href="/login">
            User
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
