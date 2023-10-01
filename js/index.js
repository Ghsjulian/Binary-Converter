"use strict";
function ghs__(tag) {
    return document.querySelector(tag);
}

var result = ghs__("#result");
var output = ghs__("#output");
var Btn = ghs__("#btn");

function binaryToDecimal(binary) {
    var data = parseInt(binary, 2);
    result.innerHTML = `Decimal : <span id="output">${data}`;
}
function decimalToBinary(decimal) {
    if (decimal === 0) {
        return "0";
    }
    let binaryResult = "";
    while (decimal > 0) {
        const remainder = decimal % 2;
        binaryResult = remainder.toString() + binaryResult;
        decimal = Math.floor(decimal / 2);
    }

    result.innerHTML = `Binary : <span id="output">${binaryResult}`;
}


function binaryToOctal(binaryNumber) {
    while (binaryNumber.length % 3 !== 0) {
        binaryNumber = '0' + binaryNumber;
    }
    const binaryToOctalTable = ['000', '001', '010', '011', '100', '101', '110', '111'];
    let octalResult = '';
    for (let i = 0; i < binaryNumber.length; i += 3) {
        const binaryGroup = binaryNumber.slice(i, i + 3);
        const octalDigit = binaryToOctalTable.indexOf(binaryGroup);
        octalResult += octalDigit.toString();
    }
    
    result.innerHTML = `Octal Result : <span id="output">${octalResult}`;
}

 


function binaryToHexadecimal(binaryNumber) {
    while (binaryNumber.length % 4 !== 0) {
        binaryNumber = '0' + binaryNumber;
    }
    const binaryToHexTable = {
        '0000': '0',
        '0001': '1',
        '0010': '2',
        '0011': '3',
        '0100': '4',
        '0101': '5',
        '0110': '6',
        '0111': '7',
        '1000': '8',
        '1001': '9',
        '1010': 'A',
        '1011': 'B',
        '1100': 'C',
        '1101': 'D',
        '1110': 'E',
        '1111': 'F'
    };
    
    let hexadecimalResult = '';
    
    // Convert each group of 4 binary digits to hexadecimal
    for (let i = 0; i < binaryNumber.length; i += 4) {
        const binaryGroup = binaryNumber.slice(i, i + 4);
        const hexDigit = binaryToHexTable[binaryGroup];
        hexadecimalResult += hexDigit;
    }
    
    result.innerHTML = `Hexadecimal : <span id="output">${hexadecimalResult}`;
}




Btn.onclick = (e) => {
    e.preventDefault();
    var select = ghs__("#select");
    var value = ghs__("#binary").value;
    var type = select.options[select.selectedIndex].text;

    switch (type) {
        case "Decimal":
            binaryToDecimal(value);
            break;
        case "Binary":
            decimalToBinary(value);
            break;
        case "Octal":
            binaryToOctal(value);
            break;
        case "Hexadecimal":
            binaryToHexadecimal(value)
            break;
        default:
            result.innerHTML = '<span id="err">Select Type Please !</span>';
    }
};
