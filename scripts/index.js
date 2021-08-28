const tableBody = document.getElementById("table-body");

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

let posts = [
  {
    id: 0,
    title: "District & Session Court Khushab Jobs April 2021",
    description:
      "Stenographer, Computer Operator, Computer Hardware Technician, Junior Clerk, Imam Masjid, Khadim Masjid, Electrician, Cook with complete details are available here for desirous individuals. The District & Session Court Khushab is offering the jobs which belong to Judiciary. The working hours are as per routine i.e. 8 hours a day and 40 hours a week. The job location is PUNJAB Khushab. The persons meeting the requirement of vacant post(s) may enjoy salary of 0. The most important thing is that the applications must be complete and should receive upto April 26, 2021. The advertisement of District & Session Court Khushab contains complete information about job specifications, job description etc. which is published in Jang Newspaper dated April 1st, 2021, Thursday.",
    posted_on: "28-Aug-2021",
    deadline: "28-09-2021",
    imgSrc: "/assets/dummy_add.jpg",
    city: 0,
    category: "2",
  },
  {
    id: 0,
    title: "District & Session Court Khushab Jobs April 2021",
    description:
      "Stenographer, Computer Operator, Computer Hardware Technician, Junior Clerk, Imam Masjid, Khadim Masjid, Electrician, Cook with complete details are available here for desirous individuals. The District & Session Court Khushab is offering the jobs which belong to Judiciary. The working hours are as per routine i.e. 8 hours a day and 40 hours a week. The job location is PUNJAB Khushab. The persons meeting the requirement of vacant post(s) may enjoy salary of 0. The most important thing is that the applications must be complete and should receive upto April 26, 2021. The advertisement of District & Session Court Khushab contains complete information about job specifications, job description etc. which is published in Jang Newspaper dated April 1st, 2021, Thursday.",
    posted_on: "28-Aug-2021",
    deadline: "28-09-2021",
    imgSrc: "/assets/dummy_add.jpg",
    city: 0,
    category: "2",
  },
  {
    id: 0,
    title: "District & Session Court Khushab Jobs April 2021",
    description:
      "Stenographer, Computer Operator, Computer Hardware Technician, Junior Clerk, Imam Masjid, Khadim Masjid, Electrician, Cook with complete details are available here for desirous individuals. The District & Session Court Khushab is offering the jobs which belong to Judiciary. The working hours are as per routine i.e. 8 hours a day and 40 hours a week. The job location is PUNJAB Khushab. The persons meeting the requirement of vacant post(s) may enjoy salary of 0. The most important thing is that the applications must be complete and should receive upto April 26, 2021. The advertisement of District & Session Court Khushab contains complete information about job specifications, job description etc. which is published in Jang Newspaper dated April 1st, 2021, Thursday.",
    posted_on: "28-Aug-2021",
    deadline: "28-09-2021",
    imgSrc: "/assets/dummy_add.jpg",
    city: 0,
    category: "2",
  },
  {
    id: 0,
    title: "District & Session Court Khushab Jobs April 2021",
    description:
      "Stenographer, Computer Operator, Computer Hardware Technician, Junior Clerk, Imam Masjid, Khadim Masjid, Electrician, Cook with complete details are available here for desirous individuals. The District & Session Court Khushab is offering the jobs which belong to Judiciary. The working hours are as per routine i.e. 8 hours a day and 40 hours a week. The job location is PUNJAB Khushab. The persons meeting the requirement of vacant post(s) may enjoy salary of 0. The most important thing is that the applications must be complete and should receive upto April 26, 2021. The advertisement of District & Session Court Khushab contains complete information about job specifications, job description etc. which is published in Jang Newspaper dated April 1st, 2021, Thursday.",
    posted_on: "28-Aug-2021",
    deadline: "28-09-2021",
    imgSrc: "/assets/dummy_add.jpg",
    city: 0,
    category: "2",
  },
  {
    id: 0,
    title: "District & Session Court Khushab Jobs April 2021",
    description:
      "Stenographer, Computer Operator, Computer Hardware Technician, Junior Clerk, Imam Masjid, Khadim Masjid, Electrician, Cook with complete details are available here for desirous individuals. The District & Session Court Khushab is offering the jobs which belong to Judiciary. The working hours are as per routine i.e. 8 hours a day and 40 hours a week. The job location is PUNJAB Khushab. The persons meeting the requirement of vacant post(s) may enjoy salary of 0. The most important thing is that the applications must be complete and should receive upto April 26, 2021. The advertisement of District & Session Court Khushab contains complete information about job specifications, job description etc. which is published in Jang Newspaper dated April 1st, 2021, Thursday.",
    posted_on: "28-Aug-2021",
    deadline: "28-09-2021",
    imgSrc: "/assets/dummy_add.jpg",
    city: 0,
    category: "2",
  },
  {
    id: 0,
    title: "District & Session Court Khushab Jobs April 2021",
    description:
      "Stenographer, Computer Operator, Computer Hardware Technician, Junior Clerk, Imam Masjid, Khadim Masjid, Electrician, Cook with complete details are available here for desirous individuals. The District & Session Court Khushab is offering the jobs which belong to Judiciary. The working hours are as per routine i.e. 8 hours a day and 40 hours a week. The job location is PUNJAB Khushab. The persons meeting the requirement of vacant post(s) may enjoy salary of 0. The most important thing is that the applications must be complete and should receive upto April 26, 2021. The advertisement of District & Session Court Khushab contains complete information about job specifications, job description etc. which is published in Jang Newspaper dated April 1st, 2021, Thursday.",
    posted_on: "28-Aug-2021",
    deadline: "28-09-2021",
    imgSrc: "/assets/dummy_add.jpg",
    city: 0,
    category: "2",
  },
  {
    id: 0,
    title: "District & Session Court Khushab Jobs April 2021",
    description:
      "Stenographer, Computer Operator, Computer Hardware Technician, Junior Clerk, Imam Masjid, Khadim Masjid, Electrician, Cook with complete details are available here for desirous individuals. The District & Session Court Khushab is offering the jobs which belong to Judiciary. The working hours are as per routine i.e. 8 hours a day and 40 hours a week. The job location is PUNJAB Khushab. The persons meeting the requirement of vacant post(s) may enjoy salary of 0. The most important thing is that the applications must be complete and should receive upto April 26, 2021. The advertisement of District & Session Court Khushab contains complete information about job specifications, job description etc. which is published in Jang Newspaper dated April 1st, 2021, Thursday.",
    posted_on: "28-Aug-2021",
    deadline: "28-09-2021",
    imgSrc: "/assets/dummy_add.jpg",
    city: 0,
    category: "2",
  },
  {
    id: 0,
    title: "District & Session Court Khushab Jobs April 2021",
    description:
      "Stenographer, Computer Operator, Computer Hardware Technician, Junior Clerk, Imam Masjid, Khadim Masjid, Electrician, Cook with complete details are available here for desirous individuals. The District & Session Court Khushab is offering the jobs which belong to Judiciary. The working hours are as per routine i.e. 8 hours a day and 40 hours a week. The job location is PUNJAB Khushab. The persons meeting the requirement of vacant post(s) may enjoy salary of 0. The most important thing is that the applications must be complete and should receive upto April 26, 2021. The advertisement of District & Session Court Khushab contains complete information about job specifications, job description etc. which is published in Jang Newspaper dated April 1st, 2021, Thursday.",
    posted_on: "28-Aug-2021",
    deadline: "28-09-2021",
    imgSrc: "/assets/dummy_add.jpg",
    city: 0,
    category: "2",
  },
  {
    id: 0,
    title: "District & Session Court Khushab Jobs April 2021",
    description:
      "Stenographer, Computer Operator, Computer Hardware Technician, Junior Clerk, Imam Masjid, Khadim Masjid, Electrician, Cook with complete details are available here for desirous individuals. The District & Session Court Khushab is offering the jobs which belong to Judiciary. The working hours are as per routine i.e. 8 hours a day and 40 hours a week. The job location is PUNJAB Khushab. The persons meeting the requirement of vacant post(s) may enjoy salary of 0. The most important thing is that the applications must be complete and should receive upto April 26, 2021. The advertisement of District & Session Court Khushab contains complete information about job specifications, job description etc. which is published in Jang Newspaper dated April 1st, 2021, Thursday.",
    posted_on: "28-Aug-2021",
    deadline: "28-09-2021",
    imgSrc: "/assets/dummy_add.jpg",
    city: 0,
    category: "2",
  },
  {
    id: 0,
    title: "District & Session Court Khushab Jobs April 2021",
    description:
      "Stenographer, Computer Operator, Computer Hardware Technician, Junior Clerk, Imam Masjid, Khadim Masjid, Electrician, Cook with complete details are available here for desirous individuals. The District & Session Court Khushab is offering the jobs which belong to Judiciary. The working hours are as per routine i.e. 8 hours a day and 40 hours a week. The job location is PUNJAB Khushab. The persons meeting the requirement of vacant post(s) may enjoy salary of 0. The most important thing is that the applications must be complete and should receive upto April 26, 2021. The advertisement of District & Session Court Khushab contains complete information about job specifications, job description etc. which is published in Jang Newspaper dated April 1st, 2021, Thursday.",
    posted_on: "28-Aug-2021",
    deadline: "28-09-2021",
    imgSrc: "/assets/dummy_add.jpg",
    city: 0,
    category: "2",
  },
  {
    id: 0,
    title: "District & Session Court Khushab Jobs April 2021",
    description:
      "Stenographer, Computer Operator, Computer Hardware Technician, Junior Clerk, Imam Masjid, Khadim Masjid, Electrician, Cook with complete details are available here for desirous individuals. The District & Session Court Khushab is offering the jobs which belong to Judiciary. The working hours are as per routine i.e. 8 hours a day and 40 hours a week. The job location is PUNJAB Khushab. The persons meeting the requirement of vacant post(s) may enjoy salary of 0. The most important thing is that the applications must be complete and should receive upto April 26, 2021. The advertisement of District & Session Court Khushab contains complete information about job specifications, job description etc. which is published in Jang Newspaper dated April 1st, 2021, Thursday.",
    posted_on: "28-Aug-2021",
    deadline: "28-09-2021",
    imgSrc: "/assets/dummy_add.jpg",
    city: 0,
    category: "2",
  },
  {
    id: 0,
    title: "District & Session Court Khushab Jobs April 2021",
    description:
      "Stenographer, Computer Operator, Computer Hardware Technician, Junior Clerk, Imam Masjid, Khadim Masjid, Electrician, Cook with complete details are available here for desirous individuals. The District & Session Court Khushab is offering the jobs which belong to Judiciary. The working hours are as per routine i.e. 8 hours a day and 40 hours a week. The job location is PUNJAB Khushab. The persons meeting the requirement of vacant post(s) may enjoy salary of 0. The most important thing is that the applications must be complete and should receive upto April 26, 2021. The advertisement of District & Session Court Khushab contains complete information about job specifications, job description etc. which is published in Jang Newspaper dated April 1st, 2021, Thursday.",
    posted_on: "28-Aug-2021",
    deadline: "28-09-2021",
    imgSrc: "/assets/dummy_add.jpg",
    city: 0,
    category: "2",
  },
  {
    id: 0,
    title: "District & Session Court Khushab Jobs April 2021",
    description:
      "Stenographer, Computer Operator, Computer Hardware Technician, Junior Clerk, Imam Masjid, Khadim Masjid, Electrician, Cook with complete details are available here for desirous individuals. The District & Session Court Khushab is offering the jobs which belong to Judiciary. The working hours are as per routine i.e. 8 hours a day and 40 hours a week. The job location is PUNJAB Khushab. The persons meeting the requirement of vacant post(s) may enjoy salary of 0. The most important thing is that the applications must be complete and should receive upto April 26, 2021. The advertisement of District & Session Court Khushab contains complete information about job specifications, job description etc. which is published in Jang Newspaper dated April 1st, 2021, Thursday.",
    posted_on: "28-Aug-2021",
    deadline: "28-09-2021",
    imgSrc: "/assets/dummy_add.jpg",
    city: 0,
    category: "2",
  },
  {
    id: 0,
    title: "District & Session Court Khushab Jobs April 2021",
    description:
      "Stenographer, Computer Operator, Computer Hardware Technician, Junior Clerk, Imam Masjid, Khadim Masjid, Electrician, Cook with complete details are available here for desirous individuals. The District & Session Court Khushab is offering the jobs which belong to Judiciary. The working hours are as per routine i.e. 8 hours a day and 40 hours a week. The job location is PUNJAB Khushab. The persons meeting the requirement of vacant post(s) may enjoy salary of 0. The most important thing is that the applications must be complete and should receive upto April 26, 2021. The advertisement of District & Session Court Khushab contains complete information about job specifications, job description etc. which is published in Jang Newspaper dated April 1st, 2021, Thursday.",
    posted_on: "28-Aug-2021",
    deadline: "28-09-2021",
    imgSrc: "/assets/dummy_add.jpg",
    city: 0,
    category: "2",
  },
  {
    id: 0,
    title: "District & Session Court Khushab Jobs April 2021",
    description:
      "Stenographer, Computer Operator, Computer Hardware Technician, Junior Clerk, Imam Masjid, Khadim Masjid, Electrician, Cook with complete details are available here for desirous individuals. The District & Session Court Khushab is offering the jobs which belong to Judiciary. The working hours are as per routine i.e. 8 hours a day and 40 hours a week. The job location is PUNJAB Khushab. The persons meeting the requirement of vacant post(s) may enjoy salary of 0. The most important thing is that the applications must be complete and should receive upto April 26, 2021. The advertisement of District & Session Court Khushab contains complete information about job specifications, job description etc. which is published in Jang Newspaper dated April 1st, 2021, Thursday.",
    posted_on: "28-Aug-2021",
    deadline: "28-09-2021",
    imgSrc: "/assets/dummy_add.jpg",
    city: 0,
    category: "2",
  },
  {
    id: 0,
    title: "District & Session Court Khushab Jobs April 2021",
    description:
      "Stenographer, Computer Operator, Computer Hardware Technician, Junior Clerk, Imam Masjid, Khadim Masjid, Electrician, Cook with complete details are available here for desirous individuals. The District & Session Court Khushab is offering the jobs which belong to Judiciary. The working hours are as per routine i.e. 8 hours a day and 40 hours a week. The job location is PUNJAB Khushab. The persons meeting the requirement of vacant post(s) may enjoy salary of 0. The most important thing is that the applications must be complete and should receive upto April 26, 2021. The advertisement of District & Session Court Khushab contains complete information about job specifications, job description etc. which is published in Jang Newspaper dated April 1st, 2021, Thursday.",
    posted_on: "28-Aug-2021",
    deadline: "28-09-2021",
    imgSrc: "/assets/dummy_add.jpg",
    city: 0,
    category: "2",
  },
  {
    id: 0,
    title: "District & Session Court Khushab Jobs April 2021",
    description:
      "Stenographer, Computer Operator, Computer Hardware Technician, Junior Clerk, Imam Masjid, Khadim Masjid, Electrician, Cook with complete details are available here for desirous individuals. The District & Session Court Khushab is offering the jobs which belong to Judiciary. The working hours are as per routine i.e. 8 hours a day and 40 hours a week. The job location is PUNJAB Khushab. The persons meeting the requirement of vacant post(s) may enjoy salary of 0. The most important thing is that the applications must be complete and should receive upto April 26, 2021. The advertisement of District & Session Court Khushab contains complete information about job specifications, job description etc. which is published in Jang Newspaper dated April 1st, 2021, Thursday.",
    posted_on: "28-Aug-2021",
    deadline: "28-09-2021",
    imgSrc: "/assets/dummy_add.jpg",
    city: 0,
    category: "2",
  },
];

posts.forEach((post) => {
  tableBody.append(constructTableRow(post));
});
