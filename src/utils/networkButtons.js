export const getButtonsArray = (network) => {
  return [
    {
      title: "State-Sync",
      link: "",
    },
    {
      title: "Node Snapshot",
      link: `/networks/${network?.["chain-name"]}/node_snapshot`,
    },
    {
      title: "Live Peers",
      link: "",
    },
    {
      title: "Seed Node",
      link: "",
    },
    {
      title: "Addrbook File",
      link: "",
    },
    {
      title: "Genesis File",
      link: "",
    },
    {
      title: "RPC Endpoint",
      link: network?.["rpc"] || "",
    },
    {
      title: "API Endpoint",
      link: network?.["api"] || "",
    },
    {
      title: "gRPC Endpoint",
      link: "",
    },
    {
      title: "Governance Partition*",
      link: `/networks/${network?.["chain-name"]}/governance_participation`,
    },
  ];
};
