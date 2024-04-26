document.addEventListener('DOMContentLoaded', function() {
    const startBtn = document.getElementById('startBtn');
    const stopBtn = document.getElementById('stopBtn');
    const audioPlayback = document.getElementById('audioPlayback');
    const transcriptionForm = document.getElementById('transcriptionForm');
    const transcriptionResult = document.getElementById('transcriptionResult');
    const transcriptionText = document.getElementById('transcriptionText');
    const alertBox = document.getElementById('alertBox');
    const alertText = document.getElementById('alertText');

    let mediaRecorder;
    let audioChunks = [];

    startBtn.addEventListener('click', function() {
        navigator.mediaDevices.getUserMedia({ audio: true })
            .then(stream => {
                mediaRecorder = new MediaRecorder(stream);
                mediaRecorder.ondataavailable = event => {
                    audioChunks.push(event.data);
                };
                mediaRecorder.start();
                startBtn.disabled = true;
                stopBtn.disabled = false;
            })
            .catch(err => {
                console.error("Error accessing media devices.", err);
                alertText.textContent = "Erreur d'accès au micro.";
                alertBox.classList.remove('hidden');
            });
    });

    stopBtn.addEventListener('click', function() {
        mediaRecorder.stop();
        mediaRecorder.onstop = () => {
            const audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
            const audioUrl = URL.createObjectURL(audioBlob);
            audioPlayback.src = audioUrl;
            audioPlayback.classList.remove('hidden');

            const audioFile = new File([audioBlob], 'user_recording.wav', { type: 'audio/wav', lastModified: Date.now() });
            handleUpload(audioFile);

            audioChunks = [];
            startBtn.disabled = false;
            stopBtn.disabled = true;
        };
    });

    transcriptionForm.addEventListener('submit', function(event) {
        event.preventDefault();
        handleUpload();
    });

    function handleUpload(audioFile) {
        const formData = new FormData(); // Create a new FormData object
        formData.append('audio', audioFile); // Append the audio file under the key 'audio'
        formData.append('text', document.getElementById('texte').value); // Optionally, add other form data if needed

        fetch(transcriptionForm.action, {
            method: 'POST',
            body: formData,
            headers: {
                'X-CSRFToken': getCookie('csrftoken') // Ensure CSRF token is included if using Django
            }
        }).then(response => {
            if (!response.ok) throw new Error('Échec de la requête');
            return response.json();
        }).then(data => {
            if (data.error) throw new Error(data.error);
            transcriptionText.textContent = data.transcription; // Update the UI with the transcription
            transcriptionResult.classList.remove('hidden');
            alertBox.classList.add('hidden');
        }).catch(error => {
            alertText.textContent = error.message;
            alertBox.classList.remove('hidden');
            console.error('Error:', error);
        });
    }

    function getCookie(name) {
        let cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            const cookies = document.cookie.split(';');
            for (let i = 0; i < cookies.length; i++) {
                const cookie = cookies[i].trim();
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
});
