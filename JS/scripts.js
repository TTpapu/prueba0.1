const mediaData = {
const mediaData = {
const mediaData = {
    "2022": {
        "1": [
            { type: "video", path: "memes/2022/enero/2022_enero.mp4" },
            { type: "audio", path: "memes/2022/enero/audio.mp3" },
            { type: "image", path: "memes/2022/enero/Multimedia.png" }
        ],
        // Agrega los demás meses aquí
    },
    "2023": {
        // Estructura similar para 2023
    }
};

document.addEventListener("DOMContentLoaded", function () {
    const yearLinks = document.querySelectorAll("#year-menu a");
    const monthMenu = document.getElementById("month-menu");
    const contentSection = document.getElementById("content");

    const months = [
        "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
        "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
    ];

    yearLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const year = e.target.dataset.year;

            // Limpia el menú de meses y el contenido
            monthMenu.innerHTML = `<h2>${year}</h2>`;
            contentSection.innerHTML = ''; // Limpiar contenido previo
            const ul = document.createElement("ul");

            months.forEach((month, index) => {
                const li = document.createElement("li");
                li.innerHTML = `<a href="#" data-year="${year}" data-month="${index + 1}">${month}</a>`;
                ul.appendChild(li);
            });

            monthMenu.appendChild(ul);

            // Agregar evento para cada mes
            const monthLinks = ul.querySelectorAll("a");
            monthLinks.forEach(monthLink => {
                monthLink.addEventListener("click", function (e) {
                    e.preventDefault();
                    const selectedYear = e.target.dataset.year;
                    const selectedMonth = e.target.dataset.month;

                    // Cargar memes o videos para el mes seleccionado
                    loadMedia(selectedYear, selectedMonth);
                });
            });
        });
    });

    function loadMedia(year, month) {
        const monthData = mediaData[year] && mediaData[year][month];

        contentSection.innerHTML = ''; // Limpiar contenido previo

        if (!monthData || monthData.length === 0) {
            contentSection.innerHTML = `
                <p>Estamos trabajando en eso.</p>
                <img src="constructor.jpg" alt="Constructores" width="400">
                <p>Aún nos falta información por poner. Recuerda que todavía es una versión beta. ¡Gracias por visitarnos!</p>
            `;
            return;
        }

        monthData.forEach(file => {
            if (file.type === "video") {
                contentSection.innerHTML += `
                    <video width="400" controls>
                        <source src="${file.path}" type="video/mp4">
                        Tu navegador no soporta la etiqueta de video.
                    </video>
                `;
            } else if (file.type === "audio") {
                contentSection.innerHTML += `
                    <audio controls>
                        <source src="${file.path}" type="audio/mp3">
                        Tu navegador no soporta la etiqueta de audio.
                    </audio>
                `;
            } else if (file.type === "image") {
                contentSection.innerHTML += `
                    <img src="${file.path}" alt="Imagen" width="400">
                `;
            }
        });
    }
});
