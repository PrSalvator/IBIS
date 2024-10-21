import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { getCodeBySymbolSchema } from "../schema";
import { useState } from "react";
import { GetCodeBySymbol } from "../../../../../shared/algorithms/cesare_cipher/converters";
import { useSnackbar } from "notistack";
import { Converter } from "../../../../../shared/classes/converter";

const converter = new Converter();

export const useGetCodeBySymbolFormPresenter = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [answer, setAnswer] = useState<number>();
  const form = useForm({ resolver: yupResolver(getCodeBySymbolSchema) });
  const handleSubmit = form.handleSubmit((data, e) => {
    e?.preventDefault();
    try {
      const number = converter.GetCodeBySymbol(data.symbol);
      setAnswer(number);
    } catch (e) {
      if (e instanceof Error) enqueueSnackbar(e.message);
    }
  });

  return { form, handleSubmit, answer };
};
