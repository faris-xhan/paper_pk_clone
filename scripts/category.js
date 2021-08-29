const categoryTable = document.getElementById("category-jobs-table");

category_posts.forEach((post) => {
  categoryTable.append(constructTableRow(post));
});
