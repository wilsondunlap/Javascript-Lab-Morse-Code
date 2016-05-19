var input = prompt("Please enter the code to be translated");
var result = encoder(input);
document.getElementById('result').innerHTML = result;
function encoder(inputString){
	var input = inputString;
	input = input.toLowerCase();
	var output = "";

	var key = {
		'a': ".-",
		'b': "-...",
		'c': "-.-.",
		'd': "-..",
		'e': ".",
		'f': "..-.",
		'g': "--.",
		'h': "....",
		'i': "..",
		'j': ".---",
		'k': "-.-.",
		'l': ".-..",
		'm': "--",
		'n': "-.",
		'o': "---",
		'p': ".--.",
		'q': "--.-",
		'r': ".-.",
		's': "...",
		't': "-",
		'u': "..-",
		'v': "...-",
		'w': ".--",
		'x': "-..-",
		'y': "-.--",
		'z': "--..",
		'1': ".----",
		'2': "..---",
		'3': "...--",
		'4': "....-",
		'5': ".....",
		'6': "-....",
		'7': "--...",
		'8': "---..",
		'9': "----.",
		'0': "-----",
		".": ".-.-",
		",": "--..--",
		"?": "..--..",
		"!": "..--.",
		":": "---...",
		"'": ".----.",
		"=": "-...-",
		" ": "|"
	};

	for(var i=0; i<input.length; i++){
		output += key[input[i]];
		output += " "
	};

	output = output.slice(0,output.length-1);

	return output
}