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
      <a href="/jobs/${link.id}.html">${link.title}</a>
    </td>
    <td>${link.posted_on}</td>
    <td>
      <button class="btn details-btn">
        <a href="/jobs/${link.id}.html">Details</a>
      </button>
    </td> 
  </tr>
`;
  return tr;
};

const constructCityItem = (city) => {
  const li = document.createElement("li");
  const link = city.replace(/\W+/g, "-").toLowerCase();

  li.innerHTML = `
    <a href="/jobs-in-city/city.html">${city}</a>
  `;

  return li;
};

const constructCategoryItem = (category) => {
  const li = document.createElement("li");
  const link = category.replace(/\W+/g, "-").toLowerCase();
  li.innerHTML = `
    <a href="/jobs-by-category/category.html">${category}</a>
  `;

  return li;
};

cities.forEach((city) => {
  citiesList.append(constructCityItem(city));
});

cities.forEach((city) => {
  pakCitiesList.append(constructCityItem(city));
});

categories.forEach((category) => {
  categoriesList.append(constructCategoryItem(category));
});
