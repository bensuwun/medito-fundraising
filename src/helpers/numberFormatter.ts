import CURRENCY from "./currencies";

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
export function cashFormatter (amount: number | string, currency?: CURRENCY) : string {
    if (typeof(amount) === "string")
        amount = parseInt(amount);

    var nFormat = new Intl.NumberFormat("en-US", {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    });

    var formatted = `US$ ${nFormat.format(amount)}`;

    switch(currency) {
        // Defaults to USD currency
        case CURRENCY.USD:
            break;
        case CURRENCY.EUR:
            formatted = `€ ${nFormat.format(amount)}`;
            break;
        case CURRENCY.CAD:
            formatted = `CA$ ${nFormat.format(amount)}`;
            break;
    }
    
    return formatted;
};