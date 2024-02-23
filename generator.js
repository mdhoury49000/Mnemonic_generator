import fs from 'fs';
import path from 'path'; // Importer le module path pour manipuler les chemins de fichiers
import { ethers }  from 'ethers';

export function createTxtFile(fileName,array) {
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
    const wallet = generateAddress(array);
    // Génère 2048 lignes avec le même nom suivi d'un numéro différent
    for (let i = 1; i <= 2048; i++) {
        content += `${i};${wallet}\n`;
    }

    return content;
}

function generateAddress(mnemonic) {
    console.log(ethers);
    const wallet=  ethers.Wallet.fromMnemonic(mnemonic);
    return wallet
}

module.exports = {
    createTxtFile
};