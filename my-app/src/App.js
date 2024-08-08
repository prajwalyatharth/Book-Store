
import './App.css';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Addbooks from './Pages/Addbooks';
import Books from './Pages/Books';
import Home from './Pages/Home';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";



function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/books' element={<Books/>}/>
        <Route path='/addbooks' element={<Addbooks/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
