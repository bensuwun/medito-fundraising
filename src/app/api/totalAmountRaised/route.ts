import db from "../../../../public/db.json"
import { NextResponse } from "next/server"

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