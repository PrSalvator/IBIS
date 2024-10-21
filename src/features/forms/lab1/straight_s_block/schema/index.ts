import * as yup from "yup";

export const straightSBlockSchema = yup.object().shape({
  text: yup.string().required("Введите текст длиной 4 символа").length(4, "Введите текст длиной 4 символа"),
  key: yup.string().required("Введите ключ"),
  j_in: yup
    .number()
    .required("Введите целое положительное число")
    .integer("Введите целое положительное число")
    .positive("Введите целое положительное число")
    .typeError("")
});