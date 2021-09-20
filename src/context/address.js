import { createContext, useEffect, useRef, useState } from "react";
import { getDocAddress, addDocAddres } from "../untils/filrebase";

export const addressContext = createContext([]);

function Contract({ children }) {
  const [loading, setLoading] = useState(false);
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

  const value = {
    list,
    fetchDocAddress,
    updateStatus
  };
  return (
    <addressContext.Provider value={value}>
      {children}
      {loading && <div className="loading">Loading ...</div>}
    </addressContext.Provider>
  );
}

export default Contract;
