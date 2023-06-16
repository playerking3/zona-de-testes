let forme = document.getElementById("form")
forme.addEventListener("submit", dados)
function dados(event) {
    event.preventDefault()
    let data = new FormData(this)
    let nome = data.get("name")

    let popup = document.getElementById("popup")
    let popNome = document.getElementById("popnome")
    popNome.innerHTML = "Nome: " + nome
    popup.style.display = "block"
    escuro = document.getElementById("escuro").style.display = "block"
}

function fechar(btn) {
    pai = btn.parentElement
    pai.style.display = "none"
    escuro = document.getElementById("escuro").style.display = "none"
}