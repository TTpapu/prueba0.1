const mediaData = {
    "2016": {
        "12": [
            { type: "video", path: "memes/2016/diciembre/2016_diciembre.webm", format: "webm" },
        ],
        "1": [
            { type: "video", path: "memes/2016/enero/2016_enero.avi", format: "avi" },
        ],
        "2": [
            { type: "video", path: "memes/2016/febrero/2016_febrero.mkv", format: "mkv" },
        ],
        "5": [
            { type: "video", path: "memes/2016/mayo/2016_mayo.mov", format: "mov" },
        ],
        "3": [
            { type: "video", path: "memes/2019/marzo/2019_marzo.wmv", format: "wmv" },
        ]
    }
};

document.addEventListener("DOMContentLoaded", function () {
    function loadMedia() {
        const contentSection = document.querySelector("body");

        Object.keys(mediaData).forEach(year => {
            Object.keys(mediaData[year]).forEach(month => {
                mediaData[year][month].forEach(file => {
                    if (file.type === "video") {
                        let videoType;
                        switch (file.format) {
                            case 'avi': videoType = 'video/x-msvideo'; break;
                            case 'mkv': videoType = 'video/x-matroska'; break;
                            case 'mov': videoType = 'video/quicktime'; break;
                            case 'wmv': videoType = 'video/x-ms-wmv'; break;
                            case 'webm': videoType = 'video/webm'; break;
                            default: videoType = 'video/mp4'; // defaulting to mp4
                        }
                        contentSection.innerHTML += `
                            <video width="640" height="480" controls>
                                <source src="${file.path}" type="${videoType}">
                                Tu navegador no soporta el formato ${file.format.toUpperCase()}.
                            </video>
                        `;
                    }
                });
            });
        });
    }

    loadMedia();
});
