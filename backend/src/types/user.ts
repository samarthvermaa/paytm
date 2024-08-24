import { z } from "zod";
export const User = z.object({
  email: z
    .string({
      required_error: "email is required",
      invalid_type_error: "email should be of type string",
    })
    .email("Please provide a valid email."),
  firstName: z
    .string({
      required_error: "firstName is required",
      invalid_type_error: "firstName should be of type string",
    })
    .min(1, "First name can not be empty"),
  lastName: z
    .string({
      required_error: "lastName is required",
      invalid_type_error: "lastName should be of type string",
    })
    .min(1, "Last name can not be empty"),
  password: z
    .string({
      required_error: "password is required",
      invalid_type_error: "password should be of type string",
    })
    .min(6, "Password should be atleast 6 chars long"),
});

export type TUser = z.infer<typeof User>;
