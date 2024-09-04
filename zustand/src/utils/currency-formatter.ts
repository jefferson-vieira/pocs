const formatter = new Intl.NumberFormat("pt-br", {
  style: "currency",
  currency: "BRL",
});

export function toCurrency(price: number) {
  return formatter.format(price);
}
