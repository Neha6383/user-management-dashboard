import { z } from "zod";

export const userSchema = z.object({
    firstName: z
      .string()
      .min(2, "First name must contain at least 2 characters"),

    lastName: z  
      .string()
      .min(2, "Last name must contain at least 2 characters" ),

    email: z
      .string()
      .email("Please enter a valid email address"),

     department: z
       .string()
       .min(2, "Department is required"), 
});