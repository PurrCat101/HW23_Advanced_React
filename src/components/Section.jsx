import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

function Section() {
  return (
    <>
      <Container
        maxWidth="sm"
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Typography variant="h4" sx={{ textAlign: "center", margin: 2 }}>
          Welcome to Shop
        </Typography>
        <Typography
          variant="body1"
          sx={{ textAlign: "center", marginBottom: 4 }}
        >
          Welcome to our online shop! Explore a world of endless possibilities
          where you can find everything you need and more. Whether you are
          looking for the latest trends or timeless classics, we have it all.
          Get ready to embark on a journey of style, convenience, and unbeatable
          value. Happy shopping!
        </Typography>
      </Container>
    </>
  );
}

export default Section;
