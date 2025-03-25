import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import About from "./Pages/about/About";
import Layout from "./components/_commons/Layout";
import Category from "./Pages/categories";
import NotFound from "./Pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/about" element={<About />} />
          <Route path="/categories" element={<Category />} />
          <Route path="*" element={ <NotFound /> } />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
