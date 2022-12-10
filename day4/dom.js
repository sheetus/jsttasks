  var div=document.getElementById("navigation");
console.log(div)
div.style.textAlign="center";
///image1
var imag1=document.createElement("img");
div.insertBefore(imag1,div.children[0])
imag1.setAttribute("src","dom.jpg")
imag1.setAttribute("onclick","clic()");
///image 2
var imageS=document.createElement("img");
imageS.setAttribute("src","dom.jpg");
// imageS.style.position="absolute"
// imageS.style.top="5rem";
// imageS.style.left="10rem";

var u=document.getElementById("nav")
/// image 3
let imageT=document.createElement("img");
imageT.setAttribute("src","dom.jpg");


function clic(){
  imag1.style.visibility="hidden";
document.body.appendChild(imageS);
imageS.style.position="absolute";
  imageS.style.right="30px";
  imageS.style.top="30px";
document.body.appendChild(imageT)
  // div.appendChild(image2);
  // div.appendChild(image3);
  imageT.style.position="absolute";
imageT.style.left="30px";
imageT.style.bottom="30px";
  u.style.listStyle="circle";
}