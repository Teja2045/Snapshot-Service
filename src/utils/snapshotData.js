export const configurations = {
  "app.toml": ["# Prune Type","pruning = \"custom\"","","# Prune Strategy","pruning-keep-recent = \"100\"","pruning-keep-every = \"0\""],
  "config.toml": ["indexer = \"null\""],
};

export const processingSnapshot = {
    "Install lz4 if needed " : ["sudo apt update","sudo apt install snapd -y","sudo snap install lz4"],
    "Download the snapshot " : ["wget -O akash_12086229.tar.lz4 https://snapshots.polkachu.com/snapshots/akash/akash_12086229.tar.lz4 --inet4-only"],
    "Stop your node " : ["sudo service akash stop"],
}
