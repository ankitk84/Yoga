import Navbar from './Components/js/navbar'
import Home from './Components/js/Home'
import Footer from './Components/js/Footer'
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Forward from './Components/js/forward';
import Backward from './Components/js/backward';
import Balancing from './Components/js/balancing';
import Streching from './Components/js/streching';
import AsanDetail from './Components/js/AsanDetail';
import Performance from './Components/js/performance';
import Contact from './Components/js/contact';
import Other from './Components/js/other'
import AsanaImage from './Components/js/asanaImage'
import { useSelector } from 'react-redux';
function App() {
  const path = '/yogi'
  return (
    <div style={{display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
     <Navbar/>
               
           <Routes>
                 <Route exact path='/' element={< Home />}></Route>
              
                 <Route exact path={`/yogi/forward`} element={<Forward/>}></Route>
                 <Route exact path={`/yogi/backward`} element={<Backward/>}></Route>
                 <Route exact path={`/yogi/balancing`} element={<Balancing/>}></Route>
                 <Route exact path={`/yogi/stretching`} element={<Streching />}></Route>
                 <Route exact path={`/asanDetail`} element={<AsanDetail />}></Route>
                 <Route exact path='/performance' element={<Performance />}></Route>
                 <Route exact path='/contact' element={<Contact />}></Route>
                 <Route exact path={`/yogi/other`} element={<Other />}></Route>
                 <Route exact path ='/asanaimage' element ={ <AsanaImage/>}></Route>

          </Routes>     
       <Footer/>
    </div>
  );
}

export default App;
