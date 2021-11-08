// Recommendations carousel

const image = document.querySelector('#img-referee');
const author = document.querySelector('#name');
const jobTitle = document.querySelector('#job-title');
const recommendationText = document.querySelector('#recommendation-text');
const btnPrevious = document.querySelector('#btn-previous');
const btnNext = document.querySelector('#btn-next');

// recommendations card content
const recommendations = [
    {
        id: 1,
        img: "images/person1.jpeg",
        name: 'Susan Smith',
        job: 'Web Developer',
        text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam exercitationem nisi fuga beatae neque magnam ipsum eaque blanditiis id quidem iste, cupiditate perspiciatis excepturi doloremque modi voluptates. Itaque, incidunt ut.',
    },
    {
        id: 2,
        img: "images/person3.jpeg",
        name: 'Roland Bloom',
        job: 'DevOps Engineer',
        text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam exercitationem nisi fuga beatae neque magnam ipsum eaque blanditiis id quidem iste, cupiditate perspiciatis excepturi doloremque modi voluptates. Itaque, incidunt ut.',
    },
    {
        id: 3,
        img: "images/person2.jpeg",
        name: 'Kathy Jones',
        job: 'UX Designer',
        text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam exercitationem nisi fuga beatae neque magnam ipsum eaque blanditiis id quidem iste, cupiditate perspiciatis excepturi doloremque modi voluptates. Itaque, incidunt ut.',
    },
    {
        id: 4,
        img: "images/person4.jpeg",
        name: 'Brad Moore',
        job: 'Python developer',
        text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam exercitationem nisi fuga beatae neque magnam ipsum eaque blanditiis id quidem iste, cupiditate perspiciatis excepturi doloremque modi voluptates. Itaque, incidunt ut.',
    },
];

// set starting item
let currentItem = 0;

// load initial item
document.addEventListener('DOMContentLoaded', function () {
    showOtherPerson(currentItem);
});

// show previous or next person
function showOtherPerson(person) {
    const newItem = recommendations[person];
    image.src = newItem.img;
    author.innerText = newItem.name;
    jobTitle.innerText = newItem.job;
    recommendationText.innerText = newItem.text;
};

// show previous recommendation
btnPrevious.addEventListener('click', function () {
    currentItem--;
    if (currentItem < 0) {
        currentItem = recommendations.length - 1
    };
    showOtherPerson(currentItem);
})

// show next recommendation
btnNext.addEventListener('click', function () {
    currentItem++;
    if (currentItem > recommendations.length - 1) {
        currentItem = 0;
    };
    showOtherPerson(currentItem);
})





