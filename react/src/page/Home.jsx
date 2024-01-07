import Banner from "../components/Banner/Banner";
import Products from "../components/products";
import Promotions from "../components/promotions";

function Home() {
  return (
    <div>
      <h1>home</h1>
      <Banner />
      <Promotions />
      <Products/>
    </div>
  );
}

export default Home;
