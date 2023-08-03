import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { toFirstLetterCapital } from "@/utils/format";
import { getNetworkDetails } from "@/utils/networks";
import Terminal from "@/components/Terminal";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";

const AddressBookPage = async ({ params }) => {
  const { network } = params;
  const networkDetails = await getNetworkDetails(network);
  const addrsBookURL = networkDetails["addr-book-url"];
  const addrsBookCommands = [
    `curl -Ls ${addrsBookURL} > $HOME/.bcna/config/addrbook.json`,
  ];
  const networkID = networkDetails["chain-id"];
  return (
    <Box sx={{ marginTop: 10, mr: 2 }}>
      <Box sx={{ mb: 7 }}>
        <Typography align="center" variant="h4" sx={{ fontWeight: "bold" }}>
          {toFirstLetterCapital(network)} Addrbook
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
            and that's it !
          </Typography>
        </Stack>
        <Terminal commands={addrsBookCommands} />
      </Box>
    </Box>
  );
};

export default AddressBookPage;
