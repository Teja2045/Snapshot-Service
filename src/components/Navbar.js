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
          <Link href={"/"}>
            <Image
              src="/vitwit-logo.png"
              width={150}
              height={40}
              alt="app-logo"
            ></Image>
          </Link>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
