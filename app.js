// Import des fonctions nécessaires
const ethers = require("ethers");
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
// Définition de la fonction de génération du pool
 function generatePool() {

    let running = false;

    const start = () => {
        if (!running) {
            running = true;
            console.log("Processus démarré.");
            // Fonction interne pour générer le fichier
            const generateFile = () => {
                const  {chaineDeNombres, array}  = generateArrayNumber();
                createTxtFile(chaineDeNombres, array);
                console.log(`Fichier ${chaineDeNombres} généré.`);
                // Appel récursif pour continuer le processus tant que "stop" n'est pas reçu
                if (running) {
                    setTimeout(generateFile, 500); // Exemple : répétition toutes les 1 seconde
                }
            };
            generateFile(); 
        } else {
            console.log("Le processus est déjà en cours.");
        }
    };

    const stop = () => {
        if (running) {
            running = false;
            console.log("Processus arrêté.");
        } else {
            console.log("Le processus n'est pas en cours.");
        }
    };

    return { start, stop };
}

function randomBytes(length) {
    return crypto.randomBytes(length);
}

function generateArrayNumber() {
    let number = [12, 15, 18, 21, 24];
    let array = [];
    let random = Math.floor(Math.random() * number.length);
    const bytes = randomBytes(number[random]);

    for (let i = 0; i < number[random]; i++) {
        array.push(bytes[i]);
    }

    let chaineDeNombres = array.join("-");
    console.log(chaineDeNombres);
    return { chaineDeNombres, bytes };
}

 function createTxtFile(fileName,array) {
    const poolDir = './pool'; // Chemin du dossier pool
    const content = generateFileContent(array);

    const fullPath = path.join(poolDir, `${fileName}.txt`); // Chemin complet du fichier avec le nom de fichier et l'extension

    fs.writeFile(fullPath, content, err => {
        if (err) {
            console.error("Une erreur s'est produite lors de la création du fichier :", err);
            return;
        }
        console.log(`Le fichier ${fullPath} a été créé avec succès.`);
    });
}
 function generateFileContent(array) {
    let content = '';
    // Génère 2048 lignes avec le même nom suivi d'un numéro différent
    for (let i = 1; i <= 2048; i++) {
        content += `${i}\n`;
    }

    return content;
}



module.exports = {
    generatePool
};