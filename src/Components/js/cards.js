import React from 'react'
import '../css/cards.css'

export default function Card(props) {
  return (
    <div className='card'>
    <img className="imageCircular" src={props.image} />
      <div style={{display
      :'flex', flexDirection:'column',justifyContent:'space-around'}}>
        <h5 className='desi'>{props.des} </h5>
        <h5 className='name'>{props.name}</h5>
        <div className='details'>
        <a target={'_blank'} href={props.inst}><img className='icons' src={require('../Images/insta.png')}/></a>
        <a target={'_blank'} href={props.linkedin}><img  className='icons' src={require('../Images/Linkedin.png')}/></a>
        <a target={'_blank'} href={`mailto:${props.email}`}><img className='icons' src={require('../Images/Gmail.png')}/></a>
        </div>
      </div>
    </div>
  )

}
