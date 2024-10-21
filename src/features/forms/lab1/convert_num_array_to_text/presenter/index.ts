import { useSnackbar } from "notistack";
import { useState } from "react";
import { convertTextToNumArraySchema } from "../schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Converter } from "../../../../../shared/classes/converter";

const converter = new Converter();

export const useConvertNumArrayToTextFormPresenter = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [answer, setAnswer] = useState<string>();
  const form = useForm({ resolver: yupResolver(convertTextToNumArraySchema) });
  const handleSubmit = form.handleSubmit((data, e) => {
    e?.preventDefault();
    try {
      const decryptText = converter.ConvertNumArrayToText(
        data.numbers.split(" ").map((x) => Number(x))
      );
      setAnswer(decryptText);
    } catch (e) {
      if (e instanceof Error) enqueueSnackbar(e.message);
    }
  });

  return { form, handleSubmit, answer };
};
