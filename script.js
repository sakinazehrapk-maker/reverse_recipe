console.log("script loaded");

const results = [
    "you accidentally created a medieval poison",
    "this mixture is wanted in 14 countries",
    "scientists have asked you to stop",
    "you have invented sadness soup",
    "a dragon refused to eat this :(",
    "this recipe immediately voids your warranty",
    "you have recreated pirate fuel",
    "the local wizard is concerned",
    "congratulations! youve made haunted yogurt",
    "this dish was banned by a goat"
];

function generateResult() {
    const ingredientBox = document.getElementById("ingredients");
    const resultBox = document.getElementById("result");

    if (!ingredientBox.value.trim()) {
        resultBox.textContent = "Enter some ingredients first!";
        return;
    }
    const riskFill = document.getElementById("riskFill");
    const riskText = document.getElementById("riskText");

    const ingredientCount =
    ingredientBox.value.split(",").length;
    const risk=
    Math.min(ingredientCount*20,100);
    if(risk<25){
        riskFill.style.width="25%";
        riskFill.style.background="#3cb371";
        riskText.textContent="🟢mildly suss"
    }
    else if(risk<50){
        riskFill.style.width="50%";
        riskFill.style.background="#D4AF37";
        riskText.textContent="🟡cursed";
    }
    else if(risk<75){
        riskFill.style.width="75%";
        riskFill.style.background="#ff8c00";
        riskText.textContent="🟠forbidden";
    }
    else{
        riskFill.style.width="100%";
        riskFill.style.background="#ff3333";
        riskText.textContent="🔴 ELDRITCH THREAT";
    }
    const randomResult =
        results[Math.floor(Math.random() * results.length)];

    const textBox = document.querySelector(".scroll-text");
    textBox.textContent=randomResult;
    resultBox.classList.remove("open");
    void resultBox.offsetWidth;
    resultBox.classList.add("open");
}
function enterGrimoire(){
    document.getElementById("warningScreen").style.display="none";
    document.getElementById("mainApp").style.display="block";
}
