import Home from "./component/Home";
import About_us from "./component/About_us";
import Navbar from "./component/Navbar";
import Contact from "./component/Contact";
import Skills from "./component/Skills";
import Resume from './component/Resume';
import Footer from './component/Footer';

import {BrowserRouter,Route,Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>      
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<About_us/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/skills' element={<Skills/>}/>
        <Route path='/resume' element={<Resume/>}/>
        
      </Routes>
      <Footer/>
      </BrowserRouter>
      
    </div>
  );
}
export default App;
