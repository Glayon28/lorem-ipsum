import { Banner } from "../banner/Banner";
import { Footer } from "../footer/Footer";
import { AppHeader } from "../header/Header";
import { Info } from "../info/Info";
import { Sidebar } from "../sidebar/Sidebar";
import "./App.scss";
import "./media.scss";

function App() {
  return (
    <div className="app">
      <AppHeader />;
      <Sidebar />
      <Banner />
      <Info />
      <Footer />
    </div>
  );
}

export default App;
