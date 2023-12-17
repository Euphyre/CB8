const Slider = (props) => {
  return (
    <div className="imgWrapper">
      {props.list.map((element) => (
        <div key={element.id}>
          <h3 className="element__title">{element.title}</h3>

          <img className="image" src={element.img} alt={element.title} />
        </div>
      ))}
    </div>
  );
};

export default Slider;

//creare un pulsante che mescola l'ordine dell'array (props.list) -on click-
