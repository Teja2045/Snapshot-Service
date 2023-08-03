"use client";
import { Box, Typography, Tooltip, IconButton, Stack } from "@mui/material";
import React from "react";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { useState } from "react";

const CheckTerminal = (props) => {
  const { SNAPSHOT_URL } = props;
  const [copied, setCopied] = useState(false);

  const handleCopyToClipboard = () => {
    const terminalText = document.querySelector(".terminal-box");
    if (terminalText) {
      const range = document.createRange();
      range.selectNode(terminalText);
      window.getSelection().removeAllRanges();
      window.getSelection().addRange(range);
      document.execCommand("copy");
      window.getSelection().removeAllRanges();
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 1000);
    }
  };

  return (
    <Box sx={{ position: "relative", width: { sm: 600, md: 1000 } }}>
      <Box
        className="terminal-box"
        sx={{
          border: "1px solid #ccc",
          backgroundColor: "#000",
          color: "#fff",
          fontFamily: "monospace",
          whiteSpace: "nowrap",
          overflowX: "auto",
          overflowY: "hidden",
          padding: "8px",
          borderRadius: "6px",
        }}
      >
        <Tooltip title="Copy to Clipboard">
          <IconButton
            sx={{
              top: "5px",
              right: "0px",
              color: "white",
              position: "absolute",
            }}
            size="small" // Set the size to "small" to decrease the button size
            onClick={() => handleCopyToClipboard()}
          >
            {copied ? (
              <CheckCircleOutlineIcon sx={{ fontSize: 20 }} />
            ) : (
              <ContentCopyIcon sx={{ fontSize: 20 }} />
            )}
          </IconButton>
        </Tooltip>

        <Typography>echo $LATEST_HEIGHT $BLOCK_HEIGHT $TRUST_HASH</Typography>
      </Box>
    </Box>
  );
};

export default CheckTerminal;
