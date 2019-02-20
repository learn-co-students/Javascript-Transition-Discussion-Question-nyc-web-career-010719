// $('#save_lincoln').click(()=>saveLincoln(parseInt($('#interval').val())))

zombieFace = document.querySelector('#foreground')
save_lincoln.addEventListener("click", saveLincoln)
function saveLincoln(interval) {

  var interval = parseInt(document.querySelector('#interval').value)

  if(isNaN(interval)) {
    interval = 10000
  }
  fadeObject(zombieFace, 1, 0, interval)
}



function fadeObject(el, start, end, duration) {
    var range = end - start;
    var goingUp = end > start;
    var steps = duration / 20;   // arbitrarily picked 20ms for each step
    var increment = range / steps;
    var current = start;
    var more = true;
    function next() {
        current = current + increment;
        if (goingUp) {
            if (current > end) {
                current = end;
                more = false;
            }
        } else {
            if (current < end) {
                current = end;
                more = false;
            }
        }
        el.style.opacity = current;
        if (more) {
            setTimeout(next, 20);
        }
    }
    next();
}
