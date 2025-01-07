fetch('./scripts/endpoint.json')
  .then((response) => response.json())
  .then(data => {
    const queryString = location.search;

    const params = new URLSearchParams(queryString);
    const id = params.get("id");

    // Encuentra el evento correspondiente
    const cardPushed = data.events.find(card => card._id == id);

    const mainDetails = document.getElementById("main-details");

    // Crear la estructura de la tarjeta
    const cardDiv = document.createElement("div");
    cardDiv.className = "custom-card";

    const rowDiv = document.createElement("div");
    rowDiv.className = "custom-card-row";

    // Imagen del evento
    const imageDiv = document.createElement("div");
    imageDiv.className = "custom-card-image";
    const img = document.createElement("img");
    img.src = cardPushed.image;
    img.alt = "Event image";
    img.className = "custom-card-img";
    imageDiv.appendChild(img);

    // Contenido del evento
    const contentDiv = document.createElement("div");
    contentDiv.className = "custom-card-content";

    const title = document.createElement("h5");
    title.className = "custom-card-title";
    title.textContent = cardPushed.name;

    const description = document.createElement("p");
    description.className = "custom-card-description";
    description.textContent = cardPushed.description;

    // Detalles adicionales
    const detailsList = document.createElement("ul");
    detailsList.className = "custom-card-details";

    const category = document.createElement("li");
    category.textContent = `Category: ${cardPushed.category}`;
    const date = document.createElement("li");
    date.textContent = `Date: ${cardPushed.date}`;
    const place = document.createElement("li");
    place.textContent = `Place: ${cardPushed.place}`;
    const price = document.createElement("li");
    price.textContent = `Price: $${cardPushed.price}`;
    const capacity = document.createElement("li");
    capacity.textContent = `Capacity: ${cardPushed.capacity} people`;

    detailsList.appendChild(category);
    detailsList.appendChild(date);
    detailsList.appendChild(place);
    detailsList.appendChild(price);
    detailsList.appendChild(capacity);

    // Agregar elementos al contenido
    contentDiv.appendChild(title);
    contentDiv.appendChild(description);
    contentDiv.appendChild(detailsList);

    // Agregar imagen y contenido a la tarjeta
    rowDiv.appendChild(imageDiv);
    rowDiv.appendChild(contentDiv);
    cardDiv.appendChild(rowDiv);

    // Agregar la tarjeta al contenedor principal
    mainDetails.appendChild(cardDiv);
  })
  .catch(error => console.error("Error fetching data:", error));
