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
/*
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

*/

// Definir las notas y sus sonidos en un objeto
const notiFiles = {
    'DO-4': './Sounds/DO-4.wav',
    'RE-4': './Sounds/RE-4.wav',
    'MI-4': './Sounds/MI-4.wav',
    'FA-4': './Sounds/FA-4.wav',
    'SOL-4': './Sounds/SOL-4.wav',
    'LA-4': './Sounds/LA-4.wav',
    'SI-4': './Sounds/SI-4.wav',
    'DO-5': './Sounds/DO-5.wav',
    // Si es necesario, puedes agregar más notas aquí
};

// Función para reproducir un acorde usando múltiples notas
function playChord(notes) {
    const sounds = notes.map(note => new Audio(notiFiles[note])); // Crear un array de audios

    // Reproducir todas las notas al mismo tiempo
    sounds.forEach(sound => sound.play().catch(error => console.log('Error al reproducir el acorde:', error)));
}

// Función para reproducir el acorde DO MAYOR
function playDOmayor() {
    // El acorde de DO Mayor está formado por las notas DO-4, MI-4 y SOL-4
    playChord(['DO-4', 'MI-4', 'SOL-4']);
}

// Función para reproducir el acorde RE menor
function playREmenor() {
    // El acorde de RE Menor está formado por las notas RE-4, FA-4 y LA-4
    playChord(['RE-4', 'FA-4', 'LA-4']);
}

// Función para reproducir el acorde MI menor
function playMImenor() {
    // El acorde de MI menor está formado por las notas MI-4, SOL-4 y SI-4
    playChord(['MI-4', 'SOL-4', 'SI-4']);
}

// Función para reproducir el acorde FA mayor
function playFAMAYOR() {
    // El acorde de FA MAYOR está formado por las notas FA-4, LA-4 y DO-4
    playChord(['FA-4', 'LA-4', 'DO-4']);
}

// Función para reproducir el acorde SOL MAYOR
function playSOLMAYOR() {
    // El acorde de SOL MAYOR está formado por las notas SOL-4, SI-4 y RE-4
    playChord(['SOL-4', 'SI-4', 'RE-4']);
}

// Función para reproducir el acorde LA menor
function playLAmenor() {
    // El acorde de LA menor está formado por las notas LA-4, DO-4 y MI-4
    playChord(['LA-4', 'DO-4', 'MI-4']);
}

// Función para reproducir el acorde SI disminuido
function playSIdisminuido() {
    // El acorde de SI disminuido está formado por las notas SI-4, RE-4 y FA-4
    playChord(['SI-4', 'RE-4', 'FA-4']);
}


// Ejemplo de uso:
//  playDoMayor(),playREmenor(),playMImenor(),playFAMAYOR(),playSOLMAYOR(),playLAmenor(),playSIdisminuido(); // Llamar a esta función para reproducir el acorde de DO Mayor

//////////////////////

let intentos = 0;
const maxIntentos = 10;
let resultadosSecuencia = [];  // Guardará la secuencia aleatoria generada
let respuestasIncorrectas = 0; // Contador de respuestas incorrectas

// Función para iniciar el ejercicio de forma aleatoria
function iniciarEjercicio() {
    const gradosSeleccionados = getGradosSeleccionados();
    if (gradosSeleccionados.length === 0) {
        alert('Por favor, seleccione al menos un grado.');
        return;
    }

    // Generar una secuencia aleatoria de grados seleccionados
    const secuencia = generarSecuenciaAleatoria(gradosSeleccionados);
    resultadosSecuencia = secuencia;
    reproducirSecuencia(secuencia);  // Reproducir la secuencia automáticamente
}

// Función para obtener los grados seleccionados
function getGradosSeleccionados() {
    const grados = [];
    document.querySelectorAll('input[type="checkbox"]:checked').forEach(checkbox => {
        grados.push(checkbox.value);
    });
    return grados;
}

