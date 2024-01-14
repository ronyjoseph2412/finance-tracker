import Link from "next/link";
import styles from "./Navbar.module.css";
import staticData from "@/staticData";
const navbarOptions = staticData.navbar.options;
const Navbar: React.FC = () => {
  return (
    <div className={styles.Wrapper}>
      <div className={styles.Container}>
        <div>
          <h1>Expense Tracker</h1>
        </div>
        <div className={styles.Links}>
          {navbarOptions.map((option, index) => {
            if (option.type === "link") {
              return (
                <Link href={option.path} key={index} className={styles.NavLink}>
                  <span>{option.name}</span>
                </Link>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
