const tableBody = document.getElementById("table-body");

posts.forEach((post) => {
  tableBody.append(constructTableRow(post));
});
