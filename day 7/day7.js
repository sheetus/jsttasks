
// اجابة الاسئلة المقالية ف الاسفل



// First task

class Person {
    constructor(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
}


class Employee extends Person {
    static count = 0;

    static counter() {
        Employee.count++;
    }
    #id;
    constructor(name, age, address, Salary, position) {

        super(name, age, address);

        this.Salary = Salary;
        this.position = position;


    }

    setId(c) {
        this.#id = c;
    };
    getID() {
        return this.#id;
    }
    // second task
    showSalary() {
        console.log(this.Salary);
    }

    increaseSalary() {
        var newSalary = this.Salary + 785
        console.log(newSalary);
    }
}






class Student extends Person {
    constructor(Courses, Grades) {
        this.Courses = Courses;
        this.Grades = Grades;
    }
}
var em1 = new Employee("Ahmed", 50, "IT Manger", 6500, "kopl", 547);

em1.setId(555)
console.log(em1);
//task 2
var em2 = new Employee("Ali", 25, "Aswan", 5000, "Junior php developer ");
em2.showSalary();
em2.increaseSalary();


/// task 3
var ScientificDepartment = new Object();
ScientificDepartment = {
    nm: "National",
    Location: "Africa",
    address: {
        City: "New England",
        Street: "dfgedg",
        zipcode: 568415
    }
}
function display() {
    console.log( "name:" ,ScientificDepartment.nm,"Location:", ScientificDepartment.Location, "City:",ScientificDepartment.address.City, "Zipcode",ScientificDepartment.address.zipcode,"Street:", ScientificDepartment.address.Street);
}
display();

///////////////////// Task 4/////////////////
var FirstArr = [2531, 85421, 582];
var secondArr = [325, 2586, 856, 471]
var thirdArr = [5874, 2548, 3584, 741];
// function biggerValue(...arr) {
// console.log(Math.max(arr1,arr2,...arr))}
// biggerValue(FirstArr, secondArr, thirdArr)






///// task5///////////

var fruits = ["apple", "strawberry", "banana", "orange", "mango"];
// var fruitStart = fruits.filter((fruit) => fruit.startsWith("a"))


// هنا انا بقوله ان الاسترينج الي جوة الاراي لو بيبدأ ب الحرف دا طلعهولي بأستخدام string method اسمها starts with 




console.log(fruits.filter((FruitA) => FruitA.startsWith("a")));
/// هاعمل متغير جديد فيه الفواكه 



var fruitBS = [fruits.filter((B) => B.startsWith("b")), fruits.filter((s) => s.startsWith("s"))]

console.log(fruitBS);

// function displayf() {


//     console.log();
// }

/// علشان اتحقق ان كل الموجود string



var isStr = fruits.map((f) => isNaN(f));
console.log(isStr);
/// to print each element in the value
fruitBS.forEach((fr)=>console.log(fr));
// First we Create an array
var countryArr=  ["Egypt","Canada","USA","Egypt","Korea","Canada","Sudan","Korea"];
//then we make New Set that contains the previous Array
var st=new Set(countryArr);
/// then we get the array  CountryArray length;
var countryArrLength=countryArr.length;
/// then we will use .size method to get the  number of duplicated element 
var getDub=countryArrLength-st.size;
console.log(getDub);






// function repeatedNum(st){
//     var unRepeatedNum=new Set(st);
//     let repeatedNumb=st.filter(item=>{
//         if(unRepeatedNum.has(item)){
//             unRepeatedNum.delete(item)
        
//         }
//         else{
//             return item
//         }
        
//     }
  
//     )
//     return unRepeatedNum;
// }
// var rep=repeatedNum(st);
// console.log(rep);