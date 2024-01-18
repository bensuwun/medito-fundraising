import { NextResponse } from "next/server"
import Stripe from 'stripe'
export const runtime = "edge";

const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY!)

export  async function POST(request: Request) {
    try {
        const origin= await request.headers.get('origin')
        const data = await request.json()
        const session = await stripe.checkout.sessions.create({
            mode: 'payment',
            line_items: [
                {
                    price_data: {
                        currency: data.currency.toLowerCase(),  
                        unit_amount: data.amount * 100,
                        product: 'prod_PNbPD7NTXEACv1'
                    },
                    quantity: 1

                },
            ],
            success_url: `${origin}/api/checkoutResults/?success=true&session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${origin}/?canceled=true`,
        })
        return NextResponse.json({ session })
    } catch (err) {
        if (err instanceof Stripe.errors.StripeError) {
            const { message } = err
            return NextResponse.json({ message }, { status: err.statusCode })
          }
    }
}