// const fathername = "Tobarak Bousunia"
// let season = "summer";
// season = "winter"
// console.log(season)
// (< > !== == <= >== && ||)
// if(fathername === "arnald" || season === "rainy"){
       
// }
// else if(fathername === "john"){
       
// }
// else{

// }
// const numbers = [25, 14, 14, 156, 22, 33, 44, 55, 66]
// const index =  numbers.indexOf(55)
// console.log(index)
// numbers[2] = 28;
// numbers.push(555)
// numbers.pop()
// console.log(numbers)
// for(let num of numbers){
//        num = num + 2
//        console.log(num)
// }
// for(let i = 0; i < numbers.length; i++){
//        const number = numbers[i];
//        console.log(number)
// }
// function multiply(num1, num2){
//        const result = num1 * num2;
//        return result;
// }
// const total = multiply(5,7)
// console.log(total)
// const total = (num1, num2) => num1 * num2;
// const result = total(2,4);
// console.log(result)
// const student = {
//        name: "salim Khan",
//        id: 452,
//        section: "prottasha",
//        age: 23
// }
// const myVariable = "age";
// console.log(student.name)
// console.log(student["age"])
// console.log(student[myVariable])
// const numbers = [25, 45, 25, 36, 14, 25, 14];
// const student = {
//        name: "Salim Khan",
//        id: 458,
//        section: "Prottasha",
//        age: 23,
//        movies: ["king khan", "Dhakar Mostan"]
// }
// const about = `My Name Is ${student.name} age of ${numbers[2]} also like Movie ${student.movies[0]} `
// console.log(about)
// const getfiftyFive = () => 56;
// const addSixtyfive = x => x * 2;
// const isEven = x => x % 2 === 0;
// const addthree = (x,y,z) => x + y + z;
// const doMath = (num1, num2, num3) =>{
//        const sum = num1 + num2 + num3;
//        return sum;
// }
// console.log(doMath(2,10,5))
// const numbers = [25, 45, 25, 36, 14, 25, 14];
// const newNumbers = [...numbers]
// numbers.push(88)
// console.log(numbers)
// console.log(newNumbers)
// const currentNumbers = [...numbers, 25];
// console.log(currentNumbers)
// const products = [
//        {name: "laptop", price: 32000, Brand: "lenovo", color: "Silver"},
//        {name: "phone", price: 70000, Brand: "Iphone", color: "Pink"},
//        {name: "watch", price: 5000, Brand: "Samsung", color: "silver"},
//        {name: "sunglass", price: 2000, Brand: "ribon", color: "black"},
//        {name: "belt", price: 3000, Brand: "lui veton", color: "black"}
// ]
// const brands = products.map(p => p.Brand);
// console.log(brands)
// products.forEach(p => console.log(p.name))
// products.forEach(p =>{
//        console.log(p.color)
// })
// const cheap = products.filter(p => p.price < 5000);
// console.log(cheap)
// const specificName = products.filter(p => p.name.includes("n"));
// console.log(specificName);
// const special = products.find(p => p.name.includes("n"));
// console.log(special)
// const numbers = [54, 25, 36, 14, 28, 96];
// const x = numbers[0];
// const y = numbers[1];
// const [x,y,z] = numbers;
// const [x,y,z] = [25,30,35]
// console.log(x,y,z)
// function boxify(num1, num2){
//        const nums = [num1, num2]
//        return nums;
// }
// const [first, second] = boxify(2,3)
// console.log(boxify(90,95))
// const student = {
//        name: "Salim Khan",
//        id: 458,
//        section: "Prottasha",
//        age: 23,
//        movies: ["king khan", "Dhakar Mostan"]
// }
// const [firstMovie, secondMovie] = student.movies;
// const [firstMovie, secondMovie] = ["daker vai", "animal"]
// console.log(firstMovie, secondMovie)
// const {name, age} = {name: "alu", age: 14}
// const {name, age} = {id: 088, name: "tonmoy", age: 24}
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
// const {weight, height} = employee?.specification;
// console.log(weight, height)
// const student = {
//        name: "Salim Khan",
//        id: 458,
//        section: "Prottasha",
//        age: 23,
//        movies: ["king khan", "Dhakar Mostan"]
// }
// console.log(student)
// const studentJson = JSON.stringify(student);
// console.log(studentJson)
// const studentObject = JSON.parse(studentJson);
// console.log(studentObject)
// fetch('https://jsonplaceholder.typicode.com/todos/1')
//        .then(response => response.json())
//        .then(json => console.log(json))
// const student = {
//        name: "Salim Khan",
//        id: 458,
//        section: "Prottasha",
//        age: 23,
//        movies: ["king khan", "Dhakar Mostan"]
// }
// const keys = Object.keys(student)
// console.log(keys)
// const values = Object.values(student);
// console.log(values)
// const numbers = [45, 25, 96, 47, 58, 63, 98, 25, 14];
// numbers.forEach(num => console.log(num))
// const number = numbers.map(nums => nums + 1);
// console.log(number)
// const products = [
//        {name: "laptop", price: 32000, Brand: "lenovo", color: "Silver"},
//        {name: "phone", price: 70000, Brand: "Iphone", color: "Pink"},
//        {name: "watch", price: 5000, Brand: "Samsung", color: "silver"},
//        {name: "sunglass", price: 2000, Brand: "ribon", color: "black"},
//        {name: "belt", price: 3000, Brand: "lui veton", color: "black"}
// ]
// const newProduct = {name: "webcame", price: 3000, brand: "samsung", color: "black"}
// const newProducts = [...products, newProduct]
// console.log(newProducts)
// const remaining = products.filter(p => p.name !== "phone")
// console.log(remaining)
// truthy: "abc", 5, true, {} [];
// Falsy: "", false, null, Undefined
// let myVar = true;
// if(myVar){
//        myVar = myVar + 5;
// }
// else{
//        myVar = 0;
// }
// console.log(myVar)
// let mymoney = "";
// if(!mymoney){
//        console.log("false")
// }
// else{
//        console.log("true")
// }
// const money = 50;
// const myVar = 5;
// let food = "";
// if(money > 100){
//        food = "biryani"
// }
// else{
//        food = "cha"
// }
// console.log(food)
// let food1 = money > 100 ? "biryani" : "cha"
// console.log(food1)
// const money = 50;
// const myVar = 5;
// let drink = (money > 100 && myVar > 100) ? "coke" : "filter Water"
// console.log(drink)
// const num1 = 52;
// console.log(num1)
// const numStr = num1 + ""
// console.log(numStr)
// const input = "540";
// const inputNum = +input;
// console.log(inputNum)
// let isActive = false;
// const showUser = () => console.log("display-User")
// const hideUser = () => console.log("hide-User")
// isActive ? showUser() : hideUser()
// isActive && hideUser()
// isActive && showUser()
// isActive = !isActive;
// const person = {
//        name: "lal nil holud mia",
//        professon: "traffic sergon",
//        age: 29,
//        address: "sahabag"
// }
// const prof1 = person.name;
// const prof2 = person["professon"]
// console.log(prof2)
// const prof3 = ["professon"]
// const prof4 = person[prof3]
// console.log(prof4)
// const addlocalStorage = () =>{
//        const idinput = document.getElementById("StorageId")
//        const idvalue = document.getElementById("Storagevalue")
//        const id = idinput.value;
//        const value = idvalue.value;
//        if(id && value){
//               localStorage.setItem(id,value)
//        }
//        idinput.value = "";
//        idvalue.value = "";
// }