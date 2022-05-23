import "./temperatures.scss";
import Home from "./Home";
import About from "./About";
import { Route, Routes } from "react-router-dom";
import Footer from "./Footer";

function App() {
  return (
    <>
      <main>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
