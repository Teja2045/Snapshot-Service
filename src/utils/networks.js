const NETWORKS_API = "https://snapshot.witval.com/chains-info/latest.json";

export const getNetworks = async () => {
  const res = await fetch(NETWORKS_API);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};

export const getNetworkDetails = async (network) => {
  const networksData = await getNetworks();
  const networks = networksData.chains;
  for (let i = 0; i < networks.length; i++) {
    if (networks[i]["chain-name"] === network) {
      return networks[i];
    }
  }
  return null;
};
