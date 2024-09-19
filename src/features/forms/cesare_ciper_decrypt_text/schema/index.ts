import * as yup from "yup";

export const cesareCipherDecryptTextSchema = yup.object().shape({
  text: yup
    .string()
    .required("Введите текст"),
  key: yup
    .string()
    .required("Введите ключ"),
});
