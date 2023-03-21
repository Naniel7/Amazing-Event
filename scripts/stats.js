fetch('https://mindhub-xj03.onrender.com/api/amazing')
  .then((response) => response.json())
  .then((data) => {
    printTable1(
      results(assistance(data), assistance(data).reverse(), capacity(data)),
      'table1'
    );
    printTable2(getCategory(upcoming(data)), 'table2');
  });

function upcoming(data) {
  let event = data.events;
  let currentDate = data.currentDate;
  return event.filter((event) => event.date > currentDate);
}

function getCategory(array) {
  let categories = {};
  for (let i = 0; i < array.length; i++) {
    if (!categories.hasOwnProperty(array[i].category)) {
      categories = {
        ...categories,
        [array[i].category]: {
          ['revenues']: array[i].price * array[i].estimate,
        },
      };
    } else {
      let label = array[i].category;
      console.log(categories.label);
      //categories[array[i].category] = categories[array[i].category].revenues + (array[i].price * array[i].estimate)
    }
  }
  return categories;
}

function past(data) {
  return data.filter((event) => event.date < data.currentDate);
}

function assistance(arrayToRead) {
  let arrayPercentage = arrayToRead.events.map((event) => {
    return {
      attendance: (event.assistance / event.capacity) * 100,
      nameEvent: event.name,
    };
  });
  arrayPercentage.sort((a, b) => b.attendance - a.attendance);
  return arrayPercentage;
}

function capacity(arrayToRead) {
  const arrayCapacity = arrayToRead.events.map((event) => {
    return {
      capacity: event.capacity,
      nameEvent: event.name,
    };
  });
  arrayCapacity.sort((a, b) => b.capacity - a.capacity);
  return arrayCapacity;
}

function results(highestPercentage, lowestPercentage, largerCapacity) {
  let all = {
    highestPercentage: highestPercentage[0].nameEvent,
    lowestPercentage: lowestPercentage[0].nameEvent,
    largerCapacity: largerCapacity[0].nameEvent,
  };

  return all;
}

function printTable1(results, element) {
  let table1 = document.getElementById(element);
  table1.innerHTML = `
    <tr>
        <td>${results.highestPercentage}</td>
        <td>${results.lowestPercentage}</td>
        <td>${results.largerCapacity}</td>
    </tr>
    `;
}

function printTable2(object, element) {
  let table1 = document.getElementById(element);
  let array = Object.entries(object);
  for (let i = 0; i < array.length; i++) {
    table1.innerHTML += `
        <td>${array[i][0]}</td>
        <td>${array[i][1]}</td>
        <td></td>
    `;
  }
}
