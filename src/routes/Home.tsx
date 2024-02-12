import { useEffect, useState } from "react";
import CountryCard from "../components/CountryCard";
import FilterByRegion from "../components/FilterByRegion";
import SearchInput from "../components/SearchInput";
import "../scss/pages/Home.scss";
import { useApi } from "../hooks/useApi";
import { CountryType } from "../types/CountryType";

const Home = () => {
  const api = useApi();

  const [countries, setCountries] = useState<Array<CountryType> | null>();
  const [region, setRegion] = useState("");
  const [countryName, setCountryName] = useState("");
  const [erro, setErro] = useState(false);

  const changeRegion = (region: string) => {
    setRegion(region);
  };

  const handleSearch = (country: string) => {
    setCountryName(country);
  };

  const handleCountries = (data: Array<any>) => {
    const newCountries: CountryType[] = data.map((element: any) => ({
      CountryFlag: element.flags.png,
      CountryName: element.name.common,
      Population: element.population,
      Region: element.region,
      Capital: element.capital,
    }));
    setCountries(newCountries);
  };

  const getCountriesByRegion = async (region: string) => {
    try {
      const data = await api.getCountriesByRegion(region);
      handleCountries(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getCountryByName = async (countryName: string) => {
    setErro(false);
    try {
      const data = await api.getCountryByName(countryName);
      if (data === 404) {
        setErro(true);
        setCountries(null);
        return;
      }
      handleCountries(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getAllCountries = async () => {
    try {
      const data = await api.getAllCountries();
      handleCountries(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (region != "") {
      getCountriesByRegion(region);
    }
  }, [region]);

  useEffect(() => {
    if (countryName.length > 0) {
      getCountryByName(countryName);
    } else {
      setErro(false);
    }
  }, [countryName]);

  useEffect(() => {
    if (region === "" && countryName === "") {
      getAllCountries();
      setErro(false);
    }
  }, [region, countryName]);

  return (
    <div className="home-container">
      <div className="home-top">
        <SearchInput handleSearch={handleSearch} />
        <FilterByRegion changeRegion={changeRegion} />
      </div>
      <div className="home-content">
        {erro && <p>País não encontrado</p>}
        {countries &&
          countries.map((country, index) => (
            <CountryCard key={index} {...country} />
          ))}
      </div>
    </div>
  );
};

export default Home;
