// Set the date we're counting down to
// var countDownDate = new Date("Jan 5, 2022 15:37:25").getTime();

// console.log(countDownDate)

// var x = setInterval(saat, 1000)

// function saat(){
  

//         // Get todays date and time
//         var now = new Date().getTime();

//         // Find the distance between now an the count down date
//         var distance = countDownDate - now;
       
//         // Time calculations for days, hours, minutes and seconds
//         var days = Math.floor(distance / (1000 * 60 * 60 * 24));
//         var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//         var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//         var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
//         // Display the result in an element with id="demo"
//         document.getElementById("demo").innerHTML = days + "gun " + hours + "saat "
//         + minutes + "deqiqe " + seconds + "saniye ";
      
//         // If the count down is finished, write some text
//         if (distance < 0) {
//           clearInterval(x);
//           document.getElementById("demo").innerHTML = "EXPIRED";
//         }
      
// }




var x = setInterval(main, 1000)
var demo = document.querySelector('#demo')
var demo2 = document.querySelector('#demo2')
var count = 0

function main(){
    count +=1
    if(count >= 5){
        count = 5
        setTimeout(stoCount,1000)
        // setTimeout()
    }
    console.log(count)
    demo.innerHTML = count
    
}

function stoCount(){
    clearInterval(x)
    alert("Boom!!!!")
}

function userStop(){
    clearInterval(x)
    alert("Men saxladim!")
}


function cavab(){
    let cavab = document.querySelector("#answer").value
    if(cavab == "Leman"){
        demo.style.display = "block"
    }else{
        alert("Yalniw cavab!")
    }
}




// var x = setInterval(main, 1000)
// var new_width = 0
// var demo = document.querySelector('#demo')

// function main(){
//     console.log("a")
//     new_width += 30

//     if(new_width >=100){
//         new_width = 100
//         demo.style.background = "green"
//         myGreeting()
//     }
    
//     demo.style.width = new_width+"%"
    
// }


// function myFunction() {
//   timeout = setTimeout(myGreeting, 3000);
// }

// function myGreeting() {
    
//     clearInterval(x)
//   }