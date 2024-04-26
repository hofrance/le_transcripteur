const words = [
    { word: "arbre", options: ["/aʁbʁ/", "/ɑʁb/", "/ɑʁbʁə/", "/aʁ.bʁə/"], answerIndex: 0 },
    { word: "chat", options: ["/ʃa/", "/ʃɑ/", "/ʃat/", "/ʃɑt/"], answerIndex: 2 },
    { word: "soleil", options: ["/sɔ.lɛj/", "/sɔ.lɛjə/", "/sɔ.lɛj.lə/", "/sɔ.lɛj.jə/"], answerIndex: 1 },
    { word: "maison", options: ["/mɛ.zɔ̃/", "/mɛ.zɔn/", "/mɛ.zɔnə/", "/me.zɔ̃/"], answerIndex: 3 },
    { word: "oiseau", options: ["/waz.o/", "/wɑ.zo/", "/wɑ.zo/", "/wɑ.zo/"], answerIndex: 1 },
    { word: "montagne", options: ["/mɔ̃.taɲ/", "/mɔ̃.taɲ/", "/mɔ̃.taɲə/", "/mɔ̃.taɲ.ə/"], answerIndex: 2 },
    { word: "pain", options: ["/pɛ̃/", "/pɛ̃/", "/pɛn/", "/pɛ̃/"], answerIndex: 0 },
    { word: "école", options: ["/e.kɔl/", "/ekɔl/", "/ekɔlə/", "/ekol/"], answerIndex: 1 },
    { word: "chien", options: ["/ʃjɛ̃/", "/ʃjɛn/", "/ʃjɛ̃ə/", "/ʃiɛ̃/"], answerIndex: 3 },
    { word: "voiture", options: ["/vwa.tyʁ/", "/vwa.tyʁ/", "/vwatyʁə/", "/vwatyr/"], answerIndex: 2 },
    { word: "fenêtre", options: ["/fə.nɛtʁ/", "/fə.nɛtʁ/", "/fənɛtʁə/", "/fənɛtʁ/"], answerIndex: 0 },
    { word: "plage", options: ["/plaʒ/", "/plaʒ/", "/plaʒə/", "/plaj/"], answerIndex: 1 },
    { word: "pomme", options: ["/pɔm/", "/pɔm/", "/pɔmə/", "/pɔm/"], answerIndex: 2 },
    { word: "table", options: ["/tabl/", "/tabl/", "/tablə/", "/tabl/"], answerIndex: 3 },
    { word: "vélo", options: ["/ve.lo/", "/ve.lo/", "/velo/", "/velo/"], answerIndex: 1 },
    { word: "téléphone", options: ["/te.le.fɔn/", "/te.le.fɔn/", "/te.le.fɔnə/", "/te.le.fon/"], answerIndex: 0 },
    { word: "ordinateur", options: ["/ɔʁ.di.na.tœʁ/", "/ɔʁ.di.na.tœʁ/", "/ɔʁ.di.na.tœʁə/", "/ɔʁ.di.na.tœʁ/"], answerIndex: 1 },
    { word: "fleur", options: ["/flœʁ/", "/flœʁ/", "/flœʁə/", "/flœʁ/"], answerIndex: 2 },
    { word: "livre", options: ["/livʁ/", "/livʁ/", "/livʁə/", "/livʁ/"], answerIndex: 3 },
    { word: "jour", options: ["/ʒuʁ/", "/ʒuʁ/", "/ʒuʁə/", "/ʒur/"], answerIndex: 0 },
    { word: "nuit", options: ["/nɥi/", "/nɥi/", "/nɥit/", "/nɥit/"], answerIndex: 1 },
    { word: "pluie", options: ["/plɥi/", "/pluj/", "/plu.i/", "/plu.jə/"], answerIndex: 2 },
    { word: "chocolat", options: ["/ʃɔ.kɔ.la/", "/ʃɔ.kɔ.la/", "/ʃɔ.kɔ.la/", "/ʃɔ.kɔ.la/"], answerIndex: 3 },
    { word: "avion", options: ["/a.vjɔ̃/", "/a.vjɔ̃/", "/a.vjɔn/", "/a.vjɔ̃/"], answerIndex: 0 },
    { word: "cuisine", options: ["/kɥi.zin/", "/kɥi.zin/", "/kɥi.zinə/", "/kɥiz.in/"], answerIndex: 1 },
    { word: "vache", options: ["/vaʃ/", "/vaʃ/", "/vaʃə/", "/vaʃ/"], answerIndex: 2 },
    { word: "jardin", options: ["/ʒaʁ.dɛ̃/", "/ʒaʁ.dɛ̃/", "/ʒaʁ.din/", "/ʒaʁ.dɛ̃/"], answerIndex: 3 },
    { word: "bonjour", options: ["/bɔ̃.ʒuʁ/", "/bɔ̃.ʒuʁ/", "/bɔ̃.ʒuʁ/", "/bɔ̃.ʒuʁ/"], answerIndex: 2 },
    { word: "ciel", options: ["/sjɛl/", "/sjɛl/", "/sjɛl/", "/sjɛl/"], answerIndex: 3 },
    { word: "merci", options: ["/mɛʁ.si/", "/mɛʁ.si/", "/mɛʁ.si/", "/mɛʁ.si/"], answerIndex: 0 },
    { word: "musique", options: ["/my.zik/", "/my.zik/", "/my.zik/", "/my.zik/"], answerIndex: 1 },
    { word: "restaurant", options: ["/ʁɛs.to.ʁɑ̃/", "/ʁɛs.to.ʁɑ̃/", "/ʁɛs.to.ʁɑ̃/", "/ʁɛs.to.ʁɑ̃/"], answerIndex: 2 },
    { word: "escalier", options: ["/ɛs.ka.lje/", "/ɛs.ka.lje/", "/ɛs.ka.lje/", "/ɛs.ka.lje/"], answerIndex: 3 },
    { word: "girafe", options: ["/ʒi.ʁaf/", "/ʒi.ʁaf/", "/ʒi.ʁafə/", "/ʒi.ʁaf/"], answerIndex: 0 },
    { word: "parapluie", options: ["/pa.ʁa.plɥi/", "/pa.ʁa.plɥi/", "/pa.ʁa.plɥi/", "/pa.ʁa.plɥi/"], answerIndex: 1 },
    { word: "étoile", options: ["/e.twal/", "/e.twal/", "/e.twal/", "/e.twal/"], answerIndex: 2 },
    { word: "bonne nuit", options: ["/bɔn nɥi/", "/bɔn nɥi/", "/bɔn nɥi/", "/bɔn nɥi/"], answerIndex: 3 },
    { word: "café", options: ["/ka.fe/", "/ka.fe/", "/ka.fe/", "/ka.fe/"], answerIndex: 0 },
    { word: "bonheur", options: ["/bɔ.nœʁ/", "/bɔ.nœʁ/", "/bɔ.nœʁ/", "/bɔ.nœʁ/"], answerIndex: 1 },
    { word: "sourire", options: ["/su.ʁiʁ/", "/su.ʁiʁ/", "/su.ʁiʁ/", "/su.ʁiʁ/"], answerIndex: 2 },
    { word: "plaisir", options: ["/plɛ.ziʁ/", "/plɛ.ziʁ/", "/plɛ.ziʁ/", "/plɛ.ziʁ/"], answerIndex: 3 },
    { word: "harmonie", options: ["/aʁ.mɔ.ni/", "/aʁ.mɔ.ni/", "/aʁ.mɔ.ni/", "/aʁ.mɔ.ni/"], answerIndex: 0 },
    { word: "énergie", options: ["/e.nɛʁ.ʒi/", "/e.nɛʁ.ʒi/", "/e.nɛʁ.ʒi/", "/e.nɛʁ.ʒi/"], answerIndex: 1 },
    { word: "liberté", options: ["/li.bɛʁ.te/", "/li.bɛʁ.te/", "/li.bɛʁ.te/", "/li.bɛʁ.te/"], answerIndex: 2 },
    { word: "rêver", options: ["/ʁɛ.ve/", "/ʁɛ.ve/", "/ʁɛ.ve/", "/ʁɛ.ve/"], answerIndex: 3 },
    { word: "passion", options: ["/pa.sjɔ̃/", "/pa.sjɔ̃/", "/pa.sjɔ̃/", "/pa.sjɔ̃/"], answerIndex: 0 },
    { word: "épanouissement", options: ["/e.pa.nu.is.mɑ̃/", "/e.pa.nu.is.mɑ̃/", "/e.pa.nu.is.mɑ̃/", "/e.pa.nu.is.mɑ̃/"], answerIndex: 1 },
    { word: "sérénité", options: ["/se.ʁe.ni.te/", "/se.ʁe.ni.te/", "/se.ʁe.ni.te/", "/se.ʁe.ni.te/"], answerIndex: 2 },
    { word: "joie", options: ["/ʒwa/", "/ʒwa/", "/ʒwa/", "/ʒwa/"], answerIndex: 3 },
    { word: "croissance", options: ["/kʁwa.sɑ̃s/", "/kʁwa.sɑ̃s/", "/kʁwa.sɑ̃s/", "/kʁwa.sɑ̃s/"], answerIndex: 0 },
    { word: "amitié", options: ["/a.mi.tie/", "/a.mi.tie/", "/a.mi.tie/", "/a.mi.tie/"], answerIndex: 1 },
    { word: "espoir", options: ["/ɛs.pwaʁ/", "/ɛs.pwaʁ/", "/ɛs.pwaʁ/", "/ɛs.pwaʁ/"], answerIndex: 2 },
    { word: "équilibre", options: ["/e.ki.libʁ/", "/e.ki.libʁ/", "/e.ki.libʁ/", "/e.ki.libʁ/"], answerIndex: 3 },
    { word: "beauté", options: ["/bo.te/", "/bo.te/", "/bo.te/", "/bo.te/"], answerIndex: 0 },
];


