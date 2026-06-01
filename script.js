console.log("script loaded");

let brewCount = 0;

const achievements = new Set();
function unlockAchievement(name){
    if(achievements.has(name)){
        return;
    }
    achievements.add(name);
    const list =
        document.getElementById("achievementList");
    if(list.children[0]?.textContent === "None Yet..."){
        list.innerHTML = "";
    }
    const item = document.createElement("li");
    item.textContent = name;
    list.appendChild(item);
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

function generateResult() {
    brewCount++;
    const ingredientBox = document.getElementById("ingredients");
    const ingredients =
    ingredientBox.value.toLowerCase();
    const forbiddenCombo =
    ingredients.includes("milk") &&
    ingredients.includes("ketchup") &&
    ingredients.includes("banana");
    if(forbiddenCombo){

    document.body.classList.add("forbidden-mode");

    const forbiddenMessage =
        forbiddenResults[
            Math.floor(Math.random() * forbiddenResults.length)
        ];

    const textBox =
        document.querySelector(".scroll-text");

    textBox.textContent = forbiddenMessage;

    resultBox.classList.remove("open");
    void resultBox.offsetWidth;
    resultBox.classList.add("open");
    const loreChance = Math.random();
    if(loreChance<0.50){
        setTimeout(showLore,1000);
    }


    return;
}
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
const lorePages =[
    "PAGE:17 never mix moon ilk with dragon ketchup,the kingdom is still recovering",
    "PAGE 42:wizard Gary attempted to season soup with pure magic.we do not speak of Gary",
    "PAGE 88: the great banana incident lasted three winters",
    "PAGE 103:if your ccauldron begins singing, evacuate immediately",
    "PAGE 144: the council banned glowing mayonnaise after the incident",
    "PAGE 207:a potion containing seven cheese opened a portal to accounting"
]
function showLore(){
    const randomLore=
    lorePages[
        Math.floor(Math.random()*lorePages.length)
    ];
    document.getElementById("loreText").textCount=
    randomLore;
    document.getElementById("lorePopup").style.display=
    "flex;"
}
function closeLore(){
    document.getElementById("lorePopup").style.display=
    "none";
}

function closeLore(){

    document.getElementById("lorePopup").style.display =
        "none";
}