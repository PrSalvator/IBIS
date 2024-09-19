import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { modifiedCesareCipherTextSchema } from "../schema";
import { useState } from "react";
import { useSnackbar } from "notistack";
import { PolyAlphabatCesareEncrypt } from "../../../../shared/algorithms/modified_cipher";

export const useModifiedCesareCipherFormPresenter = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [answer, setAnswer] = useState<string>();
  const form = useForm({ resolver: yupResolver(modifiedCesareCipherTextSchema) });
  const handleSubmit = form.handleSubmit((data, e) => {
    e?.preventDefault();
    try {
      const symbol = PolyAlphabatCesareEncrypt(data.key, data.text, data.j_in);
      setAnswer(symbol);
    } catch (e) {
      if (e instanceof Error) enqueueSnackbar(e.message);
    }
  });

  return { form, handleSubmit, answer };
};