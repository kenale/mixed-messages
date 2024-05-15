// This are the phrases of this app
const phrases = ["Hoy es un lindo día", "El helado de cookies es delicioso", "Toma agua, toma agua, TOMA AGUA!!!!", "Sal a caminar y despejar la mente", 
"Feliz día del día"]


// This will be the function for randomize the app

const randomMessage = () => {
    let randomNum = 0;
    randomNum = Math.floor(Math.random() * (phrases.length - 1));
    return phrases[randomNum];
};

console.log(randomMessage);