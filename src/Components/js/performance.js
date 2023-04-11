import React from 'react'
import Gallery from './galery'
import data from '../data/performance.json'
export default function Performance() {
    

  return (
    <div>
      <Gallery images={data['26th January']} heading={"26 January"} videolink={"https://www.youtube.com/embed/Qto5hn1Tzt0"} />
      <Gallery images={data['15th August']} heading={"15 August"} videolink={"https://www.youtube.com/embed/QBKZsPegQ9w"} />
      <Gallery images={data['21st June']} heading={"21 June"} videolink={"https://www.youtube.com/embed/Ym1x3t9Gz_k"} />
    </div>
  )
}
