// import { PolyAlphabatCesareDecrypt, PolyAlphabatCesareEncrypt } from "../modified_cipher";

// export function StraightSBlock(key: string, text: string, j_in: number): string {
//     if (text.length == 4) {
//         const out = PolyAlphabatCesareEncrypt(key, text, j_in);
//         return out;
//     }
//     else {
//         throw new Error("input error");//не равна 4
//     }
// }

// export function BackSBlock(key: string, text: string, j_in: number): string {
//     //isint
//     if (text.length == 4) {
//         const out = PolyAlphabatCesareDecrypt(key, text, j_in);
//         return out;
//     }
//     else {
//         throw new Error("input error");
//     }
// }