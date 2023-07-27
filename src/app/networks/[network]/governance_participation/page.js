import { Typography } from "@mui/material";
import React from "react";
import { toFirstLetterCapital } from "@/utils/format";
import { getNetworkDetails } from "@/utils/networks";

const GovernanceParticipationPage = async ({ params }) => {
  const { network } = params;
  const networkDetails = await getNetworkDetails(network);
  const networkID = networkDetails["chain-id"];
  return (
    <div>
      <Typography variant="h3" align="center" sx={{ mt: 10 }}>
        {" "}
        Coming soon...
      </Typography>
    </div>
  );
};

export default GovernanceParticipationPage;
