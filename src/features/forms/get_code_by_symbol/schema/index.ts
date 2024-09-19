import * as yup from "yup"

export const getCodeBySymbolSchema = yup.object().shape({
    symbol: yup.string().required("Введите символ").length(1, "Введите 1 символ")
})