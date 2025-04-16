import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import About from "./Pages/about/About";
import Layout from "./components/_commons/Layout";
import NotFound from "./Pages/NotFound";
import Categories from "./Pages/categories";
import Home from "./Pages/posts";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={ <Home /> } />
          <Route path="/categories" element={<Categories />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
