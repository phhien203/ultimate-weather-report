import "./temperatures.scss";
import Home from "./Home";
import About from "./About";
import { Route, Routes } from "react-router-dom";
import Footer from "./Footer";
import Report from "./Report";

function App() {
  return (
    <>
      <main>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/reports/:scale" element={<Report />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