// Fonction pour mélanger les éléments d'un tableau
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Échange des éléments
    }
}

// Filtre pour enlever les doublons et préparer les mots uniques
const uniqueWords = words.filter((word, index, self) =>
    index === self.findIndex((w) => (
        w.word === word.word && w.options.every((opt, idx) => opt === word.options[idx])
    ))
);

// Mélanger le tableau des mots avant de démarrer le jeu
shuffleArray(uniqueWords);


function createCard(word) {
    const card = document.createElement('div');
    card.classList.add('bg-white', 'shadow-lg', 'rounded-lg', 'p-6', 'flex', 'flex-col', 'space-y-4');
    card.innerHTML = `<h2 class="text-xl font-semibold mb-4">${word.word}</h2>`;
    const optionsContainer = document.createElement('div');
    optionsContainer.classList.add('options-container');

    word.options.forEach((option, index) => {
        const optionCard = document.createElement('div');
        optionCard.classList.add('option-card', 'bg-gray-100', 'p-4', 'rounded-lg', 'cursor-pointer', 'hover:bg-gray-200', 'transition-colors', 'duration-200');
        optionCard.textContent = option;
        optionCard.onclick = () => handleOptionClick(index, word.answerIndex, card);
        optionsContainer.appendChild(optionCard);
    });

    card.appendChild(optionsContainer);
    return card;
}

