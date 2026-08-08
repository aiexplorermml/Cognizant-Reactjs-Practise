import React, { useContext } from "react";
import { UserContext } from "./UserContext";

const Navbar = () => {

  const { Username } = useContext(UserContext);

  return (
    <div>
      Navbar - {Username}
    </div>
  );
};

export default Navbar;