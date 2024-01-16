import db from "../../../../public/db.json"

export const dynamic = 'force-dynamic' // defaults to auto

export async function GET() {
  const result = db.donations[db.donations.length-1]
  
  return Response.json({ result })
}