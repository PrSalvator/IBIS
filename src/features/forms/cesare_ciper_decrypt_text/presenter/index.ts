import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { cesareCipherDecryptTextSchema } from "../schema";
import { useState } from "react";
import { useSnackbar } from "notistack";
import { DecryptText } from "../../../../shared/algorithms/cesare_cipher/text_crypt";

export const useCesareCipherDecryptTextFormPresenter = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [answer, setAnswer] = useState<string>();
  const form = useForm({ resolver: yupResolver(cesareCipherDecryptTextSchema) });
  const handleSubmit = form.handleSubmit((data, e) => {
    e?.preventDefault();
    try {
      const symbol = DecryptText(data.text, data.key);
      setAnswer(symbol);
    } catch (e) {
      if (e instanceof Error) enqueueSnackbar(e.message);
    }
  });

  return { form, handleSubmit, answer };
};