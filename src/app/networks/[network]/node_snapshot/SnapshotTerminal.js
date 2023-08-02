"use client";
import { Box, Typography, Tooltip, IconButton } from "@mui/material";
import React from "react";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { useState } from "react";

const SnapshotTerminal = (props) => {
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
        width: { sm: 600, md: 1000 },
        borderRadius: "6px",
        position: "relative",
      }}
    >
      <Tooltip title="Copy to Clipboard">
        <IconButton
          sx={{
            top: "5px",
            right: "5px",
            color: "white",
            position: "absolute",
          }}
          onClick={() => handleCopyToClipboard()}
        >
          {copied ? <CheckCircleOutlineIcon /> : <ContentCopyIcon />}
        </IconButton>
      </Tooltip>
      <Typography>sudo systemctl stop andromedad</Typography>
      <Typography>
        cp $HOME/.andromedad/data/priv_validator_state.json
        $HOME/.andromedad/priv_validator_state.json.backup
      </Typography>
      <Typography>
        rm -rf $HOME/.andromedad/data $HOME/.andromedad/wasm
      </Typography>
      <Typography>
        wget -c {SNAPSHOT_URL} -O - | tar -xz -C $HOME/.andromedad
      </Typography>
      <Typography>
        mv $HOME/.andromedad/priv_validator_state.json.backup
        $HOME/.andromedad/data/priv_validator_state.json
      </Typography>
      <Typography>
        sudo systemctl start andromedad && sudo journalctl -u andromedad -f
        --no-hostname -o cat
      </Typography>
    </Box>
  );
};

export default SnapshotTerminal;
