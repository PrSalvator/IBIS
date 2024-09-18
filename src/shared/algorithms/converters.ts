import { isCyrillicLetter, isCyrillicText } from "../validators/cyrillic_validator";
import { isIntegerArray } from "../validators/int_validator";

export function GetCodeBySymbol(symbol: string): number {
  if (symbol.length != 1) {
    throw new Error("Функция принимает на вход только 1 символ.");
  }

  symbol = symbol.toUpperCase();

  if (!isCyrillicLetter(symbol)) {
    throw new Error('Функция принимает на вход только русские заглавные буквы, не включая "Ъ" и "Ё".')
  }

  const code = symbol.charCodeAt(0);
  if (code != 95) {
    let out = code - 1039
    if (code > 1066) {
      out = out - 1;
    }
    return out;
  }
  else {
    return 0;
  }
};

export function GetSymbolByCode(code: number): string {
  if (code != 0) {
    code = code % 32;
    let out = code + 1039;
    if (code > 26) {
      out = out + 1;
    }
    return String.fromCharCode(out);
  }
  else {
    return "_";
  }
}

export function SumSymbols(symbolA: string, symbolB: string): string {
  if (symbolA.length != 1 || symbolB.length != 1) {
    throw new Error("Функция принимает на вход только 1 символ.");
  }

  symbolA = symbolA.toUpperCase();
  symbolB = symbolB.toUpperCase();

  if (!(isCyrillicLetter(symbolA) && isCyrillicLetter(symbolB))) {
    throw new Error('Функция принимает на вход только русские заглавные буквы, не включая "Ъ" и "Ё".')
  }

  const codeA = GetCodeBySymbol(symbolA);
  const codeB = GetCodeBySymbol(symbolB);

  const resultCode = (codeA + codeB) % 32;

  const resultSymbol = GetSymbolByCode(resultCode);

  return resultSymbol;
}

export function SubtractSymbols(symbolA: string, symbolB: string): string {
  if (symbolA.length != 1 || symbolB.length != 1) {
    throw new Error("Функция принимает на вход только 1 символ.");
  }

  symbolA = symbolA.toUpperCase();
  symbolB = symbolB.toUpperCase();

  if (!(isCyrillicLetter(symbolA) && isCyrillicLetter(symbolB))) {
    throw new Error('Функция принимает на вход только русские заглавные буквы, не включая "Ъ" и "Ё".')
  }

  const codeA = GetCodeBySymbol(symbolA);
  const codeB = GetCodeBySymbol(symbolB);

  const resultCode = ((codeA - codeB) + 32) % 32;

  const resultSymbol = GetSymbolByCode(resultCode);

  return resultSymbol;
}

export function ConvertTextToNumArray(str: string): number[] {
  if (!isCyrillicText(str)) {
    throw new Error('Функция принимает на вход текст, содержащий только русские заглавные буквы, не включая "Ъ" и "Ё".');
  }

  const n = str.length;
  let i = 0;
  const out = [];

  for (i; i < n; i++) {
    out.push(GetCodeBySymbol(str[i]));
  }

  return out;
}

export function ConvertNumArrayToText(arr: number[]): string {
  if (!isIntegerArray(arr)) {
    throw new Error("Функция принимает на вход только целые числа.");
  }
  const n = arr.length;
  let i = 0;
  let out = "";

  for (i; i < n; i++) {
    out += GetSymbolByCode(arr[i]);
  }
  return out;
}
