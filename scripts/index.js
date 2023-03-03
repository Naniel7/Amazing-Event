import data from './data.json' assert { type: 'json' };

let cards = document.getElementById('cards');

function cardCreator() {
  for (let card of data.events) {
  cards.innerHTML += `
  <div class="card" style="width: 20rem; margin-top: 1rem">
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
cardCreator()


function search_animal() {
  let input = document.getElementById('searcher').value;
  input=input.toLowerCase();

  let x = document.getElementsByClassName('card');
  console.log(x);
  for (i = 0; i < x.length; i++) { 
      
    if (!x[i].innerHTML.toLowerCase().includes(input)) {
          x[i].style.display="none";
      }
      else {
          x[i].style.display="list-item";                 
      }
  }
}

search_animal()



/* searcher.addEventListener("keyup", ()=>{

  let eventSearched = cards.filter(()=> createCards.toLowerCase().includes(searcher.Value.totLowerCase()))

  }
  
  ) 
  createCards(); */


/* for (let card of data.events) {
  cards.innerHTML += `
  <div class="card" style="width: 20rem; margin-top: 1rem">
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
} */


/* searcher.addEventListener("keyup", e=>{
  
  if (e.target.matches("#searcher")) {
    
    document.querySelectorAll(card).forEach(eventSearched=>{
      eventSearched.textContent.toLowerCase().includes(key.target.value.toLowerCase())
      ? eventSearched.classList.remove("filterIn"): eventSearched.classList.add("filterIn")
    }
      )
   }
  }) 

searcher();
 */



/* function myFunction() {
  let popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}


 */

