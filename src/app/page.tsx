import {
  Contacts,
  Gallery,
  Main,
  Masters,
  Prices,
  Study,
} from "~/components/components";

const Home = () => {
  return (
    <main>
      <Main />
      <Prices />
      <Masters className="my-[3.75rem]" />
      <Study />
      <Gallery className="my-[3.75rem]" />
      <Contacts />
    </main>
  );
};

export default Home;
