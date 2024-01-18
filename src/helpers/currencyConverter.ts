// currencyConverter.ts
import { CURRENCY, CurrencyObject } from "./currencies";
type ExchangeRates = Record<string, number>;

export default function createCurrencyConverter(): (amount: number, fromCurrency: any) => number {
    return function convert(amount: number, fromCurrency: string): number {
        if (!(fromCurrency in CURRENCY)) {
            throw new Error("Unsupported currency");
        }
        
        const rate = CURRENCY['USD'].rate / CURRENCY[fromCurrency as keyof typeof CURRENCY].rate;
        return Math.floor(amount * rate);
    };
}