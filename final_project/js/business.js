const requestURL = 'yucaipa.json';
fetch(requestURL)
.then(function (response) {
    return response.json();
    })
.then(function (jsonObject) {
        console.table(jsonObject);
        const business = jsonObject['towns'];
        for (let i = 0; i < business.length; i++ ) {
            if (i==0 || i==2 || i==6){
                let card = document.createElement('div');

                let info = document.createElement('section');
                let photo = document.createElement('figure');

                let businessName = document.createElement('h2');
                let motto = document.createElement('h3');
                let founded = document.createElement('p');
                let population = document.createElement('p');
                let rain = document.createElement('p');
                let image = document.createElement('img');

                businessName.textContent = business[i].title;
                motto.textContent = business[i].motto;
                founded.textContent = "Year Founded: " + business[i].yearFounded;
                population.textContent = "Population: " + business[i].currentPopulation + " souls";
                rain.textContent = "Annual Rain Fall: " + business[i].averageRainfall + " in.";
                image.setAttribute('src', 'images/home/'+business[i].photo);
                image.setAttribute('alt', business[i].name + " Hometown");

                photo.appendChild(image);
                card.appendChild(photo);

                info.appendChild(businessName);
                info.appendChild(motto);
                info.appendChild(founded);
                info.appendChild(population);
                info.appendChild(rain);
                card.appendChild(info);

                document.getElementById('card_info').appendChild(card);
            }
        }
    });