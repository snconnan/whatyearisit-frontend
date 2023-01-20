fetch('https://whatyearisit-backend-omega.vercel.app/year')
	.then(response => response.json())
	.then(data => {
		if (data) {
            document.querySelector('#year').textContent = 'Voyageur spatiaux-temporels, découvrez en quelle année vous êtes !' + 'Vous voici en' + data;
				//document.querySelector('#year').innerHTML += `
				//<p id="year">${data.year}</p>
			//`;
			}
		}
	);