import db from "../../../../public/db.json"

export const dynamic = 'force-dynamic' // defaults to auto

export async function GET() {
  
  const result = db.donations[Math.floor((Math.random() * db.donations.length))];
  
  return Response.json({ ...result })
}