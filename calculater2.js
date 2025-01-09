let btn=document.querySelectorAll(".btn");  //access all the buttons using DOM manupulation
let screenInt=document.querySelector(".screen-int")//access calculator screen


//this function will provide the functionality to the each buttons
btn.forEach(function(ele){
    ele.addEventListener("click",
        ()=>{
            if(ele.value== '=')
            {
                screenInt.value=eval(screenInt.value)
            }
            else if(ele.value== 'AC'){
                screenInt.value=""
            }
            else if(ele.value== 'DC')
            {
                screenInt.value= screenInt.value.slice(0,-1);
            }
            else
            {
            screenInt.value+=ele.value
            }
        }
    )
})

console.log(btn);