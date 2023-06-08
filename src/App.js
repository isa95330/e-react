import Text from "./components/Text";
import Boutique from "./components/pages/Boutique"
import Account from "./components/pages/Contact"
import Navbar from "./components/NavBar"
import Footer from "./components/Footer"

// Routes
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
 
function App() {
  return (
    <div>
      <Navbar/>
      <Router>
         <Routes>
            <Route path="/" element={<Text/>} />
         </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
