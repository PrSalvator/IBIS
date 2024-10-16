import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { cesareCipherDecryptSchema } from "../schema";
import { useState } from "react";
import { useSnackbar } from "notistack";
import { Decrypt } from "../../../../shared/algorithms/cesare_cipher/cesare_cipher";

export const useCesareCipherDecryptFormPresenter = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [answer, setAnswer] = useState<string>();
  const form = useForm({ resolver: yupResolver(cesareCipherDecryptSchema) });
  const handleSubmit = form.handleSubmit((data, e) => {
    e?.preventDefault();
    try {
      const symbol = Decrypt(data.symbol, data.key);
      setAnswer(symbol);
    } catch (e) {
      if (e instanceof Error) enqueueSnackbar(e.message);
    }
  });

  return { form, handleSubmit, answer };
};