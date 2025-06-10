// Funksjon for å handtere påmelding til lanseringsfest
document.getElementById('meld-paa-knapp')?.addEventListener('click', () => {
    alert('Takk for påmeldinga! Me ser fram til å sjå deg på lanseringsfesten.');
});

// Funksjon for å legge til dynamisk innhald ved lasting av nettsida
window.onload = () => {
    console.log('Nettsida er lasta inn.');
};

// Funksjon for å handtere innsending av kontaktskjemaet
const contactForm = document.getElementById('contact-form');
contactForm?.addEventListener('submit', (event) => {
    // Forhindre at sida lastar på nytt når skjemaet blir sendt inn
    event.preventDefault();

    // Hent verdiane frå skjemaet
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Skriv ei melding i konsollen for å bekrefte innsendinga
    console.log(`Skjema sendt inn av: ${name} (${email})`);
    console.log(`Melding: ${message}`);

    // Vis ei enkel melding til brukaren
    alert('Takk for meldingen! Vi vil kontakte deg snart.');

    // Nullstill skjemaet
    contactForm.reset();
});

