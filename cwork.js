const profile = document.getElementById('card')
fetch('https://randomuser.me/api/?results=30')
    .then((resp) => resp.json())
    .then(function(data) {
        let users = data.results;
        return users.map((user) => {
    console.log(user)
         
    // document.getElementsByClassName('images').innerHTML = user.picture.large;
                        
            const img = document.createElement('img');
            const p = document.createElement('p');
            const p1 = document.createElement('p');
            const p2 = document.createElement('p');
            const p3 = document.createElement('p');
            const div = document.createElement('div')

            card.appendChild(img);
            card.appendChild(div);
            div.appendChild(p)
            div.appendChild(p1);
            div.appendChild(p2);
            div.appendChild(p3);
            

            let images = card.appendChild(img);
            let firstPara = div.appendChild(p);
            let secondPara = div.appendChild(p1);
            let thirdPara = div.appendChild(p2);
            let fourthPara = div.appendChild(p3);
            
        
           
          
            let firstName = user.name.first;
            let lastName = user.name.last;
            let email = user.email;
            let nationality = user.location.country;
            let postCode = user.location.postcode;

            console.log(user.location.postcode)
            
            images.src = user.picture.large;
            
            firstPara.innerHTML = `${firstName} ${lastName}`;
            secondPara.innerHTML = `${email}`
            thirdPara.innerHTML = `${nationality}`
            fourthPara.innerHTML = `${postCode}`
            
        });
    })
            .catch((error) => console.log(error));