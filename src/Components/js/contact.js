import React from 'react'
import '../css/contactForm.css'
export default function Contact() {
  return (
      <div className="form">
        <h1 className='heading'>Send Your Message</h1>
        <form action="http://localhost:8000/contact" method="post">
        <div className="detail">
        <input className="text" type="text" name="fullName" placeholder="FullName"/>
        </div>
        <div className="detail">
        <input className="text" type="email" name="email" placeholder="Email"/>
        </div>
        <div className="detail">
        <textarea type="textarea" className='textarea' name="message" placeholder="Message" rows="7"/>
        </div>

        <div className="detail sbtn">
        <a><button className="submitbtn">Submit</button></a>
        </div>
        <div><p className='mail'>Or You Can mail us on <a style={{textDecoration:'none'}} href="mailto:yoganitkkr@gmail.com">yoganitkkr@gmail.com</a></p></div>
        </form>
    </div>
  )
}
