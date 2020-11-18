let bRandom;
let sAlcohol;
let sGlass;
let bSubmit;

let drinkName;
let measure1;
let measure2;
let measure3;
let measure4;
let measure5;
let measure6;
let measure7;
let ingredient1;
let ingredient2;
let ingredient3;
let ingredient4;
let ingredient5;
let ingredient6;
let ingredient7;
let makeDrink = [];
let drinkImage;

let urlFilter = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?";
let urlID = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?";

function setup() {
    createCanvas(960, 600);
    
    leftX = width/10;
    rightX = width/10*6;
    
    bRandom = createButton('GET A RANDOM DRINK!');
    bRandom.mousePressed(randomCocktail);
    bRandom.position(leftX-75, 360);
    bRandom.size(150, 25);
    bRandom.style('backgroundColor', 'black');
    bRandom.style('color', 'white');
    bRandom.style('border', 'none');
    bRandom.style('fontSize', '10px');
    bRandom.style('fontFamily', 'Roboto Mono');
    
    sAlcohol = createSelect();
    sAlcohol.position(leftX-75, 445);
    sAlcohol.size(150, 25);
    sAlcohol.option('Pick Your Alcohol');
    sAlcohol.option('Amaretto');
    sAlcohol.option('Bourbon');
    sAlcohol.option('Brandy');
    sAlcohol.option('Champagne');
    sAlcohol.option('Cognac');
    sAlcohol.option('Gin');
    sAlcohol.option('Rum');
    sAlcohol.option('Scotch');
    sAlcohol.option('Tequila');
    sAlcohol.option('Vodka');
    sAlcohol.option('Whiskey');
    sAlcohol.style('backgroundColor', 'black');
    sAlcohol.style('color', 'white');
    sAlcohol.style('border', 'none');
    sAlcohol.style('fontSize', '10px');
    sAlcohol.style('fontFamily', 'Roboto Mono');
    
    sGlass = createSelect();
    sGlass.position(leftX-75, 480);
    sGlass.size(150, 25);
    sGlass.option('Pick Your Glass');
    sGlass.option('Balloon_Glass');
    sGlass.option('Brandy_Snifter');
    sGlass.option('Champagne_Flute');
    sGlass.option('Cocktail_Glass');
    sGlass.option('Collins_Glass');
    sGlass.option('Coupe_Glass');
    sGlass.option('Highball_Glass');
    sGlass.option('Margarita_Glass');
    sGlass.option('Martini_Glass');
    sGlass.option('Old-Fashioned_Glass');
    sGlass.option('Punch_Bowl');
    sGlass.style('backgroundColor', 'black');
    sGlass.style('color', 'white');
    sGlass.style('border', 'none');
    sGlass.style('fontSize', '10px');
    sGlass.style('fontFamily', 'Roboto Mono');
    
    bSubmit = createButton('FIND MY DRINK!');
    bSubmit.mousePressed(findDrink);
    bSubmit.position(leftX-75, 535);
    bSubmit.size(150, 25);
    bSubmit.style('backgroundColor', 'black');
    bSubmit.style('color', 'white');
    bSubmit.style('border', 'none');
    bSubmit.style('fontSize', '10px');
    bSubmit.style('fontFamily', 'Roboto Mono');
}

function randomCocktail() {
    console.log("Getting your Cocktail...");
    
    fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
    .then(response => response.json())
    .then(data => showResult(data));
}

