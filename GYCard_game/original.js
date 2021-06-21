c = ["I am psychic!","I see... I see a city in the clouds...","I can see the future!","I can sense your thoughts...","This game's too easy!","Fear me, the master of all things psychic!"];
w = ["focus... fffffooocccuusss...","do or do not, there is no try.","oh dear... perhaps a bit more training is in order!","maybe your pet is not concentrating enough...","concentrate harder next time!","it is back to psychic school for [pet]."];
o = ["wavy lines.'","square symbol.'","circle card.'","triangle.'","X!'","plus sign.'"]
const n = 7*Math.random()|0;
//For Bruce pets: c.push('What do points make? Prizes!','Higher or lower than a 7?','Welcome to the Generation Game!','Nice to see you... to see you nice.','Forsyth's the name, humour's the game!');

document.querySelector('#g_cap').innerText = c[c.length*Math.random()|0]
function p(i) {
	if (i==n) {
		
	} else {
		document.querySelector('#l').innerHTML = "<strong>Voxascorch</strong> says <em>'You are thinking of the "+o[i]+"</em><br /><br /><strong>Wrong!</strong>... <span id='a'>do or do not, there is no try.</span><br /><br /><strong><a href='.'>Play Again!</a></strong>";
		document.querySelector('#a').innerText = w[n];
	}
	
	document.querySelector('#cards').style = "display: none";
}