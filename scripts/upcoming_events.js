import data from './data.json' assert {type: 'json'};

let cards = document.getElementById("cards");
let today = new Date(data.currentDate);


for (let card of data.events.filter(event => {
    let eventDate = new Date(event.date)
    return eventDate > today
})) {
  cards.innerHTML += `
  <div class="card" style="width: 20rem">
  <img
    src="${card.image}"
    class="card-img-top"
    alt="${card.name}"
  />
  <div class="card-body">
    <div class="title">
      <h5 class="card-title">${card.name}</h5>
      <h6>${card.date}</h6>
    </div>
    <p class="card-text">
    ${card.description}
    </p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Category: ${card.category}</li>
    <li class="list-group-item">Place: ${card.place}</li>
    <li class="list-group-item">Capacity: ${card.capacity}</li>
    <li class="list-group-item">${card.assistance ? "Assistance" : "Estimate"}: ${card.assistance ? card.assistance : card.estimate} </li>
    <li class="list-group-item">
      <div class="price-container">
        <p>Price: $${card.price}</p>
        <a href="../details.html"> <button type="button" class="btn btn-success">See More</button> </a>
      </div>
    </li>
  </ul>
</div>
  `;
}
