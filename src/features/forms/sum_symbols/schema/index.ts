import * as yup from "yup"

export const sumSymbolsSchema = yup.object().shape({
    symbolA: yup.string().required("Введите символ").length(1, "Введите 1 символ"),
    symbolB: yup.string().required("Введите символ").length(1, "Введите 1 символ")
})