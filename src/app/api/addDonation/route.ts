import db from "../../../../public/db.json"

export const dynamic = 'force-dynamic' // defaults to auto

export async function POST(request: Request) {
  try {
    const newData = await request.json()
    db.donations.push(newData)

    return Response.json({ newData })
  } catch (error) {
    return Response.json({ error })
  }
}