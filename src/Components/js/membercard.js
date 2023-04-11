import React from 'react'

export default function MemberCard(props) {
  return (
    <div>
      <img src={props.image} alt="" />
      <p>{props.name}</p>
    </div>
  )
}
