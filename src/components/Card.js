import React from "react";

const Card = ({ items }) => {
  return (
    <div className="container">
      <img className="card-img" src={`${items.imageUrl}`} alt="country" />
      <div className="card-info">
        <div className="card-loc">
          <img
            className="marker-icon"
            src="/images/marker.png"
            alt="marker icon"
          />
          <p>{items.location}</p>
          <a href={`${items.googleMapsUrl}`}>View on Google Maps</a>
        </div>
        <h2>{items.title}</h2>
        <p className="card-date">
          {items.startDate} - {items.endDate}
        </p>
        <p className="description">{items.description}</p>
      </div>
    </div>
  );
};

export default Card;
