import { UseFormReturn } from "react-hook-form";
import { USerSchemaData } from "./schema";

export type handleCreateUserProps = {
  data: USerSchemaData;
  form: UseFormReturn<USerSchemaData>;
};

export interface useUserTypes {
  createUserIsLoading: boolean;
  setCreateUserIsLoading: (createUserIsLoading: boolean) => void;
  handleCreateUser: ({ data, form }: handleCreateUserProps) => Promise<void>;
}
