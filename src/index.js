import './style.css';

export function capitalize(string){
    return string.charAt(0).toUpperCase();
}

export function reverseString(string){
    return string.split('').reverse().join('');
}

export const calculator = {
    add:    function (a, b){
        return a + b;
    },
    subtract: function (a, b){
        return a - b;
    },
    divide: function (a, b){
        return a / b;
    },
    multiply: function (a, b){
        return a * b;
    },
};

export function caesarCipher(string, key){
    if (key === 0 || key === undefined){
      return string.toUpperCase();
    }

    let cipherAlphabet = createCipherAlphabet(key);
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    if (key){
        let stringSplit = string.split('');
        let cipherArrayIndex = [];
        for(let i = 0; i < stringSplit.length; i++){
          cipherArrayIndex.push(alphabet.findIndex(
          (letter) => letter === stringSplit[i]));
        }
        let newString = [];
        cipherArrayIndex.forEach(value => {
            // console.log(value);
            if(value === -1){
                newString.push(' ');
            }
          newString.push(cipherAlphabet[value]);
        })
      return newString.join('');
    }
}

function createCipherAlphabet(key){
    let cipherAlphabet = [];
    for(let i = 0; i < 25; i++){
        const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
        cipherAlphabet.push(alphabet[key].toUpperCase());

        if(alphabet[key] === 'z'){
            key = 0;
            cipherAlphabet.push(alphabet[key].toUpperCase());
        }

        key++;
    }

    return cipherAlphabet;
}


export function analyzeArray(arr){
    if (arr === undefined || arr.length === 0){
        return null;
    }

    arr.sort((a, b) => a-b);
    let obj = {};
    obj.average = Math.floor((arr.reduce((a, b) => a + b) / arr.length));
    obj.min = arr[0];
    obj.max = arr[arr.length - 1];
    obj.length = arr.length;
    return obj;
}