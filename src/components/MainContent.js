import About from "./About";
import Header from "./Header";
import Overview from "./Overview";
import Tabs from "./Tabs";

const MainContent = () => {
  return (
    <main className="py-8 space-y-4">
      <Header />
      <Tabs />
      <Overview />
      <About />
    </main>
  );
};

export default MainContent;
