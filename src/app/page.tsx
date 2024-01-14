import Image from "next/image";
import styles from "./page.module.css";
import DashboardPage from "@/Pages/Dashboard/DashboardPage";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <DashboardPage />
      </main>
    </div>
  );
}
