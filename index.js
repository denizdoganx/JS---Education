let containerFirst, containerSecond;
const newLine = "\r\n";
let sidebarElementList = [], sidebarElementNameList = [];
window.onload = () => {
    const aTagsHtmlCollecion = document.querySelector(".sidebar").children;
    sidebarElementList = Array.from(aTagsHtmlCollecion);
    sidebarElementList.forEach((element) => {
        sidebarElementNameList.push(element.textContent);
    });

    containerFirst = document.getElementsByClassName("first")[0];
    containerSecond = document.getElementsByClassName("second")[0];
    const sideBarDiv = document.getElementsByClassName("sidebar")[0];
    const sideBarButtons = Array.from(sideBarDiv.children);
    sideBarButtons.forEach(a => {
        a.onclick = () => {
            makeAllDeactive();
            a.classList.add("active");
            decodeButtonName(a);
        };
    });

    var makeAllDeactive = () => {
        sideBarButtons.forEach(a => {
            a.classList.remove("active");
        });
    }
};

var decodeButtonName = (element) => {
    switch (element.innerText) {
        case sidebarElementNameList[0]:
            calculateBMI();
            break;
        case sidebarElementNameList[1]:
            calculateGasolinePrice()
            break;
        case sidebarElementNameList[2]:
            primeControl();
            break;
        case sidebarElementNameList[3]:
            calculateFactorial();
            break;
        case sidebarElementNameList[4]:
            calculateArmstrongNumber();
            break;
        case sidebarElementNameList[5]:
            calculateLetterCounter();
            break;
        case sidebarElementNameList[6]:
            calculatePerfectNumber();
            break;
        case sidebarElementNameList[7]:
            conversionDecToBin();
            break;
        case sidebarElementNameList[8]:
            conversionBinToDec();
            break;
        default:
            break;
    }
} 

var calculateBMI = () => {
    const height = Number(prompt("Enter your height in meters"));
    const weight = Number(prompt("Enter your weight in kilograms"));
    const bmi = weight / (height**2);

    containerFirst.innerText = bmi.toFixed(2);
    
    if (bmi < 18.5) {
        containerSecond.innerHTML = "<i>You are under your ideal weight.</i>"
    } else if(bmi <= 24.9) {
        containerSecond.innerHTML = "<i>You are in your ideal weight.</i>"
    } else if(bmi <= 29.9) {
        containerSecond.innerHTML = "<i>You are over your ideal weight.</i>"
    } else if(bmi <= 39.9) {
        containerSecond.innerHTML = "<i>You are way over your ideal weight. (obese)</i>"
    } else {
        containerSecond.innerHTML = "<i>You are way above your ideal weight. (morbidly obese)</i>"
    }
}

var calculateGasolinePrice = () => {
    const diesel = 24.53;
    const gasoline = 22.25;
    const lpg = 11.1; 
    const textOfPrompt = 
    "1 - Diesel" +
    newLine + 
    "2 - Gasoline" + 
    newLine + 
    "3 - LPG" + 
    newLine + 
    "Select fuel type";
    const typeOfFuel = Number(prompt(textOfPrompt));
    if(typeOfFuel === 1 || typeOfFuel === 2 || typeOfFuel === 3) {
        const amountOfFuel = Number(prompt("How much fuel do you want?"));
        if(!isNaN(amountOfFuel)) {
            const customerCash = Number(prompt("How much balance do you have?"));
            if(!isNaN(customerCash)) {
                let price, explanation;
                switch (typeOfFuel) {
                    case 1:
                        price = amountOfFuel * diesel;
                        break;
                    case 2:
                        price = amountOfFuel * gasoline;
                        break;
                    case 3:
                        price = amountOfFuel * lpg;
                        break;
                }
                if(price <= customerCash) {
                    explanation = "Your money is enough to buy it."
                }
                else {
                    explanation = "Your money isn't enough to buy it."
                }
                containerFirst.innerHTML = price.toFixed(2) + "₺";
                containerSecond.innerHTML = "<i>"+ explanation + "</i>";
            }
            else {
                alert("Fill the desired field with number only!");
            }
        }
        else {
            alert("Fill the desired field with number only!");
        }
    }
    else {
        alert("Do not enter any value other than 1, 2, 3!");
    }
}

var primeControl = () => {
    const num = Number(prompt("Enter a number"));
    if(!isNaN(num)) {
        if(isPrime(num)) {
            containerSecond.innerHTML = "The given number is a prime number";
        } else {
            containerSecond.innerHTML = "The given number isn't a prime number";
        }
        containerFirst.innerHTML = "";
    } else {
        alert("Just enter numbers!");
    }
}

var calculateFactorial = () => {
    const num = Number(prompt("Enter a number"));
    if(!isNaN(num)) {
        containerFirst.innerHTML = "";
        containerSecond.innerHTML = factorial(num);
    } else {
        alert("Just enter numbers!");
    }
}

