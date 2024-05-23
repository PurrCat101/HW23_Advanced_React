import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  Container,
  Grid,
  Typography,
  Box,
  Button,
  Divider,
  TextField,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemText,
  Rating,
} from "@mui/material";

function ProductDetail() {
  return (
    <>
      <Navbar />
      <Container sx={{ mt: 4 }}>
        <Grid container spacing={4}>
          {/* Product Image */}
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src="https://via.placeholder.com/400"
              alt="Product"
              sx={{ width: "100%", borderRadius: 2 }}
            />
          </Grid>

          {/* Product Details */}
          <Grid item xs={12} md={6}>
            <Typography variant="h4" gutterBottom>
              Product Name
            </Typography>
            <Typography variant="body1" paragraph>
              Product description goes here. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Nullam interdum augue at ullamcorper
              aliquet.
            </Typography>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Price: $199
            </Typography>
            <Box my={2}>
              <TextField
                id="quantity"
                label="Quantity"
                type="number"
                defaultValue={1}
                InputProps={{ inputProps: { min: 1 } }}
                sx={{ width: "100px", marginRight: "10px" }}
              />
              <Button variant="contained" color="primary">
                Add to Cart
              </Button>
            </Box>
            <Divider sx={{ my: 2 }} />
            <Typography variant="h6" gutterBottom>
              Specifications
            </Typography>
            <List>
              <ListItem>
                <ListItemText primary="Display" secondary="6.1 inches" />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Resolution"
                  secondary="1920 x 2400 pixels"
                />
              </ListItem>
              <ListItem>
                <ListItemText primary="Processor" secondary="Snapdragon 888" />
              </ListItem>
              <ListItem>
                <ListItemText primary="RAM" secondary="8GB" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Battery" secondary="4000mAh" />
              </ListItem>
            </List>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4 }} />

        {/* Rating Section */}
        <Box>
          <Typography variant="h6" gutterBottom>
            Rate this Product
          </Typography>
          <Rating name="product-rating" defaultValue={4} precision={1} />
          <Box mt={2}>
            <Button variant="contained" color="primary">
              Submit Rating
            </Button>
          </Box>
        </Box>

        <Divider sx={{ my: 4 }} />

        {/* Reviews Section */}
        <Card>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Reviews
            </Typography>
            <List>
              <ListItem>
                <ListItemText
                  primary="John Doe"
                  secondary="Great product! I love the design and the features. Highly recommended!"
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Jane Smith"
                  secondary="Amazing value for the price. It has exceeded my expectations. Will buy again!"
                />
              </ListItem>
            </List>
          </CardContent>
        </Card>
      </Container>
      <Footer />
    </>
  );
}

export default ProductDetail;
