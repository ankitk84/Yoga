import React from 'react'
import Member from './member'
import data from '../data/memberData.json'

export default function other() {
  return (
    <div>
      <Member memberData={data['Alumini']} heading={`Alimini's`}/>
      <Member memberData={data['4th year']} heading={`4th Year`}/>
      {/* <MemberData data={data['members']} heading={`Members`}/> */}

    </div>
  )
}
