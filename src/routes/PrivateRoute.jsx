import React from "react";
import { useAuth } from "../hooks/useAuth";


export const PrivateRoute = ({ children  }) => {
    console.log(children,'checkChilderen')
  const [token] = useAuth();
  return (token ?  children :<> {"Please Login"}</>);
};
