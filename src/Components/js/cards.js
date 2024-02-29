import React from 'react'
import '../css/cards.css'

export default function Card(props) {
  return (
    <div className='card'>
    <img className="imageCircular" alt='img' src={props.image} />
      <div style={{display
      :'flex', flexDirection:'column',justifyContent:'space-around'}}>
        <h5 className='desi'>{props.des} </h5>
        <h6 className='name'>{props.name}</h6>
        <div className='details'>
        <a href={props.inst}><img className='icons'  alt='img' src={require('../Images/insta.png')}/></a>
        <a  href={props.linkedin}><img  className='icons' alt='img' src={require('../Images/Linkedin.png')}/></a>
        <a  href={`mailto:${props.email}`}><img className='icons' alt='img' src={require('../Images/Gmail.png')}/></a>
        </div>
      </div>
    </div>
  )

}
