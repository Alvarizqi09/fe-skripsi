import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PredictPlantLeaf from "./pages/predict";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/predict" element={<PredictPlantLeaf />} />
      </Routes>
    </Router>
  );
}

export default App;
