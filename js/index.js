// $('#save_lincoln').click(()=>saveLincoln(parseInt($('#interval').val())))
//
// function saveLincoln(interval) {
//   if(isNaN(interval)) {
//     interval = 10000
//   }
//   $('#foreground').fadeOut(interval);
// }

let zombie = document.querySelector('#foreground');
const save_lincoln = document.querySelector('#save_lincoln');

save_lincoln.addEventListener("click", event => {
  let time = document.querySelector('#interval').value;
  myFade(time);
}, false);

function myFade(time) {
  let op = 1;
  debugger
  var timer = setInterval(function ()
    {
    if (op <= 0.1) {
      clearInterval(time);
    }
    zombie.style.opacity = op;
    op -= 0.1;
  }, time/10);
};
