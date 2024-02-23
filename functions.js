const { ethers } = require("ethers");
export function generateArrayNumber() {
    let number = [11, 14, 17, 20, 23];
    let array = [];
    let random = Math.floor(Math.random() * number.length); // Utilisation de la longueur du tableau pour éviter de sélectionner 0

    const bytes = ethers.utils.randomBytes(number[random]);
    for (let i = 0; i < number[random]; i++) {
        array.push(bytes[i]);
    }

    let chaineDeNombres = array.join("-");
    console.log(chaineDeNombres);
    return { chaineDeNombres, bytes };
}
