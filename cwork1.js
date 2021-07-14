
    const pCard = document.getElementsByClassName('card')
    fetch('https://randomuser.me/api/?results=30')
    .then((resp) => resp.json())
    .then(function(data) {
        let users = data.results
        return users.map((user) => {console.log(user);

let firstName = user.name.first;
let lastName = user.name.last;
let email = user.email;
let nationality = user.location.country;
let city = user.location.city;
let photo = document.getElementById('profilePics');

photo.src = user.picture.large;

document.getElementById('name').innerHTML = `${firstName} ${lastName}`;                      
document.getElementById('natn').innerHTML = `${nationality}`;
document.getElementById('city').innerHTML = `${city}`;
document.getElementById('email').innerHTML = `${email}`;
               
});
})
.catch((error) => console.log(error));



const pCard1 = document.getElementsByClassName('card1')
fetch('https://randomuser.me/api/?results=30')
.then((resp) => resp.json())
.then(function(data) {
let users1 = data.results
return users1.map((user1) => {console.log(user1);
        
let firstName1 = user1.name.first;
let lastName1 = user1.name.last;
let email1 = user1.email;
let nationality1 = user1.location.country;
let city1 = user1.location.city;
let photo1 = document.getElementById('profilePics1');
 
photo1.src = user1.picture.large;
        
document.getElementById('name1').innerHTML = `${firstName1} ${lastName1}`;                      
document.getElementById('natn1').innerHTML = `${nationality1}`;
document.getElementById('city1').innerHTML = `${city1}`;
document.getElementById('email1').innerHTML = `${email1}`;
});
})
.catch((error) => console.log(error));



const pCard2 = document.getElementsByClassName('card2')
fetch('https://randomuser.me/api/?results=30')
.then((resp) => resp.json())
.then(function(data) {
let users2 = data.results
return users2.map((user2) => {console.log(user2);
                
let firstName2 = user2.name.first;
let lastName2 = user2.name.last;
let email2 = user2.email;
let nationality2 = user2.location.country;
let city2 = user2.location.city;
let photo2 = document.getElementById('profilePics2');
                
photo2.src = user2.picture.large;
                
document.getElementById('name2').innerHTML = `${firstName2} ${lastName2}`;                      
document.getElementById('natn2').innerHTML = `${nationality2}`;
document.getElementById('city2').innerHTML = `${city2}`;
document.getElementById('email2').innerHTML = `${email2}`;
                               
                        });
                    })
.catch((error) => console.log(error));

const pCard3 = document.getElementsByClassName('card2')
fetch('https://randomuser.me/api/?results=30')
.then((resp) => resp.json())
.then(function(data) {
let users3 = data.results
return users3.map((user3) => {console.log(user3);
                
let firstName3 = user3.name.first;
let lastName3 = user3.name.last;
let email3 = user3.email;
let nationality3 = user3.location.country;
let city3 = user3.location.city;
let photo3 = document.getElementById('profilePics3');
                
photo3.src = user3.picture.large;
                
document.getElementById('name3').innerHTML = `${firstName3} ${lastName3}`;                      
document.getElementById('natn3').innerHTML = `${nationality3}`;
document.getElementById('city3').innerHTML = `${city3}`;
document.getElementById('email3').innerHTML = `${email3}`;
                               
                        });
                    })
.catch((error) => console.log(error));


