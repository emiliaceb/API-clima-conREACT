import React from "react";

const Clima = ({clima, datosCargados}) => {
  if (!datosCargados) {
    return null;
  }
    if (!clima || !clima.main || !clima.weather || !clima.weather[0]) {
        return <p className="mt-5">No hay información del clima disponible.</p>;
      }
    
      const iconUrl = `http://openweathermap.org/img/wn/${clima.weather[0].icon}.png`;
  return (
    <div className="mt-4">
      <h4>Clima en {clima.name}</h4>
      <p>Temperatura: {clima.main.temp}°C</p>
      <p>Condiciones: {clima.weather[0].description}</p>
      <img src={iconUrl} alt="Icono del clima" />
    </div>
  );
};

export default Clima;

