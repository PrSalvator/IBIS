import { Converter } from "./converter";
//import { Validator } from "./validator";

export class ConverterLab2 extends Converter {
    // validator: Validator;

    // constructor(validator: Validator) {
    //     super(validator);
    // }

    blockToNum(block: string): number {
        // if (!this.validator.isCyrillicText(block)) {
        //     throw new Error('Функция принимает на вход текст, содержащий только русские заглавные буквы, не включая "Ъ" и "Ё".');
        // }

        if (block.length != 4) {
            throw new Error('Длина блока должна быть равна 4.');
        }

        let pos = 1;
        const temp = super.ConvertTextToNumArray(block);
        let i = 3;
        let out = 0;
        for (i; i >= 0; i--) {
            out = out + pos * temp[i];
            pos = pos * 32;
        }
        return out;
    }

    numToBlock(num: number): string {

        if (num < 0 || num > 1048575) {
            throw new Error("Число должно входить в диапазон от 0 до 1048575.");
        }

        let rem = num;
        let i = 3;
        const arr = [];
        for (i; i >= 0; i--) {
            arr[i] = rem % 32;
            rem = Math.round(rem / 32);
        }
        return super.ConvertNumArrayToText(arr);
    }

    numToBin(num: number): number[] {
        if (num < 0 || num > 1048575) {
            throw new Error("Число должно входить в диапазон от 0 до 1048575.");
        }

        let rem = num;
        const out = [];
        for (let i = 0; i < 20; i++) {
            out[19 - i] = rem % 2;
            rem = Math.round(rem / 2);
        }
        return out;
    }

    numToDec(binNum: number[]): number {
        if (binNum.length != 20) {
            throw new Error("Массив должен содержать 20 элементов.");
        }
        for (let i = 0; i < binNum.length; i++) {
            if (binNum[i] != 0 || binNum[i] != 1) {
                throw new Error("Массив может состоять только из нулей и единиц.");
            }
        }

        let out = 0;
        for (let i = 0; i < 20; i++) {
            out = 2 * out + binNum[i];
        }
        return out;
    }
}