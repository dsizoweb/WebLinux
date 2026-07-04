let boton =document.getElementById("container-buton")
let k =document.getElementById("k")
let level =document.getElementById("s1")
let lvs =document.getElementById("levels")
let nav = document.getElementById("nav")

boton.addEventListener("click",function(){
    boton.classList.toggle("dark")
    document.body.classList.toggle("dark")
    k.classList.toggle("dark")
    level.classList.toggle("dark")
    lvs.classList.toggle("dark")
    nav.classList.toggle("dark")
})