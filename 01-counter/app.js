//Intialising a counter with value zero
let count = 0;
//Selecting the two most important containers to be used in this Counter
//The Container which is Displaying the value of the counter and the color of the count
const value = document.querySelector("#value");
const buttons = document.querySelectorAll(".btn");

buttons.forEach(function(btn)
{
    btn.addEventListener("click",function(e){
        const className = e.currentTarget.classList;
        if(className.contains("decrease"))
        {
            count--;
        }
        else if(className.contains("increase"))
        {
            count++;
        }
        else
            count=0;

        if(count>0)
        {
            value.style.color="green";
        }
        else if(count<0)
        {
            value.style.color="red";
        }
        else
            value.style.color="#222";
        value.textContent=count;
    });
});

