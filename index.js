
// upper IncreaseSign action
const increaseSign = document.querySelector("#upperIncreaseSign");
increaseSign.addEventListener("click", function(){
    increaseSection ("#firstInpValue", true)
    increaseSection ("#subAmount", true)
    // const  firstInput = document.querySelector(id);
    // const inputNumber = parseFloat(firstInput.value);
    // const inputAmount = inputNumber + 1;
    // firstInput.value = inputAmount;


    // const total = document.querySelector(id);
    // const totalNumber = parseFloat(total.innerText);
    // const subTotalAmount = totalNumber + 150;
    // total.innerText = subTotalAmount;
            
    // const vatAmount = subTotalAmount * 0.1;
    //  document.querySelector("#vatAmount").innerText = vatAmount;
    // document.querySelector("#totalAmount").innerText = subTotalAmount + vatAmount;
        
})


// lowerIncreaseSign action 

const lowerIncreaseSign = document.querySelector("#lowerIncreaseSign");
lowerIncreaseSign.addEventListener("click", function(){
    increaseSection ("#secondInpValue" , false)
    increaseSection ("#subAmount", false)
    

    // const  firstInput = document.querySelector("#secondInpValue");
    // const inputNumber = parseFloat(firstInput.value);
    // const inputAmount = inputNumber + 1;
    // firstInput.value = inputAmount;

    // const total = document.querySelector("#subAmount");
    // const totalNumber = parseFloat(total.innerText);
    // const subTotalAmount = totalNumber + 100;
    // total.innerText = subTotalAmount;
    // const vatAmount = subTotalAmount * 0.1;
    //  document.querySelector("#vatAmount").innerText = vatAmount;
    // document.querySelector("#totalAmount").innerText = subTotalAmount + vatAmount;
    
})

function increaseSection (id, add){
 
    const  firstInput = document.querySelector(id);
    const inputNumber = parseFloat(firstInput.value);
    const inputAmount = inputNumber + 1;
    firstInput.value = inputAmount;
    const total = document.querySelector(id);
    const totalNumber = parseFloat(total.innerText);
    let subTotalAmount = totalNumber 
    if(add == false){
        subTotalAmount = totalNumber + 100;
    }if(add == true){
        subTotalAmount = totalNumber + 150;
    }

    total.innerText = subTotalAmount;      
    const vatAmount = subTotalAmount * 0.1;
     document.querySelector("#vatAmount").innerText = vatAmount;
    document.querySelector("#totalAmount").innerText = subTotalAmount + vatAmount;

}

// this section decrease sign

const upperDecreaseSign = document.querySelector("#upperDecreaseSign");
upperDecreaseSign.addEventListener("click", function(){
    decreaseSection("#firstInpValue", false)
    decreaseSection("#subAmount", false)
    // const  secondInput = document.querySelector("#firstInpValue");
    // const secondInputNumber = parseFloat(secondInput.value);
    // const secondInputAmount = secondInputNumber - 1;
    // secondInput.value = secondInputAmount;


    // const total = document.querySelector("#subAmount");
    // const totalNumber = parseFloat(total.innerText);
    // const subTotalAmount = totalNumber - 150;
    // total.innerText = subTotalAmount;
            
    // const vatAmount = subTotalAmount * 0.1;
    //  document.querySelector("#vatAmount").innerText = vatAmount;
    // document.querySelector("#totalAmount").innerText = subTotalAmount + vatAmount;

})


const lowerDecreaseSign = document.querySelector("#lowerDecreaseSign");
lowerDecreaseSign.addEventListener("click", function(){
     decreaseSection("#secondInpValue", true)
     decreaseSection("#subAmount",true)
    // const  secondInput = document.querySelector("#secondInpValue");
    // const secondInputNumber = parseFloat(secondInput.value);
    // const secondInputAmount = secondInputNumber - 1;
    // secondInput.value = secondInputAmount;


    // const total = document.querySelector("#subAmount");
    // const totalNumber = parseFloat(total.innerText);
    // const subTotalAmount = totalNumber - 100;
    // total.innerText = subTotalAmount;
            
    // const vatAmount = subTotalAmount * 0.1;
    //  document.querySelector("#vatAmount").innerText = vatAmount;
    // document.querySelector("#totalAmount").innerText = subTotalAmount + vatAmount;

})
    
function decreaseSection (id, subtract){
    
    const  secondInput = document.querySelector(id);
    const secondInputNumber = parseFloat(secondInput.value);
    const secondInputAmount = secondInputNumber - 1;
    secondInput.value = secondInputAmount;
    const total = document.querySelector(id);
    const totalNumber = parseFloat(total.innerText);
    let subTotalAmount = totalNumber;
    if(subtract == true){
        subTotalAmount = totalNumber -100;
    }
    if(subtract == false){
        subTotalAmount = totalNumber -150;
    }
    total.innerText = subTotalAmount;
    const vatAmount = subTotalAmount * 0.1;
     document.querySelector("#vatAmount").innerText = vatAmount;
    document.querySelector("#totalAmount").innerText = subTotalAmount + vatAmount; 


}
