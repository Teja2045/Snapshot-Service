export const getButtonsArray = (network) => {
  return [
    {
      title: "State-Sync",
      link: `/networks/${network?.["chain-name"]}/state_sync`,
    },
    {
      title: "Node Snapshot",
      link: `/networks/${network?.["chain-name"]}/node_snapshot`,
    },
    {
      title: "Live Peers",
      link: `/networks/${network?.["chain-name"]}/live_peers`,
    },
    {
      title: "Seed Node",
      link: `/networks/${network?.["chain-name"]}/seed_node`,
    },
    {
      title: "Addrbook File",
      link: `/networks/${network?.["chain-name"]}/addrbook_file`,
    },
    {
      title: "Genesis File",
      link: `/networks/${network?.["chain-name"]}/genesis_file`,
    },
    {
      title: "RPC Endpoint",
      link: `/networks/${network?.["chain-name"]}/rpc_endpoint`,
    },
    {
      title: "API Endpoint",
      link: `/networks/${network?.["chain-name"]}/api_endpoint`,
    },
    {
      title: "gRPC Endpoint",
      link: `/networks/${network?.["chain-name"]}/gRPC_endpoint`,
    },
    {
      title: "Governance Partition*",
      link: `/networks/${network?.["chain-name"]}/governance_participation`,
    },
  ];
};
