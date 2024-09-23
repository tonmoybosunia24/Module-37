// Six JavaScript Fundamentals that you need to know



// 1.How To Decleare A Variable Using let And Const


// const fathername = "Tobarak";
// let season = "rainy"
// season = "winter"


// 2. 6 Basic Conditions(>,<,===, !===, <=, >==)
// Multiple Conditions: &&, ||


// if(fathername === "arnold" || season === "rainy"){

// }
// else if(fathername === "john"){
// 
// }
// else{

// }


// 3.Array
// Index,length,push


// const numbers = [2,3,5,6,9];
// numbers[0] = 56;


// 4.For Loop


// for(let num of numbers){
//        num += 2;
// }
// for(let i = 0; i < numbers.length; i++){
//        const number = numbers[i];
//        // console.log(number)
// }


// 5.Function


// function multiply(num1, num2){
//        const result = num1 * num2;
//        return result;
// }
// const total = multiply(2,5)
// console.log(total)
// const total = (num1, num2) => num1 * num2;
// const result =  total(5,6);
// console.log(result)


// 6.Object
// 3 Ways Access Property By Name


// const student = {
//        name: "Salim Khan",
//        id: 458,
//        section: "Prottasha",
//        age: 23
// }
// const myVariable = "age"
// console.log(student.age) /* Access By Property */
// console.log(student["age"]) /* Access By Property Name String */
// console.log(student[myVariable]); /* Access using By Decleare a variable  */




// template string, arrow function, spread operator



// const numbers = [2,3,5,6,9];
// const student = {
//        name: "Salim Khan",
//        id: 458,
//        section: "Prottasha",
//        age: 23,
//        movies: ["king khan", "Dhakar Mostan"]
// }
//1.Templete String
// const about = `My Name Is ${student.name} age of ${numbers[2]} also like ${student.movies[0]}`
// console.log(about)

//2.Arrow Function

// const getfiftyFive = () => 56;
// const addSixtyfive = x => x + 65;
// const isEven = x => x % 2 === 0;
// const addThree = (x,y,z) => x + y + z;
// const doMath = (num1, num2) =>{
       // const sum = num1 + num2;
       // return sum
// }

// 3.Spread Operator

// const newNumbers = [...numbers];
// numbers.push(99)
// console.log(numbers)
// console.log(newNumbers)
// Craete A New Array From An Older Array And Add An Element
// const currentNumbers = [...numbers, 55]
// console.log(currentNumbers)



// Array methods (map, forEach, filter and find )



// const products = [
       // {name: "laptop", price: 32000, Brand: "lenovo", color: "Silver"},
       // {name: "phone", price: 70000, Brand: "Iphone", color: "Pink"},
       // {name: "watch", price: 5000, Brand: "Samsung", color: "silver"},
       // {name: "sunglass", price: 2000, Brand: "ribon", color: "black"},
       // {name: "belt", price: 3000, Brand: "lui veton", color: "black"}
// ]
// 1.Map

// const brands = products.map(product => product.Brand);
// console.log(brands)

// 2.ForEach
// products.forEach(product => console.log(product.color))
// products.forEach(product => {
       // console.log(product)
// })

// 3.Filter

// const cheap = products.filter(product => product.price <= 5000);
// console.log(cheap)
// const specifitname = products.filter(product => product.name.includes("n"));
// console.log(specifitname)

// 4.Find
// const special = products.find(p => p.name.includes("n"));
// console.log(special)



// Array and object Destructuring



// Array Distructuring

// const numbers = [42,65]
// const x = numbers[0];
// const y = numbers[1];
// const [x,y] = [45,65]
// const [x,y] = numbers;
// console.log(x,y)
// function boxify(num1, num2){
       // const nums = [num1, num2]
       // return nums;
// }
// const [first, second] = boxify(90,36)
// console.log(boxify(12,15))
// const student = {
//        name: "Salim Khan",
//        id: 458,
//        section: "Prottasha",
//        age: 23,
//        movies: ["king khan", "Dhakar Mostan"]
// }
// const [firstMovie, secondMOvie] = ["king khan", "Dhakar Mostan"]
// const [firstMovie, secondMOvie] = student.movies;
// console.log(firstMovie, secondMOvie)


// Object Distructuring

