import { NextResponse } from "next/server"
import db from "../../../../data/db.json"

export const dynamic = 'force-dynamic' // defaults to auto

export async function GET() {
  try {
    const result = db.donations[db.donations.length-1]
    
    return NextResponse.json({ result })
  } catch (error) {
    return NextResponse.json({ error })
  }
}