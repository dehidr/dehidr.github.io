import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Conway from "./components/Conway";
import CV from "./components/CV";

function App() {
  return (
    <div className="m-0 p-0">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/conway" element={<Conway />} />
          <Route
            path="/cv"
            element={
              <div>
                <Conway />
                <div className=" ">
                  {/* border-b-4 border-black pb-2  */}
                  <h2
                    className="p-2 pb-0 mb-0 md:text-center  bg-black text-8xl md:text-9xl font-bold"
                    style={{ color: "#fffbeb" }}
                  >
                    Emre Kerman
                  </h2>
                </div>
                <CV />
              </div>
            }
          />
          <Route path="*" element={<h1>404 - Page Not Found</h1>} />
        </Routes>

        {/* <Navbar /> */}
      </Router>
    </div>
  );
}

export default App;
