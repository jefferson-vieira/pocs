import { useCartStore } from "../store/CartStore";
import { toCurrency } from "../utils/currency-formatter";

export default function Products() {
  const { products, addToCart } = useCartStore(({ products, addToCart }) => ({
    products,
    addToCart,
  }));

  return (
    <section>
      <h2>Products</h2>

      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name}
            <span>{toCurrency(product.price)}</span>
            <button title="Add to cart" onClick={() => addToCart(product)}>
              +
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
