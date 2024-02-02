import React from 'react';



const CountryInfo: React.FC<CountryInfoProps> = ({ selectedCountry }) => {
  return (
    <div className='boxes ms-3'>
      {selectedCountry && (
        <div>
          <h3 className='mb-3'>{selectedCountry.name}</h3>
          <p>Столица: {selectedCountry.capital || ''}</p>
          <p>Население: {selectedCountry.population || ''}</p>
          <p>Площадь: {selectedCountry.area || ''} км²</p>
          {selectedCountry.borders !== undefined && (
            <p>Граничит с: {selectedCountry.borders.join(', ')}</p>
          )}
          <img src={selectedCountry.flag} alt='#' style={{height:'200px', width:'400px'}} />
        </div>
      )}
    </div>
  );
};

export default CountryInfo;