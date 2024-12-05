console.log("horse")

let horseName = "fresa"
let horseAge = 2
console.log(horseName)
console.log(horseAge)



const STABLE_MONTHLY_FEE = 100;
console.log(STABLE_MONTHLY_FEE);
let horseAgeIn10Years = horseAge = 10;
console.log(horseAgeIn10Years);


let horseIntroduction = "This is my horse, " ;
let rentIntroduction = "it costs $" +STABLE_MONTHLY_FEE + " to board " +horseName;
let stableIntroduction ="Welcome to " + horseName + "'s stable";
// console.log(stableIntroduction)


//lesson4//
console.log(horseIntroduction);
console.log(rentIntroduction);


console.log(stableIntroduction);

let stableRent = "The rent at the stable is " + (STABLE_MONTHLY_FEE*3) + " for three months";
console.log(stableRent);
let stableDiscount = "a three month stay has a discount of " + ((STABLE_MONTHLY_FEE*3)*0.10);
console.log(stableDiscount)
let rentTotal = "Fresa paid $270 for rent.";
console.log(rentTotal)


//lesson 5//



let isHorseInside = true;

if (isHorseInside)
    console.log("Fresa is inside")
else
    console.log("Fresa is outside")

//lesson 6 //

let horseTwoName = "Mano";
let horseTwoAge = 3;
let horseTwoIntroduction = `This is my horse, `;

let isHorseTwoInside = true;

if (isHorseTwoInside)
    console.log("Mano is inside")
else
    console.log("Mano is outside")

 let horseThreeName = "Bubs";
 let horseThreeAge = 5;
 let horseThreeIntroduction = `This is my horse, `;
    
let isHorseThreeInside = false;
    
    if (isHorseThreeInside)
        console.log("Bubs is inside")
    else
        console.log("Bubs is outside")

const horses = []
horses.push (horseName, horseTwoName, horseThreeName)


console.log(`${horseIntroduction + horses[0]}. ${horseTwoIntroduction + horses[1]}. ${horseThreeIntroduction + horses[2]}.`)
