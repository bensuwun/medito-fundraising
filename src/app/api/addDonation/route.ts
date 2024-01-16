import { NextResponse } from "next/server"
import db from "../../../../data/db.json"

export const dynamic = 'force-dynamic' // defaults to auto

export async function POST(request: Request) {
  try {
    const newData = await request.json()
    db.donations.push(newData)

    return NextResponse.json({ newData })
  } catch (error) {
    return NextResponse.json({ error })
  }
}