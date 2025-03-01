import { z } from "zod";

export const SubscriberInput = z.object({
    email: z.string().email({ message: "Enter valid email address" }).nonempty({ message: "Email is required" }).min(1, "Email field is required."),
  });

 export type SubscriberInputs = z.infer<typeof SubscriberInput>;