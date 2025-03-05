document.addEventListener("DOMContentLoaded", function () {
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
});
