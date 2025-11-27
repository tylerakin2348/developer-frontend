import { Navigate, Route, Routes } from "react-router-dom";
import HomePageContent from "./Content/HomePageContent";
import AboutPageContent from "./Content/AboutPageContent";
import Contact from "./Content/Contact";
import WorkContent from "./Content/WorkContent";
import Portfolio from "./Content/Portfolio";
import Technology from "./Content/Technology";

import "./assets/css/fonts.css";
import "./assets/css/general.css";
import "./assets/css/page-content.css";

function PageContent() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePageContent />} />
        <Route path="/about-tyler" element={<AboutPageContent />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/work" element={<WorkContent />} />
        <Route path="/work/portfolio" element={<Portfolio />} />
        <Route path="/work/technology" element={<Technology />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </main>
  );
}

export default PageContent;
