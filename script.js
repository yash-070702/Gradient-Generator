const directionValue=document.querySelector("select");
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const gradientBox=document.querySelector(".gradient-box");
const slider=document.querySelector(".slide"); 
const displayResult=document.querySelector("textarea");
const copyButton=document.querySelector(".copy");
const colorInputs = document.querySelectorAll(".colors1 input");
const refreshBtn = document.querySelector(".refresh");

const getRandomColor = () => {
    const randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
    return `#${randomHex}`;
}

refreshBtn.addEventListener("click", () => { 
    colorInputs[0].value = getRandomColor();
    colorInputs[1].value = getRandomColor();
    
    
    gradientBox.style.background=`linear-gradient(${directionValue.value} ,${color1.value} ${slider.value}%,${color2.value} 100%`;
    displayResult.innerHTML=`background:linear-gradient(${directionValue.value} ,${color1.value} ${slider.value}%,${color2.value} 100%);`
    copyButton.innerText="Copy Code";
copyButton.title="";
});
    

colorInputs.forEach(input => {
    input.addEventListener("input", () => 
    {
        console.log("heelo");
        gradientBox.style.background=`linear-gradient(${directionValue.value} ,${color1.value} ${slider.value}%,${color2.value} 100%`;
        displayResult.innerHTML=`background:linear-gradient(${directionValue.value} ,${color1.value} ${slider.value}%,${color2.value} 100%);`
        copyButton.innerText="Copy Code";
    copyButton.title="";   
    }
    )
    });




copyButton.addEventListener('click',()=>{
    if(displayResult.value!=""){
        navigator.clipboard.writeText(displayResult.value); //this function also to write
         copyButton.innerText="Copied";
         copyButton.title="Code Copied";
    }

});






