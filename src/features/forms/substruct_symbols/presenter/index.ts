import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { SubtractSymbols } from "../../../../shared/algorithms/converters";
import { useSnackbar } from "notistack";
import { substructSymbolsSchema } from "../schema";

export const useSubstractSymbolsFormPresenter = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [answer, setAnswer] = useState<string>();
  const form = useForm({ resolver: yupResolver(substructSymbolsSchema) });
  const handleSubmit = form.handleSubmit((data, e) => {
    e?.preventDefault();
    try {
      const symbolC = SubtractSymbols(data.symbolA, data.symbolB);
      setAnswer(symbolC);
    } catch (e) {
      if (e instanceof Error) enqueueSnackbar(e.message);
    }
  });

  return { form, handleSubmit, answer };
};
