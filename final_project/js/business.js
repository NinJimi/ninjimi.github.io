fetch("https://ninjimi.github.io/final_project/js/yucaipa.json")
.then(function (response) {
    return response.json();
    })
.then(function (jsonObject) {
        console.table(jsonObject);
        const business = jsonObject['business'];
        for (let i = 0; i < business.length; i++ ) {
            if (i==0 || i==2 || i==6){
                
                let card = document.createElement('div');

                let info = document.createElement('section');
                let photo = document.createElement('figure');

                let businessName = document.createElement('h2');
                let desc = document.createElement('p');
                let address = document.createElement('p');
                let phone = document.createElement('p');
                let email = document.createElement('p');
                let image = document.createElement('img');

                businessName.textContent = business[i].title;
                desc.textContent = business[i].motto;
                address.textContent = "Address: " + business[i].address;
                phone.textContent = "Phone Number: " + business[i].phone;
                email.textContent = "Email: " + business[i].email;
                image.setAttribute('src', business[i].img);
                image.setAttribute('alt', business[i].title);

                photo.appendChild(image);
                card.appendChild(photo);

                info.appendChild(businessName);
                info.appendChild(desc);
                info.appendChild(address);
                info.appendChild(phone);
                info.appendChild(email);
                card.appendChild(info);

                document.getElementById('card_info').appendChild(card);
            }
        }
    });