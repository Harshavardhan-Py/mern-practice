import React, { useState } from "react";
import "./App.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

function Calculator() {
  const [expression, setExpr] = useState("");
  const [error, setError] = useState("");

  function isValidExpression(expr) {
    // Trim spaces
    expr = String(expr).trim();

    // ✅ Only allow digits, spaces, and + - * /
    const validChars = /^[0-9+\-*/\s]+$/;
    if (!validChars.test(expr)) {
      setError("Invalid Expression...!");
      return false;
    }

    // ❌ Prevent two operators in a row (e.g. "5++2", "3*/2")
    const invalidSequence = /[+\-*/]{2,}/;
    if (invalidSequence.test(expr)) {
      setError("Invalid Expression...!");
      return false;
    }

    // ❌ Prevent starting or ending with an operator (except minus for negative number at start)
    if (/^[*/+]/.test(expr) || /[+\-*/]$/.test(expr)) {
      setError("Invalid Expression...!");
      return false;
    }

    // ✅ Try evaluating safely
    try {
      // eslint-disable-next-line no-eval
      const result = eval(expr);
      if (typeof result === "number" && !isNaN(result)) {
        setError("");
        return true;
      }
    } catch {
      setError("Invalid Expression...!");
      return false;
    }
  }

  const handleItemClick = (itemId) => {
    if (itemId == "C") {
      setExpr("");
    } else if (itemId == "=") {
      setExpr(Function(`"use strict"; return (${expression})`)());
    } else {
      // setExpr((expression) => expression + itemId);
      setExpr((expression) => {
        const newValue = expression + itemId; // example: append a digit
        if (isValidExpression(newValue)) {
          setError("");
        } else {
          setError("Invalid Expression...!");
        }
        return newValue;
      });
    }

    // const newValue = expression;
    // console.log(newValue);
    // isValidExpression(newValue);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setExpr(value);
    isValidExpression(value); // ✅ always validate current value
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center", // Centers horizontally
        alignItems: "center", // Centers vertically
        minHeight: "100vh", // Example: Center within half the viewport height
      }}
    >
      <div className="flex-container">
        <div>
          <TextField
            id="outlined-basic"
            label="Expression"
            type="text"
            value={expression}
            helperText={error}
            error={Boolean(error)}
            variant="outlined"
            onChange={handleChange}
            InputLabelProps={{ shrink: true }}
            sx={{ width: 340 }}
          />
        </div>
        <div>
          <Grid container spacing={2} padding={2}>
            <Grid item size={{ xs: 9, sm: 6, md: 3 }}>
              <Button
                value="7"
                variant="contained"
                onClick={(event) => handleItemClick(event.target.value)}
                fullWidth
                sx={{ p: 2 }}
              >
                7
              </Button>
            </Grid>
            <Grid item size={{ xs: 9, sm: 6, md: 3 }}>
              <Button
                value="8"
                variant="contained"
                onClick={(event) => handleItemClick(event.target.value)}
                fullWidth
                sx={{ p: 2 }}
              >
                8
              </Button>
            </Grid>
            <Grid item size={{ xs: 9, sm: 6, md: 3 }}>
              <Button
                value="9"
                variant="contained"
                onClick={(event) => handleItemClick(event.target.value)}
                fullWidth
                sx={{ p: 2 }}
              >
                9
              </Button>
            </Grid>
            <Grid item size={{ xs: 9, sm: 6, md: 3 }}>
              <Button
                value="+"
                variant="contained"
                onClick={(event) => handleItemClick(event.target.value)}
                fullWidth
                sx={{ p: 2 }}
              >
                +
              </Button>
            </Grid>
          </Grid>
        </div>
        <div>
          <Grid container spacing={2} padding={2}>
            <Grid item size={{ xs: 9, sm: 6, md: 3 }}>
              <Button
                value="4"
                variant="contained"
                onClick={(event) => handleItemClick(event.target.value)}
                fullWidth
                sx={{ p: 2 }}
              >
                4
              </Button>
            </Grid>
            <Grid item size={{ xs: 9, sm: 6, md: 3 }}>
              <Button
                value="5"
                variant="contained"
                onClick={(event) => handleItemClick(event.target.value)}
                fullWidth
                sx={{ p: 2 }}
              >
                5
              </Button>
            </Grid>
            <Grid item size={{ xs: 9, sm: 6, md: 3 }}>
              <Button
                value="6"
                variant="contained"
                onClick={(event) => handleItemClick(event.target.value)}
                fullWidth
                sx={{ p: 2 }}
              >
                6
              </Button>
            </Grid>
            <Grid item size={{ xs: 9, sm: 6, md: 3 }}>
              <Button
                value="-"
                variant="contained"
                onClick={(event) => handleItemClick(event.target.value)}
                fullWidth
                sx={{ p: 2 }}
              >
                -
              </Button>
            </Grid>
          </Grid>
        </div>
        <div>
          <Grid container spacing={2} padding={2}>
            <Grid item size={{ xs: 9, sm: 6, md: 3 }}>
              <Button
                value="1"
                variant="contained"
                onClick={(event) => handleItemClick(event.target.value)}
                fullWidth
                sx={{ p: 2 }}
              >
                1
              </Button>
            </Grid>
            <Grid item size={{ xs: 9, sm: 6, md: 3 }}>
              <Button
                value="2"
                variant="contained"
                onClick={(event) => handleItemClick(event.target.value)}
                fullWidth
                sx={{ p: 2 }}
              >
                2
              </Button>
            </Grid>
            <Grid item size={{ xs: 9, sm: 6, md: 3 }}>
              <Button
                value="3"
                variant="contained"
                onClick={(event) => handleItemClick(event.target.value)}
                fullWidth
                sx={{ p: 2 }}
              >
                3
              </Button>
            </Grid>
            <Grid item size={{ xs: 9, sm: 6, md: 3 }}>
              <Button
                value="*"
                variant="contained"
                onClick={(event) => handleItemClick(event.target.value)}
                fullWidth
                sx={{ p: 2 }}
              >
                x
              </Button>
            </Grid>
          </Grid>
        </div>
        <div>
          <Grid container spacing={2} padding={2}>
            <Grid item size={{ xs: 9, sm: 6, md: 3 }}>
              <Button
                value="C"
                variant="contained"
                onClick={(event) => handleItemClick(event.target.value)}
                fullWidth
                sx={{ p: 2 }}
              >
                C
              </Button>
            </Grid>
            <Grid item size={{ xs: 9, sm: 6, md: 3 }}>
              <Button
                value="0"
                variant="contained"
                onClick={(event) => handleItemClick(event.target.value)}
                fullWidth
                sx={{ p: 2 }}
              >
                0
              </Button>
            </Grid>
            <Grid item size={{ xs: 9, sm: 6, md: 3 }}>
              <Button
                value="="
                variant="contained"
                onClick={(event) => handleItemClick(event.target.value)}
                fullWidth
                sx={{ p: 2 }}
              >
                =
              </Button>
            </Grid>
            <Grid item size={{ xs: 9, sm: 6, md: 3 }}>
              <Button
                value="/"
                variant="contained"
                onClick={(event) => handleItemClick(event.target.value)}
                fullWidth
                sx={{ p: 2 }}
              >
                /
              </Button>
            </Grid>
          </Grid>
        </div>
      </div>
    </Box>
  );
}

export default Calculator;
