import Images from "../images/Images.jsx";
import "./Gallery.css";

const Gallery = ({ GalleryObj }) => {
  return (
    <div className="gallery">
      <h2>{GalleryObj.title}</h2>
      <div className="Gallery__items">
        {GalleryObj.list.map((image) => (
          <Images imgObj={image} key={image.id} />
        ))}
      </div>
    </div>
  );
};

export default Gallery;

//Gallerybj.title si riferisce al titolo "Gallery" che abbiamo dato nel file App; GalleryObj.list.map scorre l'array di imagesList3
