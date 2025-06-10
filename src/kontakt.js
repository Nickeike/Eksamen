// Funksjon for å vise ei melding når brukaren sender ei førespurnad
document.getElementById('send-forespurnad-knapp').addEventListener('click', () => {
    // Viser ei melding til brukaren
    alert('Takk for at du kontaktar oss! Me vil svare deg så snart som mogleg.');
});

// Funksjon for å laste inn teammedlemmar dynamisk
window.onload = () => {
    // Hentar elementet der teammedlemmar skal visast
    const teamElement = document.querySelector('.team');

    // Liste over teammedlemmar
    const team = [
        { namn: 'Anna Hansen', rolle: 'Rektor', bilete: '../bilder/rektor.jpg' },
        { namn: 'Jonas Berg', rolle: 'Administrator', bilete: '../bilder/administrator.jpg' },
        { namn: 'Maria Olsen', rolle: 'Lærar', bilete: '../bilder/larar.jpg' }
    ];

    // Legg til teammedlemmar som kort
    team.forEach(member => {
        const div = document.createElement('div'); // Opprettar eit nytt div-element
        div.className = 'team-member'; // Set klassen for styling

        const img = document.createElement('img'); // Opprettar biletelement
        img.src = member.bilete; // Set bilete
        img.alt = member.rolle; // Set alternativ tekst
        img.className = 'team-image'; // Set klassen for styling

        const h3 = document.createElement('h3'); // Opprettar overskrift
        h3.textContent = member.rolle; // Set rolle

        const p = document.createElement('p'); // Opprettar avsnitt
        p.textContent = member.namn; // Set namn

        div.appendChild(img); // Legg til bilete
        div.appendChild(h3); // Legg til overskrift
        div.appendChild(p); // Legg til avsnitt
        teamElement.appendChild(div); // Legg til teammedlemmet i teamseksjonen
    });

    console.log('Teammedlemmar er lasta inn.'); // Loggar melding
};