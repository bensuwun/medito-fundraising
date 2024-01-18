import { insertDonation } from "@/helpers/requests";
import { NextRequest, NextResponse } from "next/server"

export const dynamic = 'force-dynamic' // defaults to auto

export async function GET(request: NextRequest) {
  try {
    const sessionId = request.nextUrl.searchParams.get('session_id')
    const stripe = require('stripe')('sk_test_51OYpyuKfN4EHmL2uGWu5SgNU4m59GWosYk4W1CCr9z0LVHnKFiFJ3kJp0c17wrzifFUmlk7XkfPQV2Unrta6jP5300XBjPUbzQ');
    const session = await stripe.checkout.sessions.retrieve(sessionId);
    console.log(session.customer_details.name)
    console.log(session.amount_total)
    console.log(session.currency)
    const response = await insertDonation({
        name: session.customer_details.name,
        amount: session.amount_total / 100, 
        currency: session.currency.toUpperCase()
    })
    return NextResponse.redirect(new URL('/', request.url))
  } catch (error) {
    return NextResponse.json({ error })
  }
}