function handleOptionClick(selectedIndex, correctIndex, card) {
    if (selectedIndex === correctIndex) {
        card.style.backgroundColor = "#10B981"; // Vert pour une réponse correcte
        score++;
        updateScoreDisplay(); // Assurez-vous que cette fonction met à jour l'affichage du score dans votre DOM
    } else {
        card.style.backgroundColor = "#EF4444"; // Rouge pour une réponse incorrecte
    }
    setTimeout(() => {
        card.style.backgroundColor = ""; // Réinitialisation de la couleur de fond
        currentIndex++;
        gameContainer.innerHTML = ''; // Effacer le contenu actuel
        if (currentIndex < uniqueWords.length) {
            displayNextWord(); // Afficher le mot suivant
        } else {
            alert("Le jeu est terminé ! Votre score : " + score);
        }
    }, 2000); // Attendre 2 secondes avant de passer au mot suivant
}

function displayNextWord() {
    if (currentIndex < uniqueWords.length) {
        const currentWord = uniqueWords[currentIndex];
        const card = createCard(currentWord);
        gameContainer.appendChild(card);
    }
}

// Assurez-vous de définir les variables score, currentIndex, gameContainer correctement
let score = 0;
let currentIndex = 0;
const gameContainer = document.getElementById('game-container');

document.addEventListener('DOMContentLoaded', () => {
    displayNextWord();
});

