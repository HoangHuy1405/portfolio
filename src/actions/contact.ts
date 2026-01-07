"use server";

import { Resend } from "resend";

// Types
interface ContactFormData {
  senderName: string;
  senderEmail: string;
  message: string;
}

interface ContactResponse {
  success: boolean;
  message: string;
}

// Initialize Resend client
const resend = new Resend(process.env.RESEND_API_KEY);

// Configuration
const RECIPIENT_EMAIL = "nguyenmaihoanghuy@gmail.com";
const SENDER_EMAIL = "onboarding@resend.dev";

/**
 * Server Action to handle contact form submissions
 * Sends an email notification using Resend
 */
export async function submitContactForm(
  formData: ContactFormData
): Promise<ContactResponse> {
  const { senderName, senderEmail, message } = formData;

  // Validate required fields
  if (!senderName?.trim() || !senderEmail?.trim() || !message?.trim()) {
    return {
      success: false,
      message: "All fields are required",
    };
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(senderEmail)) {
    return {
      success: false,
      message: "Please enter a valid email address",
    };
  }

  try {
    const response = await resend.emails.send({
      from: SENDER_EMAIL,
      to: RECIPIENT_EMAIL,
      subject: `Portfolio Contact: Message from ${senderName}`,
      html: generateEmailTemplate({ senderName, senderEmail, message }),
    });

    if (response.error) {
      console.error("Resend API error:", response.error);
      return {
        success: false,
        message: "Failed to send message. Please try again later.",
      };
    }

    return {
      success: true,
      message: "Your message has been sent successfully!",
    };
  } catch (error) {
    console.error("Error sending email:", error);
    return {
      success: false,
      message: "An unexpected error occurred. Please try again later.",
    };
  }
}

/**
 * Generates a professional HTML email template
 */
function generateEmailTemplate({
  senderName,
  senderEmail,
  message,
}: ContactFormData): string {
  const currentDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f4f5;">
      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; margin-top: 20px; margin-bottom: 20px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
        <!-- Header -->
        <tr>
          <td style="background: linear-gradient(135deg, #1f2937 0%, #374151 100%); padding: 30px 40px; text-align: center;">
            <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 600;">New Contact Message</h1>
            <p style="color: #9ca3af; margin: 10px 0 0 0; font-size: 14px;">${currentDate}</p>
          </td>
        </tr>
        
        <!-- Content -->
        <tr>
          <td style="padding: 40px;">
            <!-- Sender Info -->
            <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="margin-bottom: 30px;">
              <tr>
                <td style="padding: 20px; background-color: #f9fafb; border-radius: 8px; border-left: 4px solid #3b82f6;">
                  <p style="margin: 0 0 8px 0; font-size: 14px; color: #6b7280;">From</p>
                  <p style="margin: 0 0 4px 0; font-size: 18px; font-weight: 600; color: #1f2937;">${senderName}</p>
                  <a href="mailto:${senderEmail}" style="color: #3b82f6; text-decoration: none; font-size: 14px;">${senderEmail}</a>
                </td>
              </tr>
            </table>
            
            <!-- Message -->
            <div style="margin-bottom: 30px;">
              <p style="margin: 0 0 12px 0; font-size: 14px; color: #6b7280; text-transform: uppercase; letter-spacing: 0.5px;">Message</p>
              <div style="padding: 20px; background-color: #ffffff; border: 1px solid #e5e7eb; border-radius: 8px;">
                <p style="margin: 0; font-size: 16px; line-height: 1.6; color: #374151; white-space: pre-wrap;">${message}</p>
              </div>
            </div>
            
            <!-- Reply Button -->
            <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
              <tr>
                <td style="text-align: center;">
                  <a href="mailto:${senderEmail}?subject=Re: Portfolio Contact" style="display: inline-block; padding: 14px 32px; background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%); color: #ffffff; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 14px;">Reply to ${senderName}</a>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        
        <!-- Footer -->
        <tr>
          <td style="padding: 20px 40px; background-color: #f9fafb; text-align: center; border-top: 1px solid #e5e7eb;">
            <p style="margin: 0; font-size: 12px; color: #9ca3af;">This email was sent from your portfolio contact form.</p>
          </td>
        </tr>
      </table>
    </body>
    </html>
  `;
}
