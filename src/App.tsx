import React, { useEffect, useState } from 'react';


const App: React.FC = () => {
  const countriesListUrl = 'https://restcountries.com/v2/all?fields=alpha3Code,name';
  const countryInfoBaseUrl = 'https://restcountries.com/v2/alpha/';

  const [countries, setCountries] = useState<Country[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch(countriesListUrl);
        const data: Country[] = await response.json();
        setCountries(data);
      } catch (error) {
        console.error('Error fetching countries:', error);
      }
    };

   void fetchCountries();
  }, []);

  const handleCountryClick = async (alpha3Code: string) => {
    try {
      const response = await fetch(`${countryInfoBaseUrl}${alpha3Code}`);
      const data: Country = await response.json();
      setSelectedCountry(data);
    } catch (error) {
      console.error('Error fetching country info:', error);
    }
  };

  return (
    <div>
      <div className='header'>
        <nav className="navbar bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">Страны</a>
          </div>
        </nav>
      </div>
      <div className='main' style={{display: "flex"}}>
        <div className="box" style={{width: '400px',}}>
          <ul className="list-group">
            {countries.map((country) => (
              <li className="list-group-item" key={country.alpha3Code}
                  onClick={() => handleCountryClick(country.alpha3Code)}>
                {country.name}
              </li>
            ))}
          </ul>
        </div>
        <div className='boxes ms-3'>
            <h2>Информация о стране</h2>
            {selectedCountry && (
              <div>
                <h3>{selectedCountry.name }</h3>
                <p>Столица: {selectedCountry.capital}</p>
                <p>Население: {selectedCountry.population}</p>
                <p>Площадь: {selectedCountry.area} км²</p>
                <p>Граничит с: {selectedCountry.borders.join(', ')}</p>
              </div>
            )}
          </div>
        </div>
      </div>
  );
};

export default App;