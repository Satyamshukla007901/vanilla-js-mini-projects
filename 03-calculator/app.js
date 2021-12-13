const containerHead = document.querySelector("h1");//selecting the display unit
const btns = document.querySelectorAll("button");//selecting the buttons
const btnClear = document.getElementById("btn-clear");//selecting the clear button

let initial = 0;
let operator = "";
let flag = false;

const calculate = {
    "/" : (a,b) => a/b,
    "*" : (a,b) => a*b,
    "+" : (a,b) => a+b,
    "-" : (a,b) => a-b,
    "=" : (a,b) => b,
};

btns.forEach((btn)=>{
    if(btn.classList.length === 0)
    {
        //nummeric value buttons
        btn.addEventListener("click",function(){formNumber(btn.value);})
    }
    else if(btn.classList.contains("operator"))
    {
        btn.addEventListener("click",function(){useOperator(btn.value);});
    }
    else if(btn.classList.contains("dot"))
    {
        btn.addEventListener("click",function(){addDot();});
    }
});

function reset() //function to reset all the values
{
    initial=0;
    operator="";
    flag=false;
    containerHead.textContent="0";
}

btnClear.addEventListener("click",reset);

function formNumber(number)//function to form the number
{
    if(flag)
    { //when firstly value is entered then replace it
        containerHead.textContent=number;
        flag=false;
    }
    else
    { // if 0 then replavce by current number else append it
        const temp = containerHead.textContent;
        //appending to already present number
        containerHead.textContent=temp=="0"?number:temp+number;
    }
}

function addDot()//function to add decimal to a number
{
    if(flag)
        return;
    
    if(containerHead.textContent.includes(".")==false)
    {//adding decimal at the last
        containerHead.textContent=`${containerHead.textContent}.`;
    }
}

function useOperator(op) // operator functioning
{
    const currValue = Number(containerHead.textContent);
    if(operator&&flag)
    {
        operator=op;
        return;
    }

    if(!initial)
    {
        initial=currValue;
    }
    else
    {
        const result = calculate[operator](initial,currValue);
        containerHead.textContent = result;
        initial=result;
    }

    flag=true;
    operator=op;
}

