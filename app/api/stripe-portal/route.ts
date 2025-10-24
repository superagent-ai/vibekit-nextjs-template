import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    // TODO: Replace with dynamic customer ID from your authentication system
    const CUSTOMER_ID = 'cus_test_customer_id';
    const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY;
    const RETURN_URL = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

    if (!STRIPE_SECRET_KEY) {
      return NextResponse.json(
        { error: 'Stripe secret key not configured' },
        { status: 500 }
      );
    }

    const response = await fetch('https://api.stripe.com/v1/billing_portal/sessions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${STRIPE_SECRET_KEY}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        customer: CUSTOMER_ID,
        return_url: RETURN_URL,
      }),
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error('Stripe API error:', errorData);
      return NextResponse.json(
        { error: 'Failed to create portal session' },
        { status: response.status }
      );
    }

    const session = await response.json();
    return NextResponse.json({ url: session.url });

  } catch (error) {
    console.error('Error creating portal session:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}