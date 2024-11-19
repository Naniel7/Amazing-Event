fetch('https://mindhub-xj03.onrender.com/api/amazing')
  .then((response) => response.json())
  .then(data => {
const queryString = location.search;

const params =  new URLSearchParams(queryString);
const id=params.get("id");
let cardPushed = data.events.find(card=>card._id==id);
let mainDetails = document.getElementById("main-details")
mainDetails.innerHTML=`<div class="card mb-3">
<div class="row g-0 pop-up">
  <div class="col-md-6 popup-image">
<img src="${cardPushed.image}" class="img-fluid rounded-start" alt="image">
  </div>
  <div class="col-md-6">
    <div class="card-body card-text">
      <h5 class="card-title">${cardPushed.name}</h5>
      <p class="card-text">${cardPushed.description}</p>
      <p class="card-text"><small class="text-muted">Last updated 84 years ago</small></p>
    </div>

  </div>
</div>
</div>`
  })
    

