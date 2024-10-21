import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useSnackbar } from "notistack";
import { getSymbolByCodeSchema } from "../schema";
import { GetSymbolByCode } from "../../../../../shared/algorithms/cesare_cipher/converters";

export const useGetSymbolByCodeFormPresenter = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [answer, setAnswer] = useState<string>();
  const form = useForm({ resolver: yupResolver(getSymbolByCodeSchema) });
  const handleSubmit = form.handleSubmit((data, e) => {
    e?.preventDefault();
    try {
      const symbol = GetSymbolByCode(data.number);
      setAnswer(symbol);
    } catch (e) {
      if (e instanceof Error) enqueueSnackbar(e.message);
    }
  });

  return { form, handleSubmit, answer };
};
