export function priceToIDR(price: number): string {
  const converted: string = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(price)
  return converted
}
