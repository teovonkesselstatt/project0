document.querySelector("#commie").onclick = function() {
    document.querySelector('body').style.backgroundColor = "red";
    document.querySelector('.header').style.backgroundColor = "red";
    document.querySelector('#eco').style = "color:white;";
    document.querySelector('.subsection').style = "color:white;";
    document.querySelector('p').style = "color:white;";
    document.querySelector('.extra_margin').style = "color:white;";
    document.querySelector('#div').style = "color:white;";
    document.querySelector('#lal').style = "color:white;";
    document.querySelector('#eco').innerHTML = "Commie";
}

document.querySelector("#lib").onclick = function() {
    document.querySelector('body').style.backgroundColor = "lightblue";
    document.querySelector('.header').style.backgroundColor = "blue";
    document.querySelector('p').style = "color:black;";
    document.querySelector('#eco').style = "color:black;";
    document.querySelector('.extra_margin').style = "color:black;";
    document.querySelector('#div').style = "color:black;";
    document.querySelector('#lal').style = "color:black;";
    document.querySelector('.subsection').style = "color:blue;";
    document.querySelector('#eco').innerHTML = "Monetarist/liberal :)";
}

document.querySelector("#green").onclick = function() {
    document.querySelector('body').style.backgroundColor = "green";
    document.querySelector('.header').style.backgroundColor = "green";
    document.querySelector('p').style = "color:white;";
    document.querySelector('#eco').style = "color:white;";
    document.querySelector('.extra_margin').style = "color:white;";
    document.querySelector('#div').style = "color:white;";
    document.querySelector('#lal').style = "color:white;";
    document.querySelector('.subsection').style = "color:white;";
    document.querySelector('#eco').innerHTML = "Progressist/SJW";
}
