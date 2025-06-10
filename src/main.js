// Funksjon for å handtere påmelding til lanseringsfest
document.getElementById('meld-paa-knapp').addEventListener('click', () => {
    // Viser ei melding når brukaren melder seg på
    alert('Takk for påmeldinga! Me ser fram til å sjå deg på lanseringsfesten.');
});

// Funksjon for å legge til dynamisk innhald (kan utvidast)
window.onload = () => {
    console.log('Nettsida er lasta inn.');
};

// Funksjon for å bytte mellom lys og mørk modus
document.getElementById('dark-mode-toggle').addEventListener('click', () => {
    // Bytt mellom å legge til og fjerne klassen "dark-mode" på body
    document.body.classList.toggle('dark-mode');

    // Oppdater teksten på knappen basert på modus
    const button = document.getElementById('dark-mode-toggle');
    if (document.body.classList.contains('dark-mode')) {
        button.textContent = 'Bytt til lys modus';
    } else {
        button.textContent = 'Bytt til mørk modus';
    }
});