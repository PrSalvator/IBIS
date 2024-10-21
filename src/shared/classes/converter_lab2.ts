import { CesareCipherLab2 } from "./cesare_cipher_lab2";
import { Converter } from "./converter";
//import { Validator } from "./validator";

export class ConverterLab2 extends Converter {
  // validator: Validator;

  // constructor(validator: Validator) {
  //     super(validator);
  // }

  BlockToNum(block: string): number {
    // if (!this.validator.isCyrillicText(block)) {
    //     throw new Error('Функция принимает на вход текст, содержащий только русские заглавные буквы, не включая "Ъ" и "Ё".');
    // }

    if (block.length != 4) {
      throw new Error("Длина блока должна быть равна 4.");
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

  NumToBlock(num: number): string {
    if (num < 0 || num > 1048575) {
      throw new Error("Число должно входить в диапазон от 0 до 1048575.");
    }

    let rem = num;
    let i = 3;
    const arr = [];
    for (i; i >= 0; i--) {
      arr[i] = rem % 32;
      rem = Math.floor(rem / 32);
    }
    return super.ConvertNumArrayToText(arr);
  }

  NumToBin(num: number): number[] {
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

  NumToDec(binNum: number[]): number {
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

  BinToDec(nums: number[]): number {
    return parseInt(nums.join(""), 2);
  }

  DecToBin(num_in: number): number[] {
    const zeros = Array(20).fill(0);
    const bin = num_in
      .toString(2)
      .split("")
      .map((x) => Number(x));

    return zeros.concat(bin).splice(-20);
  }

  MakeSeed(block: string): string[] {
    //?
    const cesare = new CesareCipherLab2();

    const str1 = "ПЕРВЫЙ_ГЕНЕРАТОР";
    const str2 = "ВТОРОЙ_ГЕНЕРАТОР";
    const str3 = "ТРЕТИЙ_ГЕНЕРАТОР";

    const out = [];
    out[1] = cesare.oneSideFunction(block, str1, 10);
    out[2] = cesare.oneSideFunction(block, str2, 10);
    out[3] = cesare.oneSideFunction(block, str3, 10);

    return out;
  }

  SeedToNums(array_in: string[]): number[] {
    const out = [];
    let i = 0;
    while (i < 3) {
      out[i] = this.BlockToNum(array_in[i]);
      i++;
    }
    return out;
  }

  CheckSeed(block_in: string): string {
    const cesare = new CesareCipherLab2();
    const C = "ОТВЕТСТВЕННЫЙ_ПОДХОД";

    const T = [];
    for (let i = 0; i < 3; i++) {
      // где-то тут мб в циклах неправильная длина стоит
      T[i] = block_in.substr(i * 4, 4);
    }

    for (let j = 0; j < 3; j++) {
      // где-то тут мб в циклах неправильная длина стоит
      for (let i = j + 1; i < 4; i++) {
        // где-то тут мб в циклах неправильная длина стоит
        if (T[i] === T[j]) {
          T[i] = cesare.oneSideFunction(T[j], C, j + 2 * i);
        }
      }
    }

    return T.join("");
  }
}
