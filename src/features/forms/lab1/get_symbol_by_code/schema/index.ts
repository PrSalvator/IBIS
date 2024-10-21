import * as yup from "yup";

export const getSymbolByCodeSchema = yup.object().shape({
  number: yup
    .number()
    .integer("Введите целое число")
    .required("Введите число")
    .min(0, "Число должно быть не меньше 0")
    .max(32, "Число должно быть не больше 31").typeError("")
    .typeError(""),
});
