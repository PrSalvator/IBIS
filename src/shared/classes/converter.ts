import { Validator } from "./validator";

export class Converter {
    validator: Validator

    constructor(valid: Validator) {
        this.validator = valid;
    }

    GetCodeBySymbol(symbol: string): number {
        if (symbol.length != 1) {
            throw new Error("Функция принимает на вход только 1 символ.");
        }

        symbol = symbol.toUpperCase();

        if (!this.validator.isCyrillicLetter(symbol)) {
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

    GetSymbolByCode(code: number): string {
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

    SumSymbols(symbolA: string, symbolB: string): string {
        if (symbolA.length != 1 || symbolB.length != 1) {
            throw new Error("Функция принимает на вход только 1 символ.");
        }

        symbolA = symbolA.toUpperCase();
        symbolB = symbolB.toUpperCase();

        if (!(this.validator.isCyrillicLetter(symbolA) && this.validator.isCyrillicLetter(symbolB))) {
            throw new Error('Функция принимает на вход только русские заглавные буквы, не включая "Ъ" и "Ё".')
        }

        const codeA = this.GetCodeBySymbol(symbolA);
        const codeB = this.GetCodeBySymbol(symbolB);

        const resultCode = (codeA + codeB) % 32;

        const resultSymbol = this.GetSymbolByCode(resultCode);

        return resultSymbol;
    }

    SubtractSymbols(symbolA: string, symbolB: string): string {
        if (symbolA.length != 1 || symbolB.length != 1) {
            throw new Error("Функция принимает на вход только 1 символ.");
        }

        symbolA = symbolA.toUpperCase();
        symbolB = symbolB.toUpperCase();

        if (!(this.validator.isCyrillicLetter(symbolA) && this.validator.isCyrillicLetter(symbolB))) {
            throw new Error('Функция принимает на вход только русские заглавные буквы, не включая "Ъ" и "Ё".')
        }

        const codeA = this.GetCodeBySymbol(symbolA);
        const codeB = this.GetCodeBySymbol(symbolB);

        const resultCode = ((codeA - codeB) + 32) % 32;

        const resultSymbol = this.GetSymbolByCode(resultCode);

        return resultSymbol;
    }

    ConvertTextToNumArray(str: string): number[] {
        if (!this.validator.isCyrillicText(str)) {
            throw new Error('Функция принимает на вход текст, содержащий только русские заглавные буквы, не включая "Ъ" и "Ё".');
        }

        const n = str.length;
        let i = 0;
        const out = [];

        for (i; i < n; i++) {
            out.push(this.GetCodeBySymbol(str[i]));
        }

        return out;
    }

    ConvertNumArrayToText(arr: number[]): string {
        if (!this.validator.isIntegerArray(arr)) {
            throw new Error("Функция принимает на вход только целые числа.");
        }
        const n = arr.length;
        let i = 0;
        let out = "";

        for (i; i < n; i++) {
            out += this.GetSymbolByCode(arr[i]);
        }
        return out;
    }

    SumLines(str1: string, str2: string): string {
        if (str1.length == str2.length) {
            let out = "";
            for (let i = 0; i < str1.length; i++) {
                out = out + this.SumSymbols(str1[i], str2[i]);
            }
            return out;
        }
        throw new Error("эмм... чел не позорься");
    }
}