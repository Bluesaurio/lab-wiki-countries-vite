import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function HomePage() {
  const [countryList, setCountryList] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://ih-countries-api.herokuapp.com/countries")
      .then((response) => {
        console.log(response.data);
        setCountryList(response.data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  if (isLoading === true) {
    return <h3>...Loading...</h3>;
  }

  return (
    <header>
      <h1>List of Countries</h1>
      {countryList.map((eachCountry) => {
        return (
          <Link
            key={eachCountry.alpha3Code}
            to={`/country/${eachCountry.alpha3Code}`}
          >
            <p>{eachCountry.name.common}</p>
          </Link>
        );
      })}
    </header>
  );
}

export default HomePage;
