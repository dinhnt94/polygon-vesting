import { addDocAddres } from "../../untils/filrebase";
import { useAddress } from "../../hooks/address";
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
  const onChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    var reader = new FileReader();
    reader.onload = function (e) {
      const result = CSVToArray(reader.result);
      console.log(result.length);
      result.forEach(async (element) => {
        await addDocAddres(element);
      });
      fetchDocAddress();
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
