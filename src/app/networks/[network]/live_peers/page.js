import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { toFirstLetterCapital } from "@/utils/format";
import { getNetworkDetails } from "@/utils/networks";
import Terminal from "@/components/Terminal";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";

const LivePeersPage = async ({ params }) => {
  const { network } = params;
  const networkDetails = await getNetworkDetails(network);
  const networkID = networkDetails["chain-id"];
  const peersCommands = [
    "curl -sS https://rpc.bitcanna-1.bitcanna.aviaone.com/net_info | jq -r '.result.peers[] | \"\\(.node_info.id)@\\(.remote_ip):(.node_info.listen_addr)\"' | awk -F ':' '{print $1\":\"$(NF)}'",
  ];
  const peersCommands2 = [
    'PEERS="ffb34ec27344e53ba8e2534b3f4f158b1d8da47e@198.244.228.17:38456,bad3d50edf4010901e9d31c2870d14729195a7d3@134.195.198.120:26656,935a9d809781aa4094dd806c2afed29a25ec8b8e@135.181.210.189:26656,d03e334f03eaeebfeb74e536509a980a252c7761@93.43.226.93:26656,48970472844c638389ba56bffd32b73d7b186de6@50.18.24.204:26656,d59cf2a8da6d2b682b24aaf0df387c7a0c898ee5@66.19.157.24:26656,d6aa4c9f3ccecb0cc52109a95962b4618d69dd3f@65.108.43.171:26656,35b0d76e165e5b6852665a5f234eb416b8e045a0@65.21.204.46:31656,a66bce0ddb49dcf60a5b83fd94a7bd4d0878f127@154.53.40.9:26656,97d009e876b32acd288ff6fd03d97f087b26d685@170.39.117.21:26656,ec4796daea06ecf0e51819b931fbcb3e1a99b137@144.91.101.49:26656,02bf6f8c8ee994d02dd2975b3943587360de961c@151.15.173.66:26656,c73f11f731e4a78df73123747d38bc3a9d4d036b@23.88.66.239:36656,c6658742ae4c889ecf8dee95ca2a8e4b45d46dfd@85.214.208.127:26656,32b1cf90be5dc6a01dc2684f0bd97bf052690082@144.91.97.191:26656,7c00beb4956bc40cd33ced6e2c2ffe07d4fa32e7@95.216.242.82:36656,751513c7cd42a2565c37ab482bbe66f4d92c2740@136.244.106.130:26656,64baf27b24d7f68862a35b8b6ddc4b5a7f907ebd@65.108.136.206:26656,cb0848b84987c37ba0fa465585c6b9d6cec6deab@65.108.77.98:26696,d9bfa29e0cf9c4ce0cc9c26d98e5d97228f93b0b@65.109.88.38:42656,da04ee3f8bd93421a3264e3a061a09c139aaa937@161.97.150.65:26656,5cfb82bd566ad3c5330c8326f0da5c7f048aca25@81.0.218.135:24356,23671067d0fd40aec523290585c7d8e91034a771@65.108.43.170:26656,28cfa3b6781abe352f4503d70b72266691eb1401@93.43.199.2:52656,b204222a9b6ca4eee39a836b7406483a5ad4e719@144.91.114.250:26656,a1c550359b30811ceeddd76fe7c1870a72730382@89.39.106.78:14656,fa725baa199c88bc8536da4d7b316ba36620f93b@173.215.85.171:20010"',
    'sed -i -e "s|^persistent_peers *=.*|persistent_peers = \\"$PEERS\\"|" $HOME/.bcna/config/config.toml',
  ];
  const textTheme = {
    fontSize: 21,
    color: "#666666",
  };

  return (
    <Box sx={{ marginTop: 10, mr: 2 }}>
      <Box sx={{ mb: 7 }}>
        <Typography align="center" variant="h4" sx={{ fontWeight: "bold" }}>
          {toFirstLetterCapital(network)} Live-Peers
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
        <Box sx={{ padding: 1 }}>
          <Typography sx={textTheme}>
            Get all fresh live peers available with the chain {networkID}
          </Typography>

          <Terminal commands={peersCommands} />
          <br />
          <Typography sx={textTheme}>
            Try these peers it should work !
          </Typography>
          <Terminal commands={peersCommands2} />
          <br />
        </Box>
      </Box>
    </Box>
  );
};

export default LivePeersPage;
