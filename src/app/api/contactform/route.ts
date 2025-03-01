import { NextResponse } from "next/server";
import { Resend } from 'resend';
import contactEmailer from "@/components/emails/contactEmailer";
import * as React from 'react';

const resend = new Resend("re_2Sf5A8ig_6EWDWLEFqd55iuxDUxrcxM8g");

// app/api/contactform/route.js
export async function POST(request: any) {
  const { name, email, mobile, message } = await request.json();
  const {data, error} = await resend.emails.send({
    from: 'onboarding@resend.dev', // Replace with your verified email in Resend
    to: 'yameenstarwebmaker@gmail.com',
    subject: 'Contact Enquiry: '+ name,
    react: contactEmailer({ name, email, mobile, message }) as React.ReactElement,
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