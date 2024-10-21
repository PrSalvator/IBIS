import { ConverterLab2 } from "./converter_lab2";
import { WrapHCLCG } from './wrapHCLCG';

export class WrapCHCLCGM extends WrapHCLCG {

    constructor(seed: string, /*state_in: number[],*/ set_in: number[][]) {

        const converter = new ConverterLab2();
        const seedM = converter.CheckSeed(seed);

        super(seedM, set_in)

        let i = 0;
        while (i < 4) {
            if (i > 0) {
                for (let j = 0; j <= i; j++) {
                    this.HCLCGs[i].Next();
                }
            }

            i++;
        }
    }
}