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