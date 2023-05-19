import React from 'react'
import { useLocation } from 'react-router-dom';
import '../css/asanaImage.css'

export default function AsanaImage(props) {
  const { state } = useLocation();
  return (
    <div className='asanaImageBlock'>
      <img className='asanaImage' src={state} alt="" />
    </div>
  )
}