function findDrink() {
    console.log("Finding your Drink...")
    
    let g_picked = false;
    let i_picked = false;
    
    let alcohol = sAlcohol.value();
    let glass = sGlass.value();
    
    if (alcohol == 'Amaretto') {
        alcohol = "Amaretto";
        i_picked = true;
    } else if (alcohol == 'Bourbon') {
        alcohol = "Bourbon";
        i_picked = true;
    } else if (alcohol == 'Brandy') {
        alcohol = "Brandy";
        i_picked = true;
    } else if (alcohol == 'Champagne') {
        alcohol = "Champagne";
        i_picked = true;
    } else if (alcohol == 'Cognac') {
        alcohol = "Cognac";
        i_picked = true;
    } else if (alcohol == 'Gin') {
        alcohol = "Gin";
        i_picked = true;
    } else if (alcohol == 'Rum') {
        alcohol = "Rum";
        i_picked = true;
    } else if (alcohol == 'Scotch') {
        alcohol = "Scotch";
        i_picked = true;
    } else if (alcohol == 'Tequila') {
        alcohol = "Tequila";
        i_picked = true;
    } else if (alcohol == 'Vodka') {
        alcohol = "Vodka";
        i_picked = true;
    } else if (alcohol == 'Whiskey') {
        alcohol = "Whiskey";
        i_picked = true;
    }
    
    if (glass == 'Balloon_Glass') {
        glass = "Balloon_Glass";
        g_picked = true;
    } else if (glass == 'Brandy_Snifter') {
        glass = "Brandy_Snifter";
        g_picked = true;
    } else if (glass == 'Champagne_Flute') {
        glass = "Champagne_Flute";
        g_picked = true;
    } else if (glass == 'Cocktail_Glass') {
        glass = "Cocktail_Glass";
        g_picked = true;
    } else if (glass == 'Collins_Glass') {
        glass = "Collins_Glass";
        g_picked = true;
    } else if (glass == 'Coupe_Glass') {
        glass = "Coupe_Glass";
        g_picked = true;
    } else if (glass == 'Highball_Glass') {
        glass = "Highball_Glass";
        g_picked = true;
    } else if (glass == 'Margarita_Glass') {
        glass = "Margarita_Glass";
        g_picked = true;
    } else if (glass == 'Martini_Glass') {
        glass = "Martini_Glass";
        g_picked = true;
    } else if (glass == 'Old-Fashioned_Glass') {
        glass = "Old-Fashioned_Glass";
        g_picked = true;
    } else if (glass == 'Punch_Bowl') {
        glass = "Punch_Bowl";
        g_picked = true;
    }
    
    if(g_picked && i_picked) {
        fetch(urlFilter + "i=" + alcohol + "&g=" + glass)
    .then(response => response.json())
    .then(data => showResult2(data));  
    }
    else if (g_picked == true && i_picked == false) {
        fetch(urlFilter + "g=" + glass)
    .then(response => response.json())
    .then(data => showResult2(data)); 
    }
    else if (g_picked == false && i_picked == true) {
        fetch(urlFilter + "i=" + alcohol)
    .then(response => response.json())
    .then(data => showResult2(data)); 
    }
    else {
        console.log("Please pick a filter...")
    }    
}

function draw() {
    background(10,45,25);
    
    //draw layout
    fill(60,5,5);
    rect(0, 80, leftX*2, height-80);
    fill(0);
    rect(leftX*2, 80, rightX+240, height-80);
    
    stroke(255);
    strokeWeight(1);
    line(10,320,width/5-10,320);
    strokeWeight(0.5);
    line(10,415,leftX-15,415);
    line(leftX+15,415,leftX*2-10,415);
    
    //draw text for random cocktail
    noStroke();
    fill(255);
    textFont('Roboto Mono');
    textSize(20);
    textStyle(ITALIC);
    textAlign(CENTER, CENTER);
    text('DRINK GENERATOR', width/2, 40);
    textSize(7.5);
    textStyle(NORMAL);
    text('OR', leftX, 415);
    textSize(10);
    text('NAME OF DRINK:', leftX, 120);
    text(drinkName, leftX, 140);
    text('INGREDIENTS:', rightX, 120);
    textAlign(RIGHT);
    text(measure1, rightX-10, 140);
    text(measure2, rightX-10, 160);
    text(measure3, rightX-10, 180);
    text(measure4, rightX-10, 200);
    text(measure5, rightX-10, 220);
    text(measure6, rightX-10, 240);
    text(measure7, rightX-10, 260);
    textAlign(LEFT);
    text(ingredient1, rightX+10, 140);
    text(ingredient2, rightX+10, 160);
    text(ingredient3, rightX+10, 180);
    text(ingredient4, rightX+10, 200);
    text(ingredient5, rightX+10, 220);
    text(ingredient6, rightX+10, 240);
    text(ingredient7, rightX+10, 260);
    textAlign(CENTER, CENTER);
    text('LETS MAKE IT:', rightX, height/2+20);
    
    let add = 20;
    
    for(let x of makeDrink) {
        text(x, rightX, height/2+20+add);
        add += 20;
    }
    
    if (drinkImage) {
        image(drinkImage, leftX-60, 160, 120, 120);
    }
}

function showResult(data) {
    drinkName = data.drinks[0].strDrink;
    getIngredients(data);
    getMeasurements(data);
    makeDrink = split(data.drinks[0].strInstructions, '.');
    loadImage(data.drinks[0].strDrinkThumb, img => {
        drinkImage = img;
    });
}

