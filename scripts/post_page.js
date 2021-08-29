const latestJobsTable = document.getElementById("latest-jobs-table");
latest_posts.forEach((post) => {
  latestJobsTable.append(constructTableRow(post));
});

const relatedCategoriesTable = document.getElementById(
  "related-categories-list"
);

relatedCategories.forEach((category) => {
  relatedCategoriesTable.append(constructCategoryItem(category));
});
