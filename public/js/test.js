var coin = 0;
var xp = 0;
var hp = 100;
var level = 1;
var derek = 0;
var mike = 0;

var imageSet = 0;
var imageDir = "";
var imageSetDir = "";

var ninaCookies = 0;
var levelMikePet = 1;
var happyMikePet = 0;
var hpMikePet = 100;



// function swapImageSet(){


// 	switch (imageSet){
// 		case 0;

// 			break;
// 		case 1;

// 			break;
// 		case 2;

// 			break;
// 		case 3;

// 			break;
// 		case 4;

// 			break;
// 		case 5;

// 			break;
// 		case 6;

// 			break;
// 		case 7;

// 			break;
// 		case 8;

// 			break;
// 		case 9;

// 			break;
// 		default;


// 	}

// //http://24.media.tumblr.com/tumblr_mdcyicRSCh1r84nrbo2_400.gif
// //https://www.youtube.com/watch?v=4X7BxUXWRqo

// }
// var countq = 0;

// for(int i = 0; i% == 0 ; i = i +.00001){

// 	countq = countq + 1;

// 	if(countq == 10000){
// 	levelMikePet = levelMikePet - 1;
// 	document.getElementById("levelMikePet").innerHTML = "Level: " + levelMikePet;
// 	countq = 0;
// }

// }
var countq123 = 0;

//alert("line77");

setInterval(submike(),100);

//alert("thomas")


for(var countmyface;countmyface < 1000000;countmyface++){

alert("countmyface");

	countq123 = countq123 + 1;
	if(countq123 == 100){

		submike();
		countq123 = 0;
	}
}

// Adapted from Dan Shiffman, natureofcode.com

angleMode = "radians";

var angle = 0;
var aVelocity = 0.03;

var draw = function() {
    background(255);
    
    var amplitude = 100;
    var x = amplitude * sin(angle);
    angle += aVelocity;
    
    resetMatrix();
    translate(width/2, height/2);
    
    stroke(0, 0, 0);
    fill(175, 175, 175);
    line(0, 0, x, 0);
    ellipse(x, 0, 20, 20);
};


function submike(){

	hpMikePet = hpMikePet - 10;	
	document.getElementById("hpMikePet").style.width = hpMikePet + "%";
	document.getElementById("hpMikePet").innerHTML = hpMikePet + "/100";
}

function countdown(){

	hpMikePet = hpMikePet - 1;
	document.getElementById("hpMikePet").style.width = hpMikePet + "%";
	document.getElementById("hpMikePet").innerHTML = hpMikePet + "/100";



}

function feedMikePet(){

	submike();

	ninaCookies = ninaCookies - 5;
	happyMikePet = happyMikePet + 10;
	document.getElementById("NinaCookie").innerHTML = "Nina Cookies: " + ninaCookies;
	//alert("YOU JUST FED MIKE: " + happyMikePet /10);

	//setTimeout(feedMikePet(),1000);

	if (happyMikePet == 100){
		hpMikePet = 100;
		happyMikePet = 0;
		levelMikePet = levelMikePet + 1;

	}

	document.getElementById("levelMikePet").innerHTML = "Level: " +levelMikePet;
	document.getElementById("happyBarMikePet").style.width = happyMikePet + "%";
	document.getElementById("happyBarMikePet").innerHTML = happyMikePet + "/100";
	document.getElementById("hpMikePet").style.width = hpMikePet + "%";
	document.getElementById("hpMikePet").innerHTML = hpMikePet + "/100";

}


function Level(){
	document.getElementById("level").innerHTML = "Level: " + level;
}
function buyDerekPet(){

	if(coin >= 5 ){
		derek = derek + 1
		coin = coin - 5

	}
	document.getElementById("derek").innerHTML = "Derek: " + derek;
	document.getElementById("coin").innerHTML = "Coins: " + coin;
}

function buyMikePet(){

	if(coin >= 2 ){
		mike = mike + 1
		coin = coin - 2

	}
	document.getElementById("mike").innerHTML = "Mike: " + mike;
	document.getElementById("coin").innerHTML = "Coins: " + coin;
}

function addCoin() {
coin = coin + 1
			
var image = document.getElementById("lolhi");

if (image.src.match("img/item/food/food2.png")){

	image.src = "img/avatar/avatar1.png";
}else{

	image.src = "img/item/food/food2.png";
}

document.getElementById("coin").innerHTML = "Coins: " + coin;



}
function addXp() {
xp = xp + 10
if(xp <= 100) {
	document.getElementById("xpbar").innerHTML = xp + "/100";
	document.getElementById("xpbar").style.width = xp+"%";
	}
if(xp == 100){
	xp = 0
	document.getElementById("xpbar").innerHTML = xp + "/100";
	document.getElementById("xpbar").style.width = xp+"%";
	if(hp < 100)
	{
	hp = 100
	document.getElementById("hpbar").style.width = hp+"%";
	document.getElementById("hpbar").innerHTML = hp + "/100";
	}
	level = level + 1
	document.getElementById("level").innerHTML = "Level: " + level;
}
if(xp == 0){
	document.getElementById("xpbar").innerHTML = "";
}
}


function subHp() {
hp = hp - 10
if(hp > 0) {
	document.getElementById("hpbar").innerHTML = hp + "/100";
	document.getElementById("hpbar").style.width = hp+"%";
	}
if(hp == 0) {
	document.getElementById("hpbar").innerHTML = "";
	document.getElementById("hpbar").style.width = hp+"%";
	alert('You are the dead! D: Your level and coins has been reset');
	window.setTimeout(reset,1000);
}
}

function reset(){
window.location.reload();
}