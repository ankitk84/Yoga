import React from 'react'
import '../css/footer.css'
export default function Footer() {
  return (
    <div className='footer'>
      <div className="element">
      <a className="element" href='https://www.instagram.com/yoga_nitkkr/' >
        <img className='img' src={require('../Images/insta.png')} alt="img" />
        <p className='txt'>Instagram</p></a>
      </div>
      <div className="element">
      <a className="element" href='https://www.facebook.com/flexiYoga2k15' > 
        <img className='img' src={require('../Images/fb.png')}alt="img" />
        <p className='txt'>Facebook</p></a>
      </div>
      <div className="element">
      <a className="element" href='https://www.youtube.com/@YOGANITKKR' >
        <img className='img' src={require('../Images/utube.png')} alt="img" />
        <p className='txt'>Youtube</p></a>
      </div>
    </div>
  )
}
