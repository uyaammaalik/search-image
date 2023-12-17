import React from "react";
import "../style/ImageStyle.css";
import ImageCard from "./ImageCard";

const ImageList = (props) => {
  // we can use the below way to list or another way available
  /*const images = props.images.map((image) => {
    return (
      <img src={image.urls.regular} key={image.id} alt={image.descripton} />
    );
  });*/

  const images = props.images.map((image) => {
    return <ImageCard key={image.id} image={image} />;
  });

  return <div className="list-image">{images}</div>;
};

export default ImageList;
