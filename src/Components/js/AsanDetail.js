import React from 'react'
import { useSelector } from 'react-redux'
import data from "../data/database.json"
import '../css/asanadetail.css'

export default function AsanDetail() {
    const option=useSelector(state=>state.option)
    const flag=useSelector(state=>state.switch)
    let asanData=data.forward;
    switch(flag){
    case 1: {
      asanData=data.backward;
      break;
    }
    case 2: {
      asanData=data.balancing;
      break;
    }
    case 3: {
      asanData=data.streching;
      break;
    }
    
    }
  return (
    <>
    { option!==-1?
    <div style={{display:'flex',
    marginTop:'10px', alignItems:"center"}}>
    <div className="components">
      <div className="leftCompo">
      <p className='asanaName'>{asanData[option].name}</p>
      </div>
      <div className="rightCompo">
      <img className='asanaImg' alt='img' src={asanData[option].imgurl}></img>
      <p className='content' >{asanData[option].compdes}</p>
      </div>
      </div>
    </div>:""
    }
    </>
  )
}
