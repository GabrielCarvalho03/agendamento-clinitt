import { api } from "@/lib/axios/axios";
import { toast } from "sonner";
import { create } from "zustand";
import { useUserTypes } from "./types";
import { USerSchemaData } from "./schema";
import { UserType } from "@/app/@types/user/types";

export const useUser = create<useUserTypes>((set) => ({
  createUserIsLoading: false,
  setCreateUserIsLoading: (createUserIsLoading) => set({ createUserIsLoading }),

  handleCreateUser: async ({ data, form }) => {
    const { setCreateUserIsLoading } = useUser.getState();
    setCreateUserIsLoading(true);
    const DataObjectToSave: UserType = {
      ...data,
      id: "",
      periodContact: data.period || "",
    };
    try {
      const res = await api.post("/user/create", DataObjectToSave);
      toast.success(
        "Dados salvos com sucesso! Entraremos em contato em breve."
      );
      form.reset();
    } catch (e) {
      console.log(e);
      toast.error("Ocorreu um erro ao criar o usuário");
    } finally {
      setCreateUserIsLoading(false);
    }
  },
}));
