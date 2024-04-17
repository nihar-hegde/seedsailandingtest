"use server";

import { Resend } from "resend";
import { contactSchema, contactTypes } from "../validators";
import { EmailTemplate } from "@/components/Email";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmailAction = async (data: contactTypes) => {
  const result = contactSchema.safeParse(data);
  if (result.success) {
    const { name, email, phone, message } = result.data;
    try {
      const data = await resend.emails.send({
        from: "Contact Form <onboarding@resend.dev>",
        to: ["niharhegde96@gmail.com"],
        subject: "Submission from Contact Form!",
        react: EmailTemplate({ name, email, phone, message }),
      });
      return { success: true, data };
    } catch (error) {
      return { success: false, error };
    }
  }
  if (!result.success) {
    return { success: false };
  }
};

// sbscallai@gmail.com
