import React from 'react'
import '../css/navbar.css'
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();
  
  const setPathForOther = (name)=>{
    navigate(`/${name}`)
  }
  return (
    
      <div className="nav">
        <div className="left">
            <img className='logo' src={"https://i.ibb.co/T4wW0Hd/nitlogo.png"} />
            <div className="header">
            <span>YOGA TEAM</span><br/>
            <a className='item' href='https://nitkkr.ac.in/' target='_blank'>National Institute of Technology, Kurukshetra</a>
            </div>
        </div>
        <div className="right">
          <ul className='listitems'>
            <a className='item' onClick={()=>setPathForOther("")} href="#"><li className='itemstyle'>Home</li></a>
            <a className='item' href="#" onClick={()=>setPathForOther('performance')} ><li  className='itemstyle'>Performances</li></a>

            <NavDropdown title="Yogi" id="basic-nav-dropdown" style={{marginTop:2}} >
              <NavDropdown.Item href="/yogi/forward"  >Forward</NavDropdown.Item>
              <NavDropdown.Item href="/yogi/backward"  >
              Backward
              </NavDropdown.Item>
              <NavDropdown.Item href="/yogi/balancing"  >Balancing</NavDropdown.Item>        
              <NavDropdown.Item href="/yogi/stretching"  >
              Streching
              </NavDropdown.Item>
              <NavDropdown.Item href="/yogi/other"  >
                Members
              </NavDropdown.Item>
            </NavDropdown>
            <a className='item' onClick={()=>setPathForOther("contact")} href="#"><li className='itemstyle'>Contact Us</li></a>            
          </ul>
      
        </div>
      </div>
    
  )
}
