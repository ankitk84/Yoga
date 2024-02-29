import React, { useEffect} from 'react'
import Asana from './asana'
import data from '../data/database.json'
import '../css/yogi.css'
import { useDispatch, useSelector } from 'react-redux'
import { setSwitch } from '../../reducer/Switch'
export default function Backward() {
  const option = useSelector(state=>state.option)
  const dispatch=useDispatch()

 
  useEffect(()=>{
    dispatch(setSwitch(1))
  },[dispatch])
  return (
    <div className="con">
    <h1 className='header'>Backward Asana</h1>
    <div className='asanacard' style={{display:'flex'}}>
    {
        data.backward.map((ele,ind)=>
            <Asana ind={ind} hover={ind===option?true:false} img={ele.imgurl} name={ele.name} key={ind} alt={ele.alt}
bottomText={ele.smalldes} linkC={ele.linkC}/> 
        )
    }
      </div>
      </div>
  )
}
