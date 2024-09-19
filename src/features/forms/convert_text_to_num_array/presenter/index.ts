import { useSnackbar } from "notistack";
import { useState } from "react";
import { convertTextToNumArraySchema } from "../schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { ConvertTextToNumArray } from "../../../../shared/algorithms/converters";

export const useConvertTextToNumArrayFormPresenter = () => {
    const { enqueueSnackbar } = useSnackbar();
    const [answer, setAnswer] = useState<number[]>();
    const form = useForm({ resolver: yupResolver(convertTextToNumArraySchema) });
    const handleSubmit = form.handleSubmit((data, e) => {
      e?.preventDefault();
      try {
        const encryptText = ConvertTextToNumArray(data.text);
        setAnswer(encryptText);
      } catch (e) {
        if (e instanceof Error) enqueueSnackbar(e.message);
      }
    });
  
    return { form, handleSubmit, answer };
  };