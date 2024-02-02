import React, { useEffect, useState } from 'react';

// Определение типа для страны
type Country = {
  alpha3Code: string;
  name: string;
};

const App: React.FC = () => {
  const url = 'https://restcountries.com/v2/all?fields=alpha3Code,name';

  const [countries, setCountries] = useState<Country[]>([]);

  const fetchCountries = async () => {
    try {
      const response = await fetch(url);
      const data: Country[] = await response.json();
      setCountries(data);
    } catch (error) {
      console.error('Error fetching countries:', error);
    }
  };

  useEffect(() => {
    void fetchCountries();
  }, []);

  return (
    <div>
      <ul>
        {countries.map((country) => (
          <li key={country.alpha3Code}>
            {country.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
