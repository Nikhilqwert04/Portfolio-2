let cursor = document.querySelector(".cursordelay");
window.addEventListener("mousemove",function(detail){
    cursor.style.top=detail.clientY-23+"px";
    cursor.style.left=detail.clientX-23+"px";
})