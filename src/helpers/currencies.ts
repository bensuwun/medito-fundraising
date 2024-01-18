/**
 * Set of supported currencies in the application.
 */

export interface CurrencyObject {
    code: string;
    symbol: string;
    rate: number;
}

export var CURRENCY = {
    "USD": {
        "code": "USD",
        "symbol": "$",
        "rate": 1.0000
    },
    "AED": {
        "code": "AED",
        "symbol": "د.إ",
        "rate": 3.6725
    },
    "AFN": {
        "code": "AFN",
        "symbol": "؋",
        "rate": 88.2450
    },
    "ALL": {
        "code": "ALL",
        "symbol": "L",
        "rate": 101.2000
    },
    "AMD": {
        "code": "AMD",
        "symbol": "֏",
        "rate": 481.7500
    },
    "ANG": {
        "code": "ANG",
        "symbol": "ƒ",
        "rate": 1.7900
    },
    "AOA": {
        "code": "AOA",
        "symbol": "Kz",
        "rate": 676.5000
    },
    "ARS": {
        "code": "ARS",
        "symbol": "$",
        "rate": 97.5000
    },
    "AUD": {
        "code": "AUD",
        "symbol": "$",
        "rate": 1.3500
    },
    "AWG": {
        "code": "AWG",
        "symbol": "ƒ",
        "rate": 1.7900
    },
    "AZN": {
        "code": "AZN",
        "symbol": "₼",
        "rate": 1.7000
    },
    "BAM": {
        "code": "BAM",
        "symbol": "KM",
        "rate": 1.6500
    },
    "BBD": {
        "code": "BBD",
        "symbol": "$",
        "rate": 2.0000
    },
    "BDT": {
        "code": "BDT",
        "symbol": "৳",
        "rate": 85.5000
    },
    "BGN": {
        "code": "BGN",
        "symbol": "лв",
        "rate": 1.6100
    },
    "BIF": {
        "code": "BIF",
        "symbol": "FBu",
        "rate": 1980.0000
    },
    "BMD": {
        "code": "BMD",
        "symbol": "$",
        "rate": 1.0000
    },
    "BND": {
        "code": "BND",
        "symbol": "$",
        "rate": 1.3600
    },
    "BOB": {
        "code": "BOB",
        "symbol": "Bs.",
        "rate": 6.9100
    },
    "BRL": {
        "code": "BRL",
        "symbol": "R$",
        "rate": 5.3000
    },
    "BSD": {
        "code": "BSD",
        "symbol": "$",
        "rate": 1.0000
    },
    "BWP": {
        "code": "BWP",
        "symbol": "P",
        "rate": 14.1500
    },
    "BYN": {
        "code": "BYN",
        "symbol": "Br",
        "rate": 2.5200
    },
    "BZD": {
        "code": "BZD",
        "symbol": "BZ$",
        "rate": 2.0000
    },
    "CAD": {
        "code": "CAD",
        "symbol": "$",
        "rate": 1.2800
    },
    "CDF": {
        "code": "CDF",
        "symbol": "FC",
        "rate": 1980.0000
    },
    "CHF": {
        "code": "CHF",
        "symbol": "CHF",
        "rate": 0.9000
    },
    "CLP": {
        "code": "CLP",
        "symbol": "$",
        "rate": 770.0000
    },
    "CNY": {
        "code": "CNY",
        "symbol": "¥",
        "rate": 6.4000
    },
    "COP": {
        "code": "COP",
        "symbol": "$",
        "rate": 3760.0000
    },
    "CRC": {
        "code": "CRC",
        "symbol": "₡",
        "rate": 570.0000
    },
    "CVE": {
        "code": "CVE",
        "symbol": "$",
        "rate": 100.0000
    },
    "CZK": {
        "code": "CZK",
        "symbol": "Kč",
        "rate": 21.5000
    },
    "DJF": {
        "code": "DJF",
        "symbol": "Fdj",
        "rate": 177.0000
    },
    "DKK": {
        "code": "DKK",
        "symbol": "kr",
        "rate": 6.1000
    },
    "DOP": {
        "code": "DOP",
        "symbol": "RD$",
        "rate": 56.0000
    },
    "DZD": {
        "code": "DZD",
        "symbol": "د.ج",
        "rate": 140.0000
    },
    "EGP": {
        "code": "EGP",
        "symbol": "£",
        "rate": 15.6500
    },
    "ETB": {
        "code": "ETB",
        "symbol": "Br",
        "rate": 45.0000
    },
    "EUR": {
        "code": "EUR",
        "symbol": "€",
        "rate": 0.8200
    },
    "FJD": {
        "code": "FJD",
        "symbol": "$",
        "rate": 2.0800
    },
    "FKP": {
        "code": "FKP",
        "symbol": "£",
        "rate": 0.7100
    },
    "GBP": {
        "code": "GBP",
        "symbol": "£",
        "rate": 0.7100
    },
    "GEL": {
        "code": "GEL",
        "symbol": "₾",
        "rate": 3.1000
    },
    "GIP": {
        "code": "GIP",
        "symbol": "£",
        "rate": 0.7100
    },
    "GMD": {
        "code": "GMD",
        "symbol": "D",
        "rate": 52.0000
    },
    "GNF": {
        "code": "GNF",
        "symbol": "FG",
        "rate": 10000.0000
    },
    "GTQ": {
        "code": "GTQ",
        "symbol": "Q",
        "rate": 7.7500
    },
    "GYD": {
        "code": "GYD",
        "symbol": "$",
        "rate": 208.0000
    },
    "HKD": {
        "code": "HKD",
        "symbol": "$",
        "rate": 7.7800
    },
    "HNL": {
        "code": "HNL",
        "symbol": "L",
        "rate": 23.5000
    },
    "HTG": {
        "code": "HTG",
        "symbol": "G",
        "rate": 75.0000
    },
    "HUF": {
        "code": "HUF",
        "symbol": "Ft",
        "rate": 305.0000
    },
    "IDR": {
        "code": "IDR",
        "symbol": "Rp",
        "rate": 14100.0000
    },
    "ILS": {
        "code": "ILS",
        "symbol": "₪",
        "rate": 3.2800
    },
    "INR": {
        "code": "INR",
        "symbol": "₹",
        "rate": 74.5000
    },
    "ISK": {
        "code": "ISK",
        "symbol": "kr",
        "rate": 128.0000
    },
    "JMD": {
        "code": "JMD",
        "symbol": "$",
        "rate": 155.0000
    },
    "JPY": {
        "code": "JPY",
        "symbol": "¥",
        "rate": 113.0000
    },
    "KES": {
        "code": "KES",
        "symbol": "Ksh",
        "rate": 110.0000
    },
    "KGS": {
        "code": "KGS",
        "symbol": "лв",
        "rate": 84.0000
    },
    "KHR": {
        "code": "KHR",
        "symbol": "៛",
        "rate": 4100.0000
    },
    "KMF": {
        "code": "KMF",
        "symbol": "CF",
        "rate": 415.0000
    },
    "KRW": {
        "code": "KRW",
        "symbol": "₩",
        "rate": 1170.0000
    },
    "KYD": {
        "code": "KYD",
        "symbol": "$",
        "rate": 0.8200
    },
    "KZT": {
        "code": "KZT",
        "symbol": "₸",
        "rate": 432.0000
    },
    "LAK": {
        "code": "LAK",
        "symbol": "₭",
        "rate": 9900.0000
    },
    "LBP": {
        "code": "LBP",
        "symbol": "£",
        "rate": 1500.0000
    },
    "LKR": {
        "code": "LKR",
        "symbol": "₨",
        "rate": 199.0000
    },
    "LRD": {
        "code": "LRD",
        "symbol": "$",
        "rate": 209.0000
    },
    "LSL": {
        "code": "LSL",
        "symbol": "L",
        "rate": 15.1000
    },
    "MAD": {
        "code": "MAD",
        "symbol": "د.م.",
        "rate": 9.2000
    },
    "MDL": {
        "code": "MDL",
        "symbol": "L",
        "rate": 18.2000
    },
    "MGA": {
        "code": "MGA",
        "symbol": "Ar",
        "rate": 3900.0000
    },
    "MKD": {
        "code": "MKD",
        "symbol": "ден",
        "rate": 55.0000
    },
    "MMK": {
        "code": "MMK",
        "symbol": "K",
        "rate": 1600.0000
    },
    "MNT": {
        "code": "MNT",
        "symbol": "₮",
        "rate": 2850.0000
    },
    "MOP": {
        "code": "MOP",
        "symbol": "MOP$",
        "rate": 8.0000
    },
    "MUR": {
        "code": "MUR",
        "symbol": "₨",
        "rate": 40.5000
    },
    "MVR": {
        "code": "MVR",
        "symbol": "Rf",
        "rate": 15.5000
    },
    "MWK": {
        "code": "MWK",
        "symbol": "MK",
        "rate": 800.0000
    },
    "MXN": {
        "code": "MXN",
        "symbol": "$",
        "rate": 20.0000
    },
    "MYR": {
        "code": "MYR",
        "symbol": "RM",
        "rate": 4.0800
    },
    "MZN": {
        "code": "MZN",
        "symbol": "MT",
        "rate": 74.0000
    },
    "NAD": {
        "code": "NAD",
        "symbol": "$",
        "rate": 15.1000
    },
    "NGN": {
        "code": "NGN",
        "symbol": "₦",
        "rate": 410.0000
    },
    "NIO": {
        "code": "NIO",
        "symbol": "C$",
        "rate": 35.0000
    },
    "NOK": {
        "code": "NOK",
        "symbol": "kr",
        "rate": 9.1200
    },
    "NPR": {
        "code": "NPR",
        "symbol": "₨",
        "rate": 124.0000
    },
    "NZD": {
        "code": "NZD",
        "symbol": "$",
        "rate": 1.4400
    },
    // Add the missing currencies below
    "PAB": {
        "code": "PAB",
        "symbol": "B/.",
        "rate": 1.0000
    },
    "PEN": {
        "code": "PEN",
        "symbol": "S/",
        "rate": 4.0800
    },
    "PGK": {
        "code": "PGK",
        "symbol": "K",
        "rate": 3.5600
    },
    "PHP": {
        "code": "PHP",
        "symbol": "₱",
        "rate": 50.0000
    },
    "PKR": {
        "code": "PKR",
        "symbol": "₨",
        "rate": 230.0000
    },
    "PLN": {
        "code": "PLN",
        "symbol": "zł",
        "rate": 4.2000
    },
    "PYG": {
        "code": "PYG",
        "symbol": "₲",
        "rate": 6700.0000
    },
    "QAR": {
        "code": "QAR",
        "symbol": "ر.ق",
        "rate": 3.6400
    },
    "RON": {
        "code": "RON",
        "symbol": "lei",
        "rate": 4.1000
    },
    "RSD": {
        "code": "RSD",
        "symbol": "din.",
        "rate": 100.0000
    },
    "RUB": {
        "code": "RUB",
        "symbol": "₽",
        "rate": 77.0000
    },
    "RWF": {
        "code": "RWF",
        "symbol": "RF",
        "rate": 1200.0000
    },
    "SAR": {
        "code": "SAR",
        "symbol": "﷼",
        "rate": 3.7500
    },
    "SBD": {
        "code": "SBD",
        "symbol": "$",
        "rate": 8.2000
    },
    "SCR": {
        "code": "SCR",
        "symbol": "₨",
        "rate": 20.0000
    },
    "SEK": {
        "code": "SEK",
        "symbol": "kr",
        "rate": 8.5500
    },
    "SGD": {
        "code": "SGD",
        "symbol": "$",
        "rate": 1.3600
    },
    "SHP": {
        "code": "SHP",
        "symbol": "£",
        "rate": 0.7100
    },
    "SLE": {
        "code": "SLE",
        "symbol": "Le",
        "rate": 10900.0000
    },
    "SOS": {
        "code": "SOS",
        "symbol": "S",
        "rate": 580.0000
    },
    "SRD": {
        "code": "SRD",
        "symbol": "$",
        "rate": 21.0000
    },
    "STD": {
        "code": "STD",
        "symbol": "Db",
        "rate": 21000.0000
    },
    "SZL": {
        "code": "SZL",
        "symbol": "L",
        "rate": 15.1000
    },
    "THB": {
        "code": "THB",
        "symbol": "฿",
        "rate": 32.5000
    },
    "TJS": {
        "code": "TJS",
        "symbol": "ЅМ",
        "rate": 11.3000
    },
    "TOP": {
        "code": "TOP",
        "symbol": "T$",
        "rate": 2.2800
    },
    "TRY": {
        "code": "TRY",
        "symbol": "₺",
        "rate": 11.0000
    },
    "TTD": {
        "code": "TTD",
        "symbol": "TT$",
        "rate": 6.8000
    },
    "TWD": {
        "code": "TWD",
        "symbol": "NT$",
        "rate": 28.5000
    },
    "TZS": {
        "code": "TZS",
        "symbol": "TSh",
        "rate": 2300.0000
    },
    "UAH": {
        "code": "UAH",
        "symbol": "₴",
        "rate": 27.0000
    },
    "UGX": {
        "code": "UGX",
        "symbol": "USh",
        "rate": 3700.0000
    },
    "UYU": {
        "code": "UYU",
        "symbol": "$U",
        "rate": 42.5000
    },
    "UZS": {
        "code": "UZS",
        "symbol": "лв",
        "rate": 11000.0000
    },
    "VND": {
        "code": "VND",
        "symbol": "₫",
        "rate": 22200.0000
    },
    "VUV": {
        "code": "VUV",
        "symbol": "VT",
        "rate": 110.0000
    },
    "WST": {
        "code": "WST",
        "symbol": "WS$",
        "rate": 2.5500
    },
    "XAF": {
        "code": "XAF",
        "symbol": "FCFA",
        "rate": 550.0000
    },
    "XCD": {
        "code": "XCD",
        "symbol": "$",
        "rate": 2.7000
    },
    "XOF": {
        "code": "XOF",
        "symbol": "CFA",
        "rate": 550.0000
    },
    "XPF": {
        "code": "XPF",
        "symbol": "₣",
        "rate": 100.0000
    },
    "YER": {
        "code": "YER",
        "symbol": "﷼",
        "rate": 250.0000
    },
    "ZAR": {
        "code": "ZAR",
        "symbol": "R",
        "rate": 15.1000
    },
    "ZMW": {
        "code": "ZMW",
        "symbol": "ZK",
        "rate": 25.0000
    }
 };