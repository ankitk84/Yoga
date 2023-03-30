import React from 'react'
import Asana from './asana'
import data from '../database.json'
import '../css/yogi.css'
export default function Streching() {
  return (
    <div className="con">
    <h1 className='header'>Streching</h1>
    <div className='asanacard' style={{display:'flex'}}>
    {
        data.streching.map((ele,ind)=>
            <Asana img={ele.imgurl} name={ele.name} key={ind} alt={ele.alt}
bottomText={ele.smalldes} linkC={ele.linkC}/> 
        )
    }
      </div>
      </div>
  )
}
