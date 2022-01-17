import React from "react";
import { withRouter } from "react-router-dom"; // You can get access to the history object’s properties and the closest <Route>'s match via the withRouter higher-order component. withRouter will pass updated match, location, and history props to the wrapped component whenever it renders. https://v5.reactrouter.com/web/api/Route.
// A higher-order component (HOC) is an advanced technique in React for reusing component logic. HOCs are not part of the React API, per se. They are a pattern that emerges from React’s compositional nature. Concretely, a higher-order component is a function that takes a component and returns a new component.Whereas a component transforms props into UI, a higher-order component transforms a component into another component. https://reactjs.org/docs/higher-order-components.html

import "./menu-item.styles.scss";

// Functional component because no state or lifecycle methods are needed
const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <div
    className={`${size} menu-item`}
    onClick={() => history.push(`${match.url}${linkUrl}`)} /*push: bool
    When true, redirecting will push a new entry onto the history instead of replacing the current one.
     https://v5.reactrouter.com/web/api/history */
  >
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${imageUrl})`, // CSS requires the string interpolated value of image URL
      }}
    />
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);

export default withRouter(MenuItem);
