let startEl = document.getElementById('start'); // buttons brought into javascript file
let stopEl = document.getElementById('stop'); // buttons brought into the file
let u = 1;
let x ;
function startButton() {
    x = setInterval(() => {
        console.log(u);
         u ++;      // increament
         
    }, 1000);  // every one second ,the variable u is added by 1

    
}

 function stopButton(){
    clearInterval(x);    //  once click, it stop
}
startEl.addEventListener("click", startButton);
stopEl.addEventListener("click", stopButton); 

