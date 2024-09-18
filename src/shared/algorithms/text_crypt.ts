import { Decrypt, Encrypt } from "./cesare_cipher";

export function EncryptText(text: string, key: string): string {
    const n = text.length;
    let i = 0;
    let out = "";

    for (i; i < n; i++) {
        out += Encrypt(text[i], key);
    }

    return out;
}

export function DecryptText(modifiedText: string, key: string): string {
    const n = modifiedText.length;
    let i = 0;
    let out = "";

    for (i; i < n; i++) {
        out += Decrypt(modifiedText[i], key);
    }

    return out;
}