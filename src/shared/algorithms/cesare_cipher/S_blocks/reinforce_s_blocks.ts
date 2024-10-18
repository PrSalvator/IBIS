// import { Converter } from "../../../classes/converter";
// import { Validator } from "../../../classes/validator";
// //import { ConvertNumArrayToText, ConvertTextToNumArray } from "../converters";

// const validator = new Validator();
// const converter = new Converter(validator);

// export function ReinforceSBlockEncrypt(key_in: string, text: string, j_in: number): string {
//     if (!Number.isInteger(j_in)) {
//         throw new Error("Функция принимает на вход только целые числа.");
//     }

//     let t = key_in;
//     const n = 4;

//     while (j_in > t.length - n) {
//         t += t;
//     }

//     const key = t.substring(j_in, n);
//     const k = converter.ConvertTextToNumArray(key);
//     const b = converter.ConvertTextToNumArray(text);
//     const q = k.reduce((acc, value) => acc + value) % 4;
//     let i = 0;
//     const iter = n - 1;

//     for (i; i < iter; i++) {
//         const j = (q + i + 1) % 4;
//         const l = (q + i) % 4; //?
//         b[j] = (b[l] + b[j]) % 32;
//     }

//     return converter.ConvertNumArrayToText(b);
// }

// export function ReinforceSBlockDecrypt(key_in: string, text: string, j_in: number): string {
//     if (!Number.isInteger(j_in)) {
//         throw new Error("Функция принимает на вход только целые числа.");
//     }

//     let t = key_in;
//     const n = 4;

//     while (j_in > t.length - n) {
//         t += t;
//     }

//     const key = t.substring(j_in, n);
//     const k = converter.ConvertTextToNumArray(key);
//     const b = converter.ConvertTextToNumArray(text);
//     const q = k.reduce((acc, value) => acc + value) % n;

//     let i = 0;
//     const iter = n - 1;

//     for (i = iter - 1; i > -1; i--) {
//         const j = (q + i + 1) % n;
//         const l = (q + i) % n; //?
//         b[j] = (b[j] - b[l] + 32) % 32;
//     }

//     return converter.ConvertNumArrayToText(b);
// }