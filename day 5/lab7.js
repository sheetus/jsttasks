function Book(_id,_name,writer_name,_num){
    this.id=_id;
    this.name=_name;
    this.writer=writer_name;
    this.num=_num;
    this.writer=writer_name;
}




function Box(_width,_height,_arr){
    this.width=_width;
    this.height=_height;
    this.arr=_arr;


}

var book1= new Book(12,"life","matt",5);
var book2=new Book(255,"journey","You",256);
var book3=new Book(3586666,"klio","patra",586);
var book4=new Book(11111,"gjkgo","fiwfhjif",589);
var book5=new Book(9999999,"oooooooooooo","ggfg",888);
 var book6=new Book(44444444,"pppppppp","iiiiiiii",777);
 var array=[book1,book2,book3,book4,book5,book6]
var box1=new Box(100,2,array);
let totalPages=0;
 for(let i=0;i<array.length;i++){
    totalPages+=array[i].num;
    // console.log( totalPages);
}
console.log( totalPages);
 function cal(box){
     var res=box.width*box.height;
     console.log(res);
}

console.log(cal(box1));
// //// second task
var x=0; var y=0 ; var z=0;
function Point3D(_x,_y,_z){
    this.x=_x;
    this.y=_y;
    this.z=_y;
    
}


Point3D.prototype.calculateDistance=function(p2){
 var d=Math.sqrt((p2.x-p1.x)^2+(p2.y-p1.y)^2+(p2.z-p1.z)^2);
console.log(parseInt(d));
}
var p1= new Point3D(2,8,9);

var p2= new Point3D(5,4,5);
p1.calculateDistance(p2);

Point3D.prototype.print3D=function(){
    console.log("x=0:y=0;z=0")
    
}

// }
 p1.print3D();



/// task 3
function Course(name,Grade){
    this.name=name;
    this.grade=Grade;
}
var course1=new Course("English",150);
var course2=new Course("jQuery",100);
var course3=new Course("BootStrap",50);
 function Student(Name,Id,ArrCourse,grade){
Course.call(this.grade)
    this.name=Name;
    this.id=Id;
    this.ArrCourse=ArrCourse;

 }
 Student.prototype=Object.create(Course.prototype);
 var courArr=[course1,course2,course3] ;
 var student1=new Student("Hesham",254,courArr);
Student.prototype.finalGrade=function(){
    let fnGrade=0;
    for( let i=0;i<courArr.length;i++){
        fnGrade+=courArr[i].grade;
        
    }
    console.log(fnGrade);
}
student1.finalGrade();
Student.prototype.Display=function(){
    let courName="";
    for(let i=0;i<courArr.length;i++){
        courName+=courArr[i].name;
    }
    console.log(courName);
}
student1.Display();