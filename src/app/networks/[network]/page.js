import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { getNetworkDetails, getNetworks } from "@/utils/networks";
import { getButtonsArray } from "@/utils/networkButtons";

const NetworkPage = async ({ params }) => {
  const network = await getNetworkDetails(params.network);
  const buttonsArray = getButtonsArray(network);
  const networkName = params.network;
  return (
    <Box>
      <Box
        marginLeft={{ xs: 10, md: 30, lg: 44 }}
        marginRight={{ xs: 10, md: 30, lg: 44 }}
      >
        <Box display="flex" justifyContent="center" sx={{ marginTop: 5 }}>
          <Box textAlign="center">
            <Image src="/8ball.png" width={80} height={80} alt="Loading.." />
            <Typography
              variant="h5"
              sx={{ marginTop: 5, fontSize: 26, fontWeight: 1000 }}
            >
              {networkName.charAt(0).toUpperCase() + networkName.slice(1)}
            </Typography>
          </Box>
        </Box>
        <Box>
          <Box sx={{ marginTop: 7, mb: 10 }}>
            <Typography sx={{ mt: 2 }}>
              <span style={{ fontWeight: "bold" }}>Network Type:</span> Mainnet
            </Typography>
            <Typography sx={{ mt: 2 }}>
              <span style={{ fontWeight: "bold" }}>Chain ID:</span>{" "}
              {network["chain-id"]}
            </Typography>
            <Typography sx={{ mt: 2 }}>
              <span style={{ fontWeight: "bold" }}>Current Node Version: </span>{" "}
              v1.0.0
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box margin={{ xs: 3, md: 9 }} sx={{ marginTop: 12 }}>
        <Box>
          <Typography variant="h4" fontWeight="bold" textAlign="center">
            Community Tools & Services
          </Typography>
        </Box>
        <Box display="flex" marginTop={5}>
          <Grid container spacing={5}>
            {buttonsArray.map((buttonDetails, index) => (
              <Grid key={index} item xs={6} md={3} justifyContent="center">
                <Link
                  href={buttonDetails.link}
                  style={{ textDecoration: "none" }}
                >
                  <Paper
                    elevation={0}
                    sx={{
                      backgroundColor: "white",
                      paddingLeft: { xs: 1, md: 4 },
                      paddingRight: { xs: 1, md: 4 },
                      paddingTop: { xs: 1, md: 3 },
                      paddingBottom: { xs: 1, md: 3 },
                      minWidth: "150px",
                      minHeight: "60px",
                      "&:hover": {
                        backgroundColor: "purple",
                      },
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Typography fontSize={{ xs: 16, md: 24 }}>
                      {buttonDetails.title}
                    </Typography>
                  </Paper>
                </Link>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export async function generateMetadata({ params }) {
  return {
    title: params.network,
    description: "network details",
  };
}

export async function generateStaticParams() {
  const networksData = await getNetworks();
  return networksData.chains.map((network) => ({
    network: network["chain-name"].toString(),
  }));
}

export default NetworkPage;
