import { ConverterLab2 } from "./converter_lab2";
import { HCLCG } from "./HCLCG";

export class WrapHCLCG {
    seed: string;
    HCLCGs: HCLCG[];

    constructor(seed: string, /*state_in: number[],*/ set_in: number[][]) {
        // eslint-disable-next-line no-debugger

        this.HCLCGs = [];
        //super(state_in, set_in);
        this.seed = seed;

        const converter = new ConverterLab2();
        let i = 0;
        while (i < 4) {
            this.HCLCGs[i] = new HCLCG(converter.SeedToNums(converter.MakeSeed(this.seed.substr(i * 4, 4))), set_in);;
            //this.inner_state.push(converter.MakeSeed(this.seed.substr(i * 4, 4)));
            i++;
        }
    }

    Next(): string {
        let stream = '';
        const converter = new ConverterLab2();

        let i = 0;
        while (i < 4) {
            let temp = 0;
            let sign = 1;

            let j = 0;
            while (j < 4) {
                temp = (sign * this.HCLCGs[j].Next() + 1048576 + temp) % 1048576;
                sign = -sign;
                j++;
            }
            stream += converter.NumToBlock(temp);
            i++;
        }


        return stream;
    }
}