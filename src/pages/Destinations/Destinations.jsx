import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import getData from '../../getData';

import backgroundImage from '../../assets/destination/background-destination-desktop.jpg';

const Destinations = () => {
  const [data, setData] = useState(null);
  const [specificDestination, setSpecificDestination] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getData('../data.json');
      setData(data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (data === null) return;
    data.destinations.forEach((dest) => {
      if (dest.name.toLowerCase() === id) {
        setSpecificDestination(dest);
        return;
      }
    });
  }, [data, id]);

  if (data === null || specificDestination === null) {
    return <div>Loading...</div>;
  }

  return (
    <div
      className="destinations page"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <h2 className="destinations__subtitle sub-title">
        <span>01</span>
        Pick your destination
      </h2>

      <img
        src={specificDestination.images.png}
        alt={specificDestination.name}
        className="destinations__image"
      />

      <div className="destinations__info">
        <ul className="destinations__info-menu">
          {data.destinations.map((dest, index) => (
            <Link
              className="destinations__info-menu-link"
              to={`/destinations/${dest.name.toLowerCase()}`}
              key={index}
            >
              <li className="destinations__info-menu-item">{dest.name}</li>
            </Link>
          ))}
        </ul>
        <h1 className="destinations__info-title title">
          {specificDestination.name}
        </h1>
        <p className="destinations__info-text text">
          {specificDestination.description}
        </p>
        <div className="destinations__info-footer">
          <div className="destinations__info-tt">
            <span>Avg. Distance</span>
            <p>{specificDestination.distance}</p>
          </div>
          <div className="destinations__info-tt">
            <span>Est. travel time</span>
            <p>{specificDestination.travel}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destinations;
