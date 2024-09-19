//import { isCyrillicLetter } from "../validators/cyrillic_validator";
import { SubtractSymbols, SumSymbols } from "./converters";

export function Encrypt(symbol: string, key: string): string {
    const modifiedSymbol = SumSymbols(symbol, key);
    return modifiedSymbol;
}

export function Decrypt(modifiedSymbol: string, key: string): string {
    const symbol = SubtractSymbols(modifiedSymbol, key);
    return symbol;
}