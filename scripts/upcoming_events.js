let cards = document.getElementById('cards');
let cardEvents = [];
//fetch("./endpoint.json")
function dataBase() {
  fetch('https://mindhub-xj03.onrender.com/api/amazing')
    .then((response) => response.json())
    .then((apiData) => {
      cardCreator(apiData.events, cards, apiData.currentDate);
    })
    .catch((error) => console.log(error.message));
}
dataBase();

function cardCreator(cardData, cardPlace, today) {
  let cardCreated = '';
  cardData.filter(event => {
    let eventDate = new Date(event.date + "T00:00:00")
    let currentDate = new Date(today + "T00:00:00")
    return eventDate > currentDate;
}).forEach((card) => {
    cardCreated += `
    <div class="card" style="width: 20rem; margin-top: 1rem">
     <img src="${card.image}" class="card-img-top" alt="${card.name}"/>
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
      <li class="list-group-item category" value="${card.category}">Category: ${
      card.category}</li>
      <li class="list-group-item">Place: ${card.place}</li>
      <li class="list-group-item">Capacity: ${card.capacity}</li>
      <li class="list-group-item">${
        card.assistance ? 'Assistance' : 'Estimate'
      }: ${card.assistance ? card.assistance : card.estimate} </li>
      <li class="list-group-item">
        <div class="price-container">
          <p>Price: ${card.price}</p>
          <a href="../details.html?id=${
            card._id
          }"> <button type="button" class="btn btn-success">See More</button> </a>
          
          </div>
      </li>
    </ul>
  </div>
    `;
  });
  cardPlace.innerHTML = cardCreated;
}


//Searcher
let searcherInput = document.getElementById('searcher');
let cardTitle = document.getElementsByClassName('card-title');
let cardDescription = document.getElementsByClassName('card-text');
let buttonSearch = document.getElementById('button-search');

function searchEvent(input) {
  for (let i = 0; i < cardTitle.length; i++) {
    if (
      cardTitle[i].innerHTML.toLowerCase().includes(input.toLowerCase()) ||
      cardDescription[i].innerHTML.toLowerCase().includes(input.toLowerCase())
    ) {
      cardTitle[i].parentNode.parentNode.parentNode.style.display = 'flex';
    } else {
      cardTitle[i].parentNode.parentNode.parentNode.style.display = 'none';
    }
  }
}

buttonSearch.addEventListener('click', () => {
  searchEvent(searcherInput.value);
});


//checkboxes
let checkboxes = document.querySelectorAll('.checkbox-values');
let array = [];

function categoryFilter(array, categories) {
  if (array.length) {
    for (let i = 0; i < categories.length; i++) {
      if (array.includes(categories[i].getAttribute('value'))) {
        categories[i].parentNode.parentNode.style.display = 'flex';
      } else {
        categories[i].parentNode.parentNode.style.display = 'none';
      }
    }
  } else {
    for (let i = 0; i < categories.length; i++) {
      categories[i].parentNode.parentNode.style.display = 'flex';
    }
  }
}
checkboxes.forEach((e) => {
  e.addEventListener('click', () => {
    let categories = document.querySelectorAll('.category');
    if (e.checked) {
      array.push(e.value);
    }
    if (e.checked === false) {
      let newarray = array.filter((el) => el !== e.value);
      array = newarray;
    }
    categoryFilter(array, categories);
  });
});
