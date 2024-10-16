import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { backSBlockSchema } from "../schema";
import { useState } from "react";
import { useSnackbar } from "notistack";
import { BackSBlock } from "../../../../shared/algorithms/cesare_cipher/S_blocks/encryption_wrapper";

export const useBackSBlockFormPresenter = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [answer, setAnswer] = useState<string>();
  const form = useForm({ resolver: yupResolver(backSBlockSchema) });
  const handleSubmit = form.handleSubmit((data, e) => {
    e?.preventDefault();
    try {
      const symbol = BackSBlock(data.key, data.text, data.j_in);
      setAnswer(symbol);
    } catch (e) {
      if (e instanceof Error) enqueueSnackbar(e.message);
    }
  });

  return { form, handleSubmit, answer };
};