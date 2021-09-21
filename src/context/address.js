import { createContext, useEffect, useState } from "react";
import { getDocAddress, addDocAddres } from "../utils/filrebase";

export const addressContext = createContext([]);

function Contract({ children }) {
  const [list, setList] = useState([]);

  useEffect(() => {
    const init = async () => {
      const result = await getDocAddress();
      setList(result);
    };
    init();
  }, []);

  const fetchDocAddress = async () => {
    const result = await getDocAddress();
    setList(result);
  };

  const updateStatus = (record) => {
    const { address, status } = record;
    const index = list.findIndex((element) => element.address === address);
    const temp = [...list];
    if (temp[index]) temp[index].status = status;
    addDocAddres(record);
    setList(temp);
  };

  const addDoc = async (record) => {
    const temp = [...list];
    temp.unshift(record);
    addDocAddres(record);
    setList(temp);
  };

  const value = {
    list,
    fetchDocAddress,
    updateStatus,
    addDoc
  };
  return <addressContext.Provider value={value}>{children}</addressContext.Provider>;
}

export default Contract;
