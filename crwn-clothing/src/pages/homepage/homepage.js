import React from "react";
import Directory from "../../components/directory/directory";
import { HomePageContainer } from "./homepage.styles";

import "./homepage.scss";

const HomePage = () => (
  // main conponent of the home page
  <HomePageContainer>
    <Directory />
  </HomePageContainer>
);

export default HomePage;
