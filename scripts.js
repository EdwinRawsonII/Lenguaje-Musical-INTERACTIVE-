const pianoKeys = document.querySelectorAll('.piano div'); // Todas las teclas
const playRandomNoteButton = document.getElementById('play-random-note');
const repeatNoteButton = document.getElementById('repeat-note');
const toggleExerciseButton = document.getElementById('switch-label');

const notes = ['DO4', 'DO-sostenido-4', 'RE-4', 'RE-sostenido-4', 'MI-4', 'FA-4', 'FA-sostenido-4', 'SOL-4', 'SOL-sostenido-4', 'LA-4', 'LA-sostenido-4', 'SI-4', 'DO-5'];
let currentNote = null;
let lastPlayedNote = null;
let exerciseActive = true;

function playSound(note) {
    const sound = new Audio(`Sounds/${note}.wav`);
    sound.play();
    lastPlayedNote = note;
}

function getRandomNote() {
    return notes[Math.floor(Math.random() * notes.length)];
}

playRandomNoteButton.addEventListener('click', () => {
    if (exerciseActive) {
        currentNote = getRandomNote();
        playSound(currentNote);
    }
});

repeatNoteButton.addEventListener('click', () => {
    if (exerciseActive && lastPlayedNote) {
        playSound(lastPlayedNote);
    }
});

toggleExerciseButton.addEventListener('click', () => {
    exerciseActive = !exerciseActive;
    toggleExerciseButton.textContent = exerciseActive ? 'Desactivar Ejercicio' : 'Activar Ejercicio';
});

// Aquí, asociamos la acción de tocar la tecla al hacer clic en ella.
pianoKeys.forEach(key => {
    key.addEventListener('click', () => {
        const selectedNote = key.dataset.note;
        playSound(selectedNote);

        // Solo hacer la verificación del ejercicio si está activado
        if (exerciseActive) {
            if (selectedNote === currentNote) {
                alert('¡Correcto!');
            } else {
                alert('Incorrecto. La nota correcta era: ' + currentNote);
            }
        }
    });
});



// Función para buscar libros por título
function searchBooks() {
    const input = document.getElementById('search').value.toLowerCase();
    const books = document.getElementsByClassName('book');
    
    Array.from(books).forEach((book) => {
        const title = book.getAttribute('data-title').toLowerCase();
        const category = book.getAttribute('data-category');
        const selectedCategory = document.getElementById('category').value;
        
        // Mostrar u ocultar el libro según el título y la categoría seleccionada
        if (title.includes(input) && (selectedCategory === 'all' || selectedCategory === category)) {
            book.style.display = '';
        } else {
            book.style.display = 'none';
        }
    });
}

// Función para filtrar libros por categoría
function filterByCategory() {
    const selectedCategory = document.getElementById('category').value;
    const books = document.getElementsByClassName('book');

    Array.from(books).forEach((book) => {
        const category = book.getAttribute('data-category');
        const input = document.getElementById('search').value.toLowerCase();
        const title = book.getAttribute('data-title').toLowerCase();

        // Mostrar u ocultar el libro según la categoría y la búsqueda actual
        if ((selectedCategory === 'all' || selectedCategory === category) && title.includes(input)) {
            book.style.display = '';
        } else {
            book.style.display = 'none';
        }
    });
}

// Función para inicializar la página
function initLibrary() {
    document.getElementById('search').addEventListener('keyup', searchBooks);
    document.getElementById('category').addEventListener('change', filterByCategory);
}

// Inicializar la biblioteca cuando la página haya cargado completamente
document.addEventListener('DOMContentLoaded', initLibrary);

//animacion date
window.onload = function() {
    const logo = document.getElementById('logo');
    const logoContainer = document.querySelector('.logo-container');

    // Animación usando GSAP
    gsap.to(logoContainer, {
        duration: 1,
        opacity: 1,
        y: -50, // Mover hacia arriba
        ease: 'power1.out'
    });

    gsap.to(logo, {
        duration: 1,
        scale: 1.2,
        yoyo: true,
        repeat: -1,
        ease: 'power1.inOut'
    });
};

// Asegúrate de que las rutas de los archivos de audio sean correctas
let audioC = new Audio('./Sounds/acordes/acorde-DO-MAYOR.wav');
let audioD = new Audio('./Sounds/acordes/acorde-RE-menor.wav');
let audioE = new Audio('./Sounds/acordes/acorde-MI-menor.wav');
let audioF = new Audio('./Sounds/acordes/acorde-FA-MAYOR.wav');
let audioG = new Audio('./Sounds/acordes/acorde-SOL-MAYOR.wav');
let audioA = new Audio('./Sounds/acordes/acorde-LA-menor.wav');
let audioB = new Audio('./Sounds/acordes/acorde-SI-disminuido.wav');

// Función para reproducir un acorde./Sounds/acordes/
function playChord(chord) {
    switch(chord) {
        case './Sounds/acordes/acorde-DO-MAYOR':
            audioC.play();
            break;
        case './Sounds/acordes/acorde-RE-menor':
            audioD.play();
            break;
        case './Sounds/acordes/acorde-MI-menor':
            audioE.play();
            break;
        case './Sounds/acordes/acorde-FA-MAYOR':
            audioF.play();
            break;
        case './Sounds/acordes/acorde-SOL-MAYOR':
            audioG.play();
            break;
        case './Sounds/acordes/acorde-LA-menor':
            audioA.play();
            break;
        case './Sounds/acordes/acorde-SI-disminuido':
            audioB.play();
            break;
        default:
            console.log('Acorde no reconocido');
    }
}

// Función para ejecutar la secuencia de acordes
function playProgression() {
    playChord('./Sounds/acordes/acorde-DO-MAYOR');  // Toca el acorde I
    setTimeout(() => playChord('./Sounds/acordes/acorde-RE-menor'), 4000);  // Toca el acorde II después de 4 segundos
    setTimeout(() => playChord('./Sounds/acordes/acorde-MI-menor'), 8000);  // Toca el acorde III después de 8 segundos
    setTimeout(() => playChord('./Sounds/acordes/acorde-FA-MAYOR'), 12000);  // Toca el acorde IV después de 12 segundos
    setTimeout(() => playChord('./Sounds/acordes/acorde-SOL-MAYOR'), 16000);  // Toca el acorde V después de 16 segundos
    setTimeout(() => playChord('./Sounds/acordes/acorde-LA-menor'), 20000); // Toca el acorde VI después de 20 segundos
    setTimeout(() => playChord('./Sounds/acordes/acorde-SI-disminuido'), 24000); // Toca el acorde VII después de 24 segundos
}

// Ejecutar la secuencia cuando se hace clic en el botón
document.getElementById('play-sequence').addEventListener('click', playProgression);
