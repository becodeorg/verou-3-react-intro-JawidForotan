import Content from "./components/Content";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Info from "./pages/Info";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/about" element={<About />} />
          <Route path="/info" element={<Info />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
};

export default App;
