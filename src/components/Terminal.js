import { Box, Typography } from "@mui/material";
import React from "react";

const Terminal = (props) => {
  const { commands, title } = props;
  return (
    <Box
      sx={{
        // display: "fixed",
        background: "#000",
        color: "#fff",
        fontFamily: "monospace",
        padding: "16px",
        borderRadius: "6px",
        width:{sm:600, md:800}
      }}
    >
      {commands.map((command) => (
        <>
          {command} <br />
        </>
      ))}
    </Box>
  );
};

export default Terminal;
