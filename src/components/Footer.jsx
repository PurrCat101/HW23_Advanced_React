import { Box, Typography, Container, Link } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";

function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: "#f5f5f5", py: 4 }}>
      <Container maxWidth="md">
        <Typography variant="body2" color="text.secondary" align="center">
          © {new Date().getFullYear()} Company. Inc.
        </Typography>

        <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
          <Link href="#" color="inherit" sx={{ mx: 1 }}>
            <TwitterIcon />
          </Link>
          <Link href="#" color="inherit" sx={{ mx: 1 }}>
            <FacebookIcon />
          </Link>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
