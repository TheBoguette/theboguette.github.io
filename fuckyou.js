const startDate = new Date('2019-09-28'); 
const initialYears = 1; 
function updatePianoYears() {
    const currentDate = new Date();
    const diffTime = currentDate - startDate;
    const diffYears = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 365.25));
    const totalYears = initialYears + diffYears;
    
    const yearsElement = document.getElementById('pianoYears');
    if (yearsElement) {
        yearsElement.textContent = totalYears;
    }
}

// Update immediately and then every day
updatePianoYears();
setInterval(updatePianoYears, 24 * 60 * 60 * 1000);

