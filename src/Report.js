import React, { Fragment } from "react";
import { weatherData } from "./weatherData";
import { useParams } from "react-router-dom";

const Report = () => {
  const { scale } = useParams();
  const data = weatherData(scale);

  return (
    <section>
      <h1>
        Your weather report in {scale.charAt(0).toUpperCase() + scale.slice(1)}
      </h1>
      <dl>
        {data.map(({ city, temp }) => {
          return (
            <Fragment key={city}>
              <dt>{city}</dt>
              <dd>{temp.toString()}</dd>
            </Fragment>
          );
        })}
      </dl>
    </section>
  );
};

export default Report;
