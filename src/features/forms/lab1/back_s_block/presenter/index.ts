import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { backSBlockSchema } from "../schema";
import { useState } from "react";
import { useSnackbar } from "notistack";
import { CesareCipher } from "../../../../../shared/classes/cesare_cipher";

const cesare_cipher = new CesareCipher();

export const useBackSBlockFormPresenter = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [answer, setAnswer] = useState<string>();
  const form = useForm({ resolver: yupResolver(backSBlockSchema) });
  const handleSubmit = form.handleSubmit((data, e) => {
    e?.preventDefault();
    try {
      const symbol = cesare_cipher.BackSBlock(data.key, data.text, data.j_in);
      setAnswer(symbol);
    } catch (e) {
      if (e instanceof Error) enqueueSnackbar(e.message);
    }
  });

  return { form, handleSubmit, answer };
};
