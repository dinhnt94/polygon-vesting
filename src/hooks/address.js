import { useContext } from "react";
import { addressContext } from "../context/address";

export const useAddress = () => {
  const value = useContext(addressContext);
  return value;
};
