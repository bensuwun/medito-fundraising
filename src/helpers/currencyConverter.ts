// currencyConverter.ts

type ExchangeRates = Record<string, number>;

function createCurrencyConverter(): (amount: number, fromCurrency: string, toCurrency: string) => number {
  const exchangeRates: ExchangeRates = {
    USD: 1,
    AED: 0.272294,
    AFN: 0.014,
    ALL: 0.010,
    AMD: 0.0025,
    ANG: 0.56,
    AOA: 0.0012,
    ARS: 0.0012,
    AUD: 0.66,
    AWG: 0.56,
    AZN: 0.59,
    BAM: 0.56,
    BBD: 0.50,
    BDT: 0.0091,
    BGN: 0.56,
    BIF: 0.00035,
    BMD: 1,
    BND: 0.75,
    BOB: 0.15,
    BRL: 0.20, 
    BSD: 1,
    BWP: 0.073,
    BYN: 0.31,
    BZD: 0.50,
    CAD: 0.74,
    CDF: 0.00036,
    CHF: 1.16,
    CLP: 0.0011,
    CNY: 0.14,
    COP: 0.00025, 
    CRC: 0.0019,
    CVE: 0.0099, 
    CZK: 0.044, 
    DJF: 0.0056,
    DKK: 0.15, 
    DOP: 0.017,
    DZD: 0.0074,
    EGP: 0.032,
    ETB: 0.018,
    EUR: 1.09,
    FJD: 0.45,
    FKP: 1.26944,
    GBP: 1.27,
    GEL: 0.37,
    GIP: 1.26365, 
    GMD: 0.015,
    GNF: 0.00012,
    GTQ: 0.13,
    GYD: 0.0048,
    HKD: 0.13,
    HNL: 0.041,
      


  };

  return function convert(amount: number, fromCurrency: string, toCurrency: string): number {
    if (!(fromCurrency in exchangeRates) || !(toCurrency in exchangeRates)) {
      throw new Error("Unsupported currency");
    }

    return amount * exchangeRates['fromCurrency'];
  };
}

// Example usage:
const convertCurrency = createCurrencyConverter();

const usdAmount = 100;
const cadAmount = convertCurrency(usdAmount, "USD", "CAD");
const eurAmount = convertCurrency(usdAmount, "USD", "EUR");

console.log(`${usdAmount} USD is equal to ${cadAmount.toFixed(2)} CAD`);
console.log(`${usdAmount} USD is equal to ${eurAmount.toFixed(2)} EUR`);