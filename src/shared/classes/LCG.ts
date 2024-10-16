export class LCG {

    stateIn: number; // 
    a: number; // 
    c: number; // 
    m: number; // 

    constructor(stateIn: number, a: number, c: number, m: number,) {
        this.stateIn = stateIn;
        this.a = a;
        this.c = c;
        this.m = m;
    }

    Next(stateIn: number, a: number, c: number, m: number): number {
        return ((a * stateIn + c) % m);
    }
}