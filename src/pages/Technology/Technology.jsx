import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import getData from '../../getData';

import backgroundImage from '../../assets/technology/background-technology-desktop.jpg';

const Technology = () => {
  const [data, setData] = useState(null);
  const [specificTech, setSpecificTech] = useState(null);

  const activeButton = {
    background: 'white',
    color: 'black',
  };

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
    data.technology.forEach((tech) => {
      if (tech.name.replace(/\s/g, '') === id) {
        setSpecificTech(tech);
        return;
      }
    });
  }, [data, id]);

  if (data === null || specificTech === null) {
    return <div>Loading...</div>;
  }
  return (
    <div
      className="technology page"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <h2 className="technology__subtitle sub-title">
        <span>03</span>
        Space launch 101
      </h2>

      <img
        src={specificTech.images.portrait}
        alt={specificTech.name}
        className="technology__image"
      />

      <div className="technology__info">
        <div className="technology__info-navigation">
          {data.technology.map((tech, index) =>
            specificTech.name === tech.name ? (
              <Link
                className="technology__info-navigation_button"
                to={`/technology/${tech.name.replace(/\s/g, '')}`}
                key={index}
                style={activeButton}
              >
                {index + 1}
              </Link>
            ) : (
              <Link
                className="technology__info-navigation_button"
                to={`/technology/${tech.name.replace(/\s/g, '')}`}
                key={index}
              >
                {index + 1}
              </Link>
            )
          )}
        </div>

        <div className="technology__info-description">
          <h3 className="technology__info-description_sub-title">
            the terminology...
          </h3>
          <h1 className="technology__info-description_title title">
            {specificTech.name}
          </h1>
          <p className="technologu__info-description_text text">
            {specificTech.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Technology;