// const {name, age} = {name: "alu", age: 14}
// const {name, age} = {id:12, name: "alu", age: 14}
// console.log(name, age)
// const employee = {
//        ide: "vs Code",
//        designation: "developer",
//        machine: "mac",
//        languages: ["html", "css", "js"],
//        specification: {
//               height: 66,
//               weight: 67,
//               address: "kumarkhuli",
//               dring: "water"
//        }
// }
// const {machine, ide} = employee;
// const {weight, height} = employee?.specification
// console.log(machine, ide)



// JSON, Fetch, keys, values, array add or remove using dots



// 1.JSON => Stringfy, Parse

// const student = {
//        name: "Salim Khan",
//        id: 458,
//        section: "Prottasha",
//        age: 23,
//        movies: ["king khan", "Dhakar Mostan"]
// }
// const studentJson = JSON.stringify(student)
// console.log(student)
// console.log(studentJson)
// const studentObject = JSON.parse(studentJson)
// console.log(studentObject)

// 2.Fetch

// fetch("url")
// .than(res = > res.json())
// .then(data => console.loog(data))

// 3.Keys, Values

// const keys = Object.keys(student)
// const value = Object.values(student)

// 4.For

// const numbers = [45, 25, 36, 75, 96, 45, 20];
// numbers.forEach(num => console.log(num))
// numbers.map(num => num * 2);

// 5.For Of On Array Like Object, Loop on An Object Using For In

// 6.Add And Remove From An Array

// const products = [
//        {name: "laptop", price: 32000, Brand: "lenovo", color: "Silver"},
//        {name: "phone", price: 70000, Brand: "Iphone", color: "Pink"},
//        {name: "watch", price: 5000, Brand: "Samsung", color: "silver"},
//        {name: "sunglass", price: 2000, Brand: "ribon", color: "black"},
//        {name: "belt", price: 3000, Brand: "lui veton", color: "black"}
// ]
// const newProduct = {name: "webcame", price: 700, brand: "lal"}

// Copy Products array And then Add NewProduct

// const newProducts = [...products, newProduct]
// console.log(newProducts)

// Create A New Array Without One Specific Item

// const remaining = products.filter(p => p.name !== 'phone')
// console.log(remaining)



// (advanced) truthy, falsy, Ternary operator, shortcut and or


// Truthy: "abc",5,true, {}, []
// Falsy: "", false, null, undefined

// Check Truthy

// let myVar = 5;
// if(myVar){
//        myVar = myVar * 100;
// }
// else{
//        myVar = 0;
// }

// Check Falsy

// let mymoney = 50;
// if(!mymoney){
//        console.log("falsy")
// }
// else{
//        console.log("truthy")
// }

// const money = 80;
// let myVar = 5;
// let food;
// if(money > 100){
//        food = "birayani"
// }
// else{
//        food = "cha Biscit"
// }

// let food1 = money > 100 ? "biryani" : "cha Biscit"
// console.log(food1)

// Ternary Operator

// lset drink = (money > 100 && myVar > 100) ? "coke" : "Filter Water"

// const num1 = 52;
// console.log(num1)

// Number To String

// const numStr = num1 + "";
// console.log(numStr)

// String To Number

// const input = "560";
// const inputNum = +input
// console.log(inputNum)

// let isActive = true;
// const showUser = () => console.log("display User")
// const hideUser = () => console.log("hide User")
// isActive ? showUser() : hideUser()

// Use && if the left side is true then right side will be exucuted
// isActive && hideUser();
// Use || The Let Side Is False Then Right Side Will Be Exucuted.
// isActive || hideUser()
// Toggle Boolean
// isActive = !isActive



// Explore Localstorage and session storage with JSON




// const addlocalStorage = () =>{
//        const idinput = document.getElementById("StorageId")
//        const idvalue = document.getElementById("Storagevalue")
//        const id = idinput.value;
//        const value = idvalue.value;
//        if(id && value){
//               localStorage.setItem(id, value)
//        }
//        idinput.value = "";
//        idvalue.value = "";
// }



// dot vs bracket notation



// const person = {
//        name: "lal nil holud mia",
//        professon: "traffic sergon",
//        age: 29,
//        address: "sahabag"
// }
// // Dot Notation
// const prof1 = person.professon;

// // Braccket Notation
// const prof2 = person["professon"]
// const pName = ["professon"]
// const prof3 = person[pName]
// console.log(prof3)