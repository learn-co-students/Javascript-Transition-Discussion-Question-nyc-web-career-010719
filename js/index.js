// $('#save_lincoln').click(()=>saveLincoln(parseInt($('#interval').val())))
//
// function saveLincoln(interval) {
//   if(isNaN(interval)) {
//     interval = 10000
//   }
//   $('#foreground').fadeOut(interval);
// }
// var scaryAbe = document.querySelector('#foreground')
// var normalAbe = document.querySelector('#background')
// var interval = parseInt(document.querySelector('#interval').value)
// var button = document.querySelector('#save_lincoln')
//
// button.addEventListener('click', function(event){
//     if(isNaN(interval)) {
//       interval = 10000
//     }
//     scaryAbe.fadeOut(interval);
//     function fadeOutAndfadeIn(scaryAbe, normalAbe){
//     	var opacity = 1;
//     	var timer = setInterval(function(){
//     		if(opacity < 0.1){
//     			clearInterval(timer);
//     			//swap the scaryAbe, and fadeIn, which is the same as above function
//     			scaryAbe.src = normalAbe.src;
//     			fadeOut(scaryAbe);
//     		}
//     		scaryAbe.style.opacity = opacity;
//     		opacity -=  0.1;
//     	}, 50);
//     }
// })


const saveInterval = document.getElementById( 'interval' )
const startSaving = document.getElementById( 'save_lincoln' ).addEventListener( "click", () => ( saveLincoln( parseInt( saveInterval.value ) ) ) )
const zombieFace = document.getElementById( 'foreground' )
const hiddenMessage = document.getElementById( 'hidden-message' )

function saveLincoln( interval ) {
  console.log(interval)
  if ( isNaN( interval ) ) {
    interval = 1000
  }
  var op = 1;
  var timer = setInterval( function () {
    if ( op <= 0.1 ) {
      clearInterval( timer );
      zombieFace.style.display = 'none';
      hiddenMessage.style.display = 'block'
    }
    zombieFace.style.opacity = op;
    op -= op * 0.5;
  }, interval );
}
