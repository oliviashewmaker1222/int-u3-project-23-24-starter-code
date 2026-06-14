// Declare variables below to save the different divs of your story.
let usaButton = document.querySelector(".usa");

let mexicoButton = document.querySelector(".mexico");

let franceButton = document.querySelector(".france");

let argentinaButton = document.querySelector(".argentina");

let spainButton = document.querySelector(".spain");

let canadaButton = document.querySelector(".canada");

let portugalButton = document.querySelector(".portugal");

let englandButton = document.querySelector(".england");

let japanButton = document.querySelector(".japan");

let germanyButton = document.querySelector(".germany");

let teamNamePlaceholder = document.getElementById('team-name');

let opening = document.querySelector(".story-opening");

let transition = document.querySelector(".transition-scene");

let pitchButton = document.querySelector(".pitch");

let option = document.querySelector(".option-one");

let goal = document.querySelector(".shot-screen");
let pk = document.querySelector(".pk-screen");

let passButton = document.querySelector(".pass");
let dribbleButton = document.querySelector(".dribble");

let loser = document.querySelector(".loser-scene");
let win = document.querySelector(".winner-scene");

let topRButton = document.querySelector(".top-r");
let topLButton = document.querySelector(".top-l");
let botRButton = document.querySelector(".bot-r");
let botLButton = document.querySelector(".bot-l");

let topR = document.querySelector(".top-r-scene");
let topL = document.querySelector(".top-l-scene");
let botR = document.querySelector(".bot-r-scene");
let botL = document.querySelector(".bot-l-scene");

let celebrate1Button = document.querySelector(".top-r-scene button");
let celebrate2Button = document.querySelector(".bot-r-scene button");

let cont1Button = document.querySelector(".top-l-scene button");
let cont2Button = document.querySelector(".bot-l-scene button");

let topR2Button = document.querySelector(".top-r2");
let topL2Button = document.querySelector(".top-l2");
let botR2Button = document.querySelector(".bot-r2");
let botL2Button = document.querySelector(".bot-l2");

let topR2 = document.querySelector(".top-r-scene2");
let topL2 = document.querySelector(".top-l-scene2");
let botR2 = document.querySelector(".bot-r-scene2");
let botL2 = document.querySelector(".bot-l-scene2");

let celebrate3Button = document.querySelector(".top-l-scene2 button");
let celebrate4Button = document.querySelector(".bot-l-scene2 button");

let cont3Button = document.querySelector(".top-r-scene2 button");
let cont4Button = document.querySelector(".bot-r-scene2 button");

usaButton.addEventListener("click", function(){
    teamNamePlaceholder.innerText = "USA";
    transition.style.display = "block";
    opening.style.display = "none";
})

mexicoButton.addEventListener("click", function(){
    teamNamePlaceholder.innerText = "Mexico";
    transition.style.display = "block";
    opening.style.display = "none";
})

franceButton.addEventListener("click", function(){
    teamNamePlaceholder.innerText = "France";
    transition.style.display = "block";
    opening.style.display = "none";
})

argentinaButton.addEventListener("click", function(){
    teamNamePlaceholder.innerText = "Argentina";
    transition.style.display = "block";
    opening.style.display = "none";
})

spainButton.addEventListener("click", function(){
    teamNamePlaceholder.innerText = "Spain";
    transition.style.display = "block";
    opening.style.display = "none";
})

canadaButton.addEventListener("click", function(){
    teamNamePlaceholder.innerText = "Canada";
    transition.style.display = "block";
    opening.style.display = "none";
})

portugalButton.addEventListener("click", function(){
    teamNamePlaceholder.innerText = "Portugal";
    transition.style.display = "block";
    opening.style.display = "none";
})

englandButton.addEventListener("click", function(){
    teamNamePlaceholder.innerText = "England";
    transition.style.display = "block";
    opening.style.display = "none";
})

japanButton.addEventListener("click", function(){
    teamNamePlaceholder.innerText = "Japan";
    transition.style.display = "block";
    opening.style.display = "none";
})

germanyButton.addEventListener("click", function(){
    teamNamePlaceholder.innerText = "Germany";
    transition.style.display = "block";
    opening.style.display = "none";
})

pitchButton.addEventListener("click", function(){
    option.style.display ="block";
    transition.style.display ="none";
})

passButton.addEventListener("click", function(){
    goal.style.display = "block";
    option.style.display = "none";
})

dribbleButton.addEventListener("click", function(){
    loser.style.display = "block";
    option.style.display = "none";
})

topLButton.addEventListener("click", function(){
    topL.style.display = "block";
    goal.style.display = "none";
})

topRButton.addEventListener("click", function(){
    topR.style.display = "block";
    goal.style.display = "none";
})

botLButton.addEventListener("click", function(){
    botL.style.display = "block";
    goal.style.display = "none";
})

botRButton.addEventListener("click", function(){
    botR.style.display = "block";
    goal.style.display = "none";
})

celebrate1Button.addEventListener("click", function(){
    win.style.display = "block";
    topR.style.display = "none";
})

celebrate2Button.addEventListener("click", function(){
    win.style.display = "block";
    botR.style.display = "none";
})

cont1Button.addEventListener("click", function(){
    pk.style.display = "block";
    topL.style.display = "none";
})

cont2Button.addEventListener("click", function(){
    pk.style.display = "block";
    botL.style.display = "none";
})

topL2Button.addEventListener("click", function(){
    topL2.style.display = "block";
    pk.style.display = "none";
})

topR2Button.addEventListener("click", function(){
    topR2.style.display = "block";
    pk.style.display = "none";
})

botL2Button.addEventListener("click", function(){
    botL2.style.display = "block";
    pk.style.display = "none";
})

botR2Button.addEventListener("click", function(){
    botR2.style.display = "block";
    pk.style.display = "none";
})

celebrate3Button.addEventListener("click", function(){
    win.style.display = "block";
    topL2.style.display = "none";
})

celebrate4Button.addEventListener("click", function(){
    win.style.display = "block";
    botL2.style.display = "none";
})

cont3Button.addEventListener("click", function(){
    loser.style.display = "block";
    topR2.style.display = "none";
})

cont4Button.addEventListener("click", function(){
    loser.style.display = "block";
    botR2.style.display = "none";
})