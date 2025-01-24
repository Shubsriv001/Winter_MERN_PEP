const events = [
    {
        title: "Welcome Week",
        description: "Kick off the year with fun activities and events for new students.",
    },
    {
        title: "Club Fair",
        description: "Explore different student clubs and organizations on campus.",
    },
    {
        title: "Career Fair",
        description: "Network with potential employers and learn about career opportunities.",
    },
    {
        title: "Homecoming Game",
        description: "Cheer on the school's football team at the annual homecoming game.",
    },
    {
        title: "Fall Festival",
        description: "Enjoy seasonal festivities, food, and music at the fall festival.",
    },
    {
        title: "Guest Speaker Series",
        description: "Hear from influential figures in various fields.",
    },
    {
        title: "Study Abroad Fair",
        description: "Learn about study abroad programs and opportunities.",
    },
    {
        title: "Volunteer Day",
        description: "Give back to the community by participating in a volunteer event.",
    },
    {
        title: "Spring Concert",
        description: "Enjoy live music performances by student and professional artists.",
    },
];

const headings = document.querySelectorAll("h2");
const paras = document.querySelectorAll("p");

for (let i = 0; i < events.length; i++) {
    headings[i].innerText = events[i].title;
    paras[i].innerText = events[i].description;
}

// const cards = document.querySelectorAll(".card");
// for (let i = 0; i < events.length; i++) {
//     if (cards[i]) {
//         cards[i].querySelector("h2").textContent = events[i].title;
//         cards[i].querySelector("p").textContent = events[i].description;
//     }
// }
