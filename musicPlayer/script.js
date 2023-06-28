let tabela = document.getElementById("tabela")
function handleFileSelect(event) {
    const files = event.target.files; // Obtém a lista de arquivos selecionados

    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const audio = document.createElement('audio');

        audio.onloadedmetadata = function () {
            const duration = audio.duration;	// Faça algo com a duração do arquivo de áudio aqui
            console.log(duration);
            tabela.innerHTML += '<tr>'
            tabela.innerHTML += '<td onclick="tocar(this)">' + file.name + '</td> <td>' + parseInt(duration) + '</td>'
            tabela.innerHTML += '</tr>'

        };

        audio.src = URL.createObjectURL(file); // Define o arquivo de áudio para o elemento <audio>
    }
}

function tocar(audio){
    let nome = audio.innerHTML
    let player = document.getElementById("audio")
    player.innerHTML = `
    <audio controls autoplay>
        <source src="playlist/`+nome+`" type="audio/wav" id="player">
    </audio>
    `
}