import { LCG } from "./LCG";

export class HCLCG {
  inner_state: number[];
  set: number[][];
  n: number;

  constructor(state_in: number[], set_in: number[][]) {
    this.inner_state = state_in;
    this.set = set_in;
    this.n = this.countUnityBits(this.inner_state[2]); //?
  }

  Next() {
    for (let i = 0; i < this.inner_state.length; i++) {
      this.inner_state[i] = new LCG(
        this.inner_state[i],
        this.set[i][0],
        this.set[i][1],
        this.set[i][2]
      ).Next();
    }
    this.n = this.countUnityBits(this.inner_state[2]);

    if (this.inner_state[2] % 2 === 0) {
      return this.composeNum(this.inner_state[0], this.inner_state[1], this.n);
    }
    return this.composeNum(this.inner_state[1], this.inner_state[0], this.n);
  }

  countUnityBits(num_in: number): number {
    let out = 0;

    for (let i = 0; i < 20; i++) {
      const temp = num_in % 2;
      num_in = Math.floor(num_in / 2);
      out += temp;
    }

    return out;
  }

  composeNum(num_1: number, num_2: number, count_in: number): number {
    if (count_in <= 0) {
      return num_1;
    }
    if (count_in >= 20) {
      return num_2;
    }

    const mask1 = (1 << (20 - count_in)) - 1;
    const mask2 = 0xFFFFF ^ mask1;

    num_1 &= mask2;
    num_2 &= mask1;
    return num_1 | num_2;
  }
}