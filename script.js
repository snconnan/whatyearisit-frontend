fetch('https://whatyearisit-backend-tdqqltkq1-snconnan.vercel.app/year')
	.then(response => response.json())
	.then(data => {
		if (data) {
            document.querySelector('#year').textContent = data.year;
		//		document.querySelector('#year').innerHTML += `
		//		<p id="year">Voyageur spatiaux-temporels, découvrez en quelle année vous êtes ! Vous voici en : ${data.year}</p>
		//	`;
			}
		}
	);