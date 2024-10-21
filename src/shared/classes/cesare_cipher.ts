//очень корявый класс

//import { Converter } from "./converter";
import { ConverterLab2 } from "./converter_lab2";

export class CesareCipher {
  converter: ConverterLab2;

  constructor() {
    this.converter = new ConverterLab2();
  }

  //#region cesare-cipher
  Encrypt(symbol: string, key: string): string {
    const modifiedSymbol = this.converter.SumSymbols(symbol, key);
    return modifiedSymbol;
  }

  Decrypt(modifiedSymbol: string, key: string): string {
    const symbol = this.converter.SubtractSymbols(modifiedSymbol, key);
    return symbol;
  }
  //#endregion

  //#region modified-cipher
  PolyAlphabatCesareEncrypt(key: string, text: string, j_in: number): string {
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
      t_k = this.converter.SumSymbols(t_k, key[q]);

      out += this.converter.SumSymbols(t_k, t_i);
    }

    return out;
  }

  PolyAlphabatCesareDecrypt(key: string, text: string, j_in: number): string {
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
      t_k = this.converter.SumSymbols(t_k, key[q]);

      out += this.converter.SubtractSymbols(t_i, t_k);
    }

    return out;
  }
  //#endregion

  //#region text-crypt
  EncryptText(text: string, key: string): string {
    const n = text.length;
    let i = 0;
    let out = "";

    for (i; i < n; i++) {
      out += this.Encrypt(text[i], key);
    }

    return out;
  }

  DecryptText(modifiedText: string, key: string): string {
    const n = modifiedText.length;
    let i = 0;
    let out = "";

    for (i; i < n; i++) {
      out += this.Decrypt(modifiedText[i], key);
    }

    return out;
  }
  //#endregion

  //#region reinforce-S-Blocks
  ReinforceSBlockEncrypt(key_in: string, text: string, j_in: number): string {
    if (!Number.isInteger(j_in)) {
      throw new Error("Функция принимает на вход только целые числа.");
    }

    let t = key_in;
    const n = 4;

    while (j_in > t.length - n) {
      t += t;
    }

    const key = t.substring(j_in, n);
    const k = this.converter.ConvertTextToNumArray(key);
    const b = this.converter.ConvertTextToNumArray(text);
    const q = k.reduce((acc, value) => acc + value) % 4;
    let i = 0;
    const iter = n - 1;

    for (i; i < iter; i++) {
      const j = (q + i + 1) % 4;
      const l = (q + i) % 4; //?
      b[j] = (b[l] + b[j]) % 32;
    }

    return this.converter.ConvertNumArrayToText(b);
  }

  ReinforceSBlockDecrypt(key_in: string, text: string, j_in: number): string {
    if (!Number.isInteger(j_in)) {
      throw new Error("Функция принимает на вход только целые числа.");
    }

    let t = key_in;
    const n = 4;

    while (j_in > t.length - n) {
      t += t;
    }

    const key = t.substring(j_in, n);
    const k = this.converter.ConvertTextToNumArray(key);
    const b = this.converter.ConvertTextToNumArray(text);
    const q = k.reduce((acc, value) => acc + value) % n;

    let i = 0;
    const iter = n - 1;

    for (i = iter - 1; i > -1; i--) {
      const j = (q + i + 1) % n;
      const l = (q + i) % n; //?
      b[j] = (b[j] - b[l] + 32) % 32;
    }

    return this.converter.ConvertNumArrayToText(b);
  }
  //#endregion

  //#region encryption-wrapper
  StraightSBlock(key: string, text: string, j_in: number): string {
    if (text.length == 4) {
      const out = this.PolyAlphabatCesareEncrypt(key, text, j_in);
      return out;
    } else {
      throw new Error("input error"); //не равна 4
    }
  }

  BackSBlock(key: string, text: string, j_in: number): string {
    if (text.length == 4) {
      const out = this.PolyAlphabatCesareDecrypt(key, text, j_in);
      return out;
    } else {
      throw new Error("input error");
    }
  }
  //#endregion
}
