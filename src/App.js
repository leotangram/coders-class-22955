import "./App.css";
import { products } from "./data/products";
import ProductList from "./components/product-list/ProductList";
import ItemListContainer from "./layouts/item-list-container/ItemListContainer";

function App() {
  return (
    <div className="App">
      <ItemListContainer>
        <h1>Estamos dentro del ItemListContainer</h1>
        <ProductList products={products} />
      </ItemListContainer>
    </div>
  );
}

export default App;
