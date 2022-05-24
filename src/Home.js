import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section>
      <h1>Welcome to the weather report</h1>
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
    </section>
  );
};

export default Home;
