export class Validator {

    isCyrillicLetter(letter: string): boolean {
        const code = letter.charCodeAt(0);

        // Проверка на диапазон от "А" до "Я" без "Ъ"
        return (code >= 0x0410 && code <= 0x042F && code !== 0x042A) || letter === '_';
    }

    isCyrillicText(text: string): boolean {
        const letters = text.split('');
        letters.forEach(x => {
            if (!this.isCyrillicLetter(x)) {
                return false;
            }
        });
        return true;
    }

    isIntegerArray(arr: number[]): boolean {
        for (let i = 0; i < arr.length; i++) {
            if (!Number.isInteger(arr[i])) {
                return false;
            }
        }

        return true;
    }
}