let customer = prompt("Please tell us  your name");


let pronounce;
let genderLower;
let gender;
function askGender(){

    gender = prompt("please enter your gender", "male or female")
    
     genderLower = gender.toLowerCase();
    
    if (genderLower == "male") {
        alert("Welcome to Coffe time shop Mr" + " " + customer);
        pronounce = "Mr"
    }
    else if (genderLower == "female") {
        alert("Welcome to Coffe time shop MS" + " " + customer);
        pronounce = "Ms"
    
    }
    else {
        while (genderLower !== "male" && genderLower !== "female") {
            gender = prompt("please enter your gender", "male or female")
            genderLower = gender.toLowerCase();
            if (genderLower == "male") {
                alert("Welcome to Coffe time shop Mr" + " " + customer);
                pronounce = "Mr"
            }
            else if (genderLower == "female") {
                alert("Welcome to Coffe time shop MS" + " " + customer);
                pronounce = "Ms"
    
            }
    
    
        }
    }

}
askGender();

let drink = prompt('Do you prefare a hot or cold coffe? ' + pronounce + " " + customer)
let drinkName = prompt('nice choice,what is your drink name? ')

alert('Please wait,your drink is being prepared.....')

console.log(customer + " will have " + drinkName)
// declare array for the user information it will contain [username, gender, type of drink , drink name ] 

let customerArray = [];
customerArray.push(customer, genderLower, drink, drinkName)
console.log(customerArray)

for (let index = 0; index < customerArray.length; index++) {
    const element = customerArray[index];
    console.log(element)

}