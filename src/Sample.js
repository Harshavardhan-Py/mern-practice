import React, { useState } from "react";
import "./App.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

function Calculator() {
  const [expression, setExpr] = useState("");
  const [error, setError] = useState(false);

  function isValidExpression(expr) {
    // Trim spaces
    expr = String(expr).trim();

    // ✅ Only allow digits, spaces, and + - * /
    const validChars = /^[0-9+\-*/\s]+$/;
    if (!validChars.test(expr)) {
      return false;
    }

    // ❌ Prevent two operators in a row (e.g. "5++2", "3*/2")
    const invalidSequence = /[+\-*/]{2,}/;
    if (invalidSequence.test(expr)) {
      return false;
    }

    // ❌ Prevent starting or ending with an operator (except minus for negative number at start)
    if (/^[*/+]/.test(expr) || /[+\-*/]$/.test(expr)) {
      return false;
    }

    // ✅ Try evaluating safely
    try {
      // eslint-disable-next-line no-eval
      const result = eval(expr);
      return typeof result === "number" && !isNaN(result);
    } catch {
      return false;
    }
  }

  const handleItemClick = (itemId) => {
    if (itemId == "C") {
      setExpr("");
      setError(false);
    } else if (itemId == "=") {
      if (isValidExpression(expression)) {
        setExpr(Function(`"use strict"; return (${expression})`)());
        setError(false);
      } else {
        setError(true);
      }
    } else {
      setExpr((expression) => expression + itemId);
      if (isValidExpression(expression)) {
        console.log(`Valid Expression`);
        setError(false);
      } else {
        setError(true);
      }
    }
    console.log(`Item ${itemId} clicked!`);
    console.log(expression);
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
            error={error}
            variant="outlined"
            onChange={(e) => setExpr(e.target.value)}
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
