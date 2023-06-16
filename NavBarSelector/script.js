let sublinha = document.getElementById("underscore")
sublinha.style.left = document.getElementsByClassName("icon")[0].getBoundingClientRect().x + "px"
function sublinhado(obj) {
    let position = obj.getBoundingClientRect().x
    sublinha.style.left = position + "px"
}