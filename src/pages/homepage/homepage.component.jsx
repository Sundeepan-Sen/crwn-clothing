import React from "react";
import "./homepage.styles.scss";
import Directory from "../../components/directory/directory.component";
// Functional component because no state or lifecycle methods are needed
// homepage - outside component
// inside components - container for menu and actual menu items

const HomePage = () => (
  <div className="homepage">
    <Directory />
  </div>
);

export default HomePage;
