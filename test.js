function sayHello(){
    document.getElementById("final").innerHTML="HELLO";
}
function abra(){
    var msg = document.getElementById("content").innerHTML;
    msg+= " abra";
    document.getElementById("content").innerHTML = msg;
    shaida.hurt();
}
function kadabra(){
    var msg = document.getElementById("content").innerHTML;
    msg+= " kadabra";
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
var shaida = new elemental("Shaida", "Water", {"Waterslide": 65, "Waterfall":20}, 160);
// contructed two, now i need their methods prototypes

elemental.prototype.report = function(){
    var m = ""
    for(x in this.moves){
        m+=x;
        m+=" "
    }
    var full_report = "The name is: " + this.name + " and the type is: " + this.type + " and the moves are: " + m + "and the health is: " + this.health;
    
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


electross.report();
shaida.report();

// function reporter(){
//     function elemental(name, type, moves){
//         this.name = name;
//         this.type = type;
//         this.moves = moves;
//     }
    
//     var electross = new elemental("Electroman", "Electric", {"Thunderbolt": 50});
//     var shaida = new elemental("Electroman", "Electric", {"Waterslide": 65});
//     // contructed two, now i need their methods prototypes
    
//     elemental.prototype.report = function(){
//         console.log("prototyping");
//         var m = "hello"
//         m+= this.name;
//         m+= this.type;
//         m+= this.moves;
//         document.getElementById("content").innerHTML= m;
//         return this;
//     }
    
//     electross.report();
// }

// electricity, psymon, girl, shape of water, infernando, 