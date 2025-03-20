import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import About from "./Pages/about/About";
import Layout from "./components/_commons/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
