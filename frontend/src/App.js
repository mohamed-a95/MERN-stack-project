//BrowserRouter ska omfamna överallt, Routes över dem enskilda,Route anv
//vänds för att bilda en route
import { BrowserRouter, Routes, Route } from "react-router-dom";

//pages&components
import Home from "./pages/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
