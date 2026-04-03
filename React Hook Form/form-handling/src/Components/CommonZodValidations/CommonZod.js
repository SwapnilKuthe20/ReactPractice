import z from "zod";

export const authFields = {
    Email: z.string().min(1, "Email is required").email("Invalid Email Adrress"),
    Password: z.string().min(1, "Password is required")
}

export const baseFieldsZod = z.object(authFields)