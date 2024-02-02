interface  Country {
  alpha3Code: string;
  name: string;
  capital: string;
  population: number;
  area: number;
  borders: string[];
  flag: string;
}

interface CountryListProps {
  countries: Country[];
  onCountryClick: (alpha3Code: string) => void;
}

interface CountryInfoProps {
  selectedCountry: Country | null;
}