import React from 'react';



const CountryList: React.FC<CountryListProps> = ({ countries, onCountryClick }) => {
  return (
    <div className="box" style={{ width: '400px', cursor: "pointer"}}>
      <ul className="list-group">
        {countries.map((country) => (
          <li className="list-group-item" key={country.alpha3Code} onClick={() => onCountryClick(country.alpha3Code)}>
            {country.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CountryList;