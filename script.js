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

let apple=document.querySelector(".apple");
let tangy=document.querySelector(".tangy");
let rosie=document.querySelector(".rosie");
let toad=document.querySelector(".toad");


let input1=document.querySelector(".question1");
let input2=document.querySelector(".question2");



question2.style.display= "none";

apple.style.display= "none";
rosie.style.display= "none";
toad.style.display= "none";
tangy.style.display= "none";




one.onclick=function(){
    console.log("onework");  

    question1.style.display= "none";
    question2.style.display= "block";

    
    question1="one";
    


}


two.onclick=function(){
    console.log("twowork");
    question1.style.display= "none";
    question2.style.display= "block";

    question1="two";
}

three.onclick=function(){
    console.log("threework");
    question1.style.display= "none";
    question2.style.display= "block";


    question1="three";
}

four.onclick=function(){
    console.log("fourwork");  
    question1.style.display= "none";
    question2.style.display= "block";

    question1="four";
}


// five.onclick=function(){
//     console.log("fivework");  
//     question2.style.display= "none";


//     question2="five";


//     if (question1 === "apple"){
//         apple.style.display= "block"
//     }

// }
five.onclick=function(){
    console.log("fivework");  
    question2.style.display= "none";


    question2= "five";

    if( question1 === "one"){

apple.style.display = "block"
        
    }

 if( question1 === "two"){

        toad.style.display = "block"
                
            }
}

six.onclick=function(){
    console.log("sixwork");  
    question2.style.display= "none";

    question2="six";
}

seven.onclick=function(){
    console.log("sevenwork");  
    question2.style.display= "none";

    question2="seven";

}

eight.onclick=function(){
    console.log("eightwork");  
    question2.style.display= "none";

    question2="eight";
    
};













