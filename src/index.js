import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

import App from "./App";
const Body = styled.body`
  font-family: "Poppins", sans-serif;
 
`;

ReactDOM.render(
  <Body>
    <App />
  </Body>,
  document.getElementById("root")
);
