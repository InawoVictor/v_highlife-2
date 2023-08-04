import Navbar from "./components/navbar/Navbar";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home"
import Categories from "./pages/Categories"
import Store from "./pages/Store"
import Tv from "./pages/Tv"


function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/store" element={<Store />} />
        <Route path="/highlife-tv" element={<Tv />} />
      </Routes>

    </div>
  );
}

export default App;
