// FUNCAO PARA VER MAIS DO TEXTO RESUMIDO      
function verMais() {
    var resumeText = document.getElementById("resumeText");
    var completeText = document.getElementById("completeText");
    var seeMore = document.getElementById("seeMoreButton");

    if (resumeText.style.display === "none") {
        resumeText.style.display = "inline";
        completeText.style.display = "none";
        seeMore.innerHTML = "ver mais";
    } else {
        resumeText.style.display = "none";
        completeText.style.display = "inline";
        seeMore.innerHTML = "resumir";
    }
}

// FUNCAO PARA IR PARA A AREA DE CRIACAO DE UM NOVO TOPICO
function criacaoTopico() {
    topicInitialArea = document.getElementById("topic");
    topicCreationArea = document.getElementById("topicArea");
    topicSendedArea = document.getElementById("sendedTopic");

    if (topicCreationArea.style.display === "none") {
        topicCreationArea.style.display = "inline";
        topicInitialArea.style.display = "none";
    } else {
        topicCreationArea.style.display = "none";
    }
}

// FUNCAO PARA IR PARA A AREA DE TOPICO ENVIADO
function enviarTopico() {

    if (topicSendedArea.style.display === "none") {
        topicSendedArea.style.display = "inline";
        topicCreationArea.style.display = "none";
    } else {
        topicSendedArea.style.display = "none";
    }
}

// FUNCAO PARA RETORNAR A AREA DE CRIACAO DE TOPICO
function criacaoNovoTopico() {

    if (topicSendedArea.style.display === "inline") {
        topicSendedArea.style.display = "none";
        topicCreationArea.style.display = "inline";
    } else {
        topicSendedArea.style.display = "inline";
    }
}

// FUNCAO PARA MOSTRAR OS COMENTARIOS DAS PERGUNTAS
function comentarioPergunta() {
    var questionComents = document.getElementById("questionComents");

    if (questionComents.style.display === "none") {
        questionComents.style.display = "inline";
    } else {
        questionComents.style.display = "none"
    }
}
