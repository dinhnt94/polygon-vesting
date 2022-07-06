import { addDocAddres } from "../../utils/filrebase";
import { useAddress } from "../../hooks/address";
import { useContract } from "../../hooks/contract";
const CSVToArray = (data, delimiter = ",", omitFirstRow = false) =>
  data
    .slice(omitFirstRow ? data.indexOf("\n") + 1 : 0)
    .split("\n")
    .map((v) => {
      const temp = v.split(delimiter);
      return { address: temp[0], amount: temp[1], status: "draft" };
    });

const UploadCom = () => {
  const { fetchDocAddress } = useAddress();
  const { setLoading } = useContract();
  const onChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    var reader = new FileReader();
    reader.onload = async function (e) {
      const result = CSVToArray(reader.result);
      setLoading(true);
      for await (const element of result) {
        console.log('element: ', element)
        await addDocAddres(element);
      }

      await fetchDocAddress();
      setLoading(false);
    };
    reader.readAsText(file);
  };
  return (
    <div>
      <label htmlFor="upload-csv" style={{ display: "flex", alignItems: "center", }}>
        <img width="50" src="https://cdn.pixabay.com/photo/2017/02/07/02/16/cloud-2044823_960_720.png" alt="" />
        <h4 style={{marginLeft: 10}}>Upload CSV to show list address</h4>
      </label>
      <input style={{ display: "none" }} type="file" id="upload-csv" onChange={onChange} />
    </div>
  );
};

export default UploadCom;
