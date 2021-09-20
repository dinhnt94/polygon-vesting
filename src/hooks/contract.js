import { useContext } from "react";
import { contextWeb3 } from "../context/contract";

export const useContract = () => {
  const value = useContext(contextWeb3);
  return value;
};
