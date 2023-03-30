import React from 'react'
import { useSelector } from 'react-redux'
import data from "../database.json"

export default function AsanDetail() {
    const option=useSelector(state=>state.option)
    const flag=useSelector(state=>state.switch)
    const asanData=flag==0?data.forward:data.backward
    
  return (
    <>
    { option!=-1?
    <div style={{display:'flex',height:'100vh',border:"2px solid black", 
    flexDirection:"column",
    justifyContent:"space-around",
    marginTop:'100px', alignItems:"center"}}>
      <p>{asanData[option].name}</p>
      <img style={{height:'200px',width:'200px'}} src={asanData[option].imgurl}></img>
      <p>{asanData[option].compdes}</p>
    </div>:""
    }
    </>
  )
}
