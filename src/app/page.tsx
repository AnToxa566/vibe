import { Main } from "~/components/main/main";
import { Prices } from "~/components/prices/prices";
import { Masters } from "~/components/masters/masters";
import { Study } from "~/components/study/study";
import { Gallery } from "~/components/gallery/gallery";
import { Contacts } from "~/components/contacts/contacts";

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
