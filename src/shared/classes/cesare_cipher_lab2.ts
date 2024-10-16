//import { SumLines } from "../algorithms/cesare_cipher/converters";
import { StraightSBlock } from "../algorithms/cesare_cipher/S_blocks/encryption_wrapper";
import { ReinforceSBlockEncrypt } from "../algorithms/cesare_cipher/S_blocks/reinforce_s_blocks";
//import { blockToNum } from "../algorithms/lab2/block_converter";
//import { CesareCipher } from "./cesare_cipher";
//import { Converter } from "./converter";
import { ConverterLab2 } from "./converter_lab2";

export class CesareCipherLab2 { // extends cesare cipher??

    //converter: Converter;
    converter: ConverterLab2;

    constructor(/*converter: Converter,*/ converter: ConverterLab2) {
        this.converter = converter;
        //this.converter2 = converter2;
    }

    //one side function
    public oneSideFunction(block: string, const_in: string, n: number): string {
        const data = block;
        const c = const_in.length;
        const C = "ТПУ" + const_in + const_in.substr(0, 4);
        let key = C.substr(3, 7);
        let i = 0;
        let temp = "";

        for (i; i < n; i++) {
            const q = ((i * 4) % c) + 3;
            temp = ReinforceSBlockEncrypt(key, StraightSBlock(key, data, 0), 0);
            const s = this.converter.blockToNum(temp) % 4;
            key = this.converter.SumLines(temp, C.substr(q - s, 4));
        }
        return temp;
    }
}