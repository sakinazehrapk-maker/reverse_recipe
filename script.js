const results=[
    "you accidentally created a medievel poison",
    "this mixture is wanted in 14 countries",
    "scientists have asked you to stop",
    "you have invented sadness soup",
    "a dragon refused to eat this:(",
    "this recipe immediatly voids your warranty",
    "you have recreated pirrate fuel",
    "the local wizard is concerned",
    "congratulations! youve made haunted yougurt",
    "this dish was banned by a  goat"
];

function generateResult(){
    const ingrefients=
    document.getElementById("ingredients").value;
    if(ingredients.trim()===""){
        alert("enter your ingredients");
        return;
    }
    const random=
    results[Math.floor(Math.random()*results.length)];
    document.getElementById("result").textContent=
    random;
}


   