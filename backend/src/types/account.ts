import { z } from "zod";
export const TransferAmount = z.object({
  to: z.string({
    required_error: "to is required",
    invalid_type_error: "to should be of type string",
  }),
  amount: z.string({
    required_error: "amount is required",
    invalid_type_error: "amount should be of type string",
  }),
});

export type TTransferAmount = z.infer<typeof TransferAmount>;
