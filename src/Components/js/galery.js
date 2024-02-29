// import React from "react";
// import "../css/gallery.css";
// import {  useNavigate } from "react-router-dom";
// const Gallery = (props) => {
//   const navigate = useNavigate();
//   const showImage = (image) => {
//     navigate('/asanaimage',{state:image});
//   };
//   return (
//     <div className="performance">
//       <h1 className="title">{props.heading}</h1>
//       <div
//         className="gallery"
//         style={{
//           display: "flex",
//           overflowX: "scroll",
//           height: "25vh",
//           margin: "15px",
//           borderRadius: "10px",
//         }}
//       >
//         {props.images.map((image, index) => (
//           <img
//             key={index}
//             className="galleryimg"
//             src={image.imgurl}
//             onClick={()=>showImage(image.imgurl)}
//             alt={`Image ${index}: ${image.description}`}
//           />
//         ))}
//       </div>
//       <iframe
//         className="perVideo"
//         src={props.videolink}
//         frameborder="0"
//         title="1"
//       ></iframe>
//     </div>
//   );
// };
// export default Gallery;
import React from "react";
import "../css/gallery.css";
import { useNavigate } from "react-router-dom";

const Gallery = (props) => {
  const navigate = useNavigate();

  const showImage = (image_) => {
    navigate("/asanaimage", { state: image_ });
  };

  return (
    <div className="performance">
      <h1 className="title">{props.heading}</h1>
      <div
        className="gallery"
        style={{
          display: "flex",
          overflowX: "scroll",
          height: "25vh",
          margin: "15px",
          borderRadius: "10px",
        }}
      >
        {props.images.map((image_, index) => (
          <img
            key={index}
            className="galleryimg"
            src={image_.imgurl}
            onClick={() => showImage(image_.imgurl)}
            alt={`Image ${index}: ${image_.description}`}
          />
        ))}
      </div>
      <iframe
        className="perVideo"
        src={props.videolink}
        frameborder="0"
        title="1"
      ></iframe>
    </div>
  );
};

export default Gallery;
