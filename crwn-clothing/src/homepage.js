import React from "react";
import "./homepage.scss";

const HomePage = () => (
  // main conponent of the home page
  <div className="homepage">
    <div className="directory-menu">
      {/* Single menu item */}
      <div className="menu-item">
        <div className="content">
          <h1 className="title">HATS</h1>
          <p className="subtitle">SHOP NOW</p>
        </div>
      </div>
      {/* End of single menu item */}

      {/* Single menu item */}
      <div className="menu-item">
        <div className="content">
          <h1 className="title">JACKETS</h1>
          <p className="subtitle">SHOP NOW</p>
        </div>
      </div>
      {/* End of single menu item */}

      {/* Single menu item */}
      <div className="menu-item">
        <div className="content">
          <h1 className="title">SNEAKERS</h1>
          <p className="subtitle">SHOP NOW</p>
        </div>
      </div>
      {/* End of single menu item */}

      {/* Single menu item */}
      <div className="menu-item">
        <div className="content">
          <h1 className="title">WOMENS</h1>
          <p className="subtitle">SHOP NOW</p>
        </div>
      </div>
      {/* End of single menu item */}

      {/* Single menu item */}
      <div className="menu-item">
        <div className="content">
          <h1 className="title">MENS</h1>
          <p className="subtitle">SHOP NOW</p>
        </div>
      </div>
      {/* End of single menu item */}
    </div>
  </div>
);

export default HomePage;
