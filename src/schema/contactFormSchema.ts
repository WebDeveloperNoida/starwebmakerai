import { z } from "zod";

export const ContactInput = z.object({

    name: z.string().min(2, { message: "Name must be at least 2 characters" }).nonempty({ message: "Name is required" }),
    mobile: z.string().min(10, { message: "Mobile must be at least 10 digits" }).max(10, { message: "Mobile must be at most 10 digits" }).nonempty({ message: "Mobile is required" }),
    email: z.string().email({ message: "Invalid email address" }).nonempty({ message: "Email is required" }),
    message: z.string().max(150, { message: "Message must be at 150 characters" })

  });

 export type ContactInputs = z.infer<typeof ContactInput>;