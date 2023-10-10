var a= document.querySelector("#red");
var x= document.querySelector("#yellow");
var y= document.querySelector("#green");
var b=document.querySelector("button");
var i= 0;
b.addEventListener("click",function(){
    if(i==0){
a.style.backgroundColor="red";
console.log("i am clicked");
y.style.backgroundColor="rgba(0, 128, 0, 0.445)";
i=i+1;
    }
    else if(i==1){
        x.style.backgroundColor="yellow";
        console.log("i am cli");
        a.style.backgroundColor= "rgba(255, 1, 1, 0.463)";
        y.style.backgroundColor="rgba(0, 128, 0, 0.445)";
        i=i+1;
            }
            else{
                a.style.backgroundColor="rgba(255, 1, 1, 0.463)";
                x.style.backgroundColor="rgba(255, 255, 0, 0.486)";
                y.style.backgroundColor="lawngreen";
                console.log("i am ");
                i=i-2;
                    }
                
})