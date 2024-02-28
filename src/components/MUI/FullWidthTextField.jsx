import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import PropTypes from "prop-types";

FullWidthTextField.propType = {
  labelName: PropTypes.string.isRequired,
  required: PropTypes.string.isRequired,
  setvalue: PropTypes.func.isRequired,
};

export default function FullWidthTextField(props) {
    const {value, labelName, required, setvalue, disabled}  = props
    const handleOnchange =(e)=>{
        setvalue(e.target.value)
    }
  return (
    <Box
      sx={{
        width: 500,
        maxWidth: "100%",
      }}
    >
      <label htmlFor="" className={`${required} fs-6 font-bold py-2`}>
        {labelName}
      </label>
      <TextField value={value} fullWidth id="fullWidth" size="small" onChange={(e)=>handleOnchange(e)} disabled={disabled}/>
    </Box>
  );
}
