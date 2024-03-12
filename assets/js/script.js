let ratings = document.querySelectorAll('.one');
let currentRatingResultContent = document.querySelector('.currentRatingResult')

// sikrer at når bruger klikker på en af knapperne, ændres stilen på knapperne i overensstemmelse med den valgte bedømmelse, og den valgte bedømmelse gemmes i localStorage
let selectedRating = sessionStorage.getItem('selectedRating');
if (selectedRating) {
    currentRatingResultContent.innerHTML = `<div class="currentRatingResult"><p>You selected ${selectedRating} out of 5</p></div>`;
}

//Loop igennem ratings med foreach
ratings.forEach(function(rating) {
    //tilføjer en addeventListener efter klik.
    rating.addEventListener('click', function() {
        //looper igennem knapperne. Fjener backgroundColor og Color på de ikke valgte knapper  
        ratings.forEach(function(otherRating){
            otherRating.style.backgroundColor = "";
            otherRating.style.color = "";
        });
        //tildeler den valgte knap den rigtig styling
        this.style.backgroundColor = '#fb7413';
        this.style.color = '#ffffff';

        // Vælger indholdet af det "clickede" element
        let selectedRating = this.textContent;

        sessionStorage.setItem('selectedRating', selectedRating);
    });
});





