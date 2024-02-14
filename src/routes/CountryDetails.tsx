import { Link, useParams } from "react-router-dom";
import { useApi } from "../hooks/useApi";
import { useContext, useEffect, useState } from "react";
import { CountryType } from "../types/CountryType";
import "../scss/pages/CountryDetails.scss";
import { ArrowLeft } from "lucide-react";
import { ThemeContext } from "../contexts/ThemeContext";

const CountryDetails = () => {
  const api = useApi();

  const { country } = useParams();

  const { theme } = useContext(ThemeContext);

  const countryParsed = country ? country.toString() : "";

  const [countryInfos, setCountryInfos] = useState<CountryType>();
  const [borderCountries, setBorderCountries] = useState([]);

  const getCountryByName = async (country: string) => {
    try {
      const data = await api.getCountryByName(country);

      setBorderCountries(data[0].borders);

      const keysCurrencies = Object.keys(data[0].currencies);
      const primeiroValorCurrencies = data[0].currencies[keysCurrencies[0]];

      const keysNativeCountryName = Object.keys(data[0].name.nativeName);
      const primeiroValorNativeCountryName =
        data[0].name.nativeName[keysNativeCountryName[0]];

      const CountryOBJ: CountryType = {
        CountryFlag: data[0].flags.svg,
        CountryName: data[0].name.common,
        Population: data[0].population,
        Region: data[0].region,
        Capital: data[0].capital[0],
        NativeCountryName: primeiroValorNativeCountryName.common,
        SubRegion: data[0].subregion,
        TopLevelDomain: data[0].tld[0],
        Currencies: primeiroValorCurrencies.name,
      };

      setCountryInfos(CountryOBJ);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getCountryByName(countryParsed);
  }, [countryParsed]);

  return (
    <div className={`CountryDetailsWrapper ${theme}`}>
      <Link to={"/"}>
        <ArrowLeft />
        Back
      </Link>
      {countryInfos && (
        <div className="CountryInfos">
          <img src={countryInfos?.CountryFlag} alt="" />
          <div className="cansei">
            <h1>{countryInfos?.CountryName}</h1>
            <div className="infos-wrapper">
              <div className="left">
                <p>
                  <strong>Native Name:</strong>{" "}
                  {countryInfos?.NativeCountryName}
                </p>
                <p>
                  <strong>Population</strong> {countryInfos?.Population}
                </p>
                <p>
                  <strong>Region:</strong> {countryInfos?.SubRegion}
                </p>
              </div>
              <div className="right">
                <p>
                  <strong>Capital:</strong> {countryInfos?.Capital}
                </p>
                <p>
                  <strong>Top Level Domain:</strong>{" "}
                  {countryInfos?.TopLevelDomain}
                </p>
                <p>
                  <strong>Currencies: </strong>

                  {countryInfos?.Currencies}
                </p>
              </div>
            </div>
            <div className="borderCountries">
              <p>Border Countries: </p>
              {borderCountries &&
                borderCountries.map((countries, index) => (
                  <div className="border" key={index}>
                    {countries}
                  </div>
                ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CountryDetails;
