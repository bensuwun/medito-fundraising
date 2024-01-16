import db from "../../../../public/db.json"

export const dynamic = 'force-dynamic' // defaults to auto

export async function GET() {
  let sum = 0
  db.donations.map(value => {
    sum += value.amount;
  });
  return Response.json({ sum })
}