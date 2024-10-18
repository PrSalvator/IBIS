//import { SumLines } from "../algorithms/cesare_cipher/converters";
//import { StraightSBlock } from "../algorithms/cesare_cipher/S_blocks/encryption_wrapper";
//import { ReinforceSBlockEncrypt } from "../algorithms/cesare_cipher/S_blocks/reinforce_s_blocks";
//import { blockToNum } from "../algorithms/lab2/block_converter";
//import { CesareCipher } from "./cesare_cipher";
//import { Converter } from "./converter";
import { CesareCipher } from "./cesare_cipher";
//import { ConverterLab2 } from "./converter_lab2";

export class CesareCipherLab2 extends CesareCipher { // extends cesare cipher??

    //converter: Converter;
    //converter: ConverterLab2;

    constructor() {
        super();
    }

    //one side function
    public oneSideFunction(block: string, const_in: string, n: number): string {
        const data = block;
        const c = const_in.length;
        const C = "ТПУ" + const_in + const_in.substr(0, 4);
        let key = C.substr(3, 4);
        let temp = "";

        for (let i = 0; i < n; i++) {
            const q = ((i * 4) % c) + 3;
            temp = super.ReinforceSBlockEncrypt(key, super.StraightSBlock(key, data, 0), 0);
            const s = this.converter.BlockToNum(temp) % 4;
            key = this.converter.SumLines(temp, C.substr(q - s, 4));
        }
        return temp;
    }
}