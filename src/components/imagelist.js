import React from "react";
import "./image_list.css";
import Imagecard from "./imagecard";


const Imagelist=(props)=>{
   const show = props.list.map((image)=>{
        // console.log(im.urls.regular)
        return <Imagecard  key={image.id} img={image}  />
    });
    return(
        <div className="image-list">{show}</div>
    )
}



export default Imagelist;