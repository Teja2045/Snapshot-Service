"use-client"

import {
  Box,
  Table,
  TableBody,
  TableHead,
  TableCell,
  Typography,
  TableRow,
  Button,
} from "@mui/material";
import React from "react";
import { toFirstLetterCapital } from "@/utils/format";
import {
  configurations,
  processingSnapshot,
} from "../../../../utils/snapshotData";
import Terminal from "@/components/Terminal";
import { getSnapshotURL } from "@/utils/networks";
import Link from "next/link";

const SnapshotPage = ({ params }) => {
  const { network } = params;
  console.log("snap", params);
  const SNAPSHOT_URL = getSnapshotURL(network);
  return (
    <Box sx={{ marginTop: 10, mr: 2 }}>
      <Box sx={{ mb: 7 }}>
        <Typography align="center" variant="h4" sx={{ fontWeight: "bold" }}>
          {toFirstLetterCapital(network)} Node Snapshot
        </Typography>
        <Typography align="center">
          <span style={{ fontWeight: "bold" }}> Chain ID</span>: akashnet-2 |
          <span style={{ fontWeight: "bold" }}> Current Node Version</span>:
          v0.22.7
        </Typography>
        <Box>
          <Table sx={{ml:5, mr:5}}>
            <TableHead>
              <TableRow sx={{backgroundColor:'#f1f5f9'}}>
                <TableCell>LATEST</TableCell>
                <TableCell>BLOCK HEIGHT</TableCell>
                <TableCell>SIZE</TableCell>
                <TableCell>TIMESTAMP</TableCell>
                <TableCell>DOWNLOAD</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
              <TableCell>...?</TableCell>
              <TableCell>...?</TableCell>
              <TableCell>...?</TableCell>
              <TableCell>...?</TableCell>
              <TableCell><Button href={SNAPSHOT_URL}>{SNAPSHOT_URL}</Button></TableCell>
              </TableRow>
              
            </TableBody>
          </Table>
        </Box>
      </Box>

      <Box sx={{ ml: 6 }}>
        <Box sx={{ mb: 10 }}>
          <Typography
            sx={{ fontWeight: "bold", fontFamily: "system-ui", mb: 3 }}
            variant="h4"
          >
            Our {toFirstLetterCapital(network)} Snapshot Server Setup
          </Typography>

          <Typography sx={{ mb: 5 }}>
            We take a node snapshot every day. We then delete all the previous
            snapshots to free up the space on the file server. The snapshot is
            designed for node opeartors to run an efficient validator service on
            Akash chain. To make the snapshot as small as possible while still
            viable as a validator, we use the following setting to save on the
            disk space. We suggest you make the same adjustment on your node
            too. Please notice that your node will have very limited
            functionality beyond signing blocks with the efficient disk space
            utilization. For example, your node will not be able to serve as a
            RPC endpoint (which is not suggested to run on a validator node
            anyway). Since we periodically state-sync our snapshot nodes, you
            might notice that sometimes the size of our snapshot is surprisingly
            small.
          </Typography>

          {Object.keys(configurations).map((configuration) => (
            <Box key={configuration} sx={{ mb: 5 }}>
              <Typography variant="h5" sx={{ mb: 1 }}>
                {configuration}
              </Typography>
              <Terminal
                title={configuration}
                commands={configurations[configuration]}
              ></Terminal>
            </Box>
          ))}
        </Box>
        <Typography
          variant="h4"
          sx={{ mb: 4, fontFamily: "system-ui", fontWeight: "bold" }}
        >
          {" "}
          How To Process {toFirstLetterCapital(network)} Snapshot
        </Typography>
        <Box sx={{ mb: 3 }}>
          {Object.keys(processingSnapshot).map((step) => (
            <Box key={step} sx={{ mb: 5 }}>
              <Typography variant="h5" sx={{ mb: 1 }}>
                {step}
              </Typography>
              <Terminal commands={processingSnapshot[step]}></Terminal>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default SnapshotPage;
