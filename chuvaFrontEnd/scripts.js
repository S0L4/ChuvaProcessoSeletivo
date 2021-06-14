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

function criacaoTopico() {
    var topicInitialArea = document.getElementById("topic");
    var topicCreationArea = document.getElementById("topicArea");

    if (topicCreationArea.style.display === "none") {
        topicCreationArea.style.display = "inline"
        topicInitialArea.style.display = "none";
    } else {
        topicCreationArea.style.display = "none"
    }
}

function enviarTopico() {
    var topicCreationArea = document.getElementById("topicArea");
    var topicSendedArea = document.getElementById("sendedTopic");

    if (topicSendedArea.style.display === "none") {
        topicSendedArea.style.display = "inline"
        topicCreationArea.style.display = "none";
    } else {
        topicSendedArea.style.display = "none"
    }
}

function criacaoNovoTopico() {
    var topicCreationArea = document.getElementById("topicArea");
    var topicSendedArea = document.getElementById("sendedTopic");

    if (topicSendedArea.style.display === "inline") {
        topicSendedArea.style.display = "none"
        topicCreationArea.style.display = "inline";
    } else {
        topicSendedArea.style.display = "inline"
    }
}
