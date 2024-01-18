import { NextResponse } from "next/server"
export const dynamic = 'force-dynamic' // defaults to auto

/**
 * Used to test the payload of the ask question request.
 * @returns The new question to ask.
 */
export async function POST(request: Request) {
  try {
    console.log("POST Request received");
    const newData = await request.json()
    console.log(newData);

    return NextResponse.json({ newData })
  } catch (error) {
    return NextResponse.json({ error })
  }
}