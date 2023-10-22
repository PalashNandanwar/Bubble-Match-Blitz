function CreateBubble() {
    var back = document.querySelector("#back")
    var bubble = document.createElement("span")
    var size = Math.random()*60
    bubble.style.width = 20 + size + 'px';
    bubble.style.height = 20 + size + 'px';

    bubble.style.left = Math.random()*innerWidth + "px";
    back.appendChild(bubble);
    var num = Math.floor(Math.random() * 10)
    bubble.innerHTML = num

    setTimeout(() => {
        bubble.remove()
    },4000);
}

function startAnimation() {
    setInterval(CreateBubble, 50);
}

startAnimation()