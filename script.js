var timmer = 60;
var res = 0;
var value


function getBubble() {
    var ele = ""
    for (var i = 0; i <= 195; i++) {
        var num = Math.floor(Math.random() * 10)
        ele += `<div class="bubble">${num}</div>`;
    }

    var elel2 = document.querySelector("#panel-bottom").innerHTML = ele;
}

function timmervalue() {
    var timmer_run = setInterval(function () {
        if(timmer > 0) {
            timmer--;
            document.querySelector("#timmer-value").textContent = timmer;
        } else {
            clearInterval(timmer_run)
            document.querySelector("#panel-bottom").innerHTML = `<h1>Game Over</h1>`;
            document.querySelector("#Result").innerHTML = `Total Score :- ${res}`;
        }
    }, 1000);
}

function Hit_Val() {
    value = Math.floor(Math.random()*10);
    document.querySelector("#Hit_Value").textContent = value;
}

function Score() {
    res += 10;
    document.querySelector("#score").textContent = res
}

document.querySelector("#panel-bottom").addEventListener("click",function(a) {
    // alert("bubble is clicked")
    var clicked  = Number(a.target.textContent);
    if(clicked === value) {
        Score();
        getBubble();
        Hit_Val()
    }
});

function run() {
    getBubble();
    Hit_Val();
    timmervalue();
}


var d = document.querySelector("#Generate")
d.addEventListener("click", run)
