function drag(event) {
    var e = event || window.event,
        ele = e.target;
        disX = e.clientX - ele.offsetLeft,
        disY = e.clientY - ele.offsetTop;

    function move(event) {
        var moveX = event.clientX - disX,
            moveY = event.clientY - disY,
            maxX = document.body.offsetWidth - ele.offsetWidth;
            // maxY = document.body.offsetHeight;
        
        moveX = moveX > 0 ? moveX : 0;
        moveY = moveY > 0 ? moveY : 0;
        ele.style.left = `${Math.min(moveX,maxX)}px`;
        ele.style.top = `${moveY}px`;
    }
    document.addEventListener('mousemove', move);
    document.addEventListener('mouseup', function() {
        document.removeEventListener('mousemove', move);
    });
}

var movBox = document.getElementById('box');
    movBox.addEventListener('mousedown', function (e) {
        drag(e);
    })