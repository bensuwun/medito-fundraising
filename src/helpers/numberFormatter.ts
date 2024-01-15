/**
 * Formats cash amount into US locale currency, including proper comma separation. Decimals are ignored.
 * @param amount - cash amount to be formatted
 * @returns 
 */
export function cashFormatter (amount: number | string) : string {
    if (typeof(amount) === "string")
        amount = parseInt(amount);

    const nFormat = new Intl.NumberFormat("en-US", {
        style: "decimal",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
      });
    return nFormat.format(amount);
};