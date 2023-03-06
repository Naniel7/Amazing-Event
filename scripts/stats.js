import data from './data.json' assert { type: 'json' };
let statsTable = document.getElementById("main-stats")




function tableCreator() {
  for (let table of data.events) {
 
    statsTable.innerHTML += `    
    <div class="table-responsive">
    <table class="table table-container">
      <tr>
        <th colspan="3">Events statistics</th>
      </tr>
      <tr class="table-up">
        <td>Events with the highest percentage of attendance</td>
        <td>Events with the lovest percentage of attendance</td>
        <td>Event with the larger Capacity</td>
      </tr>
      <tr class="table-down">
        <td>Event1</td>
        <td>Event2</td>
        <td>   </td>
        </tr>
      <tr>
        <th colspan="3">Upcoming events statistics by category</th>
      </tr>
      <tr class="table-up">
        <td>Categories</td>
        <td>Revenues</td>
        <td>Percentage of attendance</td>
      </tr>

      <tr class="table-down">
        <td>category1</td>
        <td>revenue1</td>
        <td>percentage1</td>
      </tr>
      <tr class="table-down">
        <td>category2</td>
        <td>revenue2</td>
        <td>percentage2</td>
      </tr>
      <tr class="table-down">
        <td>category3</td>
        <td>revenue3</td>
        <td>percentage3</td>
      </tr>

      <tr>
        <th colspan="3">Past Events statistics by category</th>
      </tr>

      <tr class="table-up">
        <td>Categories</td>
        <td>Revenues</td>
        <td>Percentage of attendance</td>
      </tr>

      <tr class="table-down">
        <td>category1</td>
        <td>revenue1</td>
        <td>percentage1</td>
      </tr>
      <tr class="table-down">
        <td>category2</td>
        <td>revenue2</td>
        <td>percentage2</td>
      </tr>
      <tr class="table-down">
        <td>category3</td>
        <td>revenue3</td>
        <td>percentage3</td>
      </tr>
      <tr class="table-down">
        <td>category4</td>
        <td>revenue4</td>
        <td>percentage4</td>
      </tr>
      <tr class="table-down">
        <td>category5</td>
        <td>revenue5</td>
        <td>percentage5</td>
      </tr>

    </table>
  </div>`;
  }
}

tableCreator();














{
  /* <div class="table-responsive">
      <table class="table table-container">
        <tr>
          <th colspan="3">Events statistics</th>
        </tr>
        <tr class="table-up">
          <td>Events with the highest percentage of attendance</td>
          <td>Events with the lovest percentage of attendance</td>
          <td>Event with the larger Capacity</td>
        </tr>
        <tr class="table-down">
          <td>Event1</td>
          <td>Event2</td>
          <td>Event3</td>
        </tr>
        <tr>
          <th colspan="3">Upcoming events statistics by category</th>
        </tr>
        <tr class="table-up">
          <td>Categories</td>
          <td>Revenues</td>
          <td>Percentage of attendance</td>
        </tr>

        <tr class="table-down">
          <td>category1</td>
          <td>revenue1</td>
          <td>percentage1</td>
        </tr>
        <tr class="table-down">
          <td>category2</td>
          <td>revenue2</td>
          <td>percentage2</td>
        </tr>
        <tr class="table-down">
          <td>category3</td>
          <td>revenue3</td>
          <td>percentage3</td>
        </tr>

        <tr>
          <th colspan="3">Past Events statistics by category</th>
        </tr>

        <tr class="table-up">
          <td>Categories</td>
          <td>Revenues</td>
          <td>Percentage of attendance</td>
        </tr>

        <tr class="table-down">
          <td>category1</td>
          <td>revenue1</td>
          <td>percentage1</td>
        </tr>
        <tr class="table-down">
          <td>category2</td>
          <td>revenue2</td>
          <td>percentage2</td>
        </tr>
        <tr class="table-down">
          <td>category3</td>
          <td>revenue3</td>
          <td>percentage3</td>
        </tr>
        <tr class="table-down">
          <td>category4</td>
          <td>revenue4</td>
          <td>percentage4</td>
        </tr>
        <tr class="table-down">
          <td>category5</td>
          <td>revenue5</td>
          <td>percentage5</td>
        </tr>

      </table>
    </div> */
}
