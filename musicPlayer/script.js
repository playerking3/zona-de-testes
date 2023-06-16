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
            tabela.innerHTML += '<td>' + file.name + '</td> <td>' + duration + '</td>'
            tabela.innerHTML += '</tr>'

        };

        audio.src = URL.createObjectURL(file); // Define o arquivo de áudio para o elemento <audio>
    }
}