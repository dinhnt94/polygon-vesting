import { addDocAddres } from "../../untils/filrebase";
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
        await addDocAddres(element);
      }

      await fetchDocAddress();
      setLoading(false);
    };
    reader.readAsText(file);
  };
  return (
    <div>
      <label htmlFor="upload-csv" style={{ display: "block" }}>
        Chọn file CSV
      </label>
      <input type="file" id="upload-csv" onChange={onChange} />
    </div>
  );
};

export default UploadCom;
