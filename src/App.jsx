import Header from "./components/nav/Header";
import ProductDetails from "../src/pages/ProductDetails";
import "../src/styles/app.scss";

export default function App() {
  return (
    <div className="App">
      <Header />
      <ProductDetails />
    </div>
  );
}
