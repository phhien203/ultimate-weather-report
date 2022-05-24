import React from "react";
import { Link } from "react-router-dom";
import Section from "./Section";

const Home = () => {
  return (
    <Section headingText="Welcome to the weather report">
      <p>
        Please select one of the options below to view the current weather in
        your temperature scale of choice!
      </p>
      <nav aria-label="Main">
        <ul>
          <li>
            <Link to="/reports/kevin">View weather in kevin</Link>
          </li>
          <li>
            <Link to="/reports/celsius">View weather in celsius</Link>
          </li>
          <li>
            <Link to="/reports/fahrenheit">View weather in fahrenheit</Link>
          </li>
        </ul>
      </nav>
    </Section>
  );
};

export default Home;
