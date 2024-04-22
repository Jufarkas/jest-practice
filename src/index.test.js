import { capitalize, reverseString, calculator, caesarCipher, analyzeArray } from "./index.js";


test('return first char capitalized', () => {
    expect(capitalize('billy')).toBe('B');
    expect(capitalize('car')).toBe('C');
    expect(capitalize('annie')).toBe('A');
    expect(capitalize('dog')).toBe('D');
    expect(capitalize('frank')).toBe('F');
});

test('return string reversed', () => {
    expect(reverseString("Hello")).toBe("olleH");
    expect(reverseString("yodEl")).toBe("lEdoy");
    expect(reverseString("bingo")).toBe("ognib");
    expect(reverseString("backwards")).toBe("sdrawkcab");
    expect(reverseString("it is what it is")).toBe("si ti tahw si ti");
});

test('return appropriate math result', () => {
    expect(calculator.add(2, 2)).toBe(4);
    expect(calculator.subtract(3, 2)).toBe(1);
    expect(calculator.divide(8, 2)).toBe(4);
    expect(calculator.multiply(5, 2)).toBe(10);
});

test('returns caesar cipher of string, no key || key == 0', () => {
    expect(caesarCipher('test', 0)).toBe('TEST');
    expect(caesarCipher('testing')).toBe('TESTING');
});

test('returns caesar cipher of string, with key', () => {
    expect(caesarCipher('abcd', 1)).toBe('BCDE');
    expect(caesarCipher('holy moly', 5)).toBe('MTQD RTQD');
    expect(caesarCipher('doodad', 12)).toBe('PAAPMP');
});


test('return array properties: avg, min, max, length', () => {
    expect(analyzeArray([1,8,3,4,2,6])).toEqual({average: 4, min: 1, max: 8, length: 6});
    expect(analyzeArray([17,18,31,4,21])).toEqual({average: 18, min: 4, max: 31, length: 5});
    expect(analyzeArray([17,18])).toEqual({average: 17, min: 17, max: 18, length: 2});
    expect(analyzeArray([1])).toEqual({average: 1, min: 1, max: 1, length: 1})
});

test ('returns null if array is empty or not included', () => {
    expect(analyzeArray([])).toBe(null);
    expect(analyzeArray()).toBe(null);
});