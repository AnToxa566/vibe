import { Main, Masters, Prices } from "~/components/components";

const Home = () => {
  return (
    <main>
      <Main />
      <Prices />
      <Masters className="my-[3.75rem]" />
    </main>
  );
};

export default Home;
