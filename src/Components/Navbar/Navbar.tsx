import Link from "next/link";
import styles from "./Navbar.module.css";
import staticData from "@/staticData";
import Logo from "@/Assets/Logo2.png";
import Image from "next/image";
const navbarOptions = staticData.navbar.options;
const Navbar: React.FC = () => {
  return (
    <div className={styles.Wrapper}>
      <div className={styles.Container}>
        <div className={styles.Logo}>
          <Image
            src={Logo}
            width={250}
            height={50}
            style={{
              borderRadius: "0.4rem",
            }}
            alt="Company Logo"
          />
        </div>
        <div className={styles.Links}>
          {navbarOptions.map((option, index) => {
            if (option.type === "link") {
              return (
                <Link
                  href={option.path}
                  key={option.name}
                  className={styles.NavLink}
                >
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
