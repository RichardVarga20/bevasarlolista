document.getElementById('searchInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Megakadályozza az alapértelmezett Enter funkciót

        var inputText = this.value.trim(); // Az input szövegének eltávolítása a felesleges szóközökről

        if (inputText) { // Csak akkor hajtsa végre, ha nem üres
            var displayTextDiv = document.getElementById('displayText');
            var newParagraph = document.createElement('p');
            newParagraph.textContent = inputText;
            displayTextDiv.appendChild(newParagraph);
            
            this.value = ''; // Törli a beviteli mezőt
        }
    }
});
