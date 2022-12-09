
var nameo=prompt("what is your name?");
// var birthYear=prompt("What is you birth year?");





if(isNaN(nameo)){
    alert("string" );
}
else
{
    alert("this is Number" );

}












do{
    var nm2 =prompt("put your name please ")


}while(isFinite(nm2))

do{
    var birthYear =prompt("Please Put your Birth Year")


}while(isNaN(birthYear) || birthYear>2010)
console.log("birth year:",birthYear)

var yourAge=2022-birthYear;
console.log(`your Age is ${yourAge}`);







//  // بعد كدة هاعمل فاريابل تاني علشان اجيب قيمة ال name هل هي nan ولا لا 
//  var namVal=isNaN(nam);
// // بعد كدة هاعمل if 
// var birthYear=prompt("Enter Your birth year")
// var birthYear=parseInt(birth);
// function validate(namVal,birth){
//     if(birth>2010||isNaN(birth)){
//         console.log(`birth year:${birth}`);
//     };}
//     if(namVal==false){
//         for(i=0;i<3;i++){
//             console.log("enter your name:")
//         }
//     }
  
// validate(nam,birth)
