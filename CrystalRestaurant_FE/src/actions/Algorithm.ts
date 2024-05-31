/**
 * 
 * @param price //price to be converted to IDR
 * @returns converted string //returns the converted price
 */
export function priceToIDR(price: number): string {
  const converted: string = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(price)
  return converted
}
