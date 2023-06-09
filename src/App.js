import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import  Servicios  from './pages/servicios';
import {Welcome}   from "./pages/welcome";
import Navbar from "./pages/Navbar"



function App() {
  return (
    
   
    <>
      <Router>
    <Navbar/>
  <Routes>
  <Route exact path="/" element={<Welcome/>} />

  <Route exact path="servicios" element={<Servicios/>} />


  </Routes>
</Router>
    </>
  );
}

export default App;
