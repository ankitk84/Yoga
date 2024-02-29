import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { setOpt } from '../../reducer/Option';
import '../css/yogi.css'

export default function Asana(props) {
   const dispatch=useDispatch()
   
   const onHover=()=>{
       dispatch(setOpt(props.ind))
      
   }
   const onLeave = ()=>{
     dispatch(setOpt(-1))
   }

  return (

   <div onMouseEnter={onHover}
   onMouseLeave={onLeave} className='asanaEle' >
     <Link className="asana" to="/asanDetail" >        
        <img className='asanaimg' src={props.img} alt={props.alt}/>     
        <p className='name'>{props.name}</p>
        <p className='name font'>{props.bottomText}</p>
     </Link>
     </div>
  )
}
