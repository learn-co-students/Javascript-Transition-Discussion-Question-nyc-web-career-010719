// $('#save_lincoln').click(()=>saveLincoln(parseInt($('#interval').val())))
//
// function saveLincoln(interval) {
//   if(isNaN(interval)) {
//     interval = 10000
//   }
//   $('#foreground').fadeOut(interval);
// }

//----------------------------------------------------

zombie = document.querySelector('#foreground')
time = document.querySelector('#interval').value
save_lincoln = document.querySelector('#save_lincoln')
zombie.addEventListener("click", myFade, false)
save_lincoln.addEventListener("click", event => {
  myFade(time);
}) //end of event listener



function myFade(time){
  let op = 1;
  var timer = setInterval(function () {
    if (op <= 0.1) {
      clearInterval(time);
    }
    zombie.style.opacity = op;
    op -= 0.1;
  }, 50);
}



  // element.style.opacity(1, 0)
