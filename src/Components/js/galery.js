import React from "react";
import "../css/gallery.css";

const Gallery = (props) => {
  return (
    <div className="performance">
      <h1 className="title">{props.heading}</h1>
      <div className="gallery" style={{ display: 'flex', overflowX: 'scroll', width:'100vw', height:'50vh', margin:'15px', border:'4px solid rgb(7, 2, 91)', borderRadius:'10px'}}>
        {props.images.map((image, index) => (
        <img className='galleryimg' key={index} src={image.imgurl} alt={`Image ${index}`} />
      ))}
      </div>
      <iframe
        className="perVideo"
        src={props.videolink}
        frameborder="0"
      ></iframe>
    </div>
  );
};
export default Gallery;
