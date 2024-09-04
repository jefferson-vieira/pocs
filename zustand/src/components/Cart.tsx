import { useCartStore } from "../store/CartStore";
import { toCurrency } from "../utils/currency-formatter";

export default function Cart() {
  const { cart, removeFromCart } = useCartStore(({ cart, removeFromCart }) => ({
    cart,
    removeFromCart,
  }));

  return (
    <section>
      <h2>Cart</h2>

      <ul>
        {cart.map((product) => (
          <li key={product.id}>
            {product.name}
            <span>{toCurrency(product.price)}</span>
            <button
              title="Remove from cart"
              onClick={() => removeFromCart(product)}
            >
              -
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
