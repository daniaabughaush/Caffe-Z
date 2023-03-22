// // let x=3*-9
// // console.log(x)

// // let value="valueis" +50
// // console.log(value)

// // let y=17%5
// // y=5%17
// // y=5/10
// // console.log(y)
// // if(4==4){
// //     console.log('right')
// // }else{
// //     console.log("false")
// // }

// // if(4!=4){
// //     console.log('true')
// // }else{
// //     console.log("false")
// // }



// let arr=[]
// for (let index = 0; index <=5 ; index++) {
//     arr.push(index)

//     // console.log(arr)
// }

// alert(arr)

// // if(7<=8){
// //     console.log('true')
// // }else{
// //     console.log("false")
// // }


let person = prompt("Please tell us  your name") 
let g;
 function gender() {


 g = prompt("please enter your gender","male or female")

 
    while(g !="male" &&  g !="female"){


   g = prompt("Please enter a correct gender")


   }

   if(g == "male" ){

   alert("Welcome to Coffe time shop Mr. "+person )


  }

   else if(g == "female" ){
 
    alert("Welcome Ms. "+ person)

   }

   else{

     alert("Welcome to Coffe time Coffe lover ")

   }

 }

 gender();


let drink = prompt("What drink do you want ?", "Hot or Cold ?")


let namedrink = prompt("Name of your drink ?")

alert("Your drink is being prepared .")

console.log("Name : "+person +"  Drink name : "+namedrink)


 let arr=[person,g,drink,namedrink];

 for(let i=0;i<arr.length;i++){

 console.log(arr[i])


 }

//    Create a div > paragraph > ul > li 
function getIndex(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return i;
    }
  }
  return -1;
}

