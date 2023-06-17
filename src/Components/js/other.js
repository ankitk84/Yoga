import React from 'react'
import Member from './member'
import data from '../data/memberData.json'

export default function other() {
  return (
    <div>
      <Member memberData={data['Alumini']} heading={`Alumini's`}/>
      <Member memberData={data['4th year']} heading={`4th Year`}/>
      <Member memberData={data['Members']} heading={`Members`}/>

    </div>
  )
}
