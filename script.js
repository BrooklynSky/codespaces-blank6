console.log("work");

let question1 =document.querySelector(".question1");
let one =document.querySelector(".one");
let two =document.querySelector(".two");
let three =document.querySelector(".three");
let four =document.querySelector(".four");


let question2 =document.querySelector(".question2");
let five =document.querySelector(".five");
let six=document.querySelector(".six");
let seven =document.querySelector(".seven");
let eight =document.querySelector(".eight");

let result  =document.querySelector(".result");


question2.style.display= "none";
result.style.display= "none";



one.onclick=function(){
    console.log("onework");  
    question1.style.display= "none";
    question2.style.display= "block";

    question1=one;

}


two.onclick=function(){
    console.log("twowork");
    question1.style.display= "none";
    question2.style.display= "block";

    question1=two;
}

three.onclick=function(){
    console.log("threework");
    question1.style.display= "none";
    question2.style.display= "block";


    question1=three;
}

four.onclick=function(){
    console.log("fourwork");  
    question1.style.display= "none";
    question2.style.display= "block";

    question1=four;
}


five.onclick=function(){
    console.log("fivework");  
    question2.style.display= "none";


    question2=five;

}

six.onclick=function(){
    console.log("sixwork");  
    question2.style.display= "none";

    question2=six;
}

seven.onclick=function(){
    console.log("sevenwork");  
    question2.style.display= "none";

    question2=seven;

}

eight.onclick=function(){
    console.log("eightwork");  
    question2.style.display= "none";

    question2=eight;
    

}




















// let taste = document.querySelector(".taste");
// console.log(taste)
// let season = document.querySelector(".season");
// console.log(season)
// let quiz = document.querySelector(".quiz");
// console.log(quiz)

// quiz.onclick = function(){

//     console.log('work button');

// let answerTaste = taste.value;
// console.log(answerTaste);

// if (answerTaste === "salty"){
//     console.log("Yes");
// }
// else if(answerTaste==="sweet"){
//     console.log("Yes2")
// }


//     };


