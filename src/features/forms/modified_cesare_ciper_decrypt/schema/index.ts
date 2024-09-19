import * as yup from "yup";

export const modifiedCesareCipherDecryptSchema = yup.object().shape({
  text: yup.string().required("Введите текст"),
  key: yup.string().required("Введите ключ"),
  j_in: yup
    .number()
    .required("Введите целое положительное число")
    .integer("Введите целое положительное число")
    .positive("Введите целое положительное число")
    .typeError("")
});
