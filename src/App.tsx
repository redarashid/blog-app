import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import About from "./Pages/About";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