// Función para generar una secuencia aleatoria de grados seleccionados
function generarSecuenciaAleatoria(gradosSeleccionados) {
    const secuencia = [];
    for (let i = 0; i < maxIntentos; i++) {
        const gradoAleatorio = gradosSeleccionados[Math.floor(Math.random() * gradosSeleccionados.length)];
        secuencia.push(gradoAleatorio);
    }
    return secuencia;
}

// Función para reproducir la secuencia de grados aleatorios
function reproducirSecuencia(secuencia) {
    const audioMap = {
        "I": playDoMayor,   // Función para Do Mayor
        "II": playREmenor,  // Función para Re Menor
        "III": playMImenor, // Función para Mi Menor
        "IV": playFAMAYOR,  // Función para Fa Mayor
        "V": playSOLMAYOR,  // Función para Sol Mayor
        "VI": playLAmenor,  // Función para La Menor
        "VII": playSIdisminuido // Función para Si Disminuido
    };

    let currentIndex = 0;

    function playNextChord() {
        if (currentIndex < secuencia.length) {
            const grado = secuencia[currentIndex];
            audioMap[grado](); // Llamamos a la función correspondiente
            currentIndex++;
            // Continuar al siguiente acorde cuando termine el actual
            setTimeout(playNextChord, 1000); // Pausa de 1 segundo entre acordes
        } else {
            // Una vez que la secuencia haya sido reproducida, mostrar las opciones
            mostrarOpciones(secuencia);
        }
    }

    // Iniciar la reproducción
    playNextChord();
}

// Función para mostrar las opciones de grados para elegir después de reproducir la secuencia
function mostrarOpciones(secuencia) {
    const opcionesList = document.getElementById('opciones');
    opcionesList.innerHTML = '';  // Limpiar opciones anteriores

    secuencia.forEach((grado, index) => {
        const button = document.createElement('button');
        button.textContent = `Selecciona el grado: ${grado}`;
        button.onclick = function() {
            verificarRespuesta(grado, index);  // Verificar si la respuesta es correcta
        };
        opcionesList.appendChild(button);
    });
}

// Función para verificar la respuesta seleccionada
function verificarRespuesta(seleccion, intentoIndex) {
    const esCorrecto = resultadosSecuencia[intentoIndex] === seleccion;

    if (esCorrecto) {
        alert('¡Correcto!');
    } else {
        alert('Incorrecto. El grado correcto era ' + resultadosSecuencia[intentoIndex]);
        respuestasIncorrectas++;
    }

    // Verificar si se completaron todos los intentos
    intentos++;
    if (intentos === maxIntentos) {
        mostrarResultadoFinal();
    }
}

// Función para mostrar los resultados finales
function mostrarResultadoFinal() {
    alert(`El ejercicio ha terminado. Respuestas incorrectas: ${respuestasIncorrectas} de ${maxIntentos}.`);
    // Resetear para el siguiente intento
    intentos = 0;
    respuestasIncorrectas = 0;
    resultadosSecuencia = [];

    // Limpiar las opciones para que el usuario pueda reiniciar el ejercicio
    document.getElementById('opciones').innerHTML = '';
}



























function generarSecuenciaAleatoria(gradosSeleccionados) {
    const secuencia = [];
    let gradosDisponibles = []; // Copia de los grados disponibles
    for (let i = 0; i < maxIntentos; i++) {
        // Asegurarse de que no se repitan los grados
        const gradoAleatorio = gradosDisponibles.splice(Math.floor(Math.random() * gradosDisponibles.length), 1)[0];
        secuencia.push(gradoAleatorio);
    }
    return secuencia;
}

function playNextChord() {
    if (currentIndex < secuencia.length) {
        const grado = secuencia[currentIndex];
        audioMap[grado](); // Llamamos a la función correspondiente
        currentIndex++;
        // Ajustar la pausa según la duración de la nota
        setTimeout(playNextChord, 1500); // Ajuste de tiempo
    } else {
        mostrarOpciones(secuencia);
    }
}
