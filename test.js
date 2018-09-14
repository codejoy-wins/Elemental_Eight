
function kadabra(){
    var msg = document.getElementById("content").innerHTML;
    msg+= "Shaida is under attack";
    document.getElementById("content").innerHTML = msg;
    shaida.hurt();
}
function abra(){
    var msg = document.getElementById("content").innerHTML;
    msg+= "Electross is under attack";
    document.getElementById("content").innerHTML = msg;
    electross.hurt();
}
// contructor function.  can I create a pokemon based off of user input online?
// can I battle with the created pokemons?
// maybe I'll create a couple sample pokemon to start out and then do creation later.

function elemental(name, type, moves, health){
    this.name = name;
    this.type = type;
    this.moves = moves;
    this.health = health;
}

var electross = new elemental("Electroman", "Electric", {"Thunderbolt": 50, "Thunderball":10}, 100);
// var shaida = new elemental("Shaida", "Water", {"Waterslide": 65, "Waterfall":20, "Ice Cannon":100}, 160); why would ice cannon break?
var shaida = new elemental("Shaide", "Water", {"Waterslide": 65, "Waterfall":20}, 160);

// contructed two, now i need their methods prototypes

elemental.prototype.report = function(){
    var m = ""
    for(x in this.moves){
        m+=x;
        m+=" "
    }
    var full_report = this.name + " of type: " + this.type + " and the moves are: " + m + "and the health is: " + this.health;
    
    console.log(this.moves);
    console.log(m);
    console.log(full_report);

    if(this.health<= 0){
        full_report = this.name + " must rest";
    }

    document.getElementById("content").innerHTML+= "<p>"+full_report+"</p>";
    return this;
}

elemental.prototype.hurt = function(){
    this.health -= 5;
    this.report();
    return this;
}
elemental.prototype.attack = function(enemy, move, amount){
    var poison = amount;
    console.log("enemy is: "+ enemy.name + " and move used is: "+ move + " and the poison done is " + poison);
    enemy.health -= amount;
    document.getElementById("content").innerHTML+= enemy.name + " was hit by " + move;
    return this;
}
electross.report();
shaida.report();

function sayHello(){
    document.getElementById("final").innerHTML="HELLO";
}
document.getElementById("moveset").innerHTML+= "Shaide's moves: ";

for(z in shaida.moves){
    document.getElementById("moveset").innerHTML+= "<button onclick=damage("+z+") id = "+z+" value ="+z+">"+z+"</button>";
}
document.getElementById("moveset").innerHTML+= " Electross's moves: ";

for(x in electross.moves){
    document.getElementById("moveset").innerHTML+= "<button onclick=damage2("+x+") id = "+x+" value ="+x+">"+x+"</button>";
}

function damage(para){
    if(shaida.health<=0){
        shaida.report();
        return;
    }
    console.log("the damage is done to electross");
    console.log(para);
    var beast = para.value;
    console.log(beast, "beast mode");
    var amount = shaida.moves[beast];
    shaida.attack(electross,beast,amount);
    console.log(amount, "godforsaken amount");
    electross.report();
}
function damage2(para){
    if(electross.health<=0){
        electross.report();
        return;
    }
    console.log("the damage is done to shaida");
    console.log(para);
    var beast = para.value;
    console.log(beast, "beast mode");
    var amount = electross.moves[beast];
    electross.attack(shaida,beast,amount);
    console.log(amount, "godforsaken amount");
    shaida.report();
}

// console.log(shaida.moves["Waterslide"]);