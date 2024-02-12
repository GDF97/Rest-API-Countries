import { Link } from "react-router-dom";
import "../scss/components/CountryCard.scss";
import { CountryType } from "../types/CountryType";

const CountryCard = ({
  CountryFlag,
  CountryName,
  Population,
  Region,
  Capital,
}: CountryType) => {
  return (
    <Link to={`/country/${CountryName}`} className="CountryCard">
      <img src={CountryFlag} alt="" className="country_flag" />
      <div className="country_info">
        <h3>{CountryName}</h3>
        <p>
          <strong>Population:</strong>
          {Population}
        </p>
        <p>
          <strong>Region:</strong>
          {Region}
        </p>
        <p>
          <strong>Capital:</strong>
          {Capital}
        </p>
      </div>
    </Link>
  );
};

export default CountryCard;
