import * as yup from "yup";

export const convertTextToNumArraySchema = yup.object().shape({
  numbers: yup.string().required("Введите текст"),
});
