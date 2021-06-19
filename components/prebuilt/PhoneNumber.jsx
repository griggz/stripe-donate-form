import React, { forwardRef } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import translate from "../i18n/translate";

const useStyles = makeStyles((theme) => ({
  input: {
    backgroundColor: "#fff",
  },
}));

const PhoneInput = (props, ref) => {
  const classes = useStyles();

  return (
    <TextField
      {...props}
      InputProps={{
        className: classes.input,
      }}
      inputRef={ref}
      fullWidth
      size="small"
      label={translate("phone")}
      variant="outlined"
      name="phone"
    />
  );
};
export default forwardRef(PhoneInput);
