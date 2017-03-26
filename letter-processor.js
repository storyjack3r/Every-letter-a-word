
function convertToNonesense(){

var s = document.getElementById("oldText").value;
var sConverted="";

for (var i = 0; i < s.length; i++) {
	var thisLetter = s.charAt(i);

	// if(isLetter(thisLetter)==true){
// 	if (thisLetter == thisLetter.toUpperCase()) {
// 	 	sConverted+= "uppercase ";
// 	 	thisLetter.toLowerCase();
// 	}
// }

if (sConverted!="") {
	sConverted+= " ";
}

switch (thisLetter) {
    case "a":
        phoneticLet = "ay";
        break;
    case "b":
        phoneticLet = "bee";
        break;
    case "c":
        phoneticLet = "cee";
        break;
    case "d":
        phoneticLet = "dee";
        break;
    case "e":
        phoneticLet = "ee";
        break;
    case "f":
        phoneticLet = "ef";
        break;
    case "g":
        phoneticLet = "gee";
        break;
    case "h":
        phoneticLet = "aitch";
        break;
    case "i":
        phoneticLet = "iy";
        break;
    case "j":
        phoneticLet = "jay";
        break;
    case "k":
        phoneticLet = "kay";
        break;
    case "l":
        phoneticLet = "el";
        break;
    case "m":
        phoneticLet = "em";
    case "n":
        phoneticLet = "en";
        break;
    case "o":
        phoneticLet = "ow";
        break;
    case "p":
        phoneticLet = "pee";
        break;
    case "q":
        phoneticLet = "cue";
        break;
    case "r":
        phoneticLet = "ar";
        break;
    case "s":
        phoneticLet = "ess";
        break;
    case "t":
        phoneticLet = "tee";
        break;
    case "u":
        phoneticLet = "yoo";
        break;
    case "v":
        phoneticLet = "vee";
        break;
    case "w":
        phoneticLet = "double-u";
        break;
    case "x":
        phoneticLet = "ex";
        break;
    case "y":
        phoneticLet = "wye";
        break;
    case "z":
        phoneticLet = "zed";
        break;
    case " ":
        phoneticLet = "<br>";
        break;
    }

sConverted+= phoneticLet;

}
document.getElementById("newText").innerHTML = sConverted;
console.log(sConverted);

}


// function isLetter(c) {
//   return c.toLowerCase() != c.toUpperCase();
// }
