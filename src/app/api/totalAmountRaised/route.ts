import { NextResponse } from "next/server"
import db from "../../../../data/db.json"

export const dynamic = 'force-dynamic' // defaults to auto

export async function GET() {
  try {
    let sum = 0
    db.donations.map(value => {
      sum += value.amount;
    });

    return NextResponse.json({ sum })
  } catch (error) {
    return NextResponse.json({ error })
  }
}