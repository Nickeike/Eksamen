// Funksjon for å vise programmet for lanseringsfesten
window.onload = () => {
    // Hentar elementet der programmet skal visast
    const programElement = document.querySelector('ul');

    // Liste over programmet
    const program = [
        'Kl. 17:00 - Velkomst',
        'Kl. 17:30 - Presentasjon av nettsidene',
        'Kl. 18:00 - Servering og sosialt samvær',
        'Kl. 20:00 - Avslutning'
    ];

    // Legg til programmet som listeelement
    program.forEach(item => {
        const li = document.createElement('li'); // Opprettar eit nytt listeelement
        li.textContent = item; // Set tekstinnhaldet
        programElement.appendChild(li); // Legg til listeelementet i ul
    });

    console.log('Programmet for lanseringsfesten er lasta inn.'); // Loggar melding
};