import * as yup from "yup";

export const cesareCipherTextSchema = yup.object().shape({
  text: yup
    .string()
    .required("Введите символ"),
  key: yup
    .string()
    .required("Введите ключ"),
});
