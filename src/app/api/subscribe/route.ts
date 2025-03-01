import { NextResponse } from "next/server";
import { Resend } from 'resend';
import subscriberEmailer from "@/components/emails/subscriberEmailer";
import * as React from 'react';
const resend = new Resend(process.env.RESEND_API_KEY);


// app/api/contactform/route.js
export async function POST(request: any) {
  const {email } = await request.json();
  const {data, error} = await resend.emails.send({
    from: 'onboarding@resend.dev', // Replace with your verified email in Resend
    to: 'yameenstarwebmaker@gmail.com',
    subject: 'Subscriber : '+ email,
    react: subscriberEmailer({ email }) as React.ReactElement,
  });

  if (error) {
    return new NextResponse(JSON.stringify({error}), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
    // const data = await request.json();
    //console.log("Received data:", data); // Process the data (e.g., save to a database)
    return new NextResponse(JSON.stringify({ message: "SUCCESS" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  }