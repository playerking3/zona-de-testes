let tabela = document.getElementById("tabela")
files = ""
function handleFileSelect(event) {
    files = event.target.files; // Obtém a lista de arquivos selecionados

    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const audio = document.createElement('audio');

        audio.onloadedmetadata = function () {
            const duration = audio.duration;	// Faça algo com a duração do arquivo de áudio aqui
            console.log(duration);
            tabela.innerHTML += '<tr>'
            tabela.innerHTML += '<td onclick="tocar(this)">' + file.name + '</td> <td>' + formatDuration(duration) + '</td>'
            tabela.innerHTML += '</tr>'

        };

        audio.src = URL.createObjectURL(file); // Define o arquivo de áudio para o elemento <audio>

    }
}

function tocar(audio){

    let nome = audio.innerHTML
    let player = document.getElementById("audio")
    player.innerHTML = `
    <audio controls autoplay id='som'>
        <source src="playlist/`+nome+`" type="audio/wav" id="player">
    </audio>
    `
    som.addEventListener("ended", () =>{
        let index = null;
        for (let i = 0; i < files.length; i++){
            if (files[i].name == nome){
                index = i;
            }

        }
        if (index == files.length){
            index = 0
            player.innerHTML = `
                <audio controls autoplay id='som'>
                    <source src="playlist/`+files[index].name+`" type="audio/wav" id="player">
                </audio>
                `
        }else{
            index += 1
            player.innerHTML = `
                <audio controls autoplay id='som'>
                    <source src="playlist/`+files[index].name+`" type="audio/wav" id="player">
                </audio>
                `
        }
    })
    
}


function formatDuration(duration) {
    const minutes = Math.floor(duration / 60);
    const seconds = Math.floor(duration % 60);
    const formattedDuration = `${minutes}:${seconds.toString().padStart(2, '0')}`;
    return formattedDuration;
  }