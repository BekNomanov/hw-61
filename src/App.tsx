import React, {useState, useEffect} from 'react';
import CountryList from './CountryList/CountryList';
import CountryInfo from './CountryInfo/CountryInfo';



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
        console.log(data)
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
      console.log(data)
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
        <CountryList countries={countries} onCountryClick={handleCountryClick}/>
        <CountryInfo selectedCountry={selectedCountry}/>
      </div>
    </div>
  );
};

export default App;