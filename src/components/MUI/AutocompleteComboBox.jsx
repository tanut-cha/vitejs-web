import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export default function AutocompleteComboBox(props) {
  const {value, labelName, required, setvalue, options=[], column  } = props;
  const handleOnchange = (e, value) => {
    setvalue && setvalue(value)
  };
  return (
    <>
      <label htmlFor="" className={`${required} fs-6 font-bold py-2`}>
        {labelName}
      </label>
      <Autocomplete
        disablePortal
        value={value}
        id="combo-box-demo"
        options={options}
        getOptionLabel={(e) => e[`${column}`]}
        onChange={handleOnchange}
        // isOptionEqualToValue={(option, value) => option.id === value.id}
        sx={{ width: "100%" }}
        renderInput={(params) => <TextField {...params} label="กรุณาเลือก" size="small" />}
      />
    </>
  );
}
