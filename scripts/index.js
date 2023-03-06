import data from './data.json' assert { type: 'json' };

let cards = document.getElementById('cards');

function cardCreator() {
  for (let card of data.events) {
    cards.innerHTML += `
  <div class="card" style="width: 20rem; margin-top: 1rem">
   <img src="${card.image}"class="card-img-top" alt="${card.name}"/>
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
    <li class="list-group-item">${
      card.assistance ? 'Assistance' : 'Estimate'
    }: ${card.assistance ? card.assistance : card.estimate} </li>
    <li class="list-group-item">
      <div class="price-container">
        <p>Price: ${card.price}</p>
        <a href="../details.html"> <button type="button" class="btn btn-success">See More</button> </a>
        
        </div>
    </li>
  </ul>
</div>
  `;
  }
}
cardCreator();

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

let checked = document.querySelector("checkbox");

function checkInput(input) {
  for (let i = 0; i < checked.length; i++) {
    if (
      checked[i].checked(input))  {
      cardTitle[i].parentNode.parentNode.parentNode.style.display = 'flex';
    } else {
      cardTitle[i].parentNode.parentNode.parentNode.style.display = 'none';
    }
  }
}

/* function chekboxCheck() {
  if (document.getElementById('category1').checked) {
console.log("category1");
  } else if (document.getElementById('category2').checked) {
  } else if (document.getElementById('category3').checked) {
  } else if (document.getElementById('category4').checked) {
  } else if (document.getElementById('category5').checked) {
  } else if (document.getElementById('category6').checked) {
  } else if (document.getElementById('category7').checked) {
  }
} */

