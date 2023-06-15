
formulario = document.getElementById('linear');
formulario.addEventListener('submit', function(event){
    event.preventDefault();
    form = new FormData(formulario);
    let x = parseFloat(form.get('qty'))
    conta(x)
    console.log(grafico(lista(x)))
    
})

function conta(x) {
    result = 2*x + 3
    return result
}
function lista(x){
    let lista = []
    for (var i = 0; i <= x; i++) {
        lista.push(conta(i))
    }
    return lista
}

function grafico(lista) {
    let itens = lista.length -1
    let porcentagem = 100/itens
    let caixa = document.getElementById('grafic')
    caixa.innerHTML = ''
    for (var i = 1; i <= itens; i++) {
        caixa.innerHTML += `
        <div class="coluna">
            <p>`+lista[i]+`</p>
        </div>
        `
    }
    caixa.style.gridTemplateColumns = 'repeat('+itens+',1fr)'
    let colunas = document.getElementsByClassName('coluna')
    let tamanho = porcentagem
    for (var i = 0; i < colunas.length; i++) {
        colunas[i].style.height = tamanho+'%'
        tamanho += porcentagem  
    }
    console.log(colunas)

}