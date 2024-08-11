function checkAge(age) {
    if (age < 18) {
        return "Vous êtes mineur.";
    } else if (age >= 65) {
        return "Vous êtes senior.";
    } else {
        return "Vous êtes majeur.";
    }
}

console.log(checkAge(22)); // Affiche "Vous êtes majeur."
console.log(checkAge(13)); // Affiche "Vous êtes mineur."
console.log(checkAge(70)); // Affiche "Vous êtes senior."


export default checkAge;
