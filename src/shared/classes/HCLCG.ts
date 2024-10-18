import { ConverterLab2 } from "./converter_lab2";
import { LCG } from "./LCG";

export class HCLCG {
    inner_state: number[];
    set: number[][];
    n: number;

    constructor(state_in: number[], set_in: number[][]) {
        const in_st = [];
        for (let i = 0; i < state_in.length; i++) {
            in_st[i] = new LCG(state_in[i], set_in[i][0], set_in[i][1], set_in[i][2]).Next();
        }

        this.inner_state = in_st;
        this.set = set_in;
        this.n = this.countUnityBits(this.inner_state[2]) //?
    }

    Next() {
        this.n = this.countUnityBits(this.inner_state[2]);
        for (let i = 0; i < this.inner_state.length; i++) {
            this.inner_state[i] = new LCG(this.inner_state[i], this.set[i][0], this.set[i][1], this.set[i][2]).Next();
        }

        if (this.inner_state[2] % 2 == 0) {
            return this.composeNum(this.inner_state[0], this.inner_state[1], this.n);
        }

        return this.composeNum(this.inner_state[1], this.inner_state[0], this.n);
    }

    countUnityBits(num_in: number): number {
        let out = 0;

        for (let i = 0; i < 19; i++) {
            const temp = num_in % 2;
            num_in = Math.round(num_in / 2);
            out += temp;
        }

        return out;
    }

    composeNum(num_1: number, num_2: number, count_in: number): number {
        if (count_in > 0 && count_in < 20) {

            const converter = new ConverterLab2();

            const bin_num_1 = converter.DecToBin(num_1);
            const bin_num_2 = converter.DecToBin(num_2);

            bin_num_2.splice(0, count_in);
            const bin_num_1_short = bin_num_1.splice(0, count_in).concat(bin_num_2).splice(-20);

            return converter.BinToDec(bin_num_1_short);
        }

        if (count_in === 0) {
            return num_1;
        }

        return num_2;
    }
}