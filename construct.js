function constructy (stuff){
    this.stuff = stuff;
}

var con = new constructy("idk, man");

constructy.prototype.report = function(){
    console.log("huh?");
    return this;
}

con.report();