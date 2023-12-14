import React from "react";

const UserContext = React.createContext({
  isLogged: false,
  pseudo: null,
});

export default UserContext;
