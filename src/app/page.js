import { Box, Button, Grid, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { getNetworks } from "@/utils/networks";

export default async function Home() {
  const networksData = await getNetworks();
  return (
    <Box>
      <Typography
        align="center"
        sx={{
          mt: 10,
          fontSize: { xs: 30, md: 48 },
          fontFamily: "system-ui",
          fontWeight: 1000,
        }}
      >
        Trusted PoS Blockchain Validator
      </Typography>
      <Typography
        align="center"
        sx={{ mt: 2, color: "gray", fontFamily: "system-ui" }}
      >
        Vitwit Validators helps investors compound their crypto investments with
        low commission and advanced support
      </Typography>
      <Box
        id="supported-networks"
        sx={{ backgroundColor: "rgb(15 23 42)", padding: 6, mt:15 }}
      >
        <Typography
          align="center"
          sx={{
            fontSize: { xs: 22, md: 34 },
            color: "white",
            fontFamily: "system-ui",
            fontWeight: 1000,
            marginBottom: 4,
          }}
        >
          Supported Networks
        </Typography>
        <Grid container spacing={2}>
          {networksData.chains.map((chain, index) => (
            <Grid item xs={6} sm={3} key={index}>
              <Grid container direction="column" alignItems="center">
                <Grid item>
                  <Image
                    src={"/8ball.png"}
                    width={100}
                    height={100}
                    alt="Loading.."
                    style={{ border: "5px solid white", borderRadius: "50%" }}
                  ></Image>
                </Grid>

                <Grid item>
                  <Link href={`/networks/${chain["chain-name"]}`}>
                    <Typography
                      sx={{
                        color: "white",
                        "&:hover": {
                          color: "purple",
                        },
                      }}
                      align="center"
                    >
                      {chain["chain-name"].charAt(0).toUpperCase() +
                        chain["chain-name"].slice(1)}
                    </Typography>
                  </Link>
                </Grid>
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
