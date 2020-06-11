const option1=document.querySelector(".option1");
const option2=document.querySelector(".option2");
const option3=document.querySelector(".option3");
const option4=document.querySelector(".option4");

const survey=document.querySelector(".survey");
const endElement=document.querySelector(".end");
const endButton=document.querySelector(".end button");

var flag1=0;
var flag2=0;
var flag3=0;
var flag4=0;


function handleOption(event, number){
    if(event.target.style.color!="orange"){
        event.target.style.color="orange";
    }
    else {
        event.target.style.color="white";
    }
    var op;
    var flag;
    switch (number) {
        case 1:
            op=option1;
            break;
        case 2:
            op=option2;
            break;
        case 3:
            op=option3;
            break;
        case 4:
            op=option4;
            break;
        default:
            break;
    }
    var items=op.getElementsByTagName("li");
    for(var i=0; i< items.length;i++){
        flag=0;
        if(items[i].style.color=="orange"){
            console.log("her");
            
            flag=1;
            break;
        }
    }
    for(var i=0; i< items.length;i++){
        if(items[i].style.color=="orange" && items[i]!=event.target){
            items[i].style.color="white";
        }
    }
    switch (number) {
        case 1:
            flag1=flag;
            break;
        case 2:
            flag2=flag;
            break;
        case 3:
            flag3=flag;
            break;
        case 4:
            flag4=flag;
            break;
        default:
            break;
    }
    
    //console.log(handleNumber);
    checkComplte();
    
   
    
}

function checkComplte(){

    if(flag1&&flag2&&flag3&&flag4){
        survey.style.display="none";
        endElement.style.display="block";
    }
    
}

option1.addEventListener('click', e=>{
    handleOption(e, 1);
})

option2.addEventListener('click', e=>{
    handleOption(e, 2);
})

option3.addEventListener('click', e=>{
    handleOption(e, 3);
})

option4.addEventListener('click', e=>{
    handleOption(e, 4);
})

endButton.addEventListener('click', function(){
    console.log("button");
    
    location.reload();
})