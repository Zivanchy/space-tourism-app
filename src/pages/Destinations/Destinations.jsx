import React, { useState, useEffect, useContext } from 'react';
import { Link, useParams } from 'react-router-dom';

import { APIContext } from '../../DataProvider';

const Destinations = () => {
  const [specificDestination, setSpecificDestination] = useState(null);
  const [data, isLoading] = useContext(APIContext);
  const { id } = useParams();

  useEffect(() => {
    if (data === null) return;
    data.destinations.forEach((dest) => {
      if (dest.name.toLowerCase() === id) {
        setSpecificDestination(dest);
        return;
      }
    });
  }, [data, id]);

  if (isLoading || specificDestination === null) return <div>Loading...</div>;

  return (
    <div className="destinations page">
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
