import {
  Contacts,
  Gallery,
  Main,
  Masters,
  Prices,
  Study,
} from "~/components/components";

import styles from "./styles.module.scss";

const Home = () => {
  return (
    <main className={styles.page}>
      <Main />
      <Prices />
      <Masters className={styles.masters} />
      <Study />
      <Gallery className={styles.gallery} />
      <Contacts />
    </main>
  );
};

export default Home;
