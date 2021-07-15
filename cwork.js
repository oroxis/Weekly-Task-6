let pCard = document.getElementById('users')

fetch('https://randomuser.me/api/?results=30')
    .then((resp) => resp.json())
    .then(function(data) {
        let users = data.results
        return users.map((user) => {console.log(user);

            const jsdiv = document.createElement('div');
            const img = document.createElement('img');
            const p = document.createElement('p');

            pCard.appendChild(jsdiv);
            
            let paragraph = jsdiv.appendChild(p)
            
            let image = jsdiv.appendChild(img)
            
            let firstName = user.name.first;
            let lastName = user.name.last;
            let email = user.email;
            let city = user.location.city;
            let nationality = user.location.country;
           
       
           
         const card = `<div class="card mb-5" style="max-width: 540px;">
         <div class="row g-0">
           <div class="col-md-6">
             <img src="..." class="img-fluid rounded-start" alt="...">
           </div>
           <div class="col-md-6">
             <div class="card-body">
               <h5 class="card-title">Card title</h5>
               <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
               <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
             </div>
           </div>
         </div>
       </div>`;

         

    paragraph.innerHTML =` 
            
            <style>
            .card {
                margin-left: 50px;
                color: #f59e34;
                box-shadow: 0px 10px 10px #7a7671;
                font-family: 'Courier New', Courier, monospace;
            }
            .card-title{
                font-weight: 700;
            }
            img{
                width: 120px; 
                height: 120px; 
                border-radius: 50%; 
                align-self: center;">
            }
            </style>
            
            <div class="card mb-3" style="max-width: 540px; border-color: darkblue;">
            <div class="row g-0">
              <div class="col-md-3" id="image">
                <img src="${user.picture.large}" class="rounded-circle" alt="...">
              </div>
              <div style="background-color: rgba(73, 8, 252, 0.678);" class="col-md-9">
                <div class="card" style="padding: 20px; color: rgb(136, 138, 61);">
                  <h5 class="card-title">${firstName}  ${lastName}</h5>
                  <p class="card-text"><strong>Email:</strong>  ${email}</p>
                  <p class="card-text"><strong>City:</strong>  ${city}</p>
                  <p class="card-text"><strong>Nationality:</strong>  ${nationality}</p>
                 
                </div>
              </div>
            </div>
          </div>`;
            
        })
    }).catch((error)=>{
       
    })