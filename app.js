// let  customer= prompt("Please tell us  your name");

// let  age= prompt("Please tell us  your age");


// let pronounce;
// let genderLower;
// let gender;
// function askGender(){

    
//         while (genderLower !== "male" && genderLower !== "female") {
//             gender = prompt("please enter your gender", "male or female")
//             genderLower = gender.toLowerCase();
//             if (genderLower == "male") {
//                 alert("Welcome to Coffe time shop Mr" + " " + customer);
//                 pronounce = "Mr"
//             }
//             else if (genderLower == "female") {
//                 alert("Welcome to Coffe time shop MS" + " " + customer);
//                 pronounce = "Ms"
    
//             }
    
    
//         }
    
// }
// askGender();

// let drink = prompt('Do you prefare a hot or cold coffe? ' + pronounce + " " + customer)
// let drinkName = prompt('nice choice,what is your drink name? ')

// alert('Please wait,your drink is being prepared.....')

// console.log(customer + " will have " + drinkName)
// // declare array for the user information it will contain [username, gender, type of drink , drink name ] 

// let customerArray = [];
// customerArray.push(customer, genderLower, drink, drinkName)
// console.log(customerArray)

// for (let index = 0; index < customerArray.length; index++) {
//     const element = customerArray[index];
//     console.log(element)

// }
// let customerInfo=document.getElementById("customerInfo");
// console.log(customerInfo);

// let newDiv=document.createElement("div");
// customerInfo.appendChild(newDiv)

// let pEl=document.createElement("p");
// newDiv.appendChild(pEl);
// pEl.textContent=customer

// let ulEl=document.createElement("ul");
// newDiv.appendChild(ulEl);
// let liEl2=document.createElement("li");
//      ulEl.appendChild(liEl2);
//      liEl2.textContent="Gender: "+genderLower

       
// let liEl1=document.createElement("li");
//      ulEl.appendChild(liEl1);
//      liEl1.textContent="Age: "+age
 
// let liEl3=document.createElement("li");
//           ulEl.appendChild(liEl3);
//           liEl3.textContent="Drink: "+drink+" "+drinkName


          
// events

let form=document.getElementById("form");
let info=document.getElementById("info");

let table=document.createElement("table")
info.appendChild(table);
let trEl=document.createElement("tr");
table.appendChild(trEl)
let tdEl=document.createElement("td");
trEl.appendChild(tdEl);

let tdEl2=document.createElement("td")
trEl.appendChild(tdEl2)

let trEl2=document.createElement("tr");
table.appendChild(trEl2)

let tdEl3=document.createElement("td")
trEl2.appendChild(tdEl3)
let tdEl4=document.createElement("td")
trEl2.appendChild(tdEl4)
tdEl3.textContent="Customer Age:"
tdEl.textContent="Customer Name:"

let trEl3=document.createElement("tr");
table.appendChild(trEl3);
 
let tdEl5=document.createElement('td')
let tdEl6=document.createElement('td')

trEl3.appendChild(tdEl5)
trEl3.appendChild(tdEl6)

tdEl5.textContent="Customer Drink"

let trEl4=document.createElement('tr');
table.appendChild(trEl4)

let tdEl7=document.createElement("td")
trEl4.appendChild(tdEl7)
let tdEl8=document.createElement("td")
trEl4.appendChild(tdEl8)

tdEl7.textContent="hot or cold"









    

form.addEventListener("submit",function(e){
    e.preventDefault();
    let text=e.target.fname.value;
    tdEl2.textContent=text;
    
    let myage=e.target.age.value;
    tdEl4.textContent=myage;
    
    let myDrink=e.target.drink.value;
    tdEl6.textContent=myDrink;
    
    let hot=e.target.hot.checked;
    let cold=e.target.cold.checked;

    if(hot || cold){
   if(hot){
    let isHot=e.target.hot.value;
    tdEl8.textContent=isHot
   }
   if(cold){
    let isCold=e.target.cold.value;
    tdEl8.textContent=isCold
   }
   if(hot&&cold){

          let both=e.target.cold.value+" /"+e.target.hot.value
          tdEl8.textContent=both
   }
    }

})