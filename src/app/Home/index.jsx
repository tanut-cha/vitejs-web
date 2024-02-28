import React from "react";
import FullWidthTextField from "../../components/MUI/FullWidthTextField";
import AutocompleteComboBox from "../../components/MUI/AutocompleteComboBox";
import { _GET } from "../../../service/mas";

export default function Home() {
  const [test, setTest] = React.useState("");
  const [test1, setTest1] = React.useState("");
  const [sex, setSex] = React.useState(null);
  const [options, setOption] = React.useState([]);

  const getSex = async () => {
    const datasend = {
      lov_type: "sex",
    };
    try {
      let response = await _GET(datasend, "api_lls/Lov_Data/Lov_Data_Get/");
      console.log(response, "response");
      if (response && response.status == "success") {
        setOption(response?.data);
      }
    } catch (e) {
      console.log(1);
    }
  };
  React.useEffect(() => {
    getSex();
  }, []);

  // React.useEffect(() => {
  //   const newObj ={
  //     test:test,
  //     test1:test1,
  //     sex:sex ? sex.lov1 : "",
  //   }
  // }, [test, test1, sex]);
  return (
    <div>
      <label className={"text-2xl font-bold"}>Hello my Home</label>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <FullWidthTextField
              value={test}
              required="required"
              labelName={"kujlhxfbgvkjlnb"}
              setvalue={setTest}
            />
          </div>
          <div className="col-md-3">
            <FullWidthTextField
              value={test1}
              labelName={"55555555555555"}
              setvalue={setTest1}
            />
          </div>
          <div className="col-md-3">{test}</div>
          <div className="col-md-3">{test1}</div>
          <div className="col-md-3">
            <AutocompleteComboBox
              labelName={"กรุณา"}
              options={options}
              column="lov1"
              setvalue={setSex}
            />
          </div>
          <div className="col-md-3">
            <FullWidthTextField
              value={sex ? sex?.lov1 : ""}
              labelName={"sex"}
              disabled
            />
          </div>
        </div>
      </div>
    </div>
  );
}