function showResult2(data) {
    let randomArray = floor(random(0,data.drinks.length));
        
    drinkName = data.drinks[randomArray].strDrink;
    loadImage(data.drinks[randomArray].strDrinkThumb, img => {
        drinkImage = img;
    });
    
    idDrink = data.drinks[randomArray].idDrink;
    fetch(urlID + "i=" + idDrink)
    .then(response => response.json())
    .then(data => showResult3(data));    
}

function showResult3(data) {
    let randomArray = random(floor(0,data.drinks.length));
    
    //getting recipe
    makeDrink = split(data.drinks[randomArray].strInstructions, '.');
    
    //getting ingredients
    ingredient1 = data.drinks[randomArray].strIngredient1;
    ingredient2 = data.drinks[randomArray].strIngredient2;
    
    let checkI3 = data.drinks[randomArray].strIngredient3;
    let checkI4 = data.drinks[randomArray].strIngredient4;
    let checkI5 = data.drinks[randomArray].strIngredient5;
    let checkI6 = data.drinks[randomArray].strIngredient6;
    let checkI7 = data.drinks[randomArray].strIngredient7;
    
    if (checkI3 != null) {
        ingredient3 = checkI3;
    }
    if (checkI4 != null) {
        ingredient4 = checkI4;
    } 
    if (checkI5 != null) {
        ingredient5 = checkI5;
    }
    if (checkI6 != null) {
        ingredient6 = checkI6;
    }
    if (checkI7 != null) {
        ingredient7 = checkI7;
    }
    
    //getting measurements
    let checkM1 = data.drinks[randomArray].strMeasure1;
    let checkM2 = data.drinks[randomArray].strMeasure2;
    let checkM3 = data.drinks[randomArray].strMeasure3;
    let checkM4 = data.drinks[randomArray].strMeasure4;
    let checkM5 = data.drinks[randomArray].strMeasure5;
    let checkM6 = data.drinks[randomArray].strMeasure6;
    let checkM7 = data.drinks[randomArray].strMeasure7;
    
    if (checkM1 != null) {
        measure1 = checkM1;
    }
    if (checkM2 != null) {
        measure2 = checkM2;
    }
    if (checkM3 != null) {
        measure3 = checkM3;
    }
    if (checkM4 != null) {
        measure4 = checkM4;
    }
    if (checkM5 != null) {
        measure5 = checkM5;
    }
    if (checkM6 != null) {
        measure6 = checkM6;
    }
    if (checkM7 != null) {
        measure7 = checkM7;
    }
}

function getIngredients(data) {    
    ingredient1 = data.drinks[0].strIngredient1;
    ingredient2 = data.drinks[0].strIngredient2;
    
    let checkI3 = data.drinks[0].strIngredient3;
    let checkI4 = data.drinks[0].strIngredient4;
    let checkI5 = data.drinks[0].strIngredient5;
    let checkI6 = data.drinks[0].strIngredient6;
    let checkI7 = data.drinks[0].strIngredient7;
    
    if (checkI3 != null) {
        ingredient3 = checkI3;
    }
    if (checkI4 != null) {
        ingredient4 = checkI4;
    } 
    if (checkI5 != null) {
        ingredient5 = checkI5;
    }
    if (checkI6 != null) {
        ingredient6 = checkI6;
    }
    if (checkI7 != null) {
        ingredient7 = checkI7;
    }
}

function getMeasurements(data) {
    let checkM1 = data.drinks[0].strMeasure1;
    let checkM2 = data.drinks[0].strMeasure2;
    let checkM3 = data.drinks[0].strMeasure3;
    let checkM4 = data.drinks[0].strMeasure4;
    let checkM5 = data.drinks[0].strMeasure5;
    let checkM6 = data.drinks[0].strMeasure6;
    let checkM7 = data.drinks[0].strMeasure7;
    
    if (checkM1 != null) {
        measure1 = checkM1;
    }
    if (checkM2 != null) {
        measure2 = checkM2;
    }
    if (checkM3 != null) {
        measure3 = checkM3;
    }
    if (checkM4 != null) {
        measure4 = checkM4;
    }
    if (checkM5 != null) {
        measure5 = checkM5;
    }
    if (checkM6 != null) {
        measure6 = checkM6;
    }
    if (checkM7 != null) {
        measure7 = checkM7;
    }
}