export function isIntegerArray(arr: number[]): boolean {
    for (let i = 0; i < arr.length; i++) {
        if (!Number.isInteger(arr[i])) {
            return false;
        }
    }

    return true;
}