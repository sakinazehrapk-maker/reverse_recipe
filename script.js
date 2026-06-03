console.log("script loaded");
const SAVE_KEYS = {
    achievements: "wizard_achievements",
    brewCount: "wizard_brewCount"
};
let brewCount = parseInt(localStorage.getItem(SAVE_KEYS.brewCount)) || 0;
let achievements = new Set(
JSON.parse(localStorage.getItem(SAVE_KEYS.achievements))||[]
);
function saveGame(){
    localStorage.setItem(SAVE_KEYS.brewCount, brewCount)
    localStorage.setItem(SAVE_KEYS.achievements,JSON.stringify([...achievements]));
}
function showAchievementPopup(name){
    const popup =
    document.getElementById(
        "achievementPopup"
    );
    const popupText=
    document.getElementById(
        "achievementPopupText"
    );
     popupText.innerHTML = `Achievement unlocked!<br><strong>${name}</strong>`;
    popup.classList.add("show");
    setTimeout(() => popup.classList.remove("show"), 3000);
}

function unlockAchievement(name){
    if(achievements.has(name)){
        return;
    }
    achievements.add(name);
    showAchievementPopup(name);
    const list =
        document.getElementById("achievementList");

    
    if(list){
     if (list.children[0]?.textContent.trim() === "none yet...") {
            list.innerHTML = "";
        }
        const item = document.createElement("li");
        item.textContent = name;
        list.appendChild(item);
    }
    saveGame();
    checkArchmage();
}
function checkArchmage(){
    if(
        achievements.has("First Brew")&&
        achievements.has("Curious Apprentice")&&
        achievements.has("Position Enthusiast")&&
        achievements.has("Arcane Researcher")&&
        achievements.has("Reality Breaker")&&
        achievements.has("Eldritch Chef")
    ){
        if(!achievements.has("Archmage of Chaos")){
            unlockAchievement("Archmage of Chaos");
        }
    }
}

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
const forbiddenResults = [
    "THE ANCIENT SEAL HAS BEEN BROKEN",
    "YOU HAVE SUMMONED THE ACCOUNTANT OF THE ABYSS",
    "THE COUNCIL OF WIZARDS HAS BEEN NOTIFIED",
    "REALITY IS NOW OPTIONAL",
    "THE CAULDRON IS AFRAID OF YOU",
    "YOU HAVE COOKED SOMETHING THAT SHOULD NOT EXIST"
];
const lorePages =[
    "PAGE:17 never mix moon ilk with dragon ketchup,the kingdom is still recovering",
    "PAGE 42:wizard Gary attempted to season soup with pure magic.we do not speak of Gary",
    "PAGE 88: the great banana incident lasted three winters",
    "PAGE 103:if your ccauldron begins singing, evacuate immediately",
    "PAGE 144: the council banned glowing mayonnaise after the incident",
    "PAGE 207:a potion containing seven cheese opened a portal to accounting"
];

function generateResult() {
    const ingredientBox = document.getElementById("ingredients");
    const resultBox=document.getElementById("result");
    
    if (!ingredientBox.value.trim()) {
        const textBox = document.querySelector(".scroll-text");

if (textBox) {
    textBox.textContent = "enter some ingredients first!";
}
    return;
}
    brewCount++;
    updateUI();
    saveGame();
    if(brewCount===1){
        unlockAchievement("First Brew");
    }
    if(brewCount===5){
        unlockAchievement("Curious Apprentice");
    }
    if(brewCount===10){
        unlockAchievement("Potion Enthusiast")
    }
    document.body.classList.remove("forbidden-mode");

    const ingredients =
    ingredientBox.value.toLowerCase();
    const riskFill = document.getElementById("riskFill");
    const riskText = document.getElementById("riskText");

    const ingredientCount =
    ingredientBox.value
        .split(/[,\s]+/)
        .filter(item => item.trim() !== "")
        .length;
    const risk = Math.min(ingredientCount * 20, 100);
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
        unlockAchievement("Eldritch Chef");
    }

    const forbiddenCombo =
    ingredients.includes("milk") &&
    ingredients.includes("ketchup") &&
    ingredients.includes("banana");
    const textBox=document.querySelector(".scroll-text");
    if(forbiddenCombo){
    document.body.classList.add("forbidden-mode");
    unlockAchievement("Reality Breaker");

    const forbiddenMessage =
        forbiddenResults[
            Math.floor(Math.random() * forbiddenResults.length)
        ];
    textBox.textContent = forbiddenMessage;

    resultBox.classList.remove("open");
    void resultBox.offsetWidth;
    resultBox.classList.add("open");

    if(Math.random()<0.50){
        setTimeout(showLore,1000);
    }


    return;
}
    
    
    const randomResult =
        results[Math.floor(Math.random() * results.length)];

    textBox.textContent=randomResult;
    resultBox.classList.remove("open");
    void resultBox.offsetWidth;
    resultBox.classList.add("open");
    if(Math.random()<0.15){
        setTimeout(showLore,1000);
    }
}
function enterGrimoire(){
    document.getElementById("warningScreen").style.display="none";
    document.getElementById("mainApp").style.display="block";
}

function showLore(){
    unlockAchievement("Arcane Researcher");
    const randomLore=
    lorePages[
        Math.floor(Math.random()*lorePages.length)
    ];
    document.getElementById("loreText").textContent=
    randomLore;
    document.getElementById("lorePopup").style.display=
    "flex";
}
function closeLore(){
    document.getElementById("lorePopup").style.display=
    "none";
}
window.onload = function () {
    const list = document.getElementById("achievementList");
    if (list) {
        if (achievements.size > 0) {
            list.innerHTML = "";
            achievements.forEach(a => {
                const item = document.createElement("li");
                item.textContent = a;
                list.appendChild(item);
            });
        }
    }
    console.log("game loaded from local storage");
};
function updateUI(){
    const display=document.getElementById("brewDisplay");
    if(display){
        display.textContent=brewCount;
    }
}