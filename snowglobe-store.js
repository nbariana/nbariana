/*
You are the owner of a lovely snowglobe store, and today you have a big sale and customers waiting outside.

1) You need to register the age of each customer in line outside, preferrably in an array.
2) Your store has a "setting" object that keeps track of whether there are breakable items inside.
2) If there are breakable items in the store, only customers over the age of 10 are allowed inside. Create a function that handles the following situations:
- If there are breakable items, all your customers over the age of 10 should get a message logging out "Please come in!". Every customer under 10 should get a message logging "Please wait in line!".
- If there are no breakable itmes, console log "Everyone, come inside!".
3) Challenge: Add a setting for the age requirement to enter. By default, it should be 10, but you should be able to change it by invoking a function that accepts the new entry age as an argument. This also means that the age for the notification needs to be updated to match the new entry requirements.
*/

let customers = []



function Customer(
    name, ageAboveTen
){
    this.name = name
    this.age = ageAboveTen
}

const Sylvia = new Customer("Sylvia", true)
const Kim = new Customer("Kim", true)
const Enrique = new Customer("Enrique", true)
const Josh = new Customer("Josh", false)
const Mailani = new Customer("Mailani", true)
customers.push(Sylvia, Kim, Enrique, Josh, Mailani)

function isItem(breakable = true){
    for (let i=0; i < customers.length; i++) {
        if (breakable === true && customers[i].age === true){
            console.log (`Please come in, ${customers[i].name}!`)
            
        } 
        else {
            console.log (`Please wait in line, ${customers[i].name}!`)

        }
    }
}

isItem()

function ofAge(ageAboveTen = true){
    for (let i=0; i < customers.length; i++) {
        if (customers[i].age === true){
            console.log (`${customers[i].name} is allowed inside`)
            
        } 
        else {
            console.log (`${customers[i].name} is not allowed inside`)

        }
    }
}

ofAge()
