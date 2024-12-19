let budget = parseInt(localStorage.getItem('budget')) || 300; 
let attivitaAcquistate = JSON.parse(localStorage.getItem('attivitaAcquistate')) || [];

document.getElementById('budget').textContent = budget;

function acquista(prezzo, nomeAttivita) {
    if (budget >= prezzo) {
        budget -= prezzo; 
        attivitaAcquistate.push(nomeAttivita); 
        localStorage.setItem('budget', budget);
        localStorage.setItem('attivitaAcquistate', JSON.stringify(attivitaAcquistate));
        alert("Hai acquistato " + nomeAttivita);
        document.getElementById('budget').textContent = budget; 
    } else {
        alert("Non hai abbastanza monete per questa attività.");
    }
}

function modificaMonete(quantita) {
    budget += quantita; 
    localStorage.setItem('budget', budget);
    document.getElementById('budget').textContent = budget; 
}

if (window.location.pathname.includes('admin.html')) {
    document.getElementById('budget').textContent = budget;
    let listaAttivita = document.getElementById('attivita-acquistate');
    attivitaAcquistate.forEach(attivita => {
        let li = document.createElement('li');
        li.textContent = attivita;
        listaAttivita.appendChild(li);
    });
}
