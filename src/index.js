module.exports = function toReadable (number) {
        const numberToString = number.toString();
        const numbers = {
            zero: 'zero',
            one: 'one',
            two: 'two',
            three: 'three',
            four: 'four',
            five: 'five',
            six: 'six',
            seven: 'seven',
            eight: 'eight',
            nine: 'nine',
            ten: 'ten',
            eleven: 'eleven',
            twelve: 'twelve',
            thirteen: 'thirteen',
            fourteen: 'fourteen',
            fifteen: 'fifteen',
            sixteen: 'sixteen',
            seventeen: 'seventeen',
            eighteen: 'eighteen',
            nineteen: 'nineteen',
            twenty: 'twenty',
            thirty: 'thirty',
            forty: 'forty',
            fifty: 'fifty',
            sixty: 'sixty',
            seventy: 'seventy',
            eighty: 'eighty',
            ninety: 'ninety',
            hundred: 'hundred',
            thousand: 'thousand'
        }
    
        const setOrderNumber = () => {
    
        }
        let singleDigitNumber = twoDigitNumber = threeDigitNumber = resultStr ='';
        
        if (numberToString.length === 1) {
            switch (numberToString) {
                case '0': singleDigitNumber += numbers.zero;
                break;
                case '1': singleDigitNumber += numbers.one;
                    break;
                case '2': singleDigitNumber += numbers.two;
                    break;
                case '3': singleDigitNumber += numbers.three;
                    break;
                case '4': singleDigitNumber += numbers.four;
                    break;
                case '5': singleDigitNumber += numbers.five;
                    break;
                case '6': singleDigitNumber += numbers.six;
                    break;
                case '7': singleDigitNumber += numbers.seven;
                    break;
                case '8': singleDigitNumber += numbers.eight;
                    break;
                case '9': singleDigitNumber += numbers.nine;
                    break;
            }
            resultStr = `${singleDigitNumber}`; }
        if ( numberToString.length === 2 ){
            if (numberToString[0] === '1'){
                switch (numberToString[1]){
                    case '0': twoDigitNumber += numbers.ten;
                    break;
                    case '1': twoDigitNumber += numbers.eleven;
                        break;
                    case '2': twoDigitNumber += numbers.twelve;
                        break;
                    case '3': twoDigitNumber += numbers.thirteen;
                        break;
                    case '4': twoDigitNumber += numbers.fourteen;
                        break;
                    case '5': twoDigitNumber += numbers.fifteen;
                        break;
                    case '6': twoDigitNumber += numbers.sixteen;
                        break;
                    case '7': twoDigitNumber += numbers.seventeen;
                        break;
                    case '8': twoDigitNumber += numbers.eighteen;
                        break;
                    case '9': twoDigitNumber += numbers.nineteen;
                        break;
                }
    
                resultStr = `${singleDigitNumber}`;
            }else {
                switch (numberToString[0]){
                    case '2': twoDigitNumber += numbers.twenty;
                        break;
                    case '3': twoDigitNumber += numbers.thirty;
                        break;
                    case '4': twoDigitNumber += numbers.forty;
                        break;
                    case '5': twoDigitNumber += numbers.fifty;
                        break;
                    case '6': twoDigitNumber += numbers.sixty;
                        break;
                    case '7': twoDigitNumber += numbers.seventy;
                        break;
                    case '8': twoDigitNumber += numbers.eighty;
                        break;
                    case '9': twoDigitNumber += numbers.ninety;
                        break;
                };
                switch (numberToString[1]) {
                    case '0': singleDigitNumber += '';
                    break;
                    case '1': singleDigitNumber += numbers.one;
                        break;
                    case '2': singleDigitNumber += numbers.two;
                        break;
                    case '3': singleDigitNumber += numbers.three;
                        break;
                    case '4': singleDigitNumber += numbers.four;
                        break;
                    case '5': singleDigitNumber += numbers.five;
                        break;
                    case '6': singleDigitNumber += numbers.six;
                        break;
                    case '7': singleDigitNumber += numbers.seven;
                        break;
                    case '8': singleDigitNumber += numbers.eight;
                        break;
                    case '9': singleDigitNumber += numbers.nine;
                        break;
                    default: singleDigitNumber += '';
                };
    
                resultStr = `${twoDigitNumber} ${singleDigitNumber}`;
            }
            resultStr = `${twoDigitNumber} ${singleDigitNumber}`;   }
        if (numberToString.length === 3 ){
            switch (numberToString[0]){
                case '1': threeDigitNumber += `${numbers.one} ${numbers.hundred}`;
                    break;
                case '2': threeDigitNumber += `${numbers.two} ${numbers.hundred}`;
                    break;
                case '3': threeDigitNumber += `${numbers.three} ${numbers.hundred}`;
                    break;
                case '4': threeDigitNumber += `${numbers.four} ${numbers.hundred}`;
                    break;
                case '5': threeDigitNumber += `${numbers.five} ${numbers.hundred}`;
                    break;
                case '6': threeDigitNumber += `${numbers.six} ${numbers.hundred}`;
                    break;
                case '7': threeDigitNumber += `${numbers.seven} ${numbers.hundred}`;
                    break;
                case '8': threeDigitNumber += `${numbers.eight} ${numbers.hundred}`;
                    break;
                case '9': threeDigitNumber += `${numbers.nine} ${numbers.hundred}`;
                    break;
            }
            if (numberToString[1] === '0' && numberToString[2] === '0'){
                return threeDigitNumber;
            
            }else if (numberToString[1] === '0'){
                switch (numberToString[2]) {
                    case '1': singleDigitNumber += numbers.one;
                        break;
                    case '2': singleDigitNumber += numbers.two;
                        break;
                    case '3': singleDigitNumber += numbers.three;
                        break;
                    case '4': singleDigitNumber += numbers.four;
                        break;
                    case '5': singleDigitNumber += numbers.five;
                        break;
                    case '6': singleDigitNumber += numbers.six;
                        break;
                    case '7': singleDigitNumber += numbers.seven;
                        break;
                    case '8': singleDigitNumber += numbers.eight;
                        break;
                    case '9': singleDigitNumber += numbers.nine;
                        break;
                };
                return `${threeDigitNumber} ${singleDigitNumber}`;
            } else if (numberToString[1] === '1'){
                switch (numberToString[2]){
                    case '0': twoDigitNumber += numbers.ten;
                    break;
                    case '1': twoDigitNumber += numbers.eleven;
                        break;
                    case '2': twoDigitNumber += numbers.twelve;
                        break;
                    case '3': twoDigitNumber += numbers.thirteen;
                        break;
                    case '4': twoDigitNumber += numbers.fourteen;
                        break;
                    case '5': twoDigitNumber += numbers.fifteen;
                        break;
                    case '6': twoDigitNumber += numbers.sixteen;
                        break;
                    case '7': twoDigitNumber += numbers.seventeen;
                        break;
                    case '8': twoDigitNumber += numbers.eighteen;
                        break;
                    case '9': twoDigitNumber += numbers.nineteen;
                        break;
                }
                return `${threeDigitNumber} ${twoDigitNumber}`;
            } else {
                switch (numberToString[1]){
                    case '0': twoDigitNumber += '';
                    break;
                    case '2': twoDigitNumber += numbers.twenty;
                        break;
                    case '3': twoDigitNumber += numbers.thirty;
                        break;
                    case '4': twoDigitNumber += numbers.forty;
                        break;
                    case '5': twoDigitNumber += numbers.fifty;
                        break;
                    case '6': twoDigitNumber += numbers.sixty;
                        break;
                    case '7': twoDigitNumber += numbers.seventy;
                        break;
                    case '8': twoDigitNumber += numbers.eighty;
                        break;
                    case '9': twoDigitNumber += numbers.ninety;
                        break;
                };
                switch (numberToString[2]) {
                    case '0': singleDigitNumber += '';
                    break;
                    case '1': singleDigitNumber += numbers.one;
                        break;
                    case '2': singleDigitNumber += numbers.two;
                        break;
                    case '3': singleDigitNumber += numbers.three;
                        break;
                    case '4': singleDigitNumber += numbers.four;
                        break;
                    case '5': singleDigitNumber += numbers.five;
                        break;
                    case '6': singleDigitNumber += numbers.six;
                        break;
                    case '7': singleDigitNumber += numbers.seven;
                        break;
                    case '8': singleDigitNumber += numbers.eight;
                        break;
                    case '9': singleDigitNumber += numbers.nine;
                        break;
                    default: singleDigitNumber += '';
                };
    
            }
            
            resultStr = `${threeDigitNumber} ${twoDigitNumber} ${singleDigitNumber}`;       }
        
        return resultStr.trim();
    
}
