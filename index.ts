export function isNullOrUndefined(value: any): boolean {
    return value === null || value === undefined;
}

export function isObjectEmpty(obj: object): boolean {
    return Object.keys(obj).length === 0;
}

export function capitalize(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export function debounce(func: Function, delay: number): Function {
    let timer;
    return function (...args: any[]) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}

export function deepCopy<T>(obj: T): T {
    return JSON.parse(JSON.stringify(obj));
}

export function flattenArray<T>(arr: T[][]): T[] {
    return arr.reduce((acc, val) => acc.concat(val), []);
}

export function uniqueValues<T>(arr: T[]): T[] {
    return [...new Set(arr)];
}

export function chunkArray<T>(arr: T[], size: number): T[][] {
    return Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
        arr.slice(i * size, i * size + size)
    );
}

export function shuffleArray<T>(arr: T[]): T[] {
    const shuffled = [...arr];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

export function sortByKey<T>(arr: T[], key: keyof T): T[] {
    return arr.slice().sort((a, b) => (a[key] > b[key] ? 1 : -1));
}