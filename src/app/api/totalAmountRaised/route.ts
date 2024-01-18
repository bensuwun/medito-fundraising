import db from "../../../../public/db.json"
import { NextResponse } from "next/server"
import createCurrencyConverter from "@/helpers/currencyConverter";

export const dynamic = 'force-dynamic' // defaults to auto
export const runtime = "edge";

export async function GET() {
    try {
        const convertCurrency = createCurrencyConverter();
        let sum = 0
        db.donations.map(value => {
            let val = convertCurrency(value.amount, value.currency)
            sum += val;
        });

        return NextResponse.json({ sum })
    } catch (error) {
        return NextResponse.json({ error })
    }
}