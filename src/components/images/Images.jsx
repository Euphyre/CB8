const Images = ({ imgObj }) => {
  return (
    <div className="imagesWrapper">
      <div className="images">
        <img src={imgObj.img} alt={imgObj.title} />
      </div>
    </div>
  );
};

export default Images;
