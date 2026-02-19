import z from "zod";

export const registerSchema = z.object({
    name: z.string().trim().min(1, "Name is required"),

    email: z.string().trim().min(1, "Email is required").email("Invalid email"),

    password: z.string().trim().min(1, "Password is required").min(6, "Password must be atleast 6 characters "),

    confirmPassword: z.string().trim().min(1, "Confirm Password is required")

}).refine(
    (data) => {
        if (!data.confirmPassword) return true;
        return data.password === data.confirmPassword
    },
    {
        message: "Password does not match",
        path: ["confirmPassword"]
    }
)


