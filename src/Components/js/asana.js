import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
// import { setOption } from '../../../reducer/option.js/Option';
import { setOpt } from '../../reducer/Option';

import '../css/yogi.css'
export default function Asana(props) {
   const dispatch=useDispatch()
   console.log(props.hover+" ")
   
   const onHover=()=>{
       dispatch(setOpt(props.ind))
      
   }
   const onLeave = ()=>{
     dispatch(setOpt(-1))
   }

  return (
   <div onMouseEnter={onHover}
   onMouseLeave={onLeave} style={{width: "35%",  margin:'30px' }} >
     <Link className="asana" to="/asanDetail" >        
        <img className='asanaimg' src={props.img} alt={props.alt}/>
        {
         props.hover==true?<p style={{color:'black', fontSize:'40px'
         }}>Open</p>:""
        }
        <p className='name'>{props.name}</p>
        <p className='name' style={{fontSize:18}}>{props.bottomText}</p>
     </Link>
     </div>
  )
}
