const quiensoy= document.getElementById("quiensoy")
const pagina2 = document.getElementById("pagina2")
const anterior = document.getElementById("anterior")

quiensoy.addEventListener("click", ()=>{ pagina2.classList.add("entrar")} )

anterior.addEventListener("click", ()=>{ pagina2.classList.remove("entrar")})
