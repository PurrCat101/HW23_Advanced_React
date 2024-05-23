import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";

function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
          <Typography variant="h6" component="div">
            <Link href="/" color="inherit" underline="none">
              Logo
            </Link>
          </Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center", flexGrow: 1 }}>
          <Typography sx={{ ml: 1 }}>
            <Link href="/" color="inherit" underline="none" sx={{ mx: 2 }}>
              Home
            </Link>
          </Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "flex-end", flexGrow: 1 }}>
          <Typography sx={{ ml: 1 }}>
            <Link href="/Cart" color="inherit" underline="none" sx={{ mx: 2 }}>
              Cart
            </Link>
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
