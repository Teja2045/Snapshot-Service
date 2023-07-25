import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link
            href="/"
            style={{
              textDecoration: "none",
              fontWeight: 500,
              fontSize: 25,
              letterSpacing: ".1rem",
              color: "white",
              "&:hover": {
                color: "pink",
                fontSize: 26,
              },
            }}
          >
            Home
          </Link>
          <Image
            src="/vitwit-logo.png"
            width={150}
            height={40}
            alt="app-logo"
            style={{ marginLeft: "auto" }}
          ></Image>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
