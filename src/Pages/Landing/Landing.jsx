import CarouselBanner from "../../Components/Carousel/CarouselBanner";
import Category from "../../Components/Category/Category";
import Layout from "../../Components/Layout/Layout";
import Product from "../../Components/Product/Product";

function Landing() {
  return (
    <Layout>
      <CarouselBanner />
      <Category />
      <Product />
    </Layout>
  );
}

export default Landing;