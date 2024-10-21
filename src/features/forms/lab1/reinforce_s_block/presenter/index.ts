import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { reinforceSBlockSchema } from "../schema";
import { useState } from "react";
import { useSnackbar } from "notistack";
import { ReinforceSBlockEncrypt } from "../../../../../shared/algorithms/cesare_cipher/S_blocks/reinforce_s_blocks";

export const useReinforceSBlockFormPresenter = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [answer, setAnswer] = useState<string>();
  const form = useForm({ resolver: yupResolver(reinforceSBlockSchema) });
  const handleSubmit = form.handleSubmit((data, e) => {
    e?.preventDefault();
    try {
      const symbol = ReinforceSBlockEncrypt(data.key, data.text, data.j_in);
      setAnswer(symbol);
    } catch (e) {
      if (e instanceof Error) enqueueSnackbar(e.message);
    }
  });

  return { form, handleSubmit, answer };
};
