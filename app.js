const option1=document.querySelector(".option1");
const option2=document.querySelector(".option2");
const option3=document.querySelector(".option3");
const option4=document.querySelector(".option4");

const survey=document.querySelector(".survey");
const endElement=document.querySelector(".end");
const endButton=document.querySelector(".end button");

var handleNumber=0;

function handleOption(event){
    if(event.target.style.color!="orange"){
        event.target.style.color="orange";
    }
    else {
        event.target.style.color="white";
        handleNumber--;
    }
    handleNumber++;
    console.log(handleNumber);
    
    if(handleNumber>=4){
        console.log("here");
        survey.style.display="none";
        endElement.style.display="block";
    }
    
}

option1.addEventListener('click', e=>{
    handleOption(e);
})

option2.addEventListener('click', e=>{
    handleOption(e);
})

option3.addEventListener('click', e=>{
    handleOption(e);
})

option4.addEventListener('click', e=>{
    handleOption(e);
})

endButton.addEventListener('click', function(){
    console.log("button");
    
    location.reload();
})