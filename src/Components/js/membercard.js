import React from 'react'
import '../css/memberCard.css'

export default function MemberCard(props) {
  return (
    <div className='memberCard'>
      <img className='memberImg' src={props.image} alt="" />
      <p className='memberName'>{props.name}</p>
    </div>
  )
}
