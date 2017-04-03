var numbConv=1;

// function multipleConvertions(){
// 	for (i = 0; i < numbConv; i++) { 
// 		convertToPhonetics();   
// 	}
// 	numbConv++;
// 	console.log(numbConv);
// }
var titleText;

function convertToPhonetics(){

var s = document.getElementById("oldText").value;
var sConverted="";
if (s.length>100000){
	return;
}

console.log(s.length);

for (var i = 0; i < s.length; i++) {
	var thisLetter = s.charAt(i);

if (sConverted!="") {
	sConverted+= " ";
}
	if(isLetter(thisLetter)==true){
	if (thisLetter == thisLetter.toUpperCase()) {
	 	sConverted+= "uppercase ";
	 	thisLetter=thisLetter.toLowerCase();
	}
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
        break;
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
    	phoneticLet = "(space)";
        // phoneticLet = "<br>";
        break;
    case ",":
        phoneticLet = "comma";
        break;
    case ".":
        phoneticLet = "full-stop";
        break;
	case ";":
        phoneticLet = "semi-colon";
        break;
	case ":":
        phoneticLet = "colon";
        break;
	case "-":
        phoneticLet = "hyphen";
        break;
	case "(":
        phoneticLet = "left-bracket";
        break;
	case ")":
        phoneticLet = "right-bracket";
        break;
    case "?":
        phoneticLet = "question-mark";
        break;
    case "!":
        phoneticLet = "exclamation-mark";
        break;
        case "'":
        phoneticLet = "apostrophe";
        break;
    default:
    phoneticLet = thisLetter;
    }

sConverted+= phoneticLet;

}
resizeText(-1);
document.getElementById("newText").innerHTML = sConverted;
document.getElementById("oldText").value = sConverted;
// console.log(sConverted);

}


function convertFromPhonetics(){

var s = document.getElementById("oldText").value;
var sConverted="";
s=s.split(" ");

for (var i = 0; i < s.length; i++) {
	var thisWord = s[i];
	// if (thisWord.length>1)... to resolve



switch (thisWord) {
    case "ay":
        phoneticLet = "a";
        break;
    case "bee":
        phoneticLet = "b";
        break;
    case "cee":
        phoneticLet = "c";
        break;
    case "dee":
        phoneticLet = "d";
        break;
    case "ee":
        phoneticLet = "e";
        break;
    case "ef":
        phoneticLet = "f";
        break;
    case "gee":
        phoneticLet = "g";
        break;
    case "aitch":
        phoneticLet = "h";
        break;
    case "iy":
        phoneticLet = "i";
        break;
    case "jay":
        phoneticLet = "j";
        break;
    case "kay":
        phoneticLet = "k";
        break;
    case "el":
        phoneticLet = "l";
        break;
    case "em":
        phoneticLet = "m";
        break;
    case "en":
        phoneticLet = "n";
        break;
    case "ow":
        phoneticLet = "o";
        break;
    case "pee":
        phoneticLet = "p";
        break;
    case "cue":
        phoneticLet = "q";
        break;
    case "ar":
        phoneticLet = "r";
        break;
    case "ess":
        phoneticLet = "s";
        break;
    case "tee":
        phoneticLet = "t";
        break;
    case "yoo":
        phoneticLet = "u";
        break;
    case "vee":
        phoneticLet = "v";
        break;
    case "double-u":
        phoneticLet = "w";
        break;
    case "ex":
        phoneticLet = "x";
        break;
    case "wye":
        phoneticLet = "y";
        break;
    case "zed":
        phoneticLet = "z";
        break;
    case "(space)":
    	phoneticLet = " ";
    case "(space(":
    	phoneticLet = " ";
        // phoneticLet = "<br>";
        break;
    case "comma":
        phoneticLet = ",";
        break;
    case "full-stop":
        phoneticLet = ".";
        break;
	case "semi-colon":
        phoneticLet = ";";
        break;
	case "colon":
        phoneticLet = ":";
        break;
	case "hyphen":
        phoneticLet = "-";
        break;
	case "left-bracket":
        phoneticLet = "(";
        break;
        case "right-bracket":
        phoneticLet = ")";
        break;
	case "uppercase":
        phoneticLet = "";
        break;
    case "question-mark":
        phoneticLet = "?";
        break;
        case "exclamation-mark":
        phoneticLet = "!";
        break;
        case "apostrophe":
        phoneticLet = "'";
        break;
    default:
    phoneticLet = thisWord;
    }

sConverted+= phoneticLet;

}
document.getElementById("newText").innerHTML = sConverted;
document.getElementById("oldText").value = sConverted;
// console.log(sConverted);
resizeText(1);
}





function isLetter(c) {
  return c.toLowerCase() != c.toUpperCase();
}

function resizeText(factor){

fontSize=parseFloat(document.getElementById("newText").style.fontSize);
shrinkBy = fontSize*(0.2*factor);
console.log(shrinkBy);
document.getElementById("newText").style.fontSize = fontSize + shrinkBy + "em";

}
