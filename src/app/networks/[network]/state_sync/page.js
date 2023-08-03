import { Box, Typography, Stack } from "@mui/material";
import React from "react";
import { toFirstLetterCapital } from "@/utils/format";
import { getNetworkDetails } from "@/utils/networks";
import CleanTerminal from "./CleanTerminal";
import StartTerminal from "./StartTerminal";
import CheckTerminal from "./CheckTerminal";
import ConfigTerminal from "./ConfigTerminal";
import ResetTerminal from "./ResetTerminal";
import RestartTerminal from "./RestartTerminal";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";

const StateSyncPage = async ({ params }) => {
  const { network } = params;
  const networkDetails = await getNetworkDetails(network);
  const networkID = networkDetails["chain-id"];
  const textTheme = {
    fontSize: 21,
    color: "#666666",
  };
  return (
    <Box sx={{ marginTop: 10, mr: 2 }}>
      <Box sx={{ mb: 7 }}>
        <Typography align="center" variant="h4" sx={{ fontWeight: "bold" }}>
          {toFirstLetterCapital(network)} State-Sync
        </Typography>
        <Typography align="center">
          <span style={{ fontWeight: "bold" }}> Chain ID</span>: {networkID} |
          <span style={{ fontWeight: "bold" }}> Current Node Version</span>:
          v0.22.7
        </Typography>
      </Box>
      <Box sx={{ ml: { xs: 3, md: 6 }, mt: 10, mb: { xs: 4, md: 10 } }}>
        <Typography sx={{ color: "red", fontWeight: 700, mb: 3 }}>
          Please be sure to use the latest binary version:
        </Typography>
        <Stack direction={"row"} sx={{ mb: 1 }}>
          <TipsAndUpdatesIcon sx={{ mr: 1 }} />
          <Typography sx={{ mb: 1 }}>
            The best way is just copy and past this code below in your terminal
            and that's it ! Your snapshot will be done.
          </Typography>
        </Stack>
        <Box sx={{ padding: 1 }}>
          <Typography sx={textTheme}>
            Optional to clean your previous State Sync
          </Typography>
          <Typography sx={textTheme}>
            Recommanded when you already get Sync to avoid trouble when you will
            restart your node next time.
          </Typography>
          <CleanTerminal />
          <br />
          <Typography sx={textTheme}>
            Start here the process for State Sync
          </Typography>
          <StartTerminal />
          <br />
          <Typography sx={textTheme}>
            Check if you get a positive return
          </Typography>
          <CheckTerminal />
          <br />
          <Typography sx={textTheme}>Copy and paste !</Typography>
          <ConfigTerminal />
          <br />
          <Typography sx={textTheme}>Reset all data</Typography>
          <ResetTerminal />
          <br />
          <Typography sx={textTheme}>
            Now we must restart the node Bitcanna to initiate synchronization
            with the chain bitcanna-1
          </Typography>
          <RestartTerminal />
        </Box>
      </Box>
    </Box>
  );
};

export default StateSyncPage;
