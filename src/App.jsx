import "./App.css";
import Header from "./components/Header/Header";
import { useTranslation } from "react-i18next";
import Footer from "./components/Footer/Footer";
import Home from "./Pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import OurServices from "./Pages/Services/Services";
import Connection from "./components/Connection/Connection";
import PricesPage from "./Pages/PricesPage/PricesPage";
import WorkPage from "./Pages/WorkPage/WorkPage";

function App() {
  const { t, i18n } = useTranslation();
  const language = localStorage.getItem("i18nextLng");

  const handleChange = (event) => {
    const selectedLanguage = event.target.value;
    i18n.changeLanguage(selectedLanguage);
    localStorage.setItem("i18nextLng", selectedLanguage); // Store selected language in localStorage
  };

  return (
    <>
      <Header language={language} handleChange={handleChange} t={t} />
      <main>
        <Routes>
          <Route path="/" element={<Home t={t} />} />
          <Route path="/services" element={<OurServices t={t} />} />
          <Route path="/prices" element={<PricesPage t={t} />} />
          <Route path="/work" element={<WorkPage t={t} />} />
        </Routes>
      </main>
      <Connection t={t} />
      <Footer t={t} />
    </>
  );
}

export default App;
