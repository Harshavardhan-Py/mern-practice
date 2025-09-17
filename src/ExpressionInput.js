import React, { useState } from "react";
import TextField from "@mui/material/TextField";

export default function ExpressionInput() {
  const [expression, setExpression] = useState("");
  const [error, setError] = useState("");

  const validateExpression = (value) => {
    try {
      // simple validation: only allow numbers and + - * /
      if (!/^[0-9+\-*/() ]*$/.test(value)) {
        throw new Error("Invalid characters");
      }
      // try evaluating safely
      // eslint-disable-next-line no-new-func
      new Function(`return (${value})`);
      setError(""); // ✅ reset error if valid
    } catch {
      setError("Invalid expression");
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setExpression(value);
    validateExpression(value); // ✅ always validate current value
  };

  return (
    <TextField
      label="Math Expression"
      value={expression}
      onChange={handleChange}
      error={Boolean(error)}
      helperText={error}
      fullWidth
    />
  );
}
