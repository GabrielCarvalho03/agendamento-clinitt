import { z } from "zod";

export const USerSchema = z.object({
  name: z.string().min(3, {
    message: "Nome deve ter pelo menos 3 caracteres",
  }),
  email: z.string().email({
    message: "Email inválido",
  }),
  phone: z.string().min(10, {
    message: "Telefone inválido",
  }),
  clinicName: z.string().min(2, {
    message: "Nome da clínica é obrigatório",
  }),

  period: z.string().optional(),
});
export type USerSchemaData = z.infer<typeof USerSchema>;
