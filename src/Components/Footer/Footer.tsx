import styles from "./Footer.module.css";
export const Footer: React.FC = () => {
  // const [, set] = React.useState();
  // React.useEffect(() => {}, [])
  return (
    <div className={styles.Wrapper}>
      <div className={styles.Container}>PocketPal</div>
    </div>
  );
};

export default Footer;
