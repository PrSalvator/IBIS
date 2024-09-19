import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { modifiedCesareCipherDecryptSchema } from "../schema";
import { useState } from "react";
import { useSnackbar } from "notistack";
import { PolyAlphabatCesareDecrypt } from "../../../../shared/algorithms/modified_cipher";

export const useModifidCesareCipherDecryptFormPresenter = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [answer, setAnswer] = useState<string>();
  const form = useForm({ resolver: yupResolver(modifiedCesareCipherDecryptSchema) });
  const handleSubmit = form.handleSubmit((data, e) => {
    e?.preventDefault();
    try {
      const symbol = PolyAlphabatCesareDecrypt(data.key, data.text, data.j_in);
      setAnswer(symbol);
    } catch (e) {
      if (e instanceof Error) enqueueSnackbar(e.message);
    }
  });

  return { form, handleSubmit, answer };
};