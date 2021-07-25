// Question 1
var itemsArray =[
        {name:"juice",price:"50", quantity:"3"},
        {name:"cookie",price:"30", quantity:"9"},
        {name:"shirt",price:"880", quantity:"1"},
        {name:"pen",price:"100", quantity:"2"}
];
// for single item price 
let singlItem = item.forEach(item, index => {
    let item = item.price;
    console.log("The Price of item", index , "is" , item) 
    
});
//Total sum of each item 
let totalItem = item.reduce((sum , item)=> sum + item.price,0)
console.log("The price of each item" , )

//Question 2
var obj = {
    name:"Mohammad Naveed",
    email: "mnaveedhassan2000@gmail.com",
    password: 16696,
    age: 19,
    gender: "male", 
    country:"pakistan",
    city:"karachi",
}
console.log("firstName in object");
console.log("lastName in object");
console.log("country in object");

//Question 3
{
       this.name = name;
       this.rollNum = rollNum;
       this.batch = batch;
       this.course = course;
}
var umair = new Student("Umair" , 23349 , 7 , "web n development");
var Naveed = new Student("Umair" , 16696 , 7 , "web n development");
var umairMuzammil = new Student("Umair" , 22436 , 7 , "web n development");

// Question 4
function User(Name, Gender, Address, Education, Profession) {
    this.Name = Name;
    this.Gender = Gender;
    this.Address = Address;
    this.Education = Education;
    this.Profession = Profession;
}
function getsubmit() {
    var userName = document.getElementById("Name")
    var userGender = document.getElementById("Gender")
    var userAddress = document.getElementById("Address")
    var userEducation = document.getElementById("Education")
    var userProfession = document.getElementById("Profession")
    var arr = []
    var myuser2 = new User(userName.value, userGender.value, userAddress.value, userEducation.value, userProfession.value);
    arr.push(myuser2);
    console.log(arr)
    
}




