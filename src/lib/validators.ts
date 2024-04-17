import z from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .min(1, { message: "Name is Required!" })
    .max(32, { message: "Maximum of 32 Charecters!" }),
  email: z.string().email({ message: "Enter a valid email." }),
  phone: z
    .string()
    .regex(/^\d+$/, "Phone number must contain only digits")
    .min(10, { message: "Minimum of 10 digiits!" })
    .max(10, { message: "Maximum of 10 digiits!" }),
  message: z.string().min(1, { message: "Message is Required!" }),
});

export type contactTypes = z.infer<typeof contactSchema>;