var calculateArmstrongNumber = () => {
    const num = Number(prompt("Enter a number"));
    if(!isNaN(num)) {
        const result = isArmstrong(num);
        if(result[0]) {
            containerFirst.innerHTML = "The given number is Armstrong Number";
            containerSecond.innerHTML = result[1];
        } else {
            containerFirst.innerHTML = "The given number isn't Armstrong Number";
            containerSecond.innerHTML = "";
        }
    } else {
        alert("Just enter numbers!");
    }
}

var calculateLetterCounter = () => {
    const enteredValue = prompt("Enter a word");
    let text = "";
    const observedLetters = [];
    for(let i = 0;i < enteredValue.length; i++) {
        const letter = enteredValue.charAt(i);
        if(!observedLetters.includes(letter)) {
            const amount = getGivenLetterCount(enteredValue, letter);
            text += letter + " : " + amount + "<br>";
            observedLetters.push(letter); 
        }
    }
    containerFirst.innerHTML = "";
    containerSecond.innerHTML = text;
}

var calculatePerfectNumber = () => {
    const num = Number(prompt("Enter a number"));   
    if(!isNaN(num)) {
        const result = isPerfectNumber(num);
        if(result[0]) { 
            containerFirst.innerHTML = "The given number is a Perfect Number";
            containerSecond.innerHTML = result[1];
        }
        else {
            containerFirst.innerHTML = "The given number isn't a Perfect Number";
            containerSecond.innerHTML = "";
        }
    } else {
        alert("Just enter numbers!");
    }
}

var conversionDecToBin = () => {
    const num = Number(prompt("Enter a decimal number"));
    if(!isNaN(num)) {
        let operationNum = num;
        let binaryReverseResult = "", binaryResult="1";
        while(operationNum > 1) {
            binaryReverseResult += parseInt(operationNum % 2);
            operationNum = parseInt(operationNum / 2);
        }
        for(let i = binaryReverseResult.length-1;i >= 0; i--) {
            binaryResult += binaryReverseResult[i];
        }
        containerFirst.innerHTML = "";
        containerSecond.innerHTML ="(Decimal Form) " + num + " = " + binaryResult + " (Binary Form)";
    } else {
        alert("Just enter numbers!");
    }
}

var conversionBinToDec = () => {
    const num = prompt("Enter a binary number");
    if(!isNaN(num) && doesIncludeNonBinaryCharacter(num)) {
        let pow = 0;
        let decimalResult = 0;
        for(let i = num.length-1;i >= 0; i--) {
            decimalResult += Math.pow((2 * parseInt(num.charAt(i))), pow);
            pow++;
        }
        containerFirst.innerHTML = "";
        containerSecond.innerHTML ="(Binary Form) " + num + " = " + decimalResult + " (Decimal Form)";
    } else {
        alert("Just enter binary numbers!");
    }
}

var doesIncludeNonBinaryCharacter = (num) => {
    return !num.includes("2") &&
    !num.includes("3") &&
    !num.includes("4") &&
    !num.includes("5") &&
    !num.includes("6") &&
    !num.includes("7") &&
    !num.includes("8") &&
    !num.includes("9");
}

var isPerfectNumber = (num) => {
    let total = 1;
    let text = "";
    let isPerfect = false;
    const divisors = [1]
    for(let i = 2;i < parseInt(Math.sqrt(num)) + 1; i++) {
        if(num % i === 0) {
            total += (i + num/i);
            divisors.push(i);
            if(total === num) {
                isPerfect = true;
            }
        }
    }
    if(isPerfect) {
        const length = divisors.length;
        for(let i = length-1;i > 0; i--) {
            divisors.push(num/divisors[i]);
        }
        for(let i = 0;i < divisors.length; i++) {
            if(i !== divisors.length-1) {
                text += divisors[i] + " + ";
            }
            else {
                text += divisors[i] + " = " + num;
            }
        }
    }
    return [isPerfect, text];
}

var getGivenLetterCount = (word, letter) => {
    let counter = 0;
    for(let i = 0;i <word.length; i++) {
        if(word.charAt(i)=== letter) {
            counter++;
        }
    }
    return counter;
}

var factorial = (num) => {
    let result = 1;
    let resultText = "";
    while(num >= 1) {
        result = result * num
        if(num != 1){
            resultText += num + " * "
        }
        else {
            resultText += num + " = " + result;
        }
        num--;
    }
    return resultText;
}

/* This function returns true or false if given num is prime it returns true */
var isPrime = (num) => {
    let result = true;
    for(let i = 2;i < parseInt(Math.sqrt(num)) + 1; i++) {
        if(num % i === 0) {
            result = false;
        }
    }
    return result;
}

/* */
var isArmstrong = (num) => {
    const strForm = String(num);
    let result = 0;
    let pow = 0;
    let isFound = false;
    let calculationText;
    while(result < num) {
        result = 0;
        calculationText = "";
        for(let i = 0;i < strForm.length; i++) {
            result += Math.pow(Number(strForm.charAt(i)), pow);
            if(i !== strForm.length - 1) {
                calculationText += strForm.charAt(i) + "^" + pow + " + ";
            } else {
                calculationText += strForm.charAt(i) + "^" + pow + " = " + result;
            }
            
        }
        if(result === num) {
            isFound = true;
        }
        pow ++;
    }
    return [isFound, calculationText];
}