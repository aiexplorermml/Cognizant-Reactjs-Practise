import React, { useContext } from "react";
import { UserContext } from "./UserContext";

const Home = () => {

  const { Username } = useContext(UserContext);

  return (
    <div>
      <h2>Welcome {Username}</h2>
    </div>
  );
};

export default Home;