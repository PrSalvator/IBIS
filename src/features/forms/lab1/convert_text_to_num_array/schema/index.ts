import * as yup from "yup";

export const convertTextToNumArraySchema = yup.object().shape({
  text: yup
    .string()
    .required("Введите текст")
});