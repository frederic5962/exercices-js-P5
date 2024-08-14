
//votre code ici
function printNumbers(n) {
    let result = '';
    for (let i = 1; i <= n; i++) {
        result += i + ' ';
    }
    return result.trim(); // Supprime l'espace en trop à la fin
}

// Exemple d'utilisation :
/* console.log(printNumbers(5));  Résultat : "1 2 3 4 5" */

 export default printNumbers; 

/* 
 autre facon de faire un peu plus complexe a comprendre 
 function printNumbers(n) {
    return Array.from({ length: n }, (_, i) => i + 1).join(' ');
}

// Exemple d'utilisation :
/* console.log(printNumbers(5));  Résultat : "1 2 3 4 5" */

/* export default printNumbers;  */