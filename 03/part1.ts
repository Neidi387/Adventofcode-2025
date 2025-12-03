import { input } from './input'; // Our puzzle input



const sum = input
    .map((line: string) => line.split('').map(Number))
    .map(banktoJoltace)
    .map(logAndEcho)
    .reduce((a: number, b: number) => a + b, 0);
    ;

console.log('The sum of all joltaces is:', sum); // My answer: 17031


















function banktoJoltace(bank: number[]): number {
    const firstDigitCandidates = bank.slice(0, bank.length -1);
    const firstDigit = Math.max(...firstDigitCandidates);
    const iFirstDigit = firstDigitCandidates.indexOf(firstDigit);

    const secondDigitCandidates = bank.slice(iFirstDigit + 1, bank.length);
    const secondDigit = Math.max(...secondDigitCandidates);

    return Number (String(firstDigit) + String(secondDigit));
}
























// Helper. Just logs and returns the same value
function logAndEcho<T>(value: T): T {
    console.log(value);
    return value;
}

