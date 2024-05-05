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
        case "Calculate BMI":
            calculateBMI();
            break;
        case "Calculate Gasoline Price":
            calculateGasolinePrice()
            break;
        case "Prime Control":
            primeControl();
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
        const first = document.getElementsByClassName("second")[0];
        if(isPrime(num)) {
            first.innerHTML = "The given number is a prime number";
        } else {
            first.innerHTML = "The given number isn't a prime number";
        }
    } else {
        alert("Just enter numbers!");
    }
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