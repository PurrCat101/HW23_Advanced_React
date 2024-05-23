import {
  Container,
  Typography,
  Grid,
  Card,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  FormControl,
  RadioGroup,
  Radio,
  Select,
  MenuItem,
  InputLabel,
  FormGroup,
  Divider,
} from "@mui/material";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function CheckoutPage() {
  return (
    <>
      <Navbar />
      <Container sx={{ padding: "20px" }}>
        <main>
          <Typography variant="h4" sx={{ marginBottom: "10px" }}>
            Checkout form
          </Typography>
          <Grid container spacing={5}>
            <Grid
              item
              xs={12}
              md={7}
              lg={8}
              sx={{ order: { xs: "last", md: "first" } }}
            >
              <Typography variant="h5" gutterBottom>
                Billing address
              </Typography>
              <FormControl component="form" noValidate>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      id="firstName"
                      label="First name"
                      variant="outlined"
                      fullWidth
                      required
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      id="lastName"
                      label="Last name"
                      variant="outlined"
                      fullWidth
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      id="username"
                      label="Username"
                      variant="outlined"
                      fullWidth
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      id="email"
                      label="Email (Optional)"
                      variant="outlined"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      id="address"
                      label="Address"
                      variant="outlined"
                      fullWidth
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      id="address2"
                      label="Address 2 (Optional)"
                      variant="outlined"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} sm={5}>
                    <FormControl fullWidth required>
                      <InputLabel id="country-label">Country</InputLabel>
                      <Select id="country" labelId="country-label">
                        <MenuItem value="">Choose...</MenuItem>
                        <MenuItem value="United States">United States</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <FormControl fullWidth required>
                      <InputLabel id="state-label">State</InputLabel>
                      <Select id="state" labelId="state-label">
                        <MenuItem value="">Choose...</MenuItem>
                        <MenuItem value="California">California</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={3}>
                    <TextField
                      id="zip"
                      label="Zip"
                      variant="outlined"
                      fullWidth
                      required
                    />
                  </Grid>
                </Grid>
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox id="same-address" />}
                    label="Shipping address is the same as my billing address"
                  />
                  <FormControlLabel
                    control={<Checkbox id="save-info" />}
                    label="Save this information for next time"
                  />
                </FormGroup>
              </FormControl>
              <FormControl component="form" noValidate>
                <Typography variant="h5" gutterBottom>
                  Payment
                </Typography>
                <RadioGroup name="paymentMethod" defaultValue="credit">
                  <FormControlLabel
                    value="credit"
                    control={<Radio />}
                    label="Credit card"
                  />
                  <FormControlLabel
                    value="debit"
                    control={<Radio />}
                    label="Debit card"
                  />
                  <FormControlLabel
                    value="paypal"
                    control={<Radio />}
                    label="PayPal"
                  />
                </RadioGroup>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <TextField
                      id="cc-name"
                      label="Name on card"
                      variant="outlined"
                      fullWidth
                      required
                    />
                    <Typography variant="body2">
                      Full name as displayed on card
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      id="cc-number"
                      label="Credit card number"
                      variant="outlined"
                      fullWidth
                      required
                    />
                  </Grid>
                  <Grid item xs={12} md={3}>
                    <TextField
                      id="cc-expiration"
                      label="Expiration"
                      variant="outlined"
                      fullWidth
                      required
                    />
                  </Grid>
                  <Grid item xs={12} md={3}>
                    <TextField
                      id="cc-cvv"
                      label="CVV"
                      variant="outlined"
                      fullWidth
                      required
                    />
                  </Grid>
                </Grid>
              </FormControl>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                size="large"
                sx={{ marginTop: "20px" }}
              >
                Continue to checkout
              </Button>
            </Grid>
            <Grid item xs={12} md={5} lg={4}>
              <Typography variant="h5" gutterBottom>
                Your cart
              </Typography>
              <Divider />
              <ul style={{ listStyle: "none", padding: 0 }}>
                <li style={{ marginBottom: "10px" }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Typography variant="h6" component="h6">
                      Item-1
                    </Typography>
                    <Typography variant="body2">$12</Typography>
                  </div>
                  <Typography variant="body2">Brief description</Typography>
                </li>
                <li style={{ marginBottom: "10px" }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Typography variant="h6" component="h6">
                      Item-2
                    </Typography>
                    <Typography variant="body2">$8</Typography>
                  </div>
                  <Typography variant="body2">Brief description</Typography>
                </li>
                <li style={{ marginBottom: "10px" }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Typography variant="h6" component="h6">
                      Item-3
                    </Typography>
                    <Typography variant="body2">$5</Typography>
                  </div>
                  <Typography variant="body2">Brief description</Typography>
                </li>
                <Divider />
                <li style={{ marginBottom: "10px" }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Typography variant="h6" component="h6">
                      Promo code
                    </Typography>
                    <Typography variant="body2">−$5</Typography>
                  </div>
                  <Typography variant="body2">EXAMPLECODE</Typography>
                </li>
                <Divider />
                <li
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginTop: "10px",
                  }}
                >
                  <Typography>Total (USD)</Typography>
                  <Typography>
                    <strong>$20</strong>
                  </Typography>
                </li>
              </ul>
              <Card sx={{ marginTop: "20px", padding: "20px" }}>
                <FormControl fullWidth>
                  <TextField
                    id="promo-code"
                    label="Promo code"
                    type="text"
                    variant="outlined"
                  />
                  <Button
                    variant="contained"
                    color="primary"
                    sx={{ marginTop: "20px" }}
                  >
                    Redeem
                  </Button>
                </FormControl>
              </Card>
            </Grid>
          </Grid>
        </main>
      </Container>
      <Footer />
    </>
  );
}

export default CheckoutPage;
