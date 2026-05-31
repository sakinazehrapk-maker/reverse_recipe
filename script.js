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

    const randomResult =
        results[Math.floor(Math.random() * results.length)];

    const textBox = document.querySelector(".scroll-text");
    textBox.textContent=randomResult;
    resultBox.classList.remove("open");
    void resultBox.offsetWidth;
    resultBox.classList.add("open");
}