canvas=document.getElementById("myCanvas")
ctx=canvas.getContext("2d")
var mouseEvent="empty"
var scwidth=screen.width
var newwidth=screen.width-11
var newheight=screen.height-50
if (scwidth <992) {
    document.getElementById("myCanvas").width=newwidth
    document.getElementById("myCanvas").height=newheight
}
var lastx,lasty
color="black"
width=1
canvas.addEventListener("mousedown",clickfn)
function clickfn(e){
    mouseEvent="mousedown"
}
canvas.addEventListener("mouseup",removeclick)
function removeclick(e){
    mouseEvent="mouseup"
}
canvas.addEventListener("mouseleave",leavefn)
function leavefn(e){
    mouseEvent="mouseleave"
}
canvas.addEventListener("mousemove",drag)
function drag(e){
    currentx=e.clientX-canvas.offsetLeft
    currenty=e.clientY-canvas.offsetTop
    if(mouseEvent=="mousedown"){
        ctx.beginPath()
        ctx.strokeStyle=color
        ctx.lineWidth=width
        ctx.moveTo(lastx,lasty)
        ctx.lineTo(currentx,currenty)
        ctx.stroke()
    }
    lastx=currentx
    lasty=currenty
}
canvas.addEventListener("touchstart",touch)
function touch(e){
    color=document.getElementById("color").value
    width=document.getElementById("linewidth").value
    lastx=e.touches[0].clientX-canvas.offsetLeft
    lasty=e.touches[0].clientY-canvas.offsetTop
    
}
canvas.addEventListener("touchmove",move)
function move(e){
    currentx=e.touches[0].clientX-canvas.offsetLeft
    currenty=e.touches[0].clientY-canvas.offsetTop
ctx.beginPath()
ctx.strokeStyle=color
ctx.linewidth=width
ctx.moveTo(lastx,lasty)
ctx.lineTo(currentx,currenty)
ctx.stroke()
lastx=currentx
lasty=currenty
}