import { CURRENCY } from "./currencies";

/**
 * Returns a comma-separated string representation of the number provided.
 * @param num number - number to format.
 */
export function numberFormatter (num : number) {
    return new Intl.NumberFormat("en-US").format(num);
}

/**
 * Formats cash amount to include proper comma separation AND currency-prefix. Decimals are ignored.
 * @param amount - cash amount to be formatted
 * @param currency - currency of the amount
 * @returns string - formatted cash
 */
export function cashFormatter (amount: number | string, currency?: string) : string {
    if (typeof(amount) === "string")
        amount = parseInt(amount);

    var nFormat = new Intl.NumberFormat("en-US", {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    });
    console.log(currency)
    if (currency === null || currency === undefined)
        var formatted = `US$ ${nFormat.format(amount)}`;
    else 
        var formatted = `${CURRENCY[currency as keyof typeof CURRENCY].symbol} ${nFormat.format(amount)}`;
    
    return formatted;
};