import React, { useState } from "react";
import style from "./style.module.css";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function SimpleMap(props) {
  const defaultProps = {
    center: {
      lat: 43.3192879,
      lng: 45.6780688,
    },
    zoom: 11,
  };
  const [addCity, setAddCity] = useState("");

  const handleClick = () => {
    if (addCity === "") {
      alert("Введите название");
    } else {
      props.setYouCity(addCity);
    }
  };

  return (
    <div className={style.city_page}>
      <div className={style.city_page_box}>
        <div className={style.add_city}>
          <input
            type="text"
            placeholder={"Выберите ваш город"}
            value={addCity}
            onChange={(e) => {
              setAddCity(e.target.value);
            }}
          />
          <button onClick={handleClick}>Добавить</button>
        </div>
        <div className={style.map}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: "" }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
          >
            <AnyReactComponent
              lat={59.955413}
              lng={30.337844}
              text="My Marker"
            />
          </GoogleMapReact>
        </div>
      </div>
    </div>
  );
}
