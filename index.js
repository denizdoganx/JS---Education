window.onload = () => {
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
        case "BMI":
            calculateBMI();
            break;
        case "Gasoline Price":
            calculateGasolinePrice()
            break;
        case "Prime Control":
            primeControl();
            break;
        case "Factorial":
            calculateFactorial();
            break;
        case "Armstrong Number":
            calculateArmstrongNumber();
            break;
        default:
            break;
    }
} 

var calculateBMI = () => {
    const bmiValueElement = document.getElementsByClassName("first")[0];
    const bmiExplanationElement = document.getElementsByClassName("second")[0];
    const height = Number(prompt("Enter your height in meters"));
    const weight = Number(prompt("Enter your weight in kilograms"));
    const bmi = weight / (height**2);

    bmiValueElement.innerText = bmi.toFixed(2);
    
    if (bmi < 18.5) {
        bmiExplanationElement.innerHTML = "<i>You are under your ideal weight.</i>"
    } else if(bmi <= 24.9) {
        bmiExplanationElement.innerHTML = "<i>You are in your ideal weight.</i>"
    } else if(bmi <= 29.9) {
        bmiExplanationElement.innerHTML = "<i>You are over your ideal weight.</i>"
    } else if(bmi <= 39.9) {
        bmiExplanationElement.innerHTML = "<i>You are way over your ideal weight. (obese)</i>"
    } else {
        bmiExplanationElement.innerHTML = "<i>You are way above your ideal weight. (morbidly obese)</i>"
    }
}

var calculateGasolinePrice = () => {
    const diesel = 24.53;
    const gasoline = 22.25;
    const lpg = 11.1;
    const newLine = "\r\n"; 
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
                const amount = document.getElementsByClassName("first")[0];
                const isEnoughText = document.getElementsByClassName("second")[0];
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
                amount.innerHTML = price + "₺";
                isEnoughText.innerHTML = "<i>"+ explanation + "</i>";
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
        const first = document.getElementsByClassName("first")[0];
        const second = document.getElementsByClassName("second")[0];
        if(isPrime(num)) {
            second.innerHTML = "The given number is a prime number";
        } else {
            second.innerHTML = "The given number isn't a prime number";
        }
        first.innerHTML = "";
    } else {
        alert("Just enter numbers!");
    }
}

var calculateFactorial = () => {
    const num = Number(prompt("Enter a number"));
    if(!isNaN(num)) {
        const first = document.getElementsByClassName("first")[0];
        const second = document.getElementsByClassName("second")[0];
        first.innerHTML = "";
        second.innerHTML = factorial(num);
    } else {
        alert("Just enter numbers!");
    }
}

var calculateArmstrongNumber = () => {
    const num = Number(prompt("Enter a number"));
    if(!isNaN(num)) {
        const first = document.getElementsByClassName("first")[0];
        const second = document.getElementsByClassName("second")[0];
        const result = isArmstrong(num);
        if(result[0]) {
            first.innerHTML = "The given number is Armstrong Number";
            second.innerHTML = result[1];
        } else {
            first.innerHTML = "The given number isn't Armstrong Number";
            second.innerHTML = "";
        }
    } else {
        alert("Just enter numbers!");
    }
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