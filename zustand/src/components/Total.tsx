import { useCartStore } from "../store/CartStore";
import { toCurrency } from "../utils/currency-formatter";

export default function Total() {
  const cart = useCartStore(({ cart }) => cart);

  const total = toCurrency(
    cart.reduce((total, product) => total + product.price, 0)
  );

  return (
    <section>
      <h2>Total: {total}</h2>
    </section>
  );
}
