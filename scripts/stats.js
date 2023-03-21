fetch('https://mindhub-xj03.onrender.com/api/amazing')
  .then((response) => response.json())
  .then((data) => {
    printTable1(
      results(assistance(data), assistance(data).reverse(), capacity(data)),
      'table1'
    );
    printTable2(getCategory(upcoming(data,'upcoming'), "estimate"), 'table2');
    printTable2(getCategory(upcoming(data, "pass"), "assis"), 'table3');
  });

function upcoming(data, type) {
  let event = data.events;
  let currentDate = data.currentDate;
  return type === 'upcoming' ? event.filter((event) => event.date > currentDate) : event.filter((event) => event.date < currentDate);
}

function getCategory(array, label) {
  let categories = {};
  if(label === "estimate"){
    for (let i = 0; i < array.length; i++) {
      if (!categories.hasOwnProperty(array[i].category)) {
        categories = {
          ...categories,
          [array[i].category]: {
            ['revenues']: array[i].price * array[i].estimate,
            ['capacity']: array[i].capacity,
            ['estimate']: array[i].estimate,
          },
        };
      } else {
        categories[array[i].category] = {
          ...categories[array[i].category], 
          revenues: categories[array[i].category].revenues + (array[i].price * array[i].estimate),
          capacity: categories[array[i].category].capacity + array[i].capacity,
          estimate: categories[array[i].category].estimate + array[i].estimate,
        }
      }
    }
  }else {
    for (let i = 0; i < array.length; i++) {
      if (!categories.hasOwnProperty(array[i].category)) {
        categories = {
          ...categories,
          [array[i].category]: {
            ['revenues']: array[i].price * array[i].assistance,
            ['capacity']: array[i].capacity,
            ['assistance']: array[i].assistance,
          },
        };
      } else {
        categories[array[i].category] = {
          ...categories[array[i].category], 
          revenues: categories[array[i].category].revenues + (array[i].price * array[i].assistance),
          capacity: categories[array[i].category].capacity + array[i].capacity,
          assistance: categories[array[i].category].assistance + array[i].assistance,
        }
      }
    }
  }
  return categories;
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
        <td>$ ${array[i][1].revenues}</td>
        <td>${(((element === "table2" ? array[i][1].estimate : array[i][1].assistance) / array[i][1].capacity)*100).toFixed(2)}%</td>
    `;
  }
}