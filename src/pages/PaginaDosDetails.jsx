import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { details as detailsJS } from "../data/paginaDosDetails";

export const Details = () => {
  const params = useParams();
  const [details, useDetails] = useState([]);
  useEffect(() => useDetails(detailsJS), []);

  return (
    <>
      {details.map((element) => {
        if (element.url === params.item) {
          return (
            <div className="details" key={element.titulo + Math.random()}>
              <h1>{element.titulo}</h1>
              <p>{element.descripcion}</p>
            </div>
          );
        }
      })}
    </>
  );
};
