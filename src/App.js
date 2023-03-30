import Navbar from './Components/js/navbar'
import Home from './Components/js/Home'
import Footer from './Components/js/Footer'
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Forward from './Components/js/forward';
import Backward from './Components/js/backward';
import Balancing from './Components/js/balancing';
import Streching from './Components/js/streching';
import AsanDetail from './Components/js/AsanDetail';
function App() {

  return (
    <div style={{display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
     <Navbar/>
               
           <Routes>
                 <Route exact path='/' element={< Home />}></Route>
                 <Route exact path='/forward' element={<Forward/>}></Route>
                 <Route exact path='/backward' element={<Backward/>}></Route>
                 <Route exact path='/balancing' element={<Balancing/>}></Route>
                 <Route exact path='/stretching' element={<Streching />}></Route>
                 <Route exact path='/asanDetail' element={<AsanDetail />}></Route>
          </Routes>
          
       
       <Footer/>
    </div>
  );
}

export default App;
