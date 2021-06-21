			const ac=function(){document.body.style="display:none";window.open("//www.neopets.com/games/cheatmonster.phtml")}
			const s = Date.now();
			const l = Math.round(Math.random()*99); // 1000+ potato chance
			
			const p = Math.round(25+Math.random()*75); // initial potatoes
			m = 0;
			if (l == 13) {m = Math.round(1234+Math.random()*666)} // more potatoes according to l
			const k = p + m; // final potato amount
			
			b = document.createElement("img");
			c = document.createElement("img");
			c.src = "./potato_counter/potato4.gif";
			
			for (i = 0; i < k; i++) {
				b.src = "./potato_counter/potato" + Math.round(1+Math.random()*2) + ".gif";
				document.querySelector("#js").insertAdjacentHTML('afterend', b.outerHTML);
				a = Math.round(Math.random()*4);
				if (a==2) {document.querySelector("#js").insertAdjacentHTML('afterend', c.outerHTML);}
			} // generate potatoes
			
			document.querySelector("#js").style = "display:none";
			
			function go(){
				e = Date.now();
				
				if (e-s < 3e3 && document.querySelector("#num").value == k) {ac()}
				
				document.querySelector("#potato").style = 'display:none';
				document.querySelector("#inp").style = 'display:none';
				
				if (document.querySelector("#num").value == k) {
					if (k < 1234) {
						const np=e-s<3e4 ? 75 : 50;
						document.querySelector("#done").innerHTML = "You counted the potatoes in <strong>"+Math.round((e-s)/1000)+"</strong> seconds, so you win <strong>"+np+"</strong> Neopoints!<br><br><a href='.'>Play Again</a>";
						// You got it right in 19 seconds, which means you win 75 Neopoints!
						document.querySelector("#p_ka").src = "https://images.neopets.com/medieval/potato_congrats.gif";
						document.querySelector("#p_cap").innerText = "Yes! "+k+" potatoes!";
						
						/* Some logs would be sent to a server here to make sure the player isn't sus
						Also, reward final Neopoints here! */
					} else {
						ac();
					}
				} else {
					document.querySelector("#p_cap").innerText = "Incorrect! You should've guessed "+k+"!";
					document.querySelector("#done").innerHTML = "Sorry... that's wrong! The answer was "+k+".<br><br><a href=''>Play Again</a>";
				}
			}