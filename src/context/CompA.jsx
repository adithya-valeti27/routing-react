import React from "react";
import CompB from "./CompB";
import { useContext } from "react";
import { UserContext } from "./Context";
import { Link } from "react-router-dom";

const CompA = () => {
  const name = useContext(UserContext);
  return (
    <Link to={"/A"} className="a">
      <h1>{`Hello ${name}`}</h1>
      <p>Component A</p>
    </Link>
  );
};

export default CompA;
