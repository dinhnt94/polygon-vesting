import { createContext, useEffect, useState } from "react";
import { getDocAddress, addDocAddres, removeRecord } from "../utils/filrebase";
import _ from 'lodash'

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

  const removeRecordDocs = async (record) => {
    await removeRecord(record)

    const temp = [...list]
    _.remove(temp, function (item) {
      return item.address === record.address
    })

    setList(temp)
  }

  const value = {
    list,
    fetchDocAddress,
    updateStatus,
    addDoc,
    removeRecordDocs
  };
  return <addressContext.Provider value={value}>{children}</addressContext.Provider>;
}

export default Contract;
