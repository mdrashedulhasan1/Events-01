const bodyBlue = document.getElementById('body-blue');
bodyBlue.onclick = colorBlue;
function colorBlue(){
    document.body.style.backgroundColor = 'blue';
}
function colorYellow(){
    document.body.style.backgroundColor = 'yellow';
}

const bodyHotPink = document.getElementById('body-HotPink');
bodyHotPink.onclick = function colorHotPink(){
    document.body.style.backgroundColor = 'hotpink';
}

const bodyTomato = document.getElementById('body-tomato');
bodyTomato.onclick = function(){
    document.body.style.backgroundColor = 'tomato';
}

const bodyGold = document.getElementById('body-gold');
bodyGold.addEventListener('click',colorGod);
function colorGod(){
    document.body.style.backgroundColor = 'gold';
}

const bodyFuchsia = document.getElementById('body-fuchsia');
bodyFuchsia.addEventListener('click',function colorFuchsia(){
    document.body.style.backgroundColor = 'fuchsia';
})

const bodySlateBlue = document.getElementById('body-SlateBlue');
bodySlateBlue.addEventListener('click',function(){
    document.body.style.backgroundColor = 'SlateBlue';
})

document.getElementById('body-Chartreuse').addEventListener('click',function(){
    document.body.style.backgroundColor = 'Chartreuse';
})