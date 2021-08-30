var data = new Date()
var hora = data.getHours()
var minuto = data.getMinutes()

var tittle = document.querySelector("header.hora")
var comprimentos = document.querySelector(".comprimentos")
var img = document.querySelector(".imagem")
var fundo = document.querySelector("body") 

tittle.innerHTML = `<h1> são ${hora}:${minuto} horas </h1>`
if (hora >= 5 && hora < 12){
    comprimentos.innerHTML = '<p><strong>BOM DIA</strong>🌞</p>'
    img.src = 'img/dia.jpg'
    fundo.style.background = "#497CCB"
}else if (hora > 12 && hora <= 17){
    comprimentos.innerHTML = '<p><strong>BOA TARDE</strong>🌅</p>'
    img.src = 'img/tarde.jpg'
    fundo.style.background = "#D24930"
}else if (hora > 17 && hora <= 23){
    comprimentos.innerHTML = '<p><strong>BOA NOITE</strong>🌚</p>'
    img.src = 'img/noite.jpg'
    fundo.style.background = "#193E5B"
}else if (hora >=0 && hora <= 4){
    comprimentos.innerHTML = '<p><strong>BOA MADRUGADA</strong>💤</p>'
    img.src = 'img/noite.jpg'
    fundo.style.background = "#193E5B"
}else {
    window.prompt("erro")
}