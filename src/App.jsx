import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import DiseaseDetail from "./pages/DiseaseDetail";
import { MainLayout } from "./Layout/MainLayout";
import PredictForm from "./pages/predict";

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/predict" element={<PredictForm />} />
          <Route path="/disease/:id" element={<DiseaseDetail />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
