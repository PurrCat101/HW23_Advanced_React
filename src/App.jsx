import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Section from "./components/Section";
import ProductCard from "./components/Card";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

function App() {
  const products = [
    {
      id: 1,
      title: "Product 1",
      description: "Description of Product 1",
      price: 10.99,
    },
    {
      id: 2,
      title: "Product 2",
      description: "Description of Product 2",
      price: 15.99,
    },
    {
      id: 3,
      title: "Product 3",
      description: "Description of Product 3",
      price: 20.99,
    },
    {
      id: 4,
      title: "Product 4",
      description: "Description of Product 4",
      price: 25.99,
    },
    {
      id: 5,
      title: "Product 5",
      description: "Description of Product 5",
      price: 30.99,
    },
    {
      id: 6,
      title: "Product 6",
      description: "Description of Product 6",
      price: 35.99,
    },
  ];

  return (
    <>
      <Navbar />
      <Section />
      <div style={{ backgroundColor: "#F8F9FA" }}>
        <Container sx={{ marginTop: 4 }}>
          <Grid container spacing={3}>
            {products.map((product) => (
              <Grid key={product.id} item xs={12} sm={6} md={4}>
                <ProductCard
                  id={product.id}
                  title={product.title}
                  description={product.description}
                  price={product.price}
                  picture={"https://via.placeholder.com/400"}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>
      <Footer />
    </>
  );
}

export default App;
