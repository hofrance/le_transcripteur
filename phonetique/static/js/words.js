const words = [
    { word: "apple", options: ["/ˈæpl/", "/ˈbænənə/", "/ˈɒrɪndʒ/", "/ˈstraɪ.bər.i/"], answerIndex: 0 },
    { word: "banana", options: ["/ˈæpl/", "/ˈbænənə/", "/ˈɒrɪndʒ/", "/ˈstraɪ.bər.i/"], answerIndex: 1 },
    { word: "orange", options: ["/ˈæpl/", "/ˈbænənə/", "/ˈɒrɪndʒ/", "/ˈstraɪ.bər.i/"], answerIndex: 2 },
    { word: "strawberry", options: ["/ˈæpl/", "/ˈbænənə/", "/ˈɒrɪndʒ/", "/ˈstraɪ.bər.i/"], answerIndex: 3 }
];

let currentIndex = 0;
let score = 0;

function createCard(word) {
    const card = document.createElement('div');
    card.classList.add('bg-blue-200', 'p-4', 'rounded-md', 'text-center', 'cursor-pointer', 'card');
    card.innerHTML = `
        <div class="font-bold text-lg mb-2">${word.word}</div>
        <div id="options-container" class="flex flex-wrap justify-center gap-4"></div>
    `;
    const optionsContainer = card.querySelector('#options-container');
    word.options.forEach((option, index) => {
        const optionButton = document.createElement('input');
        optionButton.type = "radio";
        optionButton.name = "options";
        optionButton.value = index;
        optionButton.id = `option-${index}`;
        const optionLabel = document.createElement('label');
        optionLabel.htmlFor = `option-${index}`;
        optionLabel.textContent = option;
        optionsContainer.appendChild(optionButton);
        optionsContainer.appendChild(optionLabel);
    });
    return card;
}

function updateScore(correct) {
    const scoreElement = document.getElementById('score');
    if (correct) {
        score += 10; // Augmenter le score de 10 points pour chaque réponse correcte
    } else {
        score = Math.max(0, score - 5); // Diminuer le score de 5 points pour chaque erreur
    }
    scoreElement.textContent = score; // Mettre à jour l'affichage du score
}

function displayNextWord() {
    if (currentIndex >= words.length) {
        alert("Le jeu est terminé ! Votre score final est : " + score);
        currentIndex = 0; // Réinitialiser pour une nouvelle partie
        score = 0; // Réinitialiser le score
    }
    gameContainer.innerHTML = ''; // Effacer le contenu actuel
    const currentWord = words[currentIndex];
    const card = createCard(currentWord);
    card.addEventListener('click', () => {
        const selectedOption = document.querySelector('input[name="options"]:checked');
        if (selectedOption) {
            const userAnswerIndex = parseInt(selectedOption.value);
            const correct = userAnswerIndex === currentWord.answerIndex;
            updateScore(correct);
            currentIndex++; // Passer au mot suivant
            setTimeout(displayNextWord, 2000); // Attendre 2 secondes avant de passer au mot suivant
        } else {
            alert("Veuillez sélectionner une option !");
        }
    });
    gameContainer.appendChild(card);
}

displayNextWord(); // Démarrer le jeu en affichant le premier mot
