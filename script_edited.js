document.addEventListener("DOMContentLoaded", function () {
    // Päivittää headerin ja footerin
    document.querySelector("header").innerHTML = `
        <h1>Lampulan Ringette ry</h1>
        <nav>
            <ul>
                <li><a href="index.html">Etusivu</a></li>
                <li><a href="events.html">Tapahtumat</a></li>
                <li><a href="contact.html">Yhteystiedot</a></li>
            </ul>
        </nav>
    `;

    document.querySelector("footer").innerHTML = `
        <p>&copy; 2025 Lampulan Ringette ry</p>
    `;

    // Tapahtumalista (esimerkkidata)
    const events = [
        { date: "2025-04-05", time: "18:00", title: "Harjoitukset - Jäähalli 1" },
        { date: "2025-04-12", time: "16:30", title: "Ottelu: Lampula vs. Naapurin kissa" },
        { date: "2025-04-19", time: "17:00", title: "Harjoitukset - Jäähalli 2" },
        { date: "2025-04-26", time: "15:00", title: "Ottelu: Lampula vs. Naapurin koira" }
    ];

    // Lisää tapahtumat HTML:ään
    const eventList = document.getElementById("event-list");
    if (eventList) {
        events.forEach(event => {
            const listItem = document.createElement("li");
            listItem.textContent = `${event.date} klo ${event.time} - ${event.title}`;
            eventList.appendChild(listItem);
        });
    }
});
