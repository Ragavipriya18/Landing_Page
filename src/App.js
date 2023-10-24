import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Features from './Components/Features';
import Specialization from './Components/Specialization';
import Contact from './Components/Contact';
import Diversity from './Components/Diversity';
import Footer from './Components/Footer';



function App() {
  return (
   <div>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous"></link>
    <Navbar/>
    <Home/>
    <Features/>
    <Specialization/>
    <Diversity/>
    <Contact/>
    <Footer/>
  


   
    
    
   </div>
  );
}

export default App;
