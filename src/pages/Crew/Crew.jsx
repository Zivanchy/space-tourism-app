import React, { useState, useEffect, useContext } from 'react';
import { Link, useParams } from 'react-router-dom';

import { APIContext } from '../../DataProvider';

import backgroundImage from '../../assets/crew/background-crew-desktop.jpg';

const Crew = () => {
  const [specificCrew, setSpecificCrew] = useState(null);
  const [data, isLoading] = useContext(APIContext);
  const { id } = useParams();

  const activeButton = {
    opacity: 1,
  };

  useEffect(() => {
    if (data === null) return;
    data.crew.forEach((person) => {
      if (person.name.replace(/\s/g, '') === id) {
        setSpecificCrew(person);
        return;
      }
    });
  }, [data, id]);

  if (isLoading || specificCrew === null) return <div>Loading...</div>;

  return (
    <div
      className="crew page"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <h2 className="crew__subtitle sub-title">
        <span>02</span>
        Meet your creew
      </h2>

      <img
        src={specificCrew.images.png}
        alt={specificCrew.name}
        className="crew__image"
      />

      <div className="crew__info">
        <h3 className="crew__info-role">{specificCrew.role}</h3>
        <h1 className="crew__info-person_name title">{specificCrew.name}</h1>
        <p className="crew__info-bio text">{specificCrew.bio}</p>
      </div>

      <div className="crew__navigation">
        {data.crew.map((person, index) =>
          specificCrew.name === person.name ? (
            <Link
              className="crew__navigation-button"
              to={`/crew/${person.name.replace(/\s/g, '')}`}
              key={index}
              style={activeButton}
            ></Link>
          ) : (
            <Link
              className="crew__navigation-button"
              to={`/crew/${person.name.replace(/\s/g, '')}`}
              key={index}
            ></Link>
          )
        )}
      </div>
    </div>
  );
};

export default Crew;
