import "./App.css";
import Footer from "./components/Footer";
import MainContent from "./components/MainContent";
import Navbar from "./components/Navbar";
import ProductsMenu from "./components/ProductsMenu";

import "react-multi-carousel/lib/styles.css";
function App() {
  return (
    <>
      <div className="mx-auto w-full max-w-screen-xl px-2.5 md:px-20">
        <Navbar />
      </div>
      <div className="h-[1px] bg-gray-400/50" />
      <div className="mx-auto w-full max-w-screen-xl px-2.5 md:px-20">
        <MainContent />
        <ProductsMenu />
      </div>
      <Footer />
    </>
  );
}

export default App;
