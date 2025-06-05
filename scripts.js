// Seleccionar elemento del input y botones
const searchInput = document.querySelector('input[type="text"]');
const searchButton = document.querySelector('.search-btn');
const googleButton = document.querySelectorAll('button')[0]; // "Buscar con Google"
const luckyButton = document.querySelectorAll('button')[1]; // "Me siento con suerte"

// Función para realizar la búsqueda en Google
function searchGoogle() {
    const query = encodeURIComponent(searchInput.value.trim());
    if (query) {
        window.location.href = `https://www.google.com/search?q=${query}`;
    }
}

// Evento para presionar Enter en la barra de búsqueda
searchInput.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        searchGoogle();
    }
});

// Evento para hacer clic en los botones
searchButton.addEventListener('click', searchGoogle);
googleButton.addEventListener('click', searchGoogle);

// La función para "Me siento con suerte" puede ser implementada también si quieres
// Por ejemplo, redirigir a un resultado aleatorio o a un código especial
