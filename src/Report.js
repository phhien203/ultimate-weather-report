import React, { Fragment } from "react";
import { weatherData } from "./weatherData";
import { useParams } from "react-router-dom";
import Section from "./Section";

const Report = () => {
  const { scale } = useParams();
  const data = weatherData(scale);
  const headingText = `Your weather report in ${
    scale.charAt(0).toUpperCase() + scale.slice(1)
  }`;

  return (
    <Section headingText={headingText}>
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
    </Section>
  );
};

export default Report;
