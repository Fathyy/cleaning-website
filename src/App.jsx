import { BrowserRouter, Route, Routes } from "react-router-dom";
import { About, Contact, FAQ, Home, Services } from "./pages";
import { Footer, Navbar } from "./components";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/services" element={<Services />}></Route>
          <Route path="/faq" element={<FAQ />}></Route>
        </Routes>
        <div className="footer-bg mt-32">
          <div className="container mx-auto sm:px-16 px-6">
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
