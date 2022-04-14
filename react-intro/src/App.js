import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={}/>
            <Header />
            <Content />
            <Footer />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
