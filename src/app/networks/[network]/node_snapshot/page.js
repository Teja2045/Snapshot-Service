import {
  Box,
  Table,
  TableBody,
  TableHead,
  TableCell,
  Typography,
  TableRow,
} from "@mui/material";

import React from "react";
import { toFirstLetterCapital } from "@/utils/format";
import { getNetworkDetails } from "@/utils/networks";
import Link from "next/link";
import Terminal from "@/app/networks/[network]/node_snapshot/SnapshotTerminal";

const SnapshotPage = async ({ params }) => {
  const { network } = params;
  const networkDetails = await getNetworkDetails(network);
  const networkID = networkDetails["chain-id"];
  const SNAPSHOT_URL = networkDetails["snapshot-url"];

  const blockHeight = networkDetails["height"];
  return (
    <Box sx={{ marginTop: 10, mr: 2 }}>
      <Box sx={{ mb: 7 }}>
        <Typography align="center" variant="h4" sx={{ fontWeight: "bold" }}>
          {toFirstLetterCapital(network)} Node Snapshot
        </Typography>
        <Typography align="center">
          <span style={{ fontWeight: "bold" }}> Chain ID</span>: {networkID} |
          <span style={{ fontWeight: "bold" }}> Current Node Version</span>:
          v0.22.7
        </Typography>
        <Box sx={{ overflowX: "auto" }}>
          <Table sx={{ width: "80%" }} align="center">
            <TableHead>
              <TableRow sx={{ backgroundColor: "#f1f5f9" }}>
                <TableCell width="20%">LATEST</TableCell>
                <TableCell width="20%">BLOCK HEIGHT</TableCell>
                <TableCell width="20%">SIZE</TableCell>
                <TableCell width="20%">TIMESTAMP</TableCell>
                <TableCell width="20%">DOWNLOAD</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>...?</TableCell>
                <TableCell>{blockHeight}</TableCell>
                <TableCell>...?</TableCell>
                <TableCell>...?</TableCell>
                <TableCell>
                  <Link href={SNAPSHOT_URL}>{SNAPSHOT_URL}</Link>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Box>
      </Box>

      <Box sx={{ ml: 6, mt: 10, mb: 10 }}>
        <Typography variant="h5" sx={{ color: "red", mb: 5 }}>
          Please be sure to use the latest binary version.
        </Typography>
        <Typography sx={{ mb: 1 }}>
          The best way is just copy and past this code below in your terminal
          and that's it ! Your snapshot will be done.
        </Typography>
        <Terminal SNAPSHOT_URL={SNAPSHOT_URL} />
      </Box>
    </Box>
  );
};

export default SnapshotPage;
