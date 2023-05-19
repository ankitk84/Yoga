import React from 'react'
import MemberCard from './membercard'
import '../css/member.css'

export default function member(props) {
  return (
    <div className='blocks'>
        <p className='memberType'>{props.heading}</p>
        <div className="block">
            {
                props.memberData.map((mem,ind)=>(
                    <MemberCard image={mem.imgurl} name={mem.Name}/>
                ))
            }
        </div>
    </div>
  )
}
