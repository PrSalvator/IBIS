import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { straightSBlockSchema } from "../schema";
import { useState } from "react";
import { useSnackbar } from "notistack";
import { StraightSBlock } from "../../../../../shared/algorithms/cesare_cipher/S_blocks/encryption_wrapper";

export const useStraightSBlockFormPresenter = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [answer, setAnswer] = useState<string>();
  const form = useForm({ resolver: yupResolver(straightSBlockSchema) });
  const handleSubmit = form.handleSubmit((data, e) => {
    e?.preventDefault();
    try {
      const symbol = StraightSBlock(data.key, data.text, data.j_in);
      setAnswer(symbol);
    } catch (e) {
      if (e instanceof Error) enqueueSnackbar(e.message);
    }
  });

  return { form, handleSubmit, answer };
};
