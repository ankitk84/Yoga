import React from 'react'
import '../css/navbar.css'
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function Navbar() {
  return (
    
      <div className="nav">
        <div className="left">
            <img className='logo' src={"https://i.ibb.co/T4wW0Hd/nitlogo.png"} />
            <div className="header">
            <p>YOGA TEAM</p>
            <p>National Institute of Technology, Kurukshetra</p>
            </div>
        </div>
        <div className="right">
          <ul className='listitems'>
            <a className='item' href="/"><li className='itemstyle'>Home</li></a>
            <a className='item'><li href="" className='itemstyle'>Performances</li></a>
            <NavDropdown title="Yogi's" id="basic-nav-dropdown" className='item' style={{marginTop:22}}>
              <NavDropdown.Item href="forward">Forward</NavDropdown.Item>
              <NavDropdown.Item href="backward">
                Backward
              </NavDropdown.Item>
              <NavDropdown.Item href="balancing">Balancing</NavDropdown.Item>
        
              <NavDropdown.Item href="stretching">
                Streching
              </NavDropdown.Item>
            </NavDropdown>
            <a className='item'><li className='itemstyle'>Contact Us</li></a>            
          </ul>
      
        </div>
      </div>
    
  )
}
