const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(requestURL)
.then(function (response) {
    return response.json();
    })
.then(function (jsonObject) {
        console.table(jsonObject);
        const towns = jsonObject['towns'];
        for (let i = 0; i < towns.length; i++ ) {
            if (i==0 || i==2 || i==6){
                let card = document.createElement('div');

                let info = document.createElement('section');
                let photo = document.createElement('figure');

                let townName = document.createElement('h2');
                let motto = document.createElement('h3');
                let founded = document.createElement('p');
                let population = document.createElement('p');
                let rain = document.createElement('p');
                let image = document.createElement('img');

                townName.textContent = towns[i].name;
                motto.textContent = towns[i].motto;
                founded.textContent = "Year Founded: " + towns[i].yearFounded;
                population.textContent = "Population: " + towns[i].currentPopulation + " souls";
                rain.textContent = "Annual Rain Fall: " + towns[i].averageRainfall + " in.";
                image.setAttribute('src', 'images/home/'+towns[i].photo);
                image.setAttribute('alt', towns[i].name + " Hometown");

                photo.appendChild(image);
                card.appendChild(photo);

                info.appendChild(townName);
                info.appendChild(motto);
                info.appendChild(founded);
                info.appendChild(population);
                info.appendChild(rain);
                card.appendChild(info);

                document.getElementById('card_info').appendChild(card);
            }
        }
    });