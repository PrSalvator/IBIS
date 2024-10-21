import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { modifiedCesareCipherDecryptSchema } from "../schema";
import { useState } from "react";
import { useSnackbar } from "notistack";
import { CesareCipher } from "../../../../../shared/classes/cesare_cipher";

const cesare_cipher = new CesareCipher();
export const useModifidCesareCipherDecryptFormPresenter = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [answer, setAnswer] = useState<string>();
  const form = useForm({
    resolver: yupResolver(modifiedCesareCipherDecryptSchema),
  });
  const handleSubmit = form.handleSubmit((data, e) => {
    e?.preventDefault();
    try {
      const symbol = cesare_cipher.PolyAlphabatCesareDecrypt(
        data.key,
        data.text,
        data.j_in
      );
      setAnswer(symbol);
    } catch (e) {
      if (e instanceof Error) enqueueSnackbar(e.message);
    }
  });

  return { form, handleSubmit, answer };
};
