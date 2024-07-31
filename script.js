function loadVideo(videoFile) {
    const video = document.getElementById('video');
    const source = document.getElementById('videoSource');
    source.src = videoFile;
    video.load();
    video.style.display = 'block';
    video.play();
}

function handleYes() {
    document.getElementById('pregunta').style.display = 'none';
    document.getElementById('btnSi').style.display = 'none';
    document.getElementById('btnNo').style.display = 'none';
    document.getElementById('secondQuestion').style.display = 'block';
}

function handleNo() {
    document.getElementById('noMessage').style.display = 'block';
}

function showAlert() {
    document.getElementById('alertBox').style.display = 'block';
}

function closeAlert() {
    document.getElementById('alertBox').style.display = 'none';
}

function closeNoMessage() {
    document.getElementById('noMessage').style.display = 'none';
}
