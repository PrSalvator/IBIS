import { SubtractSymbols, SumSymbols } from "./converters";

export function PolyAlphabatCesareEncrypt(key: string, text: string, j_in: number): string {
    if (!Number.isInteger(j_in)) {
        throw new Error("Функция принимает на вход только целые числа.");
    }

    let i = 0;
    const n = text.length;
    const k = key.length;
    let out = "";
    let t_k = "_";

    for (i; i < n; i++) {
        const t_i = text[i];

        const q = (i + j_in) % k;
        t_k = SumSymbols(t_k, key[q]);

        out += SumSymbols(t_k, t_i);
    }

    return out;
}

export function PolyAlphabatCesareDecrypt(key: string, text: string, j_in: number): string {
    if (!Number.isInteger(j_in)) {
        throw new Error("Функция принимает на вход только целые числа.");
    }

    let i = 0;
    const n = text.length;
    const k = key.length;
    let out = "";
    let t_k = "_";

    for (i; i < n; i++) {
        const t_i = text[i];

        const q = (i + j_in) % k;
        t_k = SumSymbols(t_k, key[q]);

        out += SubtractSymbols(t_i, t_k);
    }

    return out;
}