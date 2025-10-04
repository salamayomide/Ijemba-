import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Schools from "./Components/School";
import Health from "./Components/Health";
import Business from "./Components/Businesses";
import PeoplePage from "./Components/Peoplepage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="schools" element={<Schools />} />
        <Route path="Health" element={<Health />} />
        <Route path="Businesses" element={<Business />} />
        <Route path="People" element={<PeoplePage />} />
        {/* <Route path="/about" element={<About />} /> 
        <Route path="/contact" element={<Contact />} />  */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
