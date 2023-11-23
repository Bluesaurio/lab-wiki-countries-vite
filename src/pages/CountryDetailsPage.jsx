import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function CountryDetails() {
  const params = useParams();
  console.log(params.alphaCode);

  const [countryDetails, setCountryDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(
        `https://ih-countries-api.herokuapp.com/countries/${params.alphaCode}`
      )
      .then((response) => {
        console.log(response);
        setCountryDetails(response.data);
        setIsLoading(false);
      });
  }, []);

  if (isLoading === true) {
    return <h3>Cargando datos...</h3>;
  }

  const countryBorders = countryDetails.borders.map((eachBorder) => {
    return eachBorder;
  });

  return (
    <header>
      <p style={{ fontSize: "20px", fontWeight: "bold" }}>Country Details</p>
      <h4>Name: {countryDetails.name.common}</h4>
      <h5>Capital: {countryDetails.capital}</h5>
      <p>Area: {countryDetails.area} km2</p>
      {/* <p>
        Borders:
        {
          <Link to={`/country/${countryBorders}`}>
            <li>{countryBorders}</li>
          </Link>
          Falta desplegar la lista de países con los que hace frontera
        }
      </p> */}
    </header>
  );
}

export default CountryDetails;
