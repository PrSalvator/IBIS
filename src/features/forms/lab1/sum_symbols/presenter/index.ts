import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { sumSymbolsSchema } from "../schema";
import { useState } from "react";
import { SumSymbols } from "../../../../../shared/algorithms/cesare_cipher/converters";
import { useSnackbar } from "notistack";

export const useSumSymbolsFormPresenter = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [answer, setAnswer] = useState<string>();
  const form = useForm({ resolver: yupResolver(sumSymbolsSchema) });
  const handleSubmit = form.handleSubmit((data, e) => {
    e?.preventDefault();
    try {
      const symbolC = SumSymbols(data.symbolA, data.symbolB);
      setAnswer(symbolC);
    } catch (e) {
      if (e instanceof Error) enqueueSnackbar(e.message);
    }
  });

  return { form, handleSubmit, answer };
};
