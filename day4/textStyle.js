var par=document.getElementById("pr");
 function textAlgn(){
    var algn=document.getElementsByName("text-align");
    for(var i=0;i<algn.length;i++)
    {
        if(algn[i].checked)
        par.style.textAlign=algn[i].value    
    }
 }

 function fonFam(){
    var algn=document.getElementsByName("font-family");
    for(var i=0;i<algn.length;i++)
    {
        if(algn[i].checked)
        par.style.fontFamily=algn[i].value    
    }
 }
 function lineH(){
    var algn=document.getElementsByName("lh");
    for(var i=0;i<algn.length;i++)
    {
        if(algn[i].checked)
        par.style.lineHeight=algn[i].value    
    }
 }
 function tran(){
    var algn=document.getElementsByName("tt");
    for(var i=0;i<algn.length;i++)
    {
        if(algn[i].checked)
        par.style.textTransform=algn[i].value    
    }
 }
 function textDecro(){ var algn=document.getElementsByName("td");
for(var i=0;i<algn.length;i++)
{
    if(algn[i].checked)
    par.style.textDecoration=algn[i].value    
}}
 function letSpace(){ var algn=document.getElementsByName("ls");
for(var i=0;i<algn.length;i++)
{
    if(algn[i].checked)
    par.style.letterSpacing=algn[i].value    
}}