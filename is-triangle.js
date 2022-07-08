const allInputs = document.querySelectorAll(".angle-Input");
const triangleBtn = document.querySelector("#triangle-btn");
const triangleOutput = document.querySelector("#output1")

triangleBtn.addEventListener("click", isTriangle);

function calculateSumOfAngles(angle1, angle2, angle3){
    const sumOfAngles = angle1 + angle2 + angle3;
    return sumOfAngles;
}

function isTriangle(){
    const sumOfAngles = calculateSumOfAngles( Number(allInputs[0].value), Number(allInputs[1].value), Number(allInputs[2].value));
    if(sumOfAngles === 180){
        triangleOutput.innerHTML = "Yay, This is a Triangle";
     } else{
         triangleOutput.innerHTML = "Oops !, Not a triangle";
     }
}