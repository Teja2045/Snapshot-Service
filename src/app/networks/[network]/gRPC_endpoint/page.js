import { Box, Typography } from "@mui/material";
import React from "react";
import { toFirstLetterCapital } from "@/utils/format";
import { getNetworkDetails } from "@/utils/networks";

const gRPCEndpointPage = async ({ params }) => {
  const { network } = params;
  const networkDetails = await getNetworkDetails(network);
  const networkID = networkDetails["chain-id"];
  return (
    <Box sx={{ marginTop: 10, mr: 2 }}>
      <Box sx={{ mb: 7 }}>
        <Typography align="center" variant="h4" sx={{ fontWeight: "bold" }}>
          {toFirstLetterCapital(network)} gRPC-Endpoint
        </Typography>
        <Typography align="center">
          <span style={{ fontWeight: "bold" }}> Chain ID</span>: {networkID} |
          <span style={{ fontWeight: "bold" }}> Current Node Version</span>:
          v0.22.7
        </Typography>
      </Box>
    </Box>
  );
};

export default gRPCEndpointPage;
