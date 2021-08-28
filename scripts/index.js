const tableBody = document.getElementById("table-body");
const citiesList = document.getElementById("cities-list");
const pakCitiesList = document.getElementById("pak-cities-list");
const citiesPanelBtn = document.getElementById("cities-panel-btn");
const categoriesList = document.getElementById("catagories-list");
const categoriesPanelBtn = document.getElementById("catagories-panel-btn");

citiesPanelBtn.onclick = (e) => {
  if (pakCitiesList.classList.contains("panel-active")) {
    pakCitiesList.classList.remove("panel-active");
  } else {
    pakCitiesList.classList.add("panel-active");
  }
};

categoriesPanelBtn.onclick = (e) => {
  if (categoriesList.classList.contains("panel-active")) {
    categoriesList.classList.remove("panel-active");
  } else {
    categoriesList.classList.add("panel-active");
  }
};

const constructTableRow = (link) => {
  const tr = document.createElement("tr");
  tr.innerHTML = `
  <tr>
    <td>
      <a href="/jobs/${link.id}">${link.title}</a>
    </td>
    <td>${link.posted_on}</td>
    <td>
      <button class="btn details-btn">
        <a href="/jobs/${link.id}">Details</a>
      </button>
    </td> 
  </tr>
`;
  return tr;
};

const constructCityItem = (city) => {
  const li = document.createElement("li");
  li.innerHTML = `
    <a href="/jobs/city/${city.toLowerCase()}">${city}</a>
  `;

  return li;
};

const constructCatagoryItem = (catagory) => {
  const li = document.createElement("li");
  li.innerHTML = `
    <a href="/jobs/catagory/${catagory.toLowerCase()}">${catagory}</a>
  `;

  return li;
};

posts.forEach((post) => {
  tableBody.append(constructTableRow(post));
});

cities.forEach((city) => {
  citiesList.append(constructCityItem(city));
});

cities.forEach((city) => {
  pakCitiesList.append(constructCityItem(city));
});

categories.forEach((catagory) => {
  categoriesList.append(constructCityItem(catagory));
});
