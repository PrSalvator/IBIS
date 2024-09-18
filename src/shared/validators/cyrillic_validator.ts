export function isCyrillicLetter(letter: string): boolean {
    const code = letter.charCodeAt(0);

    // Проверка на диапазон от "А" до "Я" без "Ъ"
    return (code >= 0x0410 && code <= 0x042F && code !== 0x042A) || letter === '_';
}

export function isCyrillicText(text: string): boolean {
    const letters = text.split('');
    letters.forEach(x => {
        if (!isCyrillicLetter(x)) {
            return false;
        }
    });
    return true;
}